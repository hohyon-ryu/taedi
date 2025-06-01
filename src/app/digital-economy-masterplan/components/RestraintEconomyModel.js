// RestraintEconomyModel.js
import MermaidRenderer from "@/components/MermaidRenderer";

const RestraintEconomyModel = () => {
  const restraintEconomyModelChart = `
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
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
        4. 절제 경제: 지속가능한 미래를 위한 새로운 가치관
      </h2>

      <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <MermaidRenderer
          chartDefinition={restraintEconomyModelChart}
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
          근면, 절약, 협력이, 상업 시대에는 모험정신과 신용이 핵심 가치였습니다.
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
  );
};

export default RestraintEconomyModel;
