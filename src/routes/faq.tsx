import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — PlaceEcho" },
      { name: "description", content: "Answers to common questions about PlaceEcho: how it works, languages, pricing, offline use, and privacy." },
      { property: "og:title", content: "PlaceEcho FAQ" },
      { property: "og:description", content: "Common questions about how PlaceEcho works." },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "What is PlaceEcho?", a: "PlaceEcho turns any location into a personalized AI-powered audio experience — immersive stories, historical journeys, local guides, and urban legends, narrated in your chosen language." },
  { q: "How does it work?", a: "Pick a location (current or anywhere in the world), choose an experience mode and a language, and PlaceEcho generates a short audio Echo for that place." },
  { q: "Which languages are supported?", a: "English, Hebrew, French, German, Spanish, and Russian. More languages are planned." },
  { q: "Do I need an account to try it?", a: "No — you can generate your first Echo from the demo on the home page without signing up." },
  { q: "Can I use PlaceEcho offline?", a: "Generating new Echoes requires a connection. Saved Echoes can be made available for offline listening from inside the app." },
  { q: "Are the stories accurate?", a: "Historical and Guide modes are grounded in sourced facts. Story and Urban Legend modes are creative interpretations clearly framed as such." },
  { q: "Is my location data shared?", a: "Location is used only to generate the Echo you requested. We don't sell location data to third parties." },
  { q: "How much does it cost?", a: "PlaceEcho is free to try. Pricing for premium features will be announced ahead of launch." },
];

function FaqPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
          <Sparkles className="h-3.5 w-3.5" /> FAQ
        </span>
        <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
          Frequently asked <span className="text-primary italic">questions</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Everything you might want to know before generating your first Echo.
        </p>

        <Accordion type="single" collapsible className="mt-10 rounded-3xl border border-border bg-card p-2 shadow-[var(--shadow-soft)]">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border/60 last:border-0 px-4">
              <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full px-6"><Link to="/">Try the Demo</Link></Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-6 bg-card"><Link to="/contact">Still have questions?</Link></Button>
        </div>
      </section>
    </PageShell>
  );
}