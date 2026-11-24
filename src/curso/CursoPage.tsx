import React from "react";
import { ShoppingCart, ArrowLeft, Quote } from "lucide-react";
import { LINKS, TESTIMONIALS } from "../data";

// Página do curso Imersão Winnicottiana, pensada para busca (Google) e IAs:
// respostas diretas no início de cada seção, tabelas e FAQ em texto.

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
    q: "O curso serve para quem está começando na clínica winnicottiana?",
    a: "Sim. O curso foi pensado para quem está iniciando o atendimento ou a supervisão com base em Winnicott e quer sistematizar os fundamentos de forma didática. Quem já conhece a teoria aproveita a articulação com diagnóstico e manejo.",
  },
  {
    q: "Quantas horas tem o curso?",
    a: "Mais de 12 horas: mais de 8 horas de aulas teóricas e 6 horas de encontros clínicos imersivos, em três encontros de 2 horas.",
  },
  {
    q: "As aulas são ao vivo ou gravadas?",
    a: "Todas as aulas são gravadas, inclusive os três encontros clínicos com casos ilustrativos e exercícios. Você assiste no seu ritmo.",
  },
  {
    q: "Por quanto tempo tenho acesso às aulas?",
    a: "Por 8 meses após a compra.",
  },
  {
    q: "O curso dá certificado?",
    a: "Sim, o curso oferece certificado.",
  },
  {
    q: "Quanto custa a Imersão Winnicottiana?",
    a: "R$ 1.080,00 à vista ou em até 12x de R$ 111,70 na Hotmart.",
  },
  {
    q: "O curso é só teórico?",
    a: "Não. Além da teoria, o curso trabalha diagnóstico, nosografia e técnica, com casos ilustrativos, exercícios clínicos e construção de intervenções interpretativas.",
  },
  {
    q: "Quais quadros clínicos são abordados?",
    a: "Neuroses, borderlines e psicoses, lidos pela linha do amadurecimento, e os quadros sintomatológicos especiais: depressão, persecutoriedade (paranoia), tendência antissocial e psicopatia, quadros psicossomáticos e adicções, e falso self.",
  },
  {
    q: "A Imersão é uma formação em psicanálise?",
    a: "Não. É um curso de aprofundamento teórico-clínico. Ele complementa, mas não substitui, a formação psicanalítica, a análise pessoal e a supervisão.",
  },
];

const CONCEITOS = [
  {
    nome: "Preocupação materna primária",
    oQue: "Estado de sensibilidade aumentada da mãe no fim da gestação e nas primeiras semanas, que permite identificar-se com o bebê.",
    funcao: "Torna possível a adaptação quase total às necessidades do bebê.",
  },
  {
    nome: "Holding",
    oQue: "Sustentação física e psíquica que protege o bebê de intrusões ao longo do tempo.",
    funcao: "Garante a continuidade de ser e favorece a integração.",
  },
  {
    nome: "Handling",
    oQue: "Manejo do corpo do bebê nos cuidados do dia a dia.",
    funcao: "Favorece a personalização, o alojamento da psique no corpo.",
  },
  {
    nome: "Espaço potencial",
    oQue: "Área intermediária entre o mundo interno e a realidade compartilhada.",
    funcao: "Lugar do brincar, da criatividade, da cultura e da própria análise.",
  },
];

const AULAS = [
  { aula: "Aula 1", tema: "Fase de dependência absoluta", foco: "Vida e obra de Winnicott; continuidade de ser, gesto espontâneo e ilusão de onipotência; preocupação materna primária, holding, handling e apresentação de objetos; integração e personalização." },
  { aula: "Aula 2", tema: "Fase de dependência relativa", foco: "Desilusão e início dos processos mentais, transicionalidade, uso do objeto e estágio do “eu sou”." },
  { aula: "Aula 3", tema: "Fase rumo à independência relativa", foco: "Estágio do concernimento: agressividade, culpa e reparação." },
  { aula: "Aula 4", tema: "Fase de independência relativa", foco: "Complexo de Édipo, latência, adolescência, idade adulta e velhice." },
  { aula: "Aula 5", tema: "Nosografia, diagnóstico e tratamento", foco: "Organização defensiva, classificação maturacional, análise padrão e análise modificada, quadros sintomatológicos especiais." },
  { aula: "Encontros clínicos", tema: "A técnica ilustrada", foco: "Hipóteses diagnósticas, casos ilustrativos, exercícios clínicos e construção de intervenções interpretativas." },
];

const CLASSIFICACAO = [
  {
    grupo: "Integrados (neuroses)",
    falha: "Falhas por volta dos 2 a 5 anos, na fase edípica.",
    questao: "Conflitos no “fazer”, na administração dos instintos; defesas maduras.",
    tratamento: "Análise padrão: interpretação da transferência e dos conflitos inconscientes, em setting estável.",
  },
  {
    grupo: "Recém-integrados (borderlines)",
    falha: "Falhas no holding inicial, na dependência absoluta ou relativa.",
    questao: "“Quem sou eu?”; integração instável, defesas primitivas sob estresse.",
    tratamento: "Análise modificada quando a integração vacila; interpretação quando as defesas funcionam.",
  },
  {
    grupo: "Não-integrados (psicoses)",
    falha: "Falhas graves na dependência absoluta.",
    questao: "Problema no “ser”: desintegração, irrealidade, dificuldade de diferenciar self e objeto.",
    tratamento: "Análise modificada: regressão à dependência, constância do setting, sobrevivência do analista.",
  },
];

const QUADROS = [
  {
    quadro: "Depressão",
    leitura: "Reativa: falhas no estágio do concernimento, quando a mãe não sobrevive à agressividade e a reparação se bloqueia. Psicótica: falhas na dependência absoluta.",
    manejo: "Sobrevivência do analista e provisão ambiental. Na reativa, interpretação do inconsciente; na psicótica, provisão antes de interpretação, sem apressar a cura.",
  },
  {
    quadro: "Persecutoriedade (paranoia)",
    leitura: "Não é um diagnóstico isolado: é uma complicação de depressão, esquizofrenia ou tendência antissocial.",
    manejo: "Conduzido a partir do quadro de base e do ponto do amadurecimento em que a suscetibilidade à perseguição se instalou.",
  },
  {
    quadro: "Tendência antissocial e psicopatia",
    leitura: "Privação traumática depois de um ambiente bom; o ato antissocial como um “S.O.S.” para que o ambiente se corrija.",
    manejo: "Setting confiável que sobrevive aos acting outs; suspender interpretações clássicas e priorizar tradução do mundo interno, espelhamento e confirmação presencial.",
  },
  {
    quadro: "Quadros psicossomáticos e adicções",
    leitura: "Cisão entre mente e psicossoma; adicções como patologia da transicionalidade.",
    manejo: "Regressão à dependência e comunicação autêntica, evitando interpretações que reforcem a intelectualização.",
  },
  {
    quadro: "Falso self (incluindo personalidades “como se” e esquizoide)",
    leitura: "Do falso self saudável, como máscara social, à submissão total, com vazio e futilidade.",
    manejo: "Identificar as comunicações do falso self e construir confiabilidade para que o cuidado possa ser delegado ao analista.",
  },
];

const th = "text-left font-semibold text-[#8b4a7a] p-3 border-b-2 border-[#badbde] align-top";
const td = "p-3 border-b border-[#badbde]/70 align-top body-text text-sm";

const CTA: React.FC<{ label: string }> = ({ label }) => (
  <a href={LINKS.hotmart} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
    <ShoppingCart className="w-4 h-4" aria-hidden="true" />
    <span>{label}</span>
  </a>
);

const Section: React.FC<{ id: string; title: string; bg?: string; children: React.ReactNode }> = ({
  id,
  title,
  bg = "bg-[#f7e9e0]",
  children,
}) => (
  <section id={id} className={`section-padding ${bg}`} aria-labelledby={`${id}-h`}>
    <div className="max-w-[880px] mx-auto">
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
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#8b4a7a] hover:text-[#d228a7]"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Voltar ao site</span>
          </a>
        </div>
      </header>

      <main id="main-content">
        {/* Abertura: resposta direta para buscadores e IAs */}
        <section className="section-padding bg-[#DCEDF8]" aria-labelledby="curso-h1">
          <div className="max-w-[880px] mx-auto text-center">
            <span className="inline-block bg-[#c5e6e8] text-[#8b4a7a] px-4 py-1 rounded-[6px] text-xs font-semibold uppercase tracking-wider mb-3">
              Imersão Winnicottiana: Criando-Encontrando a Teoria e a Clínica
            </span>
            <h1 id="curso-h1" className="heading-h2 mb-5">
              Curso de Psicanálise Winnicottiana: Teoria do Amadurecimento Emocional e Manejo Clínico
            </h1>
            <p className="body-text text-base md:text-lg mb-7 text-left md:text-center">
              A Imersão Winnicottiana: Criando-Encontrando a Teoria e a Clínica é um curso online de mais de 12
              horas, conduzido pela psicanalista Larissa Ponce, doutora em Psicologia Clínica pela PUC-SP. São mais
              de 8 horas de aulas teóricas e 6 horas de encontros clínicos, todos gravados, com acesso por 8 meses e
              certificado. O curso percorre a Teoria do Amadurecimento Emocional de D. W. Winnicott até o
              diagnóstico, a nosografia e o manejo clínico, para psicólogos, estudantes e psicanalistas que querem
              levar Winnicott para o consultório.
            </p>
            <CTA label="Quero fazer a Imersão" />
          </div>
        </section>

        <Section id="ficha" title="Ficha do curso" bg="bg-[#ffffff]">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>
                {[
                  ["Formato", "Online, com aulas gravadas"],
                  ["Carga horária total", "Mais de 12 horas"],
                  ["Aulas teóricas", "Mais de 8 horas"],
                  ["Encontros clínicos", "6 horas, em três encontros de 2 horas, com casos ilustrativos e exercícios clínicos"],
                  ["Acesso", "8 meses após a compra"],
                  ["Certificado", "Sim"],
                  ["Docente", "Larissa Ponce, psicóloga (CRP 08/24725), mestre e doutora em Psicologia Clínica (PUC-SP)"],
                  ["Investimento", "R$ 1.080,00 à vista ou 12x de R$ 111,70"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <th scope="row" className={`${th} w-[38%] border-b border-[#badbde]/70`}>
                      {k}
                    </th>
                    <td className={td}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="por-que" title="Por que estudar a Teoria do Amadurecimento Emocional para a clínica">
          <div className="space-y-4 body-text">
            <p>
              Porque muitos dos pacientes que chegam hoje ao consultório não sofrem principalmente de conflito entre
              desejo e proibição. Sofrem de algo anterior: falhas na constituição do si-mesmo, agonias impensáveis,
              sensação de futilidade ou de não existir de verdade. Para esses casos, Winnicott oferece uma teoria do
              desenvolvimento que coloca o ambiente no centro: o bebê só se torna uma pessoa se um ambiente
              suficientemente bom sustentar sua continuidade de ser.
            </p>
            <p>
              Na clínica, isso muda a pergunta do analista. Em vez de "o que este paciente está recalcando?", a
              pergunta passa a ser "em que ponto do amadurecimento este paciente precisou se defender de uma falha do
              ambiente, e do que ele precisa agora para retomar esse caminho?".
            </p>
            <h3 className="heading-h3 pt-2">Quando o setting clássico não basta</h3>
            <p>
              Em quadros não-neuróticos, a interpretação do conteúdo pode chegar cedo demais, ou ser vivida como
              intrusão. Um atraso, um silêncio prolongado ou um ataque ao enquadre nem sempre são resistência:
              muitas vezes são comunicação de algo que não pôde ser vivido nem simbolizado. Reconhecer essa
              diferença, e saber quando sustentar em vez de interpretar, é o centro do manejo winnicottiano.
            </p>
            <h3 className="heading-h3 pt-2">Criar-encontrar: o método do curso</h3>
            <p>
              O nome da Imersão vem de uma ideia de Winnicott: o bebê cria o objeto que encontra ali, oferecido pelo
              ambiente. O curso aplica essa lógica ao estudo. Em vez de memorizar conceitos, você os reencontra em
              casos ilustrativos e exercícios clínicos, até que eles passem a funcionar como instrumento de escuta e
              de construção de intervenções.
            </p>
          </div>
        </Section>

        <Section id="conteudo" title="O que você vai estudar" bg="bg-[#ffffff]">
          <p className="body-text mb-4">
            O curso segue a linha do amadurecimento, da dependência absoluta à independência relativa, e termina na
            nosografia e no tratamento. Depois, os encontros clínicos mostram a técnica em ação.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th scope="col" className={th}>Aula</th>
                  <th scope="col" className={th}>Tema</th>
                  <th scope="col" className={th}>Conceitos trabalhados</th>
                </tr>
              </thead>
              <tbody>
                {AULAS.map((a) => (
                  <tr key={a.aula}>
                    <th scope="row" className={`${th} border-b border-[#badbde]/70 whitespace-nowrap`}>{a.aula}</th>
                    <td className={td}>{a.tema}</td>
                    <td className={td}>{a.foco}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="heading-h3 mb-3">Quatro conceitos que costumam ser confundidos</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th scope="col" className={th}>Conceito</th>
                  <th scope="col" className={th}>O que é</th>
                  <th scope="col" className={th}>Função no amadurecimento</th>
                </tr>
              </thead>
              <tbody>
                {CONCEITOS.map((c) => (
                  <tr key={c.nome}>
                    <th scope="row" className={`${th} border-b border-[#badbde]/70`}>{c.nome}</th>
                    <td className={td}>{c.oQue}</td>
                    <td className={td}>{c.funcao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="heading-h3 mb-3">Diagnóstico, nosografia e manejo dos quadros clínicos</h3>
          <p className="body-text mb-4">
            Na perspectiva winnicottiana, o diagnóstico não se apoia só nos sintomas. Ele parte do momento em que o
            ambiente falhou, do tipo e da rigidez das defesas e da relação com o objeto. Daí sai a provisão
            terapêutica de que o paciente precisa.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th scope="col" className={th}>Organização</th>
                  <th scope="col" className={th}>Quando o ambiente falhou</th>
                  <th scope="col" className={th}>Questão central</th>
                  <th scope="col" className={th}>Tratamento</th>
                </tr>
              </thead>
              <tbody>
                {CLASSIFICACAO.map((c) => (
                  <tr key={c.grupo}>
                    <th scope="row" className={`${th} border-b border-[#badbde]/70`}>{c.grupo}</th>
                    <td className={td}>{c.falha}</td>
                    <td className={td}>{c.questao}</td>
                    <td className={td}>{c.tratamento}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="body-text mb-4">
            Os quadros sintomatológicos especiais atravessam todo esse espectro e pedem um manejo próprio:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th scope="col" className={th}>Quadro</th>
                  <th scope="col" className={th}>Leitura maturacional</th>
                  <th scope="col" className={th}>Foco do manejo</th>
                </tr>
              </thead>
              <tbody>
                {QUADROS.map((q) => (
                  <tr key={q.quadro}>
                    <th scope="row" className={`${th} border-b border-[#badbde]/70`}>{q.quadro}</th>
                    <td className={td}>{q.leitura}</td>
                    <td className={td}>{q.manejo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="encontros" title="Como funcionam os encontros clínicos">
          <p className="body-text">
            Os três encontros de 2 horas são o espaço de integração entre teoria e clínica. Neles, você acompanha
            casos ilustrativos, faz exercícios clínicos e pratica a construção de intervenções interpretativas a
            partir da leitura maturacional. Os encontros são gravados e ficam disponíveis pelo mesmo período de 8
            meses.
          </p>
        </Section>

        <Section id="formatos" title="Imersão, aula avulsa ou formação longa: qual escolher" bg="bg-[#ffffff]">
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th scope="col" className={th}>Formato</th>
                  <th scope="col" className={th}>Duração típica</th>
                  <th scope="col" className={th}>Melhor para</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={`${th} border-b border-[#badbde]/70`}>Aula avulsa sobre um conceito</th>
                  <td className={td}>Minutos a poucas horas</td>
                  <td className={td}>Revisar um tema pontual</td>
                </tr>
                <tr>
                  <th scope="row" className={`${th} border-b border-[#badbde]/70`}>Imersão Winnicottiana</th>
                  <td className={td}>Mais de 12 horas, acesso por 8 meses</td>
                  <td className={td}>Ter uma visão articulada da teoria à clínica e começar a aplicá-la já</td>
                </tr>
                <tr>
                  <th scope="row" className={`${th} border-b border-[#badbde]/70`}>Formação em psicanálise winnicottiana</th>
                  <td className={td}>Em geral, alguns anos</td>
                  <td className={td}>Fazer um percurso institucional completo de formação</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="body-text">
            A Imersão não substitui uma formação psicanalítica, análise pessoal ou supervisão. Ela oferece o mapa:
            depois dela, a leitura dos textos de Winnicott e a discussão de casos em supervisão ganham direção.
          </p>
        </Section>

        <Section id="para-quem" title="Para quem é o curso">
          <ul className="list-disc pl-5 space-y-2 body-text">
            <li>
              <strong>Psicólogos clínicos e psicanalistas</strong> de orientação winnicottiana, da psicanálise inglesa
              ou contemporânea, que querem sistematizar teoria, diagnóstico e técnica.
            </li>
            <li>
              <strong>Quem está começando a atender ou a supervisionar</strong> com base em Winnicott e ainda sente
              insegurança no manejo.
            </li>
            <li>
              <strong>Quem atende casos difíceis</strong> (não-neuróticos, borderline, psicossomáticos) e sente que a
              técnica clássica não alcança o paciente.
            </li>
            <li>
              <strong>Estudantes de Psicologia e de Psicanálise</strong> que querem uma base sólida, com exemplos
              clínicos concretos.
            </li>
          </ul>
        </Section>

        <Section id="docente" title="Quem conduz: Larissa Ponce" bg="bg-[#ffffff]">
          <div className="space-y-4 body-text">
            <p>
              Larissa Ponce é psicóloga (CRP 08/24725) e psicanalista winnicottiana, filiada à IBPW e à IWA, mestre e
              doutora em Psicologia Clínica pela PUC-SP. Tem mais de 15 anos de prática clínica e, há mais de 10
              anos, faz supervisão clínica, com mais de 120 profissionais acompanhados. É docente de pós-graduação
              na EPPM-PR e na PUC-PR.
            </p>
            <p>
              Entre suas publicações estão o livro{" "}
              <em>
                Mães sociais e cuidado infantil institucionalizado: um estudo sobre o imaginário coletivo à luz da
                teoria de D. W. Winnicott
              </em>{" "}
              (Editora CRV, 2015) e os capítulos "Sobre o uso do objeto terapeuta na clínica winnicottiana com
              paciente borderline" (2011) e "Um olhar winnicottiano sobre a violência e a tendência antissocial em
              crianças e adolescentes em estado de risco psicossocial" (2010).{" "}
              <a href={LINKS.lattes} target="_blank" rel="noopener noreferrer" className="text-[#d228a7] underline">
                Currículo Lattes
              </a>
              .
            </p>
          </div>
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

        <Section id="investimento" title="Investimento e inscrição" bg="bg-[#DCEDF8]">
          <p className="body-text mb-6">
            A Imersão custa R$ 1.080,00 à vista ou 12x de R$ 111,70 na Hotmart. A compra libera o acesso a todas as
            aulas por 8 meses, com certificado.
          </p>
          <CTA label="Garantir minha vaga na Imersão" />
        </Section>

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
