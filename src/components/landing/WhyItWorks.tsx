import { Section } from "./Section";
import img01 from "@/assets/why-01-environment.jpg";
import img02 from "@/assets/why-02-mountains.jpg";
import img03 from "@/assets/why-03-movement.jpg";
import img04 from "@/assets/why-04-meditation.jpg";
import img05 from "@/assets/why-05-group.jpg";
import img06 from "@/assets/why-06-guide.jpg";

const reasons = [
  {
    n: "01",
    title: "Смена среды",
    text: "Вы выходите из привычного контекста — и психика впервые получает возможность услышать саму себя.",
    img: img01,
    tint: "from-card via-card/85 to-card/55",
  },
  {
    n: "02",
    title: "Горы и природа",
    text: "Масштаб ландшафта возвращает чувство пропорции: что важно на самом деле, а что просто шум.",
    img: img02,
    tint: "from-secondary via-secondary/85 to-secondary/55",
  },
  {
    n: "03",
    title: "Движение телом",
    text: "Маршрут, воздух, высота — тело включается в процесс, ум перестаёт быть единственным игроком.",
    img: img03,
    tint: "from-muted via-muted/85 to-muted/55",
  },
  {
    n: "04",
    title: "Практики и медитации",
    text: "Утренние и вечерние практики помогают замедлиться, прожить день и собрать внутренний опыт.",
    img: img04,
    tint: "from-accent/25 via-card/90 to-card/60",
  },
  {
    n: "05",
    title: "Живое групповое поле",
    text: "Камерная группа — это не толпа. Это среда, где честные разговоры случаются естественно.",
    img: img05,
    tint: "from-secondary/80 via-card/85 to-card/55",
  },
  {
    n: "06",
    title: "Сопровождение проводника",
    text: "Андрей сопровождает группу: брифинги, квестовая логика, индивидуальное внимание к запросу каждого.",
    img: img06,
    tint: "from-muted/70 via-secondary/70 to-card/60",
  },
];

export function WhyItWorks() {
  return (
    <Section
      id="why"
      eyebrow="Почему это работает"
      title={<>Шесть слоёв, которые работают вместе</>}
      intro="Эффект рождается не из одной техники, а из того, как сочетаются среда, тело, практика и присутствие проводника."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r) => (
          <div
            key={r.n}
            className="group relative isolate overflow-hidden bg-card p-8 transition-colors hover:bg-secondary/40"
          >
            <img
              src={r.img}
              alt=""
              aria-hidden="true"
              loading="lazy"
              width={1024}
              height={768}
              className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-30 mix-blend-luminosity transition-opacity duration-700 group-hover:opacity-40"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-card via-card/85 to-card/55"
            />
            <div className="relative font-display text-3xl text-accent">{r.n}</div>
            <h3 className="relative mt-4 font-display text-2xl text-foreground">{r.title}</h3>
            <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
