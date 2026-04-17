import { useState } from "react";
import { Section } from "./Section";

const faqs = [
  {
    q: "Что входит в стоимость?",
    a: "Проживание в благоустроенном гостевом доме, питание на маршруте, аренда внедорожного транспорта с местным гидом, ежедневные практики и медитации, экскурсионные и входные билеты, при необходимости — снаряжение.",
  },
  {
    q: "Нужен ли специальный опыт?",
    a: "Нет. Маршрут проходим для людей со средним уровнем физической формы. Сложные участки преодолеваются на внедорожниках. Главное — желание включиться в процесс.",
  },
  {
    q: "Как добраться?",
    a: "Сбор группы — Кисловодск, 6 июля в 09:00. Дорога до Кисловодска и обратно организуется участником самостоятельно. При необходимости — поможем с рекомендациями.",
  },
  {
    q: "Можно ли ехать одному / одной?",
    a: "Да, большинство участников приезжают одни. Камерная группа быстро становится поддерживающей средой — это часть формата.",
  },
  {
    q: "Где будем жить?",
    a: "Размещение в благоустроенном гостевом доме в горной деревне Былым: тёплые комнаты, удобства, домашняя атмосфера.",
  },
  {
    q: "Какое питание?",
    a: "Полноценное питание в течение дня, организовано в рамках маршрута и в гостевом доме. Особенности рациона — обсуждаются индивидуально на этапе анкеты.",
  },
  {
    q: "Какой уровень физической нагрузки?",
    a: "Средний. Маршрут построен на сочетании джип-выездов, прогулок и остановок на природных точках силы. Не требует подготовки альпиниста.",
  },
  {
    q: "Есть ли противопоказания?",
    a: "Участие возможно при отсутствии психических расстройств. Перед поездкой подписывается согласие участника. Если есть медицинские особенности — обсудим заранее.",
  },
  {
    q: "Как проходит бронирование?",
    a: "Заполняете анкету участника. Согласовываем детали в личном диалоге. Вносите предоплату 25% — место за вами.",
  },
  {
    q: "Как оплатить?",
    a: "Реквизиты для предоплаты направляются индивидуально после заполнения анкеты. Полная оплата — до начала тура.",
  },
  {
    q: "Что брать с собой?",
    a: "Подробный список снаряжения и одежды отправляется участникам после бронирования. Ничего лишнего — только то, что действительно понадобится в горах.",
  },
  {
    q: "Что если погода изменится?",
    a: "Программа гибкая. При необходимости маршрут адаптируется — безопасность и качество опыта важнее жёсткого графика.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section
      id="faq"
      eyebrow="Вопросы"
      title={<>Что важно знать</>}
      className="bg-secondary/40"
    >
      <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card shadow-soft">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-8 md:py-6"
                aria-expanded={isOpen}
              >
                <span className="font-display text-lg text-foreground md:text-xl">{f.q}</span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-transform ${
                    isOpen ? "rotate-45 bg-accent text-accent-foreground border-accent" : ""
                  }`}
                  aria-hidden
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 1v12M1 7h12" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-500 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-base leading-relaxed text-muted-foreground text-pretty md:px-8 md:pb-8">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
