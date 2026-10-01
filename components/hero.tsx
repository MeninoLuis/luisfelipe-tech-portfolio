import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Check,
  Code2,
} from "lucide-react";
export function Hero() {
  return (
    <section
      className="hero container"
      id="inicio"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> DESENVOLVEDOR WEB · CAMPINAS, SP
        </p>
        <h1 id="hero-title">
          Seu negócio,
          <br />
          uma versão
          <br />
          <span className="hero-highlight">
            mais digital
            <svg viewBox="0 0 480 16" fill="none" aria-hidden="true">
              <path
                d="M3 12C118 0 287 1 475 8"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          .
        </h1>
        <p className="hero-description">
          Sites que apresentam. Agendas que organizam.
          <br className="desktop-break" /> Sistemas que simplificam o seu dia a
          dia.
        </p>
        <div className="hero-actions">
          <a className="button" href="#contato">
            Vamos criar seu projeto <ArrowUpRight size={19} />
          </a>
          <a className="button-quiet" href="#projetos">
            Conheça meu trabalho <ArrowDown size={17} />
          </a>
        </div>
        <div className="hero-signature">
          <Image src="/luis-felipe.webp" alt="" width={42} height={42} />
          <p>
            Da primeira conversa à entrega,
            <br />
            <strong>você fala direto comigo.</strong>
          </p>
        </div>
      </div>
      <div
        className="hero-visual"
        aria-label="Apresentação dos tipos de projeto"
      >
        <div className="visual-grid" aria-hidden="true" />
        <span className="visual-top-label">
          <Code2 size={15} /> DA IDEIA À INTERFACE
        </span>
        <div className="hero-browser">
          <div className="browser-bar">
            <span className="browser-dots">
              <i />
              <i />
              <i />
            </span>
            <span>shopping-do-alimento.vercel.app</span>
            <ArrowUpRight size={13} />
          </div>
          <div className="hero-project-image">
            <Image
              src="/projects/shopping.webp"
              alt="Página do site Shopping do Alimento, empresa do Ceasa Campinas"
              fill
              sizes="(max-width: 760px) 90vw, 600px"
              priority
              className="project-cover"
            />
          </div>
          <div className="browser-caption">
            <span>
              <span className="status-dot" /> PROJETO DESENVOLVIDO
            </span>
            <strong>Shopping do Alimento</strong>
          </div>
        </div>
        <div className="floating-agenda">
          <span className="mini-icon">
            <CalendarDays size={18} />
          </span>
          <div>
            <strong>Uma agenda mais simples.</strong>
            <span>Serviço → Dia → Horário</span>
          </div>
          <Check size={16} className="accent" />
        </div>
        <div className="floating-code">
          <Code2 size={18} />
          <span>
            Uma solução para
            <br />
            <strong>o seu jeito de trabalhar.</strong>
          </span>
        </div>
        <span className="visual-bottom-label">
          DESIGN + DESENVOLVIMENTO + PROPÓSITO
        </span>
      </div>
    </section>
  );
}
