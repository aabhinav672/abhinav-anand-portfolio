import { useEffect, useState } from "react";
import Icon from "./Icon";
import type { GalleryItem } from "../data/gallery";

interface LightboxProps {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

function LightboxMedia({ item }: { item: GalleryItem }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex h-[70vh] w-[85vw] max-w-3xl items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} sm:w-[70vw]`}
      >
        <span className="px-6 text-center text-lg font-semibold text-white/90">{item.title}</span>
      </div>
    );
  }

  return (
    <img
      src={item.src}
      alt={item.title}
      onError={() => setFailed(true)}
      className="max-h-[80vh] max-w-[90vw] rounded-2xl object-contain sm:max-w-3xl"
    />
  );
}

export default function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const item = items[index];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (event.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [index, items.length, onClose, onNavigate]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
      >
        <Icon name="close" className="h-6 w-6" />
      </button>

      {items.length > 1 && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onNavigate((index - 1 + items.length) % items.length);
          }}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:left-4"
        >
          <Icon name="chevronLeft" className="h-6 w-6" />
        </button>
      )}

      <figure className="flex flex-col items-center" onClick={(event) => event.stopPropagation()}>
        <LightboxMedia item={item} key={item.src} />
        <figcaption className="mt-4 text-center">
          <p className="text-sm font-semibold text-white">{item.title}</p>
          <p className="text-xs text-white/70">{item.category}</p>
        </figcaption>
      </figure>

      {items.length > 1 && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onNavigate((index + 1) % items.length);
          }}
          aria-label="Next image"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:right-4"
        >
          <Icon name="chevronRight" className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
