import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        primaryGlow: "#3B82F6",
        accent: "#22D3EE",
        dark: "#0B0F19",
        light: "#F8FAFC",
        muted: "#94A3B8"
      },
      boxShadow: {
        glass: "0 8px 32px rgba(37, 99, 235, 0.25)"
      },
      backdropBlur: {
        xs: "2px"
      },
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(at 20% 20%, rgba(59,130,246,0.18) 0, transparent 45%), radial-gradient(at 80% 0%, rgba(34,211,238,0.16) 0, transparent 50%), radial-gradient(at 0% 80%, rgba(37,99,235,0.16) 0, transparent 45%), radial-gradient(at 80% 80%, rgba(15,23,42,0.7) 0, transparent 50%)"
      }
    }
  },
  plugins: []
};

export default config;
