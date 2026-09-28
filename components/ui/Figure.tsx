import Image from "next/image";
import type { Photo } from "@/data/types";

type FigureProps = {
  photo: Photo;
  sizes: string;
  className?: string;
  preload?: boolean;
};

/** Fills its (sized) parent; the parent owns aspect ratio and bleed. */
export function Figure({ photo, sizes, className = "", preload = false }: FigureProps) {
  return (
    <div className={`relative overflow-hidden bg-tint ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        preload={preload}
        placeholder="blur"
        className="object-cover"
        style={photo.position ? { objectPosition: photo.position } : undefined}
      />
    </div>
  );
}
