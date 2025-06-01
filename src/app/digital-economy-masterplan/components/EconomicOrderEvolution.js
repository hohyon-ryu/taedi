// EconomicOrderEvolution.js
import MermaidRenderer from "@/components/MermaidRenderer";

const EconomicOrderEvolution = () => {
  const economicOrderEvolutionChart = `
graph TB
    subgraph "현재: 산업사회 경제 질서"
        A1["대량생산-대량소비"]
        A2["기업-국가 중심"]
        A3["경쟁과 성장 추구"]
        A4["자원 집약적"]
    end
    
    subgraph "전환기: 디지털 혼재 경제"
        B1["플랫폼 경제 확산"]
        B2["개인 역량 강화"]
        B3["데이터 가치 부상"]
        B4["자동화 가속화"]
    end
    
    subgraph "미래: 디지털 절제 경제"
        C1["맞춤형 생산-적정 소비"]
        C2["개인-공동체 중심"]
        C3["협력과 지속가능성"]
        C4["지능 집약적"]
    end
    
    A1 --> B1
    A2 --> B2
    A3 --> B3
    A4 --> B4
    
    B1 --> C1
    B2 --> C2
    B3 --> C3
    B4 --> C4
    
    classDef current fill:#f8f9fa,stroke:#6c757d,stroke-width:1px
    classDef transition fill:#f1f3f4,stroke:#495057,stroke-width:1px
    classDef future fill:#ffffff,stroke:#212529,stroke-width:2px
    
    class A1,A2,A3,A4 current
    class B1,B2,B3,B4 transition
    class C1,C2,C3,C4 future
  `;

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
        경제 질서의 패러다임 전환
      </h2>

      <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <MermaidRenderer
          chartDefinition={economicOrderEvolutionChart}
          id="economic-order-evolution"
        />
      </div>

      <div className="p-6 bg-gray-50 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          문명의 전환: 비만에서 건강으로
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          산업사회는 인류 역사상 처음으로 절대 빈곤을 극복한 위대한 성취를
          이뤘습니다. 하지만 이는 마치 평생 굶주렸던 사람이 갑자기 무한정의
          음식을 얻게 된 것과 같습니다. 처음엔 닥치는 대로 먹지만, 결국 비만과
          성인병으로 고통받게 되죠.
        </p>
        <p className="text-gray-700 leading-relaxed">
          지금 인류도 같은 상황입니다. 무한 성장과 탐욕이 기후위기, 극심한
          양극화, 자원고갈이라는 '문명의 성인병'을 만들었습니다. 이제 미래
          경제질서의 질문은
          <span className="font-semibold text-gray-900">
            "어떻게 더 많이 가질까"에서 "어떻게 절제하며 지속가능하게 살 것인가"
          </span>
          로 바뀌어야 합니다.
        </p>
      </div>
    </section>
  );
};

export default EconomicOrderEvolution;
