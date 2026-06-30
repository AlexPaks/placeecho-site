import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MapPin,
  Camera,
  AudioLines,
  Languages,
  BookText,
  Landmark,
  Compass,
  Ghost,
  Sparkles,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site-chrome";
import { useLocale, useLocalizedDocument } from "@/lib/locale";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features - PlaceEcho" },
      {
        name: "description",
        content:
          "Discover what makes PlaceEcho special: AI narration, multiple experience modes, photo discovery, and six supported languages.",
      },
      { property: "og:title", content: "PlaceEcho Features" },
      {
        property: "og:description",
        content: "AI narration, experience modes, photo discovery, and multilingual storytelling.",
      },
    ],
  }),
  component: FeaturesPage,
});

function FeaturesPage() {
  const { locale } = useLocale();
  const isHebrew = locale === "he";
  const copy = isHebrew
    ? {
        title: "יכולות - PlaceEcho",
        description:
          "גלו מה הופך את PlaceEcho למיוחדת: קריינות AI, מצבי חוויה שונים, יצירת סיפורים מתמונות ושש שפות נתמכות.",
        badge: "יכולות",
        headingPrefix: "כל מה שצריך כדי",
        headingAccent: "לשמוע את הסיפור",
        headingSuffix: "שמסביבכם",
        intro:
          "PlaceEcho הופכת כל מקום לחוויית אודיו אישית, עם קריינות AI, הקשר תרבותי ובחירה במצב ובשפה שמתאימים לכם.",
        sectionTitle: "מצבי חוויה",
        sectionBody: "בחרו איזה סוג Echo אתם רוצים, אותו מקום ותחושה אחרת לגמרי.",
        ctaPrimary: "נסו את הדמו",
        ctaSecondary: "קראו את ה-FAQ",
        features: [
          {
            icon: MapPin,
            title: "המיקום הנוכחי",
            text: "צרו Echo מיד עבור המקום שבו אתם נמצאים.",
            tint: "bg-primary-soft",
            iconClass: "text-primary",
          },
          {
            icon: Globe,
            title: "בכל מקום בעולם",
            text: "הניחו סיכה או הקלידו כתובת כדי לגלות מקומות רחוקים גם מהבית.",
            tint: "bg-[oklch(0.95_0.04_220)]",
            iconClass: "text-[oklch(0.48_0.14_230)]",
          },
          {
            icon: Camera,
            title: "סיפור מתמונה",
            text: "הוסיפו תמונה כדי ש-PlaceEcho תזהה פרטים חזותיים עשירים יותר.",
            tint: "bg-[oklch(0.96_0.04_160)]",
            iconClass: "text-[oklch(0.45_0.13_165)]",
          },
          {
            icon: AudioLines,
            title: "קריינות AI",
            text: "קולות רגועים וקולנועיים שמקריאים את הסיפור בזמן הליכה או מנוחה.",
            tint: "bg-[oklch(0.96_0.04_30)]",
            iconClass: "text-[oklch(0.55_0.16_35)]",
          },
          {
            icon: Languages,
            title: "כמה שפות",
            text: "האזינו באנגלית, עברית, צרפתית, גרמנית, ספרדית או רוסית.",
            tint: "bg-[oklch(0.96_0.04_300)]",
            iconClass: "text-[oklch(0.48_0.16_300)]",
          },
          {
            icon: Sparkles,
            title: "סיפורים אישיים",
            text: "בחרו אורך וטון כדי שכל Echo יתאים בדיוק לרגע.",
            tint: "bg-[oklch(0.96_0.04_95)]",
            iconClass: "text-[oklch(0.54_0.14_88)]",
          },
        ],
        modes: [
          {
            icon: BookText,
            name: "Story",
            desc: "סיפור סוחף בהשראת האווירה והתחושה של המקום.",
            tint: "bg-primary-soft",
            iconClass: "text-primary",
          },
          {
            icon: Landmark,
            name: "Historical",
            desc: "גלו אירועים, אנשים ורגעים אמיתיים שעיצבו את המקום.",
            tint: "bg-[oklch(0.97_0.04_85)]",
            iconClass: "text-[oklch(0.48_0.16_72)]",
          },
          {
            icon: Compass,
            name: "Guide",
            desc: "מדריכים שימושיים ומעוררי השראה שמסבירים מה מיוחד במקום.",
            tint: "bg-[oklch(0.96_0.04_230)]",
            iconClass: "text-[oklch(0.45_0.13_235)]",
          },
          {
            icon: Ghost,
            name: "Urban Legend",
            desc: "מיתוסים, מסתורין ואגדות מקומיות שעוברות מדור לדור.",
            tint: "bg-[oklch(0.96_0.04_8)]",
            iconClass: "text-[oklch(0.54_0.18_8)]",
          },
        ],
      }
    : {
        title: "Features - PlaceEcho",
        description:
          "Discover what makes PlaceEcho special: AI narration, multiple experience modes, photo discovery, and six supported languages.",
        badge: "Features",
        headingPrefix: "Everything you need to",
        headingAccent: "hear the story",
        headingSuffix: "around you",
        intro:
          "PlaceEcho turns any location into a personalized audio experience, combining AI narration, cultural context, and your choice of mode and language.",
        sectionTitle: "Experience Modes",
        sectionBody: "Pick the kind of Echo you want, same place and a very different feeling.",
        ctaPrimary: "Try the Demo",
        ctaSecondary: "Read the FAQ",
        features: [
          {
            icon: MapPin,
            title: "Current Location",
            text: "Generate an Echo for wherever you are instantly.",
            tint: "bg-primary-soft",
            iconClass: "text-primary",
          },
          {
            icon: Globe,
            title: "Anywhere in the World",
            text: "Drop a pin or type an address to explore distant places from home.",
            tint: "bg-[oklch(0.95_0.04_220)]",
            iconClass: "text-[oklch(0.48_0.14_230)]",
          },
          {
            icon: Camera,
            title: "Photo Discovery",
            text: "Add a photo so PlaceEcho can pick up richer visual details.",
            tint: "bg-[oklch(0.96_0.04_160)]",
            iconClass: "text-[oklch(0.45_0.13_165)]",
          },
          {
            icon: AudioLines,
            title: "AI Narration",
            text: "Calm, cinematic voices read your story aloud while you walk or rest.",
            tint: "bg-[oklch(0.96_0.04_30)]",
            iconClass: "text-[oklch(0.55_0.16_35)]",
          },
          {
            icon: Languages,
            title: "Multiple Languages",
            text: "Listen in English, Hebrew, French, German, Spanish, or Russian.",
            tint: "bg-[oklch(0.96_0.04_300)]",
            iconClass: "text-[oklch(0.48_0.16_300)]",
          },
          {
            icon: Sparkles,
            title: "Personalized Stories",
            text: "Choose length and tone so every Echo is shaped to fit the moment.",
            tint: "bg-[oklch(0.96_0.04_95)]",
            iconClass: "text-[oklch(0.54_0.14_88)]",
          },
        ],
        modes: [
          {
            icon: BookText,
            name: "Story",
            desc: "Immersive storytelling inspired by the atmosphere of the place.",
            tint: "bg-primary-soft",
            iconClass: "text-primary",
          },
          {
            icon: Landmark,
            name: "Historical",
            desc: "Explore real events, people and moments that shaped the location.",
            tint: "bg-[oklch(0.97_0.04_85)]",
            iconClass: "text-[oklch(0.48_0.16_72)]",
          },
          {
            icon: Compass,
            name: "Guide",
            desc: "Practical and inspiring guides that explain what makes the place special.",
            tint: "bg-[oklch(0.96_0.04_230)]",
            iconClass: "text-[oklch(0.45_0.13_235)]",
          },
          {
            icon: Ghost,
            name: "Urban Legend",
            desc: "Myths, mysteries, and local legends passed down through time.",
            tint: "bg-[oklch(0.96_0.04_8)]",
            iconClass: "text-[oklch(0.54_0.18_8)]",
          },
        ],
      };

  useLocalizedDocument({
    title: copy.title,
    description: copy.description,
  });

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
            <Sparkles className="h-3.5 w-3.5" /> {copy.badge}
          </span>
          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            {copy.headingPrefix} <span className="text-primary italic">{copy.headingAccent}</span>{" "}
            {copy.headingSuffix}
          </h1>
          <p className="mt-4 text-muted-foreground">{copy.intro}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {copy.features.map(({ icon: Icon, title, text, tint, iconClass }) => (
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

        <h2 className="mt-20 text-3xl font-bold sm:text-4xl">{copy.sectionTitle}</h2>
        <p className="mt-2 max-w-xl text-muted-foreground">{copy.sectionBody}</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {copy.modes.map(({ icon: Icon, name, desc, tint, iconClass }) => (
            <div
              key={name}
              className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <span className={cn("grid h-11 w-11 place-items-center rounded-xl", tint)}>
                <Icon className={cn("h-5 w-5", iconClass)} />
              </span>
              <h3 className="mt-4 text-lg font-bold">{name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full px-6">
            <a href="/#try-demo">{copy.ctaPrimary}</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-6 bg-card">
            <Link to="/faq">{copy.ctaSecondary}</Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
