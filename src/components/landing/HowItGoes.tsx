import { Section } from "./Section";

const flow = [
  { t: "Утро", d: "Подъём без спешки. Утренняя практика или медитация, лёгкий завтрак, брифинг дня." },
  { t: "Маршрут", d: "Выезд на внедорожниках с местным гидом. Остановки на ключевых точках, короткие практики на природе." },
  { t: "Питание", d: "Полноценное питание в течение дня, организовано в рамках маршрута и в гостевом доме." },
  { t: "Возвращение", d: "Возвращение на базу в Былым. Время для отдыха, тишины и личного восстановления." },
  { t: "Вечер", d: "Ужин и вечерняя реинтеграция: разбор дня, работа с запросом, групповая практика." },
  { t: "Ночь", d: "Размещение в благоустроенном гостевом доме. Тёплые комнаты, тишина гор." },
];

export function HowItGoes() {
  return (
    <Section
      id="flow"
      eyebrow="Ритм дней"
      title={<>Как проходит участие</>}
      intro="Маршрут продуман так, чтобы вы не отвлекались на бытовые задачи. Можно полностью погрузиться в опыт."
      className="bg-secondary/40"
    >
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 hidden w-px bg-border md:block md:left-1/2" />
        <div className="grid gap-6 md:grid-cols-2 md:gap-x-16">
          {flow.map((f, i) => (
            <div
              key={f.t}
              className={`relative rounded-2xl border border-border bg-card p-7 shadow-soft md:p-8 ${
                i % 2 === 0 ? "md:mr-6" : "md:ml-6 md:mt-12"
              }`}
            >
              <div className="absolute -left-1.5 top-9 hidden h-3 w-3 rounded-full bg-accent md:block" />
              <div className="text-xs uppercase tracking-[0.28em] text-accent">{f.t}</div>
              <p className="mt-3 text-base text-foreground/90 leading-relaxed text-pretty">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
