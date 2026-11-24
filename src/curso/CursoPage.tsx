import React from "react";
import { ShoppingCart, ArrowLeft, Quote } from "lucide-react";
import { LINKS, TESTIMONIALS } from "../data";

// Página do curso Imersão Winnicottiana, pensada para busca (Google) e IAs:
// respostas diretas no início de cada seção, tabelas e FAQ em texto.
// O FAQ é repetido como JSON-LD em curso-psicanalise-winnicottiana/index.html.

const AVATAR_POS: Record<string, string> = {
  "Mikaely Vaz": "avatar-pos-mikaely",
  "Lara Balera": "avatar-pos-lara",
  "Fernanda Valentim": "avatar-pos-fernanda",
  "Marcela de Sá Rezende": "avatar-pos-marcela",
  "Janayna Longhi": "avatar-pos-janayna",
  "Vaneila Buaszik": "avatar-pos-vaneila",
  "Aryane Penteado": "avatar-pos-aryane",
  "Gina Paula Talon Carlos": "avatar-pos-gina",
  "Sylvelaine Mendonça": "avatar-pos-sylvelaine",
  "Adnna Coqui": "avatar-pos-adnna",
  "Eloisa Dib": "avatar-pos-eloisa",
};

export const FAQ: { q: string; a: string }[] = [
  {
    q: "O que é a Imersão Winnicottiana?",
    a: "É um curso online de aprofundamento teórico-clínico na obra de D. W. Winnicott, conduzido por Larissa Garcia Ponce, que articula três frentes de estudo: a Teoria do Amadurecimento Emocional, os pressupostos winnicottianos da técnica, do diagnóstico e da nosografia e o manejo clínico, trabalhado em três encontros imersivos com casos ilustrativos e exercícios de construção de intervenções interpretativas.",
  },
  {
    q: "O curso trata apenas da Teoria do Amadurecimento Emocional?",
    a: "A Teoria do Amadurecimento ocupa as quatro primeiras aulas porque oferece o fundamento a partir do qual o diagnóstico e a técnica são pensados em Winnicott. O percurso segue para a quinta aula, dedicada aos pressupostos da técnica, do diagnóstico e do tratamento, e para os encontros imersivos, nos quais o manejo clínico é examinado a partir de casos e da formulação de hipóteses diagnósticas.",
  },
  {
    q: "Como o diagnóstico é pensado na perspectiva winnicottiana?",
    a: "Como Winnicott compreende a doença como interrupção do amadurecimento, o diagnóstico considera o momento e a natureza da falha ambiental e a organização defensiva que dela resultou, sem se apoiar apenas nos sintomas. A quinta aula apresenta os critérios desse diagnóstico e a classificação dos pacientes em integrados, recém-integrados e não-integrados (Fulgencio, 2016).",
  },
  {
    q: "O curso aborda a análise padrão e a análise modificada?",
    a: "Sim. A distinção entre análise padrão e análise modificada é estudada na quinta aula, articulada à classificação dos pacientes por nível de integração e às variedades clínicas da transferência (Winnicott, 1955), e retomada nos encontros imersivos a partir de casos.",
  },
  {
    q: "Quais quadros clínicos são estudados?",
    a: "Além das neuroses, dos estados-limite e das psicoses, situados segundo a linha do amadurecimento, o curso aborda os quadros sintomatológicos especiais: a depressão, a persecutoriedade, a tendência antissocial e a psicopatia, os quadros psicossomáticos e as adicções e as organizações de falso self, considerando para cada um a falha ambiental que o origina e o manejo que dela decorre.",
  },
  {
    q: "Como a interpretação é trabalhada no curso?",
    a: "A tarefa interpretativa na perspectiva winnicottiana é trabalhada nos encontros imersivos, a partir de casos ilustrativos e de exercícios de construção de intervenções, junto com as modalidades diferenciadas de intervenção e as formas de comunicação e de não comunicação descritas por Winnicott (1963).",
  },
  {
    q: "O curso serve para quem está começando na clínica?",
    a: "Sim. A sequência das aulas parte dos fundamentos da Teoria do Amadurecimento e chega ao manejo, o que permite a quem está iniciando a prática clínica, ou a orientação winnicottiana, organizar o pensamento clínico desde a base. Quem já conhece a obra encontra na articulação entre teoria, diagnóstico e técnica um apoio para a leitura de pacientes de difícil acesso e de quadros graves.",
  },
  {
    q: "Quantas horas tem o curso e como as aulas são oferecidas?",
    a: "São mais de 12 horas de conteúdo gravado, entre mais de 8 horas de aulas teóricas e 6 horas distribuídas em três encontros imersivos de 2 horas. Todas as aulas, inclusive os encontros imersivos, ficam disponíveis na plataforma Hotmart por 8 meses a partir da compra.",
  },
  {
    q: "O curso oferece certificado?",
    a: "Sim, o curso oferece certificado.",
  },
  {
    q: "Quanto custa a Imersão Winnicottiana?",
    a: "R$ 1.080,00 à vista ou em até 12 parcelas de R$ 111,70 na Hotmart.",
  },
  {
    q: "Quem conduz o curso?",
    a: "Larissa Garcia Ponce, psicóloga (CRP 08/24725) formada pela UNESP, mestre e doutora em Psicologia Clínica pela PUC-SP e psicanalista winnicottiana filiada ao IBPW e à IWA. Tem mais de 15 anos de prática clínica, há mais de uma década atua como docente e supervisora clínica e leciona na pós-graduação da EPPM e da PUC-PR.",
  },
  {
    q: "A Imersão é uma formação em psicanálise?",
    a: "Não. Trata-se de um curso de aprofundamento teórico-clínico, que pode acompanhar a formação psicanalítica, a análise pessoal e a supervisão clínica, sem substituí-las.",
  },
];

const FRENTES = [
  {
    n: "1",
    titulo: "Teoria do Amadurecimento Emocional",
    onde: "Aulas 1 a 4",
    texto:
      "Acompanha o processo de amadurecimento da dependência absoluta à independência relativa, situando em cada fase as tarefas que o indivíduo tem de realizar e as condições ambientais de que depende para realizá-las.",
    href: "#amadurecimento",
  },
  {
    n: "2",
    titulo: "Técnica, diagnóstico e nosografia",
    onde: "Aula 5",
    texto:
      "Apresenta os pressupostos winnicottianos da técnica, do diagnóstico e do tratamento: os critérios de um diagnóstico orientado pelo amadurecimento, a classificação dos pacientes por nível de integração e os quadros sintomatológicos especiais.",
    href: "#diagnostico",
  },
  {
    n: "3",
    titulo: "Manejo clínico",
    onde: "Encontros imersivos 1, 2 e 3",
    texto:
      "Examina a técnica ilustrada em casos clínicos, com a formulação de hipóteses diagnósticas e a construção de intervenções interpretativas compatíveis com o momento do amadurecimento em que o paciente se encontra.",
    href: "#manejo",
  },
];

const AULAS = [
  {
    aula: "Aula 1",
    tema: "Fase de dependência absoluta",
    foco: "Vida e obra de Winnicott. Continuidade de ser, gesto espontâneo e ilusão de onipotência; preocupação materna primária e as funções da mãe suficientemente boa (holding, handling e object presenting); as tarefas de integração no tempo e no espaço, personalização e realização.",
  },
  {
    aula: "Aula 2",
    tema: "Fase de dependência relativa",
    foco: "Desilusão e início dos processos mentais; fenômenos transicionais e objeto transicional; uso do objeto; o estágio do Eu Sou.",
  },
  {
    aula: "Aula 3",
    tema: "Fase rumo à independência relativa",
    foco: "Estágio do concernimento e círculo benigno.",
  },
  {
    aula: "Aula 4",
    tema: "Fase de independência relativa",
    foco: "Complexo de Édipo, latência, adolescência, idade adulta e velhice.",
  },
];

const th = "text-left font-semibold text-[#8b4a7a] p-3 border-b-2 border-[#badbde] align-top";
const td = "p-3 border-b border-[#badbde]/70 align-top body-text text-sm";
const thRow = `${th} border-b border-[#badbde]/70`;

const CTA: React.FC<{ label: string }> = ({ label }) => (
  <a href={LINKS.hotmart} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
    <ShoppingCart className="w-4 h-4" aria-hidden="true" />
    <span>{label}</span>
  </a>
);

const Section: React.FC<{ id: string; title: string; kicker?: string; bg?: string; children: React.ReactNode }> = ({
  id,
  title,
  kicker,
  bg = "bg-[#f7e9e0]",
  children,
}) => (
  <section id={id} className={`section-padding ${bg}`} aria-labelledby={`${id}-h`}>
    <div className="max-w-[880px] mx-auto">
      {kicker && (
        <p className="text-xs font-semibold uppercase tracking-wider text-[#8b4a7a] mb-2">{kicker}</p>
      )}
      <h2 id={`${id}-h`} className="heading-h2 mb-4">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

export default function CursoPage() {
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
          <nav aria-label="Seções da página" className="flex items-center gap-4">
            <a href="#frentes" className="hidden md:inline text-sm font-medium text-[#8b4a7a] hover:text-[#d228a7]">
              Programa
            </a>
            <a href="#docente" className="hidden md:inline text-sm font-medium text-[#8b4a7a] hover:text-[#d228a7]">
              Docente
            </a>
            <a href="#faq" className="hidden md:inline text-sm font-medium text-[#8b4a7a] hover:text-[#d228a7]">
              Perguntas
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

      <main id="main-content">
        {/* Abertura */}
        <section className="section-padding bg-[#DCEDF8]" aria-labelledby="curso-h1">
          <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 items-center">
            <div>
              <span className="inline-block bg-[#c5e6e8] text-[#8b4a7a] px-4 py-1 rounded-[6px] text-xs font-semibold uppercase tracking-wider mb-3">
                Imersão Winnicottiana: Criando-Encontrando a Teoria e a Clínica
              </span>
              <h1 id="curso-h1" className="heading-h2 mb-5">
                Curso de Psicanálise Winnicottiana: amadurecimento, diagnóstico e manejo clínico
              </h1>
              <p className="body-text text-base md:text-lg mb-4">
                A Imersão Winnicottiana é um curso online conduzido pela psicanalista Larissa Garcia Ponce, doutora e
                mestre em Psicologia Clínica pela PUC-SP, que percorre a obra de D. W. Winnicott em três frentes
                articuladas: a Teoria do Amadurecimento Emocional, os pressupostos winnicottianos da técnica, do
                diagnóstico e da nosografia e o manejo clínico, examinado em encontros imersivos nos quais a técnica é
                ilustrada por casos e pela construção de intervenções interpretativas.
              </p>
              <p className="body-text mb-7">
                São mais de 12 horas de aulas gravadas, com acesso por 8 meses e certificado.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#frentes" className="btn-secondary inline-flex">
                  Ver o programa
                </a>
              </div>
            </div>
            <img
              src="/curso/larissa-boneco-winnicott.jpg"
              alt="Larissa Garcia Ponce sorrindo, com um boneco de crochê de D. W. Winnicott"
              width={900}
              height={1600}
              className="w-full max-w-[360px] mx-auto rounded-[16px] shadow-md object-cover"
            />
          </div>
        </section>

        <Section id="ficha" title="Ficha do curso" bg="bg-[#ffffff]">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>
                {[
                  ["Formato", "Online, com aulas gravadas na plataforma Hotmart"],
                  ["Carga horária total", "Mais de 12 horas"],
                  ["Aulas teóricas", "Mais de 8 horas, em cinco aulas"],
                  ["Encontros imersivos", "6 horas, em três encontros de 2 horas, com casos ilustrativos e exercícios clínicos"],
                  ["Acesso", "8 meses após a compra"],
                  ["Certificado", "Sim"],
                  ["Docente", "Larissa Garcia Ponce, psicóloga (CRP 08/24725), mestre e doutora em Psicologia Clínica (PUC-SP)"],
                  ["Investimento", "R$ 1.080,00 à vista ou 12x de R$ 111,70"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <th scope="row" className={`${thRow} w-[38%]`}>
                      {k}
                    </th>
                    <td className={td}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="frentes" title="As três frentes do curso">
          <p className="body-text mb-6">
            O curso organiza-se em três módulos que correspondem a três frentes de estudo. A Teoria do Amadurecimento
            Emocional constitui o fundamento a partir do qual Winnicott pensa a saúde, a doença e o tratamento, e é
            dela que derivam o diagnóstico, a nosografia e as escolhas técnicas que o manejo clínico coloca em
            prática.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {FRENTES.map((f) => (
              <a
                key={f.n}
                href={f.href}
                className="block bg-[#ffffff] p-6 rounded-[12px] border border-[#badbde] shadow-sm hover:border-[#8b4a7a] transition-colors"
              >
                <span className="block text-3xl font-semibold text-[#d228a7] mb-2" aria-hidden="true">
                  {f.n}
                </span>
                <h3 className="heading-h3 mb-1">{f.titulo}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8b4a7a] mb-3">{f.onde}</p>
                <p className="body-text text-sm">{f.texto}</p>
              </a>
            ))}
          </div>

          <div className="mt-10 bg-[#ffffff] p-6 sm:p-8 rounded-[16px] border border-[#badbde] shadow-sm">
            <h3 className="heading-h3 mb-2 text-center">Amostra do curso</h3>
            <p className="body-text mb-5 text-center">Um trecho das aulas, para conhecer a proposta e a dinâmica do curso.</p>
            <div className="video-frame shadow-md mx-auto">
              <iframe
                src={LINKS.videoEmbed}
                title="Amostra do Curso Imersão Winnicottiana"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </Section>

        <Section
          id="amadurecimento"
          kicker="Frente 1 · Aulas 1 a 4"
          title="Teoria do Amadurecimento Emocional"
          bg="bg-[#ffffff]"
        >
          <div className="space-y-4 body-text mb-6">
            <p>
              As quatro primeiras aulas apresentam a Teoria do Amadurecimento Emocional, desde a biografia de
              Winnicott e o contexto histórico em que suas formulações se constituíram até o percurso que vai da
              dependência absoluta à independência relativa. Em cada fase, o estudo situa as tarefas que o indivíduo
              tem de realizar e as condições ambientais de que depende para realizá-las, uma vez que, para Winnicott, o
              bebê só pode começar a ser se um ambiente facilitador se adaptar às suas necessidades e sustentar a sua
              continuidade de ser.
            </p>
            <p>
              Nos estágios iniciais, as tarefas de integração no tempo e no espaço, de personalização e de realização
              dependem das funções exercidas pela mãe suficientemente boa em estado de preocupação materna primária.
              A partir daí, o curso acompanha a desilusão, os fenômenos transicionais, o uso do objeto, o estágio do
              Eu Sou e o concernimento, chegando às questões do complexo de Édipo, da adolescência, da idade adulta e
              da velhice.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th scope="col" className={th}>Aula</th>
                  <th scope="col" className={th}>Fase</th>
                  <th scope="col" className={th}>Conceitos trabalhados</th>
                </tr>
              </thead>
              <tbody>
                {AULAS.map((a) => (
                  <tr key={a.aula}>
                    <th scope="row" className={`${thRow} whitespace-nowrap`}>{a.aula}</th>
                    <td className={td}>{a.tema}</td>
                    <td className={td}>{a.foco}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="diagnostico" kicker="Frente 2 · Aula 5" title="Técnica, diagnóstico e nosografia">
          <div className="space-y-4 body-text">
            <p>
              A quinta aula trata dos pressupostos winnicottianos da técnica, do diagnóstico e do tratamento. Uma vez
              que Winnicott compreende a doença como interrupção do amadurecimento, o diagnóstico deixa de se apoiar
              apenas na sintomatologia e passa a considerar o momento e a natureza da falha ambiental, assim como a
              organização defensiva que dela resultou.
            </p>
            <p>
              A partir desse pressuposto, a aula apresenta os critérios de um diagnóstico orientado pelo
              amadurecimento, a classificação dos pacientes em integrados, recém-integrados e não-integrados
              (Fulgencio, 2016), a distinção entre análise padrão e análise modificada, as variedades clínicas da
              transferência e os quadros sintomatológicos especiais: a depressão, a persecutoriedade, a tendência
              antissocial e a psicopatia, os quadros psicossomáticos e as adicções e as organizações de falso self.
            </p>
          </div>
        </Section>

        <Section id="manejo" kicker="Frente 3 · Encontros imersivos 1, 2 e 3" title="Manejo clínico: a técnica ilustrada" bg="bg-[#ffffff]">
          <div className="space-y-4 body-text">
            <p>
              Os três encontros imersivos, de 2 horas cada, são dedicados à técnica ilustrada. A partir de casos
              clínicos, exercita-se a formulação de hipóteses diagnósticas orientadas pelo amadurecimento e a
              construção de intervenções compatíveis com o momento em que o paciente se encontra.
            </p>
            <p>
              Nesse percurso são trabalhadas a tarefa interpretativa na perspectiva winnicottiana, as modalidades
              diferenciadas de intervenção e as formas de comunicação e de não comunicação que orientam o analista na
              clínica de pacientes regredidos e de difícil acesso.
            </p>
          </div>
        </Section>

        <Section id="para-quem" title="Para quem é o curso">
          <ul className="list-disc pl-5 space-y-2 body-text">
            <li>
              <strong>Psicólogos clínicos e psicanalistas</strong> de orientação winnicottiana, da psicanálise inglesa
              ou contemporânea que desejam articular teoria, diagnóstico e técnica.
            </li>
            <li>
              <strong>Profissionais em início de prática clínica</strong> que buscam organizar o pensamento clínico a
              partir da Teoria do Amadurecimento.
            </li>
            <li>
              <strong>Quem atende pacientes de difícil acesso</strong>, estados-limite, quadros psicossomáticos ou
              organizações de falso self, em que a técnica clássica encontra seus limites.
            </li>
            <li>
              <strong>Estudantes de Psicologia e de Psicanálise</strong> que procuram uma base conceitual rigorosa,
              acompanhada de ilustrações clínicas.
            </li>
          </ul>
        </Section>

        <Section id="docente" title="Quem conduz: Larissa Garcia Ponce" bg="bg-[#ffffff]">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-8 items-start">
            <img
              src="/curso/larissa-quadro-winnicott.jpg"
              alt="Larissa Garcia Ponce ao lado de um quadro com fotografia de D. W. Winnicott"
              width={768}
              height={1024}
              loading="lazy"
              className="w-full max-w-[320px] mx-auto rounded-[16px] shadow-md object-cover"
            />
            <div className="space-y-4 body-text">
              <p>
                Larissa Garcia Ponce é psicóloga formada pela UNESP (CRP 08/24725), mestre e doutora em Psicologia
                Clínica pela PUC-SP e psicanalista winnicottiana filiada ao IBPW e à IWA. Atua há mais de 15 anos na
                clínica com adolescentes, adultos e idosos. No mestrado, estudou os cuidados oferecidos a crianças e
                adolescentes em acolhimento institucional e, no doutorado, as estratégias e os desafios da psicoterapia
                psicanalítica com crianças institucionalizadas. Aprofundou-se nos pressupostos teórico-técnicos
                winnicottianos, nas estratégias clínicas da psicoterapia psicanalítica na contemporaneidade e nos
                enquadres diferenciados para pacientes de difícil acesso e profundamente traumatizados.
              </p>
              <h3 className="heading-h3 pt-2">Docência</h3>
              <p>
                Há uma década dedica-se à docência. É professora da especialização em Psicoterapia Psicanalítica
                Contemporânea da EPPM, onde foi coordenadora pedagógica de cursos em Psicanálise Winnicottiana, e da
                Pós-Graduação em Psicanálise Winnicottiana da PUC-PR, com disciplinas sobre escuta, comunicação e
                interpretação no setting, organização do pensamento clínico e as propostas teórico-clínicas de
                Winnicott. É idealizadora da Imersão Winnicottiana.
              </p>
              <h3 className="heading-h3 pt-2">Supervisão clínica</h3>
              <p>
                Há mais de dez anos realiza supervisão clínica individual e em grupo, tendo acompanhado mais de 120
                profissionais no atendimento de crianças, adolescentes, adultos e quadros graves. Na supervisão,
                dedica atenção ao desenvolvimento profissional dos supervisionandos e à angústia própria do
                psicoterapeuta iniciante.
              </p>
              <h3 className="heading-h3 pt-2">Palestras</h3>
              <p>
                Atua também como palestrante, levando a psicanálise winnicottiana a eventos e encontros dirigidos a
                psicólogos, psicanalistas e estudantes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              ["/curso/palestra-2.jpg", "Larissa Garcia Ponce em palestra, diante do telão com sua marca", 900, 899],
              ["/curso/palestra-1.jpg", "Larissa Garcia Ponce em palestra, sentada com microfone", 900, 1071],
              ["/curso/aula-docente.jpg", "Larissa Garcia Ponce conduzindo uma aula", 900, 777],
            ].map(([src, alt, w, h]) => (
              <img
                key={src as string}
                src={src as string}
                alt={alt as string}
                width={w as number}
                height={h as number}
                loading="lazy"
                className="w-full aspect-square rounded-[12px] shadow-sm object-cover object-top"
              />
            ))}
          </div>

          <h3 className="heading-h3 mt-10 mb-4">Trabalhos publicados em destaque</h3>
          <ul className="space-y-4 body-text">
            <li className="border-l-4 border-[#d228a7] pl-4">
              <strong className="text-[#8b4a7a]">2020.</strong> Artigo sobre a perspectiva de Winnicott acerca da
              pulsão de morte, na coletânea <em>Pulsão de Morte: 100 anos depois de Freud</em>, da Revista do Instituto
              Psicologia em Foco.
            </li>
            <li className="border-l-4 border-[#d228a7] pl-4">
              <strong className="text-[#8b4a7a]">2017.</strong> “O caso Maura: o uso de mediadores dialógicos no
              cenário analítico”, artigo publicado na revista <em>Cadernos de Psicanálise</em> do Círculo Psicanalítico
              do Rio de Janeiro.
            </li>
            <li className="border-l-4 border-[#d228a7] pl-4">
              <strong className="text-[#8b4a7a]">2016.</strong> Coautora do capítulo “Gestar um bebê e ‘gestar’ um
              grupo com grávidas e acompanhantes em Unidade Básica de Saúde”, no livro{" "}
              <em>Práticas grupais na infância: perspectiva psicanalítica</em> (Zagodoni).
            </li>
            <li className="border-l-4 border-[#d228a7] pl-4">
              <strong className="text-[#8b4a7a]">2011.</strong> Coautora dos capítulos “Sobre o uso do objeto terapeuta
              na clínica winnicottiana com paciente borderline” e “Luto não elaborado e sintoma psicossomático: o
              sentido do mutismo seletivo em uma criança”, no livro{" "}
              <em>Psicanálise de crianças na universidade: construindo práticas e delimitando fronteiras</em> (Arte &amp;
              Ciência).
            </li>
          </ul>
          <p className="body-text mt-5">
            É autora do livro{" "}
            <em>
              Mães sociais e cuidado infantil institucionalizado: um estudo sobre o imaginário coletivo à luz da teoria
              de D. W. Winnicott
            </em>{" "}
            (CRV, 2015). A produção completa está no{" "}
            <a href={LINKS.lattes} target="_blank" rel="noopener noreferrer" className="text-[#d228a7] underline">
              Currículo Lattes
            </a>
            .
          </p>
        </Section>

        <section id="depoimentos" className="section-padding bg-[#e8b4ca]" aria-labelledby="depoimentos-h">
          <div className="max-w-[1120px] mx-auto">
            <h2 id="depoimentos-h" className="heading-h2 text-center mb-8">
              O que dizem as participantes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="bg-[#ffffff] p-6 rounded-[12px] border border-[#badbde] shadow-sm flex flex-col h-full"
                >
                  <blockquote className="body-text italic flex-1">
                    <Quote className="w-6 h-6 text-[#8b4a7a] mb-2 opacity-70" aria-hidden="true" />
                    <p className="leading-relaxed">{t.quote.replace(/^“|”$/g, "")}</p>
                  </blockquote>
                  <figcaption className="flex items-center gap-3 pt-4 mt-4 border-t border-[#badbde]/60">
                    {t.image && (
                      <img
                        src={t.image}
                        alt=""
                        width={48}
                        height={48}
                        loading="lazy"
                        className={`w-12 h-12 rounded-full object-cover border border-[#8b4a7a] ${AVATAR_POS[t.name] ?? ""}`}
                      />
                    )}
                    <span>
                      <span className="block font-semibold text-sm text-[#8b4a7a]">{t.name}</span>
                      <span className="block text-xs text-[#333333]/80">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="investimento" className="section-padding bg-[#DCEDF8]" aria-labelledby="investimento-h">
          <div className="max-w-[880px] mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 items-center">
            <div>
              <h2 id="investimento-h" className="heading-h2 mb-4">
                Investimento e inscrição
              </h2>
              <p className="body-text mb-4">
                A Imersão custa R$ 1.080,00 à vista ou 12x de R$ 111,70 na Hotmart. A compra libera o acesso a todas
                as aulas e aos três encontros imersivos por 8 meses, com certificado.
              </p>
              <p className="body-text mb-6">
                O convite é para criar-encontrar a teoria e a clínica do seu jeito e no seu tempo.
              </p>
              <CTA label="Quero fazer a Imersão" />
            </div>
            <img
              src="/curso/imersao-card.jpg"
              alt="Cartaz da Imersão Winnicottiana: mais de 12 horas de conteúdo imersivo, 12x de R$ 111,70, com Larissa Ponce"
              width={719}
              height={1280}
              loading="lazy"
              className="w-full max-w-[280px] mx-auto rounded-[16px] shadow-md object-cover"
            />
          </div>
        </section>

        <Section id="faq" title="Perguntas frequentes" bg="bg-[#ffffff]">
          <div className="space-y-6">
            {FAQ.map((f) => (
              <div key={f.q}>
                <h3 className="heading-h3 mb-2">{f.q}</h3>
                <p className="body-text">{f.a}</p>
              </div>
            ))}
          </div>
        </Section>
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
