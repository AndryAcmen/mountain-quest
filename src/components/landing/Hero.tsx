import heroImg from "@/assets/hero-mountains.jpg";
import { contacts } from "@/lib/contacts";

const trust = [
  "5 дней",
  "Приэльбрусье",
  "Проживание и питание",
  "Камерно: 4–8 мест",
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Рассвет в горах Приэльбрусья"
        className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-20 pt-32 md:px-8 md:pb-28 lg:pb-32">
        <div className="max-w-3xl animate-rise">
          <div className="mb-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/75">
            <span className="h-px w-8 bg-white/50" />
            6–10 июля 2026 · Приэльбрусье
          </div>

          <h1 className="font-display text-[2.5rem] leading-[1.05] tracking-tight text-white text-balance md:text-6xl lg:text-[5rem]">
            Туда, где слышно себя
          </h1>

          <p className="mt-6 max-w-xl text-base text-white/85 text-pretty md:text-lg">
            5 дней в горах Кавказа — маршрут, тишина, практики и квестовый формат внутренней работы.
            Не туризм и не тренинг. Глубокий опыт возвращения к себе для тех, кто давно собирался остановиться.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={contacts.FORM_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-sm font-medium text-accent-foreground shadow-copper transition-transform hover:-translate-y-0.5"
            >
              Заполнить анкету
            </a>
            <a
              href={contacts.PROGRAM_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-7 py-4 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Смотреть программу
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-white/15 pt-6 sm:grid-cols-4">
            {trust.map((t) => (
              <div key={t} className="text-sm text-white/80">
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
