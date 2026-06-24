import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Headphones, ShieldCheck, Users, Lightbulb, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site-chrome";
import placeechoPostcard from "@/assets/placeecho-postcard.png";
import { cn } from "@/lib/utils";

const APP_URL = "https://app.placeecho.io";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - PlaceEcho" },
      {
        name: "description",
        content:
          "PlaceEcho was created to make every place feel meaningful through AI-powered stories, natural audio, and cultural context.",
      },
      { property: "og:title", content: "About PlaceEcho" },
      {
        property: "og:description",
        content: "The mission behind PlaceEcho - making every place feel meaningful.",
      },
      { property: "og:image", content: placeechoPostcard },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Sparkles,
    title: "AI-Powered Stories",
    text: "Personalized narratives that adapt to where you are and what you want to experience.",
    tint: "bg-primary-soft",
    iconClass: "text-primary",
  },
  {
    icon: Headphones,
    title: "Natural Audio",
    text: "Calm, cinematic narration in multiple languages, built for listening on the move.",
    tint: "bg-[oklch(0.96_0.04_160)]",
    iconClass: "text-[oklch(0.45_0.13_165)]",
  },
  {
    icon: Lightbulb,
    title: "Cultural Context",
    text: "Historical events, local legends and quiet details that bring places to life.",
    tint: "bg-[oklch(0.96_0.04_95)]",
    iconClass: "text-[oklch(0.54_0.14_88)]",
  },
  {
    icon: Users,
    title: "Personal Exploration",
    text: "Travel solo or with friends. Choose your mode, your length, your language.",
    tint: "bg-[oklch(0.95_0.04_230)]",
    iconClass: "text-[oklch(0.46_0.12_235)]",
  },
  {
    icon: ShieldCheck,
    title: "Trustworthy",
    text: "Sample-based examples, sourced facts and a respectful tone toward local cultures.",
    tint: "bg-[oklch(0.95_0.04_220)]",
    iconClass: "text-[oklch(0.48_0.14_230)]",
  },
  {
    icon: Heart,
    title: "Made With Care",
    text: "Designed by travelers, for travelers who believe every place deserves a story.",
    tint: "bg-[oklch(0.96_0.04_12)]",
    iconClass: "text-[oklch(0.56_0.18_18)]",
  },
];

function AboutPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
              <Sparkles className="h-3.5 w-3.5" /> About PlaceEcho
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Every place has <span className="text-primary italic">more than one story</span>
            </h1>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              PlaceEcho was created to make every place feel more meaningful through AI-powered
              stories, natural audio, cultural context, and personal exploration.
            </p>
            <p className="mt-3 text-muted-foreground">
              Whether you're standing in front of an ancient ruin, walking past a quiet neighborhood
              corner, or planning your next trip from home, PlaceEcho helps you hear what the place
              itself would say.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href={APP_URL}>Try PlaceEcho Free</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-6 bg-card">
                <Link to="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
            <img
              src={placeechoPostcard}
              alt="A traveler exploring a meaningful place with PlaceEcho"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text, tint, iconClass }) => (
            <div
              key={title}
              className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <span className={cn("grid h-11 w-11 place-items-center rounded-xl", tint)}>
                <Icon className={cn("h-5 w-5", iconClass)} />
              </span>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
