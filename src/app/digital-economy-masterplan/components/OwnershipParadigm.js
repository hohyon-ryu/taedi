// OwnershipParadigm.js
import MermaidRenderer from "@/components/MermaidRenderer";

const OwnershipParadigm = () => {
  const ownershipParadigmChart = `
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

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
        2. 소유: 디지털 시대의 새로운 소유권 패러다임
      </h2>

      <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <MermaidRenderer
          chartDefinition={ownershipParadigmChart}
          id="ownership-paradigm"
        />
      </div>

      <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">
          소유권 개념의 근본적 변화
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          디지털 시대의 소유권은 전통적인 "한 사람이 하나의 물건을 소유"하는
          개념을 넘어섭니다. 예를 들어, 내가 고기집에서 5명이 모여 갈비를 시켜
          먹었다는 비자 카드의 결제 데이터는 생성과 동시에 나의 데이터이기도
          하지만 비자 카드의 데이터이기도 하고, 국세청의 데이터이기도 합니다.
        </p>
        <p className="text-gray-700 leading-relaxed">
          이러한{" "}
          <span className="font-semibold text-gray-900">다중 소유권</span>과
          <span className="font-semibold text-gray-900">동적 소유권</span>의
          개념이 새로운 경제 질서의 핵심이 됩니다.
        </p>
      </div>
    </section>
  );
};

export default OwnershipParadigm;
