import { contacts } from "@/lib/contacts";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div className="mx-3 mb-3 rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-elev">
        <div className="flex gap-2 p-2">
          <a
            href={contacts.FORM_URL}
            target="_blank"
            rel="noopener"
            className="flex-1 inline-flex items-center justify-center rounded-xl bg-accent px-3 py-3 text-sm font-medium text-accent-foreground"
          >
            Анкета
          </a>
          <a
            href={contacts.BOT_URL}
            target="_blank"
            rel="noopener"
            className="flex-1 inline-flex items-center justify-center rounded-xl bg-foreground px-3 py-3 text-sm font-medium text-background"
          >
            Бот
          </a>
          <a
            href={contacts.TG_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center rounded-xl border border-border px-3 py-3 text-sm font-medium text-foreground"
          >
            TG
          </a>
        </div>
      </div>
    </div>
  );
}
