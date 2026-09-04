import { useState } from "react";
import PageHero from "../components/PageHero";
import GalleryTile from "../components/GalleryTile";
import Lightbox from "../components/Lightbox";
import { galleryItems } from "../data/gallery";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments from my journey"
        description="Photos and automation demos from events, workshops, and milestones along the way. Click any tile to enlarge it."
      />

      <section className="section">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {galleryItems.map((item, index) => (
            <GalleryTile key={item.title} item={item} onClick={() => setActiveIndex(index)} />
          ))}
        </div>
      </section>

      {activeIndex !== null && (
        <Lightbox
          items={galleryItems}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </>
  );
}
