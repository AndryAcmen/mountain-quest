import { Section } from "./Section";

const fits = [
  "Чувствуете, что устали от шума и хотите по-настоящему остановиться.",
  "Прошли определённый путь — внешне всё в порядке, а внутри хочется ясности.",
  "Ищете не отдых, а опыт, после которого что-то меняется.",
  "Готовы выйти из привычного контекста, чтобы услышать себя.",
  "Хотите движения телом, природы и тишины — не SPA и не клуба.",
  "Доверяете камерному формату и не ищете массовых мероприятий.",
];

export function ForWhom() {
  return (
    <Section
      eyebrow="Кому подойдёт"
      title={<>Этот опыт может быть для вас, если вы сейчас…</>}
    >
      <ul className="grid gap-3 md:grid-cols-2">
        {fits.map((f) => (
          <li
            key={f}
            className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6"
          >
            <span className="mt-2 h-1.5 w-6 shrink-0 rounded-full bg-accent" />
            <span className="text-base leading-relaxed text-foreground/90 text-pretty">{f}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
