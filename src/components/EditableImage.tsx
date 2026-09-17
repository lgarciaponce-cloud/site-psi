import React, { useState } from "react";
import { Camera, RefreshCw } from "lucide-react";
import { useImageManager } from "../context/ImageContext";

interface EditableImageProps {
  imageKey: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  width?: string | number;
  height?: string | number;
  loading?: "lazy" | "eager";
  onClick?: () => void;
  showHoverButton?: boolean;
  fallbackSrc?: string;
}

export const EditableImage: React.FC<EditableImageProps> = ({
  imageKey,
  alt,
  className = "",
  containerClassName,
  width,
  height,
  loading = "lazy",
  onClick,
  showHoverButton = true,
  fallbackSrc
}) => {
  const { images, openManager } = useImageManager();
  const [hasError, setHasError] = useState(false);

  const currentSrc = (!hasError && images[imageKey]) ? images[imageKey] : (fallbackSrc || images[imageKey] || "");

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    openManager(imageKey);
  };

  // Se containerClassName for informado, utiliza-o; senão, deduz pelo estilo da imagem
  const resolvedContainerClass = containerClassName
    ? containerClassName
    : className.includes("h-auto")
    ? "w-full h-auto"
    : "w-full h-full";

  return (
    <div className={`relative group/editable overflow-hidden ${resolvedContainerClass}`}>
      <img
        src={currentSrc}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        onClick={onClick}
        onError={() => {
          if (!hasError && fallbackSrc) {
            setHasError(true);
          }
        }}
        referrerPolicy="no-referrer"
      />

      {showHoverButton && (
        <button
          type="button"
          onClick={handleEditClick}
          aria-label={`Substituir foto: ${alt}`}
          className="absolute bottom-2 right-2 z-10 opacity-0 group-hover/editable:opacity-100 transition-opacity duration-200 bg-white/95 hover:bg-white text-[#8b4a7a] hover:text-[#d228a7] px-2.5 py-1.5 rounded-full shadow-md text-xs font-semibold flex items-center gap-1.5 border border-[#badbde] backdrop-blur-xs cursor-pointer"
        >
          <Camera className="w-3.5 h-3.5" />
          <span>Substituir</span>
        </button>
      )}
    </div>
  );
};
