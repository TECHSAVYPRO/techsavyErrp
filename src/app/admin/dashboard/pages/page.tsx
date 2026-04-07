'use client';

import { useState, useEffect, useCallback } from 'react';
import Button from '@/components/ui/Button';
import Table from '@/components/ui/Table';
import Modal from '@/components/ui/Modal';
import Input from '@/components/ui/Input';
import { Page, CreatePageInput } from '@/types';
import { formatDate } from '@/lib/utils';

export default function PagesManagerPage() {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPage, setEditingPage] = useState<Page | null>(null);
  const [deleting, setDeleting] = useState<number | null>(null);
  const [formData, setFormData] = useState<CreatePageInput>({
    title: '',
    slug: '',
    meta_title: '',
    meta_description: '',
    is_published: false,
    sort_order: 0,
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const fetchPages = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/pages');
      const data = await res.json();
      if (data.success) setPages(data.data || []);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchPages(); }, [fetchPages]);

  const openCreate = () => {
    setEditingPage(null);
    setFormData({ title: '', slug: '', meta_title: '', meta_description: '', is_published: false, sort_order: 0 });
    setError('');
    setModalOpen(true);
  };

  const openEdit = (page: Page) => {
    setEditingPage(page);
    setFormData({
      title: page.title,
      slug: page.slug,
      meta_title: page.meta_title || '',
      meta_description: page.meta_description || '',
      is_published: page.is_published,
      sort_order: page.sort_order,
    });
    setError('');
    setModalOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    setError('');
    try {
      const url = editingPage ? `/api/pages/${editingPage.id}` : '/api/pages';
      const method = editingPage ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!data.success) {
        setError(data.error || 'Save failed');
        return;
      }
      setModalOpen(false);
      fetchPages();
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this page? All its sections will also be deleted.')) return;
    setDeleting(id);
    try {
      await fetch(`/api/pages/${id}`, { method: 'DELETE' });
      fetchPages();
    } finally {
      setDeleting(null);
    }
  };

  const autoSlug = (title: string) => {
    if (!editingPage) {
      setFormData((p) => ({ ...p, slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') }));
    }
  };

  const columns = [
    { key: 'title', header: 'Title', render: (row: Page) => (
      <span className="font-medium text-gray-900">{row.title}</span>
    )},
    { key: 'slug', header: 'Slug', render: (row: Page) => (
      <code className="text-xs bg-gray-100 px-2 py-1 rounded">{row.slug}</code>
    )},
    { key: 'is_published', header: 'Status', render: (row: Page) => (
      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${row.is_published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
        {row.is_published ? 'Published' : 'Draft'}
      </span>
    )},
    { key: 'sort_order', header: 'Order' },
    { key: 'created_at', header: 'Created', render: (row: Page) => (
      <span className="text-gray-500 text-xs">{formatDate(row.created_at)}</span>
    )},
    { key: 'actions', header: 'Actions', render: (row: Page) => (
      <div className="flex items-center gap-2">
        <Button size="sm" variant="ghost" onClick={() => openEdit(row)}>Edit</Button>
        <Button size="sm" variant="danger" loading={deleting === row.id} onClick={() => handleDelete(row.id)}>Delete</Button>
      </div>
    )},
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Pages</h2>
          <p className="text-gray-500 text-sm mt-1">Manage website pages</p>
        </div>
        <Button onClick={openCreate}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Page
        </Button>
      </div>

      <Table
        columns={columns}
        data={pages}
        keyField="id"
        loading={loading}
        emptyMessage="No pages yet. Create your first page!"
      />

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingPage ? 'Edit Page' : 'New Page'}
        size="lg"
        footer={
          <>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button loading={saving} onClick={handleSave}>
              {editingPage ? 'Save Changes' : 'Create Page'}
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">{error}</p>
          )}
          <Input
            label="Page Title"
            value={formData.title}
            onChange={(e) => { setFormData((p) => ({ ...p, title: e.target.value })); autoSlug(e.target.value); }}
            placeholder="e.g. Home"
            required
          />
          <Input
            label="Slug"
            value={formData.slug}
            onChange={(e) => setFormData((p) => ({ ...p, slug: e.target.value }))}
            placeholder="e.g. home"
            required
            hint="URL-friendly identifier"
          />
          <Input
            label="Meta Title"
            value={formData.meta_title || ''}
            onChange={(e) => setFormData((p) => ({ ...p, meta_title: e.target.value }))}
            placeholder="SEO title"
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
            <textarea
              value={formData.meta_description || ''}
              onChange={(e) => setFormData((p) => ({ ...p, meta_description: e.target.value }))}
              rows={3}
              placeholder="SEO description"
              className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center gap-4">
            <Input
              label="Sort Order"
              type="number"
              value={String(formData.sort_order ?? 0)}
              onChange={(e) => setFormData((p) => ({ ...p, sort_order: parseInt(e.target.value) || 0 }))}
              className="w-32"
            />
            <label className="flex items-center gap-2 cursor-pointer mt-5">
              <input
                type="checkbox"
                checked={formData.is_published}
                onChange={(e) => setFormData((p) => ({ ...p, is_published: e.target.checked }))}
                className="w-4 h-4 text-blue-600 rounded"
              />
              <span className="text-sm font-medium text-gray-700">Published</span>
            </label>
          </div>
        </div>
      </Modal>
    </div>
  );
}
