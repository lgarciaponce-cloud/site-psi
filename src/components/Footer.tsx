import React from "react";
import { LINKS } from "../data";
import { MessageCircle } from "lucide-react";
import { EditableImage } from "./EditableImage";

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-[#DCEDF8] text-[#333333] border-t border-[#badbde]">
        <div className="max-w-[1120px] mx-auto px-6 py-10 md:px-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left bg-[#DCEDF8]">
          <div className="w-48 sm:w-56">
            <EditableImage
              imageKey="logo"
              alt="Larissa Ponce - Psicanálise Winnicottiana e Psicologia"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>

          <p className="text-xs sm:text-sm text-[#333333]/90 font-medium">
            © 2026 Larissa Ponce | Psicanálise Winnicottiana | Psicologia. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Botão flutuante para WhatsApp no mobile */}
      <a
        href={LINKS.whatsappSupervisao}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 w-14 h-14 bg-[#d228a7] text-[#ffffff] rounded-full flex items-center justify-center shadow-lg hover:brightness-90 transition-all z-40 md:hidden focus-visible:outline-2 focus-visible:outline-[#8b4a7a] focus-visible:outline-offset-2"
        aria-label="Abrir conversa no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" aria-hidden="true" />
      </a>
    </>
  );
};
