export interface Publication {
  year: string;
  text: string;
  citation: string;
  postText?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image?: string;
}

export interface CoursePillar {
  title: string;
  description: string;
  icon: string;
}

export const LINKS = {
  hotmart: "https://go.hotmart.com/D99991354V?dp=1",
  whatsappSupervisao: "https://wa.me/5544998200082",
  youtube: "https://www.youtube.com/@larissagarciaponce",
  instagram: "https://www.instagram.com/larissaponcepsi?igsh=aXRneTNmZG04M285&utm_source=qr",
  lattes: "http://lattes.cnpq.br/5551249897929580",
  videoEmbed: "https://www.youtube.com/embed/TXR-kw8FtRc",
  logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ4UvEGj5qnnSojbx6sfDR0R3D7u0TSll6dACZvFj4HImEOy8jDf1ZnlFJyzqTzHNB6jp7aaZp1kvd1OvspSHxom_XWg-UN3vX2fuRAW198AdQ8acsECsaGj52MxsygVpoKGCuo-dgYptuPJ9NZMG4byGdJ8YM9aKzH3WHbvYhIMcdPhtBCyv9owQkw8Q9SmLfrlhRMpwXI9cwdHiOyc4h2XqMt9PEiFDZZOklDHUazxkbqJA3lfQ41EU2K2D0UB17iOs",
  photoSobre: "/larissa_blazer_lavanda.jpg",
  photoSupervisao: "/larissa_coracao.jpg",
  photoPsicanalise: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9q3ixT2sib2TRpJIjYwJFpLgkscxrLL1w9LObiE77dLLrSjqsKXNFUGqLX1abGeP2XG1m6x6LeK4o2OC9NMsIfGwrgL63VnlYqR1aevedOczip6PZLeUSh43p-X61kBEEVjSjFaE04bs16W7Y_vsleG7CNm3Ac0_KRrIurnxNgh_tbyVgy52_lRP3_TKegDVrCrXQriAMo4lfmjx6tmZycKQZk0SVIfiKDdX0u73MzeRYhYDZCnWWH4oojIxWx2tm6xY",
  photoPublicacoes: "/larissa_escrevendo.jpg",
  photoBiblioteca: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWhafwyIoeumuhbDXFI1x5BKjEPXMIJp-E5m0PJUO17supRemW2q8ETiXyXwvzQ4zBz9BLrWAnucp35rcDw0A9mIHu3kSaKgjx9l9V_0IrqlU5yRRcWLekIXPEoVhM8bvCY3q3IEQFKdna13aTySrdThow8NTGfiQSD2ib7us_S8NsCW7Z0DdPE2DohJKYD2V09hmkWrdxA84NFOg5mL8ESbHUHiMWL1kqf9JKPwOyI-hRrlVW1WhT9QGjb4Jnc_pORnk",
  photoCasinha: "/casinha.jpg"
};

export const PUBLICATIONS: Publication[] = [
  {
    year: "2020",
    text: "Artigo sobre a perspectiva de D. Winnicott sobre a Pulsão de Morte na coletânea da Revista do Instituto Psicologia em Foco: ",
    citation: "Pulsão de Morte: 100 anos depois de Freud",
    postText: "."
  },
  {
    year: "2018",
    text: "Coautora no artigo ",
    citation: '"Judicialização das relações sociais versus saúde mental: uma análise psicológica da alienação parental."',
    postText: ""
  },
  {
    year: "2017",
    text: "Autora do artigo ",
    citation: '"O caso Maura: o uso de mediadores dialógicos no cenário analítico"',
    postText: ", na Revista Cadernos de Psicanálise do Círculo Psicanalítico do Rio de Janeiro."
  },
  {
    year: "2016",
    text: "Coautora do capítulo \"Gestar um bebê e 'gestar' um grupo com grávidas e acompanhantes em Unidade Básica de Saúde\", no livro ",
    citation: '"Práticas grupais na infância: perspectiva psicanalítica"',
    postText: " (Editora Zagodoni)."
  },
  {
    year: "2015",
    text: "Autora do livro ",
    citation: '"Mães sociais e cuidado infantil institucionalizado: um estudo sobre o imaginário coletivo à luz da teoria de D. W. Winnicott"',
    postText: " (Editora CRV)."
  },
  {
    year: "2011",
    text: "Coautora de dois capítulos no livro ",
    citation: '"Psicanálise de crianças na universidade: construindo práticas e delimitando fronteiras"',
    postText: ' — "Sobre o uso do objeto terapeuta na clínica winnicottiana com paciente borderline" e "Luto não elaborado e sintoma psicossomático: o sentido do mutismo seletivo em uma criança" (Editora Arte & Ciência).'
  },
  {
    year: "2010",
    text: "Coautora do capítulo \"Um olhar winnicottiano sobre a violência e a tendência antissocial em crianças e adolescentes em estado de risco psicossocial\", no livro ",
    citation: '"A produção da violência na família e nas relações de gênero: estudos e pesquisas"',
    postText: " (Editora CRV)."
  }
];

export const COURSE_PILLARS: CoursePillar[] = [
  {
    title: "Sistematização teórica",
    description: "Compreender a cronologia e a evolução dos conceitos de Winnicott de forma organizada e didática.",
    icon: "menu_book"
  },
  {
    title: "Ilustrações clínicas",
    description: "Estudos de caso detalhados conectando cada conceito abstrato à realidade do consultório.",
    icon: "description"
  },
  {
    title: "Etapas do amadurecimento",
    description: "As principais conquistas de cada etapa do amadurecimento humano — da dependência absoluta à independência relativa.",
    icon: "potted_plant"
  },
  {
    title: "Técnica e diagnóstico",
    description: "Pressupostos winnicottianos da técnica, do diagnóstico e do tratamento, e quadros sintomatológicos especiais.",
    icon: "fact_check"
  },
  {
    title: "Manejo clínico",
    description: "Estratégias de manejo clínico com pacientes de difícil acesso e/ou com dificuldades de comunicação.",
    icon: "volunteer_activism"
  },
  {
    title: "Intervenções interpretativas",
    description: "Modalidades de disciplinas interpretativas e sua aplicação em diversos quadros psicopatológicos.",
    icon: "forum"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mikaely Vaz",
    role: "Psicóloga e Psicanalista",
    quote: "“A experiência de participar do curso Imersão Winnicottiana tem sido enriquecedora. Larissa é uma professora incrível e apresenta a teoria e a prática da clínica winnicottiana de forma didática e responsável, com a ética do cuidado. Recomendo muito!”",
    image: "/mikaely_vaz.jpg"
  },
  {
    name: "Lara Balera",
    role: "Psicóloga Especialista em Clínica Psicanalítica Contemporânea",
    quote: "“Estou amando o conteúdo da Imersão Winnicottiana. Larissa possui um grande domínio da teoria winnicottiana. É um prazer imenso estudar com você, acompanhar seus conteúdos, aulas e supervisões. Admiro muito a profissional excelente que você é.”",
    image: "/lara_balera.jpg"
  },
  {
    name: "Fernanda Valentim",
    role: "Psicóloga",
    quote: "“Estou amando a experiência de estudar na Imersão Winnicottiana preparada por Larissa. O conteúdo tem sido extremamente enriquecedor para a minha prática clínica. A didática dela é incrível e, nas aulas ao vivo, sinto-me totalmente à vontade para perguntar e tirar dúvidas. A forma como transmite o conteúdo é clara, envolvente, cheia de exemplos e com uma oratória que prende a atenção do início ao fim.”",
    image: "/fernanda_valentim.jpg"
  },
  {
    name: "Marcela de Sá Rezende",
    role: "Psicóloga",
    quote: "“Já fui aluna da Larissa em outros cursos e sempre gostei da sua forma de transmitir conhecimentos, mesclando teoria e prática de maneira envolvente. A investigação aprofundou meu entendimento sobre a teoria de Winnicott e proporcionou insights importantes que se aplicam diretamente à clínica. Voltei para a prática clínica com um olhar diferenciado sobre o cuidado e a relação terapêutica.”",
    image: "/marcela_sa_rezende.jpg"
  },
  {
    name: "Janayna Longhi",
    role: "Psicóloga",
    quote: "“Estou impressionada com a qualidade e o esclarecimento com que Larissa repassa as informações. As aulas contemplam exemplos clínicos que alinham teoria e prática.”",
    image: "/janayna_longhi.jpg"
  },
  {
    name: "Vaneila Buaszik",
    role: "Psicóloga",
    quote: "“O curso Imersão Winnicottiana superou minhas expectativas. Larissa tem uma didática excelente, explicada de forma clara, além de ser extremamente acolhedora, o que torna o aprendizado muito mais leve e prazeroso. Os conteúdos foram bem estruturados e enriquecedores para meu fazer clínico.”",
    image: "/vaneila_buaszik.jpg"
  },
  {
    name: "Aryane Penteado",
    role: "Psicanalista",
    quote: "“Participar da Imersão Winnicottiana foi uma experiência riquíssima. Larissa tem uma didática clara e envolvente, tanto nas aulas teóricas quanto nos encontros de apresentação de casos. O manejo apresentado é assertivo, profundo e muito aplicável na prática. Sua oratória transmite segurança e acolhimento. Foi uma experiência transformadora.”",
    image: "/aryane_penteado.jpg"
  },
  {
    name: "Gina Paula Talon Carlos",
    role: "Psicóloga",
    quote: "“Larissa é uma referência inspiradora. Sua trajetória acadêmica e profissional revela comprometimento com a prática, a didática e o bem-estar global. Como professora, transforma temas complexos em explicações didáticas e acessíveis. Sua metodologia estimula o pensamento crítico, a autonomia intelectual e a aplicação prática do conhecimento.”",
    image: "/gina_paula.jpg"
  },
  {
    name: "Sylvelaine Mendonça",
    role: "Psicóloga e Psicanalista",
    quote: "“Gostei que você explicou de forma muito didática e sem pressa. Parecia que a teoria se encaixava.”",
    image: "/sylvelaine_mendonca.jpg"
  },
  {
    name: "Adnna Coqui",
    role: "Psicóloga e Psicanalista",
    quote: "“Fiquei profundamente impressionada com a forma como Larissa conseguiu integrar teoria e prática, oferecendo um conteúdo amplo e, ao mesmo tempo, a possibilidade de vivenciar cada conceito na prática. Foi um prazer participar da aprendizagem. Essa experiência acrescentou novos olhares à minha prática clínica.”",
    image: "/adnna_coqui.jpg"
  },
  {
    name: "Eloisa Dib",
    role: "Psicóloga Clínica",
    quote: "“Larissa é brilhante como professora. Conduziu as aulas sobre Winnicott de maneira clara, profunda e sensível. Sua didática permite compreender conceitos complexos de forma acessível e significativa. As reflexões desse curso deixam marcas para sempre na minha prática profissional.”",
    image: "/eloisa_dib.jpg"
  }
];
