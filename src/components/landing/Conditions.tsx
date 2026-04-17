import { Section } from "./Section";

const included = [
  "Проживание в благоустроенном гостевом доме",
  "Полноценное питание на маршруте",
  "Аренда внедорожного автотранспорта с местным гидом",
  "Ежедневные практики, медитации и реинтеграции",
  "Экскурсионные и входные билеты по маршруту",
  "Необходимое снаряжение, если потребуется",
];

const notIncluded = [
  "Дорога до Кисловодска и обратно",
  "Гостиница или хостел до начала тура",
  "Термальные источники по желанию",
  "Такси",
  "Питание вне маршрута",
  "Дополнительные экскурсии и услуги вне программы",
  "Индивидуальные личные проработки",
];

export function Conditions() {
  return (
    <Section
      id="conditions"
      eyebrow="Условия"
      title={<>Что входит и что нет</>}
      intro="Прозрачно и без сюрпризов — чтобы вы могли спокойно принять решение."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-soft md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-accent">Входит в стоимость</div>
          <ul className="mt-6 space-y-4">
            {included.map((i) => (
              <li key={i} className="flex items-start gap-3 text-base text-foreground/90">
                <svg className="mt-1 h-5 w-5 shrink-0 text-accent" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l4 4 6-8" />
                </svg>
                {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-soft md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Не входит</div>
          <ul className="mt-6 space-y-4">
            {notIncluded.map((i) => (
              <li key={i} className="flex items-start gap-3 text-base text-muted-foreground">
                <svg className="mt-1 h-5 w-5 shrink-0 text-muted-foreground/60" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" d="M6 6l8 8M14 6l-8 8" />
                </svg>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-border bg-secondary/40 p-7">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Бронирование</div>
          <div className="mt-2 font-display text-2xl text-foreground">Предоплата 25%</div>
        </div>
        <div className="rounded-2xl border border-border bg-secondary/40 p-7">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Группа</div>
          <div className="mt-2 font-display text-2xl text-foreground">4–8 участников</div>
        </div>
        <div className="rounded-2xl border border-border bg-secondary/40 p-7">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Сбор</div>
          <div className="mt-2 font-display text-2xl text-foreground">Кисловодск, 09:00</div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card p-7 text-sm leading-relaxed text-muted-foreground md:p-8">
        <span className="font-medium text-foreground">Важно. </span>
        Участие в туре возможно при отсутствии психических расстройств. Перед поездкой подписывается
        согласие участника. Это вопрос вашей безопасности и качества опыта для всей группы — мы
        относимся к этому уважительно и внимательно.
      </div>
    </Section>
  );
}
