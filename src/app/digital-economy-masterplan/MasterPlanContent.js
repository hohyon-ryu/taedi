import MermaidRenderer from "@/components/MermaidRenderer"; // Assuming this path is correct

const MasterPlanContent = () => {
  const section1Diagram = `
graph TD
    A["디지털 전환 (Digital Transformation)"] --> B["근대 질서 해체 (Deconstruction of Modern Order)"];
    A --> C["새로운 패러다임 모색 (Seeking New Paradigm)"];

    B --> B1["민주주의 위기 (Democracy in Crisis)"];
    B1 --> B1a["대의 민주주의 한계 (Limits of Rep. Dem.)"];
    B1 --> B1b["정보 가속화 & 개인 역량 강화 (Info Acceleration & Indiv. Empowerment)"];
    B1 -- 사례 --> B1c["브렉시트, 트럼프, 케임브리지 애널리티카 (Brexit, Trump, CA)"];
    B1 -- 새로운 가능성 --> B1d["e-Estonia (디지털 시민권, i-Voting)"];

    B --> B2["경제 질서 대전환 (Economic Order Transformation)"];
    B2 --> B2a["노동 가치 변화 (AI 대체) (Changing Labor Value - AI)"];
    B2 --> B2b["생산 방식 변화 (맞춤형, 분산형) (Changing Production - Custom, Distributed)"];
    B2 --> B2c["소유 개념 변화 (공유경제, NFT, DAO) (Changing Ownership - Sharing, NFT, DAO)"];

    B --> B3["공동체 재구성 (Community Reconstruction)"];
    B3 --> B3a["전통 공동체 변화 (가정, 도시, 국가) (Traditional Communities Changing)"];
    B3 --> B3b["유연/분산 네트워크 (Flexible/Distributed Networks)"];
    B3 -- 예시 --> B3c["가정: AI튜터, 원격교육 (Family: AI Tutors, Remote Ed)"];
    B3 -- 예시 --> B3d["도시: 스마트시티 (City: Smart Cities)"];
    B3 -- 예시 --> B3e["국가: 디지털노마드 비자 (Nation: Digital Nomad Visa)"];

    C --> C1["인간 가치 재정의 (Redefinition of Human Value)"];
    C1 --> C1a["'생각하는 존재' 지위 도전 (Challenge to 'Thinking Being' Status)"];
    C1 --> C1b["AI와 공존 (Coexistence with AI)"];
    C1 --> C1c["새로운 가치: 공감, 창의성, 윤리 (New Values: Empathy, Creativity, Ethics)"];

    A -- 궁극적 질문 --> Q["인간 번영과 공동체 가치 중심의 새 패러다임 구축? (New Paradigm for Human Prosperity & Community Values?)"];
  `;

  // Placeholder for more diagrams and content
  // const section2Diagram = \`...\`;

  return (
    <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          1. 디지털 전환: 근대 질서의 종언과 새로운 패러다임
        </h2>
        <p className="mb-4">
          디지털 전환은 단순한 기술 변화를 넘어, 지난 300년간 확립된 근대의
          정치·경제 질서와 인간 가치의 근본을 뒤흔드는 패러다임의 대변혁입니다.
          이는 계몽주의와 산업혁명으로 시작된 근대 패러다임의 해체를 의미하며,
          우리 사회 전반에 걸쳐 새로운 질서 모색을 요구하고 있습니다.
        </p>

        <MermaidRenderer chart={section1Diagram} id="section1Diagram" />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg bg-gray-50">
            <h3 className="font-semibold text-lg mb-2">
              민주주의의 위기와 변화
            </h3>
            <p>
              디지털 기술은 정보 전달 속도를 높이고 개인의 역량을 강화하여, 기존
              대의 민주주의의 한계를 드러내고 있습니다. 시민들은 실시간 소통,
              투명성, 직접 참여를 요구하며, 에스토니아의 'e-Estonia'와 같은
              모델은 분산형 직접 참여의 가능성을 시사합니다.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h3 className="font-semibold text-lg mb-2">경제 질서의 대전환</h3>
            <p>
              AI와 자동화는 노동 중심의 산업 경제를 근본적으로 변화시키고
              있습니다. 생산 방식(맞춤형 분산 생산), 소유 개념(공유 경제, NFT),
              분배 메커니즘이 재정의되며 인간 노동의 가치가 재평가되고 있습니다.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h3 className="font-semibold text-lg mb-2">공동체의 재구성</h3>
            <p>
              가정, 도시, 국가 등 전통적 공동체가 유연하고 분산된 네트워크
              형태로 변화하고 있습니다. 개인은 지리적 제약을 넘어 소속감을
              형성하며, 물리적 공간과 디지털 공간의 경계가 모호해지고 있습니다.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h3 className="font-semibold text-lg mb-2">인간 가치의 재정의</h3>
            <p>
              AI의 등장은 인간 고유의 가치에 대한 성찰을 요구합니다. 단순 정보
              처리 능력을 넘어 공감, 창의성, 윤리적 판단, 의미 창출 능력이
              중요해지며, 인간과 AI의 협업이 새로운 표준으로 자리 잡고 있습니다.
            </p>
          </div>
        </div>
        <p className="mt-6 font-semibold text-center">
          이러한 대전환기에 우리는 기술 결정론을 넘어, 인간 번영과 공동체적
          가치를 중심에 둔 새로운 패러다임을 어떻게 구축할 것인지에 대한 깊은
          성찰과 집단적 선택이 필요합니다.
        </p>
      </section>

      {/* Further sections will be added here with summaries and diagrams */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          2. 경제 질서의 진화: 개인 역량 강화와 공동체 변화
        </h2>
        <p className="mb-4">
          인류의 경제 질서는 농업, 산업, 정보 시대를 거쳐 디지털/AI 패러다임으로
          전환하며 지속적으로 재구성되어 왔습니다. 각 시대는 가치 생산, 소유권,
          분배, 공간 조직의 개념을 변화시키며 개인의 역량과 공동체 구조에 영향을
          미쳤습니다.
        </p>
        <MermaidRenderer
          chart={`
graph LR
    subgraph 농업 사회 (Agricultural Society)
        direction LR
        A1["토지 기반 경제 (Land-based Economy)"]
        A2["계층적 공동체 (Hierarchical Community)"]
        A3["제한된 개인 자율성 (Limited Autonomy)"]
        A1 --> A2
        A1 --> A3
    end

    subgraph 산업 혁명 (Industrial Revolution)
        direction LR
        B1["자본 중심 경제 (Capital-centric Economy)"]
        B2["도시화 및 임금 노동 (Urbanization & Wage Labor)"]
        B3["개인 정체성 변화 (Changing Identity - Occupation)"]
        B1 --> B2
        B1 --> B3
    end

    subgraph 정보 경제 (Information Economy)
        direction LR
        C1["지식 중심 경제 (Knowledge-centric Economy)"]
        C2["네트워크화 및 서비스업 부상 (Networking & Rise of Services)"]
        C3["지식 노동자 등장 (Emergence of Knowledge Workers)"]
        C1 --> C2
        C1 --> C3
    end

    subgraph 디지털/AI 경제 (Digital/AI Economy)
        direction LR
        D1["데이터/알고리즘 중심 (Data/Algorithm-centric)"]
        D2["플랫폼 경제 및 자동화 (Platform Economy & Automation)"]
        D3["디지털 정체성 및 초개인화 (Digital Identity & Hyper-personalization)"]
        D1 --> D2
        D1 --> D3
    end
    
    A1 --> B1 --> C1 --> D1

    X["경제 질서 진화 (Evolution of Economic Order)"] --> A1
    X --> Note1["각 시대는 가치, 소유, 분배, 공간 개념 재정의"]
    D1 --> Q1["미래: 개인과 집단의 균형, 지속가능성 (Future: Balance, Sustainability)"]

    Note1 -.-> A1
    Note1 -.-> B1
    Note1 -.-> C1
    Note1 -.-> D1

    classDef era fill:#f9f,stroke:#333,stroke-width:2px;
    class A1,B1,C1,D1 era;
        `}
          id="economicEvolutionDiagram"
        />

        <div className="mt-6 space-y-4">
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-semibold">농업 사회</h4>
            <p>
              토지 소유 중심, 계층적 공동체, 제한된 개인 자율성, 자급자족 경제.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-semibold">산업 혁명</h4>
            <p>자본 중심, 공장 시스템, 임금 노동, 도시화, 고전 경제학 등장.</p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-semibold">정보 경제</h4>
            <p>
              지식 중심, 네트워크화, 서비스업 부상, 지식 노동자, 복지국가와
              신자유주의.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-semibold">디지털/AI 경제</h4>
            <p>
              데이터/알고리즘 중심, 플랫폼 경제, 자동화, 디지털 정체성, 분배
              문제 심화.
            </p>
          </div>
        </div>
        <p className="mt-6 font-semibold text-center">
          디지털/AI 전환은 개인 역량 강화와 공동체 복지의 균형, 이익의 광범위한
          분배, 인간 자율성 보존 등 중요한 질문을 제기하며, 경제 질서의 다음
          진화를 모색해야 합니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          3. 디지털 시대의 경제 질서 변화
        </h2>
        <p className="mb-4">
          AI와 자동화는 노동 시장, 소득 분배, 그리고 생산·소유·분배·소비의
          전통적 패러다임에 혁명적인 변화를 가져오고 있습니다. '노동 없는
          시대'의 가능성과 함께 새로운 경제 모델에 대한 논의가 활발합니다.
        </p>
        <MermaidRenderer
          chart={`
graph TD
    EOC["디지털 시대 경제 질서 변화 (Changes in Economic Order)"] --> LAB["AI의 노동 대체 및 '탈노동' 가능성 (AI Labor Displacement & 'Post-Work' Potential)"];
    LAB --> LAB1["노동 시장 시나리오 (Labor Market Scenarios)"];
    LAB1 --> LAB1a["균형 조정 (Rebalancing - Job Transformation)"];
    LAB1 --> LAB1b["상당한 노동 대체 (Significant Displacement)"];
    LAB1 --> LAB1c["탈노동 전환 (Post-Work Transition)"];
    LAB --> LAB2["기술적/경제적/사회적 실현 가능성 (Technical/Economic/Social Feasibility)"];

    EOC --> INC["노동 소득 및 분배 시스템 변화 (Changes in Labor Income & Distribution)"];
    INC --> INC1["임금 양극화 심화 (Wage Polarization)"];
    INC --> INC2["소득세 기반 재원 감소 우려 (Concerns over Income Tax Revenue Reduction)"];
    INC --> INC3["대안적 분배 메커니즘 (Alternative Distribution Mechanisms)"];
    INC3 --> INC3a["기본소득 (UBI)"];
    INC3 --> INC3b["데이터 배당 (Data Dividends)"];
    INC3 --> INC3c["기술 배당 (Technology Dividends)"];
    INC3 --> INC3d["자산 기반 복지 (Asset-based Welfare)"];

    EOC --> NEWP["생산, 소유, 분배, 소비의 새 패러다임 (New Paradigm of Prod., Own., Dist., Cons.)"];
    NEWP --> NEWP1["자본-노동 관계 재구성 (Restructuring Capital-Labor Relations)"];
    NEWP --> NEWP2["AI 인프라 집중 (Concentration of AI Infrastructure)"];
    NEWP --> NEWP3["새로운 가치 창출 경로 (New Value Creation Paths - AI Innovation, Data Assets)"];
    NEWP --> NEWP4["소비자 행동 변화 (Changing Consumer Behavior)"];
    NEWP4 --> NEWP4a["초개인화 (Hyper-personalization)"];
    NEWP4 --> NEWP4b["AI 매개 소비 (AI-mediated Consumption)"];
    NEWP4 --> NEWP4c["항시 가동 경제 (Always-on Economy)"];
    NEWP4 --> NEWP4d["서비스/구독 모델 전환 가속 (Shift to Service/Subscription Models)"];
    
    classDef maintopic fill:#cff,stroke:#333,stroke-width:2px;
    class LAB,INC,NEWP maintopic;
        `}
          id="economicOrderChangesDiagram"
        />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-semibold">AI의 노동 대체와 '탈노동' 가능성</h4>
            <p>
              AI 자동화는 예상보다 빠르게 진행되어, 노동 시장에 큰 변화를 초래할
              수 있습니다. 일자리 변형, 상당한 대체, 또는 장기적으로 '탈노동
              사회'로의 전환 가능성까지 다양한 시나리오가 존재합니다.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-semibold">노동 소득 및 분배 시스템 변화</h4>
            <p>
              AI는 임금 양극화를 심화시키고, 전통적 소득세 기반 재정 시스템에
              도전을 제기합니다. 이에 대응하여 기본소득(UBI), 데이터 배당 등
              새로운 분배 메커니즘이 논의되고 있습니다.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50 md:col-span-2">
            <h4 className="font-semibold">
              생산, 소유, 분배, 소비의 새로운 패러다임
            </h4>
            <p>
              AI는 자본-노동 관계를 재구성하고, AI 인프라의 집중을 야기하며,
              새로운 가치 창출 경로를 만듭니다. 소비자 행동 또한 초개인화, AI
              매개 소비, 항시 가동 경제, 서비스/구독 모델로 변화하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          4. 디지털 시대의 사회 변화와 공동체 경제 질서
        </h2>
        <p className="mb-4">
          AI 기술은 개인의 역량을 전문가 수준으로 강화하고, 가정, 도시, 국가 등
          사회 구조 전반에 근본적인 변화를 가져오고 있습니다. 이는 과거
          산업혁명보다 더 광범위한 영향을 미칠 것으로 예상됩니다. AI 혁명은 또한
          가정, 지역사회, 도시, 국가의 경제적 역할을 재편하고 있으며, 글로벌
          경제 질서에도 근본적인 변화를 가져오고 있습니다. 각 공동체 단위는
          새로운 경제 모델과 거버넌스 구조를 모색하고 있습니다.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">사회 변화 측면</h3>
        <MermaidRenderer
          chart={`
graph TD
    SA["디지털 시대의 사회 변화 (Social Changes in Digital Age)"] --> SAI["AI의 개인 역량 강화 (AI Individual Empowerment)"];
    SAI --> SAI1["전문가 수준 능력 부여 (Expert-level Capabilities)"];
    SAI --> SAI2["지식 접근성 민주화 (Democratization of Knowledge Access)"];
    SAI --> SAI3["인간-AI 협업 증강 (Enhanced Human-AI Collaboration)"];
    SAI -- 주의 --> SAI4["고숙련 지식 노동자 편중 혜택 가능성 (Risk of benefiting high-skilled workers disproportionately)"];

    SA --> SR["사회 구조 변화 (Social Structure Transformation)"];
    SR --> SRF["가정 (Family)"];
    SRF --> SRF1["정체성 발견 및 맞춤형 양육 (Identity Discovery & Personalized Parenting)"];
    SRF --> SRF2["AI 튜터 및 가정 내 교육 변화 (AI Tutors & Home Education Change)"];
    SRF --> SRF3["경제 생산 참여 증가 (Increased Participation in Economic Production)"];

    SR --> SRC["도시 (City)"];
    SRC --> SRC1["창조 플랫폼으로 진화 (Evolution to Creative Platform)"];
    SRC --> SRC2["디지털 트윈 및 예측 거버넌스 (Digital Twins & Predictive Governance)"];
    SRC --> SRC3["공간 활용 및 경제 모델 변화 (Changes in Space Utilization & Economic Models)"];

    SR --> SRN["국가 (Nation)"];
    SRN --> SRN1["주권 AI 전략 (Sovereign AI Strategy)"];
    SRN --> SRN2["AI 거버넌스 및 규제 프레임워크 (AI Governance & Regulatory Frameworks)"];
    SRN --> SRN3["복지 시스템 재고 및 데이터 정책 (Rethinking Welfare & Data Policies)"];
    SRN --> SRN4["국가 권력 기반 변화 (Shift in National Power Base - Data, AI Capability)"];
    SRN --> SRN5["기술 중심 경제 동맹 (Tech-centric Economic Alliances)"];

    classDef category fill:#ccf,stroke:#333,stroke-width:2px;
    class SAI,SR category;
        `}
          id="socialChangesDiagram"
        />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-semibold">AI의 개인 역량 강화</h4>
            <p>
              AI는 개인에게 전문가 수준의 의사결정 능력을 부여하고, 지식
              접근성을 민주화하며, 인간-AI 협업을 통해 생산성을 향상시킵니다.
              단, 고숙련 노동자에게 혜택이 편중될 가능성에 유의해야 합니다.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-semibold">가정의 역할 변화</h4>
            <p>
              가정은 AI를 통해 맞춤형 양육 및 교육의 중심지가 되며, 원격 근무 및
              AI 지원 기업가 정신을 통해 경제 생산에 더 직접적으로 참여하게
              됩니다.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-semibold">도시의 진화</h4>
            <p>
              도시는 물리적 공간과 디지털 레이어가 융합된 창조 플랫폼으로
              변모합니다. 디지털 트윈, 예측 거버넌스, 창의적 상호작용을 촉진하는
              공간이 중요해집니다.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50 md:col-span-2 lg:col-span-3">
            <h4 className="font-semibold">국가의 재정의</h4>
            <p>
              국가는 '주권 AI' 전략을 추구하며 AI 거버넌스 체계를 구축합니다.
              데이터 정책이 국가 주권의 핵심이 되며, 복지 시스템 재편 및 기술
              중심의 국제 관계가 모색됩니다.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          공동체 경제 질서 측면
        </h3>
        <MermaidRenderer
          chart={`
graph TD
    CE["디지털 시대 공동체 경제 질서 (Community Economic Order)"] --> FH["가정 및 지역사회 (Family & Local Community)"];
    FH --> FH1["경제적 역할 재편 (Reshaping Economic Roles)"];
    FH1 --> FH1a["원격 근무, 1인 기업가 정신 (Remote Work, Solopreneurship)"];
    FH1 --> FH1b["지역사회 중심 생산 (Community-based Production)"];
    FH --> FH2["새로운 협력 모델 및 상호 원조 (New Cooperation & Mutual Aid)"];

    CE --> CT["도시 (City)"];
    CT --> CT1["AI 경제 혁신 허브 (Hub for AI Economic Innovation)"];
    CT1 --> CT1a["디지털 트윈, 스마트 서비스 (Digital Twins, Smart Services)"];
    CT --> CT2["글로벌 경쟁 각축장 (Arena for Global Competition)"];
    CT --> CT3["지방 데이터 거버넌스 (Local Data Governance)"];

    CE --> NT["국가 (Nation)"];
    NT --> NT1["주권 AI 전략 및 경제 자립 (Sovereign AI & Economic Self-reliance)"];
    NT --> NT2["AI 거버넌스 및 규제 설계 (AI Governance & Regulation Design)"];
    NT --> NT3["복지 시스템 및 사회 안전망 재고 (Rethinking Welfare & Social Safety Nets)"];

    CE --> GE["글로벌 경제 질서 재편 (Reshaping Global Economic Order)"];
    GE --> GE1["지경제적 양극화 (Geoeconomic Bipolarization)"];
    GE --> GE2["기술 중심 경제 동맹 (Tech-centric Economic Alliances)"];
    GE --> GE3["국제기구 역할 변화 및 새 거버넌스 등장 (Changing Roles of Int'l Orgs & New Governance)"];
    GE --> GE4["AI 선진국-개발도상국 격차 (AI Divide: Developed vs. Developing)"];
    GE --> GE5["데이터 주권 부상 (Rise of Data Sovereignty)"];

    classDef entity fill:#e6fffa,stroke:#333,stroke-width:2px;
    class FH,CT,NT,GE entity;
        `}
          id="communityEconomicOrderDiagram"
        />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-semibold">가정 및 지역사회</h4>
            <p>
              AI는 가정이 소비 단위에서 생산 단위로 변화하도록 촉진하며,
              지역사회 내 새로운 경제 협력 모델과 상호 원조 네트워크의 중요성을
              부각시킵니다.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-semibold">도시</h4>
            <p>
              도시는 AI 경제 혁신의 허브이자 글로벌 경쟁의 각축장으로
              부상합니다. 디지털 트윈, 스마트 서비스, 지방 데이터 거버넌스가
              핵심 요소로 작용합니다.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-semibold">국가</h4>
            <p>
              국가는 '주권 AI' 전략을 통해 경제 자립을 추구하고, AI 거버넌스 및
              규제를 설계하며, 변화하는 노동 시장에 맞춰 복지 시스템과 사회
              안전망을 재검토합니다.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-semibold">글로벌 경제 질서</h4>
            <p>
              AI는 지경제적 양극화, 기술 중심 동맹, 새로운 국제 거버넌스 구조의
              등장을 촉진합니다. AI 선진국과 개발도상국 간 격차 및 데이터 주권
              문제가 중요 이슈로 부상합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          5. 디지털 경제의 핵심 주체와 관계망
        </h2>
        <p className="mb-4">
          디지털 경제는 개인 이용자, 콘텐츠 크리에이터, 플랫폼 기업, AI 시스템,
          DAO, 정부 등 다양한 행위자들의 복잡한 상호작용으로 구성됩니다. 각
          주체는 고유한 역할을 수행하며, 이들 간의 관계와 권력 구조가 디지털
          생태계의 동학을 형성합니다.
        </p>
        <MermaidRenderer
          chart={`
graph TD
    subgraph 주요 주체 (Key Actors)
        direction LR
        U["개인 이용자 (Users)"]
        C["콘텐츠 크리에이터 (Creators)"]
        P["플랫폼 기업 (Platforms)"]
        AI["AI 시스템 (AI Systems)"]
        D["DAO (Decentralized Autonomous Orgs)"]
        G["정부 및 규제기관 (Governments)"]
    end

    subgraph 상호작용 및 관계망 (Interactions & Networks)
        U -- 데이터 제공/서비스 소비 --> P
        C -- 콘텐츠 제공/수익 공유 --> P
        P -- 중개/시장 조성 --> U
        P -- 중개/플랫폼 제공 --> C
        AI -- 서비스/자동화 제공 --> U
        AI -- 효율화/의사결정 지원 --> P
        AI -- 창작 도구 제공 --> C
        D -- 커뮤니티 거버넌스/가치 분배 --> U
        D -- 커뮤니티 거버넌스/가치 분배 --> C
        G -- 규제/정책/지원 --> P
        G -- 규제/정책/지원 --> AI
        G -- 규제/정책/지원 --> D
        G -- 권익 보호 --> U
        G -- 권익 보호 --> C
    end

    subgraph 권력 구조 및 이슈 (Power Structures & Issues)
        PS1["네트워크 효과 및 데이터 독점 (Network Effects & Data Monopoly)"]
        PS2["플랫폼의 게이트키퍼 역할 (Platform as Gatekeeper)"]
        PS3["AI 알고리즘의 영향력 (Influence of AI Algorithms)"]
        PS4["Web3 및 탈중앙화 대안 (Web3 & Decentralized Alternatives)"]
        PS5["정부 규제의 역할과 한계 (Role & Limits of Government Regulation)"]
    end
    
    P --> PS1
    P --> PS2
    AI --> PS3
    D --> PS4
    G --> PS5

    classDef actor fill:#lightyellow,stroke:#333,stroke-width:2px;
    class U,C,P,AI,D,G actor;
        `}
          id="digitalActorsDiagram"
        />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-semibold">개인 이용자</h4>
            <p>
              소비자, 데이터 생산자, 커뮤니티 참여자. 디지털 포용 및 데이터
              주권이 중요.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-semibold">콘텐츠 크리에이터</h4>
            <p>
              독창적 콘텐츠 생산, 플랫폼 가치 증대. Web3/메타버스에서 새로운
              기회와 도전 직면.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-semibold">플랫폼 기업</h4>
            <p>
              중개자, 시장 조성자, 생태계 규제자. 네트워크 효과로 성장하나 시장
              지배력 문제 발생.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-semibold">AI 시스템</h4>
            <p>
              핵심 경제 활동 주체로 부상. 생산성 향상 기여하나 편향, 일자리
              대체, 윤리 문제 야기.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-semibold">DAO (탈중앙화 자율조직)</h4>
            <p>
              블록체인 기반 커뮤니티 거버넌스. 투명성/민주성 장점,
              플루토크라시/법적 지위 문제.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-semibold">정부 및 규제 기관</h4>
            <p>
              시장 질서, 공정 경쟁, 소비자 보호, 혁신 지원. 규제 공백 및 국제
              공조 필요.
            </p>
          </div>
        </div>
        <p className="mt-6">
          디지털 경제는 소수 거대 플랫폼과 AI 선도 기업에 권력이 집중되는 경향을
          보이며, Web3와 DAO가 대안으로 제시되지만 자체적인 과제도 안고
          있습니다. 공정성과 형평성을 위한 제도적 장치와 규제적 개입이
          요구됩니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          6. 디지털 시대의 가치 창출, 소유권, 분배 패러다임 전환
        </h2>
        <p className="mb-4">
          디지털 기술과 AI의 발전은 경제의 근간을 이루는 가치 창출 방식,
          소유권의 개념, 그리고 부의 분배 구조에 전례 없는 변화를 가져오고
          있습니다. 데이터가 핵심 생산요소로 부상하고, 지능형 자동화가 생산성을
          극대화하며, 플랫폼과 디지털 자산이 새로운 경제 모델을 형성함에 따라,
          전통적인 패러다임은 도전을 받고 새로운 질서가 모색되고 있습니다.
        </p>
        <MermaidRenderer
          chart={`
graph TD
    A["디지털/AI 시대 패러다임 전환"] --> VC["가치 창출 방식 변화"];
    A --> OS["소유권 개념 변화"];
    A --> DS["분배 구조 변화"];

    subgraph "가치 창출 (Value Creation)"
        direction LR
        VC --> VC1["데이터 기반 가치 (Data-driven Value)"];
        VC1 --> VC1a["AI 분석 및 예측 (AI Analytics & Prediction)"];
        VC1 --> VC1b["초개인화 서비스 (Hyper-personalized Services)"];
        VC --> VC2["지능형 자동화 (Intelligent Automation)"];
        VC2 --> VC2a["스마트 팩토리, 휴머노이드 (Smart Factories, Humanoids)"];
        VC2 --> VC2b["생산성 향상 및 비용 절감 (Productivity & Cost Reduction)"];
        VC --> VC3["플랫폼 경제 (Platform Economy)"];
        VC3 --> VC3a["네트워크 효과 (Network Effects)"];
        VC3 --> VC3b["생태계 구축 (Ecosystem Building)"];
        VC --> VC4["새로운 디지털 경험 (New Digital Experiences)"];
        VC4 --> VC4a["서비스화, 구독 경제 (Servitization, Subscription)"];
        VC4 --> VC4b["메타버스, Web3 (Metaverse, Web3)"];
    end

    subgraph "소유권 (Ownership)"
        direction LR
        OS --> OS1["AI 인프라 집중 (AI Infrastructure Concentration)"];
        OS1 --> OS1a["소수 기업 독점 우려 (Monopoly Concerns)"];
        OS --> OS2["지식재산권 재정의 (IP Redefinition)"];
        OS2 --> OS2a["AI 생성 창작물 (AI-generated Creations)"];
        OS2 --> OS2b["AI 시스템 자체 IP (IP of AI Systems)"];
        OS --> OS3["데이터 소유권 및 거버넌스 (Data Ownership & Governance)"];
        OS3 --> OS3a["개인 데이터 주권 (Personal Data Sovereignty)"];
        OS3 --> OS3b["데이터 협동조합/신탁 (Data Cooperatives/Trusts)"];
        OS3 --> OS3c["공공 데이터 개방 (Open Public Data)"];
    end

    subgraph "분배 (Distribution)"
        direction LR
        DS --> DS1["노동 소득 변화 (Labor Income Changes)"];
        DS1 --> DS1a["노동소득분배율 하락 가능성 (Potential Decline in Labor Share)"];
        DS1 --> DS1b["임금 격차 확대 (Widening Wage Gap)"];
        DS --> DS2["전통적 조세 한계 (Limits of Traditional Taxation)"];
        DS2 --> DS2a["소득세 기반 약화 (Weakening Income Tax Base)"];
        DS2 --> DS2b["자본 과세 강화 논의 (Debate on Capital Taxation)"];
        DS --> DS3["새로운 분배 메커니즘 (New Distribution Mechanisms)"];
        DS3 --> DS3a["보편적 기본소득 (UBI)"];
        DS3 --> DS3b["데이터/기술 배당 (Data/Tech Dividends)"];
        DS3 --> DS3c["로봇세 논쟁 (Robot Tax Debate)"];
    end

    classDef main_pillar fill:#e6f7ff,stroke:#0077cc,stroke-width:2px,color:#000;
    class VC,OS,DS main_pillar;
        `}
          id="digitalParadigmShiftDiagram"
        />

        <div className="mt-8 space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-blue-700">
              1. 디지털 시대의 가치 창출 혁신
            </h3>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg bg-blue-50">
                <h4 className="font-semibold">
                  데이터 기반 가치와 지능형 자동화
                </h4>
                <p>
                  AI 시대의 핵심 생산요소는 데이터입니다. AI는 방대한 데이터를
                  분석하여 개인화된 서비스, 정교한 예측, 최적화된 의사결정을
                  가능하게 하며, 이는 새로운 부가가치 창출의 원천이 됩니다.
                  스마트 팩토리와 휴머노이드 로봇으로 대표되는 지능형 자동화는
                  제조 공정을 혁신하고, 생산성을 비약적으로 향상시키며, 대량
                  맞춤 생산과 같은 새로운 생산 방식을 현실화합니다.
                </p>
              </div>
              <div className="p-4 border rounded-lg bg-blue-50">
                <h4 className="font-semibold">
                  플랫폼 경제와 새로운 디지털 경험
                </h4>
                <p>
                  디지털 플랫폼은 네트워크 효과를 통해 참여자를 연결하고
                  상호작용을 촉진하며, 이를 통해 막대한 가치를 창출합니다. 광고,
                  구독, 거래 수수료 등 다양한 수익 모델이 플랫폼 생태계를
                  뒷받침합니다. 또한, AI는 서비스화(Servitization)와 구독 경제를
                  가속화하고, 메타버스, Web3, NFT와 같은 기술은 몰입형 경험과
                  새로운 형태의 디지털 자산 거래를 통해 이전에는 없던 가치 창출
                  기회를 제공합니다.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-green-700">
              2. 디지털 시대의 소유권 패러다임 전환
            </h3>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg bg-green-50">
                <h4 className="font-semibold">AI 인프라 집중과 지식재산권</h4>
                <p>
                  AI 개발에 필수적인 컴퓨팅 자원, 데이터센터, AI 칩은 소수 거대
                  기업에 집중되는 경향을 보이며, 이는 기술 접근성 불균형과 시장
                  독점 우려를 낳습니다. 한편, AI가 생성한 창작물과 발명에 대한
                  저작권 및 특허 귀속 문제는 전통적인 지식재산권 체계에 새로운
                  도전을 제기하며, AI 시스템 자체의 IP 보호 또한 중요한
                  쟁점입니다.
                </p>
              </div>
              <div className="p-4 border rounded-lg bg-green-50">
                <h4 className="font-semibold">데이터 소유권과 거버넌스</h4>
                <p>
                  데이터가 핵심 자산으로 부상함에 따라 개인 데이터 주권, 데이터
                  협동조합, 데이터 신탁 등 다양한 데이터 소유권 및 거버넌스
                  모델이 논의되고 있습니다. 이는 개인 프라이버시 보호, 데이터의
                  공정한 가치 배분, 그리고 데이터의 공익적 활용이라는 다층적
                  목표 사이의 균형을 찾는 과정입니다. 공공 데이터의 개방과 활용
                  또한 중요한 과제입니다.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-700">
              3. 디지털 시대의 분배 구조 변화
            </h3>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg bg-purple-50">
                <h4 className="font-semibold">
                  노동 소득 변화와 불평등 심화 가능성
                </h4>
                <p>
                  AI와 자동화는 노동소득분배율을 하락시키고, 고숙련-저숙련
                  노동자 간 임금 격차를 확대하여 소득 불평등을 심화시킬 수
                  있습니다. 이는 기존의 노동 기반 복지 시스템과 소득세 중심의
                  재정 구조에 큰 부담으로 작용할 수 있습니다.
                </p>
              </div>
              <div className="p-4 border rounded-lg bg-purple-50">
                <h4 className="font-semibold">
                  새로운 분배 메커니즘 및 재원 확보 방안
                </h4>
                <p>
                  전통적 조세 시스템의 한계에 직면하여, 자본 과세 강화, 로봇세
                  도입 논쟁과 함께 보편적 기본소득(UBI), 데이터 배당, 기술 배당,
                  시민 자본 기금 등 새로운 가치 분배 메커니즘이 활발히 탐색되고
                  있습니다. 이는 AI 시대의 경제적 풍요를 어떻게 공정하게 공유할
                  것인가에 대한 근본적인 질문에 답하려는 시도입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8">
          디지털 시대의 가치 창출, 소유권, 분배 패러다임 전환은 경제 시스템
          전반에 걸쳐 혁신적 기회와 심각한 도전을 동시에 제기합니다. 데이터의
          윤리적 활용, 공정한 경쟁 환경 조성, 기술 발전의 혜택 공유, 그리고
          사회적 안전망 강화는 지속 가능하고 포용적인 디지털 경제 질서를
          구축하기 위한 핵심 과제입니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          7. 새로운 디지털 경제 질서의 문제점
        </h2>
        <p className="mb-4">
          새로운 디지털 경제 질서는 혁신과 편의를 가져다주는 동시에 경제적
          불평등, 고용 불안정, 프라이버시 침해, 알고리즘 편향, 규제 공백, 환경
          문제 등 복합적인 문제점을 야기합니다.
        </p>
        <MermaidRenderer
          chart={`
graph TD
    PNDO["새로운 디지털 경제 질서의 문제점 (Problems of New Digital Economic Order)"]

    subgraph 주요 문제점 (Key Issues)
        direction TB
        I1["경제적 불평등 및 디지털 격차 (Economic Inequality & Digital Divide)"]
        I1 --> I1a["기술 접근성 및 활용 능력 차이 (Differences in Access & Literacy)"]
        I1 --> I1b["기존 불평등 심화 (Exacerbation of Existing Inequalities)"]

        I2["고용 불안정 및 노동 시장 변화 (Job Insecurity & Labor Market Changes)"]
        I2 --> I2a["AI/자동화로 인한 직무 대체 (Job Displacement by AI/Automation)"]
        I2 --> I2b["긱 경제 확산과 노동자 권익 (Gig Economy & Worker Rights)"]

        I3["데이터 프라이버시 및 보안 (Data Privacy & Security)"]
        I3 --> I3a["개인 데이터 수집/분석/활용 (Collection/Analysis/Use of Personal Data)"]
        I3 --> I3b["감시 자본주의 우려 (Concerns of Surveillance Capitalism)"]

        I4["알고리즘 편향 및 차별 (Algorithmic Bias & Discrimination)"]
        I4 --> I4a["학습 데이터 편향 반영/증폭 (Reflection/Amplification of Biased Data)"]
        I4 --> I4b["사회적 불평등 재생산 (Reproduction of Social Inequalities)"]

        I5["규제 공백 및 거버넌스 과제 (Regulatory Gaps & Governance Challenges)"]
        I5 --> I5a["기술 발전 속도 vs 규제 속도 (Pace of Tech vs. Regulation)"]
        I5 --> I5b["초국경적 특성과 국제 공조 필요 (Transnational Nature & Need for Int'l Cooperation)"]
        
        I6["환경 및 지속가능성 문제 (Environmental & Sustainability Issues)"]
        I6 --> I6a["에너지 소비 및 전자 폐기물 (Energy Consumption & E-waste)"]
        I6 --> I6b["지속가능한 기술 필요성 (Need for Sustainable Technology)"]
    end

    PNDO --> I1
    PNDO --> I2
    PNDO --> I3
    PNDO --> I4
    PNDO --> I5
    PNDO --> I6

    classDef issue fill:#ffebee,stroke:#c62828,stroke-width:2px;
    class I1,I2,I3,I4,I5,I6 issue;
        `}
          id="digitalEconomyProblemsDiagram"
        />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg bg-red-50">
            <h4 className="font-semibold text-red-700">
              경제적 불평등/디지털 격차
            </h4>
            <p>
              기술 접근 및 활용 능력 차이가 기존 불평등을 심화시키고 디지털
              소외를 야기합니다.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-red-50">
            <h4 className="font-semibold text-red-700">
              고용 불안정/노동 시장 변화
            </h4>
            <p>
              AI/자동화로 인한 직무 대체, 긱 경제 확산에 따른 노동자 권익 문제가
              발생합니다.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-red-50">
            <h4 className="font-semibold text-red-700">
              데이터 프라이버시/보안
            </h4>
            <p>
              방대한 개인 데이터 수집은 프라이버시 침해 및 감시 자본주의 우려를
              낳습니다.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-red-50">
            <h4 className="font-semibold text-red-700">알고리즘 편향/차별</h4>
            <p>
              학습 데이터의 편향이 알고리즘에 반영되어 특정 집단에 대한 차별을
              재생산합니다.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-red-50">
            <h4 className="font-semibold text-red-700">
              규제 공백/거버넌스 과제
            </h4>
            <p>
              빠른 기술 발전에 비해 규제가 미흡하여 소비자 피해, 불공정 경쟁
              등이 발생할 수 있습니다.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-red-50">
            <h4 className="font-semibold text-red-700">환경/지속가능성 문제</h4>
            <p>
              데이터센터 운영, 기기 생산/폐기 과정에서 에너지 소비와 전자 폐기물
              문제가 심각합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          8. 건강하고 안전한 디지털 사회를 위한 연구 과제
        </h2>
        <p className="mb-4">
          새로운 디지털 경제 질서의 문제점을 해결하고 모든 구성원이 혜택을
          누리는 건강하고 안전한 디지털 사회를 구축하기 위해서는 다각적인 연구가
          필요합니다.
        </p>
        <MermaidRenderer
          chart={`
graph TD
    RT["건강하고 안전한 디지털 사회 위한 연구 과제 (Research for Healthy & Safe Digital Society)"]

    subgraph 주요 연구 분야 (Key Research Areas)
        direction TB
        R1["디지털 신뢰 및 안전 생태계 구축 (Building Digital Trust & Safety Ecosystem)"]
        R1 --> R1a["허위 정보 방지, 사이버 보안 강화 (Countering Disinformation, Enhancing Cybersecurity)"]
        R1 --> R1b["개인정보보호 강화 기술 (PETs) (Privacy-Enhancing Technologies)"]

        R2["공정 경쟁 및 규제 혁신 (Fair Competition & Regulatory Innovation)"]
        R2 --> R2a["거대 플랫폼 시장 지배력 남용 방지 (Preventing Abuse of Dominance by Big Tech)"]
        R2 --> R2b["유연하고 효과적인 규제 프레임워크 (Flexible & Effective Regulatory Frameworks)"]

        R3["AI 윤리 및 책임 있는 AI 개발 (AI Ethics & Responsible AI Development)"]
        R3 --> R3a["투명성, 설명가능성, 공정성, 책임성 확보 (Ensuring Transparency, Explainability, Fairness, Accountability)"]
        R3 --> R3b["AI 윤리 가이드라인 및 규제 (AI Ethics Guidelines & Regulations)"]

        R4["디지털 리터러시 강화 (Enhancing Digital Literacy)"]
        R4 --> R4a["비판적 디지털 시민성 함양 (Fostering Critical Digital Citizenship)"]
        R4 --> R4b["포괄적 교육 프로그램 개발 (Developing Comprehensive Education Programs)"]

        R5["미래 사회안전망 및 노동 정책 (Future Social Safety Nets & Labor Policies)"]
        R5 --> R5a["AI/자동화 대응 사회안전망 재설계 (Redesigning Social Safety Nets for AI/Automation)"]
        R5 --> R5b["평생학습 및 직업훈련 강화 (Strengthening Lifelong Learning & Vocational Training)"]

        R6["지속가능한 디지털 기술 및 ESG 통합 (Sustainable Digital Tech & ESG Integration)"]
        R6 --> R6a["디지털 기술 환경 영향 최소화 (Minimizing Environmental Impact of Digital Tech)"]
        R6 --> R6b["ESG 가치 통합 기술 개발/정책 (Integrating ESG Values in Tech/Policy)"]
        
        R7["포용적 데이터 거버넌스 (Inclusive Data Governance)"]
        R7 --> R7a["데이터 생애주기 전반 개인 권리 보호 (Protecting Individual Rights in Data Lifecycle)"]
        R7 --> R7b["데이터 공공 가치 증진 및 이해관계자 참여 (Promoting Public Value of Data & Stakeholder Participation)"]
    end

    RT --> R1
    RT --> R2
    RT --> R3
    RT --> R4
    RT --> R5
    RT --> R6
    RT --> R7

    classDef research fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px;
    class R1,R2,R3,R4,R5,R6,R7 research;
        `}
          id="researchTasksDiagram"
        />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg bg-green-50">
            <h4 className="font-semibold text-green-700">
              디지털 신뢰/안전 생태계
            </h4>
            <p>
              허위 정보 방지, 사이버 보안, 개인정보보호 강화 기술(PETs) 연구.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-green-50">
            <h4 className="font-semibold text-green-700">
              공정 경쟁/규제 혁신
            </h4>
            <p>
              플랫폼 독과점 방지, 혁신 친화적이고 유연한 규제 프레임워크 설계.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-green-50">
            <h4 className="font-semibold text-green-700">
              AI 윤리/책임있는 AI
            </h4>
            <p>
              AI의 투명성, 설명가능성, 공정성, 책임성 확보 및 윤리 가이드라인
              개발.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-green-50">
            <h4 className="font-semibold text-green-700">
              디지털 리터러시 강화
            </h4>
            <p>비판적 디지털 시민성 함양을 위한 포괄적 교육 프로그램 개발.</p>
          </div>
          <div className="p-4 border rounded-lg bg-green-50">
            <h4 className="font-semibold text-green-700">
              미래 사회안전망/노동 정책
            </h4>
            <p>
              AI/자동화 시대 대응 사회안전망 재설계, 평생학습 및 직업훈련 강화.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-green-50">
            <h4 className="font-semibold text-green-700">
              지속가능 디지털 기술/ESG
            </h4>
            <p>
              디지털 기술의 환경 영향 최소화, ESG 가치 통합 기술 및 정책 연구.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-green-50 sm:col-span-2 lg:col-span-3">
            <h4 className="font-semibold text-green-700">
              포용적 데이터 거버넌스
            </h4>
            <p>
              데이터 생애주기 전반 개인 권리 보호, 데이터 공공 가치 증진, 다양한
              이해관계자 참여 보장 모델 연구.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default MasterPlanContent;
