import React from "react";
import { LINKS } from "../data";
import { Youtube, Instagram, ArrowRight } from "lucide-react";
import casinhaImg from "../assets/images/larissa_casinha_editada_1788871779656.jpg";
import { EditableImage } from "./EditableImage";


export const ConteudoContinuo: React.FC = () => {
  return (
    <section className="section-padding bg-[#DCEDF8]" aria-label="Siga as redes sociais">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Coluna de Texto e Redes Sociais */}
          <div>
            <h2 className="font-['Playfair_Display',Georgia,serif] text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#8b4a7a] tracking-tight leading-tight mb-6">
              Siga as redes sociais
            </h2>

            <div className="space-y-4">
              {/* Instagram: @larissaponcepsi */}
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-4.5 sm:p-5 bg-[#ffffff] rounded-[16px] border-2 border-transparent shadow-xs hover:border-[#d228a7] hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center gap-3.5">
                  <span className="w-12 h-12 rounded-[12px] bg-[#F5B8C5] text-[#8b4a7a] flex items-center justify-center shrink-0 group-hover:bg-[#d228a7] group-hover:text-[#ffffff] transition-all duration-300 shadow-xs">
                    <Instagram className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="block font-bold text-base sm:text-lg text-[#8b4a7a] group-hover:text-[#d228a7] transition-colors">
                      larissaponcepsi
                    </span>
                    <span className="block text-xs sm:text-sm text-[#333333]/80 mt-0.5">
                      Acompanhe as novidades , vagas abertas em grupos de supervisão e grupos de estudo
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-[#8b4a7a] group-hover:text-[#d228a7] group-hover:translate-x-1.5 transition-all duration-300 shrink-0" aria-hidden="true" />
              </a>

              {/* YouTube */}
              <a
                href={LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-4.5 sm:p-5 bg-[#ffffff] rounded-[16px] border-2 border-transparent shadow-xs hover:border-[#d228a7] hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center gap-3.5">
                  <span className="w-12 h-12 rounded-[12px] bg-[#e8b4ca]/50 text-[#8b4a7a] flex items-center justify-center shrink-0 group-hover:bg-[#d228a7] group-hover:text-[#ffffff] transition-all duration-300 shadow-xs">
                    <Youtube className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="block font-bold text-base sm:text-lg text-[#8b4a7a] group-hover:text-[#d228a7] transition-colors">
                      Canal no YouTube
                    </span>
                    <span className="block text-xs sm:text-sm text-[#333333]/80 mt-0.5">
                      Aulas abertas, palestras  e reflexões sobre a psicanálise winnicottiana
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-[#8b4a7a] group-hover:text-[#d228a7] group-hover:translate-x-1.5 transition-all duration-300 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Coluna da Imagem com a foto da casinha com suporte a substituição manual */}
          <div className="flex justify-center">
            <div className="w-full max-w-[520px] rounded-[20px] overflow-hidden border-4 border-[#ffffff] shadow-lg bg-[#ffffff]">
              <EditableImage
                imageKey="photoCasinha"
                fallbackSrc={casinhaImg}
                alt="Larissa Ponce - Psicóloga e Psicanalista Winnicottiana"
                className="w-full h-auto object-cover block transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};
