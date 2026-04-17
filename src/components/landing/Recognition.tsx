import { Section } from "./Section";

const items = [
  "Кажется, что внешне всё хорошо, а внутри тихо и пусто.",
  "Достижения уже не радуют так, как раньше — будто работают по инерции.",
  "Сложно вспомнить, когда последний раз слышал свои настоящие желания.",
  "Хочется остановиться, но непонятно — где и как именно.",
  "Внутри ощущение, что живёшь не свою жизнь, но менять страшно.",
  "Усталость не уходит после отпуска — это уже не про сон.",
];

export function Recognition() {
  return (
    <Section
      id="recognition"
      eyebrow="Если вы здесь"
      title={<>Возможно, что-то из этого вам знакомо</>}
      intro="Мы не обещаем чудес и не давим срочностью. Просто называем то, что часто остаётся без слов."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((text, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elev md:p-8"
          >
            <div className="absolute left-0 top-0 h-full w-[2px] bg-accent/0 transition-colors group-hover:bg-accent" />
            <p className="text-lg leading-relaxed text-foreground/90 text-pretty">
              {text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
