"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type MediaItem =
  | { type: "video"; src: string; alt: string }
  | { type: "image"; src: string; alt: string };

type Props = {
  items: MediaItem[];
  productName: string;
};

export default function ProductMedia({ items, productName }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (zoomedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomedIndex(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [zoomedIndex]);

  if (items.length === 0) return null;
  const zoomedItem = zoomedIndex !== null ? items[zoomedIndex] : null;

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
              <>
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  aria-label={item.alt}
                />
                <button
                  type="button"
                  aria-label="放大影片"
                  title="點此放大"
                  onClick={() => setZoomedIndex(idx)}
                  className="absolute top-2 right-2 z-20 w-9 h-9 rounded-md bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4"
                    />
                  </svg>
                </button>
              </>
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

      {/* Zoom modal — 限制最大尺寸避免 720p 影片被 upscale 到糊 */}
      {zoomedItem && zoomedItem.type === "video" && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={zoomedItem.alt}
          onClick={() => setZoomedIndex(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
        >
          <button
            type="button"
            aria-label="關閉"
            onClick={() => setZoomedIndex(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <video
            key={zoomedItem.src}
            src={zoomedItem.src}
            className="max-w-3xl max-h-[85vh] w-auto h-auto rounded-lg shadow-2xl"
            controls
            autoPlay
            muted
            playsInline
            onClick={(e) => e.stopPropagation()}
            aria-label={zoomedItem.alt}
          />
        </div>
      )}

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
