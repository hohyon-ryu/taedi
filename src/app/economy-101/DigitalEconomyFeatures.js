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

  const aiEmpowermentEconomicOrderChanges = [
    {
      id: "individualEmpowermentEconomicOrder",
      title: "🤖 AI로 인한 개인의 강화와 경제 질서 변화",
      points: [
        {
          category: "연구 동향",
          detail:
            "AI 도구의 보편화로 개인의 생산성 및 창의성 극대화, 1인 기업 및 프리랜서 시장 확대, 맞춤형 경제 활동 증가.",
        },
        {
          category: "주요 연구자/기관",
          detail:
            "Paul Romer, Erik Brynjolfsson 등 생산성 및 기술 확산 연구자",
        },
        {
          category: "흐름",
          detail:
            "개인의 경제적 자율성 증대와 함께, 소득 불평등 심화 가능성에 대한 우려도 공존.",
        },
      ],
    },
    {
      id: "communityEconomicOrder",
      title: "🤝 개인 강화에 따른 공동체 경제 질서 변화",
      points: [
        {
          category: "연구 동향",
          detail:
            "DAO(탈중앙화 자율 조직), 플랫폼 협동조합 등 새로운 디지털 공동체 및 협업 모델 등장. P2P(Peer-to-Peer) 경제 활성화 및 로컬 경제 강화 가능성 탐색.",
        },
        {
          category: "주요 연구자/기관",
          detail:
            "Yochai Benkler - 네트워크 생산, Vili Lehdonvirta - 플랫폼 경제 연구자",
        },
        {
          category: "흐름",
          detail:
            "중앙화된 플랫폼의 대안으로 제시되나, 확장성 및 거버넌스 문제 해결 과제.",
        },
      ],
    },
    {
      id: "ownershipDistributionOrder",
      title: "⚖️ 소유권 및 분배 질서 변화",
      points: [
        {
          category: "연구 동향",
          detail:
            "데이터 소유권, AI 생성물의 지식재산권, AI의 경제적 기여분에 대한 분배 정의 논의 활발. 보편적 기본소득(UBI), 데이터 배당금 등 새로운 분배 모델 제안.",
        },
        {
          category: "주요 연구자/기관",
          detail:
            "Thomas Piketty - 불평등 연구, Joseph Stiglitz - 시장 실패 및 분배",
        },
        {
          category: "흐름",
          detail:
            "기술 발전의 혜택이 소수에게 집중되는 것을 방지하고, 사회적 포용성을 높이기 위한 제도적 고민 심화.",
        },
      ],
    },
    {
      id: "futureRoleOfState",
      title: "🏛️ 미래 국가 역할의 변화",
      points: [
        {
          category: "연구 동향",
          detail:
            "AI 시대의 사회 안전망 재구축(적응형 복지, 평생학습 지원), AI 윤리 기준 및 규제 프레임워크 수립, 공공 서비스의 AI 기반 혁신, 글로벌 AI 거버넌스에서의 주도권 확보 노력.",
        },
        {
          category: "주요 연구자/기관",
          detail:
            "Mariana Mazzucato - 혁신 국가론, Daron Acemoglu - 제도와 국가 발전",
        },
        {
          category: "흐름",
          detail:
            "기술 혁신을 저해하지 않으면서도 공정성과 안정성을 담보하는 국가의 '조정자' 및 '촉진자' 역할 강조.",
        },
      ],
    },
    {
      id: "aiDataHegemony",
      title: "🌐 AI 기술 및 데이터 패권 변화",
      points: [
        {
          category: "연구 동향",
          detail:
            "미-중 중심의 AI 기술 패권 경쟁 심화, 데이터 주권(Data Sovereignty) 및 데이터 국지화(Data Localization) 논의 확산. 개방형 AI 모델과 독점적 AI 모델 간의 경쟁 및 생태계 구축 전략.",
        },
        {
          category: "주요 연구자/기관",
          detail:
            "Ian Bremmer - 지정학적 위기, Shoshana Zuboff - 감시 자본주의 비판",
        },
        {
          category: "흐름",
          detail:
            "국가 안보 및 경제적 이익과 직결되면서, AI 기술 및 데이터 접근성에 대한 국제적 규범 형성 노력 병행.",
        },
      ],
    },
  ];

  const tfpExplanation = {
    title: "📈 총요소생산성 (Total Factor Productivity, TFP) 설명",
    formula: "Y = A ⋅ F(K, L)",
    formula_detail:
      "또는 TFP = Y / (K<sup>α</sup> ⋅ L<sup>(1-α)</sup>) (Cobb-Douglas 생산함수 가정 시)",
    components: [
      { term: "Y", description: "총생산량 (Total Output)" },
      {
        term: "A",
        description:
          "총요소생산성 (TFP) - 기술 수준, 효율성, 혁신 등을 포괄하는 요소",
      },
      {
        term: "F(K,L)",
        description: "생산함수 (Production Function, K와 L의 결합 방식)",
      },
      { term: "K", description: "자본 투입량 (Capital Input)" },
      { term: "L", description: "노동 투입량 (Labor Input)" },
      {
        term: "α (알파)",
        description: "자본소득분배율 (Output elasticity of capital, 0 < α < 1)",
      },
      {
        term: "1-α (또는 β)",
        description: "노동소득분배율 (Output elasticity of labor)",
      },
    ],
    explanationPoints: [
      "총요소생산성(TFP)은 노동(L)과 자본(K) 같은 전통적인 생산요소의 투입량 증가만으로는 설명되지 않는 생산량 증가분을 의미합니다. 즉, 생산 과정의 효율성 개선, 기술 진보, 경영 혁신, 제도적 발전 등 질적인 요소들의 기여를 나타냅니다.",
      "TFP는 경제 성장의 핵심 동력으로, TFP의 성장은 동일한 양의 노동과 자본으로 더 많은 산출물을 생산할 수 있게 함을 의미하며, 이는 곧 생활 수준 향상으로 이어집니다.",
      "측정 방법: 일반적으로 경제 전체의 생산량 증가율에서 각 생산요소(노동, 자본 등)의 투입량 증가율에 각 요소의 소득 분배율(또는 생산 탄력성)을 가중하여 합한 값을 제외한 나머지, 즉 '솔로우 잔차(Solow Residual)'로 측정됩니다.",
      "AI와 TFP: AI 기술은 자동화를 통한 노동 효율성 증대, 데이터 분석을 통한 자본 활용 최적화, 새로운 제품 및 서비스 개발, 혁신 프로세스 가속화 등을 통해 TFP를 크게 향상시킬 잠재력을 지닌 것으로 평가됩니다. AI가 단순한 생산요소 대체(automation)를 넘어 혁신을 촉진(innovation)할 때 TFP 증대 효과가 클 것으로 기대됩니다.",
      "생산성 역설(Productivity Paradox)과 J-커브 효과: 과거 IT 혁명 초기에도 생산성 증가 효과가 즉각적으로 나타나지 않았던 것처럼(솔로우의 생산성 역설), AI 도입 초기에도 단기적으로는 TFP 증가 효과가 미미하거나 오히려 감소할 수 있으나(구현 비용, 학습 곡선, 기존 시스템과의 통합 문제 등), 일정 시간이 지나 기술이 확산되고 보완적 혁신이 이루어지면 TFP가 급격히 상승하는 J-커브 효과가 나타날 수 있다는 연구가 있습니다 (Erik Brynjolfsson 등).",
    ],
  };

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
                  <h4 className="text-md font-semibold text-indigo-600 mb-1">
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

      <div className="bg-green-50 p-4 sm:p-6 rounded-lg shadow-md my-6">
        <h3 className="text-2xl font-bold text-green-800 mb-4 border-b border-green-200 pb-2">
          AI 기반 개인 역량 강화와 경제·사회 질서 변화 전망
        </h3>
        {aiEmpowermentEconomicOrderChanges.map((section) => (
          <div
            key={section.id}
            className="mb-6 bg-white p-4 rounded-md shadow-sm"
          >
            <h4 className="text-xl font-semibold text-green-700 mb-2">
              {section.title}
            </h4>
            <ul className="list-none pl-2 space-y-2 text-sm text-gray-700">
              {section.points.map((point, index) => (
                <li
                  key={index}
                  className="border-l-2 border-green-200 pl-3 py-1"
                >
                  <strong className="text-green-600">{point.category}:</strong>{" "}
                  {point.detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-sky-50 p-4 sm:p-6 rounded-lg shadow-md my-6">
        <h3 className="text-2xl font-bold text-sky-800 mb-4 border-b border-sky-200 pb-2">
          {tfpExplanation.title}
        </h3>
        <div className="bg-white p-4 rounded-md shadow-sm">
          <p className="text-lg font-mono text-center text-sky-700 bg-sky-100 p-3 rounded-md mb-4">
            {tfpExplanation.formula}
          </p>
          {tfpExplanation.formula_detail && (
            <p
              className="text-md font-mono text-center text-sky-600 bg-sky-100 p-2 rounded-md mb-4"
              dangerouslySetInnerHTML={{ __html: tfpExplanation.formula_detail }}
            />
          )}
          <div className="mb-4">
            <h4 className="text-md font-semibold text-sky-700 mt-2 mb-1">
              공식의 구성요소:
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              {tfpExplanation.components.map((component, index) => (
                <li key={index}>
                  <strong>{component.term}:</strong> {component.description}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold text-sky-700 mt-3 mb-1">
              상세 설명:
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              {tfpExplanation.explanationPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
