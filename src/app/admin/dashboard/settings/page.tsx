'use client';

import { useState, useEffect, useCallback } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { SiteSetting } from '@/types';

const DEFAULT_SETTINGS: { key: string; label: string; type: SiteSetting['setting_type']; description: string }[] = [
  { key: 'site_name', label: 'Site Name', type: 'text', description: 'The name of the website' },
  { key: 'site_tagline', label: 'Tagline', type: 'text', description: 'Short description of the site' },
  { key: 'logo_url', label: 'Logo URL', type: 'image', description: 'URL to the site logo' },
  { key: 'favicon_url', label: 'Favicon URL', type: 'image', description: 'URL to the site favicon' },
  { key: 'contact_email', label: 'Contact Email', type: 'text', description: 'Primary contact email address' },
  { key: 'contact_phone', label: 'Contact Phone', type: 'text', description: 'Primary contact phone number' },
  { key: 'address', label: 'Address', type: 'text', description: 'Physical address' },
  { key: 'facebook_url', label: 'Facebook URL', type: 'text', description: 'Facebook page URL' },
  { key: 'instagram_url', label: 'Instagram URL', type: 'text', description: 'Instagram profile URL' },
  { key: 'twitter_url', label: 'Twitter URL', type: 'text', description: 'Twitter profile URL' },
  { key: 'linkedin_url', label: 'LinkedIn URL', type: 'text', description: 'LinkedIn page URL' },
  { key: 'youtube_url', label: 'YouTube URL', type: 'text', description: 'YouTube channel URL' },
  { key: 'google_analytics_id', label: 'Google Analytics ID', type: 'text', description: 'GA4 Measurement ID' },
];

export default function SettingsPage() {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  const fetchSettings = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/settings');
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        const map: Record<string, string> = {};
        data.data.forEach((s: SiteSetting) => { map[s.setting_key] = s.setting_value || ''; });
        setSettings(map);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchSettings(); }, [fetchSettings]);

  const handleSave = async () => {
    setSaving(true);
    setError('');
    setSaved(false);
    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ settings }),
      });
      const data = await res.json();
      if (!data.success) {
        setError(data.error || 'Failed to save settings');
        return;
      }
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } finally {
      setSaving(false);
    }
  };

  const groups = [
    {
      title: 'General',
      keys: ['site_name', 'site_tagline', 'logo_url', 'favicon_url'],
    },
    {
      title: 'Contact Information',
      keys: ['contact_email', 'contact_phone', 'address'],
    },
    {
      title: 'Social Media',
      keys: ['facebook_url', 'instagram_url', 'twitter_url', 'linkedin_url', 'youtube_url'],
    },
    {
      title: 'Analytics',
      keys: ['google_analytics_id'],
    },
  ];

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <svg className="animate-spin h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
          <p className="text-gray-500 text-sm mt-1">Configure site-wide settings</p>
        </div>
        <div className="flex items-center gap-3">
          {saved && (
            <span className="text-sm text-green-600 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Saved!
            </span>
          )}
          <Button loading={saving} onClick={handleSave}>Save Changes</Button>
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{error}</p>
      )}

      <div className="space-y-6">
        {groups.map((group) => (
          <div key={group.title} className="admin-card">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">{group.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {group.keys.map((key) => {
                const def = DEFAULT_SETTINGS.find((s) => s.key === key);
                if (!def) return null;
                return (
                  <div key={key}>
                    <Input
                      label={def.label}
                      value={settings[key] || ''}
                      onChange={(e) => setSettings((prev) => ({ ...prev, [key]: e.target.value }))}
                      placeholder={def.description}
                      hint={def.description}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
