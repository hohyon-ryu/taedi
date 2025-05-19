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
    D3[디지털 화폐 및 
    금융 시스템 변화];
    D4[노동 시장 변화];
    D5[경제 규제 및 정책의 변화];
    D6[경제 주체 간의 관계 변화];

    D1 --> D6;
    D2 --> D6;
    D6 --> D3;
    D6 --> D4;
    D6 --> D5
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
