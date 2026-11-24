import React, { useState, useEffect } from "react";
import { MonitorPlay, BookOpen, Users, HeartHandshake } from "lucide-react";
import { LINKS } from "../data";
import { useImageManager } from "../context/ImageContext";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { images, openManager } = useImageManager();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-[#badbde] transition-all duration-300 ${
        isScrolled
          ? "bg-[#DCEDF8]/98 shadow-[0_4px_20px_rgba(139,74,122,0.08)] backdrop-blur-md py-1.5 sm:py-2"
          : "bg-[#DCEDF8]/95 backdrop-blur-sm py-2 sm:py-2.5"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-3 sm:px-5 md:px-7">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2.5 sm:gap-3 md:gap-4">
          {/* Logo oficial do lado esquerdo com suporte a troca manual */}
          <div className="relative group/logo flex items-center shrink-0 w-full md:w-auto justify-center md:justify-start">
            <a
              href="#sobre"
              className="flex items-center group focus-visible:outline-2 focus-visible:outline-[#d228a7] focus-visible:outline-offset-2 rounded-lg"
              aria-label="Larissa Ponce - Início"
            >
              <img
                src={images.logo || "/logo-oficial.png"}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = LINKS.logo;
                }}
                alt="Larissa Ponce - Psicanálise Winnicottiana e Psicologia"
                className="h-9 sm:h-10 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* Navegação com os botões visíveis lado a lado ou pílulas fluidas no mobile */}
          <nav
            aria-label="Navegação principal"
            className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-end gap-1.5 sm:gap-2 md:gap-3 w-full md:w-auto py-0.5"
          >
            {/* 1. Psicoterapia (link para #psicanalise - Psicanálise Winnicottiana) */}
            <a
              href="#psicanalise"
              className="w-auto inline-flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 px-3 sm:px-3.5 md:px-4 py-1.5 sm:py-2 rounded-full bg-[#ffffff] text-[#8b4a7a] border border-[#c084b8]/50 text-xs sm:text-[13px] md:text-sm font-medium whitespace-nowrap shadow-xs hover:bg-[#badbde]/40 hover:border-[#d228a7] hover:text-[#d228a7] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-in-out shrink-0 focus-visible:outline-2 focus-visible:outline-[#d228a7]"
            >
              <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c084b8] shrink-0" aria-hidden="true" />
              <span>Psicoterapia</span>
            </a>

            {/* 2. Imersão Winnicottiana (Pílula em destaque primário #d228a7 com ícone de curso em vídeo) */}
            <a
              href="/curso-psicanalise-winnicottiana/"
              className="w-auto inline-flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 px-3 sm:px-3.5 md:px-4 py-1.5 sm:py-2 rounded-full bg-[#d228a7] text-[#ffffff] text-xs sm:text-[13px] md:text-sm font-medium whitespace-nowrap shadow-xs hover:brightness-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-in-out shrink-0 focus-visible:outline-2 focus-visible:outline-[#d228a7]"
            >
              <MonitorPlay className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" aria-hidden="true" />
              <span>Imersão Winnicottiana</span>
            </a>

            {/* 3. Supervisão clínica (Pílula suave) */}
            <a
              href="#supervisao"
              className="w-auto inline-flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 px-3 sm:px-3.5 md:px-4 py-1.5 sm:py-2 rounded-full bg-[#ffffff] text-[#8b4a7a] border border-[#c084b8]/50 text-xs sm:text-[13px] md:text-sm font-medium whitespace-nowrap shadow-xs hover:bg-[#c5e6e8]/40 hover:border-[#d228a7] hover:text-[#d228a7] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-in-out shrink-0 focus-visible:outline-2 focus-visible:outline-[#d228a7]"
            >
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c084b8] shrink-0" aria-hidden="true" />
              <span>Supervisão clínica</span>
            </a>

            {/* 4. Grupo de Estudo (Pílula suave com ícone de livro aberto) */}
            <a
              href="#grupos-estudo"
              className="w-auto inline-flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 px-3 sm:px-3.5 md:px-4 py-1.5 sm:py-2 rounded-full bg-[#ffffff] text-[#8b4a7a] border border-[#c084b8]/50 text-xs sm:text-[13px] md:text-sm font-medium whitespace-nowrap shadow-xs hover:bg-[#badbde]/40 hover:border-[#d228a7] hover:text-[#d228a7] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-in-out shrink-0 focus-visible:outline-2 focus-visible:outline-[#d228a7]"
            >
              <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c084b8] shrink-0" aria-hidden="true" />
              <span>Grupo de Estudos</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
