import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MapPin, Camera, AudioLines, Languages, BookText, Landmark,
  Compass, Ghost, Sparkles, Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — PlaceEcho" },
      { name: "description", content: "Discover what makes PlaceEcho special: AI narration, multiple experience modes, photo discovery, and six supported languages." },
      { property: "og:title", content: "PlaceEcho Features" },
      { property: "og:description", content: "AI narration, experience modes, photo discovery, and multilingual storytelling." },
    ],
  }),
  component: FeaturesPage,
});

const features = [
  { icon: MapPin, title: "Current Location", text: "Generate an Echo for wherever you are — instantly." },
  { icon: Globe, title: "Anywhere in the World", text: "Drop a pin or type an address to explore distant places from home." },
  { icon: Camera, title: "Photo Discovery", text: "Add a photo so PlaceEcho can pick up richer visual details." },
  { icon: AudioLines, title: "AI Narration", text: "Calm, cinematic voices read your story aloud while you walk or rest." },
  { icon: Languages, title: "Multiple Languages", text: "Listen in English, Hebrew, French, German, Spanish, or Russian." },
  { icon: Sparkles, title: "Personalized Stories", text: "Choose length and tone — every Echo is shaped to fit the moment." },
];

const modes = [
  { icon: BookText, name: "Story", desc: "Immersive storytelling inspired by the atmosphere of the place." },
  { icon: Landmark, name: "Historical", desc: "Explore real events, people and moments that shaped the location." },
  { icon: Compass, name: "Guide", desc: "Practical and inspiring guides that explain what makes the place special." },
  { icon: Ghost, name: "Urban Legend", desc: "Myths, mysteries, and local legends passed down through time." },
];

function FeaturesPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
            <Sparkles className="h-3.5 w-3.5" /> Features
          </span>
          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            Everything you need to <span className="text-primary italic">hear the story</span> around you
          </h1>
          <p className="mt-4 text-muted-foreground">
            PlaceEcho turns any location into a personalized audio experience — combining
            AI narration, cultural context, and your choice of mode and language.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-20 text-3xl font-bold sm:text-4xl">Experience Modes</h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Pick the kind of Echo you want — same place, very different feeling.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {modes.map(({ icon: Icon, name, desc }) => (
            <div key={name} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full px-6"><Link to="/">Try the Demo</Link></Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-6 bg-card"><Link to="/faq">Read the FAQ</Link></Button>
        </div>
      </section>
    </PageShell>
  );
}