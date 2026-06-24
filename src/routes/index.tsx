import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin, Globe, Camera, AudioLines, Languages, Play, BookOpen,
  CheckCircle2, BookText, Landmark, Compass, Ghost, Bell, Menu,
  Sparkles, Headphones, ShieldCheck, Users, Lightbulb, Star, Heart,
  Map as MapIcon, Library, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import echoRome from "@/assets/echo-rome.jpg";
import echoLondon from "@/assets/echo-london.jpg";
import echoKyoto from "@/assets/echo-kyoto.jpg";
import echoParis from "@/assets/echo-paris.jpg";
import aboutImg from "@/assets/about-place.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PlaceEcho — Every Place Has More Than One Story" },
      { name: "description", content: "PlaceEcho turns any location into a personalized AI-powered audio experience: immersive stories, historical journeys, local guides, and urban legends." },
      { property: "og:title", content: "PlaceEcho — Every Place Has More Than One Story" },
      { property: "og:description", content: "AI-powered place stories with natural audio in multiple languages." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TryDemo />
        <FeaturedEchoes />
        <ExperienceModes />
        <MultiLanguage />
        <Screenshots />
        <Community />
        <AboutPlaceEcho />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Brand mark ---------- */
function Logo({ size = 36 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
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
    </div>
  );
}

/* ---------- Header ---------- */
function Header() {
  const links = ["Home", "About", "Features", "FAQ", "Contact"];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l} href="#" className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground/70 hover:text-foreground sm:flex">
            <Globe className="h-4 w-4" /> EN
          </button>
          <Button className="rounded-full">Try Demo</Button>
          <button className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const features = [
    { icon: MapPin, label: "Current Location" },
    { icon: Globe, label: "Anywhere in the World" },
    { icon: Camera, label: "Photo Discovery" },
    { icon: AudioLines, label: "AI Narration" },
    { icon: Languages, label: "Multiple Languages" },
  ];
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
            <Sparkles className="h-3.5 w-3.5" /> AI-powered place experiences
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
            Every Place Has<br />
            More Than <span className="text-primary italic">One Story</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            PlaceEcho transforms any location into a personalized AI-powered
            experience: <span className="text-foreground/80 font-medium">immersive stories</span>,{" "}
            <span className="text-foreground/80 font-medium">historical journeys</span>, local guides, and
            urban legends — with natural audio in multiple languages.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button size="lg" className="rounded-full px-6 shadow-[var(--shadow-card)]">
              Try PlaceEcho Free
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-6 gap-2 bg-card">
              <Play className="h-4 w-4 fill-primary text-primary" /> Watch Demo
            </Button>
          </div>
          <ul className="mt-10 grid grid-cols-3 gap-4 sm:grid-cols-5">
            {features.map(({ icon: Icon, label }) => (
              <li key={label} className="flex flex-col items-center text-center">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-card shadow-[var(--shadow-soft)]">
                  <Icon className="h-5 w-5 text-primary" />
                </span>
                <span className="mt-2 text-xs font-medium text-muted-foreground leading-tight">{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center lg:justify-end">
          <PhoneMock />
        </div>
      </div>
    </section>
  );
}

/* ---------- Phone mockup ---------- */
function PhoneMock() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-2xl" />
      <div className="relative w-[300px] rounded-[2.5rem] border-[10px] border-foreground/90 bg-background p-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)] sm:w-[340px]">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground/90" />
        <div className="overflow-hidden rounded-[1.8rem] bg-background">
          <div className="flex items-center justify-between px-4 pt-6 pb-2 text-[10px] font-semibold">
            <span>12:56</span>
            <span className="flex gap-1 opacity-70">●●● ▮</span>
          </div>
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-1.5">
              <span className="grid h-6 w-6 place-items-center rounded-lg bg-primary text-primary-foreground"><BookOpen className="h-3 w-3" /></span>
              <span className="text-xs font-bold">PlaceEcho</span>
            </div>
            <div className="flex items-center gap-1.5 text-foreground/60">
              <Bell className="h-3.5 w-3.5" />
              <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">A</span>
            </div>
          </div>
          <div className="space-y-2 px-3 pb-3">
            <MockField icon={<MapPin className="h-3 w-3" />} label="CURRENT LOCATION" value="Mediterranean Courtyard" />
            <div className="rounded-xl border border-border bg-card p-2.5">
              <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase text-primary">
                <MapPin className="h-3 w-3" /> Pick location on map
              </div>
            </div>
            <MockField icon={<Camera className="h-3 w-3" />} label="ADD A PHOTO" value="Helps pick richer details" />
            <MockField icon={<Landmark className="h-3 w-3" />} label="CURRENT EXPERIENCE" value="Historical" />
            <div className="grid place-items-center py-3">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_30px_-8px_rgba(220,120,40,0.55)]">
                <div className="text-center">
                  <Sparkles className="mx-auto h-4 w-4" />
                  <div className="mt-0.5 text-[9px] font-bold leading-tight">Generate<br />story</div>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-secondary p-2">
              <div className="mb-1.5 flex items-center justify-between text-[8px] font-bold uppercase">
                <span>Try these places</span>
                <span className="text-primary">See all ›</span>
              </div>
              <div className="flex gap-1.5">
                <div className="h-12 flex-1 rounded-lg bg-gradient-to-br from-primary/70 to-primary" />
                <div className="h-12 flex-1 rounded-lg bg-gradient-to-br from-accent/70 to-accent" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-around border-t border-border py-2 text-[9px] font-medium text-foreground/60">
            <span className="flex flex-col items-center gap-0.5 text-primary"><Sparkles className="h-3.5 w-3.5" />Create</span>
            <span className="flex flex-col items-center gap-0.5"><BookOpen className="h-3.5 w-3.5" />Stories</span>
            <span className="flex flex-col items-center gap-0.5"><AudioLines className="h-3.5 w-3.5" />Settings</span>
            <span className="flex flex-col items-center gap-0.5"><Menu className="h-3.5 w-3.5" />Menu</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockField({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-2.5">
      <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase text-muted-foreground">
        {icon} {label}
      </div>
      <div className="mt-0.5 text-xs font-semibold text-foreground">{value}</div>
    </div>
  );
}

/* ---------- Try Demo ---------- */
function TryDemo() {
  const checks = ["Pick a place", "Choose an experience", "Generate and listen"];
  const [location, setLocation] = useState("");
  const [length, setLength] = useState("short");
  const [experience, setExperience] = useState("story");
  const [language, setLanguage] = useState("english");

  const handleUseMyLocation = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => setLocation(`${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`),
      () => {},
    );
  };

  return (
    <section className="bg-primary-soft py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Try the Demo</h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            See how PlaceEcho turns any place into an unforgettable story experience.
          </p>
          <ul className="mt-6 space-y-3">
            {checks.map((c) => (
              <li key={c} className="flex items-center gap-3 text-sm font-medium">
                <CheckCircle2 className="h-5 w-5 text-accent" /> {c}
              </li>
            ))}
          </ul>
          <Button size="lg" className="mt-7 rounded-full px-6">Try the Demo</Button>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
        >
          <h3 className="mb-5 text-center text-xl font-bold">Try the Demo</h3>
          <div className="space-y-5">
            <FormField label="Location">
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="relative flex-1">
                  <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
                  <Input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter an address or place"
                    className="rounded-xl bg-background pl-9"
                  />
                </div>
                <Button
                  type="button"
                  onClick={handleUseMyLocation}
                  className="rounded-xl whitespace-nowrap"
                >
                  Use My Location
                </Button>
              </div>
            </FormField>

            <FormField label="Story Length">
              <RadioGroup
                value={length}
                onValueChange={setLength}
                className="flex flex-wrap gap-4"
              >
                {[
                  { v: "short", l: "Short" },
                  { v: "medium", l: "Medium" },
                  { v: "long", l: "Long" },
                ].map((o) => (
                  <div key={o.v} className="flex items-center gap-2">
                    <RadioGroupItem id={`len-${o.v}`} value={o.v} />
                    <Label htmlFor={`len-${o.v}`} className="text-sm font-medium">{o.l}</Label>
                  </div>
                ))}
              </RadioGroup>
            </FormField>

            <FormField label="Experience">
              <Select value={experience} onValueChange={setExperience}>
                <SelectTrigger className="rounded-xl bg-background">
                  <SelectValue placeholder="Select an experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="story">Story</SelectItem>
                  <SelectItem value="historical">Historical</SelectItem>
                  <SelectItem value="guide">Guide</SelectItem>
                  <SelectItem value="urban-legend">Urban Legend</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField label="Language">
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="rounded-xl bg-background">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="german">German</SelectItem>
                  <SelectItem value="hebrew">Hebrew</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                  <SelectItem value="russian">Russian</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <Button type="submit" className="mt-2 w-full rounded-xl py-6 text-base gap-2">
              <Sparkles className="h-4 w-4" /> Generate Story
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1.5 text-xs font-semibold text-muted-foreground">{label}</div>
      {children}
    </div>
  );
}

/* ---------- Featured Echoes ---------- */
const ECHOES = [
  { title: "Rome Colosseum", mode: "Historical", img: echoRome, rating: 4.9, text: "Discover the real history behind one of the most iconic landmarks of ancient Rome.", tagColor: "bg-primary" },
  { title: "Tower of London", mode: "Urban Legend", img: echoLondon, rating: 4.9, text: "The dark legends and mysterious tales that still whisper through the ancient walls.", tagColor: "bg-[oklch(0.55_0.2_290)]" },
  { title: "Kyoto Temple", mode: "Guide", img: echoKyoto, rating: 4.9, text: "A complete guide to this beautiful temple and its cultural significance.", tagColor: "bg-accent" },
  { title: "Eiffel Tower", mode: "Story", img: echoParis, rating: 4.7, text: "A romantic story inspired by the dreams, love, and ambition behind the tower.", tagColor: "bg-[oklch(0.6_0.18_25)]" },
];

function FeaturedEchoes() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Featured Echoes</h2>
          <p className="mt-2 text-muted-foreground">Sample stories generated by PlaceEcho from amazing places around the world.</p>
        </div>
        <Button variant="outline" className="rounded-full gap-1 bg-card">See all Echoes <ChevronRight className="h-4 w-4" /></Button>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ECHOES.map((e) => (
          <article key={e.title} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-card)]">
            <div className="relative aspect-[5/4] overflow-hidden">
              <img src={e.img} alt={e.title} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className={`absolute left-3 bottom-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase text-primary-foreground ${e.tagColor}`}>{e.mode}</span>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold">{e.title}</h3>
                <span className="flex items-center gap-1 text-xs font-semibold text-primary">
                  <Star className="h-3.5 w-3.5 fill-primary" /> {e.rating}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{e.text}</p>
              <div className="mt-4 flex gap-2">
                <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary-soft py-2 text-xs font-semibold text-primary hover:bg-primary/15">
                  <Play className="h-3.5 w-3.5 fill-primary" /> Listen
                </button>
                <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border py-2 text-xs font-semibold hover:bg-secondary">
                  <BookOpen className="h-3.5 w-3.5" /> Read Story
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Experience Modes ---------- */
function ExperienceModes() {
  const modes = [
    { icon: BookText, name: "Story", desc: "Immersive storytelling inspired by the atmosphere of the place.", tint: "bg-primary-soft text-primary" },
    { icon: Landmark, name: "Historical", desc: "Explore real events, people and moments that shaped the location.", tint: "bg-accent-soft text-accent-foreground" },
    { icon: Compass, name: "Guide", desc: "Practical and inspiring guides to understand what makes the place special.", tint: "bg-[oklch(0.94_0.04_240)] text-[oklch(0.45_0.15_240)]" },
    { icon: Ghost, name: "Urban Legend", desc: "Myths, mysteries and local legends passed down through time.", tint: "bg-[oklch(0.94_0.04_300)] text-[oklch(0.45_0.18_300)]" },
  ];
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Experience Modes</h2>
        <p className="mt-2 text-muted-foreground">Explore stories in different ways.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {modes.map((m) => (
            <div key={m.name} className="rounded-3xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1">
              <div className={`mx-auto grid h-14 w-14 place-items-center rounded-2xl ${m.tint}`}>
                <m.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{m.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Multi Language ---------- */
function MultiLanguage() {
  const langs = [
    { name: "English", flag: "🇬🇧" }, { name: "Hebrew", flag: "🇮🇱" },
    { name: "French", flag: "🇫🇷" }, { name: "German", flag: "🇩🇪" },
    { name: "Spanish", flag: "🇪🇸" }, { name: "Russian", flag: "🇷🇺" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <h2 className="text-3xl font-bold sm:text-4xl">Multiple Languages</h2>
      <p className="mt-2 text-muted-foreground">Natural audio in six languages.</p>
      <div className="mt-10 grid grid-cols-3 gap-5 sm:grid-cols-6">
        {langs.map((l) => (
          <div key={l.name} className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
            <span className="text-4xl">{l.flag}</span>
            <span className="text-sm font-semibold">{l.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Screenshots ---------- */
function Screenshots() {
  const steps = [
    { icon: MapIcon, title: "1. Choose a Place", desc: "Find any place in the world or use your current location.", tint: "from-[oklch(0.85_0.12_220)] to-[oklch(0.7_0.15_220)]" },
    { icon: Compass, title: "2. Pick an Experience", desc: "Choose the style and length that fits your curiosity.", tint: "from-primary-soft to-primary/40" },
    { icon: Headphones, title: "3. Listen & Enjoy", desc: "Listen to your personalized story with natural audio.", tint: "from-[oklch(0.4_0.06_50)] to-[oklch(0.25_0.04_50)]" },
    { icon: Library, title: "4. Your Library", desc: "All your stories saved in one place to revisit anytime.", tint: "from-accent-soft to-accent/40" },
  ];
  return (
    <section className="bg-primary-soft/60 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">PlaceEcho in Action</h2>
        <p className="mt-2 text-muted-foreground">Designed for curious explorers everywhere.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title}>
              <div className={`relative mx-auto aspect-[9/16] w-full max-w-[200px] overflow-hidden rounded-[1.75rem] border-[6px] border-foreground/90 bg-gradient-to-br ${s.tint} shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]`}>
                <span className="absolute left-1/2 top-1 z-10 h-3 w-16 -translate-x-1/2 rounded-full bg-foreground/90" />
                <div className="grid h-full place-items-center">
                  <s.icon className="h-12 w-12 text-background/90 drop-shadow" />
                </div>
              </div>
              <h3 className="mt-4 text-center text-base font-bold">{s.title}</h3>
              <p className="mx-auto mt-1 max-w-[220px] text-center text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Community ---------- */
function Community() {
  const items = [
    { icon: Lightbulb, title: "Help shape features", desc: "We value your feedback" },
    { icon: Heart, title: "Share your ideas", desc: "Suggest new places" },
    { icon: Sparkles, title: "Early access", desc: "Be the first to explore" },
    { icon: Users, title: "Future community", desc: "Stories, creators & more" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Community <span className="text-muted-foreground text-xl font-medium">(Coming Soon)</span></h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            PlaceEcho is in active development. We're building a community of curious explorers and storytellers.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((i) => (
              <div key={i.title} className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                <i.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 text-sm font-bold">{i.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <h3 className="text-lg font-bold">Be an Early Explorer</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Join early and help us build the future of AI-powered place experiences.
          </p>
          <Button className="mt-5 w-full rounded-full">Join Early Access</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function AboutPlaceEcho() {
  const pillars = [
    { icon: Sparkles, label: "AI-Powered Stories" },
    { icon: AudioLines, label: "Natural Audio" },
    { icon: ShieldCheck, label: "Privacy Focused" },
    { icon: Compass, label: "Made for Explorers" },
  ];
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[320px_1fr] md:items-center">
        <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
          <img src={aboutImg} alt="A Mediterranean coastal path" loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">About PlaceEcho</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            PlaceEcho was created to make every place feel more meaningful through AI-powered stories,
            natural audio, cultural context, and personal exploration. Our technology turns any location
            into a meaningful experience through immersive stories, historical insights, guides, and legends.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.label} className="flex flex-col items-center rounded-2xl border border-border bg-card p-4 text-center">
                <p.icon className="h-6 w-6 text-primary" />
                <span className="mt-2 text-xs font-semibold">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-primary-soft py-20 text-center">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary-soft via-primary-soft/80 to-primary-soft" />
      <div className="relative mx-auto max-w-2xl px-4">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
          Ready to Hear the Story Around You?
        </h2>
        <p className="mt-4 text-muted-foreground">Generate your first Echo in seconds.</p>
        <Button size="lg" className="mt-7 rounded-full px-8 py-6 text-base shadow-[var(--shadow-card)]">
          Try PlaceEcho Free
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">No credit card required</p>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const cols = [
    { h: "Product", links: ["Features", "How It Works", "Try Demo"] },
    { h: "Company", links: ["About", "Contact", "Press Kit"] },
    { h: "Support", links: ["FAQ", "Privacy Policy", "Terms of Use"] },
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
            <span className="grid h-8 w-8 place-items-center rounded-full border border-border">f</span>
            <span className="grid h-8 w-8 place-items-center rounded-full border border-border">in</span>
            <span className="grid h-8 w-8 place-items-center rounded-full border border-border">t</span>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <h4 className="text-sm font-bold">{c.h}</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {c.links.map((l) => <li key={l}><a href="#" className="hover:text-foreground">{l}</a></li>)}
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
