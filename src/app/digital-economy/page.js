import DigitalEconomyCharacteristics from "@/app/digital-economy/DigitalEconomyCharacteristics";
import MermaidRenderer from "@/components/MermaidRenderer";
import Section from "@/components/Section";

// Component for AS-IS, TO-BE, TO-DO sections
const TransformationSection = ({ title, content }) => (
  <div className="mb-6 p-4 rounded-lg shadow-md border-l-4 border-indigo-500 bg-white">
    <h3 className="text-xl font-bold mb-3 text-indigo-700">{title}</h3>
    <div className="space-y-2 text-sm text-gray-700">
      {content.map((item, index) => (
        <p key={index} className="leading-relaxed">
          {item}
        </p>
      ))}
    </div>
  </div>
);

// Helper to render list items
const renderListItems = (items) => {
  return items.map((item, index) => {
    if (typeof item === "string") {
      return <li key={index}>{item}</li>;
    } else if (typeof item === "object" && item.bold) {
      return (
        <li key={index}>
          <strong className="font-semibold">{item.bold}:</strong> {item.text}
        </li>
      );
    }
    return null;
  });
};

const DigitalEconomyPage = () => {
  const mermaidChartString = `graph LR
  A[개인 역량 강화와 격차 발생] --> B(공동체의 변화);
  B --> D1[소유질서의 재정립];
  B --> D2[분배 질서의 재정립];
  B --> D3[시장 질서의 재정립];
  D1 & D2 & D3 --> E(지속가능한 사회경제 시스템);

  classDef highlight fill:#e6fffa,stroke:#00b5d8,stroke-width:2px,color:#007a7a;
  class A,B,D1,D2,D3,E highlight;
`;

  const researchTopicsData = {
    personalEmpowerment: {
      title: "개인 역량의 강화와 새로운 계층 분화",
      items: [
        { bold: "현상", text: "AI 기술에 의한 개인 역량 강화와 생산성 향상" },
        { bold: "계층 분화", text: "" },
        "소득 증가 집단(10%): 기존 자본과 전문성 보유자",
        "비용 절감 집단(30~70%): 중간층",
        "기술 소외 집단: 디지털 접근성 및 활용 능력 취약 계층",
        {
          bold: "과제",
          text: "디지털 리터러시 강화, 균형 있는 발전 지원, 기술 접근성 보장",
        },
      ],
    },
    communityChange: {
      title: "공동체, 도시, 국가 역할의 재편",
      items: [
        { bold: "현상", text: "국가 주권의 변화, 도시 네트워크의 부상" },
        { bold: "가정의 변화", text: "" },
        "AI 기술 활용을 통한 가정 내 역할 변화",
        "원격 교육과 원격 근무로 인한 가정 공간의 재구성",
        "가족 구성원 간 디지털 격차와 새로운 소통 방식",
        { bold: "이웃과 지역 공동체", text: "" },
        "디지털 플랫폼을 통한 지역 공동체 연결 강화",
        "공유 경제와 지역 기반 협력 모델 확산",
        "온-오프라인 혼합형 커뮤니티 활성화",
        { bold: "도시의 새로운 역할", text: "" },
        "개인이 경제적 자율성을 추구하고 실현하는 공간",
        "창조 플랫폼으로서의 도시 개념 강화",
        "물리적 경계를 넘어선 도시 간 협력 네트워크",
        { bold: "국가 역할의 재정의", text: "" },
        "통제자에서 조정자, 촉진자로 전환",
        "디지털 평화 체계 구축",
        "국가 안보 개념의 확장(디지털, 환경, 보건 등 포괄)",
        { bold: "과제", text: "도시 간 협력 체계 구축, 디지털 공공재 확충" },
      ],
    },
    ownershipRestructuring: {
      title: "데이터 소유권과 블록체인 기술",
      items: [
        {
          bold: "현상",
          text: "디지털 자산의 소유권 문제와 중앙화된 데이터 통제",
        },
        { bold: "데이터 소유권의 재정립", text: "" },
        "개인 데이터에 대한 주권 강화",
        "데이터 생성자의 권리 인정과 보상 체계",
        "공공 데이터와 개인 데이터의 균형적 활용",
        { bold: "블록체인과 소유권", text: "" },
        "분산원장 기술을 통한 디지털 자산 소유권 증명",
        "스마트 계약을 통한 자동화된 권리 이전 및 실행",
        "탈중앙화된 소유권 등록 및 관리 시스템",
        { bold: "암호화폐와 경제 질서", text: "" },
        "국가 통화 시스템을 보완하는 대안적 가치 교환 수단",
        "국경을 초월한 가치 이전과 마이크로 트랜잭션 활성화",
        "토큰 이코노미를 통한 새로운 인센티브 구조 형성",
        {
          bold: "과제",
          text: "규제 프레임워크 개발, 에너지 효율성 향상, 사용자 친화적 인터페이스 구축",
        },
      ],
    },
    distributionRestructuring: {
      title: "소유와 분배 질서의 재정립",
      items: [
        { bold: "현상", text: "무형자산 가치 증대와 노동-소득 연결 약화" },
        { bold: "철학적 방향", text: "" },
        "모든 사람은 공동 자원과 부에 대한 권리를 가짐",
        "기본적 생활을 영위할 수 있는 권리 보장",
        "경제적 안전망이 있을 때 진정한 선택의 자유 가능",
        "부의 극단적 불평등 완화 필요",
        { bold: "새로운 분배 모델", text: "" },
        "기본소득과 데이터 배당 등 새로운 분배 메커니즘",
        "디지털 경제의 이익을 사회 전체가 공유하는 시스템",
        "노동과 소득의 연결을 넘어선 가치 분배 체계",
        {
          bold: "새로운 소유권 모델",
          text: "개인의 창의적 기여와 공공 이익의 균형 보장",
        },
        {
          bold: "분배 시스템",
          text: "디지털 경제 이익의 공정한 분배 메커니즘 개발",
        },
      ],
    },
    marketRestructuring: {
      title: "마켓의 가치 변화와 지속가능한 생태계",
      items: [
        { bold: "현상", text: "경제적 양극화 심화와 지속가능성 위기" },
        { bold: "변화 방향", text: "지속가능한 비즈니스 생태계 확산" },
        { bold: "새로운 시장 질서", text: "" },
        "플랫폼 경제의 공정성과 투명성 강화",
        "독점 방지와 건전한 경쟁 환경 조성",
        "사회적 가치와 경제적 가치의 통합",
        { bold: "특징", text: "" },
        "사회적 문제 해결과 경제적 이익 창출의 결합",
        "다양한 이해관계자 참여와 비즈니스 기반의 문제 해결",
        "지속가능한 가치 창출 메커니즘 구축",
        {
          bold: "전망",
          text: "경제적 가치와 사회적 가치의 통합, 공동체가 추구하는 가치의 변화",
        },
      ],
    },
    integratedVision: {
      // This is for the new Section 5
      socioEconomicVision: {
        title: "사회-경제적 비전",
        items: [
          {
            bold: "안전하고 건강한 미래",
            text: "디지털 기술이 인간의 존엄성과 환경의 지속가능성을 높이는 방향",
          },
          {
            bold: "절제와 균형의 경제",
            text: "산업사회 욕망 중심 체제에서 절제와 균형의 경제로 전환",
          },
          {
            bold: "공정하고 포용적인 제도",
            text: "디지털 격차 해소와 모두를 위한 기술 혜택 보장",
          },
        ],
      },
      executionTasks: {
        title: "실행 과제",
        items: [
          {
            bold: "개인 차원",
            text: "디지털 리터러시 강화, 균형 있는 발전 지원",
          },
          {
            bold: "공동체 차원",
            text: "새로운 공동체 모델 개발, 디지털-아날로그 연계",
          },
          {
            bold: "도시 차원",
            text: "창조 플랫폼 도시 설계, 포용적 혁신 생태계 구축",
          },
          {
            bold: "국가 차원",
            text: "디지털 평화 체계 구축, 국가 역할 재정립",
          },
          {
            bold: "글로벌 차원",
            text: "다층적 거버넌스 개발, 디지털 인프라 공유 체계",
          },
          {
            bold: "경제 질서 차원",
            text: "균형 있는 소유권 모델 개발, 공정한 분배 시스템 구축",
          },
        ],
      },
      newSocialContract: {
        title: "새로운 사회 계약을 향하여",
        items: [
          "디지털 시대에 맞는, 개인의 자율성과 공동체적 가치의 균형을 이루는 새로운 사회 계약의 필요성",
          "인간-AI 협력 시대의 사회 계약은 단순한 안전과 보호를 넘어, 창의성, 자율성, 그리고 지속가능성을 중심으로 재구성될 필요",
        ],
      },
    },
  };

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
        <Section title="1. 변화의 흐름">
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
        <Section title="2. 변화 프레임워크: AS-IS, TO-BE, TO-DO">
          {" "}
          {/* Adjusted title numbering */}
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-4">
              디지털 전환과 AI 시대의 사회경제적 변화를 체계적으로 이해하고
              대응하기 위한 프레임워크로, 현재 상태(AS-IS)와 지향하는
              미래(TO-BE), 그리고 이를 위한 구체적 실행 과제(TO-DO)를
              정리했습니다.
            </p>
          </div>
          <TransformationSection
            title="AS-IS: 현재 상태"
            content={[
              "개인 차원: AI 기술 접근성과 활용 능력의 격차가 심화되고 있으며, 일부 전문가와 자본 보유자 중심으로 혜택이 집중되는 불균형 발생",
              "경제 시스템: 무형자산 중심 경제로 급속히 전환되는 가운데, 노동과 소득의 연결이 약화되고 플랫폼 기업의 독점화 심화",
              "공동체와 제도: 기존 사회 안전망과 복지 제도가 새로운 경제 현실에 적응하지 못하고, 공동체 의식과 사회적 연대가 약화",
              "국가와 거버넌스: 국경을 초월한 디지털 경제 활동에 대한 규제와 조세 체계의 한계 노출, 국가 주권과 글로벌 협력 사이의 긴장 증가",
              "가치 체계: 경제적 효율성과 성장 중심의 가치관이 여전히 지배적이며, 사회적 가치와 지속가능성에 대한 고려 부족",
            ]}
          />
          <TransformationSection
            title="TO-BE: 지향하는 미래"
            content={[
              "개인 차원: 모든 사람이 AI 기술에 공평하게 접근하고 활용할 수 있으며, 개인의 자율성과 창의성이 극대화되는 사회",
              "경제 시스템: 절제와 균형에 기반한 경제 체제로, 무형자산의 가치가 공정하게 분배되고 지속가능한 가치 창출 메커니즘 확립",
              "공동체와 제도: 디지털 시대에 맞는 새로운 공동체 모델과 사회 안전망이 구축되어, 기술 발전의 혜택이 모두에게 돌아가는 포용적 사회",
              "국가와 거버넌스: 국가는 통제자에서 조정자, 촉진자로 역할이 전환되고, 도시 간 협력 네트워크와 글로벌 디지털 거버넌스 체계 확립",
              "가치 체계: 경제적 가치와 사회적 가치가 통합되고, 인간 존엄성, 환경 지속가능성, 공정성이 핵심 가치로 자리잡은 사회",
            ]}
          />
          <TransformationSection
            title="TO-DO: 실행 과제"
            content={[
              "디지털 리터러시 교육 확대: 모든 연령층과 계층을 대상으로 AI 활용 능력 향상 프로그램 개발 및 보급",
              "새로운 경제 모델 실험: 기본소득, 데이터 배당, 디지털 공유지 등 새로운 소유권 및 분배 모델의 시범 사업 추진",
              "도시 간 협력 네트워크 구축: 디지털 인프라 공유, 지식 교류, 공동 문제 해결을 위한 도시 간 협력 체계 마련",
              "디지털 평화 체계 수립: 데이터 주권, 알고리즘 투명성, 디지털 인권 보장을 위한 국제 규범 및 협약 개발",
              "통합적 가치 측정 체계 개발: GDP를 넘어 사회적 가치와 지속가능성을 포함한 새로운 발전 지표 개발 및 적용",
              "다층적 거버넌스 구축: 개인, 공동체, 도시, 국가, 글로벌 차원을 아우르는 중첩적이고 유연한 거버넌스 체계 설계",
            ]}
          />
        </Section>

        {/* 4. 연구 주제 연구 전략 */}
        <Section title="3. 연구 주제 연구 전략">
          {" "}
          {/* Adjusted title numbering */}
          {/* 4.1 개인 역량 강화와 격차 발생 */}
          <div className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
              4.1. 개인 역량 강화와 격차 발생
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              AI 시대의 전환은 개인 역량 강화에서 시작하여 공동체, 국가 역할의
              변화로 이어지며, 궁극적으로 소유와 분배 질서를 포함한 경제 질서의
              근본적 재편을 가져옵니다. 이러한 변화는 서로 연결되어 있으며, 각
              영역의 변화가 다른 영역에 영향을 미치는 복합적인 메커니즘을
              형성합니다.
            </p>
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2 text-gray-700">
                {researchTopicsData.personalEmpowerment.title}
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {renderListItems(researchTopicsData.personalEmpowerment.items)}
              </ul>
            </div>
          </div>
          {/* 4.2 공동체의 변화 */}
          <div className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
              4.2. 공동체의 변화 (가정, 이웃, 도시, 국가)
            </h3>
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2 text-gray-700">
                {researchTopicsData.communityChange.title}
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {renderListItems(researchTopicsData.communityChange.items)}
              </ul>
            </div>
          </div>
          {/* 4.3 소유질서의 재정립 */}
          <div className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
              4.3. 소유질서의 재정립 (데이터)
            </h3>
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2 text-gray-700">
                {researchTopicsData.ownershipRestructuring.title}
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {renderListItems(
                  researchTopicsData.ownershipRestructuring.items
                )}
              </ul>
            </div>
          </div>
          {/* 4.4 분배 질서의 재정립 */}
          <div className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
              4.4. 분배 질서의 재정립
            </h3>
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2 text-gray-700">
                {researchTopicsData.distributionRestructuring.title}
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {renderListItems(
                  researchTopicsData.distributionRestructuring.items
                )}
              </ul>
            </div>
          </div>
          {/* 4.5 시장 질서의 재정립 */}
          <div className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
              4.5. 시장 질서의 재정립
            </h3>
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2 text-gray-700">
                {researchTopicsData.marketRestructuring.title}
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {renderListItems(researchTopicsData.marketRestructuring.items)}
              </ul>
            </div>
          </div>
        </Section>

        {/* 5. 통합적 비전과 실행 과제 */}
        <Section title="4. 통합적 비전과 실행 과제">
          {" "}
          {/* Adjusted title numbering */}
          <div className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
              통합적 비전과 실행 과제
            </h3>
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2 text-gray-700">
                {researchTopicsData.integratedVision.socioEconomicVision.title}
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {renderListItems(
                  researchTopicsData.integratedVision.socioEconomicVision.items
                )}
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2 text-gray-700">
                {researchTopicsData.integratedVision.executionTasks.title}
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {renderListItems(
                  researchTopicsData.integratedVision.executionTasks.items
                )}
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2 text-gray-700">
                {researchTopicsData.integratedVision.newSocialContract.title}
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {renderListItems(
                  researchTopicsData.integratedVision.newSocialContract.items
                )}
              </ul>
            </div>
          </div>
        </Section>

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
