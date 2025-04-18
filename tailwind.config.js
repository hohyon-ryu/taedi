/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        "moiza-blue": "#3B82F6",
        "moiza-purple": "#8B5CF6",
        "moiza-gray-bg": "#F3F4F6",
        "moiza-gray-text": "#9CA3AF",
      },
      fontSize: {
        title: "18px",
        subtitle: "16px",
        body: "14px",
        small: "12px",
      },
      borderRadius: {
        card: "8px",
        pill: "20px",
      },
      maxWidth: {
        mobile: "420px",
      },
    },
  },
  plugins: [],
  // Ensure these utilities are not purged
  safelist: [
    "rounded-sm",
    "rounded",
    "rounded-md",
    "rounded-lg",
    "rounded-xl",
    "rounded-2xl",
    "rounded-3xl",
    "rounded-full",
    "opacity-40",
    "mix-blend-overlay",
    "from-gray-500/90",
    "via-gray-500/85",
    "to-gray-500/80",
  ],
};
