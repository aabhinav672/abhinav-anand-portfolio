import { useState } from "react";
import { siteConfig } from "../data/site";

interface ProfilePhotoProps {
  className?: string;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function ProfilePhoto({ className = "" }: ProfilePhotoProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-indigo-600 shadow-lg ring-4 ring-white ${className}`}
    >
      {!imageFailed ? (
        <img
          src={siteConfig.photoUrl}
          alt={siteConfig.name}
          className="h-full w-full object-cover"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span className="text-4xl font-bold text-white sm:text-5xl">
          {getInitials(siteConfig.name)}
        </span>
      )}
    </div>
  );
}
