import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageSquare, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — PlaceEcho" },
      { name: "description", content: "Get in touch with the PlaceEcho team. Questions, feedback, press, and partnerships welcome." },
      { property: "og:title", content: "Contact PlaceEcho" },
      { property: "og:description", content: "Questions, feedback, press, and partnerships." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
              <Sparkles className="h-3.5 w-3.5" /> Contact
            </span>
            <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
              Let's <span className="text-primary italic">talk</span>
            </h1>
            <p className="mt-4 text-muted-foreground">
              Questions, feedback, press, or partnerships — we'd love to hear from you.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Email</div>
                  <a href="mailto:hello@placeecho.app" className="text-sm text-muted-foreground hover:text-foreground">hello@placeecho.app</a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                  <MessageSquare className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Press & partnerships</div>
                  <a href="mailto:press@placeecho.app" className="text-sm text-muted-foreground hover:text-foreground">press@placeecho.app</a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Based in</div>
                  <div className="text-sm text-muted-foreground">Built remotely · serving travelers everywhere</div>
                </div>
              </li>
            </ul>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
          >
            <h2 className="text-xl font-bold">Send us a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">We'll get back to you within a few days.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="c-name" className="text-xs font-semibold text-muted-foreground">Name</Label>
                <Input id="c-name" required placeholder="Your name" className="mt-1.5 rounded-xl bg-background" />
              </div>
              <div>
                <Label htmlFor="c-email" className="text-xs font-semibold text-muted-foreground">Email</Label>
                <Input id="c-email" type="email" required placeholder="you@example.com" className="mt-1.5 rounded-xl bg-background" />
              </div>
            </div>
            <div className="mt-4">
              <Label htmlFor="c-subject" className="text-xs font-semibold text-muted-foreground">Subject</Label>
              <Input id="c-subject" placeholder="What is this about?" className="mt-1.5 rounded-xl bg-background" />
            </div>
            <div className="mt-4">
              <Label htmlFor="c-msg" className="text-xs font-semibold text-muted-foreground">Message</Label>
              <Textarea id="c-msg" required rows={5} placeholder="Tell us a bit more…" className="mt-1.5 rounded-xl bg-background" />
            </div>
            <Button type="submit" className="mt-6 w-full rounded-xl py-6 text-base gap-2">
              <Send className="h-4 w-4" /> Send message
            </Button>
            {sent && (
              <p className="mt-3 text-center text-sm text-accent-foreground">
                Thanks — your message has been queued.
              </p>
            )}
          </form>
        </div>
      </section>
    </PageShell>
  );
}