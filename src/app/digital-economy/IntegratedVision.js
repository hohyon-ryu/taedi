import Section from "@/components/Section";

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

const integratedVisionData = {
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
};

const IntegratedVision = () => {
  return (
    <Section title="5. 통합적 비전과 실행 과제">
      <div className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
          통합적 비전과 실행 과제
        </h3>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-gray-700">
            {integratedVisionData.socioEconomicVision.title}
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {renderListItems(integratedVisionData.socioEconomicVision.items)}
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-gray-700">
            {integratedVisionData.executionTasks.title}
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {renderListItems(integratedVisionData.executionTasks.items)}
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-gray-700">
            {integratedVisionData.newSocialContract.title}
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {renderListItems(integratedVisionData.newSocialContract.items)}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default IntegratedVision;
