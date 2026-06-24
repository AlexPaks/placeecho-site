import { Link } from "@tanstack/react-router";
import { BookOpen, Globe, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const TRY_DEMO_HREF = "/#try-demo";

export function Logo({ size = 36 }: { size?: number }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <div
        className="relative grid place-items-center rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
        style={{ width: size, height: size }}
      >
        <BookOpen className="h-1/2 w-1/2" strokeWidth={2.4} />
        <span className="absolute -bottom-1 -right-1 grid h-4 w-4 place-items-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground border-2 border-background">
          ·
        </span>
      </div>
      <span className="text-lg font-bold tracking-tight">PlaceEcho</span>
    </Link>
  );
}

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/features", label: "Features" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm font-semibold text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground/70 hover:text-foreground sm:flex">
            <Globe className="h-4 w-4" /> EN
          </button>
          <Button asChild className="rounded-full">
            <a href={TRY_DEMO_HREF}>Try Demo</a>
          </Button>
          <button className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  const cols: { h: string; links: { label: string; to: string }[] }[] = [
    {
      h: "Product",
      links: [
        { label: "Features", to: "/features" },
        { label: "How It Works", to: "/features" },
        { label: "Try Demo", to: TRY_DEMO_HREF },
      ],
    },
    {
      h: "Company",
      links: [
        { label: "About", to: "/about" },
        { label: "Contact", to: "/contact" },
        { label: "Press Kit", to: "/about" },
      ],
    },
    {
      h: "Support",
      links: [
        { label: "FAQ", to: "/faq" },
        { label: "Privacy Policy", to: "/faq" },
        { label: "Terms of Use", to: "/faq" },
      ],
    },
  ];
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_repeat(3,1fr)_1.2fr]">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            AI-powered stories from the places that surround you.
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
        {cols.map((c) => (
          <div key={c.h}>
            <h4 className="text-sm font-bold">{c.h}</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="text-sm font-bold">Download the App</h4>
          <div className="mt-3 space-y-2">
            <div className="flex items-center gap-2 rounded-xl bg-foreground px-3 py-2 text-background">
              <div className="text-2xl"></div>
              <div className="text-left text-xs">
                <div className="opacity-70">Download on the</div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-foreground px-3 py-2 text-background">
              <div className="text-2xl">▶</div>
              <div className="text-left text-xs">
                <div className="opacity-70">Get it on</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © 2026 PlaceEcho. All rights reserved.
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
