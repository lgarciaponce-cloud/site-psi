import React, { useState } from "react";
import { Plus, Trash2, Maximize2, X, Image as ImageIcon } from "lucide-react";
import { useImageManager, GalleryImage } from "../context/ImageContext";

interface SectionGalleryProps {
  sectionId: string;
  sectionTitle?: string;
  className?: string;
}

export const SectionGallery: React.FC<SectionGalleryProps> = ({
  sectionId,
  sectionTitle,
  className = ""
}) => {
  const { sectionGalleries, removeImageFromSection, openManager } = useImageManager();
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const images = sectionGalleries[sectionId] || [];

  return (
    <div className={`w-full mt-6 ${className}`}>
      {/* Botão sutil para incluir nova imagem caso a galeria esteja vazia ou com fotos */}
      <div className="flex items-center justify-between gap-4 mb-3 border-t border-[#badbde]/40 pt-4">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-4 h-4 text-[#8b4a7a]" />
          <span className="text-xs font-semibold text-[#8b4a7a] tracking-wide uppercase">
            {images.length > 0
              ? `Fotos Adicionais da Seção (${images.length})`
              : "Fotos Adicionais"}
          </span>
        </div>

        <button
          type="button"
          onClick={() => openManager(undefined, sectionId)}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ffffff] hover:bg-[#c5e6e8]/30 text-[#8b4a7a] hover:text-[#d228a7] text-xs font-medium border border-[#badbde] rounded-full shadow-2xs transition-colors cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5 text-[#d228a7]" />
          <span>+ Adicionar foto a esta seção</span>
        </button>
      </div>

      {/* Grid de fotos adicionadas */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 mt-2">
          {images.map((img) => (
            <div
              key={img.id}
              className="relative group rounded-[12px] overflow-hidden border border-[#badbde] bg-[#ffffff] shadow-2xs aspect-4/3 flex flex-col justify-between"
            >
              <img
                src={img.url}
                alt={img.caption || "Imagem adicional da seção"}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                onClick={() => setActiveImage(img)}
              />

              {/* Botões de Ação no Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-2 pointer-events-none group-hover:pointer-events-auto">
                <button
                  type="button"
                  onClick={() => setActiveImage(img)}
                  title="Ampliar imagem"
                  className="p-1.5 bg-[#ffffff] text-[#8b4a7a] hover:text-[#d228a7] rounded-full shadow-xs transition-transform hover:scale-110"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm("Deseja remover esta imagem da seção?")) {
                      removeImageFromSection(sectionId, img.id);
                    }
                  }}
                  title="Remover foto"
                  className="p-1.5 bg-[#ffffff] text-[#e03131] hover:bg-[#ffe3e3] rounded-full shadow-xs transition-transform hover:scale-110"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Legenda se houver */}
              {img.caption && (
                <div className="absolute bottom-0 inset-x-0 bg-black/60 text-[#ffffff] px-2 py-1 text-[11px] truncate">
                  {img.caption}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Lightbox para imagem expandida */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#ffffff] rounded-[16px] overflow-hidden shadow-2xl p-2 sm:p-4 border border-[#badbde]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute top-3 right-3 z-10 p-2 bg-[#ffffff]/90 hover:bg-[#ffffff] text-[#8b4a7a] rounded-full shadow-md transition-colors"
              aria-label="Fechar ampliação"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] flex items-center justify-center overflow-hidden rounded-[8px] bg-[#fafafa]">
              <img
                src={activeImage.url}
                alt={activeImage.caption || "Foto ampliada"}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="mt-3 px-2 flex items-center justify-between text-xs text-[#666666]">
              <span>{activeImage.caption || "Foto da seção"}</span>
              <span>Adicionada em {activeImage.dateAdded}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
