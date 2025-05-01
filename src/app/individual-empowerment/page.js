import Image from "next/image";
import React from "react";

export const metadata = {
  title: "개인 강화, 공동체, 국가의 변화 | 태재미래전략연구원",
  description:
    "개인의 강화로 사회와 경제질서가 어떻게 변하는지에 대한 연구와 인사이트를 제공합니다.",
  keywords: "개인 강화, 사회 변화, 경제질서, 디지털 전환, 태재미래전략연구원",
  openGraph: {
    title: "개인 강화, 공동체, 국가의 변화 | 태재미래전략연구원",
    description:
      "개인의 강화로 사회와 경제질서가 어떻게 변하는지에 대한 연구와 인사이트를 제공합니다.",
    url: "https://taedi.org/individual-empowerment",
    siteName: "태재미래전략연구원 디지털 전환팀",
    locale: "ko_KR",
    type: "article",
  },
};

export default function IndividualEmpowermentPage() {
  return (
    <div className="notion-style-page">
      <div className="banner-image-container">
        <Image
          src="/static/images/posters/digital_economy/section5.png"
          alt="개인 강화, 공동체, 국가의 변화"
          width={1200}
          height={400}
          className="banner-image"
          priority
        />
      </div>

      <div className="content-container">
        <h1 className="page-title">개인 강화, 공동체, 국가의 변화</h1>
        <p className="subtitle">
          개인의 강화로 사회와 경제질서가 어떻게 변하는지에 대한 이야기
        </p>

        <div className="audio-section">
          <div className="audio-player-container">
            <audio controls className="audio-player">
              <source src="/static/audio/social_changes.m4a" type="audio/mp4" />
              Your browser does not support the audio element.
            </audio>
          </div>

          <div className="audio-info">
            <p>
              이 오디오에서는 디지털 기술의 발전으로 인한 개인 역량 강화가
              어떻게 사회 구조와 경제 질서에 변화를 가져오는지 탐구합니다.
              개인의 역량이 강화됨에 따라 공동체 형성 방식과 국가의 역할이
              어떻게 재정의되는지에 대해 논의합니다.
            </p>
          </div>
        </div>

        <div className="tags-section">
          <span className="tag">개인 역량 강화</span>
          <span className="tag">디지털 전환</span>
          <span className="tag">공동체 변화</span>
          <span className="tag">국가 역할 변화</span>
          <span className="tag">경제 질서</span>
        </div>

        <div className="related-research">
          <h2>관련 연구</h2>
          <p>
            이 오디오는 태재미래전략연구원의 '디지털 전환과 사회 변화' 및
            '디지털 경제와 새로운 경제 질서' 연구 영역과 연계됩니다.
          </p>
          <a href="/" className="back-link">
            홈으로 돌아가기
          </a>
        </div>
      </div>
    </div>
  );
}
