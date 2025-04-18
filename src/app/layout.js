import FirebaseAnalytics from "../components/FirebaseAnalytics";
import "../styles/globals.css";
import "../styles/Header.css";
import "../styles/OKR.css";
import "../styles/Research.css";
import "../styles/Team.css";
import "../styles/Vision.css";

export const metadata = {
  title: "TFCI Digital Transformation Team",
  description:
    "Taejae Future Consensus Institute - Digital Transformation Team. Pioneering the future through digital transformation research and innovative governance solutions.",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  themeColor: "#1a365d",
};

export const viewport = {
  themeColor: "#1a365d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FirebaseAnalytics />
        <div className="app">{children}</div>
      </body>
    </html>
  );
}
