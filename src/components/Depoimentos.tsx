import React from "react";
import { TESTIMONIALS } from "../data";
import { Quote } from "lucide-react";
import { EditableImage } from "./EditableImage";

const TESTIMONIAL_CONFIGS: { key: string; posClass: string }[] = [
  { key: "testimonialMikaely", posClass: "avatar-pos-mikaely" },
  { key: "testimonialLara", posClass: "avatar-pos-lara" },
  { key: "testimonialFernanda", posClass: "avatar-pos-fernanda" },
  { key: "testimonialMarcela", posClass: "avatar-pos-marcela" },
  { key: "testimonialJanayna", posClass: "avatar-pos-janayna" },
  { key: "testimonialVaneila", posClass: "avatar-pos-vaneila" },
  { key: "testimonialAryane", posClass: "avatar-pos-aryane" },
  { key: "testimonialGina", posClass: "avatar-pos-gina" },
  { key: "testimonialSylvelaine", posClass: "avatar-pos-sylvelaine" },
  { key: "testimonialAdnna", posClass: "avatar-pos-adnna" },
  { key: "testimonialEloisa", posClass: "avatar-pos-eloisa" },
];

export const Depoimentos: React.FC = () => {
  return (
    <section
      id="depoimentos"
      className="section-padding bg-[#e8b4ca]"
      aria-labelledby="depoimentos-heading"
    >
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center max-w-[65ch] mx-auto mb-10 md:mb-12">
          <h2 id="depoimentos-heading" className="heading-h2 uppercase tracking-wide mb-2">
            RESSONÂNCIAS DA IMERSÃO NA TEORIA E NA CLÍNICA dos participantes
          </h2>
          <div className="w-20 h-1 bg-[#d228a7] mx-auto mb-4 rounded-full"></div>
        </div>

        {/* Grid responsivo: 1 coluna no mobile, até 3 colunas no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => {
            const config = TESTIMONIAL_CONFIGS[idx] || {
              key: `testimonial_${idx}`,
              posClass: "avatar-pos-mikaely"
            };

            return (
              <article
                key={idx}
                className="bg-[#ffffff] p-6 sm:p-7 rounded-[12px] border border-[#badbde] shadow-sm flex flex-col justify-start h-full transition-transform hover:-translate-y-1 duration-200"
              >
                {t.image && (
                  <div className="flex flex-col items-center mb-3">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#8b4a7a] shadow-sm mb-2 bg-[#f7e9e0] shrink-0">
                      <EditableImage
                        imageKey={config.key}
                        fallbackSrc={t.image}
                        alt={t.name}
                        className={`w-full h-full object-cover rounded-full ${config.posClass}`}
                        containerClassName="w-full h-full rounded-full"
                        width={80}
                        height={80}
                        showHoverButton={false}
                      />
                    </div>
                    <p className="font-semibold text-sm text-[#8b4a7a] text-center">
                      {t.name}
                    </p>
                    <p className="text-xs text-[#333333]/80 text-center">
                      {t.role}
                    </p>
                  </div>
                )}
                <div className="flex-1 flex flex-col justify-start">
                  <Quote className="w-7 h-7 text-[#8b4a7a] mb-2 opacity-70" aria-hidden="true" />
                  <blockquote className="body-text italic">
                    <p className="leading-relaxed">"{t.quote}"</p>
                  </blockquote>
                </div>
                {!t.image && (
                  <footer className="pt-4 border-t border-[#badbde]/60 mt-auto">
                    <p className="font-semibold text-sm text-[#8b4a7a]">
                      {t.name}
                    </p>
                    <p className="text-xs text-[#333333]/80">
                      {t.role}
                    </p>
                  </footer>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
