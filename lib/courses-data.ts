export interface CourseModule {
  title: string
  description: string
}

export interface Course {
  id: number
  title: string
  author: string
  hours: number
  category: string
  description: string
  modules: CourseModule[]
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Excel Avançado",
    author: "Fundação Bradesco",
    hours: 30,
    category: "Pacote Office",
    description: "Domine fórmulas avançadas, tabelas dinâmicas e dashboards profissionais no Excel.",
    modules: [
      { title: "Introdução ao Excel Avançado", description: "Revisão das funcionalidades intermediárias e configuração do ambiente." },
      { title: "Fórmulas e Funções Complexas", description: "PROCV, PROCH, SE aninhado, ÍNDICE e CORRESP." },
      { title: "Tabelas Dinâmicas", description: "Criação, formatação e análise de dados com tabelas dinâmicas." },
      { title: "Gráficos Profissionais", description: "Construção de gráficos avançados e dashboards visuais." },
      { title: "Macros e VBA Básico", description: "Automatização de tarefas com macros e introdução ao VBA." },
      { title: "Projeto Final", description: "Desenvolvimento de um dashboard completo com dados reais." },
    ],
  },
  {
    id: 2,
    title: "Lógica de Programação",
    author: "Fundação Bradesco",
    hours: 40,
    category: "Tecnologia",
    description: "Aprenda os fundamentos da lógica de programação e resolução de problemas computacionais.",
    modules: [
      { title: "Conceitos Básicos", description: "O que é lógica de programação e por que ela é importante." },
      { title: "Variáveis e Tipos de Dados", description: "Declaração de variáveis, tipos primitivos e conversões." },
      { title: "Estruturas Condicionais", description: "Se, senão, escolha-caso e operadores lógicos." },
      { title: "Estruturas de Repetição", description: "Para, enquanto, repita e controle de fluxo." },
      { title: "Vetores e Matrizes", description: "Manipulação de arrays e estruturas multidimensionais." },
      { title: "Algoritmos e Resolução de Problemas", description: "Técnicas de decomposição e resolução algorítmica." },
    ],
  },
  {
    id: 3,
    title: "Administração de Empresas",
    author: "Aprenda Mais MEC",
    hours: 30,
    category: "Administração",
    description: "Fundamentos da administração empresarial, gestão de recursos e planejamento estratégico.",
    modules: [
      { title: "Introdução à Administração", description: "História e evolução da teoria administrativa." },
      { title: "Planejamento Estratégico", description: "Análise SWOT, missão, visão e objetivos organizacionais." },
      { title: "Gestão de Pessoas", description: "Liderança, motivação e gestão de equipes." },
      { title: "Gestão Financeira Básica", description: "Fluxo de caixa, orçamento e controle financeiro." },
      { title: "Marketing e Vendas", description: "Fundamentos do marketing, mix de marketing e estratégias de vendas." },
    ],
  },
  {
    id: 4,
    title: "Inglês Básico",
    author: "Aprenda Mais MEC",
    hours: 20,
    category: "Idiomas",
    description: "Curso introdutório de inglês com foco em comunicação básica e vocabulário essencial.",
    modules: [
      { title: "Greetings and Introductions", description: "Cumprimentos, apresentações pessoais e expressões do dia a dia." },
      { title: "Numbers, Dates and Time", description: "Números, datas, horas e vocabulário temporal." },
      { title: "Daily Routine", description: "Verbos no presente simples e rotina diária." },
      { title: "Food and Shopping", description: "Vocabulário de alimentação, compras e diálogos em lojas." },
      { title: "Review and Practice", description: "Revisão geral e exercícios práticos de conversação." },
    ],
  },
  {
    id: 5,
    title: "Introdução ao Python",
    author: "Coursera",
    hours: 35,
    category: "Tecnologia",
    description: "Aprenda a programar em Python desde o zero, com projetos práticos e exercícios interativos.",
    modules: [
      { title: "Configuração do Ambiente", description: "Instalação do Python, IDEs e primeiro programa." },
      { title: "Tipos de Dados e Variáveis", description: "Strings, inteiros, floats, booleanos e operações." },
      { title: "Controle de Fluxo", description: "Condicionais, loops for/while e compreensões de lista." },
      { title: "Funções e Módulos", description: "Definição de funções, parâmetros, retorno e importações." },
      { title: "Manipulação de Arquivos", description: "Leitura e escrita de arquivos, JSON e CSV." },
      { title: "Projeto Final com Python", description: "Desenvolvimento de uma aplicação completa em Python." },
    ],
  },
  {
    id: 6,
    title: "Desenvolvimento Web Front-End",
    author: "Coursera",
    hours: 40,
    category: "Tecnologia",
    description: "HTML, CSS e JavaScript para construção de interfaces web modernas e responsivas.",
    modules: [
      { title: "Fundamentos de HTML", description: "Estrutura de documentos, tags semânticas e formulários." },
      { title: "Estilização com CSS", description: "Seletores, box model, flexbox e grid layout." },
      { title: "CSS Responsivo", description: "Media queries, design mobile-first e acessibilidade." },
      { title: "JavaScript Básico", description: "Variáveis, funções, DOM e eventos." },
      { title: "JavaScript Intermediário", description: "Promises, fetch API e manipulação de dados." },
      { title: "Projeto Web Completo", description: "Construção de um site responsivo completo." },
    ],
  },
  {
    id: 7,
    title: "Gestão Pública",
    author: "IFRS",
    hours: 25,
    category: "Gestão Pública",
    description: "Princípios da administração pública, políticas públicas e governança.",
    modules: [
      { title: "Introdução à Gestão Pública", description: "Conceitos, princípios e diferenças com gestão privada." },
      { title: "Políticas Públicas", description: "Ciclo de políticas públicas e análise de políticas." },
      { title: "Orçamento Público", description: "LOA, LDO, PPA e processo orçamentário." },
      { title: "Governança e Transparência", description: "Lei de Acesso à Informação e portais de transparência." },
      { title: "Ética no Serviço Público", description: "Código de ética, condutas e responsabilidades." },
    ],
  },
  {
    id: 8,
    title: "Contabilidade Básica",
    author: "IFRS",
    hours: 30,
    category: "Administração",
    description: "Fundamentos de contabilidade, demonstrações financeiras e escrituração.",
    modules: [
      { title: "Conceitos Fundamentais", description: "Patrimônio, ativo, passivo e patrimônio líquido." },
      { title: "Escrituração Contábil", description: "Débito, crédito, livro diário e razão." },
      { title: "Demonstrações Financeiras", description: "Balanço patrimonial e DRE." },
      { title: "Análise de Balanço", description: "Indicadores financeiros e análise vertical/horizontal." },
      { title: "Projeto Contábil", description: "Elaboração de demonstrações de uma empresa fictícia." },
    ],
  },
  {
    id: 9,
    title: "Programação em Java",
    author: "Samsung Ocean",
    hours: 40,
    category: "Tecnologia",
    description: "Aprenda Java desde os fundamentos até orientação a objetos com projetos práticos.",
    modules: [
      { title: "Introdução ao Java", description: "JDK, JRE, IDEs e primeiro programa em Java." },
      { title: "Tipos e Operadores", description: "Tipos primitivos, strings, operadores e casting." },
      { title: "Controle de Fluxo em Java", description: "If/else, switch, for, while e do-while." },
      { title: "Orientação a Objetos I", description: "Classes, objetos, atributos e métodos." },
      { title: "Orientação a Objetos II", description: "Herança, polimorfismo, interfaces e encapsulamento." },
      { title: "Projeto OO Completo", description: "Sistema completo utilizando conceitos de POO." },
    ],
  },
  {
    id: 10,
    title: "Inteligência Artificial Básica",
    author: "Samsung Ocean",
    hours: 35,
    category: "Tecnologia",
    description: "Conceitos fundamentais de IA, machine learning e aplicações práticas.",
    modules: [
      { title: "O que é IA?", description: "História, conceitos e aplicações da inteligência artificial." },
      { title: "Machine Learning Fundamentos", description: "Tipos de aprendizado: supervisionado, não supervisionado e por reforço." },
      { title: "Pré-processamento de Dados", description: "Limpeza, normalização e preparação de datasets." },
      { title: "Modelos de Classificação", description: "Árvores de decisão, KNN e regressão logística." },
      { title: "Redes Neurais Básicas", description: "Perceptrons, camadas e funções de ativação." },
      { title: "Projeto de IA", description: "Desenvolvimento de um modelo preditivo simples." },
    ],
  },
  {
    id: 11,
    title: "Gestão de Recursos Humanos",
    author: "CIEE",
    hours: 25,
    category: "Gestão",
    description: "Recrutamento, seleção, treinamento e desenvolvimento de pessoas nas organizações.",
    modules: [
      { title: "Introdução ao RH", description: "Evolução do RH e seu papel estratégico nas empresas." },
      { title: "Recrutamento e Seleção", description: "Processos seletivos, entrevistas e dinâmicas de grupo." },
      { title: "Treinamento e Desenvolvimento", description: "Planejamento de T&D e avaliação de resultados." },
      { title: "Cargos e Salários", description: "Descrição de cargos, pesquisa salarial e remuneração." },
      { title: "Legislação Trabalhista Básica", description: "CLT, direitos e deveres do empregador e empregado." },
    ],
  },
  {
    id: 12,
    title: "Empreendedorismo e Inovação",
    author: "CIEE",
    hours: 20,
    category: "Gestão",
    description: "Desenvolva habilidades empreendedoras e aprenda a criar negócios inovadores.",
    modules: [
      { title: "Mentalidade Empreendedora", description: "Características do empreendedor e mindset de crescimento." },
      { title: "Modelo de Negócios Canvas", description: "Business Model Canvas e proposta de valor." },
      { title: "Plano de Negócios", description: "Estrutura, análise de mercado e projeções financeiras." },
      { title: "Marketing Digital para Startups", description: "Estratégias digitais, redes sociais e growth hacking." },
      { title: "Pitch e Captação de Recursos", description: "Como apresentar sua ideia e buscar investimentos." },
    ],
  },
  {
    id: 13,
    title: "Word e PowerPoint Profissional",
    author: "Fundação Bradesco",
    hours: 25,
    category: "Pacote Office",
    description: "Domine a criação de documentos e apresentações profissionais com Word e PowerPoint.",
    modules: [
      { title: "Word Avançado", description: "Formatação avançada, estilos, sumários e mala direta." },
      { title: "Documentos Longos", description: "Notas de rodapé, referências cruzadas e índices." },
      { title: "PowerPoint Profissional", description: "Design de slides, animações e transições eficazes." },
      { title: "Apresentações de Impacto", description: "Storytelling, dados visuais e técnicas de apresentação." },
      { title: "Integração Office", description: "Integração entre Word, Excel e PowerPoint." },
    ],
  },
  {
    id: 14,
    title: "Espanhol Básico",
    author: "Aprenda Mais MEC",
    hours: 20,
    category: "Idiomas",
    description: "Curso introdutório de espanhol com foco em comunicação e vocabulário essencial.",
    modules: [
      { title: "Saludos y Presentaciones", description: "Cumprimentos, apresentações e expressões básicas." },
      { title: "Números y Fechas", description: "Números, datas, horas e informações temporais." },
      { title: "La Vida Cotidiana", description: "Verbos no presente, rotina e atividades diárias." },
      { title: "Comida y Compras", description: "Vocabulário de alimentação e situações de compras." },
      { title: "Revisión General", description: "Revisão e prática de conversação." },
    ],
  },
]

export interface TechCourse {
  id: number
  title: string
  author: string
  hours: number
  shifts: string[]
  type: "presencial"
  address: string
  link: string
}

export const techCourses: TechCourse[] = [
  {
    id: 101,
    title: "Técnico em Desenvolvimento de Sistemas",
    author: "ETEC Rio Grande da Serra",
    hours: 1200,
    shifts: ["Manhã", "Noturno"],
    type: "presencial",
    address: "Av. Francisco Morais Ramos, 777 - Jardim Novo Horizonte, Rio Grande da Serra - SP, 09450-000",
    link: "https://www.cps.sp.gov.br/etecs/etec-rio-grande-da-serra/",
  },
  {
    id: 102,
    title: "Técnico em Administração",
    author: "ETEC Rio Grande da Serra",
    hours: 1000,
    shifts: ["Manhã", "Noturno"],
    type: "presencial",
    address: "Av. Francisco Morais Ramos, 777 - Jardim Novo Horizonte, Rio Grande da Serra - SP, 09450-000",
    link: "https://www.cps.sp.gov.br/etecs/etec-rio-grande-da-serra/",
  },
  {
    id: 103,
    title: "Técnico em Informática para Internet",
    author: "ETEC Rio Grande da Serra",
    hours: 1200,
    shifts: ["Tarde"],
    type: "presencial",
    address: "Av. Francisco Morais Ramos, 777 - Jardim Novo Horizonte, Rio Grande da Serra - SP, 09450-000",
    link: "https://www.cps.sp.gov.br/etecs/etec-rio-grande-da-serra/",
  },
  {
    id: 104,
    title: "Técnico em Edificações",
    author: "ETEC Rio Grande da Serra",
    hours: 1200,
    shifts: ["Manhã"],
    type: "presencial",
    address: "Av. Francisco Morais Ramos, 777 - Jardim Novo Horizonte, Rio Grande da Serra - SP, 09450-000",
    link: "https://www.cps.sp.gov.br/etecs/etec-rio-grande-da-serra/",
  },
  {
    id: 105,
    title: "Técnico em Recursos Humanos",
    author: "ETEC Rio Grande da Serra",
    hours: 800,
    shifts: ["Noturno"],
    type: "presencial",
    address: "Av. Francisco Morais Ramos, 777 - Jardim Novo Horizonte, Rio Grande da Serra - SP, 09450-000",
    link: "https://www.cps.sp.gov.br/etecs/etec-rio-grande-da-serra/",
  },
]

export const libraryItems = [
  { id: 1, type: "Livro", title: "Clean Code - Código Limpo", author: "Robert C. Martin", description: "Princípios de código limpo e boas práticas de desenvolvimento." },
  { id: 2, type: "Livro", title: "O Programador Pragmático", author: "Andrew Hunt & David Thomas", description: "Guia prático para desenvolvimento de software profissional." },
  { id: 3, type: "Manual", title: "Guia PMBOK - 7a Edição", author: "PMI", description: "Manual de gerenciamento de projetos reconhecido mundialmente." },
  { id: 4, type: "Manual", title: "Guia Scrum 2020", author: "Ken Schwaber & Jeff Sutherland", description: "Framework ágil para desenvolvimento de produtos complexos." },
  { id: 5, type: "Projeto Modelo", title: "Template de Plano de Projeto", author: "VirtualTec", description: "Modelo completo de plano de projeto com cronograma e riscos." },
  { id: 6, type: "Projeto Modelo", title: "Template de Business Canvas", author: "VirtualTec", description: "Modelo Canvas para planejamento de modelos de negócios." },
  { id: 7, type: "Passo a Passo", title: "Como configurar Git e GitHub", author: "VirtualTec", description: "Tutorial completo de versionamento com Git e repositórios remotos." },
  { id: 8, type: "Passo a Passo", title: "Deploy de Aplicações Web", author: "VirtualTec", description: "Guia passo a passo para publicar aplicações na web." },
]
