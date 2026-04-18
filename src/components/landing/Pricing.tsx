import { Section } from "./Section";
import { contacts } from "@/lib/contacts";

export function Pricing() {
  return (
    <Section
      id="price"
      eyebrow="Стоимость"
      title={<>Камерный формат — ограниченное число мест</>}
      intro="Ранняя цена действует до 6 июня 2026. После — стандартная стоимость."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl border border-accent bg-card p-8 shadow-elev md:p-10">
          <div className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent-foreground">
            До 6 июня
          </div>
          <div className="text-xs uppercase tracking-[0.28em] text-accent">Ранняя стоимость</div>
          <div className="mt-6 flex items-baseline gap-2">
            <span className="font-display text-6xl tracking-tight text-foreground md:text-7xl">99 000</span>
            <span className="text-lg text-muted-foreground">₽</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Действует при бронировании места до 6 июня 2026 года.
          </p>
          <div className="mt-8 hairline pt-6 text-sm text-muted-foreground">
            Бронирование — предоплата 25%
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Стандартная стоимость</div>
          <div className="mt-6 flex items-baseline gap-2">
            <span className="font-display text-6xl tracking-tight text-foreground md:text-7xl">119 000</span>
            <span className="text-lg text-muted-foreground">₽</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            После 6 июня 2026 года — при наличии свободных мест.
          </p>
          <div className="mt-8 hairline pt-6 text-sm text-muted-foreground">
            Группа: от 4 до 8 человек
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
        <a
          href={contacts.FORM_URL}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-sm font-medium text-accent-foreground shadow-copper transition-transform hover:-translate-y-0.5"
        >
          Заполнить анкету
        </a>
        <a
          href={contacts.BOT_URL}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          Спросить бота
        </a>
        <a
          href={contacts.TG_URL}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-7 py-4 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          Написать в Telegram
        </a>
        <button
          type="button"
          disabled
          className="inline-flex cursor-not-allowed items-center justify-center rounded-full border border-dashed border-border px-7 py-4 text-sm font-medium text-muted-foreground"
          title="Кнопка оплаты появится после согласования бронирования"
        >
          Оплатить бронирование
        </button>
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Реквизиты для предоплаты направляются индивидуально после заполнения анкеты.
      </p>
    </Section>
  );
}
