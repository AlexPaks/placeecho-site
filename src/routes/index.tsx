import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MapPin,
  Globe,
  Camera,
  WifiOff,
  AudioLines,
  Languages,
  Play,
  BookOpen,
  Check,
  BookText,
  Landmark,
  Compass,
  Ghost,
  Sparkles,
  Headphones,
  ShieldCheck,
  Users,
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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { HOME_ABOUT_HE, HOME_COMMUNITY_HE, HOME_COPY, HOME_ROADMAP_HE } from "@/lib/home-copy";
import { useLocale, useLocalizedDocument } from "@/lib/locale";
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
import photoGpsScreen from "@/assets/photo-gps-screen.jpeg";
import storyAudioScreen from "@/assets/story-audio-screen.jpeg";

const APP_URL = "https://app.placeecho.io";

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
  const { locale } = useLocale();
  const copy = HOME_COPY[locale];

  useLocalizedDocument({
    title: copy.metaTitle,
    description: copy.metaDescription,
  });

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
        <RoadmapPreview />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const { locale } = useLocale();
  const copy = HOME_COPY[locale].hero;
  const features = [
    {
      icon: MapPin,
      label: copy.features[0],
      tint: "bg-primary-soft",
      iconClass: "text-primary",
    },
    {
      icon: Globe,
      label: copy.features[1],
      tint: "bg-[oklch(0.95_0.04_220)]",
      iconClass: "text-[oklch(0.48_0.14_230)]",
    },
    {
      icon: Camera,
      label: copy.features[2],
      tint: "bg-[oklch(0.96_0.04_160)]",
      iconClass: "text-[oklch(0.45_0.13_165)]",
    },
    {
      icon: AudioLines,
      label: copy.features[3],
      tint: "bg-[oklch(0.96_0.04_30)]",
      iconClass: "text-[oklch(0.55_0.16_35)]",
    },
    {
      icon: Languages,
      label: copy.features[4],
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
            <Sparkles className="h-3.5 w-3.5" /> {copy.badge}
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
            {copy.titleLine1}
            <br />
            {copy.titleLine2} <span className="text-primary italic">{copy.titleAccent}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">{copy.body}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-6 shadow-[var(--shadow-card)]">
              <a href={APP_URL}>{copy.ctaPrimary}</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-6 gap-2 bg-card">
              <Play className="h-4 w-4 fill-primary text-primary" /> {copy.ctaSecondary}
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
  const { locale } = useLocale();

  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-2xl" />
      <div className="relative w-[300px] overflow-hidden rounded-[2.5rem] border-[10px] border-foreground/90 bg-background shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)] sm:w-[340px]">
        <img
          src={createScreen}
          alt={
            locale === "he"
              ? "\u05de\u05e1\u05da \u05d4\u05d9\u05e6\u05d9\u05e8\u05d4 \u05d1\u05d0\u05e4\u05dc\u05d9\u05e7\u05e6\u05d9\u05d9\u05ea PlaceEcho"
              : "PlaceEcho mobile app create screen"
          }
          loading="eager"
          className="block h-auto w-full"
        />
      </div>
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

const PUBLIC_API_CLIENT_ID_KEY = "placeecho_public_client_id";
const demoEnv = import.meta.env as Record<string, string | boolean | undefined>;
const IS_DEMO_MODE =
  demoEnv.MODE?.toString().toLowerCase() === "demo" ||
  demoEnv.VITE_DEMO_MODE?.toString().toLowerCase() === "true";
const PUBLIC_API_BASE_URL = IS_DEMO_MODE
  ? "http://127.0.0.1:8002/public/v1"
  : ((import.meta.env.VITE_PUBLIC_API_BASE_URL as string | undefined) ?? `${APP_URL}/public/v1`);

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

function toDemoUiError(
  error: unknown,
  copy: (typeof HOME_COPY)[keyof typeof HOME_COPY]["demo"],
): DemoUiError {
  if (error instanceof DemoRequestError) {
    if (error.code === "PUBLIC_DAILY_LIMIT_EXCEEDED") {
      return {
        kind: "daily-quota",
        message: copy.errors.quota,
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
    message: copy.errors.generic,
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
  const { locale, dir } = useLocale();
  const copy = HOME_COPY[locale].demo;
  const checks = copy.checks;
  const isRtl = dir === "rtl";
  const [location, setLocation] = useState("");
  const [length, setLength] = useState("short");
  const [experience, setExperience] = useState("story");
  const [language, setLanguage] = useState(locale === "he" ? "hebrew" : "english");
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
    { value: "english", label: copy.languageOptions.english, flag: UKFlag },
    { value: "german", label: copy.languageOptions.german, flag: GermanyFlag },
    { value: "hebrew", label: copy.languageOptions.hebrew, flag: IsraelFlag },
    { value: "french", label: copy.languageOptions.french, flag: FranceFlag },
    { value: "russian", label: copy.languageOptions.russian, flag: RussiaFlag },
    { value: "spanish", label: copy.languageOptions.spanish, flag: SpainFlag },
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
    const uiError = toDemoUiError(error, copy);

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
        message: copy.errors.locationUnavailable,
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
          message: copy.errors.locationFailed,
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
          const uiError = toDemoUiError(error, copy);
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
  }, [copy, isDemoQuotaExceeded, isLocationFocused, languageCode, location]);

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
        const uiError = toDemoUiError(error, copy);
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
        message: copy.photoError,
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
        message: copy.gpsRequired,
      });
      return;
    }

    if (!coords) {
      setSubmitError({
        kind: "default",
        message: copy.errors.locationRequired,
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
          message: copy.errors.playback,
        });
      }
      return;
    }

    if (typeof window === "undefined" || !("speechSynthesis" in window) || !story.text) {
      setSubmitError({
        kind: "default",
        message: copy.errors.noPlayback,
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
            <h2 className="text-3xl font-bold sm:text-4xl">{copy.title}</h2>
            <p className="mt-3 max-w-md text-muted-foreground">{copy.intro}</p>
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
              <a href="#try-demo">{copy.cta}</a>
            </Button>
          </div>
          <form
            onSubmit={handleGenerateStory}
            className="mx-auto w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
          >
            <h3 className="mb-5 text-center text-xl font-bold">{copy.formTitle}</h3>
            <div className="space-y-5">
              <FormField label={copy.searchLabel}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
                  <div className="relative flex-1">
                    <MapPin
                      className={cn(
                        "pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 text-primary",
                        isRtl ? "right-3" : "left-3",
                      )}
                    />
                    <Input
                      type="text"
                      value={location}
                      onChange={handleLocationChange}
                      onFocus={() => setIsLocationFocused(true)}
                      onBlur={() => {
                        window.setTimeout(() => setIsLocationFocused(false), 120);
                      }}
                      placeholder={copy.searchPlaceholder}
                      className={cn("rounded-xl bg-background", isRtl ? "pr-9" : "pl-9")}
                    />
                    {shouldShowLocationDropdown ? (
                      <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-20 overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
                        {isSearchingLocations ? (
                          <div className="px-4 py-3 text-sm text-muted-foreground">
                            {copy.searchLoading}
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
                            {copy.searchEmpty}
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
                                className="flex w-full items-start gap-3 px-4 py-3 text-start hover:bg-secondary"
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
                      ? copy.unavailable
                      : isResolvingMyLocation
                        ? copy.findingLocation
                        : copy.useMyLocation}
                  </Button>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {copy.searchHelp}
                </p>
              </FormField>

              <FormField label={copy.photoLabel}>
                <div className="space-y-3">
                  <label className="flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-border bg-background px-4 py-4 shadow-[var(--shadow-soft)] transition-colors hover:bg-secondary/50">
                    <span className="inline-flex items-center rounded-full bg-primary-soft px-4 py-2 text-sm font-semibold text-primary">
                      {copy.choosePhoto}
                    </span>
                    <span className="min-w-0 flex-1 text-end text-sm text-muted-foreground">
                      {photoState.status === "idle" ? copy.noPhotoSelected : photoState.fileName}
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
                    {copy.gpsRequired}
                  </p>

                  {photoState.status !== "idle" ? (
                    <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-soft)]">
                      <div className="flex items-center justify-between border-b border-border/70 bg-secondary/40 px-4 py-3">
                        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                          <Camera className="h-3.5 w-3.5" />
                          {copy.demoPhoto}
                        </div>
                        <button
                          type="button"
                          onClick={handleRemovePhoto}
                          className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                        >
                          <X className="h-3.5 w-3.5" />
                          {copy.removePhoto}
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
                          <p className="text-sm text-muted-foreground">{copy.photoReading}</p>
                        ) : null}

                        {photoState.status === "resolved" ? (
                          <>
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-sm font-semibold text-primary">
                              <MapPin className="h-4 w-4" />
                              {buildPlaceLabel(resolvedPhotoContext, photoState.coords)}
                            </div>
                            <p className="text-xs leading-relaxed text-muted-foreground">
                              {resolvedPhotoContext?.placeName
                                ? copy.photoResolved
                                : copy.photoResolvedFallback}
                            </p>
                          </>
                        ) : null}

                        {photoState.status === "missing-gps" ? (
                          <p className="text-sm leading-relaxed text-[oklch(0.54_0.18_8)]">
                            {copy.gpsRequired}
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

              <FormField label={copy.lengthLabel}>
                <ToggleGroup
                  type="single"
                  value={length}
                  onValueChange={(value) => {
                    if (value) setLength(value);
                  }}
                  variant="outline"
                  className="grid grid-cols-3 gap-2 rounded-2xl bg-background p-1"
                  aria-label={copy.lengthAria}
                >
                  {[
                    { v: "short", l: copy.lengthOptions.short },
                    { v: "medium", l: copy.lengthOptions.medium },
                    { v: "long", l: copy.lengthOptions.long },
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

              <FormField label={copy.experienceLabel}>
                <ToggleGroup
                  type="single"
                  value={experience}
                  onValueChange={(value) => {
                    if (value) setExperience(value);
                  }}
                  variant="outline"
                  className="grid grid-cols-2 gap-3"
                  aria-label={copy.experienceAria}
                >
                  {[
                    {
                      v: "story",
                      l: copy.experienceOptions.story,
                      icon: BookText,
                      tint: "bg-primary-soft text-primary",
                    },
                    {
                      v: "historical",
                      l: copy.experienceOptions.historical,
                      icon: Landmark,
                      tint: "bg-[oklch(0.97_0.04_85)] text-[oklch(0.48_0.16_72)]",
                    },
                    {
                      v: "guide",
                      l: copy.experienceOptions.guide,
                      icon: Compass,
                      tint: "bg-[oklch(0.96_0.04_230)] text-[oklch(0.45_0.13_235)]",
                    },
                    {
                      v: "urban-legend",
                      l: copy.experienceOptions.urbanLegend,
                      icon: Ghost,
                      tint: "bg-[oklch(0.96_0.04_8)] text-[oklch(0.54_0.18_8)]",
                    },
                  ].map((o) => (
                    <ToggleGroupItem
                      key={o.v}
                      value={o.v}
                      className="h-auto min-h-14 flex-col items-start justify-center rounded-2xl border border-border bg-card px-3 py-2.5 text-start text-foreground shadow-[var(--shadow-soft)] hover:bg-card hover:text-foreground data-[state=on]:border-primary data-[state=on]:bg-[oklch(0.98_0.03_72)] data-[state=on]:text-foreground data-[state=on]:shadow-[var(--shadow-card)]"
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

              <FormField label={copy.languageLabel}>
                <ToggleGroup
                  type="single"
                  value={language}
                  onValueChange={(value) => {
                    if (value) setLanguage(value);
                  }}
                  className="grid grid-cols-3 gap-2"
                  aria-label={copy.languageAria}
                >
                  {languageOptions.map((option) => (
                    <ToggleGroupItem
                      key={option.value}
                      value={option.value}
                      className="h-12 justify-start rounded-xl border border-border bg-card px-3 text-start text-sm font-semibold text-foreground shadow-none hover:bg-card hover:text-foreground data-[state=on]:border-primary data-[state=on]:bg-[oklch(0.98_0.03_72)] data-[state=on]:text-foreground data-[state=on]:shadow-[var(--shadow-soft)]"
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
                        {copy.quotaCta}
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
                  ? copy.unavailable
                  : isSubmitting
                    ? copy.generating
                    : copy.generate}
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
                  {copy.liveResult}
                </span>
                {demoResult.cached ? (
                  <span className="text-xs font-semibold text-muted-foreground">{copy.cached}</span>
                ) : null}
                {demoResult.degraded_mode ? (
                  <span className="text-xs font-semibold text-muted-foreground">
                    {copy.degraded}
                  </span>
                ) : null}
              </div>
              <h3 className="mt-4 text-2xl font-bold sm:text-3xl">{demoResult.story.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {activeCoords
                  ? buildPlaceLabel(demoResult.context ?? resolvedPhotoContext, activeCoords)
                  : (demoResult.context?.placeName ?? copy.generatedFromApi)}
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
                    {copy.storyText}
                  </div>
                  <p className="mt-3 whitespace-pre-line text-sm leading-7 text-foreground/90">
                    {demoResult.story.text ?? copy.noStoryText}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    {copy.listen}
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
                        <AudioLines className="h-4 w-4" /> {copy.stopListening}
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 fill-current" /> {copy.listenToStory}
                      </>
                    )}
                  </Button>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {demoResult.story.audio_url
                      ? copy.audioAvailable
                      : demoListenMode === "speech" ||
                          typeof window === "undefined" ||
                          "speechSynthesis" in window
                        ? copy.browserVoice
                        : copy.noAudio}
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
                      {copy.audioUnsupported}
                    </audio>
                  ) : null}
                </div>

                <div className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    {copy.storyDetails}
                  </div>
                  <div className="mt-4 space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-foreground">{copy.mode}:</span>{" "}
                      <span className="text-muted-foreground">
                        {demoResult.story.experience_mode ?? getExperienceMode(experience)}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">{copy.language}:</span>{" "}
                      <span className="text-muted-foreground">
                        {demoResult.story.language ?? getLanguageCode(language)}
                      </span>
                    </div>
                    {demoResult.context?.confidence ? (
                      <div>
                        <span className="font-semibold text-foreground">
                          {copy.locationConfidence}:
                        </span>{" "}
                        <span className="text-muted-foreground">
                          {Math.round(demoResult.context.confidence * 100)}%
                        </span>
                      </div>
                    ) : null}
                    {demoResult.story.share_url ? (
                      <div>
                        <span className="font-semibold text-foreground">{copy.shareUrl}:</span>{" "}
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
  paragraphs: readonly string[];
  highlights: readonly string[];
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
  const { locale } = useLocale();
  const copy = HOME_COPY[locale].featured;
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
          {copy.modeMeta[echo.mode].label}
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
            {copy.whyDifferent}
          </div>
          <p className="mt-1 text-xs leading-relaxed opacity-90">{echo.focus}</p>
        </div>
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => onListen(echo)}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary-soft py-2 text-xs font-semibold text-primary hover:bg-primary/15"
          >
            <Play className="h-3.5 w-3.5 fill-primary" /> {copy.listen}
          </button>
          <button
            type="button"
            onClick={() => onRead(echo)}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border py-2 text-xs font-semibold hover:bg-secondary"
          >
            <BookOpen className="h-3.5 w-3.5" /> {copy.readStory}
          </button>
        </div>
      </div>
    </article>
  );
}

function FeaturedEchoes() {
  const { locale } = useLocale();
  const copy = HOME_COPY[locale].featured;
  const [activeEcho, setActiveEcho] = useState<Echo | null>(null);
  const [previewMode, setPreviewMode] = useState<"listen" | "read" | null>(null);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const localizedEchoes: Echo[] = copy.echoes.map((echo, index) => ({
    ...echo,
    img: ECHOES[index].img,
    tagColor: ECHOES[index].tagColor,
  }));
  const featuredEchoes = localizedEchoes.slice(0, 4);

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
  const activeCopyMeta = activeEcho ? copy.modeMeta[activeEcho.mode] : null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">{copy.title}</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">{copy.intro}</p>
        </div>
        <Button
          type="button"
          variant="outline"
          className="rounded-full gap-1 bg-card"
          onClick={() => setCatalogOpen(true)}
        >
          {copy.allCta} <ChevronRight className="h-4 w-4" />
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
              <DialogHeader className="space-y-3 text-start">
                <DialogTitle className="text-2xl sm:text-3xl">{copy.allDialogTitle}</DialogTitle>
                <DialogDescription className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  {copy.allDialogDescription}
                </DialogDescription>
              </DialogHeader>
            </div>
            <div className="max-h-[calc(90vh-9rem)] overflow-y-auto p-6 sm:p-8">
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {localizedEchoes.map((echo) => (
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
          {activeEcho && activeMeta && activeCopyMeta ? (
            <div className="overflow-hidden rounded-[1.75rem] bg-card">
              <div
                className={cn(
                  "border-b border-border bg-gradient-to-br p-6 sm:p-8",
                  activeMeta.panelClass,
                )}
              >
                <DialogHeader className="space-y-3 text-start">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold",
                        activeMeta.badgeClass,
                      )}
                    >
                      <activeMeta.icon className="h-3.5 w-3.5" />
                      {activeCopyMeta.label}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">
                      {activeEcho.location}
                    </span>
                  </div>
                  <DialogTitle className="text-2xl sm:text-3xl">{activeEcho.title}</DialogTitle>
                  <DialogDescription className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {activeCopyMeta.description}
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
                            {copy.audioPreview}
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {copy.audioPreviewIntro}
                          </p>
                        </div>
                        <Button
                          type="button"
                          onClick={togglePreviewAudio}
                          className="rounded-full px-5"
                        >
                          {isSpeaking ? (
                            <>
                              <AudioLines className="h-4 w-4" /> {copy.stopPreview}
                            </>
                          ) : (
                            <>
                              <Play className="h-4 w-4 fill-current" /> {copy.playPreview}
                            </>
                          )}
                        </Button>
                      </div>
                      <div className="mt-5 rounded-2xl bg-background p-4 text-sm leading-relaxed text-muted-foreground">
                        "{activeEcho.listenScript}"
                      </div>
                      <p className="mt-3 text-xs text-muted-foreground">
                        {typeof window !== "undefined" && "speechSynthesis" in window
                          ? copy.browserPreview
                          : copy.noBrowserPreview}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        {copy.highlights}
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
                        {copy.modeSignature}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {activeCopyMeta.chips.map((chip) => (
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
                        {copy.experienceDna}
                      </div>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {activeEcho.focus}
                      </p>
                    </div>
                    <div className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        {copy.keyHighlights}
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
                      <Play className="h-4 w-4 fill-current" /> {copy.switchToListen}
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
  const { locale } = useLocale();
  const copy = HOME_COPY[locale].experienceModes;
  const modes = [
    {
      icon: BookText,
      name: copy.items[0][0],
      desc: copy.items[0][1],
      tint: "bg-primary-soft text-primary",
    },
    {
      icon: Landmark,
      name: copy.items[1][0],
      desc: copy.items[1][1],
      tint: "bg-accent-soft text-accent-foreground",
    },
    {
      icon: Compass,
      name: copy.items[2][0],
      desc: copy.items[2][1],
      tint: "bg-[oklch(0.94_0.04_240)] text-[oklch(0.45_0.15_240)]",
    },
    {
      icon: Ghost,
      name: copy.items[3][0],
      desc: copy.items[3][1],
      tint: "bg-[oklch(0.94_0.04_300)] text-[oklch(0.45_0.18_300)]",
    },
  ];
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">{copy.title}</h2>
        <p className="mt-2 text-muted-foreground">{copy.intro}</p>
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
  const { locale } = useLocale();
  const copy = HOME_COPY[locale].languages;
  const langs = [
    { name: copy.items[0], flag: <UKFlag /> },
    { name: copy.items[1], flag: <IsraelFlag /> },
    { name: copy.items[2], flag: <FranceFlag /> },
    { name: copy.items[3], flag: <GermanyFlag /> },
    { name: copy.items[4], flag: <SpainFlag /> },
    { name: copy.items[5], flag: <RussiaFlag /> },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <h2 className="text-3xl font-bold sm:text-4xl">{copy.title}</h2>
      <p className="mt-2 text-muted-foreground">{copy.intro}</p>
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
  const { locale } = useLocale();
  const copy = HOME_COPY[locale].screenshots;
  const steps = [
    {
      icon: MapIcon,
      step: copy.steps[0][0],
      title: copy.steps[0][1],
      desc: copy.steps[0][2],
      tint: "from-[oklch(0.85_0.12_220)] to-[oklch(0.7_0.15_220)]",
      image: locationPickerScreen,
    },
    {
      icon: Compass,
      step: copy.steps[1][0],
      title: copy.steps[1][1],
      desc: copy.steps[1][2],
      tint: "from-primary-soft to-primary/40",
      image: chooseExperienceScreen,
    },
    {
      icon: Headphones,
      step: copy.steps[2][0],
      title: copy.steps[2][1],
      desc: copy.steps[2][2],
      tint: "from-[oklch(0.4_0.06_50)] to-[oklch(0.25_0.04_50)]",
      image: storyAudioScreen,
    },
    {
      icon: Library,
      step: copy.steps[3][0],
      title: copy.steps[3][1],
      desc: copy.steps[3][2],
      tint: "from-accent-soft to-accent/40",
      image: myStoriesScreen,
    },
  ];
  return (
    <section className="bg-primary-soft/60 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">{copy.title}</h2>
        <p className="mt-2 text-muted-foreground">{copy.intro}</p>
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
              <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {s.step}
              </p>
              <h3 className="mt-2 text-center text-base font-bold">{s.title}</h3>
              <p className="mx-auto mt-1 max-w-[220px] text-center text-sm text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-[2rem] border border-border bg-card/95 p-6 shadow-[var(--shadow-card)] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[220px_1fr] lg:items-center xl:grid-cols-[240px_1fr]">
            <div className="mx-auto w-full max-w-[220px]">
              <div className="relative mx-auto aspect-[9/16] w-full overflow-hidden rounded-[1.75rem] border-[6px] border-foreground/90 bg-background shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]">
                <img
                  src={photoGpsScreen}
                  alt={copy.photoAlt}
                  loading="lazy"
                  className="block h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                <Camera className="h-3.5 w-3.5" />
                {copy.photoBadge}
              </span>
              <h3 className="mt-4 text-2xl font-bold sm:text-3xl">{copy.photoTitle}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                {copy.photoBody}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy.photoNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Community ---------- */
function Community() {
  const { locale } = useLocale();
  const copy = locale === "he" ? HOME_COMMUNITY_HE : HOME_COPY[locale].community;
  const items = [
    {
      icon: MapPin,
      title: copy.items[0][0],
      desc: copy.items[0][1],
      tint: "bg-[oklch(0.95_0.04_220)] text-[oklch(0.48_0.14_230)]",
    },
    {
      icon: Heart,
      title: copy.items[1][0],
      desc: copy.items[1][1],
      tint: "bg-[oklch(0.96_0.04_12)] text-[oklch(0.56_0.18_18)]",
    },
    {
      icon: Sparkles,
      title: copy.items[2][0],
      desc: copy.items[2][1],
      tint: "bg-primary-soft text-primary",
    },
    {
      icon: Users,
      title: copy.items[3][0],
      desc: copy.items[3][1],
      tint: "bg-[oklch(0.95_0.04_230)] text-[oklch(0.46_0.12_235)]",
    },
  ];
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
            <Users className="h-3.5 w-3.5" />
            {copy.title}
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{copy.subtitle}</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{copy.intro}</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start">
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((i) => (
              <div
                key={i.title}
                className="group rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-card)]"
              >
                <span
                  className={cn(
                    "grid h-11 w-11 place-items-center rounded-2xl shadow-[var(--shadow-soft)]",
                    i.tint,
                  )}
                >
                  <i.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold">{i.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{i.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              {copy.panelBadge}
            </span>
            <h3 className="mt-4 text-2xl font-bold">{copy.cardTitle}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
              {copy.cardBody}
            </p>
            <ul className="mt-6 space-y-3">
              {copy.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <span className="font-medium text-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-6 w-full rounded-full">
              <a href={APP_URL}>{copy.cardCta}</a>
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">{copy.cardNote}</p>
            <div className="mt-6 rounded-2xl border border-border bg-secondary/60 p-4">
              <p className="text-sm font-medium text-foreground/90">{copy.trustMessage}</p>
            </div>
          </div>
        </div>
        <div className="mt-6 rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold sm:text-2xl">{copy.futureTitle}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
                {copy.futureBody}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 self-start rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
              <Star className="h-3.5 w-3.5" />
              {copy.panelBadge}
            </span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {copy.futureItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground/85 shadow-[var(--shadow-soft)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function AboutPlaceEcho() {
  const { locale } = useLocale();
  const copy = locale === "he" ? HOME_ABOUT_HE : HOME_COPY[locale].about;
  const pillars = [
    {
      icon: Sparkles,
      title: copy.pillars[0].title,
      description: copy.pillars[0].description,
      tint: "bg-primary-soft text-primary",
    },
    {
      icon: AudioLines,
      title: copy.pillars[1].title,
      description: copy.pillars[1].description,
      tint: "bg-[oklch(0.96_0.04_160)] text-[oklch(0.45_0.13_165)]",
    },
    {
      icon: ShieldCheck,
      title: copy.pillars[2].title,
      description: copy.pillars[2].description,
      tint: "bg-[oklch(0.95_0.04_220)] text-[oklch(0.48_0.14_230)]",
    },
    {
      icon: Compass,
      title: copy.pillars[3].title,
      description: copy.pillars[3].description,
      tint: "bg-[oklch(0.96_0.04_95)] text-[oklch(0.54_0.14_88)]",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,var(--color-secondary)/0.38_0%,var(--color-background)_100%)] py-18 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,oklch(0.95_0.06_92),transparent_68%)] opacity-80"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-[var(--shadow-card)]">
            <div className="absolute inset-x-5 top-5 z-10 flex items-center justify-between">
              <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground shadow-[var(--shadow-soft)]">
                {copy.badge}
              </span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                PlaceEcho
              </span>
            </div>
            <div className="absolute inset-x-5 bottom-5 z-10 rounded-3xl border border-white/40 bg-background/88 p-4 shadow-[var(--shadow-soft)] backdrop-blur">
              <p className="text-sm font-medium leading-6 text-foreground/85">{copy.quote}</p>
            </div>
            <img
              src={placeechoPostcard}
              alt={copy.imageAlt}
              loading="lazy"
              width={1536}
              height={1024}
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
              <Heart className="h-3.5 w-3.5" />
              {copy.badge}
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">{copy.title}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-foreground/85">{copy.lead}</p>
            <div className="mt-5 max-w-2xl space-y-4 text-muted-foreground">
              {copy.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {copy.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-border/70 bg-card/85 px-5 py-4 shadow-[var(--shadow-soft)]"
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link to="/about">{copy.cta}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full bg-background px-6"
              >
                <a href={APP_URL}>{HOME_COPY[locale].finalCta.cta}</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-[1.75rem] border border-border/70 bg-card/92 p-5 shadow-[var(--shadow-soft)]"
            >
              <span className={cn("grid h-12 w-12 place-items-center rounded-2xl", pillar.tint)}>
                <pillar.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Roadmap ---------- */
function RoadmapPreview() {
  const { locale } = useLocale();
  const copy = locale === "he" ? HOME_ROADMAP_HE : HOME_COPY[locale].roadmap;
  type RoadmapCard = {
    title: string;
    description: string;
    badge: string;
    featured: boolean;
    icon: typeof WifiOff;
    secondaryIcon?: typeof WifiOff;
    tint: string;
    badgeClass: string;
  };

  const cards: RoadmapCard[] = [
    {
      ...copy.items[0],
      icon: WifiOff,
      secondaryIcon: Camera,
      tint: "bg-primary-soft text-primary",
      badgeClass: "bg-primary/12 text-primary border-primary/15",
    },
    {
      ...copy.items[1],
      icon: Users,
      tint: "bg-[oklch(0.95_0.04_220)] text-[oklch(0.48_0.14_230)]",
      badgeClass:
        "bg-[oklch(0.95_0.04_220)] text-[oklch(0.4_0.12_235)] border-[oklch(0.9_0.03_220)]",
    },
    {
      ...copy.items[2],
      icon: Languages,
      tint: "bg-[oklch(0.96_0.04_160)] text-[oklch(0.45_0.13_165)]",
      badgeClass:
        "bg-[oklch(0.96_0.04_160)] text-[oklch(0.4_0.11_165)] border-[oklch(0.9_0.03_160)]",
    },
    {
      ...copy.items[3],
      icon: Sparkles,
      tint: "bg-[oklch(0.96_0.04_95)] text-[oklch(0.54_0.14_88)]",
      badgeClass:
        "bg-[oklch(0.96_0.04_95)] text-[oklch(0.47_0.13_88)] border-[oklch(0.91_0.03_95)]",
    },
  ];

  return (
    <section id="product-roadmap" className="relative overflow-hidden py-18 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,oklch(0.97_0.05_92),transparent_70%)] opacity-70"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
            <Sparkles className="h-3.5 w-3.5" />
            {copy.eyebrow}
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">{copy.title}</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            {copy.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className={cn(
                "group relative flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-border/70 bg-card/95 p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]",
                index === 0 &&
                  "border-primary/20 bg-[linear-gradient(180deg,oklch(0.98_0.02_85),oklch(0.99_0.01_95))] shadow-[0_20px_45px_-22px_rgba(107,72,38,0.3)]",
              )}
            >
              <div
                aria-hidden
                className={cn(
                  "pointer-events-none absolute inset-x-0 top-0 h-24 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                  index === 0
                    ? "bg-[radial-gradient(circle_at_top,rgba(185,129,60,0.16),transparent_72%)]"
                    : "bg-[radial-gradient(circle_at_top,rgba(120,110,90,0.08),transparent_72%)]",
                )}
              />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className={cn("grid h-12 w-12 place-items-center rounded-2xl", card.tint)}>
                    <card.icon className="h-5 w-5" />
                  </span>
                  {card.secondaryIcon ? (
                    <span className="grid h-10 w-10 place-items-center rounded-2xl border border-border/70 bg-background/90 text-foreground/75 shadow-[var(--shadow-soft)]">
                      <card.secondaryIcon className="h-4.5 w-4.5" />
                    </span>
                  ) : null}
                </div>
                <span
                  className={cn(
                    "rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]",
                    card.badgeClass,
                  )}
                >
                  {card.badge}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold leading-tight text-foreground">{card.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                {card.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-base leading-7 text-foreground/85">{copy.footer[0]}</p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy.footer[1]}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  const { locale } = useLocale();
  const copy = HOME_COPY[locale].finalCta;
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
        <h2 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">{copy.title}</h2>
        <p className="mt-4 text-muted-foreground">{copy.body}</p>
        <Button
          asChild
          size="lg"
          className="mt-7 rounded-full px-8 py-6 text-base shadow-[var(--shadow-card)]"
        >
          <a href={APP_URL}>{copy.cta}</a>
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">{copy.note}</p>
      </div>
    </section>
  );
}
