import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Compass,
  Headphones,
  Heart,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import placeechoPostcard from "@/assets/placeecho-postcard.png";
import { PageShell } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { useLocale, useLocalizedDocument } from "@/lib/locale";
import { cn } from "@/lib/utils";

const APP_URL = "https://app.placeecho.io";

const ABOUT_COPY = {
  en: {
    title: "About - PlaceEcho",
    description:
      "PlaceEcho helps people experience places with more meaning through AI storytelling, natural audio, and cultural context.",
    badge: "About PlaceEcho",
    headingPrefix: "Every place deserves",
    headingAccent: "a richer story",
    intro:
      "PlaceEcho helps people move through the world with more context, curiosity, and emotion.",
    body: "We combine AI storytelling, natural audio, and cultural perspective to turn a location into an experience that feels personal the moment you arrive.",
    supporting:
      "From iconic landmarks to ordinary side streets, we believe great discovery begins when a place feels alive instead of generic.",
    quote:
      "We are building a travel product that makes people look up, slow down, and connect more deeply to where they are.",
    ctaPrimary: "Try PlaceEcho Free",
    ctaSecondary: "Contact us",
    imageAlt: "A traveler exploring a meaningful place with PlaceEcho",
    panelLabel: "What guides us",
    stats: [
      { value: "4", label: "experience modes" },
      { value: "6", label: "listening languages" },
      { value: "1", label: "goal: deeper discovery" },
    ],
    storyBlocks: [
      {
        title: "Our mission",
        text: "Make places feel meaningful, not generic. We want people to understand where they are, not just pass through it.",
      },
      {
        title: "Our approach",
        text: "Blend cinematic story, verified context, practical guidance, and local folklore in formats that actually work while walking, listening, and exploring.",
      },
      {
        title: "What comes next",
        text: "Grow from a storytelling tool into a shared home for memorable places, community recommendations, and stories worth passing on.",
      },
    ],
    pillars: [
      {
        icon: Sparkles,
        title: "AI-powered storytelling",
        text: "Each Echo adapts to the place, the mode you choose, and the feeling you want from the moment.",
        tint: "bg-primary-soft",
        iconClass: "text-primary",
      },
      {
        icon: Headphones,
        title: "Natural audio",
        text: "Built for listening on the move, with calm, immersive narration that fits walks, trips, and spontaneous discovery.",
        tint: "bg-[oklch(0.96_0.04_160)]",
        iconClass: "text-[oklch(0.45_0.13_165)]",
      },
      {
        icon: Lightbulb,
        title: "Cultural perspective",
        text: "History, atmosphere, folklore, and overlooked details come together to make a place feel layered and memorable.",
        tint: "bg-[oklch(0.96_0.04_95)]",
        iconClass: "text-[oklch(0.54_0.14_88)]",
      },
      {
        icon: Users,
        title: "Personal exploration",
        text: "Travel solo or with friends. Choose your language, your mode, and the pace that fits your journey.",
        tint: "bg-[oklch(0.95_0.04_230)]",
        iconClass: "text-[oklch(0.46_0.12_235)]",
      },
      {
        icon: ShieldCheck,
        title: "Respect for place",
        text: "We aim for useful, grounded storytelling that respects local culture instead of flattening it into generic travel content.",
        tint: "bg-[oklch(0.95_0.04_220)]",
        iconClass: "text-[oklch(0.48_0.14_230)]",
      },
      {
        icon: Heart,
        title: "Built with care",
        text: "PlaceEcho is designed for people who love the feeling of arriving somewhere and wanting to understand it more deeply.",
        tint: "bg-[oklch(0.96_0.04_12)]",
        iconClass: "text-[oklch(0.56_0.18_18)]",
      },
    ],
  },
  he: {
    title: "\u05d0\u05d5\u05d3\u05d5\u05ea - PlaceEcho",
    description:
      "PlaceEcho \u05e2\u05d5\u05d6\u05e8\u05ea \u05dc\u05d0\u05e0\u05e9\u05d9\u05dd \u05dc\u05d7\u05d5\u05d5\u05ea \u05de\u05e7\u05d5\u05de\u05d5\u05ea \u05e2\u05dd \u05d9\u05d5\u05ea\u05e8 \u05e2\u05d5\u05de\u05e7, \u05e1\u05e7\u05e8\u05e0\u05d5\u05ea \u05d5\u05de\u05e9\u05de\u05e2\u05d5\u05ea \u05d3\u05e8\u05da \u05e1\u05d8\u05d5\u05e8\u05d9\u05d8\u05dc\u05d9\u05e0\u05d2 \u05de\u05d1\u05d5\u05e1\u05e1 AI, \u05d0\u05d5\u05d3\u05d9\u05d5 \u05d8\u05d1\u05e2\u05d9 \u05d5\u05d4\u05e7\u05e9\u05e8 \u05ea\u05e8\u05d1\u05d5\u05ea\u05d9.",
    badge: "\u05d0\u05d5\u05d3\u05d5\u05ea PlaceEcho",
    headingPrefix: "\u05dc\u05db\u05dc \u05de\u05e7\u05d5\u05dd \u05de\u05d2\u05d9\u05e2",
    headingAccent: "\u05e1\u05d9\u05e4\u05d5\u05e8 \u05e2\u05e9\u05d9\u05e8 \u05d9\u05d5\u05ea\u05e8",
    intro:
      "PlaceEcho \u05e2\u05d5\u05d6\u05e8\u05ea \u05dc\u05d0\u05e0\u05e9\u05d9\u05dd \u05dc\u05e0\u05d5\u05e2 \u05d1\u05e2\u05d5\u05dc\u05dd \u05e2\u05dd \u05d9\u05d5\u05ea\u05e8 \u05d4\u05e7\u05e9\u05e8, \u05e1\u05e7\u05e8\u05e0\u05d5\u05ea \u05d5\u05e8\u05d2\u05e9.",
    body:
      "\u05d0\u05e0\u05d7\u05e0\u05d5 \u05de\u05e9\u05dc\u05d1\u05d9\u05dd \u05e1\u05d8\u05d5\u05e8\u05d9\u05d8\u05dc\u05d9\u05e0\u05d2 \u05de\u05d1\u05d5\u05e1\u05e1 AI, \u05d0\u05d5\u05d3\u05d9\u05d5 \u05d8\u05d1\u05e2\u05d9 \u05d5\u05d6\u05d5\u05d5\u05d9\u05ea \u05ea\u05e8\u05d1\u05d5\u05ea\u05d9\u05ea \u05db\u05d3\u05d9 \u05dc\u05d4\u05e4\u05d5\u05da \u05de\u05d9\u05e7\u05d5\u05dd \u05dc\u05d7\u05d5\u05d5\u05d9\u05d4 \u05d0\u05d9\u05e9\u05d9\u05ea \u05db\u05d1\u05e8 \u05de\u05d4\u05e8\u05d2\u05e2 \u05e9\u05de\u05d2\u05d9\u05e2\u05d9\u05dd \u05d0\u05dc\u05d9\u05d5.",
    supporting:
      "\u05de\u05d0\u05ea\u05e8\u05d9\u05dd \u05d0\u05d9\u05d9\u05e7\u05d5\u05e0\u05d9\u05d9\u05dd \u05d5\u05e2\u05d3 \u05e8\u05d7\u05d5\u05d1\u05d5\u05ea \u05e9\u05e7\u05d8\u05d9\u05dd \u05dc\u05d9\u05d3 \u05d4\u05d1\u05d9\u05ea, \u05d0\u05e0\u05d7\u05e0\u05d5 \u05de\u05d0\u05de\u05d9\u05e0\u05d9\u05dd \u05e9\u05d2\u05d9\u05dc\u05d5\u05d9 \u05d0\u05de\u05d9\u05ea\u05d9 \u05de\u05ea\u05d7\u05d9\u05dc \u05db\u05e9\u05de\u05e7\u05d5\u05dd \u05de\u05e8\u05d2\u05d9\u05e9 \u05d7\u05d9 \u05d5\u05dc\u05d0 \u05d2\u05e0\u05e8\u05d9.",
    quote:
      "\u05d0\u05e0\u05d7\u05e0\u05d5 \u05d1\u05d5\u05e0\u05d9\u05dd \u05de\u05d5\u05e6\u05e8 \u05d8\u05d9\u05d5\u05dc\u05d9\u05dd \u05e9\u05d2\u05d5\u05e8\u05dd \u05dc\u05d0\u05e0\u05e9\u05d9\u05dd \u05dc\u05d4\u05e8\u05d9\u05dd \u05d0\u05ea \u05d4\u05e8\u05d0\u05e9, \u05dc\u05d4\u05d0\u05d8, \u05d5\u05dc\u05d4\u05ea\u05d7\u05d1\u05e8 \u05e2\u05de\u05d5\u05e7 \u05d9\u05d5\u05ea\u05e8 \u05dc\u05de\u05e7\u05d5\u05dd \u05e9\u05d1\u05d5 \u05d4\u05dd \u05e0\u05de\u05e6\u05d0\u05d9\u05dd.",
    ctaPrimary: "\u05e0\u05e1\u05d5 \u05d0\u05ea PlaceEcho \u05d1\u05d7\u05d9\u05e0\u05dd",
    ctaSecondary: "\u05d3\u05d1\u05e8\u05d5 \u05d0\u05d9\u05ea\u05e0\u05d5",
    imageAlt:
      "\u05de\u05d8\u05d9\u05d9\u05dc \u05de\u05d2\u05dc\u05d4 \u05de\u05e7\u05d5\u05dd \u05de\u05e9\u05de\u05e2\u05d5\u05ea\u05d9 \u05e2\u05dd PlaceEcho",
    panelLabel: "\u05de\u05d4 \u05de\u05e0\u05d7\u05d4 \u05d0\u05d5\u05ea\u05e0\u05d5",
    stats: [
      { value: "4", label: "\u05de\u05e6\u05d1\u05d9 \u05d7\u05d5\u05d5\u05d9\u05d4" },
      { value: "6", label: "\u05e9\u05e4\u05d5\u05ea \u05d4\u05d0\u05d6\u05e0\u05d4" },
      { value: "1", label: "\u05de\u05d8\u05e8\u05d4: \u05d2\u05d9\u05dc\u05d5\u05d9 \u05e2\u05de\u05d5\u05e7 \u05d9\u05d5\u05ea\u05e8" },
    ],
    storyBlocks: [
      {
        title: "\u05d4\u05de\u05e9\u05d9\u05de\u05d4 \u05e9\u05dc\u05e0\u05d5",
        text: "\u05dc\u05d4\u05e4\u05d5\u05da \u05de\u05e7\u05d5\u05de\u05d5\u05ea \u05dc\u05de\u05e9\u05de\u05e2\u05d5\u05ea\u05d9\u05d9\u05dd \u05d9\u05d5\u05ea\u05e8, \u05dc\u05d0 \u05dc\u05e2\u05d5\u05d3 \u05ea\u05d5\u05db\u05df \u05d2\u05e0\u05e8\u05d9. \u05d0\u05e0\u05d7\u05e0\u05d5 \u05e8\u05d5\u05e6\u05d9\u05dd \u05e9\u05d0\u05e0\u05e9\u05d9\u05dd \u05d9\u05d1\u05d9\u05e0\u05d5 \u05d0\u05d9\u05e4\u05d4 \u05d4\u05dd \u05e0\u05de\u05e6\u05d0\u05d9\u05dd, \u05dc\u05d0 \u05e8\u05e7 \u05d9\u05e2\u05d1\u05e8\u05d5 \u05e9\u05dd.",
      },
      {
        title: "\u05d0\u05d9\u05da \u05d0\u05e0\u05d7\u05e0\u05d5 \u05e2\u05d5\u05d1\u05d3\u05d9\u05dd",
        text: "\u05dc\u05e9\u05dc\u05d1 \u05e1\u05d9\u05e4\u05d5\u05e8 \u05e7\u05d5\u05dc\u05e0\u05d5\u05e2\u05d9, \u05d4\u05e7\u05e9\u05e8 \u05de\u05d0\u05d5\u05de\u05ea, \u05d4\u05db\u05d5\u05d5\u05e0\u05d4 \u05e4\u05e8\u05e7\u05d8\u05d9\u05ea \u05d5\u05e4\u05d5\u05dc\u05e7\u05dc\u05d5\u05e8 \u05de\u05e7\u05d5\u05de\u05d9 \u05d1\u05e4\u05d5\u05e8\u05de\u05d8 \u05e9\u05d1\u05d0\u05de\u05ea \u05e2\u05d5\u05d1\u05d3 \u05d1\u05d6\u05de\u05df \u05d4\u05dc\u05d9\u05db\u05d4, \u05d4\u05d0\u05d6\u05e0\u05d4 \u05d5\u05d2\u05d9\u05dc\u05d5\u05d9.",
      },
      {
        title: "\u05dc\u05d0\u05df \u05d0\u05e0\u05d7\u05e0\u05d5 \u05d4\u05d5\u05dc\u05db\u05d9\u05dd",
        text: "\u05dc\u05e6\u05de\u05d5\u05d7 \u05de\u05db\u05dc\u05d9 \u05e1\u05d8\u05d5\u05e8\u05d9\u05d8\u05dc\u05d9\u05e0\u05d2 \u05dc\u05d1\u05d9\u05ea \u05de\u05e9\u05d5\u05ea\u05e3 \u05dc\u05de\u05e7\u05d5\u05de\u05d5\u05ea \u05d1\u05dc\u05ea\u05d9 \u05e0\u05e9\u05db\u05d7\u05d9\u05dd, \u05d4\u05de\u05dc\u05e6\u05d5\u05ea \u05e7\u05d4\u05d9\u05dc\u05d4 \u05d5\u05e1\u05d9\u05e4\u05d5\u05e8\u05d9\u05dd \u05e9\u05db\u05d3\u05d0\u05d9 \u05dc\u05d4\u05e2\u05d1\u05d9\u05e8 \u05d4\u05dc\u05d0\u05d4.",
      },
    ],
    pillars: [
      {
        icon: Sparkles,
        title: "\u05e1\u05d8\u05d5\u05e8\u05d9\u05d8\u05dc\u05d9\u05e0\u05d2 \u05de\u05d1\u05d5\u05e1\u05e1 AI",
        text: "\u05db\u05dc Echo \u05de\u05ea\u05d0\u05d9\u05dd \u05d0\u05ea \u05e2\u05e6\u05de\u05d5 \u05dc\u05de\u05e7\u05d5\u05dd, \u05dc\u05de\u05e6\u05d1 \u05e9\u05d1\u05d7\u05e8\u05ea\u05dd \u05d5\u05dc\u05ea\u05d7\u05d5\u05e9\u05d4 \u05e9\u05d0\u05ea\u05dd \u05de\u05d7\u05e4\u05e9\u05d9\u05dd \u05d1\u05d0\u05d5\u05ea\u05d5 \u05e8\u05d2\u05e2.",
        tint: "bg-primary-soft",
        iconClass: "text-primary",
      },
      {
        icon: Headphones,
        title: "\u05d0\u05d5\u05d3\u05d9\u05d5 \u05d8\u05d1\u05e2\u05d9",
        text: "\u05d1\u05e0\u05d5\u05d9 \u05dc\u05d4\u05d0\u05d6\u05e0\u05d4 \u05ea\u05d5\u05da \u05db\u05d3\u05d9 \u05ea\u05e0\u05d5\u05e2\u05d4, \u05e2\u05dd \u05e7\u05e8\u05d9\u05d9\u05e0\u05d5\u05ea \u05e8\u05d2\u05d5\u05e2\u05d4 \u05d5\u05e1\u05d5\u05d7\u05e4\u05ea \u05e9\u05de\u05ea\u05d0\u05d9\u05de\u05d4 \u05dc\u05d4\u05dc\u05d9\u05db\u05d4, \u05d8\u05d9\u05d5\u05dc \u05d5\u05d2\u05d9\u05dc\u05d5\u05d9 \u05e1\u05e4\u05d5\u05e0\u05d8\u05e0\u05d9.",
        tint: "bg-[oklch(0.96_0.04_160)]",
        iconClass: "text-[oklch(0.45_0.13_165)]",
      },
      {
        icon: Lightbulb,
        title: "\u05d6\u05d5\u05d5\u05d9\u05ea \u05ea\u05e8\u05d1\u05d5\u05ea\u05d9\u05ea",
        text: "\u05d4\u05d9\u05e1\u05d8\u05d5\u05e8\u05d9\u05d4, \u05d0\u05d5\u05d5\u05d9\u05e8\u05d4, \u05e4\u05d5\u05dc\u05e7\u05dc\u05d5\u05e8 \u05d5\u05e4\u05e8\u05d8\u05d9\u05dd \u05e7\u05d8\u05e0\u05d9\u05dd \u05de\u05ea\u05d7\u05d1\u05e8\u05d9\u05dd \u05d9\u05d7\u05d3 \u05db\u05d3\u05d9 \u05dc\u05d4\u05e4\u05d5\u05da \u05de\u05e7\u05d5\u05dd \u05dc\u05de\u05d5\u05e8\u05db\u05d1, \u05d7\u05d9 \u05d5\u05d1\u05dc\u05ea\u05d9 \u05e0\u05e9\u05db\u05d7.",
        tint: "bg-[oklch(0.96_0.04_95)]",
        iconClass: "text-[oklch(0.54_0.14_88)]",
      },
      {
        icon: Users,
        title: "\u05d7\u05e7\u05d9\u05e8\u05d4 \u05d0\u05d9\u05e9\u05d9\u05ea",
        text: "\u05dc\u05d8\u05d9\u05d9\u05dc \u05dc\u05d1\u05d3 \u05d0\u05d5 \u05e2\u05dd \u05d7\u05d1\u05e8\u05d9\u05dd, \u05dc\u05d1\u05d7\u05d5\u05e8 \u05e9\u05e4\u05d4, \u05de\u05e6\u05d1 \u05d5\u05d0\u05d5\u05e8\u05da \u05e9\u05de\u05ea\u05d0\u05d9\u05de\u05d9\u05dd \u05dc\u05e7\u05e6\u05d1 \u05e9\u05dc \u05d4\u05de\u05e1\u05e2 \u05e9\u05dc\u05db\u05dd.",
        tint: "bg-[oklch(0.95_0.04_230)]",
        iconClass: "text-[oklch(0.46_0.12_235)]",
      },
      {
        icon: ShieldCheck,
        title: "\u05db\u05d1\u05d5\u05d3 \u05dc\u05de\u05e7\u05d5\u05dd",
        text: "\u05d0\u05e0\u05d7\u05e0\u05d5 \u05de\u05db\u05d5\u05d5\u05e0\u05d9\u05dd \u05dc\u05e1\u05d8\u05d5\u05e8\u05d9\u05d8\u05dc\u05d9\u05e0\u05d2 \u05e9\u05d9\u05de\u05d5\u05e9\u05d9 \u05d5\u05de\u05d1\u05d5\u05e1\u05e1 \u05e9\u05de\u05db\u05d1\u05d3 \u05ea\u05e8\u05d1\u05d5\u05ea \u05de\u05e7\u05d5\u05de\u05d9\u05ea \u05d5\u05dc\u05d0 \u05de\u05e9\u05d8\u05d7 \u05db\u05dc \u05de\u05e7\u05d5\u05dd \u05dc\u05e2\u05d5\u05d3 \u05ea\u05d5\u05db\u05df \u05ea\u05d9\u05d9\u05e8\u05d5\u05ea\u05d9 \u05d2\u05e0\u05e8\u05d9.",
        tint: "bg-[oklch(0.95_0.04_220)]",
        iconClass: "text-[oklch(0.48_0.14_230)]",
      },
      {
        icon: Heart,
        title: "\u05e0\u05d1\u05e0\u05d4 \u05d1\u05d0\u05db\u05e4\u05ea\u05d9\u05d5\u05ea",
        text: "PlaceEcho \u05de\u05d9\u05d5\u05e2\u05d3\u05ea \u05dc\u05d0\u05e0\u05e9\u05d9\u05dd \u05e9\u05d0\u05d5\u05d4\u05d1\u05d9\u05dd \u05d0\u05ea \u05d4\u05ea\u05d7\u05d5\u05e9\u05d4 \u05e9\u05dc \u05dc\u05d4\u05d2\u05d9\u05e2 \u05dc\u05de\u05e7\u05d5\u05dd \u05d7\u05d3\u05e9 \u05d5\u05dc\u05e8\u05e6\u05d5\u05ea \u05dc\u05d4\u05d1\u05d9\u05df \u05d0\u05d5\u05ea\u05d5 \u05dc\u05e2\u05d5\u05de\u05e7.",
        tint: "bg-[oklch(0.96_0.04_12)]",
        iconClass: "text-[oklch(0.56_0.18_18)]",
      },
    ],
  },
} as const;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - PlaceEcho" },
      {
        name: "description",
        content:
          "PlaceEcho helps people experience places with more meaning through AI storytelling, natural audio, and cultural context.",
      },
      { property: "og:title", content: "About PlaceEcho" },
      {
        property: "og:description",
        content: "The mission and product thinking behind PlaceEcho.",
      },
      { property: "og:image", content: placeechoPostcard },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { locale } = useLocale();
  const copy = locale === "he" ? ABOUT_COPY.he : ABOUT_COPY.en;

  useLocalizedDocument({
    title: copy.title,
    description: copy.description,
  });

  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,oklch(0.95_0.06_92),transparent_68%)] opacity-80"
        />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
                <Compass className="h-3.5 w-3.5" />
                {copy.badge}
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                {copy.headingPrefix}{" "}
                <span className="text-primary italic">{copy.headingAccent}</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-foreground/85">{copy.intro}</p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                {copy.body}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                {copy.supporting}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full px-6">
                  <a href={APP_URL}>{copy.ctaPrimary}</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full bg-card px-6">
                  <Link to="/contact">{copy.ctaSecondary}</Link>
                </Button>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {copy.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-border/70 bg-card/90 px-5 py-4 shadow-[var(--shadow-soft)]"
                  >
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-[var(--shadow-card)]">
              <div className="absolute inset-x-5 top-5 z-10 flex items-center justify-between">
                <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground shadow-[var(--shadow-soft)]">
                  PlaceEcho
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {copy.panelLabel}
                </span>
              </div>
              <div className="absolute inset-x-5 bottom-5 z-10 rounded-3xl border border-white/40 bg-background/88 p-5 shadow-[var(--shadow-soft)] backdrop-blur">
                <p className="text-sm font-medium leading-6 text-foreground/85">{copy.quote}</p>
              </div>
              <img
                src={placeechoPostcard}
                alt={copy.imageAlt}
                className="h-full min-h-[440px] w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-border/70 bg-card/95 p-7 shadow-[var(--shadow-card)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
                {copy.panelLabel}
              </p>
              <div className="mt-6 space-y-5">
                {copy.storyBlocks.map((block, index) => (
                  <div
                    key={block.title}
                    className="rounded-3xl border border-border/60 bg-background/75 p-5"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      0{index + 1}
                    </div>
                    <h2 className="mt-3 text-xl font-bold">{block.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{block.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {copy.pillars.map(({ icon: Icon, title, text, tint, iconClass }) => (
                <article
                  key={title}
                  className="rounded-[1.75rem] border border-border/70 bg-card/95 p-6 shadow-[var(--shadow-soft)]"
                >
                  <span className={cn("grid h-11 w-11 place-items-center rounded-2xl", tint)}>
                    <Icon className={cn("h-5 w-5", iconClass)} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
