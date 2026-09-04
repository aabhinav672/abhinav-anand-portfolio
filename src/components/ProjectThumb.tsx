import { useState } from "react";

interface ProjectThumbProps {
  image?: string;
  gradient: string;
  title: string;
  className?: string;
}

export default function ProjectThumb({ image, gradient, title, className = "" }: ProjectThumbProps) {
  const [imageFailed, setImageFailed] = useState(false);

  if (!image || imageFailed) {
    return <div className={`bg-gradient-to-br ${gradient} ${className}`} />;
  }

  return (
    <img
      src={image}
      alt={title}
      className={`object-cover ${className}`}
      onError={() => setImageFailed(true)}
    />
  );
}
