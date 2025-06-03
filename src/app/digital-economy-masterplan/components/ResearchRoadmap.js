// ResearchRoadmap.js
import MermaidRenderer from "@/components/MermaidRenderer";

const ResearchRoadmap = () => {
  const researchRoadmapChart = `
graph TD
    subgraph "현재 연구 (2025-2026)"
        R1["디지털 경제 주체<br/>(생산)"]
        R2["디지털 경제 권리<br/>(소유)"]
        R3["디지털 경제 권력<br/>(분배)"]
    end
    
    subgraph "심화 연구 (2027-2028)"
        S2["공동체 경제 모델"]
        S3["AI 기반 가치 생산"]
        S1["데이터 소유권 법제화"]
        S4["기여 기반 분배 시스템"]
        S6["디지털 화폐 질서"]
    end
    
    subgraph "실증 검증 (2028-2030)"
        E1["소규모 실증 실험<br/>(Pilot Programs)"]
        E2["정책 제도 설계<br/>(Policy Framework)"]
        E3["글로벌 표준 개발<br/>(Global Standards)"]
        E4["효과성 평가<br/>(Effectiveness Assessment)"]
    end
    
    subgraph "실현 (2030-2035)"
        F1["글로벌 디지털 경제 거버넌스<br/>(Global Digital Economic Governance)"]
        F2["통합 경제 질서 프레임워크<br/>(Integrated Economic Order Framework)"]
        F3["안전하고 건강한 미래<br/>(Safe & Healthy Future)"]
    end
    
    R1 --> S2
    R1 --> S3
    R2 --> S1
    R2 --> S6
    R3 --> S2
    R3 --> S4
    R3 --> S6
    
    S1 -.-> E2
    S2 -.-> E1
    S3 -.-> E2
    S4 -.-> E3
    S6 -.-> E3
    
    S1 -.-> E4
    S4 -.-> E4
    S6 -.-> E4
    
    E1 -.-> F1
    E1 -.-> F2
    E2 -.-> F2
    E3 -.-> F1
    E4 -.-> F2
    
    F1 -.-> F3
    F2 -.-> F3
    
    classDef current fill:#2c3e50,stroke:#34495e,stroke-width:2px,color:#ffffff
    classDef future fill:#f5f7fa,stroke:#7f8c8d,stroke-width:1px,stroke-dasharray: 5 5,color:#2c3e50
    
    class R1,R2,R3 current
    class S1,S2,S3,S4,S6,E1,E2,E3,E4,F1,F2,F3 future
  `;

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
        연구에서 실현까지: 안전한 디지털 경제 질서를 향한 로드맵
      </h2>
      <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
        <MermaidRenderer
          chartDefinition={researchRoadmapChart}
          id="research-roadmap"
        />
      </div>

      <div className="space-y-6">
        {/* 단계별 상세 설명 */}
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            로드맵 단계별 상세 설명
          </h3>

          {/* 현재 연구 단계 */}
          <div className="mb-6 p-4 bg-white rounded-lg border-l-4 border-gray-400">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              1단계: 현재 연구 (2024-2025)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">
                  디지털 시대 경제 주체 변화
                </h5>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>핵심 질문:</strong> 누가 새로운 경제의 주체가 될
                  것인가?
                </p>
                <ul className="text-xs text-gray-600">
                  <li>• AI 기술로 역량이 강화된 개인</li>
                  <li>• 데이터를 기반으로 한 공동체</li>
                  <li>• 전통적 기업 구조의 변화</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">
                  디지털 시대 경제 권리
                </h5>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>핵심 질문:</strong> 무엇을 어떻게 소유할 것인가?
                </p>
                <ul className="text-xs text-gray-600">
                  <li>• 개인 데이터의 소유권</li>
                  <li>• AI가 생성한 지식재산</li>
                  <li>• 플랫폼 내 디지털 자산</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">
                  디지털 시대 경제 권력
                </h5>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>핵심 질문:</strong> 어떻게 공정하게 분배할 것인가?
                </p>
                <ul className="text-xs text-gray-600">
                  <li>• 데이터 기여도 기반 보상</li>
                  <li>• 국가-도시-개인 권한 재배치</li>
                  <li>• 중용적 분배 메커니즘</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">
                  디지털 시대 화폐 질서
                </h5>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>핵심 질문:</strong> 어떤 교환 수단을 사용할 것인가?
                </p>
                <ul className="text-xs text-gray-600">
                  <li>• 탈중앙화 디지털 화폐</li>
                  <li>• 탈중앙화 금융(DeFi) 시스템</li>
                  <li>• 프로그래머블 머니</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 심화 연구와 실증 검증 */}
          <div className="mb-6 p-4 bg-white rounded-lg border-l-4 border-gray-600">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              2-3단계: 심화 연구 → 실증 검증 (2027-2030)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">
                  심화 연구 (2027-2028)
                </h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>
                    • <strong>데이터 소유권 법제화:</strong> 개인 데이터 주권
                    확립을 위한 법적 프레임워크
                  </li>
                  <li>
                    • <strong>공동체 경제 모델:</strong> 협력 기반 경제 생태계
                    설계
                  </li>
                  <li>
                    • <strong>AI-인간 협력 체계:</strong> 협력 모델과 윤리적
                    가이드라인
                  </li>
                  <li>
                    • <strong>기여 기반 분배 시스템:</strong> 공정한 가치 평가와
                    보상 메커니즘
                  </li>
                  <li>
                    • <strong>디지털 화폐 질서:</strong> 투명하고 안전한 경제
                    질서 확립
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">
                  실증 검증 (2028-2030)
                </h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>
                    • <strong>파일럿 프로그램:</strong> 소규모 실험을 통한 모델
                    검증
                  </li>
                  <li>
                    • <strong>정책 프레임워크:</strong> 정부와 협력한 제도 설계
                  </li>
                  <li>
                    • <strong>국제 협력 모델:</strong> 글로벌 표준 개발과 협력
                    체계
                  </li>
                  <li>
                    • <strong>효과성 평가:</strong> 데이터 기반 성과 측정과 개선
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 최종 실현 목표 */}
          <div className="p-4 bg-white rounded-lg border-l-4 border-gray-700">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              4단계: 안전하고 건강한 디지털 경제 질서 완성 (2030-2035)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">
                  글로벌 거버넌스
                </h5>
                <p className="text-sm text-gray-700 mb-2">
                  국경을 초월한 디지털 경제 질서의 안정적 운영을 위한 국제적
                  거버넌스 체계
                </p>
                <ul className="text-xs text-gray-600">
                  <li>• 다국가 간 디지털 경제 정책 조율</li>
                  <li>• 플랫폼 독점 방지 국제 규제</li>
                  <li>• 데이터 국경간 이동 표준화</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">
                  통합 정책 체계
                </h5>
                <p className="text-sm text-gray-700 mb-2">
                  디지털 시대에 맞는 새로운 경제 정책과 사회 보장 시스템
                </p>
                <ul className="text-xs text-gray-600">
                  <li>• 데이터 배당 및 디지털 기본소득</li>
                  <li>• AI-인간 협력 고용 정책</li>
                  <li>• 디지털 자산 과세 체계</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">
                  안전하고 건강한 미래
                </h5>
                <p className="text-sm text-gray-700 mb-2">
                  인간 존엄성과 개인 권리를 보장하는 디지털 경제의 기본 원칙
                </p>
                <ul className="text-xs text-gray-600">
                  <li>• 개인 데이터 주권 헌법적 보장</li>
                  <li>• 알고리즘 투명성과 공정성</li>
                  <li>• AI 시대 인간 존엄성 보장</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">
                  국제 협력 기구
                </h5>
                <p className="text-sm text-gray-700 mb-2">
                  디지털 경제 질서의 지속가능한 운영을 위한 국제 기구와 제도
                </p>
                <ul className="text-xs text-gray-600">
                  <li>• 디지털 경제 분쟁 조정 기구</li>
                  <li>• 글로벌 데이터 거버넌스 위원회</li>
                  <li>• 국제 디지털 화폐 시스템</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 성공의 핵심 요소 */}
          <div className="p-4 bg-white rounded-lg border-l-4 border-gray-800">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              성공 실현을 위한 핵심 요소
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <h5 className="font-semibold text-gray-800 mb-2">연구의 힘</h5>
                <p className="text-sm text-gray-700">
                  실증적 데이터와 과학적 방법론을 통한 정책 설계
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <h5 className="font-semibold text-gray-800 mb-2">협력의 힘</h5>
                <p className="text-sm text-gray-700">
                  시민, 학계, 정부, 기업의 협력적 거버넌스
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <h5 className="font-semibold text-gray-800 mb-2">실현의 힘</h5>
                <p className="text-sm text-gray-700">
                  단계적 실행을 통한 지속가능한 변화
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchRoadmap;
