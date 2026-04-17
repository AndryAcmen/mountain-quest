import { Section } from "./Section";
import jeepImg from "@/assets/route-jeep-new.jpg";
import lakeImg from "@/assets/lake-glacier-new.jpg";
import waterfallImg from "@/assets/waterfall.jpg";
import stoneImg from "@/assets/stone-garden.jpg";

import { contacts } from "@/lib/contacts";

const days = [
  {
    d: "День 1",
    title: "Сбор. Кисловодск → горы",
    text: "Знакомство группы в Кисловодске в 09:00. Переезд в горную деревню Былым. Размещение в гостевом доме. Установочный брифинг и первая вечерняя практика.",
    img: "https://i.pinimg.com/736x/ce/db/22/cedb2218e6047f74419615c141f668de.jpg",
  },
  {
    d: "День 2",
    title: "Перевалы и джип-маршрут",
    text: "Выезд на внедорожниках с местным гидом. Дорога к перевалам, остановки на точках силы. Утренняя медитация, вечерняя реинтеграция дня.",
    img: jeepImg,
  },
  {
    d: "День 3",
    title: "Карстовые озёра и ледник Шаурту",
    text: "Маршрут к озёрам и языку ледника. Работа с личным запросом среди стихии воды и льда. Тишина и масштаб как часть практики.",
    img: lakeImg,
  },
  {
    d: "День 4",
    title: "Уллу-Тау, водопады, сад камней",
    text: "Один из ключевых дней маршрута. Места силы Приэльбрусья. Глубокая работа квеста «Белый Путь». Вечерний разбор пройденного.",
    img: waterfallImg,
  },
  {
    d: "День 5",
    title: "Сборка опыта и возвращение",
    text: "Утренняя практика. Финальная реинтеграция: что взять с собой, как удержать внутренние сдвиги. Возвращение в Кисловодск.",
    img: stoneImg,
  },
];

export function Program() {
  return (
    <Section
      id="program"
      eyebrow="Программа"
      title={<>Пять дней маршрута</>}
      intro="Каждый день — новая природная среда, своя практика и свой шаг внутри. Полная программа доступна по ссылке."
    >
      <div className="space-y-12 md:space-y-16">
        {days.map((day, i) => (
          <article
            key={day.d}
            className={`grid items-center gap-8 md:gap-12 lg:grid-cols-2 ${
              i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="overflow-hidden rounded-3xl shadow-elev">
              <img
                src={day.img}
                alt={day.title}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-accent">{day.d}</div>
              <h3 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">{day.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
                {day.text}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-4 border-t border-border pt-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          Программа может корректироваться в зависимости от погоды и состояния группы — безопасность и глубина важнее графика.
        </p>
        <a
          href={contacts.PROGRAM_URL}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          Открыть полную программу →
        </a>
      </div>
    </Section>
  );
}
