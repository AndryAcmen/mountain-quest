import { contacts } from "@/lib/contacts";
import logo from "@/assets/logo-bp.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background pb-24 pt-16 md:pb-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Белый Путь" className="h-10 w-10 shrink-0" />
              <div className="font-display text-2xl tracking-tight text-foreground">Поход к Счастью</div>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">Горный Феникс · 6–10 июля 2026 · Приэльбрусье</div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Центр интуитивного развития «Белый Путь».
              <br />
              Камерные трансформационные эко-туры в Приэльбрусье — маршрут, практика, тишина, проводник.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Контакты</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={contacts.TG_URL} target="_blank" rel="noopener" className="text-foreground hover:text-accent">
                  Telegram {contacts.TG_HANDLE}
                </a>
              </li>
              <li>
                <a href={contacts.VK_URL} target="_blank" rel="noopener" className="text-foreground hover:text-accent">
                  VK
                </a>
              </li>
              <li>
                <a href={`mailto:${contacts.EMAIL}`} className="text-foreground hover:text-accent">
                  {contacts.EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${contacts.PHONE_HREF}`} className="text-foreground hover:text-accent">
                  {contacts.PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Документы</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={contacts.FORM_URL} target="_blank" rel="noopener" className="text-foreground hover:text-accent">
                  Анкета участника
                </a>
              </li>
              <li>
                <a href={contacts.PROGRAM_URL} target="_blank" rel="noopener" className="text-foreground hover:text-accent">
                  Программа тура
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent">
                  Публичная оферта
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Центр интуитивного развития «Белый Путь»</div>
          <div>Сделано с вниманием к деталям</div>
        </div>
      </div>
    </footer>
  );
}
