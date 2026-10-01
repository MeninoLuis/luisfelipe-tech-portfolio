export type Project = {
  id: string;
  title: string;
  category: "Sites" | "Agendamentos" | "Sistemas e dados";
  label: string;
  description: string;
  context: string;
  solution: string;
  features: string[];
  stack: string[];
  image?: string;
  url?: string;
  note: string;
};
export const projects: Project[] = [
  {
    id: "shopping",
    title: "Shopping do Alimento",
    category: "Sites",
    label: "Site para empresa · Ceasa Campinas",
    description:
      "Do ponto de venda à presença digital: produtos, história e contato em um site próprio.",
    context:
      "Uma empresa do Ceasa Campinas que ainda não tinha site precisava de um espaço para apresentar seu negócio na internet.",
    solution:
      "Desenvolvi um site institucional com catálogo de hortifruti, informações sobre a empresa e caminhos para entrar em contato.",
    features: [
      "Apresentação da empresa e dos produtos",
      "Categorias de hortifruti e páginas de produtos",
      "Informações de localização e contato",
      "Layout adaptado para celular e computador",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/projects/shopping.webp",
    url: "https://shopping-do-alimento.vercel.app/#inicio",
    note: "Trabalho desenvolvido para uma empresa do Ceasa Campinas, com foco em presença digital e contato comercial.",
  },
  {
    id: "inae",
    title: "Inaê Beauty",
    category: "Agendamentos",
    label: "Agendamento · Sobrancelhas e beleza",
    description:
      "Serviço, dia e horário. Um caminho organizado para marcar o próximo atendimento.",
    context:
      "Organizar os agendamentos de uma profissional de sobrancelhas e beleza, reunindo serviços e horários em um fluxo de atendimento.",
    solution:
      "Desenvolvi uma aplicação com escolha de serviço, data e horário, cadastro dos dados do cliente e uma visão de agenda para a profissional.",
    features: [
      "Serviços com foto, duração e preço",
      "Seleção de dias e horários disponíveis",
      "Resumo e registro do agendamento",
      "Painel da agenda e atalhos de mensagem no WhatsApp",
    ],
    stack: ["React", "Vite", "Supabase"],
    note: "As mensagens de WhatsApp são abertas para envio manual. A ilustração usa informações de exemplo e não mostra a agenda de clientes.",
  },
  {
    id: "dashboard",
    title: "Visão Salarial",
    category: "Sistemas e dados",
    label: "Projeto de portfólio · Dashboard de RH",
    description:
      "Uma planilha se transforma em indicadores, filtros e uma leitura mais clara dos dados.",
    context:
      "Explorar como dados de uma planilha salarial podem ser apresentados de forma mais útil para análise.",
    solution:
      "Criei um dashboard em Python que recebe uma planilha Excel, aplica filtros e apresenta indicadores e gráficos de distribuição salarial.",
    features: [
      "Importação de planilha Excel no formato esperado",
      "Filtros por turno, gênero, função e salário",
      "Contagem de funcionários, média salarial e total da folha",
      "Gráfico interativo e tabela dos dados filtrados",
    ],
    stack: ["Python", "Streamlit", "Pandas", "Plotly"],
    note: "Projeto de portfólio ainda não publicado. Os números da ilustração são fictícios e não representam dados de uma empresa.",
  },
  {
    id: "kanban",
    title: "Mini Kanban",
    category: "Sistemas e dados",
    label: "Projeto de portfólio · Organização de tarefas",
    description:
      "O trabalho sai das anotações soltas e ganha etapas, prioridades e uma visão de progresso.",
    context:
      "Ter um lugar para visualizar tarefas e acompanhar o que precisa ser feito, o que está em andamento e o que foi concluído.",
    solution:
      "Desenvolvi um quadro Kanban com cartões, prioridades e movimentação entre colunas, conectado a uma API em Go.",
    features: [
      "Criação e exclusão de tarefas",
      "Organização em etapas de trabalho",
      "Movimentação de cartões entre colunas",
      "Prioridades e armazenamento pelo backend",
    ],
    stack: ["Next.js", "TypeScript", "Go", "SQLite"],
    note: "Projeto de portfólio. Os cartões da ilustração são exemplos; as necessidades de acesso e uso são definidas no escopo de cada sistema.",
  },
];
