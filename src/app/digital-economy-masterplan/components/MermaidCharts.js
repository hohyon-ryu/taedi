// MermaidCharts.js - 다이어그램 차트 정의를 모아놓은 컴포넌트

// 연구 로드맵 차트
export const researchRoadmapChart = `
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

// 경제 질서 진화 차트
export const economicOrderEvolutionChart = `
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

// 새로운 경제 주체 차트
export const newEconomicActorsChart = `
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

// 소유권 패러다임 차트
export const ownershipParadigmChart = `
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

// 분배 메커니즘 차트
export const distributionMechanismsChart = `
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

// 절제 경제 모델 차트
export const restraintEconomyModelChart = `
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
