import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  CalendarCheck2,
  Check,
  Code2,
  Download,
  Menu,
  MessageCircle,
  MousePointerClick,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import caiquePhoto from "@/assets/caique-vieira.png.asset.json";
import professionalProfile from "@/assets/historico-profissional-caique-vieira.pdf.asset.json";

const whatsapp =
  "https://wa.me/5511967742489?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20da%20Underline!";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Liderança", href: "#lideranca" },
  { label: "Roadmap", href: "#roadmap" },
];

const projects = [
  { name: "Toca do Panda Buffet", category: "Buffet & Eventos", url: "https://tocadopandabuffet.com.br/", initials: "TP", index: "01" },
  { name: "Studio MK | Beleza Mulher", category: "Beleza & Estética", url: "https://mk-beauty-luxe.lovable.app/", initials: "MK", index: "02" },
  { name: "Studio Elegante", category: "Beleza & Estética", url: "https://studio-elegante-booking.lovable.app", initials: "SE", index: "03" },
  { name: "Lou Lou Pet Haven", category: "Pet Care", url: "https://lou-lou-pet-haven.lovable.app", initials: "LL", index: "04" },
  { name: "Araicas Vet", category: "Pet Care", url: "https://araicas-vet-charm.lovable.app/", initials: "AV", index: "05" },
  { name: "Corpilates Balance", category: "Saúde & Educação", url: "https://corpilates-balance-health.lovable.app/", initials: "CB", index: "06" },
] as const;

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#topo" className="group flex shrink-0 items-center gap-3" aria-label="Underline — início">
      <svg className={compact ? "h-9 w-9" : "h-10 w-10"} viewBox="0 0 48 48" role="img" aria-label="Símbolo Underline">
        <rect width="48" height="48" rx="6" className="fill-primary" />
        <path d="M15 12v12.5c0 6.4 3.1 10 8.8 10 3.5 0 6.1-1.5 8.2-4.3V12h-5v12.4c0 3.6-1.4 5.5-4 5.5-2.1 0-3-1.5-3-5.3V12h-5Z" className="fill-primary-foreground" />
        <path d="M13 39h22" className="stroke-primary-foreground" strokeWidth="3" />
      </svg>
      <span className="text-lg font-extrabold text-foreground"><span className="text-primary">Under</span>line.</span>
    </a>
  );
}

function WhatsAppButton({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <Button asChild size="lg" className={cn("h-12 rounded-sm bg-primary px-6 font-bold text-primary-foreground shadow-none transition-all hover:-translate-y-0.5 hover:bg-primary/90", className)}>
      <a href={whatsapp} target="_blank" rel="noreferrer">{children}</a>
    </Button>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Underline | Engenharia de vendas e presença digital" },
      { name: "description", content: "Landing pages de alta conversão, inteligência de satisfação e automação comercial para acelerar sua operação." },
      { property: "og:title", content: "Underline | Engenharia de vendas e presença digital" },
      { property: "og:description", content: "Transformamos atendimento e presença digital em receita para o seu negócio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div id="topo" className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:px-8 lg:px-10">
          <Brand compact />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
            {navItems.map((item) => <a key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{item.label}</a>)}
            <WhatsAppButton className="h-10 px-5 text-sm"><MessageCircle /> Falar no WhatsApp</WhatsAppButton>
          </nav>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen((value) => !value)} aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}>
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {mobileOpen && (
          <nav className="animate-fade-in border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Navegação móvel">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="border-b border-border py-3 font-semibold">{item.label}</a>)}
              <WhatsAppButton className="mt-4 w-full"><MessageCircle /> Falar no WhatsApp</WhatsAppButton>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="relative min-h-[760px] border-b border-border pt-20">
          <div className="hero-grid absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:px-10">
            <div className="animate-fade-in max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-3 py-2 text-xs font-bold text-primary"><span className="h-1.5 w-1.5 bg-primary" /> TECNOLOGIA & AUTOMAÇÃO COMERCIAL</div>
               <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl xl:text-7xl">Engenharia de Vendas, Atendimento e <span className="text-primary">Presença Digital.</span></h1>
               <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">Desenvolvimento de páginas de alta conversão, gestão de inteligência de satisfação e soluções automatizadas para escalar seu negócio.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton><MessageCircle /> Solicitar Diagnóstico Gratuito</WhatsAppButton>
                 <Button asChild variant="outline" size="lg" className="h-12 rounded-sm border-border bg-transparent px-6 font-bold hover:border-primary hover:bg-primary/5 hover:text-primary"><a href="#projetos">Ver Portfólio de Projetos <ArrowRight /></a></Button>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold text-muted-foreground">
                <span className="flex items-center gap-2"><Check className="text-primary" /> Estratégia orientada a ROI</span>
                <span className="flex items-center gap-2"><Check className="text-primary" /> Entrega sob medida</span>
                <span className="flex items-center gap-2"><Check className="text-primary" /> Suporte próximo</span>
              </div>
            </div>
            <div className="relative hidden lg:block" aria-label="Painel visual de crescimento comercial">
              <div className="absolute -inset-6 border border-primary/10" />
              <div className="relative border border-border bg-card p-3 shadow-2xl shadow-primary/5">
                <div className="flex items-center justify-between border-b border-border px-3 py-3"><div className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-muted" /><i className="h-2 w-2 rounded-full bg-muted" /><i className="h-2 w-2 rounded-full bg-primary" /></div><span className="text-[10px] font-bold text-muted-foreground">UNDERLINE / PERFORMANCE</span></div>
                <div className="grid grid-cols-[1fr_1.4fr] gap-3 p-3">
                  <div className="space-y-3"><div className="border border-border bg-background p-4"><MousePointerClick className="text-primary" /><small className="mt-8 block text-muted-foreground">Taxa de conversão</small><strong className="mt-1 block text-3xl">+42%</strong></div><div className="border border-border p-4"><small className="text-muted-foreground">Leads qualificados</small><strong className="mt-2 block text-2xl">1.284</strong><span className="mt-4 block h-1.5 w-full bg-muted"><i className="block h-full w-4/5 bg-primary" /></span></div></div>
                  <div className="flex flex-col border border-border bg-background p-4"><div className="flex items-center justify-between"><small className="font-bold">Receita potencial</small><BarChart3 className="text-primary" /></div><strong className="mt-5 text-3xl">R$ 86,4k</strong><div className="mt-auto flex h-40 items-end gap-2 pt-8">{[28,45,38,62,54,78,91,84].map((height, index) => <i key={index} className="flex-1 bg-primary/20 transition-colors hover:bg-primary" style={{ height: `${height}%` }} />)}</div><div className="mt-3 flex justify-between text-[9px] text-muted-foreground"><span>SEM 01</span><span>SEM 08</span></div></div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-10 flex items-center gap-4 border border-primary/40 bg-background p-4 shadow-xl"><span className="grid h-10 w-10 place-items-center bg-primary text-primary-foreground"><Target /></span><span><small className="block text-muted-foreground">Oportunidade detectada</small><b className="text-sm">Lead pronto para conversão</b></span></div>
            </div>
          </div>
        </section>

        <section id="servicos" className="scroll-mt-20 border-b border-border py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading eyebrow="NOSSAS SOLUÇÕES" title="Soluções Prontas para Escalar sua Operação" text="Tecnologia aplicada aos pontos que mais influenciam o crescimento do seu negócio." />
            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              <ServiceCard number="01" icon={<Code2 />} title="Desenvolvimento de Landing Pages de Alta Performance" text="Páginas responsivas, ultra-rápidas e desenhadas estrategicamente para converter visitantes em clientes qualificados via WhatsApp." tags={["UX estratégico", "Copy de conversão", "Alta performance"]} />
              <ServiceCard number="02" icon={<BarChart3 />} title="Pesquisa de Satisfação & Inteligência de Feedback" text="Monitore a percepção dos seus clientes em tempo real, identifique gargalos operacionais e aumente a retenção da sua base de clientes." tags={["Dados em tempo real", "Visão gerencial", "Mais retenção"]} />
            </div>
          </div>
        </section>

         <section id="projetos" className="scroll-mt-20 border-b border-border py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading eyebrow="TRABALHOS SELECIONADOS" title="Projetos Desenvolvidos & Casos de Sucesso" text="Páginas de alta conversão projetadas sob medida para acelerar vendas nos principais nichos de serviços." />
             <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
               {projects.map((project) => (
                 <article key={project.name} className="project-card group relative flex min-h-72 flex-col overflow-hidden border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 sm:p-7">
                   <div className="flex items-start justify-between gap-4"><span className="border border-primary/30 bg-primary/5 px-2.5 py-1 text-[10px] font-bold uppercase text-primary">{project.category}</span><span className="text-xs font-bold text-muted-foreground">{project.index}</span></div>
                   <div className="mt-10 text-5xl font-extrabold text-foreground/10 transition-colors group-hover:text-primary/20" aria-hidden="true">{project.initials}</div>
                   <h3 className="mt-auto pt-8 text-xl font-bold leading-snug">{project.name}</h3>
                   <a href={project.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center justify-between border-t border-border pt-5 text-xs font-bold text-muted-foreground transition-colors hover:text-primary" aria-label={`Acessar ${project.name} em nova aba`}>Acessar Projeto Live <ArrowUpRight className="h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

         <section id="lideranca" className="scroll-mt-20 border-b border-border bg-secondary/25 py-24 sm:py-32">
           <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
             <div className="lg:col-span-4"><div className="leadership-photo relative overflow-hidden rounded-lg border border-primary/30"><img src={caiquePhoto.url} alt="Retrato profissional de Caíque Vieira" className="aspect-square w-full object-cover grayscale" loading="lazy" /></div></div>
             <div className="lg:col-span-8 lg:pl-10"><span className="section-kicker">LIDERANÇA E ENGENHARIA DE PROCESSOS</span><h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">Caíque Vieira</h2><p className="mt-3 text-base font-bold leading-7 text-primary sm:text-lg">Founder & Lead Strategist na Underline | Gerente de Projetos & Especialista em CX/BI</p><p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">Mais de 10 anos liderando governança de projetos, estruturação de operações de alta complexidade em BPO e inteligência de dados. A Underline nasce da união entre estratégia operacional de grande porte, automação de processos e arquitetura de páginas focadas em geração de receita real.</p><div className="mt-7 flex flex-wrap gap-2">{["Gestão de Projetos", "Power BI & Dataverse", "Six Sigma Yellow Belt", "Automação B2B"].map((skill) => <span key={skill} className="border border-border bg-background px-3 py-2 text-xs font-semibold text-muted-foreground">{skill}</span>)}</div><Button asChild variant="outline" size="lg" className="mt-8 h-auto min-h-12 whitespace-normal rounded-sm border-primary/40 bg-transparent px-5 py-3 text-left font-bold hover:bg-primary hover:text-primary-foreground"><a href={professionalProfile.url} download="Historico-Profissional-Caique-Vieira.pdf"><Download /> Download do Histórico Profissional (PDF)</a></Button></div>
          </div>
        </section>

         <section id="roadmap" className="relative scroll-mt-20 border-b border-border py-24 sm:py-32">
           <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
             <SectionHeading eyebrow="ROADMAP UNDERLINE" title="O Futuro do Seu Atendimento e Vendas" text="Soluções em desenvolvimento exclusivo pela Underline." />
             <div className="mt-14 grid gap-5 lg:grid-cols-2">
               <RoadmapCard icon={<Bot />} title="Atendimento Inteligente no WhatsApp com CRM" text="Automação de conversas, distribuição de leads e sincronização direta com seu funil comercial." points={["Distribuição automática de leads", "Histórico centralizado no CRM", "Atendimento disponível 24/7"]} />
               <RoadmapCard icon={<CalendarCheck2 />} title="Agendamento Online Automatizado" text="Redução de faltas e agendamentos diretos pelo cliente, com autonomia total 24 horas por dia." points={["Lembretes automáticos", "Agenda sempre atualizada", "Menos no-show, mais receita"]} />
             </div>
             <div className="mt-10 text-center"><WhatsAppButton><Sparkles /> Garantir Condição VIP de Lançamento</WhatsAppButton></div>
           </div>
         </section>

        <section className="relative py-24 sm:py-32">
          <div className="hero-grid absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8"><span className="section-kicker">VAMOS CONVERSAR?</span><h2 className="mx-auto mt-6 max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">Pronto para transformar sua presença digital e <span className="text-primary">aumentar suas conversões?</span></h2><p className="mx-auto mt-6 max-w-2xl leading-7 text-muted-foreground">Converse com um especialista e descubra o próximo passo mais inteligente para a sua operação.</p><div className="mt-9"><WhatsAppButton><MessageCircle /> Falar com Especialista no WhatsApp</WhatsAppButton></div></div>
        </section>
      </main>

       <footer className="border-t border-border bg-card py-10"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10"><Brand compact /><nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">{navItems.map((item) => <a key={item.href} href={item.href} className="hover:text-primary">{item.label}</a>)}</nav><p className="max-w-sm text-xs leading-5 text-muted-foreground">© Underline. Todos os direitos reservados. Tecnologia e Estratégia de Vendas.</p></div></footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className="max-w-3xl"><span className="section-kicker">{eyebrow}</span><h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">{title}</h2><p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{text}</p></div>;
}

function ServiceCard({ number, icon, title, text, tags }: { number: string; icon: React.ReactNode; title: string; text: string; tags: string[] }) {
  return <article className="service-card group relative overflow-hidden border border-border bg-card p-6 transition-colors hover:border-primary/50 sm:p-9"><span className="absolute right-7 top-5 text-6xl font-extrabold text-foreground/[.035]">{number}</span><div className="grid h-12 w-12 place-items-center border border-primary/40 bg-primary/5 text-primary">{icon}</div><h3 className="mt-8 max-w-lg text-xl font-bold leading-snug sm:text-2xl">{title}</h3><p className="mt-4 max-w-xl leading-7 text-muted-foreground">{text}</p><div className="mt-8 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="border border-border px-3 py-1.5 text-[11px] font-semibold text-muted-foreground">{tag}</span>)}</div></article>;
}

function RoadmapCard({ icon, title, text, points }: { icon: React.ReactNode; title: string; text: string; points: string[] }) {
  return <article className="relative border border-border bg-background p-6 sm:p-9"><span className="absolute right-5 top-5 border border-primary/40 bg-primary/10 px-2.5 py-1 text-[10px] font-extrabold uppercase text-primary">Em breve / Lista VIP</span><div className="grid h-12 w-12 place-items-center bg-primary text-primary-foreground">{icon}</div><h3 className="mt-8 max-w-lg pr-8 text-xl font-bold leading-snug sm:text-2xl">{title}</h3><p className="mt-4 leading-7 text-muted-foreground">{text}</p><ul className="mt-7 space-y-3 border-t border-border pt-6">{points.map((point) => <li key={point} className="flex items-center gap-3 text-sm"><Check className="h-4 w-4 text-primary" />{point}</li>)}</ul></article>;
}

function Metric({ value, label }: { value: string; label: string }) {
  return <div className="border-r border-border px-3 last:border-r-0 sm:px-6"><strong className="block text-xl font-extrabold text-primary sm:text-3xl">{value}</strong><span className="mt-1 block text-[10px] leading-4 text-muted-foreground sm:text-xs">{label}</span></div>;
}