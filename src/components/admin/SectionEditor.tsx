'use client';

import { useState } from 'react';
import { Section, SectionType, Media } from '@/types';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import ImagePicker from './ImagePicker';

interface SectionEditorProps {
  section?: Partial<Section>;
  pageId?: number;
  onSave: (data: Partial<Section>) => Promise<void>;
  onCancel: () => void;
}

const SECTION_TYPES: { value: SectionType; label: string }[] = [
  { value: 'hero', label: 'Hero' },
  { value: 'about', label: 'About' },
  { value: 'services', label: 'Services' },
  { value: 'testimonials', label: 'Testimonials' },
  { value: 'cta', label: 'Call to Action' },
  { value: 'gallery', label: 'Gallery' },
  { value: 'text', label: 'Text Block' },
  { value: 'stats', label: 'Stats' },
  { value: 'team', label: 'Team' },
  { value: 'faq', label: 'FAQ' },
  { value: 'contact', label: 'Contact' },
  { value: 'custom', label: 'Custom' },
];

export default function SectionEditor({ section, pageId, onSave, onCancel }: SectionEditorProps) {
  const [formData, setFormData] = useState<Partial<Section>>({
    section_key: '',
    title: '',
    subtitle: '',
    content: '',
    section_type: 'custom',
    is_visible: true,
    sort_order: 0,
    page_id: pageId,
    ...section,
  });
  const [saving, setSaving] = useState(false);
  const [showImagePicker, setShowImagePicker] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave(formData);
    } finally {
      setSaving(false);
    }
  };

  const handleImageSelect = (media: Media) => {
    // Insert image URL into content JSON or as a separate field
    try {
      const current = formData.content ? JSON.parse(formData.content) : {};
      current.image = `/uploads/${media.filename}`;
      current.imageAlt = media.alt_text || media.original_name;
      setFormData((prev) => ({ ...prev, content: JSON.stringify(current, null, 2) }));
    } catch {
      setFormData((prev) => ({ ...prev, content: JSON.stringify({ image: `/uploads/${media.filename}` }, null, 2) }));
    }
    setShowImagePicker(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Section Key"
          value={formData.section_key || ''}
          onChange={(e) => setFormData((p) => ({ ...p, section_key: e.target.value }))}
          placeholder="e.g. hero, about-intro"
          required
          hint="Unique identifier for this section"
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Section Type <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.section_type || 'custom'}
            onChange={(e) => setFormData((p) => ({ ...p, section_type: e.target.value as SectionType }))}
            className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {SECTION_TYPES.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>
      </div>

      <Input
        label="Title"
        value={formData.title || ''}
        onChange={(e) => setFormData((p) => ({ ...p, title: e.target.value }))}
        placeholder="Section title"
      />

      <Input
        label="Subtitle"
        value={formData.subtitle || ''}
        onChange={(e) => setFormData((p) => ({ ...p, subtitle: e.target.value }))}
        placeholder="Section subtitle"
      />

      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="block text-sm font-medium text-gray-700">Content (JSON)</label>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setShowImagePicker(true)}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Pick Image
          </Button>
        </div>
        <textarea
          value={formData.content || ''}
          onChange={(e) => setFormData((p) => ({ ...p, content: e.target.value }))}
          rows={8}
          placeholder='{"key": "value"}'
          className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="mt-1 text-xs text-gray-500">JSON format for flexible content storage</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Sort Order"
          type="number"
          value={String(formData.sort_order ?? 0)}
          onChange={(e) => setFormData((p) => ({ ...p, sort_order: parseInt(e.target.value) || 0 }))}
        />
        <div className="flex items-center gap-3 pt-6">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={formData.is_visible ?? true}
              onChange={(e) => setFormData((p) => ({ ...p, is_visible: e.target.checked }))}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-700">Visible</span>
          </label>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button type="submit" loading={saving}>
          {section?.id ? 'Save Changes' : 'Create Section'}
        </Button>
      </div>

      {showImagePicker && (
        <ImagePicker
          onSelect={handleImageSelect}
          onClose={() => setShowImagePicker(false)}
        />
      )}
    </form>
  );
}
