import DigitalEconomyCharacteristics from "@/app/digital-economy/DigitalEconomyCharacteristics";
import ResearchStrategy from "@/app/digital-economy/ResearchStrategy";
import TransformationFramework from "@/app/digital-economy/TransformationFramework";
import MermaidRenderer from "@/components/MermaidRenderer";
import Section from "@/components/Section";

const DigitalEconomyPage = () => {
  const mermaidChartString = `graph LR
  ABCombined[디지털 시대 공동체 변화] --> D1;
  ABCombined --> D2;

  subgraph 경제 질서 변화
    D1[소유와 분배 질서];
    D2[도시 중심 무역 질서];
    D3[디지털 화폐 및 금융 시스템];
    D4[노동 시장 변화];
    D5[경제 규제 및 정책의 변화];
    D6[경제 주체 간의 관계 변화];

    D1 --> D3;
    D2 --> D3;
    D1 --> D4;
    D1 --> D5;
    D1 --> D6;
    D2 --> D6;
  end

  classDef highlight fill:#e6fffa,stroke:#00b5d8,stroke-width:2px,color:#007a7a;
  classDef greyNode fill:#cccccc,stroke:#666666,stroke-width:1px,color:#000000;
  class ABCombined,D1,D2 highlight;
  class D3,D4,D5,D6,D7 greyNode;
`;

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-900 tracking-tight">
            AI 시대의 새로운 경제 질서와 사회변혁 프레임워크
          </h1>
        </div>

        {/* 1. 디지털 경제의 특성 */}
        <DigitalEconomyCharacteristics />

        {/* 2. 변화의 흐름 */}
        <Section title="2. 디지털 시대 경제 질서 변화의 흐름">
          {" "}
          {/* Adjusted title numbering */}
          <p className="text-sm text-gray-600 mb-4">
            아래 다이어그램은 AI 시대의 주요 사회경제적 변화 요소들 간의 상호
            연관성을 보여줍니다. '디지털 시대 공동체 변화'가 어떻게 다양한 '경제
            질서 변화'의 양상들로 이어지는지, 그리고 이들이 순차적으로 영향을
            미치는 과정을 나타냅니다.
          </p>
          <p className="text-sm text-gray-600 mb-4">
            디지털 전환 시대에 건강하고 안전한 미래 사회를 구축하기 위해서는
            경제 패러다임의 근본적 변화에 대한 선제적 분석이 필수적입니다.
            그중에서도 '디지털 시대 공동체 변화'로부터 직접적으로 파생되는{" "}
            <strong>'소유와 분배 질서'(D1)</strong>와{" "}
            <strong>'도시 중심 무역 질서'(D2)</strong>의 재정립은 가장 먼저
            심층적으로 분석해야 할 핵심 과제입니다. '소유와 분배 질서'는 AI와
            데이터 기반 경제에서 가치 창출과 분배의 규칙을 새롭게 정의하며, 이는
            사회 전체의 공정성과 안정성에 직결됩니다. '도시 중심 무역 질서'는
            공동체 변화가 글로벌 경제 및 사회 구조에 미치는 영향을 파악하고,
            새로운 협력과 경쟁의 장을 이해하는 데 중요하며, 특히 우리 사회변혁
            팀의 관점에서 공동체의 진화가 거시적 사회경제 구조로 발현되는 양상을
            이해하는 데 핵심적입니다. 이 두 가지 핵심축에 대한 분석을 바탕으로,
            다음 순서로 제시되는 연구 영역들, 즉{" "}
            <strong>디지털 화폐 및 금융 시스템(D3)</strong>,{" "}
            <strong>노동 시장 변화(D4)</strong>,{" "}
            <strong>경제 규제 및 정책의 변화(D5)</strong>,{" "}
            <strong>사회적 안전망(D6)</strong>, 그리고{" "}
            <strong>경제 주체 간의 관계 변화(D7)</strong>에 대한 심도 있는
            연구를 통해 미래 사회의 청사진을 구체화해 나갈 수 있습니다. 이러한
            연계된 연구는 디지털 시대의 도전과 기회에 효과적으로 대응하는 데
            기여할 것입니다.
          </p>
          <div className="bg-gray-100 p-4 rounded-md shadow-inner overflow-hidden mb-6">
            <MermaidRenderer chartDefinition={mermaidChartString} />
          </div>
        </Section>

        {/* 3. 변화 프레임워크: AS-IS, TO-BE, TO-DO */}
        <TransformationFramework />

        {/* 4. 연구 주제 연구 전략 */}
        <ResearchStrategy />

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
