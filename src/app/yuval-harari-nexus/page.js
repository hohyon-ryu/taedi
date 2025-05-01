import Image from "next/image";
import React from "react";
import AudioPageStylesComponent from "../../components/AudioPageStyles";

export const metadata = {
  title: "유발 하라리 - 넥서스 한국어 대담 | 태재미래전략연구원",
  description:
    "유발 하라리의 새 책 '넥서스: 인류 정보 네트워크의 역사'에 관한 한국어 대담. AI 시대의 정보 네트워크와 인류의 미래에 대한 통찰을 제공합니다.",
  keywords:
    "유발 하라리, 넥서스, 한국어 대담, 정보 네트워크, AI, 인공지능, 인류의 미래, 태재미래전략연구원",
  openGraph: {
    title: "유발 하라리 - 넥서스 한국어 대담 | 태재미래전략연구원",
    description:
      "유발 하라리의 새 책 '넥서스'를 통한 AI 시대의 정보 네트워크와 인류의 미래에 대한 통찰",
    url: "https://taedi.org/yuval-harari-nexus",
    siteName: "태재미래전략연구원 디지털 전환팀",
    locale: "ko_KR",
    type: "article",
  },
};

export default function YuvalHarariNexusPage() {
  return (
    <div className="notion-style-page">
      <AudioPageStylesComponent />
      <div className="banner-image-container">
        <Image
          src="/static/images/posters/digital_economy/section4.png"
          alt="유발 하라리 넥서스 한국어 대담"
          width={1200}
          height={400}
          className="banner-image"
          priority
        />
      </div>

      <div className="content-container">
        <h1 className="page-title">유발 하라리 - 넥서스 한국어 대담</h1>
        <p className="subtitle">
          AI 시대의 정보 네트워크와 인류의 미래에 대한 통찰
        </p>

        <div className="audio-section">
          <div className="audio-player-container">
            <audio controls className="audio-player">
              <source
                src="/static/audio/Yuval Harari - Nexus 한국어 대담.m4a"
                type="audio/mp4"
              />
              Your browser does not support the audio element.
            </audio>
          </div>

          <div className="audio-info">
            <p>
              유발 노아 하라리는 새로운 주요 저서인 '넥서스'를 통해 인류가 정보
              시대로 진입하는 여정을 탐구합니다. 인류 역사의 장기적 관점에서
              정보의 흐름이 어떻게 우리 세계를 만들고 해체해 왔는지 고찰하고,
              오늘날 AI 혁명의 위협과 약속을 이해하는 데 필수적인 배경을
              제공합니다.
            </p>
            <div className="mt-4">
              <Image
                src="/static/images/books/nexus.jpg"
                alt="넥서스: 석기 시대에서 AI까지 정보 네트워크의 간략한 역사"
                width={150}
                height={225}
                className="float-right ml-4 mb-4 rounded-md shadow-md"
              />
              <p>
                우리는 인류를 '호모 사피엔스', 즉 현명한 인간이라고 명명했지만,
                인간이 그렇게 현명하다면 왜 이렇게 많은 자기 파괴적인 행동을
                하는 걸까요? 특히 왜 우리는 생태적, 기술적 자살을 저지르기
                직전일까요? 인류는 대규모 협력 네트워크를 구축함으로써 힘을
                얻지만, 이러한 네트워크를 구축하고 유지하는 가장 쉬운 방법은
                허구, 환상, 대중적 망상을 퍼뜨리는 것입니다.
              </p>
              <p className="mt-2">
                21세기에는 AI가 새로운 망상 네트워크의 중심을 형성하여 미래
                세대가 그 거짓말과 허구를 폭로하려는 시도조차 하지 못하게 할 수
                있습니다. 그러나 역사는 결정적이지 않으며 기술도 마찬가지입니다.
                정보에 입각한 선택을 함으로써 최악의 결과를 막을 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="tags-section">
          <span className="tag">유발 하라리</span>
          <span className="tag">넥서스</span>
          <span className="tag">인공지능</span>
          <span className="tag">정보 네트워크</span>
          <span className="tag">인류의 미래</span>
        </div>

        <div className="related-research">
          <h2>관련 연구</h2>
          <p>
            이 오디오는 태재미래전략연구원의 '디지털 전환과 사회 변화', 'AI-인간
            협력 거버넌스' 및 '디지털 경제와 새로운 경제 질서' 연구 영역과
            연계됩니다.
          </p>
          <a href="/digital-economy" className="back-link">
            디지털 시대의 경제 질서 연구 보기
          </a>
          <a href="/" className="back-link ml-4">
            홈으로 돌아가기
          </a>
        </div>
      </div>
    </div>
  );
}
