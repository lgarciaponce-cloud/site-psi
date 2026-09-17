import React, { useState, useEffect } from "react";
import { LINKS } from "../data";
import { Maximize2, X, ZoomIn, ZoomOut, MessageCircle, Camera } from "lucide-react";
import { useImageManager } from "../context/ImageContext";
import { EditableImage } from "./EditableImage";


export const Psicanalise: React.FC = () => {
  const { images, openManager } = useImageManager();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxZoom, setLightboxZoom] = useState(1);

  const currentPhoto = images.photoPsicanalise || LINKS.photoPsicanalise;

  // Fechar modal com a tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      setLightboxZoom(1);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  return (
    <section
      id="psicanalise"
      className="section-padding bg-[#f7e9e0] scroll-mt-16 sm:scroll-mt-20"
      aria-labelledby="psicanalise-heading"
    >
      <div className="max-w-[1120px] mx-auto">
        {/* Título de Seção (H2): 1.5rem no mobile, 2rem no desktop, #8b4a7a */}
        <div className="text-center mb-10 md:mb-12">
          <h2 id="psicanalise-heading" className="heading-h2 uppercase tracking-wide">
            Psicanálise Winnicottiana
          </h2>
          <div className="w-20 h-1 bg-[#d228a7] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Layout de duas colunas: 1 coluna no mobile, 2 colunas no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Lado Esquerdo: Texto corrido (1rem, line-height 1.5-1.6, max-width 65ch, cor #333333) */}
          <div className="flex flex-col justify-center space-y-5 body-text text-left max-w-[65ch]">
            <p>
              A sessão é um espaço potencial de troca e conversa, no qual participo ativamente, entrelaçando os fios da história de vida, dos conflitos e das angústias, para auxiliar cada pessoa a criar-encontrar seu próprio caminho no enfrentamento das dificuldades e no amadurecimento emocional, melhorando a qualidade dos vínculos — profissionais, amorosos, familiares, sociais e consigo mesmo.
            </p>
            <p>
              No trabalho terapêutico, o manejo e as intervenções interpretativas são tecidos com sensibilidade, precisão e empatia, sempre orientados pela história singular e pela capacidade de compreensão de cada paciente no momento do encontro.
            </p>
            <p>
              Em sua disposição genuína para o cuidado, o analista estabelece um enquadre propício ao estabelecimento da confiança, para que o paciente possa encontrar a si mesmo e — a partir do eixo da relação — recordar, repetir, experienciar e integrar sua própria história, dentro de seu ritmo próprio.
            </p>
          </div>

          {/* Lado Direito: Imagem sem corte, proporcional ao texto com substituição manual */}
          <div className="flex items-center justify-center w-full">
            <div
              className="relative w-full max-w-full md:max-w-[600px] rounded-[16px] overflow-hidden border-4 border-[#badbde] shadow-md group/img cursor-pointer bg-[#ffffff] transition-all hover:shadow-lg focus-visible:outline-2 focus-visible:outline-[#d228a7] focus-visible:outline-offset-2"
              onClick={() => setIsLightboxOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setIsLightboxOpen(true)}
              aria-label="Clique para ampliar a fotografia de Larissa Ponce em atendimento"
            >
              <img
                src={currentPhoto}
                alt="Larissa Ponce em seu consultório durante atendimento psicanalítico"
                className="w-full max-w-full md:max-w-[600px] h-auto object-contain block max-h-[500px]"
                loading="lazy"
                width="640"
                height="800"
              />

              {/* Botão sutil para ampliar */}
              <div className="absolute bottom-3 right-3 bg-[#ffffff]/90 text-[#8b4a7a] px-3 py-1 rounded-[8px] text-xs font-medium border border-[#c084b8]/30 shadow-xs flex items-center gap-1 opacity-90 group-hover/img:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Ampliar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Botão ENTRE EM CONTATO para WhatsApp */}
        <div className="mt-10 md:mt-12 text-center">
          <a
            id="psicanalise-btn-contato"
            href="https://wa.me/5544998200082"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base font-medium px-8 py-3.5 shadow-md hover:scale-[1.02] transition-transform"
          >
            <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>ENTRE EM CONTATO</span>
          </a>
        </div>


      </div>

      {/* Modal Lightbox Acessível com Zoom */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Visualização em tela cheia da foto"
        >
          <div
            className="relative max-w-4xl max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between text-[#ffffff] pb-3 px-2">
              <span className="text-sm font-medium">
                Larissa Ponce — Psicanálise Winnicottiana
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLightboxZoom((z) => Math.max(0.75, z - 0.25))}
                  className="p-1.5 rounded-[8px] bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer"
                  title="Diminuir zoom"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono px-1">
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
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-1.5 rounded-[8px] bg-white/20 hover:bg-[#d228a7] text-white transition-colors ml-2 cursor-pointer"
                  title="Fechar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="overflow-auto max-h-[80vh] rounded-[12px] border-2 border-white/20 shadow-2xl flex items-center justify-center bg-black/30 p-2">
              <img
                src={currentPhoto}
                alt="Larissa Ponce em atendimento"
                style={{ transform: `scale(${lightboxZoom})`, transformOrigin: "center" }}
                className="max-h-[75vh] w-auto object-contain transition-transform duration-200"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
