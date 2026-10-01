# Luis Felipe Tech

Portfólio em Next.js, com projetos de sites, agendamentos, dashboards e sistemas.

## Executar

Requer Node.js 20.9 ou superior.

```bash
npm ci
npm run dev
```

Abra http://localhost:3000.

```bash
npm run typecheck
npm run build
npm start
```

Instalação padronizada com npm ci e package-lock.json. O build utiliza webpack.

## Editar conteúdo

- `lib/site.ts`: WhatsApp, e-mail, Instagram e endereço público.
- `data/projects.ts`: descrições, funcionalidades e links dos quatro projetos.
- `components/project-preview.tsx`: ilustrações identificadas dos projetos não publicados.
- `components/services.tsx`: cinco tipos de solução.
- `components/estimator.tsx`: briefing para WhatsApp, sem preços ou prazos automáticos.
- `app/page.tsx`: apresentação pessoal, processo de trabalho e perguntas frequentes.
- `app/globals.css`: identidade visual e ajustes para celular.
- `app/layout.tsx` e `app/opengraph-image.tsx`: metadados e imagem de compartilhamento.

## Contato e dados

O formulário abre uma mensagem pré-preenchida no WhatsApp. O visitante revisa e envia a mensagem por lá. Não há banco de dados nem armazenamento de formulários no site. O envio não acontece automaticamente. O site não precisa de variáveis de ambiente.

Os links dos serviços pré-selecionam o briefing, por exemplo `/?servico=agenda#contato`.

## Projetos

- Shopping do Alimento: site para empresa do Ceasa Campinas. Link público e captura real da página.
- Inaê Beauty: agendamento de sobrancelhas e beleza. Apresentação baseada no código; interface ilustrativa, sem agenda ou dados reais.
- Visão Salarial: projeto de portfólio não publicado. Ilustração com valores fictícios.
- Mini Kanban: projeto de portfólio. Ilustração com tarefas de exemplo.
- Pré-pedidos e pré-agendamentos: apresentados como serviço disponível, sem inventar um quinto projeto já entregue.

A revisão foi do portfólio. Ela não certifica a segurança, disponibilidade ou prontidão para produção dos sistemas apresentados.

## Publicar

Versão publicada em 01/10/2026 em https://luisfelipe-tech.vercel.app/ via CLI. O repositório está sincronizado com essa versão. Use a branch main para futuras atualizações. Para atualizar o projeto existente na Vercel, substitua o código no repositório correspondente após revisar a prévia. Configuração: framework Next.js, instalação npm ci, build npm run build. Ao mudar o domínio, atualize `site.url`.

A pasta original do OneDrive foi preservada durante a revisão.

## Verificação

Build de produção e TypeScript validados. Navegação, filtros, detalhes de projetos, formulário para WhatsApp, e-mail e layout em cinco larguras de tela foram conferidos. A publicação de 01/10/2026 foi verificada no endereço público.
