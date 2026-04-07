'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Media } from '@/types';
import { formatBytes } from '@/lib/utils';

interface MediaUploaderProps {
  onUploadComplete?: (media: Media[]) => void;
}

export default function MediaUploader({ onUploadComplete }: MediaUploaderProps) {
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<Media[]>([]);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const uploadFiles = useCallback(async (files: FileList | File[]) => {
    const fileArray = Array.from(files);
    const maxSize = parseInt(process.env.NEXT_PUBLIC_MAX_FILE_SIZE || '5242880', 10);

    // Validate files
    for (const file of fileArray) {
      if (file.size > maxSize) {
        setError(`File "${file.name}" exceeds the maximum size of ${formatBytes(maxSize)}.`);
        return;
      }
      if (!file.type.startsWith('image/')) {
        setError(`File "${file.name}" is not an image.`);
        return;
      }
    }

    setError('');
    setUploading(true);

    try {
      const formData = new FormData();
      fileArray.forEach((file) => formData.append('files', file));

      const res = await fetch('/api/media', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || 'Upload failed. Please try again.');
        return;
      }

      const newMedia: Media[] = Array.isArray(data.data) ? data.data : [data.data];
      setUploadedFiles((prev) => [...prev, ...newMedia]);
      onUploadComplete?.(newMedia);
    } catch {
      setError('An error occurred during upload.');
    } finally {
      setUploading(false);
    }
  }, [onUploadComplete]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length > 0) {
      uploadFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      uploadFiles(e.target.files);
      e.target.value = '';
    }
  };

  return (
    <div className="space-y-4">
      {/* Drop Zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`
          border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-all duration-200
          ${dragOver
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
          }
        `}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={handleFileInput}
        />
        <div className="flex flex-col items-center gap-3">
          {uploading ? (
            <>
              <svg className="animate-spin h-10 w-10 text-blue-500" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <p className="text-sm text-gray-600">Uploading...</p>
            </>
          ) : (
            <>
              <svg className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <div>
                <p className="text-sm font-medium text-gray-700">Drop images here or click to upload</p>
                <p className="text-xs text-gray-400 mt-1">PNG, JPG, WebP, GIF up to 5MB</p>
              </div>
            </>
          )}
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
          {error}
        </p>
      )}

      {/* Uploaded Files Preview */}
      {uploadedFiles.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Just Uploaded</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {uploadedFiles.map((media) => (
              <div key={media.id} className="relative group aspect-square rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                <Image
                  src={`/uploads/${media.filename}`}
                  alt={media.alt_text || media.original_name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                  <p className="text-white text-xs truncate">{media.original_name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
