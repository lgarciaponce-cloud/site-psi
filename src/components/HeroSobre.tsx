import React from "react";
import { LINKS } from "../data";
import { EditableImage } from "./EditableImage";


export const HeroSobre: React.FC = () => {
  return (
    <section
      id="sobre"
      className="pt-4 sm:pt-6 md:pt-8 pb-12 px-4 sm:px-6 md:pb-16 md:px-8 bg-[#f7e9e0] scroll-mt-24"
      aria-labelledby="hero-title"
    >
      <div className="max-w-[1120px] mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Título semântico para acessibilidade */}
          <h1 id="hero-title" className="sr-only">
            Larissa Ponce - Psicanálise Winnicottiana e Psicologia Clínica
          </h1>

          {/* PRIMEIRA Foto de Destaque com suporte a substituição manual */}
          <div className="w-full flex justify-center mb-6 md:mb-8">
            <div className="w-full max-w-[420px] sm:max-w-[500px] md:max-w-[600px] rounded-[16px] overflow-hidden border-4 border-[#badbde] shadow-lg bg-[#f7e9e0]">
              <EditableImage
                imageKey="photoSobre"
                fallbackSrc={LINKS.photoSobre}
                alt="Retrato profissional de Larissa Ponce com blazer lavanda e livro de Winnicott"
                className="w-full h-auto max-h-none object-contain block mx-auto"
                containerClassName="w-full h-auto"
                width="600"
                height="800"
                loading="eager"
              />
            </div>
          </div>

          {/* Credenciais em formato de balões estilizados com a paleta oficial, organizadas lado a lado sem empilhar em coluna única */}
          <div className="w-full max-w-[1080px] mx-auto mb-10 px-1">
            {/* Primeira fileira: 3 balões lado a lado */}
            <div className="flex flex-wrap items-stretch justify-center gap-3 sm:gap-4 md:gap-5 mb-3 sm:mb-4">
              {/* Balão 1: Psicóloga (CRP 08/24725) */}
              <div className="relative group inline-flex shrink-0">
                {/* Balão de trás / sombra com contorno preto */}
                <div
                  className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#badbde] rounded-[16px] sm:rounded-[18px] border-2 border-[#000000]"
                  aria-hidden="true"
                />
                {/* Balão da frente */}
                <div className="relative bg-[#8b4a7a] text-[#ffffff] border-2 border-[#000000] rounded-[16px] sm:rounded-[18px] px-4 sm:px-5 py-2.5 sm:py-3 text-center flex flex-col items-center justify-center min-h-[72px] sm:min-h-[76px] cursor-default select-none transition-transform duration-200 hover:-translate-y-0.5">
                  <span className="font-semibold text-sm sm:text-[14px] leading-tight">Psicóloga</span>
                  <span className="text-xs sm:text-[12px] opacity-90 mt-0.5 leading-tight">(CRP 08/24725)</span>
                </div>
              </div>

              {/* Balão 2: Psicanalista Winnicottiana (filiada à IBPW e IWA) */}
              <div className="relative group inline-flex shrink-0">
                {/* Balão de trás / sombra com contorno preto */}
                <div
                  className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#F5B8C5] rounded-[16px] sm:rounded-[18px] border-2 border-[#000000]"
                  aria-hidden="true"
                />
                {/* Balão da frente */}
                <div className="relative bg-[#d228a7] text-[#ffffff] border-2 border-[#000000] rounded-[16px] sm:rounded-[18px] px-4 sm:px-5 py-2.5 sm:py-3 text-center flex flex-col items-center justify-center min-h-[72px] sm:min-h-[76px] cursor-default select-none transition-transform duration-200 hover:-translate-y-0.5">
                  <span className="font-semibold text-sm sm:text-[14px] leading-tight">Psicanalista Winnicottiana</span>
                  <span className="text-xs sm:text-[12px] opacity-90 mt-0.5 leading-tight">(filiada à IBPW e IWA)</span>
                </div>
              </div>

              {/* Balão 3: Supervisora clínica */}
              <div className="relative group inline-flex shrink-0">
                {/* Balão de trás / sombra: Rosa claro (#F5B8C5) */}
                <div
                  className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#F5B8C5] rounded-[16px] sm:rounded-[18px] border-2 border-[#000000]"
                  aria-hidden="true"
                />
                {/* Balão da frente: Fundo #f1cdf1 com Contorno Preto (#000000) */}
                <div className="relative bg-[#f1cdf1] text-[#000000] border-2 border-[#000000] rounded-[16px] sm:rounded-[18px] px-4 sm:px-5 py-2.5 sm:py-3 text-center flex flex-col items-center justify-center min-h-[72px] sm:min-h-[76px] cursor-default select-none transition-transform duration-200 hover:-translate-y-0.5">
                  <span className="font-bold text-sm sm:text-[14px] leading-tight text-[#8b4a7a]">
                    Supervisora clínica
                  </span>
                  <span className="text-xs sm:text-[12px] opacity-90 mt-0.5 leading-tight text-[#8b4a7a]">
                    (Infância, Adolescência, Adultos e Quadros graves)
                  </span>
                </div>
              </div>
            </div>

            {/* Segunda fileira: 2 balões com quebra de linha diagramada lado a lado e centralizados */}
            <div className="flex flex-wrap items-stretch justify-center gap-3 sm:gap-4 md:gap-5">
              {/* Balão 4: Doutora e Mestre em Psicologia Clínica / (PUC-SP) */}
              <div className="relative group inline-flex">
                {/* Balão de trás / sombra com contorno preto */}
                <div
                  className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#c5e6e8] rounded-[16px] sm:rounded-[18px] border-2 border-[#000000]"
                  aria-hidden="true"
                />
                {/* Balão da frente */}
                <div className="relative bg-[#badbde] text-[#1d3d40] border-2 border-[#000000] rounded-[16px] sm:rounded-[18px] px-4 sm:px-6 py-2.5 sm:py-3 text-center flex flex-col items-center justify-center min-h-[72px] sm:min-h-[76px] cursor-default select-none transition-transform duration-200 hover:-translate-y-0.5">
                  <span className="font-semibold text-sm sm:text-[14px] leading-tight">
                    Doutora e Mestre em Psicologia Clínica
                  </span>
                  <span className="text-xs sm:text-[12px] font-bold opacity-90 mt-0.5 leading-tight">
                    (PUC-SP)
                  </span>
                </div>
              </div>

              {/* Balão 5: Docente de pós-graduação / (EPPM-PR) (PUC-PR) pintado em Rosa claro pastel (#F5B8C5) */}
              <div className="relative group inline-flex">
                {/* Balão de trás / sombra com contorno preto */}
                <div
                  className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#c5e6e8] rounded-[16px] sm:rounded-[18px] border-2 border-[#000000]"
                  aria-hidden="true"
                />
                {/* Balão da frente em Rosa claro pastel estilo rosa bebê (#F5B8C5) */}
                <div className="relative bg-[#F5B8C5] text-[#3e1d37] border-2 border-[#000000] rounded-[16px] sm:rounded-[18px] px-4 sm:px-6 py-2.5 sm:py-3 text-center flex flex-col items-center justify-center min-h-[72px] sm:min-h-[76px] cursor-default select-none transition-transform duration-200 hover:-translate-y-0.5">
                  <span className="font-semibold text-sm sm:text-[14px] leading-tight">
                    Docente de pós-graduação
                  </span>
                  <span className="text-xs sm:text-[12px] font-bold opacity-90 mt-0.5 leading-tight">
                    (EPPM-PR) (PUC-PR)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Texto corrido (p): 1rem (16px), line-height 1.5-1.6, max-width 65ch centralizado, cor #333333 */}
          <div className="max-w-[65ch] mx-auto space-y-6 text-left body-text mb-10">
            <p>
              Com <strong className="font-semibold text-[#8b4a7a]">mais de 15 anos de prática clínica</strong> e{" "}
              <strong className="font-semibold text-[#8b4a7a]">uma década dedicada à docência e à supervisão clínica</strong>,{" "}
              criei e encontrei minha trajetória profissional entre a vida acadêmica e a prática clínica winnicottianamente orientada.
            </p>

            <p>
              Meus estudos concentram-se no{" "}
              <strong className="font-semibold text-[#8b4a7a]">desenvolvimento infanto-juvenil</strong> a partir da{" "}
              <strong className="font-semibold text-[#8b4a7a]">Teoria do Amadurecimento Emocional de D. W. Winnicott</strong>,
              nos enquadres clínicos diferenciados e no manejo de pacientes-limite e de difícil acesso.
            </p>

            <p>
              Ao longo de mais de 10 anos como{" "}
              <strong className="font-semibold text-[#8b4a7a]">supervisora clínica</strong> nas modalidades individual e grupal,
              acompanhei mais de <strong className="font-semibold text-[#8b4a7a]">120 profissionais</strong> de psicologia e psicanálise em um espaço de troca, compartilhamento de experiências e conhecimento e acolhimento de dúvidas e angústias.
            </p>

            <p>
              Atualmente trabalho em duas instituições, como{" "}
              <strong className="font-semibold text-[#8b4a7a]">
                professora de especialização em Psicoterapia Psicanalítica Contemporânea
              </strong>{" "}
              da Escola de Psicoterapia Psicanalítica de Maringá (EPPM) e da{" "}
              <strong className="font-semibold text-[#8b4a7a]">
                Pós-Graduação em Psicanálise Winnicottiana da PUC-PR
              </strong>, onde ministro disciplinas com os seguintes temas: a escuta, a comunicação e interpretação no setting analítico; as estratégias para a organização do pensamento clínico, e sobre as propostas teórico-clínicas de D. W. Winnicott.
            </p>

            <p>
              Atuo ainda como palestrante e professora em cursos de formação continuada, sendo idealizadora do curso{" "}
              <strong className="font-semibold text-[#8b4a7a]">
                Imersão Winnicottiana: Criando-Encontrando a Teoria e a Clínica
              </strong>.
            </p>
          </div>


        </div>
      </div>
    </section>
  );
};
