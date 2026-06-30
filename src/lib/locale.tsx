import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type SiteLocale = "en" | "he";

type LocaleContextValue = {
  locale: SiteLocale;
  dir: "ltr" | "rtl";
  setLocale: (locale: SiteLocale) => void;
  toggleLocale: () => void;
};

const LOCALE_STORAGE_KEY = "placeecho-site-locale";

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getLocaleDirection(locale: SiteLocale) {
  return locale === "he" ? "rtl" : "ltr";
}

function isSupportedLocale(value: string | null): value is SiteLocale {
  return value === "en" || value === "he";
}

function getInitialLocale(): SiteLocale {
  if (typeof window === "undefined") return "en";

  const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  if (isSupportedLocale(storedLocale)) return storedLocale;

  const browserLocales = [...(window.navigator.languages ?? []), window.navigator.language].filter(
    Boolean,
  );

  return browserLocales.some((value) => value.toLowerCase().startsWith("he")) ? "he" : "en";
}

function syncDocumentLocale(locale: SiteLocale) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  root.lang = locale;
  root.dir = getLocaleDirection(locale);
}

function setDocumentMeta(
  selector: { name?: string; property?: string },
  content: string | undefined,
) {
  if (typeof document === "undefined" || !content) return;

  const query = selector.name
    ? `meta[name="${selector.name}"]`
    : `meta[property="${selector.property}"]`;
  const element = document.head.querySelector<HTMLMetaElement>(query);
  if (element) {
    element.setAttribute("content", content);
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<SiteLocale>("en");

  useEffect(() => {
    setLocaleState(getInitialLocale());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    }
    syncDocumentLocale(locale);
  }, [locale]);

  const setLocale = useCallback((nextLocale: SiteLocale) => {
    setLocaleState(nextLocale);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => (current === "en" ? "he" : "en"));
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      dir: getLocaleDirection(locale),
      setLocale,
      toggleLocale,
    }),
    [locale, setLocale, toggleLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider.");
  }

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLocalizedDocument({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  useEffect(() => {
    if (typeof document === "undefined") return;

    document.title = title;
    setDocumentMeta({ name: "description" }, description);
    setDocumentMeta({ property: "og:title" }, title);
    setDocumentMeta({ property: "og:description" }, description);
    setDocumentMeta({ name: "twitter:title" }, title);
    setDocumentMeta({ name: "twitter:description" }, description);
  }, [description, title]);
}
