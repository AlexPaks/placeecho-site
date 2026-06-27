import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, loadEnv } from "vite";
import { nitro } from "nitro/vite";

const DEMO_PUBLIC_API_BASE_URL = "http://127.0.0.1:8002/public/v1";
const PRODUCTION_PUBLIC_API_BASE_URL = "https://api.placeecho.io/public/v1";

function getPublicApiTarget(publicApiBaseUrl: string) {
  if (!publicApiBaseUrl.startsWith("http://") && !publicApiBaseUrl.startsWith("https://")) {
    return "https://api.placeecho.io";
  }

  return new URL(publicApiBaseUrl).origin;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const isDemoMode =
    mode.toLowerCase() === "demo" || env.VITE_DEMO_MODE?.toString().toLowerCase() === "true";
  const publicApiBaseUrl =
    env.VITE_PUBLIC_API_BASE_URL ||
    (isDemoMode ? DEMO_PUBLIC_API_BASE_URL : PRODUCTION_PUBLIC_API_BASE_URL);

  return {
    resolve: {
      tsconfigPaths: true,
    },
    server: {
      proxy: {
        "/public/v1": {
          target: getPublicApiTarget(publicApiBaseUrl),
          changeOrigin: true,
          secure: true,
        },
      },
    },
    plugins: [
      tanstackStart({
        // Redirect TanStack Start's bundled server entry to src/server.ts.
        server: { entry: "server" },
      }),
      nitro(),
      react(),
      tailwindcss(),
    ],
  };
});
