import { useEffect, useState } from "react";
import { contacts } from "@/lib/contacts";
import logo from "@/assets/logo-bp.png";

const navItems = [
  { href: "#about", label: "О формате" },
  { href: "#why", label: "Почему работает" },
  { href: "#program", label: "Программа" },
  { href: "#guide", label: "Проводник" },
  { href: "#price", label: "Стоимость" },
  { href: "#faq", label: "Вопросы" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:py-5">
        <a href="#top" className="flex items-center gap-2.5 font-display text-lg tracking-tight md:text-xl whitespace-nowrap">
          <img src={logo} alt="Белый Путь" className="h-8 w-8 md:h-9 md:w-9 shrink-0" />
          <span className={scrolled ? "text-foreground" : "text-white"}>Поход к Счастью</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex whitespace-nowrap">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/75 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={contacts.TG_URL}
            target="_blank"
            rel="noopener"
            className={`text-sm transition-colors ${
              scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
            }`}
          >
            Telegram
          </a>
          <a
            href={contacts.BOT_URL}
            target="_blank"
            rel="noopener"
            className={`inline-flex items-center justify-center rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
              scrolled
                ? "border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
                : "border-white/40 text-white hover:bg-white/10"
            }`}
          >
            Спросить бота
          </a>
          <a
            href={contacts.FORM_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground shadow-copper transition-transform hover:-translate-y-0.5"
          >
            Заполнить анкету
          </a>
        </div>

        <button
          aria-label="Меню"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border ${
            scrolled ? "border-border text-foreground" : "border-white/30 text-white"
          }`}
        >
          <span className="block h-0.5 w-5 bg-current relative before:absolute before:-top-1.5 before:left-0 before:h-0.5 before:w-5 before:bg-current after:absolute after:top-1.5 after:left-0 after:h-0.5 after:w-5 after:bg-current" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="flex flex-col px-5 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground border-b border-border/60 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href={contacts.BOT_URL}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full border border-foreground/20 px-5 py-3 text-sm font-medium text-foreground"
            >
              Спросить бота
            </a>
            <a
              href={contacts.FORM_URL}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground"
            >
              Заполнить анкету
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
