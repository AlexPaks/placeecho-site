import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Headphones, ShieldCheck, Users, Lightbulb, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site-chrome";
import placeechoPostcard from "@/assets/placeecho-postcard.png";
import { useLocale, useLocalizedDocument } from "@/lib/locale";
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

function AboutPage() {
  const { locale } = useLocale();
  const isHebrew = locale === "he";
  const copy = isHebrew
    ? {
        title: "אודות - PlaceEcho",
        description:
          "PlaceEcho נוצרה כדי להפוך כל מקום למשמעותי יותר באמצעות סיפורים מבוססי AI, אודיו טבעי והקשר תרבותי.",
        badge: "אודות PlaceEcho",
        headingPrefix: "לכל מקום יש",
        headingAccent: "יותר מסיפור אחד",
        intro:
          "PlaceEcho נוצרה כדי להפוך כל מקום למשמעותי יותר באמצעות סיפורים מבוססי AI, אודיו טבעי, הקשר תרבותי וגילוי אישי.",
        body: "בין אם אתם עומדים מול אתר עתיק, חולפים ליד פינה שקטה בשכונה או מתכננים את הטיול הבא מהבית, PlaceEcho עוזרת לכם לשמוע מה למקום עצמו יש לומר.",
        ctaPrimary: "נסו את PlaceEcho בחינם",
        ctaSecondary: "דברו איתנו",
        imageAlt: "מטייל מגלה מקום משמעותי עם PlaceEcho",
        pillars: [
          {
            icon: Sparkles,
            title: "סיפורים מבוססי AI",
            text: "נרטיבים אישיים שמסתגלים למקום שבו אתם נמצאים ולחוויה שאתם רוצים לקבל.",
            tint: "bg-primary-soft",
            iconClass: "text-primary",
          },
          {
            icon: Headphones,
            title: "אודיו טבעי",
            text: "קריינות רגועה וקולנועית בכמה שפות, שמתאימה להאזנה תוך כדי תנועה.",
            tint: "bg-[oklch(0.96_0.04_160)]",
            iconClass: "text-[oklch(0.45_0.13_165)]",
          },
          {
            icon: Lightbulb,
            title: "הקשר תרבותי",
            text: "אירועים היסטוריים, אגדות מקומיות ופרטים שקטים שמחיים כל מקום.",
            tint: "bg-[oklch(0.96_0.04_95)]",
            iconClass: "text-[oklch(0.54_0.14_88)]",
          },
          {
            icon: Users,
            title: "חקירה אישית",
            text: "לטייל לבד או עם חברים. לבחור את המצב, האורך והשפה שמתאימים לכם.",
            tint: "bg-[oklch(0.95_0.04_230)]",
            iconClass: "text-[oklch(0.46_0.12_235)]",
          },
          {
            icon: ShieldCheck,
            title: "אמינות וכבוד למקום",
            text: "דוגמאות מבוססות מקורות, עובדות מאומתות וטון מכבד כלפי תרבויות מקומיות.",
            tint: "bg-[oklch(0.95_0.04_220)]",
            iconClass: "text-[oklch(0.48_0.14_230)]",
          },
          {
            icon: Heart,
            title: "נבנה באכפתיות",
            text: "עוצב על ידי מטיילים, עבור מטיילים שמאמינים שלכל מקום מגיע סיפור.",
            tint: "bg-[oklch(0.96_0.04_12)]",
            iconClass: "text-[oklch(0.56_0.18_18)]",
          },
        ],
      }
    : {
        title: "About - PlaceEcho",
        description:
          "PlaceEcho was created to make every place feel meaningful through AI-powered stories, natural audio, and cultural context.",
        badge: "About PlaceEcho",
        headingPrefix: "Every place has",
        headingAccent: "more than one story",
        intro:
          "PlaceEcho was created to make every place feel more meaningful through AI-powered stories, natural audio, cultural context, and personal exploration.",
        body: "Whether you're standing in front of an ancient ruin, walking past a quiet neighborhood corner, or planning your next trip from home, PlaceEcho helps you hear what the place itself would say.",
        ctaPrimary: "Try PlaceEcho Free",
        ctaSecondary: "Contact us",
        imageAlt: "A traveler exploring a meaningful place with PlaceEcho",
        pillars: [
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
        ],
      };

  useLocalizedDocument({
    title: copy.title,
    description: copy.description,
  });

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
              <Sparkles className="h-3.5 w-3.5" /> {copy.badge}
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              {copy.headingPrefix} <span className="text-primary italic">{copy.headingAccent}</span>
            </h1>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">{copy.intro}</p>
            <p className="mt-3 text-muted-foreground">{copy.body}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href={APP_URL}>{copy.ctaPrimary}</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-6 bg-card">
                <Link to="/contact">{copy.ctaSecondary}</Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
            <img
              src={placeechoPostcard}
              alt={copy.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {copy.pillars.map(({ icon: Icon, title, text, tint, iconClass }) => (
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
