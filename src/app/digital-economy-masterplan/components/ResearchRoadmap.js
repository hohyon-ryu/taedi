// ResearchRoadmap.js
import MermaidRenderer from "@/components/MermaidRenderer";

const ResearchRoadmap = () => {
  const researchRoadmapChart = `
graph TD
    subgraph "현재 연구 (2025-2026)"
        R1["디지털 경제 주체<br/>(생산)"]
        R2["디지털 경제 권리<br/>(소유)"]
        R3["디지털 경제 권력<br/>(분배)"]
        R4["디지털 화폐 질서<br/>(교환)"]
    end
    
    subgraph "심화 연구 (2027-2028)"
        S2["공동체 경제 모델"]
        S3["AI 기반 가치 생산"]
        S1["데이터 소유권 법제화"]
        S4["기여 기반 분배 시스템"]
        S5["디지털 화폐 시스템"]
    end
    
    subgraph "실증 검증 (2028-2030)"
        E1["소규모 실증 실험"]
        E2["정책 제도 설계"]
        E3["글로벌 표준 개발"]
    end
    
    subgraph "실현 (2030-2035)"
        F1["글로벌 디지털 경제 거버넌스<br/>(Global Digital Economic Governance)"]
        F2["통합 경제 질서 프레임워크<br/>(Integrated Economic Order Framework)"]
        F3["안전하고 건강한 미래<br/>(Safe & Healthy Future)"]
    end
    
    R1 --> S2
    R1 --> S3
    R2 --> S1
    R3 --> S2
    R3 --> S4
    R4 --> S5
    
    S1 -.-> E2
    S2 -.-> E1
    S3 -.-> E2
    S4 -.-> E3
    S5 -.-> E3
    
    E1 -.-> F1
    E1 -.-> F2
    E2 -.-> F2
    E3 -.-> F1
    
    F1 -.-> F3
    F2 -.-> F3
    
    classDef current fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
    classDef future fill:#f5f5f5,stroke:#9e9e9e,stroke-width:1px,stroke-dasharray: 5 5,color:#666666
    
    class R1,R2,R3,R4 current
    class S1,S2,S3,S4,S5,E1,E2,E3,F1,F2,F3 future
  `;

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
        연구에서 실현까지: 안전한 디지털 경제 질서를 향한 로드맵
      </h2>
      <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <MermaidRenderer
          chartDefinition={researchRoadmapChart}
          id="research-roadmap"
        />
      </div>

      <div className="space-y-6">
        {/* 로드맵 개요 설명 */}
        <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            연구에서 실현까지의 체계적 로드맵
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            현재 진행하는 네 가지 핵심 연구가 단계적으로 발전하여 2035년{" "}
            <span className="font-semibold text-gray-900">
              안전하고 건강한 디지털 경제 질서
            </span>
            를 완성합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">
                디지털 경제 주체
              </h4>
              <p className="text-sm text-blue-700 mb-2">
                AI와 인간의 협력 기반 생산
              </p>
              <ul className="text-xs text-blue-600">
                <li>• 1인 기업가와 AI 결합</li>
                <li>• 데이터 협동조합 모델</li>
                <li>• 창작자 집단 플랫폼</li>
              </ul>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">
                디지털 경제 권리
              </h4>
              <p className="text-sm text-purple-700 mb-2">
                개인 데이터 주권 확립
              </p>
              <ul className="text-xs text-purple-600">
                <li>• 데이터 신탁 제도</li>
                <li>• 동적 소유권 모델</li>
                <li>• 개인정보 자기결정권</li>
              </ul>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-2">
                디지털 경제 권력
              </h4>
              <p className="text-sm text-orange-700 mb-2">
                데이터 기반 공정한 분배 체계
              </p>
              <ul className="text-xs text-orange-600">
                <li>• 개인 데이터 기여도 보상</li>
                <li>• 분배 권한 재배치</li>
                <li>• 욕망과 절제의 균형</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">
                디지털 화폐 질서
              </h4>
              <p className="text-sm text-green-700 mb-2">
                탈중앙화 디지털 교환 시스템
              </p>
              <ul className="text-xs text-green-600">
                <li>• 중앙은행 디지털화폐(CBDC)</li>
                <li>• 탈중앙화 자율조직(DAO)</li>
                <li>• 스마트 계약 기반 거래</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-900">
              생산-소유-분배-교환
            </span>
            의 디지털 전환을 통해 탐욕 경제에서 절제 경제로, 경쟁 경제에서 협력
            경제로의 패러다임 전환을 실현합니다.
          </p>
        </div>

        {/* 단계별 상세 설명 */}
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            🗺️ 로드맵 단계별 상세 설명
          </h3>

          {/* 현재 연구 단계 */}
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <h4 className="text-lg font-semibold text-blue-900 mb-3">
              📘 1단계: 현재 연구 (2024-2025)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-3 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">
                  디지털 시대 경제 주체 변화
                </h5>
                <p className="text-sm text-blue-700 mb-2">
                  <strong>핵심 질문:</strong> 누가 새로운 경제의 주체가 될
                  것인가?
                </p>
                <ul className="text-xs text-blue-600">
                  <li>• AI 기술로 역량이 강화된 개인</li>
                  <li>• 데이터를 기반으로 한 공동체</li>
                  <li>• 전통적 기업 구조의 변화</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2">
                  디지털 시대 경제 권리
                </h5>
                <p className="text-sm text-purple-700 mb-2">
                  <strong>핵심 질문:</strong> 무엇을 어떻게 소유할 것인가?
                </p>
                <ul className="text-xs text-purple-600">
                  <li>• 개인 데이터의 소유권</li>
                  <li>• AI가 생성한 지식재산</li>
                  <li>• 플랫폼 내 디지털 자산</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <h5 className="font-semibold text-orange-800 mb-2">
                  디지털 시대 경제 권력
                </h5>
                <p className="text-sm text-orange-700 mb-2">
                  <strong>핵심 질문:</strong> 어떻게 공정하게 분배할 것인가?
                </p>
                <ul className="text-xs text-orange-600">
                  <li>• 데이터 기여도 기반 보상</li>
                  <li>• 국가-도시-개인 권한 재배치</li>
                  <li>• 중용적 분배 메커니즘</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">
                  디지털 시대 화폐 질서
                </h5>
                <p className="text-sm text-green-700 mb-2">
                  <strong>핵심 질문:</strong> 어떤 교환 수단을 사용할 것인가?
                </p>
                <ul className="text-xs text-green-600">
                  <li>• 탈중앙화 디지털 화폐</li>
                  <li>• 탈중앙화 금융(DeFi) 시스템</li>
                  <li>• 프로그래머블 머니</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI-인간 협력 플랫폼의 필요성 */}
          <div className="mb-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
            <h4 className="text-lg font-semibold text-green-900 mb-3">
              🤖 AI-인간 협력 플랫폼이 필요한 이유
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">
                  📈 생산성 혁명
                </h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• AI가 인간의 인지적 한계를 보완</li>
                  <li>• 개인이 전문가 수준의 결과물 생산</li>
                  <li>• 창의성과 효율성의 동시 확보</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">
                  ⚖️ 불평등 해소
                </h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 소수 거대 기업의 독점 방지</li>
                  <li>• 개인과 소규모 공동체 역량 강화</li>
                  <li>• 지식과 기술 접근성 민주화</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">
                  🌍 지속가능성
                </h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 자원 효율적인 생산 방식</li>
                  <li>• 개인 맞춤형 서비스로 낭비 최소화</li>
                  <li>• 분산형 경제 생태계 구축</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">
                  🛡️ 안전성 확보
                </h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 인간 중심 AI 거버넌스</li>
                  <li>• 투명하고 책임감 있는 AI 활용</li>
                  <li>• 개인 프라이버시와 자율성 보장</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 심화 연구와 실증 검증 */}
          <div className="mb-6 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
            <h4 className="text-lg font-semibold text-purple-900 mb-3">
              🔬 2-3단계: 심화 연구 → 실증 검증 (2027-2030)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2">
                  심화 연구 (2027-2028)
                </h5>
                <ul className="text-sm text-purple-700 space-y-1">
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
                    • <strong>디지털 화폐 시스템:</strong> 투명하고 안전한 교환
                    매체
                  </li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <h5 className="font-semibold text-orange-800 mb-2">
                  실증 검증 (2028-2030)
                </h5>
                <ul className="text-sm text-orange-700 space-y-1">
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
          <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
            <h4 className="text-lg font-semibold text-green-900 mb-3">
              🎯 4단계: 안전하고 건강한 디지털 경제 질서 완성 (2030-2035)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">
                  🌐 글로벌 거버넌스
                </h5>
                <p className="text-sm text-green-700 mb-2">
                  국경을 초월한 디지털 경제 질서의 안정적 운영을 위한 국제적
                  거버넌스 체계
                </p>
                <ul className="text-xs text-green-600">
                  <li>• 다국가 간 디지털 경제 정책 조율</li>
                  <li>• 플랫폼 독점 방지 국제 규제</li>
                  <li>• 데이터 국경간 이동 표준화</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">
                  📋 통합 정책 체계
                </h5>
                <p className="text-sm text-green-700 mb-2">
                  디지털 시대에 맞는 새로운 경제 정책과 사회 보장 시스템
                </p>
                <ul className="text-xs text-green-600">
                  <li>• 데이터 배당 및 디지털 기본소득</li>
                  <li>• AI-인간 협력 고용 정책</li>
                  <li>• 디지털 자산 과세 체계</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">
                  ⚖️ 안전하고 건강한 미래
                </h5>
                <p className="text-sm text-green-700 mb-2">
                  인간 존엄성과 개인 권리를 보장하는 디지털 경제의 기본 원칙
                </p>
                <ul className="text-xs text-green-600">
                  <li>• 개인 데이터 주권 헌법적 보장</li>
                  <li>• 알고리즘 투명성과 공정성</li>
                  <li>• AI 시대 인간 존엄성 보장</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">
                  🏛️ 국제 협력 기구
                </h5>
                <p className="text-sm text-green-700 mb-2">
                  디지털 경제 질서의 지속가능한 운영을 위한 국제 기구와 제도
                </p>
                <ul className="text-xs text-green-600">
                  <li>• 디지털 경제 분쟁 조정 기구</li>
                  <li>• 글로벌 데이터 거버넌스 위원회</li>
                  <li>• 국제 디지털 화폐 시스템</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 성공의 핵심 요소 */}
          <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <h4 className="text-lg font-semibold text-yellow-900 mb-3">
              🔑 성공 실현을 위한 핵심 요소
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded-lg text-center">
                <h5 className="font-semibold text-yellow-800 mb-2">
                  🔬 연구의 힘
                </h5>
                <p className="text-sm text-yellow-700">
                  실증적 데이터와 과학적 방법론을 통한 정책 설계
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <h5 className="font-semibold text-yellow-800 mb-2">
                  🤝 협력의 힘
                </h5>
                <p className="text-sm text-yellow-700">
                  시민, 학계, 정부, 기업의 협력적 거버넌스
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <h5 className="font-semibold text-yellow-800 mb-2">
                  🌱 실현의 힘
                </h5>
                <p className="text-sm text-yellow-700">
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
