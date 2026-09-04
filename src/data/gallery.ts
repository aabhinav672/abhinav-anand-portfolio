import { assetUrl } from "../lib/assetUrl";

export type GalleryMediaType = "photo" | "animation";

export interface GalleryItem {
  title: string;
  category: string;
  type: GalleryMediaType;
  /** Path to the image/GIF, e.g. an asset under public/gallery/. Falls back to `gradient` if missing. */
  src: string;
  gradient: string;
}

export const galleryItems: GalleryItem[] = [
  {
    title: "Design Sprint",
    category: "Workshop",
    type: "photo",
    src: assetUrl("gallery/design-sprint.jpg"),
    gradient: "from-brand-500 to-indigo-600",
  },
  {
    title: "Hackathon Win",
    category: "Event",
    type: "photo",
    src: assetUrl("gallery/hackathon-win.jpg"),
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Pipeline Run Animation",
    category: "Automation",
    type: "animation",
    src: assetUrl("gallery/pipeline-run.gif"),
    gradient: "from-rose-500 to-pink-600",
  },
  {
    title: "Team Offsite",
    category: "Team",
    type: "photo",
    src: assetUrl("gallery/team-offsite.jpg"),
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Product Launch",
    category: "Milestone",
    type: "photo",
    src: assetUrl("gallery/product-launch.jpg"),
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Bot Demo Recording",
    category: "Automation",
    type: "animation",
    src: assetUrl("gallery/bot-demo.gif"),
    gradient: "from-sky-500 to-brand-600",
  },
  {
    title: "Mentorship Session",
    category: "Community",
    type: "photo",
    src: assetUrl("gallery/mentorship-session.jpg"),
    gradient: "from-slate-700 to-slate-900",
  },
  {
    title: "Award Ceremony",
    category: "Milestone",
    type: "photo",
    src: assetUrl("gallery/award-ceremony.jpg"),
    gradient: "from-orange-400 to-rose-500",
  },
  {
    title: "Studio Workspace",
    category: "Behind the Scenes",
    type: "photo",
    src: assetUrl("gallery/studio-workspace.jpg"),
    gradient: "from-teal-500 to-emerald-600",
  },
];
