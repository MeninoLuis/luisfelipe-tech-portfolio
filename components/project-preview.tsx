import Image from "next/image";
import {
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  MoreHorizontal,
  Plus,
} from "lucide-react";
export function ProjectPreview({ id }: { id: string }) {
  if (id === "shopping")
    return (
      <div className="project-preview shopping-preview">
        <div className="preview-browser">
          <span className="browser-dots">
            <i />
            <i />
            <i />
          </span>
          <span>shopping-do-alimento.vercel.app</span>
        </div>
        <div className="shopping-shot">
          <Image
            src="/projects/shopping.webp"
            alt="Captura do site Shopping do Alimento"
            fill
            sizes="(max-width: 760px) 90vw, 580px"
            className="project-cover"
          />
        </div>
        <span className="preview-stamp">SITE DESENVOLVIDO</span>
      </div>
    );
  return (
    <div className={`project-preview ${id}-preview`}>
      {id === "inae" ? (
        <div className="agenda-mock" aria-hidden="true">
          <div className="agenda-brand">
            <span>
              inaê<span> beauty</span>
            </span>
            <CalendarDays size={19} />
          </div>
          <p className="mock-overline">UM TEMPO SÓ SEU</p>
          <h4>
            Seu próximo cuidado
            <br />
            começa aqui.
          </h4>
          <div className="agenda-steps">
            <span>
              <Check size={10} /> Serviço
            </span>
            <strong>2 · Horário</strong>
            <span>3 · Seus dados</span>
          </div>
          <div className="mock-service">
            <span>
              Design de sobrancelhas
              <small>30 minutos · Atendimento individual</small>
            </span>
            <span>✓</span>
          </div>
          <div className="calendar-heading">
            <strong>Escolha seu dia</strong>
            <span>
              <ChevronLeft size={13} />
              <ChevronRight size={13} />
            </span>
          </div>
          <div className="mock-days">
            {["SEG", "TER", "QUA", "QUI", "SEX"].map((d, i) => (
              <span className={i === 2 ? "selected" : ""} key={d}>
                <small>{d}</small>
                <strong>{12 + i}</strong>
              </span>
            ))}
          </div>
          <div className="mock-times">
            <span>09:00</span>
            <span className="selected">10:30</span>
            <span>14:00</span>
          </div>
        </div>
      ) : null}
      {id === "dashboard" ? (
        <div className="dashboard-mock" aria-hidden="true">
          <div className="mock-app-header">
            <span>
              <LayoutGrid size={16} /> Visão Salarial
            </span>
            <span className="mock-badge">RH / ANÁLISE</span>
          </div>
          <div className="mock-kpis">
            <div>
              <small>Colaboradores</small>
              <strong>24</strong>
            </div>
            <div>
              <small>Média salarial</small>
              <strong>R$ 3.250</strong>
            </div>
            <div>
              <small>Total da folha</small>
              <strong>R$ 78 mil</strong>
            </div>
          </div>
          <div className="mock-chart">
            <div>
              <strong>Distribuição salarial</strong>
              <span>Por função ▾</span>
            </div>
            <div className="bars">
              {[42, 66, 51, 85, 63, 95, 71, 57, 79].map((h, i) => (
                <i key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="chart-axis">
              <span>Administrativo</span>
              <span>Operacional</span>
              <span>Gestão</span>
            </div>
          </div>
          <div className="mock-table">
            <span>Função</span>
            <span>Turno</span>
            <span>Salário</span>
            <i />
            <i />
            <i />
          </div>
        </div>
      ) : null}
      {id === "kanban" ? (
        <div className="kanban-mock" aria-hidden="true">
          <div className="mock-app-header">
            <span>
              <LayoutGrid size={16} /> Meu espaço de trabalho
            </span>
            <Plus size={16} />
          </div>
          <h4>Uma etapa de cada vez.</h4>
          <div className="mock-columns">
            {[
              ["A fazer", "Revisar proposta", "Organizar briefing"],
              ["Em andamento", "Desenvolver página"],
              ["Concluído", "Definir escopo"],
            ].map(([title, ...tasks], index) => (
              <div key={title}>
                <div className="mock-column-title">
                  <i className={`column-dot dot-${index}`} />
                  {title}
                  <span>{tasks.length}</span>
                </div>
                {tasks.map((task, i) => (
                  <div className="mock-task" key={task}>
                    <span className={`task-tag tag-${index}`}>
                      {index === 2
                        ? "Finalizado"
                        : i === 0
                          ? "Prioridade"
                          : "Planejamento"}
                    </span>
                    <strong>{task}</strong>
                    <div>
                      <span className="task-lines" />
                      <MoreHorizontal size={13} />
                    </div>
                  </div>
                ))}
                <span className="mock-add">+ Adicionar tarefa</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <span className="preview-stamp">
        INTERFACE ILUSTRATIVA · DADOS DE EXEMPLO
      </span>
    </div>
  );
}
