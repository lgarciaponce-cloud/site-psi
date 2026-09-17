import React from "react";
import { Sparkles, Users, GraduationCap } from "lucide-react";

export const AreasAtuacao: React.FC = () => {
  return (
    <section id="areas-atuacao" className="section-padding bg-[#DCEDF8]" aria-label="Áreas de atuação e Grupos de Estudo">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="sr-only">Áreas de atuação</h2>
        {/* Grid responsivo: 1 coluna no mobile, 3 colunas no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#ffffff] p-8 rounded-[12px] border border-[#badbde] shadow-sm flex flex-col items-center justify-center text-center gap-4 h-full transition-transform hover:-translate-y-1 duration-200">
            <span className="w-14 h-14 rounded-full bg-[#c5e6e8]/40 flex items-center justify-center text-[#8b4a7a]">
              <Sparkles className="w-7 h-7" aria-hidden="true" />
            </span>
            <h3 className="heading-h3">
              Psicoterapia | Psicanálise Winnicottiana
            </h3>
            <p className="body-text text-sm">
              Atendimento clínico individual fundamentado na teoria do amadurecimento e no cuidado sensível.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#ffffff] p-8 rounded-[12px] border border-[#badbde] shadow-sm flex flex-col items-center justify-center text-center gap-4 h-full transition-transform hover:-translate-y-1 duration-200">
            <span className="w-14 h-14 rounded-full bg-[#e8b4ca]/40 flex items-center justify-center text-[#8b4a7a]">
              <Users className="w-7 h-7" aria-hidden="true" />
            </span>
            <h3 className="heading-h3">
              Supervisão Clínica
            </h3>
            <p className="body-text text-sm">
              Espaço transicional e reflexivo para acompanhamento de casos nas modalidades individual e grupal.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#ffffff] p-8 rounded-[12px] border border-[#badbde] shadow-sm flex flex-col items-center justify-center text-center gap-4 h-full transition-transform hover:-translate-y-1 duration-200">
            <span className="w-14 h-14 rounded-full bg-[#badbde]/40 flex items-center justify-center text-[#8b4a7a]">
              <GraduationCap className="w-7 h-7" aria-hidden="true" />
            </span>
            <h3 className="heading-h3">
              Cursos | Grupos de Estudo
            </h3>
            <p className="body-text text-sm">
              Transmissão clara e aprofundada da teoria e técnica winnicottiana para psicólogos e psicanalistas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
