import { useState } from "react";
import Icon from "./Icon";
import type { GalleryItem } from "../data/gallery";

interface GalleryTileProps {
  item: GalleryItem;
  onClick: () => void;
}

export default function GalleryTile({ item, onClick }: GalleryTileProps) {
  const [failed, setFailed] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Enlarge ${item.title}`}
      className="group relative aspect-square w-full overflow-hidden rounded-2xl text-left focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
    >
      {!failed ? (
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div
          className={`h-full w-full bg-gradient-to-br ${item.gradient} transition-transform duration-300 group-hover:scale-105`}
        />
      )}

      <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />

      {item.type === "animation" && (
        <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
          <Icon name="play" className="h-3 w-3" />
          GIF
        </span>
      )}

      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <p className="text-sm font-semibold text-white">{item.title}</p>
        <p className="text-xs text-white/80">{item.category}</p>
      </figcaption>
    </button>
  );
}
