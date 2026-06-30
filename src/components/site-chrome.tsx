import { Link } from "@tanstack/react-router";
import { BookOpen, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

const TRY_DEMO_HREF = "/#try-demo";

export function Logo({ size = 36 }: { size?: number }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <div
        className="relative grid place-items-center rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
        style={{ width: size, height: size }}
      >
        <BookOpen className="h-1/2 w-1/2" strokeWidth={2.4} />
        <span className="absolute -bottom-1 -right-1 grid h-4 w-4 place-items-center rounded-full border-2 border-background bg-accent text-[10px] font-bold text-accent-foreground">
          ·
        </span>
      </div>
      <span className="text-lg font-bold tracking-tight">PlaceEcho</span>
    </Link>
  );
}

export function Header() {
  const { locale, setLocale } = useLocale();
  const isHebrew = locale === "he";
  const nav = [
    { to: "/", label: isHebrew ? "בית" : "Home" },
    { to: "/about", label: isHebrew ? "אודות" : "About" },
    { to: "/features", label: isHebrew ? "יכולות" : "Features" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: isHebrew ? "צור קשר" : "Contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm font-semibold text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full border border-border bg-card p-1 shadow-[var(--shadow-soft)]">
            {(
              [
                { value: "en", label: "EN" },
                { value: "he", label: "עברית" },
              ] as const
            ).map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setLocale(option.value)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors sm:text-sm",
                  locale === option.value
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:text-foreground",
                )}
                aria-pressed={locale === option.value}
              >
                {option.label}
              </button>
            ))}
          </div>
          <Button asChild className="rounded-full">
            <a href={TRY_DEMO_HREF}>{isHebrew ? "נסו את הדמו" : "Try Demo"}</a>
          </Button>
          <button
            className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
            aria-label={isHebrew ? "פתחו תפריט" : "Open menu"}
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  const { locale } = useLocale();
  const isHebrew = locale === "he";
  const cols: { h: string; links: { label: string; to: string }[] }[] = [
    {
      h: isHebrew ? "מוצר" : "Product",
      links: [
        { label: isHebrew ? "יכולות" : "Features", to: "/features" },
        { label: isHebrew ? "איך זה עובד" : "How It Works", to: "/features" },
        { label: isHebrew ? "נסו את הדמו" : "Try Demo", to: TRY_DEMO_HREF },
      ],
    },
    {
      h: isHebrew ? "חברה" : "Company",
      links: [
        { label: isHebrew ? "אודות" : "About", to: "/about" },
        { label: isHebrew ? "צור קשר" : "Contact", to: "/contact" },
        { label: isHebrew ? "ערכת עיתונות" : "Press Kit", to: "/about" },
      ],
    },
    {
      h: isHebrew ? "תמיכה" : "Support",
      links: [
        { label: "FAQ", to: "/faq" },
        { label: isHebrew ? "מדיניות פרטיות" : "Privacy Policy", to: "/faq" },
        { label: isHebrew ? "תנאי שימוש" : "Terms of Use", to: "/faq" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_repeat(3,1fr)_1.2fr]">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            {isHebrew
              ? "סיפורים מבוססי AI מהמקומות שמקיפים אתכם."
              : "AI-powered stories from the places that surround you."}
          </p>
          <div className="mt-4 flex gap-3 text-muted-foreground">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-border">
              f
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-full border border-border">
              in
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-full border border-border">
              t
            </span>
          </div>
        </div>
        {cols.map((column) => (
          <div key={column.h}>
            <h4 className="text-sm font-bold">{column.h}</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="text-sm font-bold">{isHebrew ? "הורדת האפליקציה" : "Download the App"}</h4>
          <div className="mt-3 space-y-2">
            <div className="flex items-center gap-2 rounded-xl bg-foreground px-3 py-2 text-background">
              <div className="text-2xl"></div>
              <div className="text-start text-xs">
                <div className="opacity-70">{isHebrew ? "להורדה ב" : "Download on the"}</div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-foreground px-3 py-2 text-background">
              <div className="text-2xl">▶</div>
              <div className="text-start text-xs">
                <div className="opacity-70">{isHebrew ? "זמין ב" : "Get it on"}</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        {isHebrew
          ? "© 2026 PlaceEcho. כל הזכויות שמורות."
          : "© 2026 PlaceEcho. All rights reserved."}
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
