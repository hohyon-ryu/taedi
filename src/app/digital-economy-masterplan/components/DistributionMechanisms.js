// DistributionMechanisms.js
import MermaidRenderer from "@/components/MermaidRenderer";

const DistributionMechanisms = () => {
  const distributionMechanismsChart = `
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

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
        3. 분배: 공정하고 지속가능한 새로운 분배 체계
      </h2>

      <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <MermaidRenderer
          chartDefinition={distributionMechanismsChart}
          id="distribution-mechanisms"
        />
      </div>

      <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">
          기여 기반 분배의 새로운 패러다임
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          디지털 시대의 분배는 단순히 노동 시간이나 자본 투입량이 아닌, 실질적인
          가치 창출 기여도를 기준으로 이뤄져야 합니다. 데이터 제공, 창작 활동,
          공동체 참여, 사회적 가치 창출 등 다양한 형태의 기여를 정확히 측정하고
          공정하게 보상하는 시스템이 필요합니다.
        </p>
        <p className="text-gray-700 leading-relaxed">
          이는 지금까지 무료로 제공해온 우리의 데이터와 참여에 대한
          <span className="font-semibold text-gray-900">정당한 보상</span>을
          실현하는 경제 정의의 구현입니다.
        </p>
      </div>
    </section>
  );
};

export default DistributionMechanisms;
