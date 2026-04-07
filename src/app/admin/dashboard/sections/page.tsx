'use client';

import { useState, useEffect, useCallback } from 'react';
import Button from '@/components/ui/Button';
import Table from '@/components/ui/Table';
import Modal from '@/components/ui/Modal';
import SectionEditor from '@/components/admin/SectionEditor';
import { Section, SectionWithPage, Page } from '@/types';

export default function SectionsManagerPage() {
  const [sections, setSections] = useState<SectionWithPage[]>([]);
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingSection, setEditingSection] = useState<Section | null>(null);
  const [selectedPageId, setSelectedPageId] = useState<number | undefined>(undefined);
  const [deleting, setDeleting] = useState<number | null>(null);
  const [filterPageId, setFilterPageId] = useState<string>('');

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const url = filterPageId ? `/api/sections?page_id=${filterPageId}` : '/api/sections';
      const [sectionsRes, pagesRes] = await Promise.all([
        fetch(url),
        fetch('/api/pages'),
      ]);
      const [sectionsData, pagesData] = await Promise.all([
        sectionsRes.json(),
        pagesRes.json(),
      ]);
      if (sectionsData.success) setSections(sectionsData.data || []);
      if (pagesData.success) {
        const pageList: Page[] = pagesData.data || [];
        setPages(pageList);
        if (!selectedPageId && pageList.length > 0) {
          setSelectedPageId(pageList[0].id);
        }
      }
    } finally {
      setLoading(false);
    }
  }, [filterPageId, selectedPageId]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const openCreate = () => {
    setEditingSection(null);
    setModalOpen(true);
  };

  const openEdit = (section: Section) => {
    setEditingSection(section);
    setSelectedPageId(section.page_id);
    setModalOpen(true);
  };

  const handleSave = async (data: Partial<Section>) => {
    const payload = { ...data, page_id: editingSection ? editingSection.page_id : selectedPageId };
    const url = editingSection ? `/api/sections/${editingSection.id}` : '/api/sections';
    const method = editingSection ? 'PUT' : 'POST';
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const result = await res.json();
    if (result.success) {
      setModalOpen(false);
      fetchData();
    } else {
      throw new Error(result.error || 'Save failed');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this section?')) return;
    setDeleting(id);
    try {
      await fetch(`/api/sections/${id}`, { method: 'DELETE' });
      fetchData();
    } finally {
      setDeleting(null);
    }
  };

  const toggleVisibility = async (section: SectionWithPage) => {
    await fetch(`/api/sections/${section.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_visible: !section.is_visible }),
    });
    fetchData();
  };

  const columns = [
    { key: 'page_title', header: 'Page', render: (row: SectionWithPage) => (
      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{row.page_title}</span>
    )},
    { key: 'section_key', header: 'Key', render: (row: SectionWithPage) => (
      <code className="text-xs bg-gray-100 px-2 py-1 rounded">{row.section_key}</code>
    )},
    { key: 'title', header: 'Title', render: (row: SectionWithPage) => (
      <span className="font-medium text-gray-900">{row.title || '—'}</span>
    )},
    { key: 'section_type', header: 'Type', render: (row: SectionWithPage) => (
      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded capitalize">{row.section_type}</span>
    )},
    { key: 'sort_order', header: 'Order' },
    { key: 'is_visible', header: 'Visible', render: (row: SectionWithPage) => (
      <button
        onClick={() => toggleVisibility(row)}
        className={`w-9 h-5 rounded-full transition-colors ${row.is_visible ? 'bg-green-500' : 'bg-gray-300'}`}
      >
        <span className={`block w-4 h-4 bg-white rounded-full shadow transition-transform mx-0.5 ${row.is_visible ? 'translate-x-4' : ''}`} />
      </button>
    )},
    { key: 'actions', header: 'Actions', render: (row: SectionWithPage) => (
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
          <h2 className="text-2xl font-bold text-gray-900">Sections</h2>
          <p className="text-gray-500 text-sm mt-1">Manage page sections and content</p>
        </div>
        <Button onClick={openCreate}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Section
        </Button>
      </div>

      {/* Filter */}
      <div className="flex items-center gap-3">
        <label className="text-sm font-medium text-gray-700">Filter by page:</label>
        <select
          value={filterPageId}
          onChange={(e) => setFilterPageId(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Pages</option>
          {pages.map((p) => (
            <option key={p.id} value={p.id}>{p.title}</option>
          ))}
        </select>
      </div>

      <Table
        columns={columns}
        data={sections}
        keyField="id"
        loading={loading}
        emptyMessage="No sections found."
      />

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingSection ? 'Edit Section' : 'New Section'}
        size="lg"
      >
        {!editingSection && (
          <div className="mb-4">
            <label htmlFor="section-page-select" className="block text-sm font-medium text-gray-700 mb-1">
              Page <span className="text-red-500">*</span>
            </label>
            <select
              id="section-page-select"
              value={selectedPageId || ''}
              onChange={(e) => setSelectedPageId(parseInt(e.target.value) || undefined)}
              className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a page</option>
              {pages.map((p) => (
                <option key={p.id} value={p.id}>{p.title}</option>
              ))}
            </select>
          </div>
        )}
        {editingSection && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg text-sm text-gray-600">
            <span className="font-medium">Page:</span>{' '}
            {pages.find((p) => p.id === editingSection.page_id)?.title || `ID ${editingSection.page_id}`}
          </div>
        )}
        <SectionEditor
          section={editingSection || {}}
          pageId={editingSection?.page_id || selectedPageId}
          onSave={handleSave}
          onCancel={() => setModalOpen(false)}
        />
      </Modal>
    </div>
  );
}

