import { Section } from "./Section";
import guideImg from "@/assets/guide.jpg";

const roles = [
  "Организатор и вдохновитель проекта",
  "Ведущий игрового трансформационного квеста «Белый Путь»",
  "Мастер игровых трансформационных технологий",
  "Процессор духовной интеграционики и МПИ",
  "Нумеролог, таролог",
];

export function Guide() {
  return (
    <Section id="guide" className="bg-primary text-primary-foreground">
      <div className="grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <div className="overflow-hidden rounded-3xl shadow-elev">
          <img
            src={guideImg}
            alt="Андрей Акмен — проводник тура"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>

        <div>
          <div className="mb-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Проводник
          </div>
          <h2 className="font-display text-4xl leading-[1.1] tracking-tight text-primary-foreground text-balance md:text-5xl">
            Андрей Акмен
          </h2>
          <p className="mt-5 text-base leading-relaxed text-primary-foreground/80 text-pretty md:text-lg">
            Сопровождает группу на всём маршруте: ведёт брифинги, держит квестовую логику пути,
            работает с личным запросом каждого участника. Спокойное, внимательное присутствие —
            не наставник сверху, а проводник рядом.
          </p>

          <ul className="mt-8 space-y-2">
            {roles.map((r) => (
              <li key={r} className="flex items-start gap-3 text-sm text-primary-foreground/85 md:text-base">
                <span className="mt-2 h-px w-6 shrink-0 bg-accent" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
