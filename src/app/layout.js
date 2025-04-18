import FirebaseAnalytics from "../components/FirebaseAnalytics";
import "../styles/globals.css";
import "../styles/Header.css";
import "../styles/Research.css";
import "../styles/Team.css";
import "../styles/Vision.css";

export const metadata = {
  title: {
    template: "%s | 태재미래전략연구원 디지털 전환팀",
    default: "TFCI Digital Transformation and Social Changes Team",
  },
  description:
    "Taejae Future Consensus Institute - Digital Transformation and Social Changes Team. Pioneering the future through digital transformation research and innovative governance solutions.",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  themeColor: "#1a365d",
  icons: {
    icon: "/static/favicon.png",
    shortcut: "/static/favicon.png",
    apple: "/static/favicon.png",
    other: {
      rel: "apple-touch-icon",
      url: "/static/favicon.png",
    },
  },
  verification: {
    google: "verification_token",
  },
  metadataBase: new URL("https://taedi.org"),
};

export const viewport = {
  themeColor: "#1a365d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" dir="ltr">
      <head>
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <FirebaseAnalytics />
        <div className="app">{children}</div>
      </body>
    </html>
  );
}
