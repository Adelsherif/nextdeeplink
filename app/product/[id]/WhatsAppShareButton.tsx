'use client';
import React, { useEffect, useState } from 'react';

interface Props { id: string; }

export default function WhatsAppShareButton({ id }: Props) {
  const [url, setUrl] = useState('');
  useEffect(() => {
    setUrl(`${window.location.origin}/product/${id}`);
  }, [id]);

  if (!url) return null;

  return (
    <a
      href={`https://wa.me/?text=${encodeURIComponent(url)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
    >
      WhatsApp
    </a>
  );
}
