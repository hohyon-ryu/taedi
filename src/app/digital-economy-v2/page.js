import {
  ComplexHierarchicalTree,
  DataBinding,
  DiagramComponent,
  DiagramContextMenu,
  DiagramToolTip,
  HierarchicalTree,
  Inject,
  LayoutAnimation,
  LineDistribution,
  MindMap,
  PrintAndExport,
  SnapConstraints,
  Snapping,
  UndoRedo,
} from "@syncfusion/ej2-react-diagrams";
import "@syncfusion/ej2-react-diagrams/styles/material.css"; // Using Material theme
import Image from "next/image";

// Helper function to create a node
const createNode = (
  id,
  content,
  offsetX,
  offsetY,
  shapeType = "Rectangle",
  fillColor = "#6495ED",
  textColor = "white",
  width = 200,
  height = 100
) => ({
  id,
  offsetX,
  offsetY,
  width,
  height,
  annotations: [{ content, style: { color: textColor, bold: true } }],
  shape: { type: shapeType, cornerRadius: 10 },
  style: { fill: fillColor, strokeColor: "none" },
});

// Helper function to create a connector
const createConnector = (id, sourceID, targetID, type = "Orthogonal") => ({
  id,
  sourceID,
  targetID,
  type,
  style: { strokeColor: "#4A5568", strokeWidth: 2 },
  targetDecorator: {
    shape: "Arrow",
    style: { fill: "#4A5568", strokeColor: "#4A5568" },
  },
});

export default function DigitalEconomyV2Page() {
  // Nodes for Section 1 Diagram
  const section1Nodes = [
    createNode(
      "goalMain",
      "연구 목표",
      400,
      100,
      "Rectangle",
      "#1E40AF",
      "white",
      300,
      120
    ),
    createNode(
      "obj1",
      "개인과 공동체 변화 심층 연구",
      200,
      280,
      "Rectangle",
      "#3B82F6",
      "white",
      220,
      130
    ),
    createNode(
      "obj2",
      "소유권 개념과 공정 경제 질서 탐구",
      400,
      280,
      "Rectangle",
      "#3B82F6",
      "white",
      220,
      130
    ),
    createNode(
      "obj3",
      "국가 역할 재편과 글로벌 거버넌스 모색",
      600,
      280,
      "Rectangle",
      "#3B82F6",
      "white",
      220,
      130
    ),
    createNode(
      "obj4",
      "지속가능한 인간 중심 디지털 경제 비전 제시",
      300,
      460,
      "Rectangle",
      "#3B82F6",
      "white",
      220,
      130
    ),
    createNode(
      "obj5",
      "디지털 기술 혜택의 공정 분배 방안 도출",
      500,
      460,
      "Rectangle",
      "#3B82F6",
      "white",
      220,
      130
    ),
  ];

  // Connectors for Section 1 Diagram
  const section1Connectors = [
    createConnector("conn1", "goalMain", "obj1"),
    createConnector("conn2", "goalMain", "obj2"),
    createConnector("conn3", "goalMain", "obj3"),
    createConnector("conn4", "goalMain", "obj4"),
    createConnector("conn5", "goalMain", "obj5"),
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white shadow-2xl rounded-xl overflow-hidden">
          <header className="p-8 bg-gradient-to-r from-blue-800 to-indigo-900 text-white text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              디지털 전환과 사회변혁: 새로운 경제 질서의 설계
            </h1>
            <p className="mt-3 text-xl sm:text-2xl text-blue-200 font-medium">
              태재미래전략연구원 디지털 전환과 사회변혁 팀 연구 포스터
            </p>
          </header>

          <div className="p-6 sm:p-10">
            {/* Section 1: 연구 목표 - Diagram */}
            <section className="mb-16 relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 border-b-4 border-blue-600 pb-3 mb-8 text-center">
                1. 연구 목표
              </h2>
              <div className="relative h-[650px] rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white">
                <Image
                  src="/static/images/posters/digital_economy/section1.png"
                  alt="연구 목표 배경 이미지"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-20"
                />
                <DiagramComponent
                  id="section1_diagram"
                  width="100%"
                  height="100%"
                  nodes={section1Nodes}
                  connectors={section1Connectors}
                  snapSettings={{ constraints: SnapConstraints.None }} // Disable snapping for manual positioning
                  backgroundColor="transparent"
                >
                  <Inject
                    services={[
                      HierarchicalTree,
                      DataBinding,
                      MindMap,
                      ComplexHierarchicalTree,
                      DiagramContextMenu,
                      UndoRedo,
                      PrintAndExport,
                      DiagramToolTip,
                      LineDistribution,
                      LayoutAnimation,
                      Snapping,
                    ]}
                  />
                </DiagramComponent>
              </div>
              <p className="mt-6 text-center text-lg text-gray-700 bg-gray-50 p-4 rounded-md shadow">
                본 연구는 단순한 기술적 변화 분석을 넘어, 인류 문명의 근본적
                전환기에서 경제, 사회, 정치 질서의 새로운 형태를 설계하는 것을
                목표로 합니다. 특히 산업사회에서 형성된 '욕망 중심' 경제
                시스템을 '절제와 균형' 중심의 지속가능한 경제 질서로 전환하는
                방향성을 모색합니다.
              </p>
            </section>

            {/* Section 2: 연구의 필요성 - Simplified */}
            <section className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 border-b-4 border-blue-600 pb-3 mb-8 text-center">
                2. 연구의 필요성
              </h2>
              <div className="flex justify-center items-center p-6 bg-gray-50 rounded-lg shadow-md">
                <Image
                  src="/static/images/posters/digital_economy/section2.png"
                  alt="연구의 필요성 이미지"
                  width={500} // Adjusted for better presentation
                  height={750} // Adjusted for better presentation
                  className="rounded-lg shadow-xl object-contain" // Changed to object-contain
                />
              </div>
              <p className="mt-6 text-center text-lg text-gray-700 bg-gray-50 p-4 rounded-md shadow">
                인류는 문명사적 갈림길에 서 있으며, 기존 경제 질서의 한계와
                디지털 전환의 특수성을 이해하고, '절제와 균형'의 새로운
                가치관으로 전환하기 위한 통합적 연구가 필요합니다.
              </p>
            </section>

            {/* Section 3: 지능화 경제 시대의 특성과 AS-IS, TO-BE, TO-DO - Simplified */}
            <section className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 border-b-4 border-blue-600 pb-3 mb-8 text-center">
                3. 지능화 경제 시대의 특성과 AS-IS, TO-BE, TO-DO
              </h2>
              <div className="flex justify-center items-center p-6 bg-gray-50 rounded-lg shadow-md">
                <Image
                  src="/static/images/posters/digital_economy/section3.png"
                  alt="지능화 경제 시대 이미지"
                  width={500} // Adjusted
                  height={1000} // Adjusted
                  className="rounded-lg shadow-xl object-contain" // Changed to object-contain
                />
              </div>
              <p className="mt-6 text-center text-lg text-gray-700 bg-gray-50 p-4 rounded-md shadow">
                디지털 지능화 시대는 무형자산 중심, 한계비용 제로, 네트워크 효과
                등의 특성을 가지며, 개인, 공동체, 국가, 경제 질서 전반에 걸쳐
                현재(AS-IS)의 문제점을 진단하고, 바람직한 미래(TO-BE)를
                설정하며, 이를 달성하기 위한 구체적인 실행 과제(TO-DO)를
                도출합니다.
              </p>
            </section>

            {/* Section 4: 연구 주제와 뒷받침하는 경제적 이론 - Simplified */}
            <section className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 border-b-4 border-blue-600 pb-3 mb-8 text-center">
                4. 연구 주제와 뒷받침하는 경제적 이론
              </h2>
              <div className="flex justify-center items-center p-6 bg-gray-50 rounded-lg shadow-md">
                <Image
                  src="/static/images/posters/digital_economy/section4.png"
                  alt="연구 주제 이미지"
                  width={700} // Adjusted
                  height={450} // Adjusted
                  className="rounded-lg shadow-xl object-contain" // Changed to object-contain
                />
              </div>
              <p className="mt-6 text-center text-lg text-gray-700 bg-gray-50 p-4 rounded-md shadow">
                본 연구는 디지털 역량 강화, 소유권 재정립, 국가 역할 재편,
                통합적 경제 패러다임 구축을 주요 주제로 하며, 행동경제학,
                정보경제학, 공공선택이론, 제도변화 이론 등 다양한 경제 이론을
                바탕으로 합니다.
              </p>
            </section>

            {/* Section 5: 각 연구 주제에서의 세부 연구와 관련 학자들과 공동 연구 계획 - Simplified */}
            <section>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 border-b-4 border-blue-600 pb-3 mb-8 text-center">
                5. 각 연구 주제에서의 세부 연구와 공동 연구 계획
              </h2>
              <div className="flex justify-center items-center p-6 bg-gray-50 rounded-lg shadow-md">
                {/* Placeholder for potential future diagram or composite image */}
                <Image
                  src="/static/images/posters/digital_economy/section5.png" // Assuming a general image for this section for now
                  alt="세부 연구 및 공동 연구 계획 이미지"
                  width={700} // Adjusted
                  height={500} // Adjusted
                  className="rounded-lg shadow-xl object-contain"
                />
              </div>
              <p className="mt-6 text-center text-lg text-gray-700 bg-gray-50 p-4 rounded-md shadow">
                각 연구 주제별로 세부 과제를 설정하고, 국내외 유수 학자들과의
                공동 연구를 통해 심도 있는 분석과 실질적인 정책 제안을
                도출하고자 합니다. (예: Allison Woodruff, John Zimmerman 등)
              </p>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
