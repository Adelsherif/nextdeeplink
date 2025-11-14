'use client';
import React from 'react';

interface Props {
  id: string; // id المنتج
}

export default function WhatsAppShareButton({ id }: Props) {
  // رابط الصفحة نفسها
  const pageUrl = `${window.location.origin}/product/${id}`;

  // رابط واتساب مع الرابط
  const shareUrl = `https://wa.me/?text=${encodeURIComponent(pageUrl)}`;

  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
    >
      شارك على واتساب
    </a>
  );
}
