import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin,
  Globe,
  Camera,
  AudioLines,
  Languages,
  Play,
  BookOpen,
  Check,
  BookText,
  Landmark,
  Compass,
  Ghost,
  Bell,
  Menu,
  Sparkles,
  Headphones,
  ShieldCheck,
  Users,
  Lightbulb,
  Star,
  Heart,
  Map as MapIcon,
  Library,
  ChevronRight,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header, Footer } from "@/components/site-chrome";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import heroBg from "@/assets/hero-bg.jpg";
import echoRome from "@/assets/echo-rome.jpg";
import echoLondon from "@/assets/echo-london.jpg";
import echoKyoto from "@/assets/echo-kyoto.jpg";
import echoParis from "@/assets/echo-paris.jpg";
import createScreen from "@/assets/create-screen.jpeg";
import chooseExperienceScreen from "@/assets/choose-experience-screen.jpeg";
import heroEgypt from "@/assets/hero-egypt.png";
import locationPickerScreen from "@/assets/location-picker-screen.jpeg";
import myStoriesScreen from "@/assets/my-stories-screen.jpeg";
import placeechoPostcard from "@/assets/placeecho-postcard.png";
import storyAudioScreen from "@/assets/story-audio-screen.jpeg";

const APP_URL = "https://app.placeecho.io";
const API_URL = "https://api.placeecho.io";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PlaceEcho — Every Place Has More Than One Story" },
      {
        name: "description",
        content:
          "PlaceEcho turns any location into a personalized AI-powered audio experience: immersive stories, historical journeys, local guides, and urban legends.",
      },
      { property: "og:title", content: "PlaceEcho — Every Place Has More Than One Story" },
      {
        property: "og:description",
        content: "AI-powered place stories with natural audio in multiple languages.",
      },
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

/* ---------- Hero ---------- */
function Hero() {
  const features = [
    {
      icon: MapPin,
      label: "Current Location",
      tint: "bg-primary-soft",
      iconClass: "text-primary",
    },
    {
      icon: Globe,
      label: "Anywhere in the World",
      tint: "bg-[oklch(0.95_0.04_220)]",
      iconClass: "text-[oklch(0.48_0.14_230)]",
    },
    {
      icon: Camera,
      label: "Photo Discovery",
      tint: "bg-[oklch(0.96_0.04_160)]",
      iconClass: "text-[oklch(0.45_0.13_165)]",
    },
    {
      icon: AudioLines,
      label: "AI Narration",
      tint: "bg-[oklch(0.96_0.04_30)]",
      iconClass: "text-[oklch(0.55_0.16_35)]",
    },
    {
      icon: Languages,
      label: "Multiple Languages",
      tint: "bg-[oklch(0.96_0.04_300)]",
      iconClass: "text-[oklch(0.48_0.16_300)]",
    },
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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
            <Sparkles className="h-3.5 w-3.5" /> AI-powered place experiences
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
            Every Place Has
            <br />
            More Than <span className="text-primary italic">One Story</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            PlaceEcho transforms any location into a personalized AI-powered experience:{" "}
            <span className="text-foreground/80 font-medium">immersive stories</span>,{" "}
            <span className="text-foreground/80 font-medium">historical journeys</span>, local
            guides, and urban legends — with natural audio in multiple languages.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-6 shadow-[var(--shadow-card)]">
              <a href={APP_URL}>Try PlaceEcho Free</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-6 gap-2 bg-card">
              <Play className="h-4 w-4 fill-primary text-primary" /> Watch Demo
            </Button>
          </div>
          <ul className="mt-10 grid grid-cols-3 gap-4 sm:grid-cols-5">
            {features.map(({ icon: Icon, label, tint, iconClass }) => (
              <li key={label} className="flex flex-col items-center text-center">
                <span
                  className={cn(
                    "grid h-11 w-11 place-items-center rounded-xl shadow-[var(--shadow-soft)]",
                    tint,
                  )}
                >
                  <Icon className={cn("h-5 w-5", iconClass)} />
                </span>
                <span className="mt-2 text-xs font-medium text-muted-foreground leading-tight">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex min-h-[560px] items-center justify-center lg:justify-start">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-8 left-[18%] right-0 hidden overflow-hidden rounded-[2.75rem] border border-white/60 bg-[oklch(0.98_0.02_85)] shadow-[0_30px_60px_-28px_rgba(107,72,38,0.22)] lg:block"
          >
            <img
              src={heroEgypt}
              alt=""
              className="h-full w-full object-cover object-right-center opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/24 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_42%,rgba(255,248,235,0.02),rgba(255,248,235,0.12)_34%,rgba(255,248,235,0.34)_66%,rgba(255,248,235,0.46)_100%)]" />
          </div>
          <div className="relative z-10 lg:ml-2">
            <PhoneMock />
          </div>
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
      <div className="relative w-[300px] overflow-hidden rounded-[2.5rem] border-[10px] border-foreground/90 bg-background shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)] sm:w-[340px]">
        <img
          src={createScreen}
          alt="PlaceEcho mobile app create screen"
          loading="eager"
          className="block h-auto w-full"
        />
        <div className="hidden">
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground/90" />
          <div className="overflow-hidden rounded-[1.8rem] bg-background">
            <div className="flex items-center justify-between px-4 pt-6 pb-2 text-[10px] font-semibold">
              <span>12:56</span>
              <span className="flex gap-1 opacity-70">●●● ▮</span>
            </div>
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center gap-1.5">
                <span className="grid h-6 w-6 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <BookOpen className="h-3 w-3" />
                </span>
                <span className="text-xs font-bold">PlaceEcho</span>
              </div>
              <div className="flex items-center gap-1.5 text-foreground/60">
                <Bell className="h-3.5 w-3.5" />
                <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">
                  A
                </span>
              </div>
            </div>
            <div className="space-y-2 px-3 pb-3">
              <MockField
                icon={<MapPin className="h-3 w-3" />}
                label="CURRENT LOCATION"
                value="Mediterranean Courtyard"
              />
              <div className="rounded-xl border border-border bg-card p-2.5">
                <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase text-primary">
                  <MapPin className="h-3 w-3" /> Pick location on map
                </div>
              </div>
              <MockField
                icon={<Camera className="h-3 w-3" />}
                label="ADD A PHOTO"
                value="Helps pick richer details"
              />
              <MockField
                icon={<Landmark className="h-3 w-3" />}
                label="CURRENT EXPERIENCE"
                value="Historical"
              />
              <div className="grid place-items-center py-3">
                <div className="grid h-20 w-20 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_30px_-8px_rgba(220,120,40,0.55)]">
                  <div className="text-center">
                    <Sparkles className="mx-auto h-4 w-4" />
                    <div className="mt-0.5 text-[9px] font-bold leading-tight">
                      Generate
                      <br />
                      story
                    </div>
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
              <span className="flex flex-col items-center gap-0.5 text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Create
              </span>
              <span className="flex flex-col items-center gap-0.5">
                <BookOpen className="h-3.5 w-3.5" />
                Stories
              </span>
              <span className="flex flex-col items-center gap-0.5">
                <AudioLines className="h-3.5 w-3.5" />
                Settings
              </span>
              <span className="flex flex-col items-center gap-0.5">
                <Menu className="h-3.5 w-3.5" />
                Menu
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockField({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-2.5">
      <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase text-muted-foreground">
        {icon} {label}
      </div>
      <div className="mt-0.5 text-xs font-semibold text-foreground">{value}</div>
    </div>
  );
}

type PhotoCoordinates = {
  latitude: number;
  longitude: number;
};

type DemoPhotoState =
  | {
      status: "idle";
    }
  | {
      status: "reading";
      file: File;
      fileName: string;
      previewUrl: string;
    }
  | {
      status: "resolved";
      file: File;
      fileName: string;
      previewUrl: string;
      coords: PhotoCoordinates;
      context: DemoLocationContext | null;
    }
  | {
      status: "missing-gps";
      file: File;
      fileName: string;
      previewUrl: string;
    }
  | {
      status: "error";
      file: File;
      fileName: string;
      previewUrl: string | null;
      message: string;
    };

type DemoLocationContext = {
  placeName?: string | null;
  city?: string | null;
  country?: string | null;
  region?: string | null;
  confidence?: number | null;
  source?: string | null;
};

type DemoStory = {
  id: string;
  title: string;
  summary?: string | null;
  text?: string | null;
  language?: string | null;
  experience_mode?: string | null;
  audio_url?: string | null;
  share_url?: string | null;
};

type DemoGenerateResponse = {
  story?: DemoStory | null;
  context?: DemoLocationContext | null;
  cached?: boolean;
  degraded_mode?: boolean;
  warningKey?: string | null;
  request_id?: string;
};

type DemoApiError = {
  error?: string;
  message?: string;
  details?: unknown;
  request_id?: string;
};

type DemoUiError =
  | {
      kind: "default";
      message: string;
    }
  | {
      kind: "daily-quota";
      message: string;
    };

type LocationSearchItem = {
  name: string;
  address?: string | null;
  lat: number;
  lng: number;
  type?: string | null;
  source?: string | null;
};

type LocationSearchResponse = {
  items?: LocationSearchItem[];
};

const DEMO_GPS_REQUIRED_MESSAGE =
  "For this demo, please choose a photo with GPS metadata so we can show where it was taken. In the full PlaceEcho app, it also works without GPS.";
const PUBLIC_API_CLIENT_ID_KEY = "placeecho_public_client_id";
const demoEnv = import.meta.env as Record<string, string | boolean | undefined>;
const IS_DEMO_MODE =
  demoEnv.MODE?.toString().toLowerCase() === "demo" ||
  demoEnv.VITE_DEMO_MODE?.toString().toLowerCase() === "true";
const PUBLIC_API_BASE_URL = IS_DEMO_MODE
  ? "http://127.0.0.1:8002/public/v1"
  : ((import.meta.env.VITE_PUBLIC_API_BASE_URL as string | undefined) ?? `${API_URL}/public/v1`);

class DemoRequestError extends Error {
  code?: string;
  requestId?: string;

  constructor({
    code,
    message,
    requestId,
  }: {
    code?: string;
    message: string;
    requestId?: string;
  }) {
    super(message);
    this.code = code;
    this.requestId = requestId;
  }
}

function readAscii(view: DataView, start: number, length: number) {
  let result = "";
  for (let index = 0; index < length; index += 1) {
    result += String.fromCharCode(view.getUint8(start + index));
  }
  return result;
}

function findIfdEntry(view: DataView, ifdOffset: number, targetTag: number, littleEndian: boolean) {
  if (ifdOffset + 2 > view.byteLength) return null;
  const entryCount = view.getUint16(ifdOffset, littleEndian);

  for (let entryIndex = 0; entryIndex < entryCount; entryIndex += 1) {
    const entryOffset = ifdOffset + 2 + entryIndex * 12;
    if (entryOffset + 12 > view.byteLength) return null;
    const tag = view.getUint16(entryOffset, littleEndian);
    if (tag === targetTag) return entryOffset;
  }

  return null;
}

function readInlineAscii(view: DataView, entryOffset: number, count: number) {
  let result = "";
  for (let index = 0; index < count; index += 1) {
    const charCode = view.getUint8(entryOffset + 8 + index);
    if (charCode === 0) break;
    result += String.fromCharCode(charCode);
  }
  return result;
}

function readRationalArray(
  view: DataView,
  tiffStart: number,
  entryOffset: number,
  count: number,
  littleEndian: boolean,
) {
  const valueOffset = tiffStart + view.getUint32(entryOffset + 8, littleEndian);
  const values: number[] = [];

  for (let index = 0; index < count; index += 1) {
    const rationalOffset = valueOffset + index * 8;
    if (rationalOffset + 8 > view.byteLength) return null;
    const numerator = view.getUint32(rationalOffset, littleEndian);
    const denominator = view.getUint32(rationalOffset + 4, littleEndian);
    if (!denominator) return null;
    values.push(numerator / denominator);
  }

  return values;
}

function dmsToDecimal(values: number[], ref: string) {
  const [degrees = 0, minutes = 0, seconds = 0] = values;
  const sign = ref === "S" || ref === "W" ? -1 : 1;
  return sign * (degrees + minutes / 60 + seconds / 3600);
}

function extractGpsFromJpeg(view: DataView): PhotoCoordinates | null {
  if (view.byteLength < 4 || view.getUint16(0, false) !== 0xffd8) return null;

  let offset = 2;

  while (offset + 4 <= view.byteLength) {
    if (view.getUint8(offset) !== 0xff) return null;

    const marker = view.getUint8(offset + 1);
    if (marker === 0xda || marker === 0xd9) break;

    const segmentLength = view.getUint16(offset + 2, false);
    if (segmentLength < 2) return null;

    if (marker === 0xe1 && readAscii(view, offset + 4, 4) === "Exif") {
      const tiffStart = offset + 10;
      const byteOrder = readAscii(view, tiffStart, 2);
      const littleEndian = byteOrder === "II";

      if (!littleEndian && byteOrder !== "MM") return null;
      if (tiffStart + 8 > view.byteLength) return null;
      if (view.getUint16(tiffStart + 2, littleEndian) !== 42) return null;

      const firstIfdOffset = tiffStart + view.getUint32(tiffStart + 4, littleEndian);
      const gpsPointerEntry = findIfdEntry(view, firstIfdOffset, 0x8825, littleEndian);
      if (!gpsPointerEntry) return null;

      const gpsIfdOffset = tiffStart + view.getUint32(gpsPointerEntry + 8, littleEndian);
      const latRefEntry = findIfdEntry(view, gpsIfdOffset, 0x0001, littleEndian);
      const latEntry = findIfdEntry(view, gpsIfdOffset, 0x0002, littleEndian);
      const lngRefEntry = findIfdEntry(view, gpsIfdOffset, 0x0003, littleEndian);
      const lngEntry = findIfdEntry(view, gpsIfdOffset, 0x0004, littleEndian);

      if (!latRefEntry || !latEntry || !lngRefEntry || !lngEntry) return null;

      const latRef = readInlineAscii(view, latRefEntry, 2);
      const lngRef = readInlineAscii(view, lngRefEntry, 2);
      const latValues = readRationalArray(view, tiffStart, latEntry, 3, littleEndian);
      const lngValues = readRationalArray(view, tiffStart, lngEntry, 3, littleEndian);

      if (!latRef || !lngRef || !latValues || !lngValues) return null;

      return {
        latitude: dmsToDecimal(latValues, latRef),
        longitude: dmsToDecimal(lngValues, lngRef),
      };
    }

    offset += segmentLength + 2;
  }

  return null;
}

async function extractPhotoCoordinates(file: File) {
  const buffer = await file.arrayBuffer();
  return extractGpsFromJpeg(new DataView(buffer));
}

function formatCoordinates(coords: PhotoCoordinates) {
  return `${coords.latitude.toFixed(4)}, ${coords.longitude.toFixed(4)}`;
}

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

async function readApiError(response: Response) {
  try {
    const payload = (await response.json()) as DemoApiError;
    return {
      code: payload.error,
      message: payload.message || `The demo request failed with status ${response.status}.`,
      requestId: payload.request_id,
    };
  } catch {
    return {
      message: `The demo request failed with status ${response.status}.`,
    };
  }
}

function toDemoUiError(error: unknown): DemoUiError {
  if (error instanceof DemoRequestError) {
    if (error.code === "PUBLIC_DAILY_LIMIT_EXCEEDED") {
      return {
        kind: "daily-quota",
        message:
          "The public demo is unavailable right now. Try the full PlaceEcho app to keep exploring places and generating stories.",
      };
    }

    const requestId = error.requestId ? ` Request ID: ${error.requestId}.` : "";
    return {
      kind: "default",
      message: `${error.message}${requestId}`,
    };
  }

  if (error instanceof Error) {
    return {
      kind: "default",
      message: error.message,
    };
  }

  return {
    kind: "default",
    message: "Something went wrong while using the demo.",
  };
}

function buildPlaceLabel(context: DemoLocationContext | null, coords: PhotoCoordinates) {
  if (!context) return formatCoordinates(coords);

  const parts = [context.placeName, context.city, context.country].filter(
    (value): value is string => Boolean(value),
  );

  return Array.from(new Set(parts)).join(", ") || formatCoordinates(coords);
}

function getCurrentBrowserCoordinates() {
  return new Promise<PhotoCoordinates>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: Number(position.coords.latitude.toFixed(6)),
          longitude: Number(position.coords.longitude.toFixed(6)),
        });
      },
      () => {
        reject(new Error("LOCATION_ACCESS_FAILED"));
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 10000,
      },
    );
  });
}

function resolvePublicAssetUrl(value: string) {
  try {
    return new URL(value, `${PUBLIC_API_BASE_URL}/`).toString();
  } catch {
    return value;
  }
}

function parseCoordinates(value: string) {
  const match = value.match(/^\s*(-?\d+(?:\.\d+)?)\s*[, ]\s*(-?\d+(?:\.\d+)?)\s*$/);
  if (!match) return null;

  const latitude = Number(match[1]);
  const longitude = Number(match[2]);

  if (
    Number.isNaN(latitude) ||
    Number.isNaN(longitude) ||
    latitude < -90 ||
    latitude > 90 ||
    longitude < -180 ||
    longitude > 180
  ) {
    return null;
  }

  return { latitude, longitude };
}

function getLanguageCode(language: string) {
  switch (language) {
    case "german":
      return "de";
    case "hebrew":
      return "he";
    case "french":
      return "fr";
    case "russian":
      return "ru";
    case "spanish":
      return "es";
    case "english":
    default:
      return "en";
  }
}

function getExperienceMode(value: string) {
  switch (value) {
    case "historical":
      return "historical";
    case "guide":
      return "guide";
    case "urban-legend":
      return "legend";
    case "story":
    default:
      return "story";
  }
}

async function fetchContextFromGps(coords: PhotoCoordinates, languageCode: string) {
  const response = await publicApi(`/context/from-gps?lang=${languageCode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": languageCode,
    },
    body: JSON.stringify({
      lat: coords.latitude,
      lng: coords.longitude,
    }),
  });

  if (!response.ok) {
    throw new DemoRequestError(await readApiError(response));
  }

  return (await response.json()) as DemoLocationContext;
}

async function searchLocations(query: string, languageCode: string, limit = 5) {
  const params = new URLSearchParams({
    q: query,
    limit: String(limit),
  });
  const response = await publicApi(`/locations/search?${params.toString()}`, {
    method: "GET",
    headers: {
      "Accept-Language": languageCode,
    },
  });

  if (!response.ok) {
    throw new DemoRequestError(await readApiError(response));
  }

  const payload = (await response.json()) as LocationSearchResponse;
  return payload.items ?? [];
}

/* ---------- Try Demo ---------- */
function TryDemo() {
  const checks = ["Pick a place or upload a photo", "Choose an experience", "Generate and listen"];
  const [location, setLocation] = useState("");
  const [length, setLength] = useState("short");
  const [experience, setExperience] = useState("story");
  const [language, setLanguage] = useState("english");
  const [photoState, setPhotoState] = useState<DemoPhotoState>({ status: "idle" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<DemoUiError | null>(null);
  const [demoResult, setDemoResult] = useState<DemoGenerateResponse | null>(null);
  const [selectedCoords, setSelectedCoords] = useState<PhotoCoordinates | null>(null);
  const [locationSuggestions, setLocationSuggestions] = useState<LocationSearchItem[]>([]);
  const [isSearchingLocations, setIsSearchingLocations] = useState(false);
  const [locationSearchError, setLocationSearchError] = useState<string | null>(null);
  const [isLocationFocused, setIsLocationFocused] = useState(false);
  const [isDemoListening, setIsDemoListening] = useState(false);
  const [demoListenMode, setDemoListenMode] = useState<"audio" | "speech" | null>(null);
  const [isResolvingMyLocation, setIsResolvingMyLocation] = useState(false);
  const [isDemoQuotaExceeded, setIsDemoQuotaExceeded] = useState(false);
  const locationRequestIdRef = useRef(0);
  const demoAudioRef = useRef<HTMLAudioElement | null>(null);
  const demoUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const photoInputRef = useRef<HTMLInputElement | null>(null);
  const languageOptions = [
    { value: "english", label: "English", flag: UKFlag },
    { value: "german", label: "German", flag: GermanyFlag },
    { value: "hebrew", label: "Hebrew", flag: IsraelFlag },
    { value: "french", label: "French", flag: FranceFlag },
    { value: "russian", label: "Russian", flag: RussiaFlag },
    { value: "spanish", label: "Spanish", flag: SpainFlag },
  ] as const;
  const languageCode = getLanguageCode(language);

  function stopDemoPlayback() {
    if (demoAudioRef.current) {
      demoAudioRef.current.pause();
      demoAudioRef.current.currentTime = 0;
    }

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    demoUtteranceRef.current = null;
    setIsDemoListening(false);
    setDemoListenMode(null);
  }

  function clearTransientDemoError() {
    setSubmitError((current) => (current?.kind === "daily-quota" ? current : null));
  }

  function applyDemoUiError(error: unknown) {
    const uiError = toDemoUiError(error);

    if (uiError.kind === "daily-quota") {
      stopDemoPlayback();
      setIsDemoQuotaExceeded(true);
      setLocation("");
      setSelectedCoords(null);
      setLocationSuggestions([]);
      setLocationSearchError(null);
      setIsLocationFocused(false);
      setDemoResult(null);
    }

    setSubmitError(uiError);
    return uiError;
  }

  const handleUseMyLocation = () => {
    if (isDemoQuotaExceeded) return;

    if (!navigator.geolocation) {
      setSubmitError({
        kind: "default",
        message:
          "Location access isn't available in this browser. Search for a place or upload a photo instead.",
      });
      return;
    }

    const requestId = locationRequestIdRef.current + 1;
    locationRequestIdRef.current = requestId;
    setIsResolvingMyLocation(true);
    clearTransientDemoError();
    setLocationSuggestions([]);
    setLocationSearchError(null);
    setDemoResult(null);

    void (async () => {
      try {
        const coords = await getCurrentBrowserCoordinates();
        if (requestId !== locationRequestIdRef.current) return;

        setSelectedCoords(coords);

        try {
          const context = await fetchContextFromGps(coords, languageCode);
          if (requestId !== locationRequestIdRef.current) return;

          setLocation(buildPlaceLabel(context, coords));
          setDemoResult((current) => (current ? { ...current, context } : current));
        } catch (error) {
          if (requestId !== locationRequestIdRef.current) return;

          const uiError = applyDemoUiError(error);
          if (uiError.kind !== "daily-quota") {
            setLocation(formatCoordinates(coords));
          }
        }
      } catch {
        if (requestId !== locationRequestIdRef.current) return;

        setSubmitError({
          kind: "default",
          message:
            "We couldn't access your location. Please allow GPS access, search for a place, or upload a photo.",
        });
      } finally {
        if (requestId === locationRequestIdRef.current) {
          setIsResolvingMyLocation(false);
        }
      }
    })();
  };

  useEffect(() => {
    if (photoState.status === "idle" || !photoState.previewUrl) return;

    return () => {
      if (photoState.previewUrl) {
        URL.revokeObjectURL(photoState.previewUrl);
      }
    };
  }, [photoState]);

  useEffect(() => {
    stopDemoPlayback();
  }, [demoResult?.story?.id]);

  useEffect(
    () => () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    },
    [],
  );

  useEffect(() => {
    const trimmedQuery = location.trim();
    const parsedCoords = parseCoordinates(trimmedQuery);
    let isCancelled = false;

    if (
      isDemoQuotaExceeded ||
      !isLocationFocused ||
      !trimmedQuery ||
      trimmedQuery.length < 2 ||
      parsedCoords
    ) {
      setIsSearchingLocations(false);
      setLocationSearchError(null);
      setLocationSuggestions([]);
      return;
    }

    const timeoutId = window.setTimeout(() => {
      void (async () => {
        setIsSearchingLocations(true);
        setLocationSearchError(null);

        try {
          const items = await searchLocations(trimmedQuery, languageCode);
          if (isCancelled) return;
          setLocationSuggestions(items);
        } catch (error) {
          if (isCancelled) return;
          const uiError = toDemoUiError(error);
          if (uiError.kind === "daily-quota") {
            stopDemoPlayback();
            setIsDemoQuotaExceeded(true);
            setLocation("");
            setSelectedCoords(null);
            setLocationSuggestions([]);
            setLocationSearchError(null);
            setIsLocationFocused(false);
            setDemoResult(null);
            setSubmitError(uiError);
            return;
          }

          setLocationSuggestions([]);
          setLocationSearchError(uiError.message);
        } finally {
          if (!isCancelled) {
            setIsSearchingLocations(false);
          }
        }
      })();
    }, 250);

    return () => {
      isCancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [isDemoQuotaExceeded, isLocationFocused, languageCode, location]);

  const handlePhotoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      setPhotoState({ status: "idle" });
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    setPhotoState({ status: "reading", file, fileName: file.name, previewUrl });
    clearTransientDemoError();
    setDemoResult(null);

    try {
      const coords = await extractPhotoCoordinates(file);

      if (!coords) {
        setPhotoState({
          status: "missing-gps",
          file,
          fileName: file.name,
          previewUrl,
        });
        return;
      }

      setLocation(formatCoordinates(coords));
      setSelectedCoords(coords);
      setLocationSuggestions([]);
      setLocationSearchError(null);

      let context: DemoLocationContext | null = null;
      try {
        context = await fetchContextFromGps(coords, languageCode);
      } catch (error) {
        const uiError = toDemoUiError(error);
        if (uiError.kind === "daily-quota") {
          applyDemoUiError(error);
        }
        context = null;
      }

      if (context) {
        setLocation(buildPlaceLabel(context, coords));
      }

      setPhotoState({
        status: "resolved",
        file,
        fileName: file.name,
        previewUrl,
        coords,
        context,
      });
    } catch {
      setPhotoState({
        status: "error",
        file,
        fileName: file.name,
        previewUrl,
        message: "We could not read this image. Please try a JPG photo with GPS metadata.",
      });
    } finally {
      event.target.value = "";
    }
  };

  const handleRemovePhoto = () => {
    if (photoInputRef.current) {
      photoInputRef.current.value = "";
    }
    setPhotoState({ status: "idle" });
    setDemoResult(null);
    clearTransientDemoError();
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    const parsedCoords = parseCoordinates(nextValue);

    setLocation(nextValue);
    setSelectedCoords(parsedCoords);
    clearTransientDemoError();
    setLocationSearchError(null);
    setDemoResult(null);
  };

  const handleLocationSelect = (item: LocationSearchItem) => {
    const coords = {
      latitude: item.lat,
      longitude: item.lng,
    };

    setLocation(item.address || item.name);
    setSelectedCoords(coords);
    setLocationSuggestions([]);
    setIsLocationFocused(false);
    clearTransientDemoError();
    setLocationSearchError(null);
    setDemoResult(null);
  };

  const handleGenerateStory = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isDemoQuotaExceeded) return;

    const coords =
      photoState.status === "resolved"
        ? photoState.coords
        : (selectedCoords ?? parseCoordinates(location));

    if (photoState.status === "missing-gps") {
      setSubmitError({
        kind: "default",
        message: DEMO_GPS_REQUIRED_MESSAGE,
      });
      return;
    }

    if (!coords) {
      setSubmitError({
        kind: "default",
        message:
          "To use the demo, choose a location or upload a photo. You can search for a place, use My Location, or add a photo with GPS.",
      });
      return;
    }

    setIsSubmitting(true);
    clearTransientDemoError();
    setDemoResult(null);

    try {
      const preferences = {
        length,
        story_language: languageCode,
        system_language: languageCode,
        experience_mode: getExperienceMode(experience),
      };

      const context =
        photoState.status === "resolved" && photoState.context
          ? photoState.context
          : await fetchContextFromGps(coords, languageCode);

      const response =
        photoState.status === "resolved"
          ? await publicApi("/stories/generate", {
              method: "POST",
              body: (() => {
                const form = new FormData();
                form.append("settings", JSON.stringify(preferences));
                form.append("gps", JSON.stringify({ lat: coords.latitude, lng: coords.longitude }));
                form.append("context", JSON.stringify(context));
                form.append("image", photoState.file);
                return form;
              })(),
            })
          : await publicApi("/stories/generate", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Accept-Language": languageCode,
              },
              body: JSON.stringify({
                gps: { lat: coords.latitude, lng: coords.longitude },
                context,
                preferences,
              }),
            });

      if (!response.ok) {
        throw new DemoRequestError(await readApiError(response));
      }

      const result = (await response.json()) as DemoGenerateResponse;
      setDemoResult({
        ...result,
        context: result.context ?? context,
      });
    } catch (error) {
      applyDemoUiError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleDemoPlayback = async () => {
    const story = demoResult?.story;

    if (!story) return;

    if (isDemoListening) {
      stopDemoPlayback();
      return;
    }

    if (story.audio_url && demoAudioRef.current) {
      try {
        demoAudioRef.current.currentTime = 0;
        await demoAudioRef.current.play();
        setIsDemoListening(true);
        setDemoListenMode("audio");
      } catch {
        setSubmitError({
          kind: "default",
          message: "We couldn't start audio playback right now. Please try again.",
        });
      }
      return;
    }

    if (typeof window === "undefined" || !("speechSynthesis" in window) || !story.text) {
      setSubmitError({
        kind: "default",
        message: "Audio playback isn't available for this demo result right now.",
      });
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(story.text);
    utterance.lang = story.language || languageCode;
    utterance.rate = story.experience_mode === "guide" ? 1 : 0.95;
    utterance.onend = () => {
      demoUtteranceRef.current = null;
      setIsDemoListening(false);
      setDemoListenMode(null);
    };
    utterance.onerror = () => {
      demoUtteranceRef.current = null;
      setIsDemoListening(false);
      setDemoListenMode(null);
    };

    demoUtteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsDemoListening(true);
    setDemoListenMode("speech");
  };

  const resolvedPhotoContext = photoState.status === "resolved" ? photoState.context : null;
  const activeCoords =
    photoState.status === "resolved"
      ? photoState.coords
      : (selectedCoords ?? parseCoordinates(location));
  const shouldShowLocationDropdown =
    isLocationFocused &&
    (isSearchingLocations ||
      Boolean(locationSearchError) ||
      (location.trim().length >= 2 && !parseCoordinates(location)));

  return (
    <section id="try-demo" className="scroll-mt-24 bg-primary-soft py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Try the Demo</h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              See how PlaceEcho turns any place into an unforgettable story experience.
            </p>
            <ul className="mt-6 space-y-3">
              {checks.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm font-medium">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[oklch(0.68_0.18_152)] text-white shadow-[0_10px_24px_-10px_rgba(34,197,94,0.9)] ring-4 ring-[oklch(0.93_0.05_150)]">
                    <Check className="h-4.5 w-4.5 stroke-[3]" />
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-7 rounded-full px-6">
              <a href="#try-demo">Try the Demo</a>
            </Button>
          </div>
          <form
            onSubmit={handleGenerateStory}
            className="mx-auto w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
          >
            <h3 className="mb-5 text-center text-xl font-bold">Try the Demo</h3>
            <div className="space-y-5">
              <FormField label="Search Place">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
                  <div className="relative flex-1">
                    <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
                    <Input
                      type="text"
                      value={location}
                      onChange={handleLocationChange}
                      onFocus={() => setIsLocationFocused(true)}
                      onBlur={() => {
                        window.setTimeout(() => setIsLocationFocused(false), 120);
                      }}
                      placeholder="Type a city, landmark, or GPS coordinates"
                      className="rounded-xl bg-background pl-9"
                    />
                    {shouldShowLocationDropdown ? (
                      <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-20 overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
                        {isSearchingLocations ? (
                          <div className="px-4 py-3 text-sm text-muted-foreground">
                            Searching places...
                          </div>
                        ) : null}

                        {!isSearchingLocations && locationSearchError ? (
                          <div className="px-4 py-3 text-sm text-[oklch(0.54_0.18_8)]">
                            {locationSearchError}
                          </div>
                        ) : null}

                        {!isSearchingLocations &&
                        !locationSearchError &&
                        locationSuggestions.length === 0 &&
                        location.trim().length >= 2 &&
                        !parseCoordinates(location) ? (
                          <div className="px-4 py-3 text-sm text-muted-foreground">
                            No matching places found yet.
                          </div>
                        ) : null}

                        {!isSearchingLocations &&
                        !locationSearchError &&
                        locationSuggestions.length > 0 ? (
                          <div className="py-2">
                            {locationSuggestions.map((item) => (
                              <button
                                key={`${item.name}-${item.lat}-${item.lng}`}
                                type="button"
                                onMouseDown={(event) => event.preventDefault()}
                                onClick={() => handleLocationSelect(item)}
                                className="flex w-full items-start gap-3 px-4 py-3 text-left hover:bg-secondary"
                              >
                                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                                  <MapPin className="h-4 w-4" />
                                </span>
                                <span className="min-w-0">
                                  <span className="block text-sm font-semibold text-foreground">
                                    {item.name}
                                  </span>
                                  <span className="block text-xs leading-relaxed text-muted-foreground">
                                    {item.address ||
                                      formatCoordinates({
                                        latitude: item.lat,
                                        longitude: item.lng,
                                      })}
                                  </span>
                                </span>
                              </button>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                  <Button
                    type="button"
                    onClick={handleUseMyLocation}
                    className="rounded-xl whitespace-nowrap"
                    disabled={isResolvingMyLocation || isDemoQuotaExceeded}
                  >
                    {isDemoQuotaExceeded
                      ? "Demo Unavailable"
                      : isResolvingMyLocation
                        ? "Finding Location..."
                        : "Use My Location"}
                  </Button>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Search by text, pick a suggestion, or paste raw GPS coordinates.
                </p>
              </FormField>

              <FormField label="Photo">
                <div className="space-y-3">
                  <label className="flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-border bg-background px-4 py-4 shadow-[var(--shadow-soft)] transition-colors hover:bg-secondary/50">
                    <span className="inline-flex items-center rounded-full bg-primary-soft px-4 py-2 text-sm font-semibold text-primary">
                      Choose Photo
                    </span>
                    <span className="min-w-0 flex-1 text-right text-sm text-muted-foreground">
                      {photoState.status === "idle" ? "No photo selected" : photoState.fileName}
                    </span>
                    <Input
                      ref={photoInputRef}
                      type="file"
                      accept=".jpg,.jpeg,image/jpeg"
                      onChange={handlePhotoUpload}
                      className="sr-only"
                    />
                  </label>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {DEMO_GPS_REQUIRED_MESSAGE}
                  </p>

                  {photoState.status !== "idle" ? (
                    <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-soft)]">
                      <div className="flex items-center justify-between border-b border-border/70 bg-secondary/40 px-4 py-3">
                        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                          <Camera className="h-3.5 w-3.5" />
                          Demo photo
                        </div>
                        <button
                          type="button"
                          onClick={handleRemovePhoto}
                          className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                        >
                          <X className="h-3.5 w-3.5" />
                          Remove
                        </button>
                      </div>
                      {photoState.previewUrl ? (
                        <div className="aspect-[16/10] overflow-hidden bg-secondary">
                          <img
                            src={photoState.previewUrl}
                            alt={photoState.fileName}
                            className={cn(
                              "h-full w-full object-cover",
                              photoState.status === "missing-gps" ? "opacity-65" : "",
                            )}
                          />
                        </div>
                      ) : null}

                      <div className="space-y-2 p-4">
                        <p className="text-sm font-semibold text-foreground">
                          {photoState.fileName}
                        </p>

                        {photoState.status === "reading" ? (
                          <p className="text-sm text-muted-foreground">
                            Reading GPS metadata from the photo...
                          </p>
                        ) : null}

                        {photoState.status === "resolved" ? (
                          <>
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-sm font-semibold text-primary">
                              <MapPin className="h-4 w-4" />
                              {buildPlaceLabel(resolvedPhotoContext, photoState.coords)}
                            </div>
                            <p className="text-xs leading-relaxed text-muted-foreground">
                              {resolvedPhotoContext?.placeName
                                ? "Location detected via the PlaceEcho public API using the image GPS metadata."
                                : "GPS coordinates were found in the image, but a place name could not be resolved right now."}
                            </p>
                          </>
                        ) : null}

                        {photoState.status === "missing-gps" ? (
                          <p className="text-sm leading-relaxed text-[oklch(0.54_0.18_8)]">
                            {DEMO_GPS_REQUIRED_MESSAGE}
                          </p>
                        ) : null}

                        {photoState.status === "error" ? (
                          <p className="text-sm leading-relaxed text-[oklch(0.54_0.18_8)]">
                            {photoState.message}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                </div>
              </FormField>

              <FormField label="Length">
                <ToggleGroup
                  type="single"
                  value={length}
                  onValueChange={(value) => {
                    if (value) setLength(value);
                  }}
                  variant="outline"
                  className="grid grid-cols-3 gap-2 rounded-2xl bg-background p-1"
                  aria-label="Story length"
                >
                  {[
                    { v: "short", l: "Short" },
                    { v: "medium", l: "Medium" },
                    { v: "long", l: "Long" },
                  ].map((o) => (
                    <ToggleGroupItem
                      key={o.v}
                      value={o.v}
                      className="h-11 rounded-xl border border-border bg-background px-4 text-sm font-semibold text-foreground shadow-none hover:bg-background hover:text-foreground data-[state=on]:border-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-[var(--shadow-soft)]"
                      aria-label={o.l}
                    >
                      {o.l}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </FormField>

              <FormField label="Experience">
                <ToggleGroup
                  type="single"
                  value={experience}
                  onValueChange={(value) => {
                    if (value) setExperience(value);
                  }}
                  variant="outline"
                  className="grid grid-cols-2 gap-3"
                  aria-label="Experience"
                >
                  {[
                    {
                      v: "story",
                      l: "Story",
                      icon: BookText,
                      tint: "bg-primary-soft text-primary",
                    },
                    {
                      v: "historical",
                      l: "Historical",
                      icon: Landmark,
                      tint: "bg-[oklch(0.97_0.04_85)] text-[oklch(0.48_0.16_72)]",
                    },
                    {
                      v: "guide",
                      l: "Guide",
                      icon: Compass,
                      tint: "bg-[oklch(0.96_0.04_230)] text-[oklch(0.45_0.13_235)]",
                    },
                    {
                      v: "urban-legend",
                      l: "Urban Legend",
                      icon: Ghost,
                      tint: "bg-[oklch(0.96_0.04_8)] text-[oklch(0.54_0.18_8)]",
                    },
                  ].map((o) => (
                    <ToggleGroupItem
                      key={o.v}
                      value={o.v}
                      className="h-auto min-h-14 flex-col items-start justify-center rounded-2xl border border-border bg-card px-3 py-2.5 text-left text-foreground shadow-[var(--shadow-soft)] hover:bg-card hover:text-foreground data-[state=on]:border-primary data-[state=on]:bg-[oklch(0.98_0.03_72)] data-[state=on]:text-foreground data-[state=on]:shadow-[var(--shadow-card)]"
                      aria-label={o.l}
                    >
                      <span className="flex w-full items-center gap-2.5">
                        <span
                          className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${o.tint}`}
                        >
                          <o.icon className="h-4 w-4" />
                        </span>
                        <span className="text-sm leading-none font-bold">{o.l}</span>
                      </span>
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </FormField>

              <FormField label="Language">
                <ToggleGroup
                  type="single"
                  value={language}
                  onValueChange={(value) => {
                    if (value) setLanguage(value);
                  }}
                  className="grid grid-cols-3 gap-2"
                  aria-label="Language"
                >
                  {languageOptions.map((option) => (
                    <ToggleGroupItem
                      key={option.value}
                      value={option.value}
                      className="h-12 justify-start rounded-xl border border-border bg-card px-3 text-left text-sm font-semibold text-foreground shadow-none hover:bg-card hover:text-foreground data-[state=on]:border-primary data-[state=on]:bg-[oklch(0.98_0.03_72)] data-[state=on]:text-foreground data-[state=on]:shadow-[var(--shadow-soft)]"
                      aria-label={option.label}
                    >
                      <option.flag className="h-4 w-6 shrink-0 rounded-sm border border-border/60 shadow-none" />
                      <span className="truncate">{option.label}</span>
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </FormField>

              {submitError ? (
                <div
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm leading-relaxed",
                    submitError.kind === "daily-quota"
                      ? "border border-primary/20 bg-primary-soft text-foreground"
                      : "border border-[oklch(0.9_0.05_8)] bg-[oklch(0.98_0.02_8)] text-[oklch(0.54_0.18_8)]",
                  )}
                >
                  <p>{submitError.message}</p>
                  {submitError.kind === "daily-quota" ? (
                    <div className="mt-3">
                      <a
                        href={APP_URL}
                        className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)]"
                      >
                        Try the PlaceEcho App
                      </a>
                    </div>
                  ) : null}
                </div>
              ) : null}

              <Button
                type="submit"
                className="mt-2 w-full rounded-xl py-6 text-base gap-2"
                disabled={isSubmitting || photoState.status === "reading" || isDemoQuotaExceeded}
              >
                <Sparkles className="h-4 w-4" />
                {isDemoQuotaExceeded
                  ? "Demo Unavailable"
                  : isSubmitting
                    ? "Generating..."
                    : "Generate Story"}
              </Button>
            </div>
          </form>
        </div>

        {demoResult?.story ? (
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-card)]">
            <div className="border-b border-border bg-gradient-to-br from-primary-soft via-[oklch(0.98_0.03_72)] to-white px-6 py-5 sm:px-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary shadow-[var(--shadow-soft)]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Live demo result
                </span>
                {demoResult.cached ? (
                  <span className="text-xs font-semibold text-muted-foreground">
                    Cached response
                  </span>
                ) : null}
                {demoResult.degraded_mode ? (
                  <span className="text-xs font-semibold text-muted-foreground">Degraded mode</span>
                ) : null}
              </div>
              <h3 className="mt-4 text-2xl font-bold sm:text-3xl">{demoResult.story.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {activeCoords
                  ? buildPlaceLabel(demoResult.context ?? resolvedPhotoContext, activeCoords)
                  : (demoResult.context?.placeName ?? "Generated from the PlaceEcho public API")}
              </p>
              {demoResult.story.summary ? (
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  {demoResult.story.summary}
                </p>
              ) : null}
            </div>

            <div className="grid gap-6 px-6 py-6 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-4">
                <div className="rounded-3xl bg-secondary/45 p-5">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Story Text
                  </div>
                  <p className="mt-3 whitespace-pre-line text-sm leading-7 text-foreground/90">
                    {demoResult.story.text ?? "The API returned the story without body text."}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Listen
                  </div>
                  <Button
                    type="button"
                    onClick={() => {
                      void toggleDemoPlayback();
                    }}
                    className="mt-4 w-full rounded-full"
                  >
                    {isDemoListening ? (
                      <>
                        <AudioLines className="h-4 w-4" /> Stop Listening
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 fill-current" /> Listen to Story
                      </>
                    )}
                  </Button>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {demoResult.story.audio_url
                      ? "Play the generated audio version of this story."
                      : demoListenMode === "speech" ||
                          typeof window === "undefined" ||
                          "speechSynthesis" in window
                        ? "If audio wasn't generated, the demo uses your browser voice to read the story."
                        : "Audio generation wasn't included in this result, and browser voice playback isn't available here."}
                  </p>
                  {demoResult.story.audio_url ? (
                    <audio
                      ref={demoAudioRef}
                      controls
                      className="mt-4 w-full"
                      src={resolvePublicAssetUrl(demoResult.story.audio_url)}
                      onPlay={() => {
                        setIsDemoListening(true);
                        setDemoListenMode("audio");
                      }}
                      onPause={() => {
                        setIsDemoListening(false);
                        setDemoListenMode(null);
                      }}
                      onEnded={() => {
                        setIsDemoListening(false);
                        setDemoListenMode(null);
                      }}
                    >
                      Your browser does not support audio playback.
                    </audio>
                  ) : null}
                </div>

                <div className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Story Details
                  </div>
                  <div className="mt-4 space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-foreground">Mode:</span>{" "}
                      <span className="text-muted-foreground">
                        {demoResult.story.experience_mode ?? getExperienceMode(experience)}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Language:</span>{" "}
                      <span className="text-muted-foreground">
                        {demoResult.story.language ?? getLanguageCode(language)}
                      </span>
                    </div>
                    {demoResult.context?.confidence ? (
                      <div>
                        <span className="font-semibold text-foreground">Location confidence:</span>{" "}
                        <span className="text-muted-foreground">
                          {Math.round(demoResult.context.confidence * 100)}%
                        </span>
                      </div>
                    ) : null}
                    {demoResult.story.share_url ? (
                      <div>
                        <span className="font-semibold text-foreground">Share URL:</span>{" "}
                        <a
                          href={resolvePublicAssetUrl(demoResult.story.share_url)}
                          target="_blank"
                          rel="noreferrer"
                          className="break-all text-primary underline decoration-primary/30 underline-offset-4"
                        >
                          {resolvePublicAssetUrl(demoResult.story.share_url)}
                        </a>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
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
type EchoMode = "Story" | "Historical" | "Guide" | "Urban Legend";

type Echo = {
  title: string;
  location: string;
  mode: EchoMode;
  img: string;
  rating: number;
  text: string;
  tagColor: string;
  focus: string;
  listenScript: string;
  paragraphs: string[];
  highlights: string[];
};

const ECHO_MODE_META: Record<
  EchoMode,
  {
    icon: typeof BookText;
    badgeClass: string;
    panelClass: string;
    actionClass: string;
    chips: string[];
    description: string;
  }
> = {
  Story: {
    icon: BookText,
    badgeClass: "bg-primary-soft text-primary",
    panelClass: "from-primary-soft via-[oklch(0.98_0.03_72)] to-white",
    actionClass: "bg-primary-soft text-primary",
    chips: ["Mood-first", "Cinematic", "Character-led"],
    description: "A more emotional, cinematic take designed to make the place feel alive.",
  },
  Historical: {
    icon: Landmark,
    badgeClass: "bg-[oklch(0.97_0.04_85)] text-[oklch(0.48_0.16_72)]",
    panelClass: "from-[oklch(0.97_0.04_85)] via-[oklch(0.99_0.02_85)] to-white",
    actionClass: "bg-[oklch(0.97_0.04_85)] text-[oklch(0.48_0.16_72)]",
    chips: ["Verified context", "Timeline", "Real people"],
    description: "Built around facts, chronology, and the forces that shaped the place.",
  },
  Guide: {
    icon: Compass,
    badgeClass: "bg-[oklch(0.96_0.04_230)] text-[oklch(0.45_0.13_235)]",
    panelClass: "from-[oklch(0.96_0.04_230)] via-[oklch(0.99_0.02_230)] to-white",
    actionClass: "bg-[oklch(0.96_0.04_230)] text-[oklch(0.45_0.13_235)]",
    chips: ["Practical route", "What to notice", "Best moments"],
    description: "Focused on movement, orientation, and details you can use on the spot.",
  },
  "Urban Legend": {
    icon: Ghost,
    badgeClass: "bg-[oklch(0.96_0.04_8)] text-[oklch(0.54_0.18_8)]",
    panelClass: "from-[oklch(0.96_0.04_8)] via-[oklch(0.99_0.02_8)] to-white",
    actionClass: "bg-[oklch(0.96_0.04_8)] text-[oklch(0.54_0.18_8)]",
    chips: ["Rumor & folklore", "Uneasy mood", "After-dark energy"],
    description: "A haunting version shaped by whispers, myth, and local imagination.",
  },
};

const ECHOES: Echo[] = [
  {
    title: "Rome Colosseum",
    location: "Rome, Italy",
    mode: "Historical",
    img: echoRome,
    rating: 4.9,
    tagColor: "bg-primary",
    text: "Walk through emperors, spectacle, and the political machine hidden behind the arena.",
    focus:
      "This version explains who built it, why it mattered, and how power was staged in public.",
    listenScript:
      "You are standing before a monument built not only for entertainment, but for imperial messaging. The Colosseum rose in the first century under the Flavian emperors, on land reclaimed from Nero's private palace. Every seat, corridor, and spectacle was part of a larger story about order, authority, and the performance of Roman power.",
    paragraphs: [
      "The Colosseum was more than a stadium. It was a statement by the Flavian dynasty that Rome belonged again to the people after the excesses of Nero. By building a public amphitheater on top of private imperial land, the emperors turned architecture into politics.",
      "Inside, the arena delivered carefully staged violence, engineering brilliance, and mass spectacle. Trapdoors, pulleys, and underground chambers helped produce dramatic scenes, while the seating plan itself mirrored Roman social hierarchy with astonishing precision.",
      "A historical Echo focuses on verified context: dates, rulers, urban planning, and the way the monument reflected the values and contradictions of the empire. Instead of imagining a character's feelings, it helps you see the systems that shaped the place.",
    ],
    highlights: [
      "Built under Vespasian and Titus",
      "Flavian propaganda in stone",
      "Arena as social hierarchy",
    ],
  },
  {
    title: "Tower of London",
    location: "London, England",
    mode: "Urban Legend",
    img: echoLondon,
    rating: 4.9,
    tagColor: "bg-[oklch(0.55_0.2_290)]",
    text: "Ravens, vanished princes, and corridors where rumor still clings to the stone.",
    focus:
      "This version leans into the whispers people remember long after the official facts fade.",
    listenScript:
      "At the Tower of London, history never arrives alone. It comes wrapped in raven wings, in the shadow of missing princes, in the uneasy feeling that some walls keep secrets on purpose. Whether the stories are true almost matters less than the fact that London still repeats them, generation after generation.",
    paragraphs: [
      "Some places are remembered for what happened there. The Tower is remembered just as strongly for what people fear may have happened there. That distinction is what gives an urban-legend Echo its charge.",
      "The ravens are a perfect example. Their presence has been folded into a superstition that says the kingdom will fall if they ever leave. The story survives because it feels bigger than evidence; it turns a practical detail into a national omen.",
      "A legend-driven Echo does not pretend rumor is documentation. Instead, it explores why certain myths endure, how atmosphere shapes memory, and why visitors still lower their voices in places where stories have never fully settled.",
    ],
    highlights: ["Raven superstition", "Princes in the Tower", "Fear, folklore, and memory"],
  },
  {
    title: "Kyoto Temple",
    location: "Kyoto, Japan",
    mode: "Guide",
    img: echoKyoto,
    rating: 4.9,
    tagColor: "bg-accent",
    text: "A clear route through the temple grounds, with cues for where to pause and what to notice.",
    focus: "This version acts like a calm local companion instead of a dramatic narrator.",
    listenScript:
      "Start slowly at the entrance and let the first courtyard reset your pace. Notice how the soundscape changes before the architecture does. As you move deeper into the grounds, watch for small transitions: stone to wood, open air to filtered shade, public path to reflective space. A guide Echo helps you experience those details in the right order.",
    paragraphs: [
      "A guide-style Echo is designed for movement. It doesn't just tell you what a place means; it helps you notice the sequence in which the place reveals itself. In Kyoto, that sequence often matters as much as the destination.",
      "Rather than focusing on a dramatic arc, this mode points out practical details: where the best views open, when the grounds feel quieter, which architectural elements visitors often miss, and how to read the mood of each transition.",
      "The result feels useful and grounded. You get cultural context, but it arrives attached to action: pause here, turn back for this view, look up at this beam, listen to the gravel underfoot. It is the most present-tense of the four experiences.",
    ],
    highlights: [
      "Best route through the grounds",
      "Details most visitors miss",
      "On-the-spot orientation",
    ],
  },
  {
    title: "Eiffel Tower",
    location: "Paris, France",
    mode: "Story",
    img: echoParis,
    rating: 4.7,
    tagColor: "bg-[oklch(0.6_0.18_25)]",
    text: "A romantic, cinematic story about ambition, evening light, and the feeling of arriving in Paris.",
    focus:
      "This version is less about facts and more about atmosphere, emotion, and narrative flow.",
    listenScript:
      "By the time the tower catches the late light, Paris has already started turning into a story about arrival. Iron becomes lace against the sky, the river gathers reflection, and the whole structure feels less like a machine than a promise someone was daring the city to keep. In a story Echo, the place becomes a scene you can step into.",
    paragraphs: [
      "A story-mode Echo treats the place like a narrative stage. The goal is not just to inform you, but to carry you through a beginning, middle, and emotional payoff that fits the setting.",
      "With the Eiffel Tower, that often means leaning into anticipation: the first glimpse between rooftops, the widening of the avenue, the shift from object to symbol. The structure becomes meaningful not only because it exists, but because of the feeling it produces in the person approaching it.",
      "Compared with the historical or guide versions, story mode is freer, warmer, and more sensory. It emphasizes tone, image, and emotional momentum so the listener remembers not just what they learned, but how the place felt.",
    ],
    highlights: ["Emotional arc", "Sensory writing", "Place as a scene"],
  },
  {
    title: "Forum at First Light",
    location: "Rome, Italy",
    mode: "Guide",
    img: echoRome,
    rating: 4.8,
    tagColor: "bg-accent",
    text: "A practical sunrise route through columns, fragments, and the best vantage points before the crowds.",
    focus:
      "This version is structured like a walking companion that helps you notice the right details in the right order.",
    listenScript:
      "Begin at the quieter edge of the Forum and let the space open slowly. In the early light, the ruins read less like isolated monuments and more like a connected civic landscape. A guide Echo helps you move through that landscape without losing the small details that make it memorable.",
    paragraphs: [
      "This Echo is designed around timing and movement. It assumes you want to understand the Forum while you are actually walking through it, not after the fact.",
      "Instead of building drama, it tells you where to pause, when to turn for the wider view, and which layers of the ruins reveal the strongest contrast between republic, empire, and later reuse.",
      "Guide mode works especially well here because the Forum can feel visually overwhelming. The story becomes easier to absorb when it arrives as orientation rather than information overload.",
    ],
    highlights: ["Sunrise timing", "Best sightlines", "Easy walking sequence"],
  },
  {
    title: "Paris After the Lights",
    location: "Paris, France",
    mode: "Urban Legend",
    img: echoParis,
    rating: 4.7,
    tagColor: "bg-[oklch(0.55_0.2_290)]",
    text: "The tower becomes a stage for rumors, midnight encounters, and the stories people tell once the crowds thin out.",
    focus: "This version turns a familiar landmark into a more mysterious nighttime mythscape.",
    listenScript:
      "When the lights begin to glitter, the Eiffel Tower stops behaving like a postcard and starts behaving like a witness. Every city makes myths out of its brightest places, and Paris is no exception. After dark, ordinary details gather a second life in gossip, memory, and chance encounters retold as fate.",
    paragraphs: [
      "Urban-legend mode asks a different question: not what a landmark officially means, but what people have projected onto it over time. Night is where those projections become more believable.",
      "In this version, the tower is less an engineering achievement and more a magnet for stories of secret meetings, near-misses, superstitions, and the kind of romantic exaggeration Paris encourages so easily.",
      "The result is more atmospheric than factual. It is meant to make the same setting feel slightly unfamiliar, as if the city has stepped half a pace into rumor.",
    ],
    highlights: ["Nighttime mythology", "Romantic rumor", "Icon turned into mystery"],
  },
];

function EchoCard({
  echo,
  onListen,
  onRead,
  expanded = false,
}: {
  echo: Echo;
  onListen: (echo: Echo) => void;
  onRead: (echo: Echo) => void;
  expanded?: boolean;
}) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-card)]">
      <div className={cn("relative overflow-hidden", expanded ? "aspect-[16/10]" : "aspect-[5/4]")}>
        <img
          src={echo.img}
          alt={echo.title}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span
          className={`absolute left-3 bottom-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase text-primary-foreground ${echo.tagColor}`}
        >
          {echo.mode}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-bold">{echo.title}</h3>
          <span className="flex shrink-0 items-center gap-1 text-xs font-semibold text-primary">
            <Star className="h-3.5 w-3.5 fill-primary" /> {echo.rating}
          </span>
        </div>
        <p className="mt-1 text-xs font-medium text-muted-foreground">{echo.location}</p>
        <p
          className={cn(
            "mt-2 text-sm text-muted-foreground",
            expanded ? "line-clamp-4" : "line-clamp-3",
          )}
        >
          {echo.text}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {ECHO_MODE_META[echo.mode].chips.map((chip) => (
            <span
              key={chip}
              className={cn(
                "rounded-full px-2.5 py-1 text-[11px] font-semibold",
                ECHO_MODE_META[echo.mode].badgeClass,
              )}
            >
              {chip}
            </span>
          ))}
        </div>
        <div className={cn("mt-3 rounded-2xl p-3", ECHO_MODE_META[echo.mode].actionClass)}>
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-80">
            Why this feels different
          </div>
          <p className="mt-1 text-xs leading-relaxed opacity-90">{echo.focus}</p>
        </div>
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => onListen(echo)}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary-soft py-2 text-xs font-semibold text-primary hover:bg-primary/15"
          >
            <Play className="h-3.5 w-3.5 fill-primary" /> Listen
          </button>
          <button
            type="button"
            onClick={() => onRead(echo)}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border py-2 text-xs font-semibold hover:bg-secondary"
          >
            <BookOpen className="h-3.5 w-3.5" /> Read Story
          </button>
        </div>
      </div>
    </article>
  );
}

function FeaturedEchoes() {
  const [activeEcho, setActiveEcho] = useState<Echo | null>(null);
  const [previewMode, setPreviewMode] = useState<"listen" | "read" | null>(null);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const featuredEchoes = ECHOES.slice(0, 4);

  function stopSpeaking() {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    utteranceRef.current = null;
    setIsSpeaking(false);
  }

  function openPreview(echo: Echo, mode: "listen" | "read") {
    stopSpeaking();
    setCatalogOpen(false);
    setActiveEcho(echo);
    setPreviewMode(mode);
  }

  function handleDialogChange(open: boolean) {
    if (open) return;
    stopSpeaking();
    setPreviewMode(null);
    setActiveEcho(null);
  }

  function togglePreviewAudio() {
    if (!activeEcho) return;

    if (isSpeaking) {
      stopSpeaking();
      return;
    }

    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(activeEcho.listenScript);
    utterance.rate = activeEcho.mode === "Guide" ? 1 : 0.94;
    utterance.pitch = activeEcho.mode === "Urban Legend" ? 0.92 : 1;
    utterance.onend = () => {
      utteranceRef.current = null;
      setIsSpeaking(false);
    };
    utterance.onerror = () => {
      utteranceRef.current = null;
      setIsSpeaking(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  }

  useEffect(() => {
    if (previewMode === "listen") return;
    stopSpeaking();
  }, [previewMode]);

  useEffect(
    () => () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    },
    [],
  );

  const activeMeta = activeEcho ? ECHO_MODE_META[activeEcho.mode] : null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Featured Echoes</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Sample stories generated by PlaceEcho from amazing places around the world. Each card
            below demonstrates a different experience mode, so the contrast is easy to feel.
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          className="rounded-full gap-1 bg-card"
          onClick={() => setCatalogOpen(true)}
        >
          See all Echoes <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featuredEchoes.map((e) => (
          <EchoCard
            key={e.title}
            echo={e}
            onListen={(echo) => openPreview(echo, "listen")}
            onRead={(echo) => openPreview(echo, "read")}
          />
        ))}
      </div>
      <Dialog open={catalogOpen} onOpenChange={setCatalogOpen}>
        <DialogContent className="max-h-[90vh] overflow-hidden border-0 p-0 sm:max-w-6xl">
          <div className="overflow-hidden rounded-[1.75rem] bg-card">
            <div className="border-b border-border bg-secondary/40 p-6 sm:p-8">
              <DialogHeader className="space-y-3 text-left">
                <DialogTitle className="text-2xl sm:text-3xl">All Echoes</DialogTitle>
                <DialogDescription className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  Explore a broader PlaceEcho catalog with different tones, structures, and
                  listening styles. Open any Echo to hear a preview or read the full sample story.
                </DialogDescription>
              </DialogHeader>
            </div>
            <div className="max-h-[calc(90vh-9rem)] overflow-y-auto p-6 sm:p-8">
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {ECHOES.map((echo) => (
                  <EchoCard
                    key={echo.title}
                    echo={echo}
                    expanded
                    onListen={(selectedEcho) => openPreview(selectedEcho, "listen")}
                    onRead={(selectedEcho) => openPreview(selectedEcho, "read")}
                  />
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={Boolean(activeEcho && previewMode)} onOpenChange={handleDialogChange}>
        <DialogContent className="max-h-[90vh] overflow-hidden border-0 p-0 sm:max-w-4xl">
          {activeEcho && activeMeta ? (
            <div className="overflow-hidden rounded-[1.75rem] bg-card">
              <div
                className={cn(
                  "border-b border-border bg-gradient-to-br p-6 sm:p-8",
                  activeMeta.panelClass,
                )}
              >
                <DialogHeader className="space-y-3 text-left">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold",
                        activeMeta.badgeClass,
                      )}
                    >
                      <activeMeta.icon className="h-3.5 w-3.5" />
                      {activeEcho.mode}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">
                      {activeEcho.location}
                    </span>
                  </div>
                  <DialogTitle className="text-2xl sm:text-3xl">{activeEcho.title}</DialogTitle>
                  <DialogDescription className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {activeMeta.description}
                  </DialogDescription>
                </DialogHeader>
              </div>

              {previewMode === "listen" ? (
                <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <div className="rounded-3xl border border-border bg-secondary/50 p-5">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                            Audio Preview
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">
                            A short spoken sample of this experience style.
                          </p>
                        </div>
                        <Button
                          type="button"
                          onClick={togglePreviewAudio}
                          className="rounded-full px-5"
                        >
                          {isSpeaking ? (
                            <>
                              <AudioLines className="h-4 w-4" /> Stop Preview
                            </>
                          ) : (
                            <>
                              <Play className="h-4 w-4 fill-current" /> Play Preview
                            </>
                          )}
                        </Button>
                      </div>
                      <div className="mt-5 rounded-2xl bg-background p-4 text-sm leading-relaxed text-muted-foreground">
                        "{activeEcho.listenScript}"
                      </div>
                      <p className="mt-3 text-xs text-muted-foreground">
                        {typeof window !== "undefined" && "speechSynthesis" in window
                          ? "This preview uses your browser voice to simulate PlaceEcho narration."
                          : "Audio preview is shown as text here if browser voice playback is unavailable."}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        What stands out
                      </div>
                      <div className="mt-4 space-y-3">
                        {activeEcho.highlights.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <span
                              className={cn(
                                "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full",
                                activeMeta.badgeClass,
                              )}
                            >
                              <Check className="h-3.5 w-3.5 stroke-[3]" />
                            </span>
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        Mode Signature
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {activeMeta.chips.map((chip) => (
                          <span
                            key={chip}
                            className={cn(
                              "rounded-full px-3 py-1.5 text-xs font-semibold",
                              activeMeta.badgeClass,
                            )}
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="space-y-4">
                    {activeEcho.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-7 text-foreground/90">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        Experience DNA
                      </div>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {activeEcho.focus}
                      </p>
                    </div>
                    <div className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        Key Highlights
                      </div>
                      <div className="mt-4 space-y-3">
                        {activeEcho.highlights.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <span
                              className={cn(
                                "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full",
                                activeMeta.badgeClass,
                              )}
                            >
                              <Check className="h-3.5 w-3.5 stroke-[3]" />
                            </span>
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button
                      type="button"
                      onClick={() => setPreviewMode("listen")}
                      className="w-full rounded-2xl gap-2"
                    >
                      <Play className="h-4 w-4 fill-current" /> Switch to Listen Preview
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}

/* ---------- Experience Modes ---------- */
function ExperienceModes() {
  const modes = [
    {
      icon: BookText,
      name: "Story",
      desc: "Immersive storytelling inspired by the atmosphere of the place.",
      tint: "bg-primary-soft text-primary",
    },
    {
      icon: Landmark,
      name: "Historical",
      desc: "Explore real events, people and moments that shaped the location.",
      tint: "bg-accent-soft text-accent-foreground",
    },
    {
      icon: Compass,
      name: "Guide",
      desc: "Practical and inspiring guides to understand what makes the place special.",
      tint: "bg-[oklch(0.94_0.04_240)] text-[oklch(0.45_0.15_240)]",
    },
    {
      icon: Ghost,
      name: "Urban Legend",
      desc: "Myths, mysteries and local legends passed down through time.",
      tint: "bg-[oklch(0.94_0.04_300)] text-[oklch(0.45_0.18_300)]",
    },
  ];
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Experience Modes</h2>
        <p className="mt-2 text-muted-foreground">Explore stories in different ways.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {modes.map((m) => (
            <div
              key={m.name}
              className="rounded-3xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
            >
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
function Flag({
  name,
  children,
  viewBox = "0 0 60 40",
  className,
}: {
  name: string;
  children: React.ReactNode;
  viewBox?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox={viewBox}
      aria-label={name}
      role="img"
      className={cn(
        "h-10 w-14 rounded-md border border-border/60 shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      {children}
    </svg>
  );
}

function UKFlag({ className }: { className?: string }) {
  return (
    <Flag name="United Kingdom flag" className={className}>
      <rect width="60" height="40" fill="#012169" />
      <line x1="0" y1="0" x2="60" y2="40" stroke="#fff" strokeWidth="10" />
      <line x1="60" y1="0" x2="0" y2="40" stroke="#fff" strokeWidth="10" />
      <line x1="0" y1="0" x2="60" y2="40" stroke="#c8102e" strokeWidth="4" />
      <line x1="60" y1="0" x2="0" y2="40" stroke="#c8102e" strokeWidth="4" />
      <rect x="24" width="12" height="40" fill="#fff" />
      <rect y="14" width="60" height="12" fill="#fff" />
      <rect x="26" width="8" height="40" fill="#c8102e" />
      <rect y="16" width="60" height="8" fill="#c8102e" />
    </Flag>
  );
}

function IsraelFlag({ className }: { className?: string }) {
  return (
    <Flag name="Israel flag" className={className}>
      <rect width="60" height="40" fill="#fff" />
      <rect y="4" width="60" height="5" fill="#1f5fbf" />
      <rect y="31" width="60" height="5" fill="#1f5fbf" />
      <path d="M30 12 22 26h16Z" fill="none" stroke="#1f5fbf" strokeWidth="2" />
      <path d="M30 28 38 14H22Z" fill="none" stroke="#1f5fbf" strokeWidth="2" />
    </Flag>
  );
}

function FranceFlag({ className }: { className?: string }) {
  return (
    <Flag name="France flag" className={className}>
      <rect width="20" height="40" fill="#244aa5" />
      <rect x="20" width="20" height="40" fill="#fff" />
      <rect x="40" width="20" height="40" fill="#d62839" />
    </Flag>
  );
}

function GermanyFlag({ className }: { className?: string }) {
  return (
    <Flag name="Germany flag" className={className}>
      <rect width="60" height="13.34" fill="#111" />
      <rect y="13.33" width="60" height="13.34" fill="#c81d25" />
      <rect y="26.66" width="60" height="13.34" fill="#f2c230" />
    </Flag>
  );
}

function SpainFlag({ className }: { className?: string }) {
  return (
    <Flag name="Spain flag" className={className}>
      <rect width="60" height="40" fill="#aa151b" />
      <rect y="10" width="60" height="20" fill="#f1bf00" />
    </Flag>
  );
}

function RussiaFlag({ className }: { className?: string }) {
  return (
    <Flag name="Russia flag" className={className}>
      <rect width="60" height="13.34" fill="#fff" />
      <rect y="13.33" width="60" height="13.34" fill="#2454c5" />
      <rect y="26.66" width="60" height="13.34" fill="#c81d25" />
    </Flag>
  );
}

function MultiLanguage() {
  const langs = [
    { name: "English", flag: <UKFlag /> },
    { name: "Hebrew", flag: <IsraelFlag /> },
    { name: "French", flag: <FranceFlag /> },
    { name: "German", flag: <GermanyFlag /> },
    { name: "Spanish", flag: <SpainFlag /> },
    { name: "Russian", flag: <RussiaFlag /> },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <h2 className="text-3xl font-bold sm:text-4xl">Multiple Languages</h2>
      <p className="mt-2 text-muted-foreground">Natural audio in six languages.</p>
      <div className="mt-10 grid grid-cols-3 gap-5 sm:grid-cols-6">
        {langs.map((l) => (
          <div
            key={l.name}
            className="flex items-center justify-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]"
          >
            {l.flag}
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
    {
      icon: MapIcon,
      title: "1. Choose a Place",
      desc: "Find any place in the world or use your current location.",
      tint: "from-[oklch(0.85_0.12_220)] to-[oklch(0.7_0.15_220)]",
      image: locationPickerScreen,
    },
    {
      icon: Compass,
      title: "2. Pick an Experience",
      desc: "Choose the style and length that fits your curiosity.",
      tint: "from-primary-soft to-primary/40",
      image: chooseExperienceScreen,
    },
    {
      icon: Headphones,
      title: "3. Listen & Enjoy",
      desc: "Listen to your personalized story with natural audio.",
      tint: "from-[oklch(0.4_0.06_50)] to-[oklch(0.25_0.04_50)]",
      image: storyAudioScreen,
    },
    {
      icon: Library,
      title: "4. Your Library",
      desc: "All your stories saved in one place to revisit anytime.",
      tint: "from-accent-soft to-accent/40",
      image: myStoriesScreen,
    },
  ];
  return (
    <section className="bg-primary-soft/60 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">PlaceEcho in Action</h2>
        <p className="mt-2 text-muted-foreground">Designed for curious explorers everywhere.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title}>
              {s.image ? (
                <div className="relative mx-auto aspect-[9/16] w-full max-w-[200px] overflow-hidden rounded-[1.75rem] border-[6px] border-foreground/90 bg-background shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="block h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div
                  className={`relative mx-auto aspect-[9/16] w-full max-w-[200px] overflow-hidden rounded-[1.75rem] border-[6px] border-foreground/90 bg-gradient-to-br ${s.tint} shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]`}
                >
                  <span className="absolute left-1/2 top-1 z-10 h-3 w-16 -translate-x-1/2 rounded-full bg-foreground/90" />
                  <div className="grid h-full place-items-center">
                    <s.icon className="h-12 w-12 text-background/90 drop-shadow" />
                  </div>
                </div>
              )}
              <h3 className="mt-4 text-center text-base font-bold">{s.title}</h3>
              <p className="mx-auto mt-1 max-w-[220px] text-center text-sm text-muted-foreground">
                {s.desc}
              </p>
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
    {
      icon: Lightbulb,
      title: "Help shape features",
      desc: "We value your feedback",
      tint: "bg-[oklch(0.96_0.04_95)] text-[oklch(0.54_0.14_88)]",
    },
    {
      icon: Heart,
      title: "Share your ideas",
      desc: "Suggest new places",
      tint: "bg-[oklch(0.96_0.04_12)] text-[oklch(0.56_0.18_18)]",
    },
    {
      icon: Sparkles,
      title: "Early access",
      desc: "Be the first to explore",
      tint: "bg-primary-soft text-primary",
    },
    {
      icon: Users,
      title: "Future community",
      desc: "Stories, creators & more",
      tint: "bg-[oklch(0.95_0.04_230)] text-[oklch(0.46_0.12_235)]",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Community{" "}
            <span className="text-muted-foreground text-xl font-medium">(Coming Soon)</span>
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            PlaceEcho is in active development. We're building a community of curious explorers and
            storytellers.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((i) => (
              <div
                key={i.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]"
              >
                <span className={cn("grid h-11 w-11 place-items-center rounded-2xl", i.tint)}>
                  <i.icon className="h-5 w-5" />
                </span>
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
    { icon: Sparkles, label: "AI-Powered Stories", tint: "bg-primary-soft text-primary" },
    {
      icon: AudioLines,
      label: "Natural Audio",
      tint: "bg-[oklch(0.96_0.04_160)] text-[oklch(0.45_0.13_165)]",
    },
    {
      icon: ShieldCheck,
      label: "Privacy Focused",
      tint: "bg-[oklch(0.95_0.04_220)] text-[oklch(0.48_0.14_230)]",
    },
    {
      icon: Compass,
      label: "Made for Explorers",
      tint: "bg-[oklch(0.96_0.04_95)] text-[oklch(0.54_0.14_88)]",
    },
  ];
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[320px_1fr] md:items-center">
        <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
          <img
            src={placeechoPostcard}
            alt="A traveler discovering stories with PlaceEcho"
            loading="lazy"
            width={1536}
            height={1024}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">About PlaceEcho</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            PlaceEcho was created to make every place feel more meaningful through AI-powered
            stories, natural audio, cultural context, and personal exploration. Our technology turns
            any location into a meaningful experience through immersive stories, historical
            insights, guides, and legends.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {pillars.map((p) => (
              <div
                key={p.label}
                className="flex flex-col items-center rounded-2xl border border-border bg-card p-4 text-center"
              >
                <span className={cn("grid h-12 w-12 place-items-center rounded-2xl", p.tint)}>
                  <p.icon className="h-5 w-5" />
                </span>
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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary-soft via-primary-soft/80 to-primary-soft"
      />
      <div className="relative mx-auto max-w-2xl px-4">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
          Ready to Hear the Story Around You?
        </h2>
        <p className="mt-4 text-muted-foreground">Generate your first Echo in seconds.</p>
        <Button
          asChild
          size="lg"
          className="mt-7 rounded-full px-8 py-6 text-base shadow-[var(--shadow-card)]"
        >
          <a href={APP_URL}>Try PlaceEcho Free</a>
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">No credit card required</p>
      </div>
    </section>
  );
}
