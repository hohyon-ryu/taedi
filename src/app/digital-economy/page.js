import DigitalEconomyCharacteristics from "@/app/digital-economy/DigitalEconomyCharacteristics";
import IntegratedVision from "@/app/digital-economy/IntegratedVision";
import ResearchStrategy from "@/app/digital-economy/ResearchStrategy";
import TransformationFramework from "@/app/digital-economy/TransformationFramework";
import MermaidRenderer from "@/components/MermaidRenderer";
import Section from "@/components/Section";

const DigitalEconomyPage = () => {
  const mermaidChartString = `graph LR
  A[개인 역량 강화와 격차 발생] --> B(공동체의 변화);
  B --> D1[소유질서의 재정립];
  B --> D2[분배 질서의 재정립];
  B --> D3[시장 질서의 재정립];
  D1 & D2 & D3 --> E(지속가능한 경제질서);

  classDef highlight fill:#e6fffa,stroke:#00b5d8,stroke-width:2px,color:#007a7a;
  class A,B,D1,D2,D3,E highlight;
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
            연관성을 보여줍니다. 개인 역량 강화에서 시작하여 공동체의 변화를
            거쳐, 소유질서, 분배 질서, 시장 질서의 재정립으로 이어지는 과정을
            나타냅니다.
          </p>
          <div className="bg-gray-100 p-4 rounded-md shadow-inner overflow-hidden mb-6">
            <MermaidRenderer chartDefinition={mermaidChartString} />
          </div>
        </Section>

        {/* 3. 변화 프레임워크: AS-IS, TO-BE, TO-DO */}
        <TransformationFramework />

        {/* 4. 연구 주제 연구 전략 */}
        <ResearchStrategy />

        {/* 5. 통합적 비전과 실행 과제 */}
        <IntegratedVision />

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
