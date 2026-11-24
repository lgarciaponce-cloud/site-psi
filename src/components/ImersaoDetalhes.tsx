import React from "react";
import { LINKS, COURSE_PILLARS } from "../data";
import { CheckCircle2, ShoppingCart, Youtube, Instagram, BookOpen, Layers } from "lucide-react";

export const ImersaoDetalhes: React.FC = () => {
  return (
    <section
      id="imersao-detalhes"
      className="section-padding bg-[#f7e9e0]"
      aria-labelledby="imersao-heading"
    >
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center max-w-[65ch] mx-auto mb-12">
          <span className="inline-block bg-[#c5e6e8] text-[#8b4a7a] px-4 py-1 rounded-[6px] text-xs font-semibold uppercase tracking-wider mb-3">
            O Curso
          </span>
          <h2 id="imersao-heading" className="heading-h2 uppercase tracking-wide mb-2">
            Imersão Winnicottiana
          </h2>
          <div className="w-20 h-1 bg-[#d228a7] mx-auto mb-4 rounded-full"></div>
          
          <h3 className="heading-h3 text-[#c084b8] uppercase tracking-wide mb-4">
            Criando-Encontrando a Teoria e a Clínica
          </h3>
          
          <p className="body-text text-[#8b4a7a] font-medium text-base md:text-lg">
            Uma metodologia desenhada para transformar a maneira como você escuta, maneja e sustenta os processos terapêuticos.
          </p>
        </div>

        {/* Destaques em grid de 2 colunas no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-[#DCEDF8] border border-[#badbde] p-6 rounded-[12px] shadow-xs">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle2 className="w-6 h-6 text-[#8b4a7a]" aria-hidden="true" />
              <h4 className="font-semibold text-lg text-[#8b4a7a]">
                +8h de aulas teóricas
              </h4>
            </div>
            <p className="body-text text-sm">
              Compreenda os conceitos centrais da Teoria do Amadurecimento Emocional — fio condutor da constituição psíquica — de forma clara, objetiva e organizada, para consolidar seu conhecimento sobre cada etapa da linha maturacional.
            </p>
          </div>

          <div className="bg-[#DCEDF8] border border-[#c5e6e8] p-6 rounded-[12px] shadow-xs">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle2 className="w-6 h-6 text-[#8b4a7a]" aria-hidden="true" />
              <h4 className="font-semibold text-lg text-[#8b4a7a]">
                6h de encontros práticos
              </h4>
            </div>
            <p className="body-text text-sm">
              Explore os pressupostos básicos do diagnóstico e da nosografia com casos ilustrativos e exercícios práticos que demonstram o manejo clínico em ação, aplicados às neuroses e às chamadas não-neuroses.
            </p>
          </div>
        </div>

        {/* Grid de Cards dos Pilares: 1 coluna no mobile, até 3 colunas no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1120px] mx-auto mb-14">
          {COURSE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff] p-6 rounded-[12px] border border-[#badbde] shadow-xs hover:border-[#e331e2] transition-colors flex flex-col items-center text-center gap-3 h-full"
            >
              <span className="w-12 h-12 rounded-full bg-[#e8b4ca]/50 text-[#8b4a7a] flex items-center justify-center shrink-0">
                <Layers className="w-6 h-6" aria-hidden="true" />
              </span>
              <div>
                <h4 className="font-['Playfair_Display',Georgia,serif] font-semibold text-base md:text-lg text-[#8b4a7a] mb-2">
                  {pillar.title}
                </h4>
                <p className="body-text text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Vídeo + CTA */}
        <div className="max-w-3xl mx-auto mb-14 bg-[#ffffff] p-6 sm:p-8 rounded-[16px] border border-[#badbde] shadow-sm text-center">
          <h3 className="heading-h3 mb-2">
            Conheça a proposta do curso
          </h3>
          <p className="body-text mb-6">
            Assista à amostra para entender o percurso formativo e a dinâmica das aulas.
          </p>

          <div className="video-frame shadow-md mb-6 mx-auto">
            <iframe
              src={LINKS.videoEmbed}
              title="Amostra do Curso Imersão Winnicottiana"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/curso-psicanalise-winnicottiana/"
              className="btn-secondary inline-flex"
            >
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              <span>Ver programa completo, preço e perguntas frequentes</span>
            </a>
            <a
              href={LINKS.hotmart}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <ShoppingCart className="w-4 h-4" aria-hidden="true" />
              <span>Compre agora</span>
            </a>
          </div>
        </div>


      </div>
    </section>
  );
};
