'use client';
import React, { useEffect, useState } from 'react';

interface Props { id: string; }

export default function TwitterShareButton({ id }: Props) {
  const [url, setUrl] = useState('');
  useEffect(() => {
    setUrl(`${window.location.origin}/product/${id}`);
  }, [id]);

  if (!url) return null;

  return (
    <a
      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition"
    >
      Twitter
    </a>
  );
}
