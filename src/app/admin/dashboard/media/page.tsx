'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import MediaUploader from '@/components/admin/MediaUploader';
import { Media } from '@/types';
import { formatBytes } from '@/lib/utils';

export default function MediaManagerPage() {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<number | null>(null);
  const [copied, setCopied] = useState<number | null>(null);
  const [showUploader, setShowUploader] = useState(false);

  const fetchMedia = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/media');
      const data = await res.json();
      if (data.success) setMedia(data.data || []);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchMedia(); }, [fetchMedia]);

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this image?')) return;
    setDeleting(id);
    try {
      await fetch(`/api/media/${id}`, { method: 'DELETE' });
      fetchMedia();
    } finally {
      setDeleting(null);
    }
  };

  const copyUrl = (item: Media) => {
    const url = `${window.location.origin}/uploads/${item.filename}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(item.id);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const handleUploadComplete = () => {
    setShowUploader(false);
    fetchMedia();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Media Library</h2>
          <p className="text-gray-500 text-sm mt-1">{media.length} file{media.length !== 1 ? 's' : ''} uploaded</p>
        </div>
        <Button onClick={() => setShowUploader(!showUploader)}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          Upload Images
        </Button>
      </div>

      {showUploader && (
        <div className="admin-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload New Images</h3>
          <MediaUploader onUploadComplete={handleUploadComplete} />
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-12">
          <svg className="animate-spin h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        </div>
      ) : media.length === 0 ? (
        <div className="admin-card text-center py-16">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No images yet</h3>
          <p className="text-gray-500 mb-4">Upload images to get started</p>
          <Button onClick={() => setShowUploader(true)}>Upload Images</Button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {media.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-square bg-gray-100">
                <Image
                  src={`/uploads/${item.filename}`}
                  alt={item.alt_text || item.original_name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
              <div className="p-2">
                <p className="text-xs font-medium text-gray-700 truncate" title={item.original_name}>
                  {item.original_name}
                </p>
                <p className="text-xs text-gray-400">{formatBytes(item.file_size)}</p>
                {item.width && item.height && (
                  <p className="text-xs text-gray-400">{item.width}×{item.height}</p>
                )}
              </div>
              {/* Actions overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button
                  onClick={() => copyUrl(item)}
                  className="flex items-center gap-1 px-2 py-1 bg-white rounded text-xs font-medium text-gray-800 hover:bg-gray-100"
                  title="Copy URL"
                >
                  {copied === item.id ? (
                    <span className="text-green-600">✓ Copied!</span>
                  ) : (
                    <>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy
                    </>
                  )}
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="flex items-center gap-1 px-2 py-1 bg-red-600 rounded text-xs font-medium text-white hover:bg-red-700"
                  title="Delete"
                >
                  {deleting === item.id ? '...' : (
                    <>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Del
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
