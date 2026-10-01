import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  Instagram,
  MapPin,
} from "lucide-react";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { Estimator } from "@/components/estimator";
import { site, whatsappUrl } from "@/lib/site";

const steps = [
  [
    "A gente conversa",
    "Você conta como seu negócio funciona e o que quer melhorar. Eu ajudo a transformar isso em um projeto.",
  ],
  [
    "Tudo fica combinado",
    "Você recebe uma proposta com funcionalidades, prazo, investimento e condições de entrega.",
  ],
  [
    "A ideia ganha forma",
    "Desenvolvo o projeto e apresento para revisão. Os ajustes seguem o que combinamos na proposta.",
  ],
  [
    "Pronto para usar",
    "Depois dos testes e da aprovação, preparo a publicação e explico como utilizar a solução.",
  ],
];
const questions = [
  [
    "Quanto custa um projeto?",
    "Depende das páginas, funcionalidades e integrações necessárias. Depois de entender sua ideia, envio uma proposta com escopo e valor definidos. A conversa inicial é sem compromisso.",
  ],
  [
    "Você faz só sites?",
    "Também desenvolvo agendamentos, catálogos, formulários de pré-pedido, dashboards e sistemas de organização. Cada solução é planejada de acordo com o processo do seu negócio.",
  ],
  [
    "Posso começar com algo menor?",
    "Sim. Podemos definir uma primeira versão com o essencial e planejar novas funcionalidades para outras etapas. Cada etapa tem seu próprio escopo e orçamento.",
  ],
  [
    "Preciso ter textos, fotos e domínio?",
    "Podemos organizar isso na conversa inicial. Definimos quais materiais você fornece e o que fará parte do meu trabalho. Domínio, hospedagem e serviços externos são discriminados na proposta.",
  ],
  [
    "Como funcionam prazo e manutenção?",
    "O prazo considera a complexidade e a entrega dos materiais. Correções, suporte e futuras alterações são combinados na proposta, assim como eventuais custos recorrentes.",
  ],
  [
    "Você atende fora de Campinas?",
    "Sim. Atendo remotamente em todo o Brasil, com contato direto comigo durante o projeto.",
  ],
];
export default function Page() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a
            href="#inicio"
            className="brand"
            aria-label="Luis Felipe Tech — início"
          >
            <span className="brand-mark">
              lf<span>.</span>
            </span>
            <span>
              Luis Felipe
              <span className="brand-sub">DESENVOLVIMENTO DIGITAL</span>
            </span>
          </a>
          <nav aria-label="Navegação principal">
            <a href="#projetos">Projetos</a>
            <a href="#solucoes">Soluções</a>
            <a href="#sobre">Sobre mim</a>
          </nav>
          <a className="button button-small" href="#contato">
            Vamos conversar <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </header>
      <main id="conteudo">
        <Hero />
        <div className="expertise-strip">
          <div className="container">
            <span>Ideias que viram ferramentas.</span>
            <div>
              <span>Sites & catálogos</span>
              <i aria-hidden="true" />
              <span>Agendamentos</span>
              <i aria-hidden="true" />
              <span>Sistemas & dashboards</span>
            </div>
            <ArrowDown size={18} aria-hidden="true" />
          </div>
        </div>
        <Portfolio />
        <Services />
        <section
          className="section about-section"
          id="sobre"
          aria-labelledby="about-title"
        >
          <div className="container about-grid">
            <div className="portrait-frame">
              <Image
                src="/luis-felipe.webp"
                alt="Luis Felipe, desenvolvedor em Campinas"
                fill
                sizes="(max-width: 760px) 90vw, 420px"
                className="portrait"
              />
              <div className="portrait-caption">
                <Code2 size={20} />
                <span>
                  Por trás do código,
                  <br />
                  <strong>uma conversa de verdade.</strong>
                </span>
              </div>
            </div>
            <div className="about-copy">
              <p className="eyebrow">03 / QUEM VAI DESENVOLVER</p>
              <h2 id="about-title">
                Prazer,
                <br />
                sou o Luis Felipe<span className="accent">.</span>
              </h2>
              <p>
                Sou desenvolvedor em Campinas e gosto de transformar
                necessidades do dia a dia em soluções digitais que fazem sentido
                para quem vai usar.
              </p>
              <p>
                Meu trabalho vai da presença online à organização de processos:
                um site para uma empresa do Ceasa, uma agenda para serviços de
                beleza, um painel de dados ou um quadro de tarefas.
              </p>
              <div className="about-principles">
                <span>
                  <Check size={17} /> Contato direto comigo
                </span>
                <span>
                  <Check size={17} /> Escopo claro, antes de começar
                </span>
                <span>
                  <Check size={17} /> Experiência pensada para o usuário
                </span>
              </div>
              <p className="location">
                <MapPin size={16} /> Campinas, SP · Atendimento em todo o Brasil
              </p>
              <a
                className="text-link"
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={17} /> Acompanhe meu trabalho{" "}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
        <section
          className="section process-section"
          id="processo"
          aria-labelledby="process-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">04 / DO PRIMEIRO OI À ENTREGA</p>
                <h2 id="process-title">
                  Você acompanha.
                  <br />A gente constrói.
                </h2>
              </div>
              <p>
                Clareza em cada etapa, para você saber
                <br className="desktop-break" /> o que está sendo desenvolvido.
              </p>
            </div>
            <div className="steps">
              {steps.map(([title, text], i) => (
                <article key={title}>
                  <span className="step-number">0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section faq-section" aria-labelledby="faq-title">
          <div className="container faq-grid">
            <div>
              <p className="eyebrow">SEM COMPLICAÇÃO</p>
              <h2 id="faq-title">
                Antes de
                <br />
                começar.
              </h2>
              <p>
                Algumas respostas para
                <br />
                tirar a ideia do papel.
              </p>
            </div>
            <div className="faq-list">
              {questions.map(([q, a]) => (
                <details key={q}>
                  <summary>
                    {q}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <Estimator />
      </main>
      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand" href="#inicio">
            <span className="brand-mark">
              lf<span>.</span>
            </span>
            <span>
              Luis Felipe Tech
              <span className="brand-sub">CÓDIGO COM PROPÓSITO.</span>
            </span>
          </a>
          <div>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">
              Instagram <ArrowUpRight size={14} />
            </a>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              WhatsApp <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Luis Felipe. Feito com atenção aos
            detalhes.
          </span>
          <a href="#inicio">Voltar ao início ↑</a>
        </div>
      </footer>
    </>
  );
}
