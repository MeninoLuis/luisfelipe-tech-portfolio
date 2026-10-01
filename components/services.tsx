import {
  ArrowUpRight,
  CalendarDays,
  ChartNoAxesCombined,
  ClipboardList,
  Globe2,
  PanelsTopLeft,
} from "lucide-react";
const services = [
  {
    icon: Globe2,
    title: "Seu negócio na internet",
    text: "Sites institucionais, páginas de divulgação e catálogos para apresentar o que você faz e facilitar o contato.",
    tags: "Comércio · Prestadores de serviço · Empresas locais",
    type: "site",
  },
  {
    icon: CalendarDays,
    title: "Agenda mais organizada",
    text: "Escolha de serviço, dia e horário em uma experiência simples para seu cliente e para você.",
    tags: "Beleza · Profissionais autônomos · Atendimentos",
    type: "agenda",
  },
  {
    icon: ClipboardList,
    title: "Pedidos com as informações certas",
    text: "Formulários para selecionar produtos, quantidades e preferências antes de confirmar o pedido ou atendimento.",
    tags: "Encomendas · Pré-pedidos · Solicitações de orçamento",
    type: "pedido",
  },
  {
    icon: PanelsTopLeft,
    title: "Processos em um só lugar",
    text: "Sistemas sob medida, quadros de tarefas e painéis para acompanhar as etapas do trabalho.",
    tags: "Pequenas equipes · Operações · Organização interna",
    type: "sistema",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Mais clareza nos seus dados",
    text: "Dashboards que transformam planilhas em gráficos, filtros e indicadores para apoiar sua análise.",
    tags: "Gestão · RH · Relatórios e indicadores",
    type: "dashboard",
  },
];
export function Services() {
  return (
    <section
      className="section services-section"
      id="solucoes"
      aria-labelledby="services-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / O QUE POSSO CRIAR COM VOCÊ</p>
            <h2 id="services-title">
              Tecnologia que cabe
              <br />
              na sua realidade.
            </h2>
          </div>
          <p>
            Começamos pelo que seu negócio precisa.
            <br />A solução vem depois.
          </p>
        </div>
        <div className="services-grid">
          {services.map(({ icon: Icon, title, text, tags, type }, i) => (
            <article className="service" key={title}>
              <div className="service-top">
                <Icon size={26} strokeWidth={1.5} />
                <span>0{i + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="service-tags">{tags}</span>
              <a
                className="service-link"
                href={`?servico=${type}#contato`}
                aria-label={`Conversar sobre ${title.toLowerCase()}`}
              >
                <span>Quero uma solução assim</span>
                <ArrowUpRight size={19} />
              </a>
            </article>
          ))}
          <div className="service service-note">
            <span className="eyebrow">TEM OUTRA IDEIA?</span>
            <h3>
              Vamos entender
              <br />o que faz sentido.
            </h3>
            <p>
              Você não precisa chegar com uma solução pronta. Me conte o
              problema que quer resolver.
            </p>
            <a className="button" href="#contato">
              Conversar sobre minha ideia <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
