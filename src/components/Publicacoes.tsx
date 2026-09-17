import React, { useState, useEffect } from "react";
import { LINKS, PUBLICATIONS } from "../data";
import {
  BookOpen,
  ExternalLink,
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
  Award
} from "lucide-react";
import { EditableImage } from "./EditableImage";
import escrevendoImg from "../assets/images/larissa_escrevendo_publicacoes_1788871569572.jpg";

import { useImageManager } from "../context/ImageContext";

export const Publicacoes: React.FC = () => {
  const { images } = useImageManager();
  const [lightboxData, setLightboxData] = useState<{
    url: string;
    title: string;
    caption?: string;
  } | null>(null);
  const [lightboxZoom, setLightboxZoom] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxData(null);
        setLightboxZoom(1);
      }
    };
    if (lightboxData) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightboxData]);

  const openLightbox = (url: string, title: string, caption?: string) => {
    setLightboxData({ url, title, caption });
    setLightboxZoom(1);
  };

  const currentPhotoPublicacoes = images.photoPublicacoes || LINKS.photoPublicacoes;

  return (
    <section
      id="publicacoes"
      className="section-padding bg-[#f7e9e0]"
      aria-labelledby="publicacoes-heading"
    >
      <div className="max-w-[900px] mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-10 md:mb-12">
          <h2 id="publicacoes-heading" className="heading-h2 uppercase tracking-wide">
            Publicações
          </h2>
          <div className="w-20 h-1 bg-[#d228a7] mx-auto mt-3 rounded-full"></div>

          {/* Citação logo abaixo do título */}
          <blockquote className="mt-6 max-w-[75ch] mx-auto">
            <p className="font-['Playfair_Display',Georgia,serif] text-[#8b4a7a] italic text-base sm:text-lg md:text-xl font-medium leading-relaxed bg-[#f9f2f7] py-4 px-6 rounded-[14px] border border-[#e8b4ca]/40 shadow-2xs">
              "A escrita e a pesquisa psicanalítica constituem desdobramentos vivos da clínica, conectando a teoria winnicottiana aos desafios contemporâneos do acolhimento humano."
            </p>
          </blockquote>
        </div>

        {/* Imagem "Obras e Coletâneas" logo abaixo da citação */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <div className="w-full max-w-[540px]">
            <div className="relative group/card rounded-[20px] overflow-hidden border-4 border-[#badbde] shadow-md hover:shadow-xl transition-all duration-300 bg-[#f9fafb]">
              <div className="absolute top-3 left-3 z-10 bg-[#ffffff]/95 backdrop-blur-xs text-[#8b4a7a] px-3 py-1 rounded-full text-xs font-semibold shadow-xs flex items-center gap-1.5 border border-[#badbde]">
                <BookOpen className="w-3.5 h-3.5 text-[#d228a7]" />
                <span>Pesquisa & Publicações</span>
              </div>

              <div
                className="cursor-pointer overflow-hidden"
                onClick={() =>
                  openLightbox(
                    currentPhotoPublicacoes,
                    "Pesquisa e Escrita Psicanalítica - Larissa Ponce",
                    "Produção teórica, reflexões clínicas e elaboração dos artigos e capítulos de livros."
                  )
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  openLightbox(
                    currentPhotoPublicacoes,
                    "Pesquisa e Escrita Psicanalítica - Larissa Ponce"
                  )
                }
                aria-label="Ampliar foto das publicações"
              >
                <EditableImage
                  imageKey="photoPublicacoes"
                  fallbackSrc={escrevendoImg}
                  alt="Larissa Ponce debruçada em anotações e escrita teórica em seu caderno de pesquisa clínica"
                  className="w-full h-auto object-cover block transition-transform duration-500 group-hover/card:scale-[1.02]"
                  loading="lazy"
                  width="800"
                  height="1200"
                />
              </div>

              <button
                type="button"
                onClick={() =>
                  openLightbox(
                    currentPhotoPublicacoes,
                    "Livros e Publicações de Larissa Ponce",
                    "Exemplares físicos e coletâneas científicas sobre teoria e clínica psicanalítica."
                  )
                }
                className="absolute bottom-3 right-3 z-10 bg-[#ffffff]/90 hover:bg-[#ffffff] text-[#8b4a7a] px-2.5 py-1 rounded-[8px] text-xs font-medium border border-[#c084b8]/30 shadow-xs flex items-center gap-1 opacity-90 group-hover/card:opacity-100 transition-opacity"
                title="Ampliar foto"
              >
                <Maximize2 className="w-3 h-3" />
                <span>Ampliar</span>
              </button>
            </div>


          </div>
        </div>

        {/* Abaixo da imagem: Lista completa de Publicações */}
        <div className="mb-10">
          <ol className="space-y-4 md:space-y-5">
            {PUBLICATIONS.map((pub, idx) => {
              const isLivroAutoral = pub.year === "2015";
              return (
                <li
                  key={idx}
                  className={`flex items-start gap-3 sm:gap-4 p-4 rounded-[12px] border transition-colors ${
                    isLivroAutoral
                      ? "bg-[#ffffff] border-[#d228a7]/40 shadow-xs ring-1 ring-[#d228a7]/10"
                      : "bg-[#fcf9fb] hover:bg-[#f8f1f6] border-[#e8b4ca]/40"
                  }`}
                >
                  <div className="flex flex-col items-center shrink-0">
                    <span className="px-2.5 py-1 bg-[#ffffff] border border-[#d228a7]/30 rounded-[8px] text-center font-bold text-[#8b4a7a] text-xs sm:text-sm shadow-2xs">
                      {pub.year}
                    </span>
                    {isLivroAutoral && (
                      <span className="mt-1 text-[10px] uppercase font-bold text-[#d228a7] bg-[#fbf0f8] px-1.5 py-0.5 rounded-full">
                        Livro
                      </span>
                    )}
                  </div>
                  <p className="body-text text-sm sm:text-base leading-relaxed text-[#333333]">
                    {pub.text}
                    <cite className="not-italic font-semibold text-[#8b4a7a]">
                      {pub.citation}
                    </cite>
                    {pub.postText}
                  </p>
                </li>
              );
            })}
          </ol>

          {/* Cartão de Acesso ao Currículo Lattes */}
          <div className="mt-8 p-5 rounded-[16px] bg-[#badbde]/30 border border-[#badbde] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 font-semibold text-[#8b4a7a] text-sm sm:text-base">
                <Award className="w-4 h-4 text-[#d228a7]" />
                <span>Produção Acadêmica e Científica</span>
              </div>
              <p className="text-xs sm:text-sm text-[#555555] mt-0.5">
                Consulte a relação completa de bancas, congressos e artigos no CNPq.
              </p>
            </div>

            <a
              href={LINKS.lattes}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary shrink-0 whitespace-nowrap text-sm"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              <span>Currículo Lattes</span>
            </a>
          </div>
        </div>


      </div>

      {/* Modal Lightbox com Zoom */}
      {lightboxData && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setLightboxData(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxData.title}
        >
          <div
            className="relative max-w-4xl max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between text-[#ffffff] pb-3 px-2">
              <div>
                <span className="text-sm font-semibold block text-white">
                  {lightboxData.title}
                </span>
                {lightboxData.caption && (
                  <span className="text-xs text-white/80 block mt-0.5">
                    {lightboxData.caption}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 ml-4">
                <button
                  type="button"
                  onClick={() => setLightboxZoom((z) => Math.max(0.75, z - 0.25))}
                  className="p-1.5 rounded-[8px] bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer"
                  title="Diminuir zoom"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono px-1 text-white">
                  {Math.round(lightboxZoom * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxZoom((z) => Math.min(2.5, z + 0.25))}
                  className="p-1.5 rounded-[8px] bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer"
                  title="Aumentar zoom"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxData(null)}
                  className="p-1.5 rounded-[8px] bg-white/20 hover:bg-[#d228a7] text-white transition-colors ml-2 cursor-pointer"
                  title="Fechar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="overflow-auto max-h-[80vh] rounded-[12px] border-2 border-white/20 shadow-2xl flex items-center justify-center bg-black/30 p-2">
              <img
                src={lightboxData.url}
                alt={lightboxData.title}
                style={{
                  transform: `scale(${lightboxZoom})`,
                  transformOrigin: "center"
                }}
                className="max-h-[75vh] w-auto object-contain transition-transform duration-200"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
