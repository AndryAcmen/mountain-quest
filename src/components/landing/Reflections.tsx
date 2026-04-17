import { Section } from "./Section";

const videos = [
  { id: "rbTkkbQoorw", url: "https://youtu.be/rbTkkbQoorw" },
  { id: "TCbaAL2biiM", url: "https://youtu.be/TCbaAL2biiM" },
  { id: "PH6TcmMtZKo", url: "https://youtu.be/PH6TcmMtZKo" },
];

const notes = [
  "Внутренняя перезагрузка — ощущение, что наконец выдохнул.",
  "Новый, более ясный взгляд на собственную жизнь и приоритеты.",
  "Личные сдвиги, которые продолжают работать после возвращения домой.",
];

export function Reflections() {
  return (
    <Section
      eyebrow="Из прошлых поездок"
      title={<>Что отмечали участники</>}
      intro="Мы не публикуем выдуманные отзывы. Это обобщённые наблюдения от людей, проходивших маршрут раньше — и материалы прошлых туров."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {notes.map((n, i) => (
          <div key={i} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <div className="font-display text-4xl text-accent">“</div>
            <p className="mt-3 text-base leading-relaxed text-foreground/90 text-pretty">{n}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <div className="mb-5 text-xs uppercase tracking-[0.28em] text-muted-foreground">
          Видео-отчёты прошлых туров
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {videos.map((v) => (
            <a
              key={v.id}
              href={v.url}
              target="_blank"
              rel="noopener"
              className="group relative block overflow-hidden rounded-2xl border border-border shadow-soft"
            >
              <img
                src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                alt="Видео-отчёт прошлого тура"
                loading="lazy"
                className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-copper">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6 4l11 6-11 6V4z" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
