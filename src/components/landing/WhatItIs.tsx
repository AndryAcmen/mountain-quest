import { Section } from "./Section";
import meditationImg from "@/assets/meditation.jpg";

export function WhatItIs() {
  return (
    <Section id="about" className="bg-secondary/40">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative overflow-hidden rounded-3xl shadow-elev">
          <img
            src={meditationImg}
            alt="Утренняя практика в горах"
            loading="lazy"
            width={1400}
            height={1600}
            className="aspect-[4/5] w-full object-cover"
          />
        </div>

        <div>
          <div className="mb-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Что это
          </div>
          <h2 className="font-display text-4xl leading-[1.1] tracking-tight text-balance md:text-5xl">
            Маршрут, в котором меняется не место — а вы внутри него
          </h2>
          <div className="mt-6 space-y-4 text-base text-foreground/85 text-pretty md:text-lg">
            <p>
              «Поход к Счастью» — пятидневный игровой трансформационный VIP эко-тур по Приэльбрусью.
              Это не туристическая поездка и не классический тренинг.
            </p>
            <p>
              Маршрут построен как квест: каждый день — новая природная точка силы, новая практика
              и новый шаг внутрь личного запроса. Вы движетесь телом по горам и одновременно — по
              своей внутренней географии.
            </p>
            <p>
              Камерный формат — от 4 до 8 человек. Сопровождение проводника. Время, в котором
              можно наконец услышать себя без внешнего шума.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              ["Маршрут", "Джип-выезды, перевалы, ледник, озёра"],
              ["Практики", "Медитации, реинтеграции, работа с запросом"],
              ["Формат", "Квестовая логика, личное сопровождение"],
              ["Среда", "Горы, тишина, живое групповое поле"],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-border pt-3">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{k}</div>
                <div className="mt-1 text-sm text-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
