import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gallery wall + ink
        wall: "#F5F3EE",
        paper: "#FFFFFF",
        ink: "#1B1A18",
        muted: "#5F5B54",
        line: "#DDD8CE",
        accent: "#B2391B",
        // "Night room" used by Beyond Work
        night: "#161513",
        "night-soft": "#211F1C",
        "night-line": "#36332E",
        "night-ink": "#EDE9E1",
        "night-muted": "#A39D92",
        // Pigments for the generative artworks
        ochre: "#D9A441",
        cobalt: "#2F4B8F",
        vermilion: "#C8452A",
        sage: "#8A9A7B",
        blush: "#E6B8A2",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        frame: "0 1px 2px rgba(27,26,24,0.06), 0 12px 32px -12px rgba(27,26,24,0.25)",
        "frame-lift": "0 2px 4px rgba(27,26,24,0.08), 0 28px 60px -20px rgba(27,26,24,0.4)",
      },
      keyframes: {
        rise: { from: { transform: "translateY(105%)" }, to: { transform: "translateY(0)" } },
        lift: { from: { transform: "translateY(18px)" }, to: { transform: "translateY(0)" } },
        fade: { from: { opacity: "0" }, to: { opacity: "1" } },
      },
      animation: {
        // Hero intro runs in CSS so it starts on first paint, before hydration (keeps LCP fast)
        rise: "rise 1s cubic-bezier(0.22,1,0.36,1) both",
        lift: "lift 0.9s cubic-bezier(0.22,1,0.36,1) both",
        fade: "fade 0.8s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
