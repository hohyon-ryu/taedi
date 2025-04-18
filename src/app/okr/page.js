import React from "react";
import OKR from "../../components/OKR";

export const metadata = {
  title: "OKR - 목표 및 성과 | 태재미래전략연구원 디지털 전환팀",
  description:
    "태재미래전략연구원 디지털 전환팀의 목표와 주요 성과 지표입니다. 디지털 시대의 미래 전략과 사회 변화에 대한 연구 목표와 진행 상황을 확인하세요.",
  keywords:
    "OKR, 목표, 성과, 디지털 전환, 연구 성과, 태재미래전략연구원, 디지털 전략",
  openGraph: {
    title: "OKR - 목표 및 성과 | 태재미래전략연구원 디지털 전환팀",
    description:
      "디지털 시대의 미래 전략과 사회 변화에 대한 연구 목표와 진행 상황",
    url: "https://taedi.org/okr",
    siteName: "태재미래전략연구원 디지털 전환팀",
    locale: "ko_KR",
    type: "website",
  },
};

export default function OKRPage() {
  return <OKR />;
}
