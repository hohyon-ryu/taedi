// /Users/will_ryu/workspace/hohyon-ryu/taedi/src/app/economy-101/DigitalEconomyFeatures.js
export default function DigitalEconomyFeatures() {
  const features = [
    {
      id: "intangibleAssets",
      title: "무형자산 중심",
      description: "지식, 데이터, 알고리즘 등 무형자산이 핵심 가치로 부상",
      scholars: [
        {
          name: "Carol Corrado",
          contribution:
            "무형자산이 경제 성장에 미치는 영향을 분석하며, 전통적인 GDP 측정 방식의 한계를 지적합니다.",
        },
        {
          name: "Erik Brynjolfsson",
          contribution:
            "IT와 무형자산이 생산성에 미치는 영향을 연구하며, 디지털 기술이 경제에 미치는 변화를 분석합니다.",
        },
        {
          name: "Jonathan Haskel & Stian Westlake",
          contribution:
            "『자본 없는 자본주의(Capitalism without Capital)』에서 무형자산이 현대 경제에서 어떻게 중심적인 역할을 하는지를 설명합니다.",
        },
      ],
      research: [
        "무형자산의 가치 평가: 무형자산의 경제적 가치를 측정하고 평가하는 방법에 대한 연구가 활발히 진행되고 있습니다.",
      ],
    },
    {
      id: "networkEffects",
      title: "네트워크 효과",
      description: "사용자가 증가할수록 서비스의 가치가 기하급수적으로 증가",
      scholars: [
        {
          name: "Jean Tirole",
          contribution:
            "양면 시장 이론을 통해 플랫폼 경제에서의 네트워크 효과를 분석합니다.",
        },
        {
          name: "Michael Mauboussin",
          contribution:
            "네트워크 효과와 규모의 경제가 기업 경쟁력에 미치는 영향을 설명합니다.",
        },
      ],
      research: [
        "네트워크 효과의 실증 분석: 플랫폼에서의 네트워크 효과를 정량적으로 분석하고, 그 경제적 영향을 평가하는 연구가 증가하고 있습니다.",
      ],
    },
    {
      id: "zeroMarginalCost",
      title: "한계비용 제로",
      description: "디지털 제품의 추가 생산 비용이 거의 들지 않음",
      scholars: [
        {
          name: "Jeremy Rifkin",
          contribution:
            "『한계비용 제로 사회(The Zero Marginal Cost Society)』에서 디지털 기술이 생산 비용을 어떻게 변화시키는지를 설명합니다.",
        },
        {
          name: "Erik Brynjolfsson",
          contribution:
            "디지털 상품의 특성과 경제적 함의를 분석하며, 무형자산의 중요성을 강조합니다.",
        },
      ],
      research: [
        "디지털 자산의 생산성 효과 측정: 디지털 자산이 생산성에 미치는 영향을 측정하기 위한 개념적 프레임워크가 개발되고 있습니다.",
      ],
    },
    {
      id: "twoSidedMarkets",
      title: "양면 시장",
      description:
        "서로 다른 두 집단(예: 사용자와 광고주)이 플랫폼을 통해 상호작용",
      scholars: [
        {
          name: "Jean Tirole & Jean-Charles Rochet",
          contribution:
            "양면 시장 이론을 통해 플랫폼이 어떻게 두 집단을 연결하고 가치를 창출하는지를 설명합니다.",
        },
        {
          name: "David S. Evans",
          contribution:
            "디지털 플랫폼의 경제학을 연구하며, 양면 시장 구조의 특징과 전략을 분석합니다.",
        },
      ],
      research: [],
    },
    {
      id: "winnerTakesAll",
      title: "승자독식 경향",
      description:
        "시장 선점자가 네트워크 효과로 인해 독점적 지위를 차지하기 쉬움",
      scholars: [
        {
          name: "Luis Suarez-Villa",
          contribution:
            "『테크노자본주의(Technocapitalism)』에서 기술 중심의 자본주의가 어떻게 시장을 재편하는지를 설명합니다.",
        },
        {
          name: "UNCTAD",
          contribution:
            "디지털 플랫폼 시장에서의 경쟁 회복 방안을 모색하며, 승자독식 구조의 문제점을 지적합니다.",
        },
      ],
      research: [],
    },
  ];

  const generalResearchTrends = [
    "무형자산의 가치 평가: 무형자산의 경제적 가치를 측정하고 평가하는 방법에 대한 연구가 활발히 진행되고 있습니다.",
    "네트워크 효과의 실증 분석: 플랫폼에서의 네트워크 효과를 정량적으로 분석하고, 그 경제적 영향을 평가하는 연구가 증가하고 있습니다.",
    "디지털 자산의 생산성 효과 측정: 디지털 자산이 생산성에 미치는 영향을 측정하기 위한 개념적 프레임워크가 개발되고 있습니다.",
  ];

  const aiImpacts = [
    {
      id: "aiIntelligence",
      title: "🧠 AI 지능화: 기술 발전과 경제적 영향",
      points: [
        {
          scholar: "Daron Acemoglu (MIT)",
          detail:
            "AI가 노동을 대체하는 방식이 경제 성장과 불평등에 미치는 영향을 분석합니다. 특히, AI가 고숙련 직무에 미치는 영향을 강조합니다.",
        },
        {
          scholar: "Anton Korinek (University of Virginia)",
          detail:
            "AI가 인간 노동을 대체하여 임금 하락과 불평등을 심화시킬 수 있는 시나리오를 제시합니다.",
        },
        {
          scholar: "OECD",
          detail:
            "AI를 새로운 범용 기술로 간주하며, 생산성 향상과 경제 성장에 미치는 잠재적 영향을 분석합니다.",
        },
      ],
    },
    {
      id: "inequalityDeepening",
      title: "⚖️ 불평등 심화: AI와 경제적 격차",
      points: [
        {
          scholar: "IMF",
          detail:
            "AI가 고소득 직무를 중심으로 영향을 미쳐 불평등을 완화할 수 있다는 주장과, 저소득층에 부정적 영향을 미쳐 불평등을 심화시킬 수 있다는 상반된 시각을 모두 소개합니다.",
        },
        {
          scholar: "Virginia Eubanks",
          detail:
            "『Automating Inequality』에서 AI 기반 시스템이 사회적 약자를 어떻게 차별하는지를 분석합니다.",
        },
        {
          scholar: "McKinsey 보고서",
          detail:
            "생성형 AI가 미국의 인종 간 부의 격차를 심화시킬 수 있음을 경고합니다.",
        },
      ],
    },
    {
      id: "jobMarketChanges",
      title: "👷 일자리 변화: AI와 노동 시장의 재편",
      points: [
        {
          scholar: "David Autor (MIT)",
          detail:
            "AI가 중간 숙련 직무를 대체하고, 고숙련 및 저숙련 직무로의 양극화를 초래할 수 있음을 연구합니다.",
        },
        {
          scholar: "NBER 연구",
          detail:
            "AI에 노출된 직무의 임금과 고용에 미치는 영향을 분석하며, AI가 노동 수요에 미치는 영향을 정량화합니다.",
        },
        {
          scholar: "Harvard Business Review",
          detail:
            "생성형 AI 도구가 온라인 노동 시장에 미치는 영향을 분석하며, 특정 직무의 수요 감소와 경쟁 심화를 지적합니다.",
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-indigo-50 p-4 sm:p-6 rounded-lg shadow-md my-6">
        <h3 className="text-2xl font-bold text-indigo-800 mb-4 border-b border-indigo-200 pb-2">
          디지털 경제의 핵심 특성 및 연구 동향
        </h3>
        {features.map((feature) => (
          <div
            key={feature.id}
            className="mb-4 bg-white p-3 rounded-md shadow-sm"
          >
            <div className="font-semibold text-lg text-indigo-700">
              <span>
                {feature.title}:{" "}
                <span className="font-normal text-gray-700 text-base">
                  {feature.description}
                </span>
              </span>
            </div>
            <div className="mt-3 pt-3 pl-4 border-l-2 border-indigo-100">
              {feature.scholars.length > 0 && (
                <div className="mb-3">
                  <h4 className="text-md font-semibold text-indigo-600 mt-2 mb-1">
                    주요 학자:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    {feature.scholars.map((scholar, index) => (
                      <li key={index}>
                        <strong>{scholar.name}:</strong> {scholar.contribution}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {feature.research.length > 0 && (
                <div>
                  <h4 className="text-md font-semibold text-indigo-600 mt-2 mb-1">
                    관련 연구 동향:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    {feature.research.map((trend, index) => (
                      <li key={index}>{trend}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}

        <div className="mt-6 bg-white p-3 rounded-md shadow-sm">
          <h4 className="text-md font-semibold text-indigo-700 mb-2">
            디지털 경제 전반의 최신 연구 동향:
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
            {generalResearchTrends.map((trend, index) => (
              <li key={index}>{trend}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-purple-50 p-4 sm:p-6 rounded-lg shadow-md my-6">
        <h3 className="text-2xl font-bold text-purple-800 mb-4 border-b border-purple-200 pb-2">
          AI 발전의 경제·사회적 영향 및 연구
        </h3>
        {aiImpacts.map((impact) => (
          <div
            key={impact.id}
            className="mb-4 bg-white p-3 rounded-md shadow-sm"
          >
            <div className="font-semibold text-lg text-purple-700">
              <span>{impact.title}</span>
            </div>
            <div className="mt-3 pt-3 pl-4 border-l-2 border-purple-100">
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                {impact.points.map((point, index) => (
                  <li key={index}>
                    <strong>{point.scholar}:</strong> {point.detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
