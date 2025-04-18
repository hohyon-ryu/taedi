import React from "react";
import Header from "../components/Header";
import OKR from "../components/OKR";
import Research from "../components/Research";
import Team from "../components/Team";
import Vision from "../components/Vision";

export const metadata = {
  title: "태재미래전략연구원 디지털 전환팀",
  description:
    "태재미래전략연구원 디지털 전환팀은 디지털 기술의 발전으로 인한 사회 변화를 연구하고, 미래 사회의 비전과 전략을 제시합니다.",
  keywords:
    "태재미래전략연구원, 디지털 전환, 미래 전략, 연구, 디지털 트랜스포메이션",
  openGraph: {
    title: "태재미래전략연구원 디지털 전환팀",
    description:
      "디지털 기술의 발전으로 인한 사회 변화를 연구하고, 미래 사회의 비전과 전략을 제시합니다",
    url: "https://taedi.org",
    siteName: "태재미래전략연구원 디지털 전환팀",
    locale: "ko_KR",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Vision />
        <Research />
        <OKR />
        <Team />
      </main>
    </>
  );
}
