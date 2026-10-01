"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
const options = [
  {
    id: "site",
    label: "Site ou catálogo digital",
    description:
      "Apresentar seu negócio, serviços ou produtos e facilitar o contato.",
  },
  {
    id: "agenda",
    label: "Agendamento online",
    description:
      "Organizar a escolha de serviços, dias e horários de atendimento.",
  },
  {
    id: "pedido",
    label: "Pré-pedido ou pré-agendamento",
    description:
      "Reunir produtos, quantidades e preferências antes da confirmação.",
  },
  {
    id: "sistema",
    label: "Sistema de organização",
    description:
      "Acompanhar tarefas e processos em uma ferramenta feita para seu dia a dia.",
  },
  {
    id: "dashboard",
    label: "Dashboard e análise de dados",
    description: "Transformar planilhas em indicadores, filtros e gráficos.",
  },
  {
    id: "outro",
    label: "Ainda preciso de orientação",
    description:
      "Vamos conversar sobre sua rotina e descobrir por onde começar.",
  },
];
export function Estimator() {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get("servico");
    if (options.some((o) => o.id === value)) setType(value!);
  }, []);
  const selected = options.find((o) => o.id === type);
  const message = [
    "Olá, Luis! Vim pelo seu portfólio.",
    name.trim() ? `Meu nome é ${name.trim()}.` : "",
    business.trim() ? `Meu negócio/área: ${business.trim()}.` : "",
    `Tenho interesse em: ${selected?.label || "conversar sobre um projeto"}.`,
    description.trim() ? `Minha ideia: ${description.trim()}` : "",
    "Gostaria de entender o escopo, o prazo e o investimento.",
  ]
    .filter(Boolean)
    .join("\n");
  return (
    <section
      className="contact-section"
      id="contato"
      aria-labelledby="contact-title"
    >
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">
            <span className="status-dot" /> VAMOS CONSTRUIR ALGO ÚTIL
          </p>
          <h2 id="contact-title">
            Sua ideia merece
            <br />
            sair do papel<span className="accent">.</span>
          </h2>
          <p>
            Me conte o que você precisa. Eu te ajudo a definir o primeiro passo
            e preparo uma proposta para o seu projeto.
          </p>
          <div className="contact-promises">
            <span>
              <Check size={18} /> Conversa inicial sem compromisso
            </span>
            <span>
              <Check size={18} /> Valor e prazo definidos na proposta
            </span>
            <span>
              <Check size={18} /> Contato direto com quem desenvolve
            </span>
          </div>
          <a href={`mailto:${site.email}`} className="contact-email">
            Prefere e-mail?
            <strong>
              {site.email} <ArrowUpRight size={15} />
            </strong>
          </a>
        </div>
        <form
          className="briefing-form"
          action={`https://wa.me/${site.phone}`}
          method="get"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="form-heading">
            <span className="mini-icon">
              <MessageCircle size={21} />
            </span>
            <div>
              <h3>Me conte sobre seu projeto</h3>
              <p>Um ponto de partida para a nossa conversa.</p>
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="brief-name">
              Seu nome <span>(opcional)</span>
              <input
                id="brief-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Como posso te chamar?"
                autoComplete="given-name"
                maxLength={80}
              />
            </label>
            <label htmlFor="brief-business">
              Negócio ou área <span>(opcional)</span>
              <input
                id="brief-business"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder="Ex.: estúdio de beleza"
                autoComplete="organization"
                maxLength={120}
              />
            </label>
          </div>
          <label htmlFor="brief-type">
            O que você quer desenvolver?
            <select
              id="brief-type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
              aria-describedby="service-hint"
            >
              <option value="" disabled>
                Selecione uma opção
              </option>
              {options.map((o) => (
                <option value={o.id} key={o.id}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
          <p id="service-hint" className="service-hint" aria-live="polite">
            {selected?.description ||
              "Tudo bem se você ainda não souber. Posso ajudar a definir."}
          </p>
          <label htmlFor="brief-description">
            Qual problema você quer resolver? <span>(opcional)</span>
            <textarea
              id="brief-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Conte um pouco sobre sua rotina e o que gostaria de melhorar..."
              rows={3}
              maxLength={1000}
            />
          </label>
          <input type="hidden" name="text" value={message} />
          <button type="submit" className="button form-submit">
            Continuar no WhatsApp <ArrowUpRight size={18} />
          </button>
          <p className="form-note">
            Você revisa a mensagem no WhatsApp antes de enviar. Este formulário
            não armazena suas informações no site.
          </p>
        </form>
      </div>
    </section>
  );
}
