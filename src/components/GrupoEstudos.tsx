import React from "react";
import { EditableImage } from "./EditableImage";
import { Calendar, Clock, Video, Sparkles, MessageCircle } from "lucide-react";
import grupoEstudosImg from "../assets/images/grupo_de_estudos.jpg";

export const GrupoEstudos: React.FC = () => {
  const whatsappUrl = "https://wa.me/5544998200082";

  return (
    <section
      id="grupos-estudo"
      className="section-padding bg-[#f7e9e0] scroll-mt-16 sm:scroll-mt-20"
      aria-labelledby="grupos-estudo-heading"
    >
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 bg-[#c5e6e8]/50 text-[#8b4a7a] text-xs font-semibold uppercase tracking-wider rounded-full mb-3">
            Formação Continuada
          </span>
          <h2 id="grupos-estudo-heading" className="heading-h2 uppercase tracking-wide">
            GRUPO DE ESTUDOS
          </h2>
          <div className="w-20 h-1 bg-[#d228a7] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Imagem do Grupo de Estudo */}
        <div className="mb-8 rounded-[16px] overflow-hidden border border-[#badbde] shadow-md bg-white max-w-3xl mx-auto flex items-center justify-center p-2 bg-[#fdfbfd]">
          <EditableImage
            imageKey="grupoEstudos"
            fallbackSrc={grupoEstudosImg}
            alt="Grupo de Estudo Winnicott e a psicodinâmica"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Título abaixo da imagem */}
        <div className="text-center mb-10">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-['Playfair_Display',Georgia,serif] text-[#8b4a7a] max-w-3xl mx-auto leading-snug">
            Diagnóstico e manejo clínico das psicopatologias – diálogos entre Winnicott e a psicodinâmica
          </h3>
        </div>

        {/* Descrição principal */}
        <div className="bg-white p-6 sm:p-10 rounded-[16px] border border-[#badbde]/60 shadow-sm mb-8 space-y-4 text-[#333333] leading-relaxed text-base">
          <p>
            O Grupo de Estudos tem como objetivo promover um estudo sistemático e integrado das proposições winnicottianas e da teoria psicodinâmica e da psiquiatria, de modo a ampliar a compreensão sobre o diagnóstico e o manejo clínico de diferentes formas de adoecimento psíquico, a partir da articulação das contribuições de Winnicott, McWilliams, Gabbard, Kernberg, entre outros autores.
          </p>
          <p>
            Em cada aula, pretende-se promover um espaço de construção e organização do pensamento clínico que capacite o profissional a intervir de forma ética, criativa e embasada nos diversos desafios que a prática clínica na contemporaneidade nos apresenta.
          </p>
        </div>

        {/* Informações e Cronograma */}
        <div className="bg-[#c5e6e8]/20 p-6 sm:p-8 rounded-[16px] border border-[#badbde] mb-8">
          <h3 className="text-xl font-bold text-[#8b4a7a] mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#8b4a7a]" />
            CRONOGRAMA E FUNCIONAMENTO
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
            <div className="bg-white p-4 rounded-xl border border-[#badbde]/50 flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#8b4a7a] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#8b4a7a]">Formato e Duração</p>
                <p className="text-[#333333]/80">8 aulas quinzenais, com duração de 1h30 cada.</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#badbde]/50 flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#8b4a7a] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#8b4a7a]">Horário e Início</p>
                <p className="text-[#333333]/80">Quartas das 20h às 21:30 | Data de início: 22/07/2026</p>
              </div>
            </div>
          </div>

          {/* ATENÇÃO box */}
          <div className="bg-[#d228a7]/10 border-l-4 border-[#d228a7] p-4 rounded-r-xl mb-6 text-sm text-[#333333] space-y-1">
            <p className="font-bold text-[#8b4a7a] flex items-center gap-2">
              <span>ATENÇÃO:</span>
            </p>
            <p>🎥 Todos os encontros são gravados e ficam disponíveis mesmo após a transmissão ao vivo.</p>
            <p>⏳ Você estuda no seu tempo, no seu ritmo!</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-[#8b4a7a] text-lg border-b border-[#badbde] pb-2">
              Módulo 1
            </h4>
            
            <div className="space-y-3 text-sm">
              <div className="bg-white p-3.5 rounded-lg border border-[#badbde]/50">
                <span className="font-semibold text-[#8b4a7a]">Aula 1 – 22/07/2026:</span> Fundamentos da Psicodinâmica e da Teoria do Amadurecimento de Winnicott
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-[#badbde]/50">
                <span className="font-semibold text-[#8b4a7a]">Aula 2 – 05/08/2026:</span> Construindo o pensamento clínico: fundamentos para o diagnóstico e o manejo das psicopatologias – Parte I
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-[#badbde]/50">
                <span className="font-semibold text-[#8b4a7a]">Aula 3 – 19/08/2026:</span> Construindo o pensamento clínico: fundamentos para o diagnóstico e o manejo das psicopatologias – Parte II
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-[#badbde]/50">
                <span className="font-semibold text-[#8b4a7a]">Aula 4 – 02/09/2026:</span> Esquizoidia, autismo, esquizofrenia, transtornos dissociativos e estados psicóticos
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-[#badbde]/50">
                <span className="font-semibold text-[#8b4a7a]">Aula 5 – 16/09/2026:</span> Falso self e transtorno de personalidade dependente
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-[#badbde]/50">
                <span className="font-semibold text-[#8b4a7a]">Aula 6 – 30/09/2026:</span> Organização borderline: o transtorno, o nível de organização de personalidade, e os 2 tipos clínicos: personalidade esquizoide e personalidade "como se"
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-[#badbde]/50">
                <span className="font-semibold text-[#8b4a7a]">Aula 7 – 14/10/2026:</span> Transtornos afetivos parte 1 – Paranoia e depressão reativa
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-[#badbde]/50">
                <span className="font-semibold text-[#8b4a7a]">Aula 8 – 28/10/2026:</span> Transtornos afetivos parte 2 – Transtorno bipolar, depressão psicótica e melancolia
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#333333]/80 italic mt-4 bg-white/60 p-3 rounded-lg border border-[#badbde]">
              Com a conclusão deste módulo serão abertas as inscrições para o Módulo 2, que dará prosseguimento ao percurso formativo. Informações sobre conteúdo, calendário e condições serão divulgadas oportunamente aos participantes.
            </p>
          </div>
        </div>

        {/* Investimento e CTA */}
        <div className="bg-white p-6 sm:p-8 rounded-[16px] border border-[#badbde] shadow-sm text-center max-w-xl mx-auto">
          <p className="text-sm font-medium text-[#8b4a7a] uppercase tracking-wide mb-1">
            Investimento
          </p>
          <p className="text-3xl sm:text-4xl font-extrabold text-[#d228a7] mb-6">
            R$ 770,00
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#d228a7] text-white text-base font-bold shadow-md hover:bg-[#b01e85] hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            <span>INSCREVA-SE</span>
          </a>
        </div>
      </div>
    </section>
  );
};
