import MermaidRenderer from "@/components/MermaidRenderer";

const FutureEconomicOrderMasterPlan = () => {
  const researchRoadmap = `
graph TD
    subgraph "현재 연구 (2025-2026)"
        R1["디지털 경제 주체<br/>(생산: AI-인간 협력)"]
        R2["디지털 경제 권리<br/>(소유: 데이터 주권)"]
        R3["디지털 경제 권력<br/>(분배: 플랫폼 거버넌스)"]
    end
    
    subgraph "심화 연구 (2025-2027)"
        S1["데이터 소유권 법제화"]
        S2["공동체 경제 모델"]
        S3["AI-인간 협력 플랫폼"]
        S4["기여 기반 분배 시스템"]
    end
    
    subgraph "실증 검증 (2027-2030)"
        E1["파일럿 프로그램"]
        E2["정책 프레임워크"]
        E3["국제 협력 모델"]
    end
    
    subgraph "실현 (2030-2035)"
        F1["글로벌 디지털 경제 거버넌스<br/>(Global Digital Economic Governance)"]
        F2["통합 경제 정책 프레임워크<br/>(Integrated Economic Policy Framework)"]
        F3["안전하고 건강한 미래<br/>(Safe & Healthy Future)"]
        F4["국제 디지털 경제 기구<br/>(International Digital Economy Organization)"]
    end
    
    R1 --> S1
    R1 --> S3
    R2 --> S1
    R2 --> S2
    R3 --> S3
    R3 --> S4
    
    S1 -.-> E1
    S2 -.-> E1
    S3 -.-> E2
    S4 -.-> E3
    
    E1 -.-> F1
    E1 -.-> F2
    E2 -.-> F2
    E3 -.-> F1
    E3 -.-> F4
    
    F1 -.-> F3
    F2 -.-> F3
    F4 -.-> F3
    
    classDef current fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
    classDef future fill:#f5f5f5,stroke:#9e9e9e,stroke-width:1px,stroke-dasharray: 5 5,color:#666666
    
    class R1,R2,R3 current
    class S1,S2,S3,S4,E1,E2,E3,F1,F2,F3,F4 future
  `;

  const economicOrderEvolution = `
graph TB
    subgraph "현재: 산업사회 경제 질서"
        A1["대량생산-대량소비"]
        A2["기업-국가 중심"]
        A3["경쟁과 성장 추구"]
        A4["자원 집약적"]
    end
    
    subgraph "전환기: 디지털 혼재 경제"
        B1["플랫폼 경제 확산"]
        B2["개인 역량 강화"]
        B3["데이터 가치 부상"]
        B4["자동화 가속화"]
    end
    
    subgraph "미래: 디지털 절제 경제"
        C1["맞춤형 생산-적정 소비"]
        C2["개인-공동체 중심"]
        C3["협력과 지속가능성"]
        C4["지능 집약적"]
    end
    
    A1 --> B1
    A2 --> B2
    A3 --> B3
    A4 --> B4
    
    B1 --> C1
    B2 --> C2
    B3 --> C3
    B4 --> C4
    
    classDef current fill:#f8f9fa,stroke:#6c757d,stroke-width:1px
    classDef transition fill:#f1f3f4,stroke:#495057,stroke-width:1px
    classDef future fill:#ffffff,stroke:#212529,stroke-width:2px
    
    class A1,A2,A3,A4 current
    class B1,B2,B3,B4 transition
    class C1,C2,C3,C4 future
  `;

  const newEconomicActors = `
graph TD
    subgraph "새로운 경제 주체 생태계"
        direction TB
        
        subgraph "개인 차원"
            I1["AI 강화 개인<br/>(AI-Enhanced Individual)"]
            I2["1인 기업가<br/>(Solo Entrepreneur)"]
            I3["멀티 전문가<br/>(Multi-Expert)"]
        end
        
        subgraph "공동체 차원"
            C1["디지털 공동체<br/>(Digital Community)"]
            C2["창작자 집단<br/>(Creator Collective)"]
            C3["데이터 협동조합<br/>(Data Cooperative)"]
        end
        
        subgraph "도시 차원"
            U1["스마트 시티<br/>(Smart City)"]
            U2["창조 도시<br/>(Creative City)"]
            U3["자율 도시<br/>(Autonomous City)"]
        end
        
        subgraph "연결과 협력"
            I1 -.-> C1
            I2 -.-> C2
            I3 -.-> C3
            C1 -.-> U1
            C2 -.-> U2
            C3 -.-> U3
        end
    end
    
    classDef individual fill:#f8f9fa,stroke:#495057,stroke-width:1px
    classDef community fill:#ffffff,stroke:#212529,stroke-width:1px
    classDef city fill:#f1f3f4,stroke:#343a40,stroke-width:1px
    
    class I1,I2,I3 individual
    class C1,C2,C3 community
    class U1,U2,U3 city
  `;

  const ownershipParadigm = `
graph LR
    subgraph "전통적 소유권"
        T1["개인 사유재산"]
        T2["기업 자본"]
        T3["국가 공공재"]
    end
    
    subgraph "디지털 소유권"
        D1["개인 데이터 주권"]
        D2["공동체 데이터 자산"]
        D3["AI 생성 지식재산"]
        D4["디지털 공공재"]
    end
    
    subgraph "새로운 소유 모델"
        N1["데이터 신탁<br/>(Data Trust)"]
        N2["공동체 소유<br/>(Community Ownership)"]
        N3["동적 소유권<br/>(Dynamic Ownership)"]
        N4["사용권 기반<br/>(Usage-based Rights)"]
    end
    
    T1 --> D1
    T2 --> D2
    T3 --> D3
    T3 --> D4
    
    D1 --> N1
    D2 --> N2
    D3 --> N3
    D4 --> N4
    
    classDef traditional fill:#f8f9fa,stroke:#6c757d,stroke-width:1px
    classDef digital fill:#f1f3f4,stroke:#495057,stroke-width:1px
    classDef new fill:#ffffff,stroke:#212529,stroke-width:2px
    
    class T1,T2,T3 traditional
    class D1,D2,D3,D4 digital
    class N1,N2,N3,N4 new
  `;

  const distributionMechanisms = `
graph TB
    subgraph "새로운 분배 체계"
        direction TB
        
        subgraph "기여 기반 분배"
            CB1["데이터 기여도 측정"]
            CB2["창작 활동 평가"]
            CB3["공동체 참여도"]
            CB4["사회적 가치 창출"]
        end
        
        subgraph "분배 메커니즘"
            DM1["데이터 배당<br/>(Data Dividend)"]
            DM2["창작자 수익 공유<br/>(Creator Revenue Share)"]
            DM3["공동체 기본소득<br/>(Community UBI)"]
            DM4["사회적 가치 보상<br/>(Social Value Reward)"]
        end
        
        subgraph "분배 주체"
            DA1["개인 → 개인"]
            DA2["공동체 → 구성원"]
            DA3["도시 → 시민"]
            DA4["플랫폼 → 사용자"]
        end
        
        CB1 --> DM1
        CB2 --> DM2
        CB3 --> DM3
        CB4 --> DM4
        
        DM1 --> DA4
        DM2 --> DA1
        DM3 --> DA2
        DM4 --> DA3
    end
    
    classDef contribution fill:#f8f9fa,stroke:#495057,stroke-width:1px
    classDef mechanism fill:#ffffff,stroke:#212529,stroke-width:2px
    classDef actor fill:#f1f3f4,stroke:#343a40,stroke-width:1px
    
    class CB1,CB2,CB3,CB4 contribution
    class DM1,DM2,DM3,DM4 mechanism
    class DA1,DA2,DA3,DA4 actor
  `;

  const restraintEconomyModel = `
graph TD
    subgraph "절제 경제의 핵심 원리"
        direction TB
        
        subgraph "생산 최적화"
            P1["맞춤형 생산<br/>(Customized Production)"]
            P2["순환 경제<br/>(Circular Economy)"]
            P3["지능형 자원 관리<br/>(Smart Resource Management)"]
        end
        
        subgraph "소비 절제"
            C1["적정 소비<br/>(Moderate Consumption)"]
            C2["공유 경제<br/>(Sharing Economy)"]
            C3["경험 중심<br/>(Experience-focused)"]
        end
        
        subgraph "가치 재정의"
            V1["웰빙 지표<br/>(Well-being Metrics)"]
            V2["사회적 가치<br/>(Social Value)"]
            V3["환경적 가치<br/>(Environmental Value)"]
        end
        
        P1 --> C1
        P2 --> C2
        P3 --> C3
        C1 --> V1
        C2 --> V2
        C3 --> V3
    end
    
    classDef production fill:#f8f9fa,stroke:#495057,stroke-width:1px
    classDef consumption fill:#ffffff,stroke:#212529,stroke-width:2px
    classDef value fill:#f1f3f4,stroke:#343a40,stroke-width:1px
    
    class P1,P2,P3 production
    class C1,C2,C3 consumption
    class V1,V2,V3 value
  `;

  return (
    <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          디지털 전환과 경제 질서 변혁 마스터플랜
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          탐욕의 경제에서 절제의 경제로, 경쟁의 경제에서 협력의 경제로
        </p>
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-lg font-semibold text-gray-800">
            "산업사회 지속불가능성 극복을 위한 디지털 시대 경제 주권과 질서
            재편"
          </p>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          연구에서 실현까지: 안전한 디지털 경제 질서를 향한 로드맵
        </h2>
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <MermaidRenderer
            chartDefinition={researchRoadmap}
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
              현재 진행하는 세 가지 핵심 연구가 단계적으로 발전하여 
              2035년 <span className="font-semibold text-gray-900">안전하고 건강한 디지털 경제 질서</span>를 완성합니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">디지털 경제 주체</h4>
                <p className="text-sm text-blue-700 mb-2">AI와 인간의 협력 기반 생산</p>
                <ul className="text-xs text-blue-600">
                  <li>• 1인 기업가와 AI 결합</li>
                  <li>• 데이터 협동조합 모델</li>
                  <li>• 창작자 집단 플랫폼</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">디지털 경제 권리</h4>
                <p className="text-sm text-purple-700 mb-2">개인 데이터 주권 확립</p>
                <ul className="text-xs text-purple-600">
                  <li>• 데이터 신탁 제도</li>
                  <li>• 동적 소유권 모델</li>
                  <li>• 개인정보 자기결정권</li>
                </ul>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-2">디지털 경제 권력</h4>
                <p className="text-sm text-orange-700 mb-2">플랫폼 권력의 민주적 분산</p>
                <ul className="text-xs text-orange-600">
                  <li>• 데이터 배당 시스템</li>
                  <li>• 기여 기반 보상</li>
                  <li>• 공동체 거버넌스</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">생산-소유-분배</span>의 
              디지털 전환을 통해 탐욕 경제에서 절제 경제로, 경쟁 경제에서 협력 경제로의 
              패러다임 전환을 실현합니다.
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded-lg">
                  <h5 className="font-semibold text-blue-800 mb-2">디지털 시대 경제 주체 변화</h5>
                  <p className="text-sm text-blue-700 mb-2">
                    <strong>핵심 질문:</strong> 누가 새로운 경제의 주체가 될 것인가?
                  </p>
                  <ul className="text-xs text-blue-600">
                    <li>• AI 기술로 역량이 강화된 개인</li>
                    <li>• 데이터를 기반으로 한 공동체</li>
                    <li>• 전통적 기업 구조의 변화</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h5 className="font-semibold text-purple-800 mb-2">디지털 시대 경제 권리</h5>
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
                  <h5 className="font-semibold text-orange-800 mb-2">디지털 시대 경제 권력</h5>
                  <p className="text-sm text-orange-700 mb-2">
                    <strong>핵심 질문:</strong> 어떻게 공정하게 분배할 것인가?
                  </p>
                  <ul className="text-xs text-orange-600">
                    <li>• 플랫폼 독점력의 분산</li>
                    <li>• 기여 기반 보상 시스템</li>
                    <li>• 디지털 경제 이익의 사회 환원</li>
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
                  <h5 className="font-semibold text-green-800 mb-2">📈 생산성 혁명</h5>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• AI가 인간의 인지적 한계를 보완</li>
                    <li>• 개인이 전문가 수준의 결과물 생산</li>
                    <li>• 창의성과 효율성의 동시 확보</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2">⚖️ 불평등 해소</h5>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• 소수 거대 기업의 독점 방지</li>
                    <li>• 개인과 소규모 공동체 역량 강화</li>
                    <li>• 지식과 기술 접근성 민주화</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2">🌍 지속가능성</h5>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• 자원 효율적인 생산 방식</li>
                    <li>• 개인 맞춤형 서비스로 낭비 최소화</li>
                    <li>• 분산형 경제 생태계 구축</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2">🛡️ 안전성 확보</h5>
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
                🔬 2-3단계: 심화 연구 → 실증 검증 (2025-2030)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-lg">
                  <h5 className="font-semibold text-purple-800 mb-2">심화 연구 (2025-2027)</h5>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• <strong>데이터 소유권 법제화:</strong> 개인 데이터 주권 확립을 위한 법적 프레임워크</li>
                    <li>• <strong>공동체 경제 모델:</strong> 협력 기반 경제 생태계 설계</li>
                    <li>• <strong>AI-인간 협력 플랫폼:</strong> 기술적 구현과 윤리적 가이드라인</li>
                    <li>• <strong>기여 기반 분배 시스템:</strong> 공정한 가치 평가와 보상 메커니즘</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h5 className="font-semibold text-orange-800 mb-2">실증 검증 (2027-2030)</h5>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• <strong>파일럿 프로그램:</strong> 소규모 실험을 통한 모델 검증</li>
                    <li>• <strong>정책 프레임워크:</strong> 정부와 협력한 제도 설계</li>
                    <li>• <strong>국제 협력 모델:</strong> 글로벌 표준 개발과 협력 체계</li>
                    <li>• <strong>효과성 평가:</strong> 데이터 기반 성과 측정과 개선</li>
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
                  <h5 className="font-semibold text-green-800 mb-2">🌐 글로벌 거버넌스</h5>
                  <p className="text-sm text-green-700 mb-2">
                    국경을 초월한 디지털 경제 질서의 안정적 운영을 위한 국제적 거버넌스 체계
                  </p>
                  <ul className="text-xs text-green-600">
                    <li>• 다국가 간 디지털 경제 정책 조율</li>
                    <li>• 플랫폼 독점 방지 국제 규제</li>
                    <li>• 데이터 국경간 이동 표준화</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2">📋 통합 정책 체계</h5>
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
                  <h5 className="font-semibold text-green-800 mb-2">⚖️ 안전하고 건강한 미래</h5>
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
                  <h5 className="font-semibold text-green-800 mb-2">🏛️ 국제 협력 기구</h5>
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
                  <h5 className="font-semibold text-yellow-800 mb-2">🔬 연구의 힘</h5>
                  <p className="text-sm text-yellow-700">
                    실증적 데이터와 과학적 방법론을 통한 정책 설계
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <h5 className="font-semibold text-yellow-800 mb-2">🤝 협력의 힘</h5>
                  <p className="text-sm text-yellow-700">
                    시민, 학계, 정부, 기업의 협력적 거버넌스
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <h5 className="font-semibold text-yellow-800 mb-2">🌱 실현의 힘</h5>
                  <p className="text-sm text-yellow-700">
                    단계적 실행을 통한 지속가능한 변화
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          경제 질서의 패러다임 전환
        </h2>

        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <MermaidRenderer
            chartDefinition={economicOrderEvolution}
            id="economic-order-evolution"
          />
        </div>

        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            문명의 전환: 비만에서 건강으로
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            산업사회는 인류 역사상 처음으로 절대 빈곤을 극복한 위대한 성취를
            이뤘습니다. 하지만 이는 마치 평생 굶주렸던 사람이 갑자기 무한정의
            음식을 얻게 된 것과 같습니다. 처음엔 닥치는 대로 먹지만, 결국 비만과
            성인병으로 고통받게 되죠.
          </p>
          <p className="text-gray-700 leading-relaxed">
            지금 인류도 같은 상황입니다. 무한 성장과 탐욕이 기후위기, 극심한
            양극화, 자원고갈이라는 '문명의 성인병'을 만들었습니다. 이제 미래
            경제질서의 질문은
            <span className="font-semibold text-gray-900">
              "어떻게 더 많이 가질까"에서 "어떻게 절제하며 지속가능하게 살
              것인가"
            </span>
            로 바뀌어야 합니다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          1. 생산: 새로운 경제 주체의 등장
        </h2>

        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <MermaidRenderer
            chartDefinition={newEconomicActors}
            id="new-economic-actors"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          2. 소유: 디지털 시대의 새로운 소유권 패러다임
        </h2>

        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <MermaidRenderer
            chartDefinition={ownershipParadigm}
            id="ownership-paradigm"
          />
        </div>

        <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            소유권 개념의 근본적 변화
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            디지털 시대의 소유권은 전통적인 "한 사람이 하나의 물건을 소유"하는
            개념을 넘어섭니다. 예를 들어, 내가 고기집에서 5명이 모여 갈비를 시켜
            먹었다는 비자 카드의 결제 데이터는 생성과 동시에 나의 데이터이기도
            하지만 비자 카드의 데이터이기도 하고, 국세청의 데이터이기도 합니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            이러한{" "}
            <span className="font-semibold text-gray-900">다중 소유권</span>과
            <span className="font-semibold text-gray-900">동적 소유권</span>의
            개념이 새로운 경제 질서의 핵심이 됩니다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          3. 분배: 공정하고 지속가능한 새로운 분배 체계
        </h2>

        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <MermaidRenderer
            chartDefinition={distributionMechanisms}
            id="distribution-mechanisms"
          />
        </div>

        <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            기여 기반 분배의 새로운 패러다임
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            디지털 시대의 분배는 단순히 노동 시간이나 자본 투입량이 아닌,
            실질적인 가치 창출 기여도를 기준으로 이뤄져야 합니다. 데이터 제공,
            창작 활동, 공동체 참여, 사회적 가치 창출 등 다양한 형태의 기여를
            정확히 측정하고 공정하게 보상하는 시스템이 필요합니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            이는 지금까지 무료로 제공해온 우리의 데이터와 참여에 대한
            <span className="font-semibold text-gray-900">정당한 보상</span>을
            실현하는 경제 정의의 구현입니다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          4. 절제 경제: 지속가능한 미래를 위한 새로운 가치관
        </h2>

        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <MermaidRenderer
            chartDefinition={restraintEconomyModel}
            id="restraint-economy-model"
          />
        </div>

        <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            새로운 시대가치: 절제가 미덕이 되는 경제
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            더 많이 소유하고 소비하는 것이 성공이라는 산업시대의 가치관은 역사
            전체를 놓고 보면 지난 200년간의 시대가치일 뿐입니다. 농업 시대에는
            근면, 절약, 협력이, 상업 시대에는 모험정신과 신용이 핵심
            가치였습니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            앞으로는{" "}
            <span className="font-semibold text-gray-900">
              절제가 미덕이 되고, 공유가 풍요가 되는
            </span>{" "}
            새로운 경제 문화를 만들어야 합니다. 이를 위한 제도적, 기술적 통제
            구조가 디지털 절제 경제의 핵심입니다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          5. 단계별 실행 계획
        </h2>

        <div className="space-y-6">
          <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              연구 기반 경제 질서 구축 로드맵
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 shadow-sm">
                <h4 className="font-semibold text-blue-900 mb-2">
                  1단계: 심화 연구 (2025-2027)
                </h4>
                <ul className="text-sm text-blue-700 space-y-1 mb-3">
                  <li>• 데이터 소유권 법제화 연구</li>
                  <li>• 공동체 경제 모델 설계</li>
                  <li>• AI-인간 협력 플랫폼 개발</li>
                  <li>• 기여 기반 분배 시스템 연구</li>
                </ul>
                <p className="text-xs text-blue-600 italic">
                  이론적 토대 구축 및 프로토타입 개발
                </p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200 shadow-sm">
                <h4 className="font-semibold text-orange-900 mb-2">
                  2단계: 실증 검증 (2027-2030)
                </h4>
                <ul className="text-sm text-orange-700 space-y-1 mb-3">
                  <li>• 파일럿 프로그램 실행</li>
                  <li>• 정책 프레임워크 개발</li>
                  <li>• 국제 협력 모델 구축</li>
                  <li>• 효과성 평가 및 개선</li>
                </ul>
                <p className="text-xs text-orange-600 italic">
                  소규모 실험을 통한 실현 가능성 검증
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200 shadow-sm">
                <h4 className="font-semibold text-green-900 mb-2">
                  3단계: 경제질서 완성 (2030-2035)
                </h4>
                <ul className="text-sm text-green-700 space-y-1 mb-3">
                  <li>• 안전하고 건강한 디지털 경제</li>
                  <li>• 지속가능한 협력 기반 사회</li>
                  <li>• 인간 중심 기술 거버넌스</li>
                  <li>• 글로벌 경제 질서 안정화</li>
                </ul>
                <p className="text-xs text-green-600 italic">
                  새로운 경제 질서의 전면적 구현
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              핵심 성공 요인
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold text-gray-900">연구 기반 정책 개발</h4>
                    <p className="text-sm text-gray-600">실증 데이터와 시뮬레이션 결과를 바탕으로 한 정책 설계</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold text-gray-900">시민 참여와 공동 설계</h4>
                    <p className="text-sm text-gray-600">경제 주체들의 직접 참여를 통한 민주적 거버넌스</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold text-gray-900">국제 협력과 표준화</h4>
                    <p className="text-sm text-gray-600">글로벌 차원의 협력을 통한 경제 질서 표준 확립</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold text-gray-900">기술과 제도의 균형</h4>
                    <p className="text-sm text-gray-600">기술 혁신과 사회 제도 개선의 조화로운 발전</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          6. 최종 목표: 글로벌 디지털 경제 질서의 핵심 과제
        </h2>

        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              2030-2035년 완성되어야 할 4대 핵심 시스템
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3">
                  🌐 글로벌 디지털 경제 거버넌스
                </h4>
                <ul className="text-sm text-blue-700 space-y-1 mb-3">
                  <li>• 다국가 간 디지털 경제 정책 조율 체계</li>
                  <li>• 플랫폼 독점 방지 국제 규제 기구</li>
                  <li>• 데이터 국경간 이동 및 과세 표준</li>
                  <li>• AI 경제 영향 모니터링 시스템</li>
                </ul>
                <p className="text-xs text-blue-600 italic font-medium">
                  → 디지털 경제의 글로벌 표준과 규범 확립
                </p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-3">
                  📋 통합 경제 정책 프레임워크
                </h4>
                <ul className="text-sm text-purple-700 space-y-1 mb-3">
                  <li>• 데이터 배당 및 디지털 기본소득 정책</li>
                  <li>• AI-인간 협력 고용 정책</li>
                  <li>• 디지털 자산 과세 및 분배 정책</li>
                  <li>• 플랫폼 노동자 권익 보장 법제</li>
                </ul>
                <p className="text-xs text-purple-600 italic font-medium">
                  → 디지털 시대 맞춤형 경제 정책 체계
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-3">
                  ⚖️ 안전하고 건강한 미래
                </h4>
                <ul className="text-sm text-green-700 space-y-1 mb-3">
                  <li>• 개인 데이터 주권 헌법적 보장</li>
                  <li>• 알고리즘 투명성 및 공정성 원칙</li>
                  <li>• 디지털 시민권과 경제 참여권</li>
                  <li>• AI 시대 인간 존엄성 보장 조항</li>
                </ul>
                <p className="text-xs text-green-600 italic font-medium">
                  → 인간 중심 디지털 경제의 기본 원칙과 가치
                </p>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-3">
                  🏛️ 국제 디지털 경제 기구
                </h4>
                <ul className="text-sm text-orange-700 space-y-1 mb-3">
                  <li>• 디지털 경제 분쟁 조정 기구</li>
                  <li>• 글로벌 데이터 거버넌스 위원회</li>
                  <li>• 국제 디지털 화폐 및 결제 시스템</li>
                  <li>• 디지털 경제 영향 평가 기관</li>
                </ul>
                <p className="text-xs text-orange-600 italic font-medium">
                  → 디지털 경제 질서의 국제적 실행 기구
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              궁극적 목표: 인간 중심 디지털 경제 문명
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">🛡️ 안전한 경제</h4>
                <p className="text-sm text-gray-600">
                  플랫폼 독점과 AI 리스크로부터 보호받는 경제 환경
                </p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">💚 건강한 경제</h4>
                <p className="text-sm text-gray-600">
                  절제와 협력을 통한 지속가능한 성장 모델
                </p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">⚖️ 공정한 경제</h4>
                <p className="text-sm text-gray-600">
                  기여에 따른 정당한 보상과 균등한 기회 보장
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          결론: 연구에서 실현으로, 새로운 경제 문명을 향해
        </h2>

        <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              연구가 만드는 미래: 안전하고 건강한 디지털 경제
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              현재의 연구가 <span className="font-semibold text-gray-900">미래의 경제 질서</span>를 
              설계하고 구현하는 구체적인 로드맵입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">🔬 연구의 힘</h4>
              <p className="text-sm text-gray-600">
                이론적 토대와 실증적 검증을 통한 과학적 접근
              </p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">🤝 협력의 힘</h4>
              <p className="text-sm text-gray-600">
                시민, 학계, 정부, 기업의 협력적 거버넌스
              </p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">🌱 실현의 힘</h4>
              <p className="text-sm text-gray-600">
                단계적 실행을 통한 지속가능한 변화
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              🔬 연구 → 🌱 실현: 최종 목표까지의 경로
            </h4>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>디지털 경제 주체 연구</strong> → 글로벌 디지털 경제 거버넌스 체계 구축</span>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>디지털 경제 권리 연구</strong> → 통합 경제 정책 프레임워크와 안전하고 건강한 미래 완성</span>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>디지털 경제 권력 연구</strong> → 국제 디지털 경제 기구와 공정한 분배 시스템 실현</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 leading-relaxed mb-4">
              이 로드맵은 추상적 비전이 아닌 <span className="font-semibold text-gray-900">구체적이고 실현 가능한 실행 계획</span>입니다. 
              각 단계의 연구 성과가 축적되어 궁극적으로 <span className="font-semibold text-gray-900">글로벌 디지털 경제 거버넌스, 
              통합 경제 정책 프레임워크, 안전하고 건강한 미래, 국제 디지털 경제 기구</span>를 완성하여 
              탐욕과 경쟁의 경제에서 절제와 협력의 경제로 전환하는 새로운 문명을 열어갈 것입니다.
            </p>
            <p className="text-xl font-semibold text-gray-900">
              연구에서 시작되어 글로벌 거버넌스로 완성되는 
              인간 중심 디지털 경제 질서 혁명이 지금 시작됩니다.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default FutureEconomicOrderMasterPlan;
