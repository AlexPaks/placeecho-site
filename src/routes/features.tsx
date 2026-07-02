import type { ComponentType } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Camera,
  Compass,
  Ghost,
  Headphones,
  Heart,
  Landmark,
  Languages,
  MapPin,
  Sparkles,
  Theater,
} from "lucide-react";
import storyAudioScreen from "@/assets/story-audio-screen.jpeg";
import { PageShell } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { FEATURES_COPY } from "@/lib/features-copy";
import { useLocale, useLocalizedDocument } from "@/lib/locale";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features - PlaceEcho" },
      {
        name: "description",
        content:
          "Experience the world differently with AI storytelling, natural narration, photo discovery, and personalized exploration.",
      },
      { property: "og:title", content: "PlaceEcho Features" },
      {
        property: "og:description",
        content:
          "A premium look at how PlaceEcho turns locations into stories, discovery, and immersive exploration.",
      },
    ],
  }),
  component: FeaturesPage,
});

function FeaturesPage() {
  const { locale } = useLocale();
  const copy = locale === "he" ? FEATURES_COPY.he : FEATURES_COPY.en;
  const isHebrew = locale === "he";

  const bentoCards = [
    {
      key: "hero",
      size: "lg:col-span-2 lg:row-span-2",
      className:
        "relative overflow-hidden rounded-[2rem] border border-border/70 bg-[linear-gradient(160deg,oklch(0.99_0.02_85),oklch(0.98_0.02_95))] p-7 shadow-[var(--shadow-card)] motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:duration-500 motion-safe:delay-75 motion-reduce:animate-none",
      render: () => (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,173,96,0.2),transparent_32%),radial-gradient(circle_at_82%_20%,rgba(255,221,168,0.18),transparent_30%)]"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary shadow-[var(--shadow-soft)] motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-105 motion-reduce:transform-none">
                <Sparkles className="h-5 w-5" />
              </span>
              <h2 className="mt-5 max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {copy.hero.title}
              </h2>
              <div className="mt-5 max-w-xl space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                {copy.hero.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-primary/15 blur-2xl" aria-hidden />
              <div className="relative rounded-[2rem] border border-white/50 bg-background/90 p-3 shadow-[0_24px_50px_-22px_rgba(107,72,38,0.45)]">
                <div className="mb-3 inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {copy.hero.visualBadge}
                </div>
                <img
                  src={storyAudioScreen}
                  alt={copy.hero.title}
                  className="w-full rounded-[1.5rem] object-cover shadow-[var(--shadow-soft)]"
                />
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      key: "explore",
      size: "",
      className:
        "group flex h-full flex-col rounded-[1.85rem] border border-border/70 bg-card/95 p-6 shadow-[var(--shadow-soft)] motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:duration-500 motion-safe:delay-150 motion-safe:transition-all motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[var(--shadow-card)] motion-reduce:animate-none motion-reduce:hover:transform-none",
      render: () => (
        <>
          <IconBadge icon={MapPin} tint="bg-primary-soft text-primary" />
          <h3 className="mt-5 text-xl font-bold">{copy.cards.exploreAnywhere.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {copy.cards.exploreAnywhere.description}
          </p>
        </>
      ),
    },
    {
      key: "photo",
      size: "",
      className:
        "group flex h-full flex-col rounded-[1.85rem] border border-border/70 bg-card/95 p-6 shadow-[var(--shadow-soft)] motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:duration-500 motion-safe:delay-200 motion-safe:transition-all motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[var(--shadow-card)] motion-reduce:animate-none motion-reduce:hover:transform-none",
      render: () => (
        <>
          <IconBadge icon={Camera} tint="bg-[oklch(0.96_0.04_160)] text-[oklch(0.45_0.13_165)]" />
          <h3 className="mt-5 text-xl font-bold">{copy.cards.photoDiscovery.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {copy.cards.photoDiscovery.description}
          </p>
        </>
      ),
    },
    {
      key: "modes",
      size: "",
      className:
        "group flex h-full flex-col rounded-[1.85rem] border border-border/70 bg-card/95 p-6 shadow-[var(--shadow-soft)] motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:duration-500 motion-safe:delay-300 motion-safe:transition-all motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[var(--shadow-card)] motion-reduce:animate-none motion-reduce:hover:transform-none",
      render: () => (
        <>
          <IconBadge icon={Theater} tint="bg-[oklch(0.96_0.04_300)] text-[oklch(0.48_0.16_300)]" />
          <h3 className="mt-5 text-lg font-bold">{copy.cards.modes.title}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {copy.cards.modes.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-semibold text-foreground/80"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            {copy.cards.modes.description}
          </p>
        </>
      ),
    },
    {
      key: "voices",
      size: "",
      className:
        "group flex h-full flex-col rounded-[1.85rem] border border-border/70 bg-card/95 p-6 shadow-[var(--shadow-soft)] motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:duration-500 motion-safe:delay-[350ms] motion-safe:transition-all motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[var(--shadow-card)] motion-reduce:animate-none motion-reduce:hover:transform-none",
      render: () => (
        <>
          <IconBadge icon={Headphones} tint="bg-[oklch(0.96_0.04_30)] text-[oklch(0.55_0.16_35)]" />
          <h3 className="mt-5 text-lg font-bold">{copy.cards.voices.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {copy.cards.voices.description}
          </p>
        </>
      ),
    },
    {
      key: "personalized",
      size: "",
      className:
        "group flex h-full flex-col rounded-[1.85rem] border border-border/70 bg-card/95 p-6 shadow-[var(--shadow-soft)] motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:duration-500 motion-safe:delay-[400ms] motion-safe:transition-all motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[var(--shadow-card)] motion-reduce:animate-none motion-reduce:hover:transform-none",
      render: () => (
        <>
          <IconBadge icon={Heart} tint="bg-[oklch(0.96_0.04_95)] text-[oklch(0.54_0.14_88)]" />
          <h3 className="mt-5 text-lg font-bold">{copy.cards.personalized.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {copy.cards.personalized.description}
          </p>
        </>
      ),
    },
  ];

  const modes = [
    {
      icon: Sparkles,
      name: copy.modesSection.items[0].name,
      desc: copy.modesSection.items[0].description,
      tint: "bg-primary-soft text-primary",
    },
    {
      icon: Landmark,
      name: copy.modesSection.items[1].name,
      desc: copy.modesSection.items[1].description,
      tint: "bg-[oklch(0.97_0.04_85)] text-[oklch(0.48_0.16_72)]",
    },
    {
      icon: Compass,
      name: copy.modesSection.items[2].name,
      desc: copy.modesSection.items[2].description,
      tint: "bg-[oklch(0.96_0.04_230)] text-[oklch(0.45_0.13_235)]",
    },
    {
      icon: Ghost,
      name: copy.modesSection.items[3].name,
      desc: copy.modesSection.items[3].description,
      tint: "bg-[oklch(0.96_0.04_8)] text-[oklch(0.54_0.18_8)]",
    },
  ];

  useLocalizedDocument({
    title: copy.metaTitle,
    description: copy.metaDescription,
  });

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
            <Sparkles className="h-3.5 w-3.5" /> {copy.badge}
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">{copy.heading}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {copy.intro}
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[minmax(220px,auto)] gap-5 md:grid-cols-2 lg:grid-cols-4">
          {bentoCards.map((card) => (
            <article key={card.key} className={cn(card.size, card.className)}>
              {card.render()}
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-[1.85rem] border border-border/70 bg-card/95 p-5 shadow-[var(--shadow-soft)] motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:duration-500 motion-safe:delay-[475ms] motion-reduce:animate-none">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                {copy.roadmap.label}
              </span>
              <h2 className="mt-3 text-xl font-bold text-foreground">{copy.roadmap.title}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                {copy.roadmap.description}
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="rounded-full bg-background px-5 motion-safe:transition-all motion-safe:hover:-translate-y-0.5"
            >
              <a href="/#product-roadmap">
                {copy.roadmap.cta}
                <ArrowRight className={cn("ml-2 h-4 w-4", isHebrew && "ml-0 mr-2 rotate-180")} />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-18">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {copy.modesSection.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            {copy.modesSection.body}
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {modes.map((mode, index) => (
              <article
                key={mode.name}
                className={cn(
                  "rounded-[1.6rem] border border-border/70 bg-card/88 p-5 shadow-[var(--shadow-soft)] motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:duration-500 motion-safe:transition-all motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[var(--shadow-card)] motion-reduce:animate-none motion-reduce:hover:transform-none",
                  index === 0 && "motion-safe:delay-75",
                  index === 1 && "motion-safe:delay-150",
                  index === 2 && "motion-safe:delay-200",
                  index === 3 && "motion-safe:delay-300",
                )}
              >
                <span className={cn("grid h-10 w-10 place-items-center rounded-xl", mode.tint)}>
                  <mode.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold">{mode.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{mode.desc}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full px-6">
            <a href="/#try-demo">{copy.ctas.primary}</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full bg-card px-6">
            <Link to="/faq">{copy.ctas.secondary}</Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}

function IconBadge({
  icon: Icon,
  tint,
}: {
  icon: ComponentType<{ className?: string }>;
  tint: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-2xl shadow-[var(--shadow-soft)] motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-105 motion-reduce:transform-none",
        tint,
      )}
    >
      <Icon className="h-5 w-5" />
    </span>
  );
}
