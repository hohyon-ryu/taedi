import MermaidRenderer from "../../components/MermaidRenderer";

// Helper component for sections to avoid repetition, can be moved to a separate file
const Section = ({ title, children, titleLevel = 2 }) => {
  const titleClassName =
    "font-bold mb-3 text-gray-800 border-b pb-2 " +
    (titleLevel === 2 ? "text-2xl" : "text-xl");

  let TitleComponent;
  if (titleLevel === 1) {
    TitleComponent = <h1 className={titleClassName}>{title}</h1>;
  } else if (titleLevel === 3) {
    TitleComponent = <h3 className={titleClassName}>{title}</h3>;
  } else if (titleLevel === 4) {
    TitleComponent = <h4 className={titleClassName}>{title}</h4>;
  } else if (titleLevel === 5) {
    TitleComponent = <h5 className={titleClassName}>{title}</h5>;
  } else if (titleLevel === 6) {
    TitleComponent = <h6 className={titleClassName}>{title}</h6>;
  } else {
    // Default to h2
    TitleComponent = <h2 className={titleClassName}>{title}</h2>;
  }

  return (
    <div className="mb-8 p-4 bg-gray-50 rounded-lg shadow">
      {TitleComponent}
      <div className="space-y-2 text-gray-700">{children}</div>
    </div>
  );
};

// Original SubSection component with bullet points
const SubSection = ({ title, items, boldPoints = false }) => (
  <div className="mb-4 pl-4">
    <h4 className="text-lg font-semibold mb-2 text-gray-700">{title}</h4>
    <ul className="list-disc pl-5 space-y-1 text-sm">
      {items.map((item, index) => (
        <li key={index}>
          {boldPoints && typeof item === "object" ? (
            <>
              <strong>{item.bold}:</strong> {item.text}
            </>
          ) : (
            item
          )}
        </li>
      ))}
    </ul>
  </div>
);

// New component for paragraph-style content
const TextSection = ({ title, paragraphs }) => (
  <div className="mb-4 pl-4">
    <h4 className="text-lg font-semibold mb-3 text-gray-700">{title}</h4>
    <div className="space-y-3 text-sm text-gray-700">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  </div>
);

const DigitalEconomyPage = () => {
  const mermaidChartString = `
graph LR
  A[개인 역량 강화] --> B(새로운 공동체 필요성 대두);
  B --> C{가정, 도시, 국가 역할 재편};
  C -- 국가 기능 약화 --> D[새로운 경제 질서 수립];
  D -- 소유와 분배 재정립 --> E(지속가능한 사회경제 시스템);

  classDef highlight fill:#e6fffa,stroke:#00b5d8,stroke-width:2px,color:#007a7a;
  class A,B,C,D,E highlight;
`;

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-900 tracking-tight">
            AI 시대의 새로운 경제 질서와 사회변혁 프레임워크
          </h1>
          <div className="bg-gray-100 p-4 rounded-lg inline-block shadow">
            <p className="text-md text-gray-800 italic font-medium">
              태재미래전략연구원 디지털 전환과 사회변혁 팀 연구 기반
            </p>
          </div>
        </div>

        {/* 1. 디지털 전환과 문명 전환의 맥락 */}
        <Section title="1. 디지털 전환과 문명 전환의 맥락">
          <SubSection
            title="역사적 전환기의 특성"
            items={[
              "기존 질서의 한계와 모순 표면화",
              "혁신적 기술의 등장과 급속한 확산",
              "권력 구조와 소유 개념의 근본적 재편",
              "인간 존재 방식과 정체성의 변화",
              "기존 체제와 새로운 질서 간 충돌",
              "변방에서 시작된 혁신이 중심부로 확산",
            ]}
          />
          <SubSection
            title="디지털 전환의 경제적 특수성"
            items={[
              "무형자산 중심 경제로의 급속한 전환",
              "AI가 노동을 대체하는 새로운 생산 패러다임",
              "데이터 자본주의와 감시 경제의 확산",
              "디지털 격차에 따른 새로운 경제적 불평등",
              "국경을 초월하는 거래와 조세 체계의 붕괴",
            ]}
          />
        </Section>

        {/* 2. 전환의 핵심 영역과 변화 메커니즘 */}
        <Section title="2. 전환의 핵심 영역과 변화 메커니즘">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <TextSection
                title="A. 개인 역량의 강화와 새로운 계층 분화"
                paragraphs={[
                  "AI 기술은 개인의 역량을 크게 강화하고 생산성을 향상시키는 잠재력을 가지고 있습니다. 그러나 이러한 기술 발전은 사회 내 새로운 계층 분화를 야기할 수 있습니다.",
                  "기존 자본과 전문성을 보유한 소수(약 10%)는 AI를 활용해 소득을 크게 증가시킬 것으로 예상됩니다. 중간층(30~70%)은 AI를 통해 비용을 절감하고 효율성을 높일 수 있지만, 소득 증가는 제한적일 수 있습니다. 반면 디지털 접근성과 활용 능력이 취약한 계층은 기술 소외를 경험할 위험이 있습니다.",
                  "이러한 격차를 해소하기 위해 디지털 리터러시 강화, 균형 있는 발전 지원, 기술 접근성 보장 등의 과제가 중요해지고 있습니다. 모든 사회 구성원이 AI 시대의 혜택을 고르게 누릴 수 있는 포용적 접근이 필요합니다.",
                ]}
              />
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <TextSection
                title="B. 마켓의 가치 변화와 절제 기반 경제 생태계"
                paragraphs={[
                  "현재 경제 시스템은 경제적 양극화 심화와 지속가능성 위기에 직면해 있습니다. 무한 성장과 소비 중심의 경제 패러다임은 환경적, 사회적 한계에 도달하고 있습니다.",
                  "이러한 상황에서 절제와 균형에 기반한 새로운 경제 생태계가 등장하고 있습니다. 이는 단순한 이윤 추구를 넘어 공동체의 필요와 환경적 지속가능성을 고려하는 비즈니스 모델을 지향합니다.",
                  "이 새로운 경제 생태계의 특징은 경제적 가치와 공동체적 가치의 통합, 다양한 이해관계자의 참여, 그리고 장기적 관점에서의 지속가능한 가치 창출 메커니즘 구축입니다. 이는 산업사회의 욕망 중심 체제에서 절제와 균형의 경제로 전환하는 과정을 반영합니다.",
                ]}
              />
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <TextSection
                title="C. 소유와 분배 질서의 재정립"
                paragraphs={[
                  "디지털 경제에서는 무형자산의 가치가 크게 증대되고, 전통적인 노동과 소득의 연결이 약화되고 있습니다. 이는 소유와 분배에 관한 근본적인 질문을 제기합니다.",
                  "새로운 소유와 분배 질서는 몇 가지 철학적 방향을 기반으로 합니다. 모든 사람은 공동 자원과 부에 대한 권리를 가지며, 기본적 생활을 영위할 수 있는 권리가 보장되어야 합니다. 경제적 안전망이 있을 때 진정한 선택의 자유가 가능하며, 부의 극단적 불평등은 완화될 필요가 있습니다.",
                  "이를 위해 개인의 창의적 기여와 공공 이익의 균형을 보장하는 새로운 소유권 모델과, 디지털 경제 이익의 공정한 분배 메커니즘 개발이 중요한 과제로 대두되고 있습니다.",
                ]}
              />
            </div>

            {/* Card 4 */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <TextSection
                title="D. 공동체, 도시, 국가 역할의 재편"
                paragraphs={[
                  "디지털 전환 시대에는 국가 주권의 개념이 변화하고, 도시 네트워크의 중요성이 부상하고 있습니다. 이는 공동체, 도시, 국가의 역할 재정립을 요구합니다.",
                  "도시는 개인이 경제적 자율성을 추구하고 실현하는 공간으로서의 역할이 강화되고 있습니다. 창조 플랫폼으로서의 도시 개념이 중요해지고, 물리적 경계를 넘어선 도시 간 협력 네트워크가 형성되고 있습니다.",
                ]}
                boldPoints={true}
              />
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <SubSection
                title="C. 소유와 분배 질서의 재정립"
                items={[
                  {
                    bold: "현상",
                    text: "무형자산 가치 증대와 노동-소득 연결 약화",
                  },
                  { bold: "철학적 방향", text: "" },
                  "모든 사람은 공동 자원과 부에 대한 권리를 가짐",
                  "기본적 생활을 영위할 수 있는 권리 보장",
                  "경제적 안전망이 있을 때 진정한 선택의 자유 가능",
                  "부의 극단적 불평등 완화 필요",
                  {
                    bold: "새로운 소유권 모델",
                    text: "개인의 창의적 기여와 공공 이익의 균형 보장",
                  },
                  {
                    bold: "분배 시스템",
                    text: "디지털 경제 이익의 공정한 분배 메커니즘 개발",
                  },
                ]}
                boldPoints={true}
              />
            </div>

            {/* Card 4 */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <SubSection
                title="D. 공동체, 도시, 국가 역할의 재편"
                items={[
                  {
                    bold: "현상",
                    text: "국가 주권의 변화, 도시 네트워크의 부상",
                  },
                  { bold: "도시의 새로운 역할", text: "" },
                  "개인이 경제적 자율성을 추구하고 실현하는 공간",
                  "창조 플랫폼으로서의 도시 개념 강화",
                  "물리적 경계를 넘어선 도시 간 협력 네트워크",
                  { bold: "국가 역할의 재정의", text: "" },
                  "통제자에서 조정자, 촉진자로 전환",
                  "디지털 평화 체계 구축",
                  "국가 안보 개념의 확장(디지털, 환경, 보건 등 포괄)",
                  {
                    bold: "과제",
                    text: "도시 간 협력 체계 구축, 디지털 공공재 확충",
                  },
                ]}
                boldPoints={true}
              />
            </div>

            {/* Card 5 */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow md:col-span-2">
              <SubSection
                title="E. 글로벌 경제 질서의 변화"
                items={[
                  {
                    bold: "현상",
                    text: "국경을 초월한 디지털 무역 확대, 데이터 패권 경쟁",
                  },
                  { bold: "핵심 변화 영역", text: "무역 패러다임 전환" },
                  "물리적 상품에서 무형 자산 중심으로 전환",
                  "도시 간 무역 네트워크의 중요성 증대",
                  "디지털 인프라의 전략적 가치 상승",
                  { bold: "거버넌스 과제", text: "" },
                  "국가 주권과 글로벌 협력의 새로운 균형",
                  "넥스트 WTO 같은 새로운 글로벌 무역 체계 필요",
                  "데이터 흐름과 디지털 인프라에 관한 공정한 국제 질서 구축",
                ]}
                boldPoints={true}
              />
            </div>
          </div>
        </Section>

        {/* 새로운 섹션: 핵심 변화의 흐름 */}
        <Section title="3. 핵심 변화의 흐름">
          <p className="text-sm text-gray-600 mb-4">
            아래 다이어그램은 AI 시대의 주요 사회경제적 변화 요소들 간의 상호
            연관성을 보여줍니다. 개인 역량 강화에서 시작하여 새로운 공동체의
            필요성을 거쳐, 기존 사회 구조(가정, 도시, 국가)의 변화를 이끌고,
            궁극적으로 새로운 경제 질서(소유와 분배)의 수립으로 이어지는 과정을
            나타냅니다.
          </p>
          <div className="bg-gray-100 p-4 rounded-md shadow-inner overflow-hidden">
            <MermaidRenderer chartDefinition={mermaidChartString} />
          </div>
        </Section>

        {/* 4. 통합적 비전과 실행 과제 (기존 3) */}
        <Section title="4. 통합적 비전과 실행 과제">
          <SubSection
            title="사회-경제적 비전"
            items={[
              {
                bold: "안전하고 건강한 미래",
                text: "디지털 기술이 인간의 존엄성과 환경의 지속가능성을 높이는 방향",
              },
              {
                bold: "절제와 균형의 경제",
                text: "산업사회 욕망 중심 체제에서 절제와 균형의 경제로 전환",
              },
              {
                bold: "공정하고 포용적인 제도",
                text: "디지털 격차 해소와 모두를 위한 기술 혜택 보장",
              },
            ]}
            boldPoints={true}
          />
          <SubSection
            title="실행 과제"
            items={[
              {
                bold: "개인 차원",
                text: "디지털 리터러시 강화, 균형 있는 발전 지원",
              },
              {
                bold: "공동체 차원",
                text: "새로운 공동체 모델 개발, 디지털-아날로그 연계",
              },
              {
                bold: "도시 차원",
                text: "창조 플랫폼 도시 설계, 포용적 혁신 생태계 구축",
              },
              {
                bold: "국가 차원",
                text: "디지털 평화 체계 구축, 국가 역할 재정립",
              },
              {
                bold: "글로벌 차원",
                text: "다층적 거버넌스 개발, 디지털 인프라 공유 체계",
              },
              {
                bold: "경제 질서 차원",
                text: "균형 있는 소유권 모델 개발, 공정한 분배 시스템 구축",
              },
            ]}
            boldPoints={true}
          />
          <SubSection
            title="새로운 사회 계약을 향하여"
            items={[
              "디지털 시대에 맞는, 개인의 자율성과 공동체적 가치의 균형을 이루는 새로운 사회 계약의 필요성",
              "인간-AI 협력 시대의 사회 계약은 단순한 안전과 보호를 넘어, 창의성, 자율성, 그리고 지속가능성을 중심으로 재구성될 필요",
            ]}
          />
        </Section>

        {/* 5. 연구 추진 방향과 국제 협력 (기존 4) */}
        <Section title="5. 연구 추진 방향과 국제 협력">
          <SubSection
            title="연구 주제별 접근"
            items={[
              {
                bold: "A 영역(개인 역량 강화)",
                text: "유재연 연구원 주도, HCI 및 AI 윤리 전문가와 협력",
              },
              {
                bold: "B 영역(마켓과 소셜 임팩트)",
                text: "소셜 임팩트 측정 및 평가 전문가와 협력",
              },
              {
                bold: "C 영역(소유와 분배)",
                text: "노가빈 연구원 주도, 정치경제철학자 및 사회적 가치 연구 전문가와 협력",
              },
              {
                bold: "D & E 영역(도시, 국가, 글로벌)",
                text: "윤준영 연구원 주도, 브루스 카츠 등 도시-글로벌 거버넌스 전문가와 협력",
              },
            ]}
            boldPoints={true}
          />
          <SubSection
            title="국제 협력 방안"
            items={[
              "각 연구 영역별 글로벌 석학 초청 및 공동 연구",
              "정기적 국제 워크숍 및 포럼 개최",
              "글로벌 사례 조사 및 데이터 수집",
            ]}
          />
          <div className="mt-4 text-sm">
            이 프레임워크는 태재미래전략연구원의 비전과 연구팀의 전문성을
            바탕으로, 디지털 전환이 가져올 사회-경제적 변화를 통합적 관점에서
            연구하고 바람직한 미래를 설계하기 위한 체계적인 접근법을 제시합니다.
          </div>
        </Section>

        {/* 푸터 */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} 태재미래전략연구원 디지털 전환과 사회변혁
          팀
        </div>
      </div>
    </div>
  );
};

export default DigitalEconomyPage;
