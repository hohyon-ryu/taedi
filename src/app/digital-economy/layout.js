// filepath: /Users/will_ryu/workspace/hohyon-ryu/taedi/src/app/digital-economy/layout.js
export const metadata = {
  title: "디지털 시대의 경제 질서 연구 | 태재미래전략연구원",
  description:
    "디지털 전환이 가속화됨에 따라 사회 구조는 어떻게 변화하며, 이러한 변화는 기존 경제 질서에 어떤 영향을 미치는가? 디지털 시대의 경제 질서에 대한 연구 기획안입니다.",
  keywords:
    "디지털 경제, 디지털 시대, 경제 질서, 디지털 전환, 사회 변화, 미래 경제, 태재미래전략연구원",
  openGraph: {
    title: "디지털 시대의 경제 질서 연구 | 태재미래전략연구원",
    description:
      "디지털 전환에 따른 사회 구조 변화와 경제 질서에 미치는 영향에 대한 연구",
    url: "https://taedi.org/digital-economy",
    siteName: "태재미래전략연구원 디지털 전환팀",
    locale: "ko_KR",
    type: "article",
    publishedTime: "2025-04-18T00:00:00Z",
  },
};

export default function DigitalEconomyLayout({ children }) {
  return <>{children}</>;
}