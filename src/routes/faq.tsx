import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  Compass,
  Languages,
  UserRound,
  WifiOff,
  Landmark,
  ShieldCheck,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageShell } from "@/components/site-chrome";
import { useLocale, useLocalizedDocument } from "@/lib/locale";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ - PlaceEcho" },
      {
        name: "description",
        content:
          "Answers to common questions about PlaceEcho: how it works, languages, pricing, offline use, and privacy.",
      },
      { property: "og:title", content: "PlaceEcho FAQ" },
      { property: "og:description", content: "Common questions about how PlaceEcho works." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const { locale } = useLocale();
  const isHebrew = locale === "he";
  const copy = isHebrew
    ? {
        title: "שאלות נפוצות - PlaceEcho",
        description:
          "תשובות לשאלות נפוצות על PlaceEcho: איך זה עובד, שפות, תמחור, שימוש אופליין ופרטיות.",
        badge: "שאלות נפוצות",
        headingPrefix: "שאלות",
        headingAccent: "נפוצות",
        intro: "כל מה שתרצו לדעת לפני יצירת ה-Echo הראשון שלכם.",
        ctaPrimary: "נסו את הדמו",
        ctaSecondary: "עדיין יש שאלות?",
        faqs: [
          {
            q: "מה זה PlaceEcho?",
            a: "PlaceEcho הופכת כל מיקום לחוויית אודיו אישית מבוססת AI עם סיפורים סוחפים, מסעות היסטוריים, מדריכים מקומיים ואגדות אורבניות בשפה שבחרתם.",
            icon: Sparkles,
            tint: "bg-primary-soft",
            iconClass: "text-primary",
          },
          {
            q: "איך זה עובד?",
            a: "בוחרים מיקום, את הנוכחי או כל מקום אחר בעולם, בוחרים מצב חוויה ושפה, ו-PlaceEcho מייצרת Echo אודיו קצר עבור אותו מקום.",
            icon: Compass,
            tint: "bg-[oklch(0.96_0.04_230)]",
            iconClass: "text-[oklch(0.45_0.13_235)]",
          },
          {
            q: "באילו שפות אפשר להשתמש?",
            a: "אנגלית, עברית, צרפתית, גרמנית, ספרדית ורוסית. שפות נוספות מתוכננות בהמשך.",
            icon: Languages,
            tint: "bg-[oklch(0.96_0.04_300)]",
            iconClass: "text-[oklch(0.48_0.16_300)]",
          },
          {
            q: "צריך חשבון כדי לנסות?",
            a: "לא. אפשר ליצור את ה-Echo הראשון דרך הדמו בעמוד הבית גם בלי להירשם.",
            icon: UserRound,
            tint: "bg-[oklch(0.95_0.04_220)]",
            iconClass: "text-[oklch(0.48_0.14_230)]",
          },
          {
            q: "אפשר להשתמש ב-PlaceEcho בלי אינטרנט?",
            a: "כדי ליצור Echo חדש צריך חיבור. Echoים שמורים יכולים להיות זמינים להאזנה אופליין מתוך האפליקציה.",
            icon: WifiOff,
            tint: "bg-[oklch(0.96_0.04_30)]",
            iconClass: "text-[oklch(0.55_0.16_35)]",
          },
          {
            q: "הסיפורים מדויקים?",
            a: "מצבי Historical ו-Guide מבוססים על מקורות ועובדות. מצבי Story ו-Urban Legend הם פרשנויות יצירתיות שמסומנות ככאלה.",
            icon: Landmark,
            tint: "bg-[oklch(0.97_0.04_85)]",
            iconClass: "text-[oklch(0.48_0.16_72)]",
          },
          {
            q: "האם נתוני המיקום שלי משותפים?",
            a: "המיקום משמש רק כדי ליצור את ה-Echo שביקשתם. אנחנו לא מוכרים נתוני מיקום לצדדים שלישיים.",
            icon: ShieldCheck,
            tint: "bg-[oklch(0.95_0.04_220)]",
            iconClass: "text-[oklch(0.48_0.14_230)]",
          },
          {
            q: "כמה זה עולה?",
            a: "PlaceEcho חינמית לניסיון. מחירים עבור יכולות פרימיום יפורסמו לפני ההשקה.",
            icon: CreditCard,
            tint: "bg-[oklch(0.96_0.04_12)]",
            iconClass: "text-[oklch(0.56_0.18_18)]",
          },
        ],
      }
    : {
        title: "FAQ - PlaceEcho",
        description:
          "Answers to common questions about PlaceEcho: how it works, languages, pricing, offline use, and privacy.",
        badge: "FAQ",
        headingPrefix: "Frequently asked",
        headingAccent: "questions",
        intro: "Everything you might want to know before generating your first Echo.",
        ctaPrimary: "Try the Demo",
        ctaSecondary: "Still have questions?",
        faqs: [
          {
            q: "What is PlaceEcho?",
            a: "PlaceEcho turns any location into a personalized AI-powered audio experience with immersive stories, historical journeys, local guides, and urban legends narrated in your chosen language.",
            icon: Sparkles,
            tint: "bg-primary-soft",
            iconClass: "text-primary",
          },
          {
            q: "How does it work?",
            a: "Pick a location (current or anywhere in the world), choose an experience mode and a language, and PlaceEcho generates a short audio Echo for that place.",
            icon: Compass,
            tint: "bg-[oklch(0.96_0.04_230)]",
            iconClass: "text-[oklch(0.45_0.13_235)]",
          },
          {
            q: "Which languages are supported?",
            a: "English, Hebrew, French, German, Spanish, and Russian. More languages are planned.",
            icon: Languages,
            tint: "bg-[oklch(0.96_0.04_300)]",
            iconClass: "text-[oklch(0.48_0.16_300)]",
          },
          {
            q: "Do I need an account to try it?",
            a: "No, you can generate your first Echo from the demo on the home page without signing up.",
            icon: UserRound,
            tint: "bg-[oklch(0.95_0.04_220)]",
            iconClass: "text-[oklch(0.48_0.14_230)]",
          },
          {
            q: "Can I use PlaceEcho offline?",
            a: "Generating new Echoes requires a connection. Saved Echoes can be made available for offline listening from inside the app.",
            icon: WifiOff,
            tint: "bg-[oklch(0.96_0.04_30)]",
            iconClass: "text-[oklch(0.55_0.16_35)]",
          },
          {
            q: "Are the stories accurate?",
            a: "Historical and Guide modes are grounded in sourced facts. Story and Urban Legend modes are creative interpretations clearly framed as such.",
            icon: Landmark,
            tint: "bg-[oklch(0.97_0.04_85)]",
            iconClass: "text-[oklch(0.48_0.16_72)]",
          },
          {
            q: "Is my location data shared?",
            a: "Location is used only to generate the Echo you requested. We don't sell location data to third parties.",
            icon: ShieldCheck,
            tint: "bg-[oklch(0.95_0.04_220)]",
            iconClass: "text-[oklch(0.48_0.14_230)]",
          },
          {
            q: "How much does it cost?",
            a: "PlaceEcho is free to try. Pricing for premium features will be announced ahead of launch.",
            icon: CreditCard,
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
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
          <Sparkles className="h-3.5 w-3.5" /> {copy.badge}
        </span>
        <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
          {copy.headingPrefix} <span className="text-primary italic">{copy.headingAccent}</span>
        </h1>
        <p className="mt-4 text-muted-foreground">{copy.intro}</p>

        <Accordion
          type="single"
          collapsible
          className="mt-10 rounded-3xl border border-border bg-card p-2 shadow-[var(--shadow-soft)]"
        >
          {copy.faqs.map((faq, index) => (
            <AccordionItem
              key={faq.q}
              value={`item-${index}`}
              className="border-b border-border/60 last:border-0 px-4"
            >
              <AccordionTrigger className="text-start text-base font-semibold">
                <span className="flex items-center gap-3 pe-4">
                  <span
                    className={cn(
                      "grid h-10 w-10 shrink-0 place-items-center rounded-xl",
                      faq.tint,
                    )}
                  >
                    <faq.icon className={cn("h-4.5 w-4.5", faq.iconClass)} />
                  </span>
                  <span>{faq.q}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full px-6">
            <a href="/#try-demo">{copy.ctaPrimary}</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-6 bg-card">
            <Link to="/contact">{copy.ctaSecondary}</Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
