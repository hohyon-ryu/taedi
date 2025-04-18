/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // Added this to catch all JavaScript files
  ],
  theme: {
    extend: {
      // Add any custom theme extensions here if needed
    },
  },
  plugins: [],
  // Enable all Tailwind CSS features including safelist
  safelist: [
    "opacity-40",
    "mix-blend-overlay",
    "from-gray-500/90",
    "via-gray-500/85",
    "to-gray-500/80",
  ],
};
