import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Trophy, Sparkles, Printer, Users, Zap, Star, ShieldCheck,
  CheckCircle2, Eye, Lock, Clock, Download, Scissors, BookOpen,
  CreditCard, ChevronDown, Heart,
} from "lucide-react";
import heroImg from "@/assets/hero-album.jpg";
import nostalgiaImg from "@/assets/nostalgia-family.jpg";
import packImg from "@/assets/pack-opening.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kit Completo +900 Figurinhas 2026 — Apenas R$19,90" },
      { name: "description", content: "Reviva a nostalgia! +900 figurinhas da Copa 2026 em alta qualidade, prontas para imprimir e colecionar. Apenas R$19,90 via PIX." },
      { property: "og:title", content: "⚽ Kit Completo com +900 Figurinhas 2026" },
      { property: "og:description", content: "Monte sua coleção 2026 e viva novamente a emoção das figurinhas da Copa." },
    ],
  }),
  component: Index,
});

const CHECKOUT_URL = "https://serverflow.dad/c/figurinhas-copa";

function CTAButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-cta-gradient text-[oklch(0.2_0.05_250)] font-extrabold rounded-2xl px-8 py-5 text-lg sm:text-xl shadow-cta hover:scale-[1.03] active:scale-[0.98] transition-transform animate-pulse-cta uppercase tracking-wide ${className}`}
    >
      {children}
    </a>
  );
}

function Index() {
  const [viewers, setViewers] = useState(127);
  useEffect(() => {
    const id = setInterval(() => {
      setViewers((v) => Math.max(80, Math.min(260, v + Math.floor(Math.random() * 7) - 3)));
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Urgency bar */}
      <div className="bg-[oklch(0.42_0.16_150)] text-white text-center text-xs sm:text-sm py-2 px-3 font-semibold">
        🔥 OFERTA DE LANÇAMENTO • Apenas <span className="text-[oklch(0.92_0.18_95)]">R$19,90</span> por tempo limitado
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-soft-gradient bg-field-pattern">
        <div className="max-w-6xl mx-auto px-5 pt-10 pb-14 sm:pt-16 sm:pb-20 grid lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-[oklch(0.92_0.18_95)] text-[oklch(0.25_0.08_60)] font-bold px-4 py-1.5 rounded-full text-sm">
              <Trophy size={16} /> COPA 2026 • EDIÇÃO COMPLETA
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-5 leading-[0.95] text-[oklch(0.25_0.08_150)]">
              ⚽ A emoção das<br />
              <span className="text-[oklch(0.45_0.18_255)]">figurinhas voltou!</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-foreground/80 max-w-xl mx-auto lg:mx-0">
              Monte sua coleção 2026 e viva novamente a nostalgia das figurinhas da Copa. <strong>+900 figurinhas</strong> em alta qualidade.
            </p>

            <div className="mt-7 flex flex-col items-center lg:items-start gap-3">
              <div className="flex items-baseline gap-3">
                <span className="text-sm text-muted-foreground line-through">R$59,90</span>
                <span className="font-display text-5xl text-[oklch(0.45_0.18_145)]">R$19,90</span>
                <span className="bg-[oklch(0.55_0.18_145)] text-white text-xs font-bold px-2 py-1 rounded-md">-66%</span>
              </div>
              <CTAButton>QUERO MINHAS FIGURINHAS ⚽</CTAButton>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                <span className="flex items-center gap-1"><Lock size={14} /> Compra segura</span>
                <span className="flex items-center gap-1"><Eye size={14} /> {viewers} pessoas vendo agora</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="absolute -inset-6 bg-hero-gradient opacity-20 blur-3xl rounded-full" />
            <img
              src={heroImg}
              alt="Álbum de figurinhas da Copa 2026 aberto com figurinhas espalhadas"
              width={1280}
              height={960}
              className="relative rounded-3xl shadow-card w-full object-cover"
            />
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-[oklch(0.92_0.18_95)] text-[oklch(0.25_0.08_60)] font-display text-xl sm:text-2xl rounded-full w-24 h-24 sm:w-32 sm:h-32 flex flex-col items-center justify-center shadow-cta animate-float">
              <span className="text-xs font-bold">SOMENTE</span>
              <span>R$19,90</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-[oklch(0.45_0.18_255)] text-white py-3 overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-marquee gap-10 font-bold text-sm sm:text-base">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="inline-flex gap-10">
              <span>⚽ +900 FIGURINHAS</span><span>🏆 TODAS AS SELEÇÕES</span>
              <span>⭐ ALTA QUALIDADE</span><span>📥 ENTREGA IMEDIATA</span>
              <span>💚 PIX • R$19,90</span><span>🖨️ IMPRIMA EM CASA</span>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <section className="py-16 sm:py-24 px-5 max-w-6xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl text-center text-[oklch(0.25_0.08_150)]">
          Tudo que você precisa <span className="text-[oklch(0.45_0.18_255)]">em um só kit</span>
        </h2>
        <p className="text-center text-muted-foreground mt-3 max-w-xl mx-auto">Pensado para colecionadores de todas as idades.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {[
            { icon: Star, t: "Alta qualidade", d: "Imagens nítidas e cores vibrantes em cada figurinha." },
            { icon: Sparkles, t: "Fácil de usar", d: "Baixe, imprima e comece a colar. Simples assim." },
            { icon: Users, t: "Diversão para a família", d: "Reúna filhos, pais e avós em volta do álbum." },
            { icon: Zap, t: "Arquivo instantâneo", d: "Receba na hora após o pagamento por PIX." },
            { icon: Printer, t: "Qualquer impressora", d: "Funciona com impressoras comuns de casa." },
            { icon: Trophy, t: "+900 figurinhas", d: "Todas as seleções da Copa 2026 inclusas." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-card rounded-2xl p-6 shadow-card border border-border hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-xl bg-hero-gradient flex items-center justify-center text-white mb-4">
                <Icon size={28} />
              </div>
              <h3 className="font-bold text-xl">{t}</h3>
              <p className="text-muted-foreground mt-1">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nostalgia */}
      <section className="bg-soft-gradient py-16 sm:py-24 px-5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <img src={nostalgiaImg} alt="Família colecionando figurinhas juntos" loading="lazy" width={1280} height={900} className="rounded-3xl shadow-card w-full" />
          <div>
            <span className="inline-flex items-center gap-2 text-[oklch(0.45_0.18_145)] font-bold uppercase text-sm"><Heart size={16}/> Nostalgia pura</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-3 text-[oklch(0.25_0.08_150)]">
              Lembra da emoção de abrir um pacotinho?
            </h2>
            <p className="text-lg text-foreground/80 mt-4">
              Aquele cheirinho, a ansiedade de ver qual jogador veio, a alegria de completar a página… <strong>Agora você pode viver isso novamente</strong> com sua família.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <img src={packImg} alt="Mãos abrindo pacote de figurinhas" loading="lazy" width={1100} height={800} className="rounded-xl col-span-3 shadow-card" />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-24 px-5 max-w-6xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl text-center text-[oklch(0.25_0.08_150)]">Como funciona</h2>
        <p className="text-center text-muted-foreground mt-3">Em apenas 5 passos você está colecionando.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-12">
          {[
            { icon: CreditCard, t: "Pague com PIX", d: "Pagamento rápido e seguro." },
            { icon: Download, t: "Acesso imediato", d: "Receba o arquivo na hora." },
            { icon: Printer, t: "Imprima", d: "Em qualquer impressora comum." },
            { icon: Scissors, t: "Recorte", d: "As figurinhas vêm prontinhas." },
            { icon: BookOpen, t: "Colecione", d: "Cole no seu álbum físico." },
          ].map(({ icon: Icon, t, d }, i) => (
            <div key={t} className="relative bg-card rounded-2xl p-6 text-center shadow-card border border-border">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-cta-gradient text-[oklch(0.2_0.05_250)] font-display text-xl flex items-center justify-center shadow-cta">{i+1}</div>
              <Icon size={36} className="mx-auto mt-3 text-[oklch(0.45_0.18_145)]" />
              <h3 className="font-bold mt-3">{t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 mx-auto max-w-2xl bg-[oklch(0.96_0.06_95)] border-2 border-[oklch(0.78_0.15_80)] rounded-2xl p-5 text-center">
          <p className="font-semibold text-[oklch(0.35_0.1_60)]">📌 Importante: O cliente precisa possuir um <u>álbum físico</u> para colar as figurinhas.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[oklch(0.97_0.03_145)] py-16 sm:py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl text-center text-[oklch(0.25_0.08_150)]">Quem comprou, amou ❤️</h2>
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {[
              { n: "Carlos M.", r: "Comprei para meu filho e acabei colecionando junto 😂 Voltei a ser criança!" },
              { n: "Renata S.", r: "Imprimiu lindo na minha impressora de casa. Vale cada centavo." },
              { n: "Jorge T.", r: "Nostalgia pura! Lembrei da Copa de 94 abrindo o álbum com meu pai." },
              { n: "Patrícia L.", r: "Recebi na hora após o PIX. Já estamos colando aqui em família." },
              { n: "Eduardo F.", r: "Qualidade incrível das figurinhas. Recomendo demais!" },
              { n: "Mariana A.", r: "Meus filhos largaram o celular pra colar figurinha. Milagre 🙏" },
            ].map((t) => (
              <div key={t.n} className="bg-card rounded-2xl p-6 shadow-card border border-border">
                <div className="flex text-[oklch(0.78_0.15_80)] mb-2">{Array.from({length:5}).map((_,i)=><Star key={i} size={18} fill="currentColor"/>)}</div>
                <p className="text-foreground/85 italic">"{t.r}"</p>
                <p className="font-bold mt-3">— {t.n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-5 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-cta-gradient shadow-cta mb-6">
          <ShieldCheck size={64} className="text-[oklch(0.2_0.05_250)]" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl text-[oklch(0.25_0.08_150)]">Garantia de 7 dias</h2>
        <p className="text-lg text-foreground/80 mt-4">Se você não gostar por qualquer motivo, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.</p>
      </section>

      {/* FAQ */}
      <section className="bg-soft-gradient py-16 sm:py-24 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl text-center text-[oklch(0.25_0.08_150)]">Perguntas frequentes</h2>
          <div className="mt-10 space-y-3">
            {[
              { q: "Precisa de impressora profissional?", a: "Não! Funciona perfeitamente em qualquer impressora comum de casa." },
              { q: "Recebo na hora?", a: "Sim! Após o pagamento via PIX, o arquivo é liberado automaticamente." },
              { q: "Posso imprimir quantas vezes quiser?", a: "Sim, o arquivo é seu para sempre. Imprima quantas vezes precisar." },
              { q: "Funciona no celular?", a: "Sim, você pode baixar e visualizar no celular. Para imprimir, conecte a uma impressora." },
              { q: "Preciso ter álbum físico?", a: "Sim, é necessário possuir um álbum físico para colar as figurinhas. O kit não inclui álbum." },
              { q: "O pagamento é por PIX?", a: "Sim, exclusivamente por PIX. Rápido, seguro e com entrega imediata." },
            ].map((f) => (
              <details key={f.q} className="group bg-card rounded-2xl border border-border shadow-card overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-5 font-semibold text-lg">
                  {f.q}
                  <ChevronDown className="group-open:rotate-180 transition-transform text-[oklch(0.45_0.18_145)]" />
                </summary>
                <div className="px-5 pb-5 text-foreground/75">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-hero-gradient text-white py-20 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-field-pattern opacity-30" />
        <div className="relative max-w-3xl mx-auto text-center">
          <Trophy size={56} className="mx-auto text-[oklch(0.92_0.18_95)] mb-4" />
          <h2 className="font-display text-4xl sm:text-6xl leading-tight">
            ⚽ A Copa passa rápido.<br />
            <span className="text-[oklch(0.92_0.18_95)]">As memórias ficam para sempre.</span>
          </h2>
          <p className="text-lg sm:text-xl mt-6 text-white/90">Comece sua coleção agora por apenas R$19,90.</p>
          <div className="mt-8 flex justify-center">
            <CTAButton className="text-xl sm:text-2xl px-10 py-6">QUERO COMEÇAR MINHA COLEÇÃO</CTAButton>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-5 text-sm text-white/80">
            <span className="flex items-center gap-1"><Lock size={14}/> Compra 100% segura</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={14}/> Garantia de 7 dias</span>
            <span className="flex items-center gap-1"><Clock size={14}/> Acesso imediato</span>
          </div>
        </div>
      </section>

      <footer className="py-8 px-5 text-center text-sm text-muted-foreground">
        © 2026 Kit Figurinhas Copa • Todos os direitos reservados
      </footer>
    </div>
  );
}
