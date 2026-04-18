import heroImg from "@/assets/hero-mountains.jpg";
import { contacts } from "@/lib/contacts";

export function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden">
      <img
        src={heroImg}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-graphite/70" style={{ backgroundColor: "oklch(0.18 0.012 260 / 0.78)" }} />
      <div className="relative z-10 mx-auto max-w-4xl px-5 py-28 text-center md:px-8 md:py-36">
        <div className="mb-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/70">
          <span className="h-px w-8 bg-white/50" />
          6–10 июля 2026 · Приэльбрусье
        </div>
        <h2 className="font-display text-5xl leading-[1.05] tracking-tight text-white text-balance md:text-6xl lg:text-7xl">
          Хватит откладывать жизнь на потом
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/85 text-pretty md:text-lg">
          Если внутри уже давно звучит «пора» — возможно, это и есть тот шаг.
          Без давления и срочности. Просто оставьте заявку — спокойно поговорим.
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={contacts.FORM_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-medium text-accent-foreground shadow-copper transition-transform hover:-translate-y-0.5"
          >
            Заполнить анкету
          </a>
          <a
            href={contacts.BOT_URL}
            target="_blank"
            rel="noopener"
            className="btn-bot-on-dark inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-medium"
          >
            Спросить бота
          </a>
          <a
            href={contacts.TG_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-8 py-4 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            Написать в Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
