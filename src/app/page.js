import React from "react";
import Header from "../components/Header";
import Research from "../components/Research";
import Vision from "../components/Vision";
import Team from "../components/Team";

export const metadata = {
  title: "태재미래전략연구원 디지털 전환팀 | Digital Transformation Research",
  description:
    "태재미래전략연구원 디지털 전환팀은 디지털 기술의 발전으로 인한 사회 변화를 연구하고, 미래 사회의 비전과 전략을 제시합니다. 인공지능, 디지털 거버넌스, 사회혁신에 대한 최신 연구와 인사이트를 제공합니다.",
  keywords:
    "태재미래전략연구원, 디지털 전환, 미래 전략, 연구, 디지털 트랜스포메이션, 인공지능, 디지털 거버넌스, 사회혁신, AI, 디지털 경제, 미래사회",
  openGraph: {
    title: "태재미래전략연구원 디지털 전환팀 | TFCI Digital Transformation",
    description:
      "디지털 기술의 발전으로 인한 사회 변화를 연구하고, 미래 사회의 비전과 전략을 제시합니다. 최신 디지털 전환 및 AI 연구 성과를 확인하세요.",
    url: "https://taedi.org",
    siteName: "태재미래전략연구원 디지털 전환팀",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/static/team.jpg",
        width: 1200,
        height: 630,
        alt: "태재미래전략연구원 디지털 전환팀",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "태재미래전략연구원 디지털 전환팀",
    description: "디지털 기술의 발전으로 인한 사회 변화 연구 및 미래 전략",
    images: ["/static/team.jpg"],
  },
  alternates: {
    canonical: "https://taedi.org",
  },
};

// JSON-LD structured data for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  "name": "태재미래전략연구원 디지털 전환팀",
  "alternateName": "TFCI Digital Transformation Team",
  "url": "https://taedi.org",
  "logo": "https://taedi.org/static/favicon.png",
  "description": "디지털 기술의 발전으로 인한 사회 변화를 연구하고, 미래 사회의 비전과 전략을 제시합니다.",
  "knowsAbout": ["Digital Transformation", "AI Governance", "Digital Economy", "Social Innovation"],
  "sameAs": [
    "https://taedi.org"
  ]
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <article itemScope itemType="https://schema.org/WebPage">
          <meta itemProp="name" content="태재미래전략연구원 디지털 전환팀" />
          <section aria-labelledby="vision-section">
            <Vision />
          </section>
          <section aria-labelledby="research-section">
            <Research />
          </section>
          <section aria-labelledby="team-section">
            <Team />
          </section>
        </article>
      </main>
    </>
  );
}
