'use client';
import React, { useEffect, useState } from 'react';

interface Props { id: string; }

export default function FacebookShareButton({ id }: Props) {
  const [url, setUrl] = useState('');
  useEffect(() => {
    setUrl(`${window.location.origin}/product/${id}`);
  }, [id]);

  if (!url) return null;

  return (
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Facebook
    </a>
  );
}
