import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  theme: { extend: { colors: { amber: "#E07A5F", sand: "#D4A373", slate: "#1D2A44", cream: "#FAF5EC" } } }, plugins: [] } satisfies Config;
