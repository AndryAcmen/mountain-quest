import { Section } from "./Section";

const reasons = [
  {
    n: "01",
    title: "Смена среды",
    text: "Вы выходите из привычного контекста — и психика впервые получает возможность услышать саму себя.",
  },
  {
    n: "02",
    title: "Горы и природа",
    text: "Масштаб ландшафта возвращает чувство пропорции: что важно на самом деле, а что просто шум.",
  },
  {
    n: "03",
    title: "Движение телом",
    text: "Маршрут, воздух, высота — тело включается в процесс, ум перестаёт быть единственным игроком.",
  },
  {
    n: "04",
    title: "Практики и медитации",
    text: "Утренние и вечерние практики помогают замедлиться, прожить день и собрать внутренний опыт.",
  },
  {
    n: "05",
    title: "Живое групповое поле",
    text: "Камерная группа — это не толпа. Это среда, где честные разговоры случаются естественно.",
  },
  {
    n: "06",
    title: "Сопровождение проводника",
    text: "Андрей сопровождает группу: брифинги, квестовая логика, индивидуальное внимание к запросу каждого.",
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
          <div key={r.n} className="bg-card p-8 transition-colors hover:bg-secondary/40">
            <div className="font-display text-3xl text-accent">{r.n}</div>
            <h3 className="mt-4 font-display text-2xl text-foreground">{r.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
