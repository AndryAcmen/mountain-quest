import { Section } from "./Section";

const outcomes = [
  { t: "Ясность", d: "Когда из головы уходит шум, появляется понимание — что действительно ваше, а что нет." },
  { t: "Энергия", d: "Тело наполняется горным воздухом и движением, возвращается ощущение жизненной силы." },
  { t: "Замедление", d: "Возможность наконец выдохнуть и почувствовать, что не нужно никуда бежать." },
  { t: "Внутренний фокус", d: "Контакт с тем, что действительно важно — без внешних голосов и оценок." },
  { t: "Новый взгляд", d: "Привычные ситуации начинают видеться иначе. Появляются непривычные ответы." },
  { t: "Опора", d: "Ощущение, что внутри есть на что опереться — независимо от внешних обстоятельств." },
];

export function Outcomes() {
  return (
    <Section
      id="outcomes"
      eyebrow="Чего обычно ждут участники"
      title={<>Что часто становится результатом</>}
      intro="Это не гарантия и не обещание — это то, что чаще всего отмечают для себя люди, прошедшие маршрут. Глубина изменений зависит от вашей готовности и запроса."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {outcomes.map((o) => (
          <div
            key={o.t}
            className="rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elev"
          >
            <h3 className="font-display text-2xl text-foreground">{o.t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
