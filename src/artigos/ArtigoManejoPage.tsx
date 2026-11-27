import { ArrowLeft } from "lucide-react";
import corpo from "./manejo-clinico-winnicottiano.html?raw";

// Artigo do blog. O texto vem do Claude Doc revisado pela autora,
// convertido para HTML em manejo-clinico-winnicottiano.html.

export const TITULO =
  "O manejo clínico winnicottiano: especificidades do trabalho psicanalítico com pacientes-limite e em quadros sintomatológicos especiais";

export default function ArtigoManejoPage() {
  return (
    <div className="antialiased bg-[#f7e9e0] text-[#333333] min-h-screen">
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <header className="sticky top-0 z-50 w-full border-b border-[#badbde] bg-[#DCEDF8]/95 backdrop-blur-sm py-2">
        <div className="max-w-[1120px] mx-auto px-4 flex items-center justify-between gap-3">
          <a href="/" aria-label="Larissa Ponce - Início">
            <img
              src="/logo-oficial.png"
              alt="Larissa Ponce - Psicanálise Winnicottiana e Psicologia"
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </a>
          <nav aria-label="Navegação" className="flex items-center gap-4">
            <a
              href="/curso-psicanalise-winnicottiana/"
              className="hidden md:inline text-sm font-medium text-[#8b4a7a] hover:text-[#d228a7]"
            >
              Imersão Winnicottiana
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#8b4a7a] hover:text-[#d228a7]"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Voltar ao site</span>
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content" className="section-padding">
        <article className="max-w-[760px] mx-auto artigo">
          <h1 className="heading-h2 mb-3">{TITULO}</h1>
          <p className="text-sm text-[#8b4a7a] font-medium mb-6">
            Por Larissa Garcia Ponce · <time dateTime="2026-11-25">25 de novembro de 2026</time>
          </p>
          <div dangerouslySetInnerHTML={{ __html: corpo }} />
        </article>
      </main>

      <footer className="bg-[#DCEDF8] border-t border-[#badbde]">
        <div className="max-w-[1120px] mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <a href="/" className="text-sm font-medium text-[#8b4a7a] hover:text-[#d228a7]">
            larissaponce.com.br
          </a>
          <p className="text-xs sm:text-sm text-[#333333]/90 font-medium">
            © 2026 Larissa Ponce | Psicanálise Winnicottiana | Psicologia. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
