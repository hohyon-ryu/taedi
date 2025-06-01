// NewEconomicActors.js
import MermaidRenderer from "@/components/MermaidRenderer";

const NewEconomicActors = () => {
  const newEconomicActorsChart = `
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

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
        1. 생산: 새로운 경제 주체의 등장
      </h2>

      <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <MermaidRenderer
          chartDefinition={newEconomicActorsChart}
          id="new-economic-actors"
        />
      </div>
    </section>
  );
};

export default NewEconomicActors;
