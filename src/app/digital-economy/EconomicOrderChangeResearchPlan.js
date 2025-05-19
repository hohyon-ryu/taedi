import MermaidRenderer from "@/components/MermaidRenderer";
import Section from "@/components/Section";

const EconomicOrderChangeResearchPlan = () => {
  const mermaidChartString = `graph LR
  ABCombined[🫂 디지털 시대 공동체 변화] --> D1;
  ABCombined --> D2;

  subgraph 경제 질서 변화
    D1[🤲 소유와 분배 질서];
    D2[🏙️ 도시 중심 무역 질서];
    D3[🏦 디지털 화폐 및 
    금융 시스템 변화];
    D4[🧑‍💻 노동 시장 변화];
    D5[📜 경제 규제 및 정책의 변화];
    D6[🔗 경제 주체 간의 관계 변화];

    D1 --> D6;
    D2 --> D6;
    D6 --> D3;
    D6 --> D4;
    D6 --> D5
  end

  classDef highlight fill:#e6fffa,stroke:#00b5d8,stroke-width:2px,color:#007a7a;
  classDef greyNode fill:#f0f0f0,stroke:#333333,stroke-width:1px,color:#000000; 
  class ABCombined,D1,D2 highlight;
  class D3,D4,D5,D6,D7 greyNode;
`;

  return (
    <Section title="2. 디지털 시대 경제 질서 변화의 연구 계획">
      <div className="bg-gray-50 p-2 rounded-sm overflow-hidden mb-4">
        <MermaidRenderer chartDefinition={mermaidChartString} />
      </div>
    </Section>
  );
};

export default EconomicOrderChangeResearchPlan;
