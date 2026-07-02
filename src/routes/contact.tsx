import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageSquare, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageShell } from "@/components/site-chrome";
import { useLocale, useLocalizedDocument } from "@/lib/locale";
import { cn } from "@/lib/utils";

const APP_URL = "https://app.placeecho.io";
const API_PUBLIC_URL = "https://api.placeecho.io";
const PUBLIC_API_CLIENT_ID_KEY = "placeecho_public_client_id";
const contactEnv = import.meta.env as Record<string, string | boolean | undefined>;
const IS_DEMO_MODE =
  contactEnv.MODE?.toString().toLowerCase() === "demo" ||
  contactEnv.VITE_DEMO_MODE?.toString().toLowerCase() === "true";
const PUBLIC_API_BASE_URL = IS_DEMO_MODE
  ? "http://127.0.0.1:8002/public/v1"
  : ((import.meta.env.VITE_PUBLIC_API_BASE_URL as string | undefined) ??
    `${API_PUBLIC_URL}/public/v1`);

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactSubmissionResponse = {
  ok?: boolean;
  queued?: boolean;
  degraded_mode?: boolean;
};

type ContactApiError = {
  error?: string;
  message?: string;
  request_id?: string;
};

function getPublicClientId() {
  if (typeof window === "undefined") return "placeecho-site-ssr";

  const existing = window.localStorage.getItem(PUBLIC_API_CLIENT_ID_KEY);
  if (existing) return existing;

  const nextValue = window.crypto?.randomUUID?.() ?? `placeecho-${Date.now()}`;
  window.localStorage.setItem(PUBLIC_API_CLIENT_ID_KEY, nextValue);
  return nextValue;
}

async function publicApi(path: string, options: RequestInit = {}) {
  const headers = new Headers(options.headers ?? {});
  headers.set("X-PlaceEcho-Client-Id", getPublicClientId());

  return fetch(`${PUBLIC_API_BASE_URL}${path}`, {
    ...options,
    headers,
  });
}

async function readContactApiError(
  response: Response,
  messages: {
    unavailable: string;
    rateLimited: string;
    failedWithStatus: (status: number, requestId?: string) => string;
  },
) {
  try {
    const payload = (await response.json()) as ContactApiError;

    if (payload.error === "PUBLIC_DAILY_LIMIT_EXCEEDED") {
      return messages.unavailable;
    }

    if (payload.error === "PUBLIC_RATE_LIMITED") {
      return messages.rateLimited;
    }

    return payload.message
      ? `${payload.message}${payload.request_id ? ` Request ID: ${payload.request_id}.` : ""}`
      : messages.failedWithStatus(response.status, payload.request_id);
  } catch {
    return messages.failedWithStatus(response.status);
  }
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - PlaceEcho" },
      {
        name: "description",
        content:
          "Get in touch with the PlaceEcho team. Questions, feedback, press, and partnerships welcome.",
      },
      { property: "og:title", content: "Contact PlaceEcho" },
      { property: "og:description", content: "Questions, feedback, press, and partnerships." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { locale } = useLocale();
  const isHebrew = locale === "he";
  const copy = isHebrew
    ? {
        title: "צור קשר - PlaceEcho",
        description:
          "דברו עם צוות PlaceEcho. שאלות, פידבק, תקשורת ושיתופי פעולה תמיד יתקבלו בברכה.",
        badge: "צור קשר",
        headingPrefix: "בואו",
        headingAccent: "נדבר",
        intro: "שאלות, פידבק, תקשורת או שיתופי פעולה, נשמח לשמוע מכם.",
        methods: [
          {
            icon: Mail,
            label: "אימייל",
            value: "support@placeecho.io",
            href: "mailto:support@placeecho.io",
            tint: "bg-primary-soft",
            iconClass: "text-primary",
          },
          {
            icon: MessageSquare,
            label: "עיתונות ושיתופי פעולה",
            value: "alex@placeecho.io",
            href: "mailto:alex@placeecho.io",
            tint: "bg-[oklch(0.96_0.04_160)]",
            iconClass: "text-[oklch(0.45_0.13_165)]",
          },
          {
            icon: MapPin,
            label: "אנחנו פועלים מ",
            value: "נבנה מרחוק · משרת מטיילים בכל מקום",
            tint: "bg-[oklch(0.95_0.04_220)]",
            iconClass: "text-[oklch(0.48_0.14_230)]",
          },
        ] as const,
        formTitle: "שלחו לנו הודעה",
        formIntro: "נחזור אליכם תוך כמה ימים.",
        fields: {
          name: "שם",
          email: "אימייל",
          subject: "נושא",
          message: "הודעה",
        },
        placeholders: {
          name: "השם שלכם",
          email: "you@example.com",
          subject: "על מה מדובר?",
          message: "ספרו לנו קצת יותר...",
        },
        submit: "שליחת הודעה",
        sending: "שולח...",
        success: "תודה, ההודעה שלכם נוספה לתור.",
        errors: {
          unavailable: "טופס ההודעות לא זמין כרגע. נסו שוב מאוחר יותר או שלחו לנו אימייל ישירות.",
          rateLimited: "יש כרגע יותר מדי פניות. חכו רגע ונסו שוב.",
          failedWithStatus: (status: number, requestId?: string) =>
            `שליחת ההודעה נכשלה עם סטטוס ${status}.${requestId ? ` Request ID: ${requestId}.` : ""}`,
          queueFailed: "לא הצלחנו להכניס את ההודעה לתור כרגע. נסו שוב מאוחר יותר.",
          unexpected: "משהו השתבש בזמן שליחת ההודעה.",
        },
      }
    : {
        title: "Contact - PlaceEcho",
        description:
          "Get in touch with the PlaceEcho team. Questions, feedback, press, and partnerships welcome.",
        badge: "Contact",
        headingPrefix: "Let's",
        headingAccent: "talk",
        intro: "Questions, feedback, press, or partnerships, we'd love to hear from you.",
        methods: [
          {
            icon: Mail,
            label: "Email",
            value: "support@placeecho.io",
            href: "mailto:support@placeecho.io",
            tint: "bg-primary-soft",
            iconClass: "text-primary",
          },
          {
            icon: MessageSquare,
            label: "Press & partnerships",
            value: "alex@placeecho.io",
            href: "mailto:alex@placeecho.io",
            tint: "bg-[oklch(0.96_0.04_160)]",
            iconClass: "text-[oklch(0.45_0.13_165)]",
          },
          {
            icon: MapPin,
            label: "Based in",
            value: "Built remotely · serving travelers everywhere",
            tint: "bg-[oklch(0.95_0.04_220)]",
            iconClass: "text-[oklch(0.48_0.14_230)]",
          },
        ] as const,
        formTitle: "Send us a message",
        formIntro: "We'll get back to you within a few days.",
        fields: {
          name: "Name",
          email: "Email",
          subject: "Subject",
          message: "Message",
        },
        placeholders: {
          name: "Your name",
          email: "you@example.com",
          subject: "What is this about?",
          message: "Tell us a bit more...",
        },
        submit: "Send message",
        sending: "Sending...",
        success: "Thanks, your message has been queued.",
        errors: {
          unavailable:
            "The message form is unavailable right now. Please try again later or email us directly.",
          rateLimited: "Too many requests right now. Please wait a moment and try again.",
          failedWithStatus: (status: number, requestId?: string) =>
            `The message request failed with status ${status}.${requestId ? ` Request ID: ${requestId}.` : ""}`,
          queueFailed: "Your message could not be queued right now. Please try again later.",
          unexpected: "Something went wrong while sending your message.",
        },
      };

  useLocalizedDocument({
    title: copy.title,
    description: copy.description,
  });

  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleFieldChange =
    (field: keyof ContactFormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({
        ...current,
        [field]: event.target.value,
      }));
      setSent(false);
      setSubmitError(null);
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSent(false);
    setSubmitError(null);

    try {
      const trimmedSubject = form.subject.trim();
      const message = trimmedSubject
        ? `Subject: ${trimmedSubject}\n\n${form.message.trim()}`
        : form.message.trim();

      const response = await publicApi("/site/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message,
          source: "contact_page",
        }),
      });

      if (!response.ok) {
        throw new Error(await readContactApiError(response, copy.errors));
      }

      const result = (await response.json()) as ContactSubmissionResponse;

      if (!result.ok || !result.queued) {
        throw new Error(copy.errors.queueFailed);
      }

      setSent(true);
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : copy.errors.unexpected);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
              <Sparkles className="h-3.5 w-3.5" /> {copy.badge}
            </span>
            <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
              {copy.headingPrefix} <span className="text-primary italic">{copy.headingAccent}</span>
            </h1>
            <p className="mt-4 text-muted-foreground">{copy.intro}</p>

            <ul className="mt-8 space-y-5">
              {copy.methods.map((item) => (
                <li key={item.label} className="flex gap-4">
                  <span
                    className={cn(
                      "grid h-11 w-11 shrink-0 place-items-center rounded-xl",
                      item.tint,
                    )}
                  >
                    <item.icon className={cn("h-5 w-5", item.iconClass)} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">{item.label}</div>
                    {"href" in item ? (
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm text-muted-foreground">{item.value}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
          >
            <h2 className="text-xl font-bold">{copy.formTitle}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{copy.formIntro}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="c-name" className="text-xs font-semibold text-muted-foreground">
                  {copy.fields.name}
                </Label>
                <Input
                  id="c-name"
                  required
                  value={form.name}
                  onChange={handleFieldChange("name")}
                  placeholder={copy.placeholders.name}
                  className="mt-1.5 rounded-xl bg-background"
                />
              </div>
              <div>
                <Label htmlFor="c-email" className="text-xs font-semibold text-muted-foreground">
                  {copy.fields.email}
                </Label>
                <Input
                  id="c-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleFieldChange("email")}
                  placeholder={copy.placeholders.email}
                  className="mt-1.5 rounded-xl bg-background"
                />
              </div>
            </div>
            <div className="mt-4">
              <Label htmlFor="c-subject" className="text-xs font-semibold text-muted-foreground">
                {copy.fields.subject}
              </Label>
              <Input
                id="c-subject"
                value={form.subject}
                onChange={handleFieldChange("subject")}
                placeholder={copy.placeholders.subject}
                className="mt-1.5 rounded-xl bg-background"
              />
            </div>
            <div className="mt-4">
              <Label htmlFor="c-msg" className="text-xs font-semibold text-muted-foreground">
                {copy.fields.message}
              </Label>
              <Textarea
                id="c-msg"
                required
                rows={5}
                value={form.message}
                onChange={handleFieldChange("message")}
                placeholder={copy.placeholders.message}
                className="mt-1.5 rounded-xl bg-background"
              />
            </div>
            {submitError ? (
              <div className="mt-4 rounded-2xl border border-[oklch(0.9_0.05_8)] bg-[oklch(0.98_0.02_8)] px-4 py-3 text-sm leading-relaxed text-[oklch(0.54_0.18_8)]">
                {submitError}
              </div>
            ) : null}
            <Button
              type="submit"
              className="mt-6 w-full gap-2 rounded-xl py-6 text-base"
              disabled={isSubmitting}
            >
              <Send className="h-4 w-4" /> {isSubmitting ? copy.sending : copy.submit}
            </Button>
            {sent && (
              <p className="mt-3 text-center text-sm text-accent-foreground">{copy.success}</p>
            )}
          </form>
        </div>
      </section>
    </PageShell>
  );
}
