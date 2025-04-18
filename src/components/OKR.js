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
      title: "AI 슈퍼휴먼 사회 구조 변화 연구",
      keyResults: [
        "AI로 인한 슈퍼휴먼 등장과 사회 계층 분화 연구",
        "디지털 전환에 따른 공동체 재구성 모델 제시",
        "기술 발전에 따른 가정 기능 변화 분석 보고서 발간",
      ],
      posterFindings: {
        individual: [
          "자본 생산성과 노동 생산성에 따른 슈퍼휴먼 유형 분화",
          "소득 상승형 슈퍼휴먼과 자기 해결 능력 향상형 슈퍼휴먼으로 분화",
          "소비 중심이 자본 집적형 솔루션과 판단 위임형 기능적 인간 주체에 집중",
        ],
        community: [
          "기능적 필요보다 감정적, 사회적 맥락의 공동체로 발전",
          "물리적 근접성 의존도 감소 및 개인 이동 거리 축소",
          "집단 의사결정 주제에 따른 유연한 공동체 경계 형성",
        ],
        family: [
          "생존과 보호 중심 가정 기능 약화 및 책임 역할 강화",
          "상호 책임 관계 형성의 개인 선택 분화로 혼인율 및 출산율 감소",
          "자녀 성장 책임 수행을 위한 기술적 저변 확대",
        ],
      },
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

              {objective.posterFindings && (
                <div className="poster-findings">
                  <h4>AI 슈퍼휴먼 포스터 연구 내용</h4>

                  <div className="finding-category">
                    <h5>개인</h5>
                    <ul>
                      {objective.posterFindings.individual.map(
                        (finding, findingIndex) => (
                          <li key={findingIndex}>{finding}</li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="finding-category">
                    <h5>커뮤니티(공동체)</h5>
                    <ul>
                      {objective.posterFindings.community.map(
                        (finding, findingIndex) => (
                          <li key={findingIndex}>{finding}</li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="finding-category">
                    <h5>가정</h5>
                    <ul>
                      {objective.posterFindings.family.map(
                        (finding, findingIndex) => (
                          <li key={findingIndex}>{finding}</li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="quarterly-progress">
          <h2>분기별 진행 상황 (2025년)</h2>
          
          <div className="progress-container">
            <div className="progress-quarter">
              <h3>Q1 (1-3월)</h3>
              <div className="quarter-tasks">
                <div className="task-category">
                  <h4>주요 성과</h4>
                  <ul>
                    <li>인간-AI 결합 에이전트 거버넌스 모델 연구 논문 발표</li>
                    <li>디지털 경제 질서 연구 기획안 완성</li>
                  </ul>
                </div>
                <div className="task-category">
                  <h4>기초 조사</h4>
                  <ul>
                    <li>AI 슈퍼휴먼 관련 국내외 문헌 조사 완료</li>
                    <li>디지털 경제 질서 변화에 관한 데이터 수집 및 분석</li>
                    <li>기존 공동체/가정 구조 변화 사례 조사</li>
                  </ul>
                </div>
                <div className="task-category">
                  <h4>석학 협력</h4>
                  <ul>
                    <li>Daron Acemoglu (MIT) 교수와 공동 연구 협약 체결</li>
                    <li>Stuart Russell (UC Berkeley) 교수 초청 세미나 개최</li>
                    <li>국내 AI 윤리 전문가 그룹 자문단 구성</li>
                  </ul>
                </div>
                <div className="task-category">
                  <h4>보고서/논문</h4>
                  <ul>
                    <li>인간-AI 결합 에이전트 거버넌스 모델 논문 게재</li>
                    <li>디지털 경제 질서 연구 기획안 발표</li>
                  </ul>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "100%" }}></div>
              </div>
              <p className="progress-percent">100% 완료</p>
            </div>

            <div className="progress-quarter">
              <h3>Q2 (4-6월)</h3>
              <div className="quarter-tasks">
                <div className="task-category">
                  <h4>주요 예정 사항</h4>
                  <ul></ul>
                    <li>디지털 전환 정책 세미나 개최</li>
                    <li>시너제틱 인텔리전스 실증 연구 착수</li>
                    <li>AI 슈퍼휴먼 사회 구조 변화 중간 보고서 작성</li>
                  </ul>
                </div>
                <div className="task-category">
                  <h4>기초 조사</h4>
                  <ul>
                    <li>도시 기능 변화 사례 조사 및 데이터 수집</li>
                    <li>디지털 자산 및 소유권 개념 변화 연구 자료 수집</li>
                    <li>해외 디지털 전환 정책 사례 조사</li>
                  </ul>
                </div>
                <div className="task-category">
                  <h4>석학 협력</h4>
                  <ul>
                    <li>Erik Brynjolfsson (Stanford) 교수 화상 회의 및 자문</li>
                    <li>Lawrence Lessig (Harvard) 교수 초청 워크숍</li>
                    <li>Global Parliament of Mayors 참여 및 네트워크 구축</li>
                  </ul>
                </div>
                <div className="task-category">
                  <h4>보고서/논문</h4>
                  <ul>
                    <li>AI 슈퍼휴먼의 등장과 사회 계층 분화 중간 보고서</li>
                    <li>디지털 전환 정책 세미나 결과 보고서</li>
                  </ul>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "30%" }}></div>
              </div>
              <p className="progress-percent">30% 진행중</p>
            </div>

            <div className="progress-quarter">
              <h3>Q3 (7-9월)</h3>
              <div className="quarter-tasks">
                <div className="task-category">
                  <h4>주요 예정 사항</h4>
                  <ul>
                    <li>디지털 경제 영향 평가 모델 개발</li>
                    <li>연구 네트워크 구축 및 협력 프로젝트 착수</li>
                    <li>AI 슈퍼휴먼 사회 국제 학술대회 발표</li>
                  </ul>
                </div>
                <div className="task-category">
                  <h4>기초 조사</h4>
                  <ul>
                    <li>국가 기능 재편과 도시-개인 부상 사례 심층 분석</li>
                    <li>디지털 시대 규제와 조세 체계 사례 조사</li>
                    <li>공동체 재구성 모델 검증을 위한 필드 리서치</li>
                  </ul>
                </div>
                <div className="task-category">
                  <h4>석학 협력</h4>
                  <ul>
                    <li>Simon Curtis (East Anglia) 교수와 도시 국제관계 공동 연구</li>
                    <li>Gabriel Zucman (UC Berkeley) 교수 초청 디지털 조세 워크숍</li>
                    <li>Arun Sundararajan (NYU) 교수와 디지털 소유권 공동 연구</li>
                  </ul>
                </div>
                <div className="task-category">
                  <h4>보고서/논문</h4>
                  <ul>
                    <li>디지털 경제 영향 평가 모델 중간 보고서</li>
                    <li>디지털 전환에 따른 공동체 재구성 논문 초안 작성</li>
                    <li>AI 슈퍼휴먼의 사회적 영향 연구 논문 제출</li>
                  </ul>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "0%" }}></div>
              </div>
              <p className="progress-percent">예정</p>
            </div>

            <div className="progress-quarter"></div>
              <h3>Q4 (10-12월)</h3>
              <div className="quarter-tasks">
                <div className="task-category">
                  <h4>주요 예정 사항</h4>
                  <ul>
                    <li>연간 연구 성과 종합 보고서 발간</li>
                    <li>디지털 전환 국제 컨퍼런스 개최</li>
                    <li>2026년 연구 계획 수립</li>
                  </ul>
                </div>
                <div className="task-category">
                  <h4>기초 조사</h4>
                  <ul>
                    <li>연간 연구 성과 데이터 종합 및 분석</li>
                    <li>공동체 및 가정 기능 변화 사례 연구 완료</li>
                    <li>2026년 주요 연구 주제 선정을 위한 트렌드 분석</li>
                  </ul>
                </div>
                <div className="task-category">
                  <h4>석학 협력</h4>
                  <ul>
                    <li>국제 석학 초청 디지털 전환 컨퍼런스 개최</li>
                    <li>Saskia Sassen (Columbia) 교수 초청 기조 강연</li>
                    <li>Viktor Mayer-Schönberger (Oxford) 교수와 디지털 자산 연구 협약</li>
                  </ul>
                </div>
                <div className="task-category">
                  <h4>보고서/논문</h4>
                  <ul>
                    <li>디지털 시대 경제 질서 종합 보고서 발간</li>
                    <li>기술 발전에 따른 가정 기능 변화 분석 보고서 발간</li>
                    <li>연간 연구 성과 종합 보고서 및 2026년 연구 제안서 작성</li>
                  </ul>
                </div>
              </div>
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
