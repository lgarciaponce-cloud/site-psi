import React from "react";
import { LINKS } from "../data";
import { MessageCircle } from "lucide-react";
import { EditableImage } from "./EditableImage";
import coracaoImg from "../assets/images/larissa_coracao_supervisao_1788871370326.jpg";

export const Supervisao: React.FC = () => {
  return (
    <section
      id="supervisao"
      className="section-padding bg-[#c5e6e8]"
      aria-labelledby="supervisao-heading"
    >
      <div className="max-w-[1120px] mx-auto">
        <div className="flex flex-col items-center gap-10">
          {/* Título de Seção (H2): 1.5rem mobile, 2rem desktop, #8b4a7a */}
          <div className="text-center">
            <h2 id="supervisao-heading" className="heading-h2 uppercase tracking-wide">
              Supervisão Clínica
            </h2>
            <div className="w-20 h-1 bg-[#d228a7] mx-auto mt-3 rounded-full"></div>
            
            {/* Citação em destaque com background #e8b4ca (rosa pastel) */}
            <div className="bg-[#e8b4ca] border-l-4 border-[#8b4a7a] p-6 rounded-r-[12px] shadow-sm max-w-[65ch] mx-auto mt-6">
              <p className="font-['Playfair_Display',Georgia,serif] text-[#8b4a7a] italic text-lg md:text-xl font-medium leading-relaxed">
                "A supervisão clínica é um espaço fundamental para o amadurecimento de um psicoterapeuta comprometido com a qualidade de seu trabalho."
              </p>
            </div>
          </div>

          {/* Imagem Proporcional com suporte a troca manual */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[500px] rounded-[16px] overflow-hidden border-4 border-[#ffffff] shadow-md">
              <EditableImage
                imageKey="photoSupervisao"
                fallbackSrc={coracaoImg}
                alt="Larissa Ponce acolhedora com almofada de coração em orientação e supervisão clínica"
                className="w-full max-w-full md:max-w-[500px] h-auto object-cover block"
                loading="lazy"
                width="500"
                height="750"
              />
            </div>
          </div>

          {/* Blocos de Texto corrido: 1rem, line-height 1.5-1.6, max-width 65ch centralizado, cor #333333 */}
          <div className="w-full max-w-[65ch] mx-auto space-y-5 body-text text-left">
            <div className="p-6 bg-[#ffffff] rounded-[12px] border border-[#badbde] shadow-xs">
              <p>
                Nas modalidades individual e grupal, a supervisão se dirige a psicólogos e psicanalistas que buscam aprofundar sua prática clínica na compreensão dos casos, no manejo de situações complexas e no desenvolvimento de uma escuta sensível e autêntica.
              </p>
            </div>

            <p>
              Pautada na ética do cuidado, tão valiosa para Winnicott, a travessia acompanhada entre profissionais se constitui como um espaço seguro de escuta que, ao respeitar e valorizar a singularidade do encontro terapeuta-paciente, fomenta a reflexão e a elaboração da experiência clínica — terreno fértil onde o percurso profissional encontra sustentação para amadurecer.
            </p>

            <p>
              Frequentemente, nos deparamos com pacientes — e, muitas vezes, com suas famílias, em um último recurso após tratamentos fracassados — que padecem de sofrimentos profundos e demandantes.
            </p>

            {/* Citação interna com fundo #e8b4ca */}
            <blockquote className="my-3 p-6 border-l-4 border-[#8b4a7a] bg-[#e8b4ca]/70 rounded-r-[12px]">
              <p className="font-['Playfair_Display',Georgia,serif] text-[#8b4a7a] italic text-base md:text-lg leading-relaxed">
                Manejar clinicamente essas agonias é uma tarefa que desafia até mesmo os psicoterapeutas mais experientes, exigindo um cuidado que transcende os limites rígidos do setting tradicional, dos cinquenta minutos e de um enquadre distante.
              </p>
            </blockquote>

            <p>
              No trabalho com esse público, o grande desafio dos profissionais reside nas dificuldades de comunicação, que nem sempre indicam resistência ao tratamento.
            </p>

            <p>
              Para alcançar aqueles que não conseguem expressar sua dor verbalmente — adultos com aspectos emocionais não amadurecidos, pacientes-limite que testam nossos limites com ataques pessoais —, precisamos ampliar nosso repertório e desenvolver, de modo criativo, nosso próprio jeito (embasado) de manejar cada caso.
            </p>

            <p>
              Nesse ambiente facilitador, adaptado ao ritmo pessoal de cada supervisionando, as angústias e dúvidas podem ser sustentadas, os fenômenos clínicos compreendidos e as estratégias de manejo adequado a cada caso podem ser criados e encontrados em um espaço transicional seguro, potente e criativo que pavimenta o amadurecimento pessoal de cada profissional e contribui para a construção de uma prática clínica autônoma, autêntica e significativa.
            </p>
          </div>

          {/* Botão Primário: fundo #d228a7, texto branco, border-radius: 8px, hover brightness(0.9) */}
          <div className="pt-2 text-center">
            <a
              id="supervisao-btn-agendamento"
              href={LINKS.whatsappSupervisao}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base font-medium"
            >
              <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>INFORMAÇÕES E AGENDAMENTO</span>
            </a>
          </div>


        </div>
      </div>
    </section>
  );
};
