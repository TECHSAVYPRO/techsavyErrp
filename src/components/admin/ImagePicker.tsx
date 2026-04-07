'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Media } from '@/types';
import Button from '@/components/ui/Button';

interface ImagePickerProps {
  onSelect: (media: Media) => void;
  onClose: () => void;
}

export default function ImagePicker({ onSelect, onClose }: ImagePickerProps) {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const res = await fetch('/api/media');
        const data = await res.json();
        if (data.success) setMedia(data.data || []);
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, []);

  const handleSelect = () => {
    const found = media.find((m) => m.id === selected);
    if (found) onSelect(found);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[80vh] flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Select Image</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="flex justify-center py-12">
              <svg className="animate-spin h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            </div>
          ) : media.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400">No images found. Upload some images first.</p>
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {media.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelected(item.id)}
                  className={`
                    relative aspect-square rounded-lg overflow-hidden border-2 transition-all
                    ${selected === item.id
                      ? 'border-blue-500 ring-2 ring-blue-300'
                      : 'border-gray-200 hover:border-gray-400'
                    }
                  `}
                >
                  <Image
                    src={`/uploads/${item.filename}`}
                    alt={item.alt_text || item.original_name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 25vw"
                  />
                  {selected === item.id && (
                    <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSelect} disabled={!selected}>
            Select Image
          </Button>
        </div>
      </div>
    </div>
  );
}
