"use client";
import { useRef, useState } from "react";
import { ArrowUpRight, Check, X } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { ProjectPreview } from "@/components/project-preview";
import { whatsappUrl } from "@/lib/site";
const filters = ["Todos", "Sites", "Agendamentos", "Sistemas e dados"] as const;
export function Portfolio() {
  const [filter, setFilter] = useState<string>("Todos");
  const [selected, setSelected] = useState<Project | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const visible = projects.filter(
    (p) => filter === "Todos" || p.category === filter,
  );
  function openProject(project: Project, button: HTMLButtonElement) {
    trigger.current = button;
    setSelected(project);
    dialog.current?.showModal();
    document.body.classList.add("dialog-open");
  }
  function onClose() {
    document.body.classList.remove("dialog-open");
    trigger.current?.focus();
  }
  return (
    <section
      className="section portfolio-section"
      id="projetos"
      aria-labelledby="portfolio-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / TRABALHOS SELECIONADOS</p>
            <h2 id="portfolio-title">
              Cada projeto,
              <br />
              um problema resolvido<span className="accent">.</span>
            </h2>
          </div>
          <p>
            Da presença digital à organização do trabalho.
            <br />
            Conheça o contexto e a solução de cada projeto.
          </p>
        </div>
        <div className="portfolio-toolbar">
          <div
            className="project-filters"
            role="group"
            aria-label="Filtrar projetos"
          >
            {filters.map((f) => (
              <button
                type="button"
                key={f}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <span className="project-count" aria-live="polite">
            {visible.length.toString().padStart(2, "0")} projetos
          </span>
        </div>
        <div className="projects-grid">
          {visible.map((project) => (
            <article key={project.id} className="project-card">
              <ProjectPreview id={project.id} />
              <div className="project-info">
                <p className="project-label">{project.label}</p>
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <button
                    className="project-open"
                    type="button"
                    onClick={(e) => openProject(project, e.currentTarget)}
                    aria-label={`Ver detalhes de ${project.title}`}
                  >
                    <ArrowUpRight size={22} />
                  </button>
                </div>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.stack.slice(0, 3).map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="portfolio-note">
          Projetos para negócios e projetos de portfólio, identificados em cada
          apresentação.
        </p>
      </div>
      <dialog
        ref={dialog}
        onClose={onClose}
        className="project-dialog"
        aria-labelledby="project-dialog-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <div className="dialog-content">
          {selected ? (
            <>
              <button
                autoFocus
                type="button"
                className="dialog-close"
                aria-label="Fechar detalhes do projeto"
                onClick={() => dialog.current?.close()}
              >
                <X size={23} />
              </button>
              <p className="eyebrow">{selected.label}</p>
              <h2 id="project-dialog-title">{selected.title}</h2>
              <ProjectPreview id={selected.id} />
              <div className="case-grid">
                <div>
                  <h3>O contexto</h3>
                  <p>{selected.context}</p>
                </div>
                <div>
                  <h3>O que desenvolvi</h3>
                  <p>{selected.solution}</p>
                </div>
              </div>
              <h3>O que o projeto inclui</h3>
              <ul className="feature-list">
                {selected.features.map((f) => (
                  <li key={f}>
                    <Check size={17} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="project-tags">
                {selected.stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <p className="case-note">{selected.note}</p>
              <div className="dialog-actions">
                {selected.url ? (
                  <a
                    className="button"
                    href={selected.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visitar site <ArrowUpRight size={17} />
                  </a>
                ) : null}
                <a
                  className="button button-outline"
                  href={whatsappUrl(
                    `Olá, Luis! Vi o projeto ${selected.title} no seu portfólio e gostaria de conversar sobre uma solução para meu negócio.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quero algo assim <ArrowUpRight size={17} />
                </a>
              </div>
            </>
          ) : null}
        </div>
      </dialog>
    </section>
  );
}
