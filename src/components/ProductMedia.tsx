"use client";

import Image from "next/image";
import { useState } from "react";

export type MediaItem =
  | { type: "video"; src: string; alt: string }
  | { type: "image"; src: string; alt: string };

type Props = {
  items: MediaItem[];
  productName: string;
};

export default function ProductMedia({ items, productName }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (items.length === 0) return null;

  return (
    <div className="flex flex-col h-full bg-warm-200">
      {/* 主視覺 — 所有 media 都 render 在 DOM (SEO friendly)，用 absolute + z-index 切換顯示 */}
      <div className="relative flex-1 min-h-0">
        {items.map((item, idx) => (
          <div
            key={item.src}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
              idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                className="w-full h-full object-cover"
                controls
                muted
                playsInline
                preload="metadata"
                aria-label={item.alt}
              />
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading={idx === 0 ? "eager" : "lazy"}
              />
            )}
          </div>
        ))}
      </div>

      {/* 縮圖列 */}
      {items.length > 1 && (
        <div
          className="flex gap-2 p-2 bg-warm-100 border-t border-warm-200"
          role="tablist"
          aria-label={`${productName} 相關媒體`}
        >
          {items.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.src}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={item.alt}
                onClick={() => setActiveIndex(idx)}
                className={`relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                  isActive
                    ? "border-gold-500 ring-2 ring-gold-200"
                    : "border-warm-200 hover:border-gold-300"
                }`}
              >
                {item.type === "video" ? (
                  <div className="w-full h-full bg-dark-700 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                ) : (
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
