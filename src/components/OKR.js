import React from "react";
import "../styles/Research.css"; // Reusing Research styles for now, you can create OKR.css later if needed

const OKR = () => {
  const objectives = [
    {
      title: "디지털 전환 연구 역량 강화",
      keyResults: [
        "디지털 거버넌스 연구 논문 2건 발표",
        "국내외 학술대회 발표 3건 달성",
        "연구 협력 네트워크 구축 (학계/산업계 5개 이상)",
      ],
    },
    {
      title: "인간-AI 협력 시스템 구축 연구",
      keyResults: [
        "인간-AI 결합 에이전트 프레임워크 개발",
        "시너제틱 인텔리전스 모델 실증 연구 진행",
        "실증 사례 기반 거버넌스 가이드라인 발표",
      ],
    },
    {
      title: "디지털 경제 연구 프로젝트 추진",
      keyResults: [
        "디지털 시대 경제 질서 보고서 발간",
        "정책 제안서 작성 및 발표",
        "디지털 경제 전환 영향 평가 모델 개발",
      ],
    },
    {
      title: "연구 성과의 사회적 확산",
      keyResults: [
        "연구 결과 대중화 콘텐츠 제작 10건",
        "디지털 전환 관련 세미나/워크숍 개최 3회",
        "연구소 홈페이지 방문자수 전년 대비 30% 증가",
      ],
    },
  ];

  return (
    <section className="research">
      <div className="research-content">
        <h2>목표 및 주요 성과 지표 (OKR)</h2>
        <p className="section-description">
          태재미래전략연구원 디지털 전환팀의 목표(Objectives)와 주요 성과
          지표(Key Results)입니다. 디지털 시대의 미래 전략과 사회 변화에 대한
          연구를 통해 더 나은 미래를 만들어가고자 합니다.
        </p>

        <div className="research-areas">
          {objectives.map((objective, index) => (
            <div key={index} className="research-area-card">
              <h3>O: {objective.title}</h3>
              <ul className="key-results-list">
                {objective.keyResults.map((kr, krIndex) => (
                  <li key={krIndex}>KR: {kr}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="quarterly-progress">
          <h2>분기별 진행 상황 (2025년)</h2>
          <div className="progress-container">
            <div className="progress-quarter">
              <h3>Q1 (1-3월)</h3>
              <p>인간-AI 결합 에이전트 거버넌스 모델 연구 논문 발표</p>
              <p>디지털 경제 질서 연구 기획안 완성</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "100%" }}></div>
              </div>
              <p className="progress-percent">100% 완료</p>
            </div>

            <div className="progress-quarter">
              <h3>Q2 (4-6월)</h3>
              <p>디지털 전환 정책 세미나 개최</p>
              <p>시너제틱 인텔리전스 실증 연구 착수</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "30%" }}></div>
              </div>
              <p className="progress-percent">30% 진행중</p>
            </div>

            <div className="progress-quarter">
              <h3>Q3 (7-9월)</h3>
              <p>디지털 경제 영향 평가 모델 개발</p>
              <p>연구 네트워크 구축 및 협력 프로젝트 착수</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "0%" }}></div>
              </div>
              <p className="progress-percent">예정</p>
            </div>

            <div className="progress-quarter">
              <h3>Q4 (10-12월)</h3>
              <p>연간 연구 성과 종합 보고서 발간</p>
              <p>디지털 전환 국제 컨퍼런스 개최</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "0%" }}></div>
              </div>
              <p className="progress-percent">예정</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OKR;
