export const theories = [
  {
    id: "neosynthesis",
    name: "신고전주의 종합 (Neoclassical Synthesis)",
    period: "1950 ~ 1970년",
    era: "행동·신종합·신케인즈 세대",
    status: "20세기 중후반 주류 통합 시도",
    scholars: [
      {
        nameKr: "폴 새뮤얼슨",
        nameEn: "Paul Samuelson",
        achievements: "『경제학』, 경제학 대중화",
        nobelPrize: 1970,
      },
      {
        nameKr: "존 힉스",
        nameEn: "John Hicks",
        achievements: "IS-LM 모형 개발",
        nobelPrize: 1972,
        image: "/static/images/scholars/john_hicks.jpg",
      },
      {
        nameKr: "프랑코 모딜리아니",
        nameEn: "Franco Modigliani",
        achievements: "소비이론, 필립스 곡선",
        nobelPrize: 1985,
      },
      {
        nameKr: "제임스 토빈",
        nameEn: "James Tobin",
        achievements: "금융시장 분석, 포트폴리오 이론",
        nobelPrize: 1981,
      },
      {
        nameKr: "로버트 솔로우",
        nameEn: "Robert Solow",
        achievements: "경제 성장 이론",
        nobelPrize: 1987,
      },
    ],
    keyConcepts: [
      {
        name: "IS-LM 모형",
        description:
          "생산물 시장(IS)과 화폐 시장(LM)의 동시 균형을 분석하는 거시경제 모형",
      },
      {
        name: "필립스 곡선",
        description: "실업률과 인플레이션 간의 단기적 역관계를 나타내는 곡선",
      },
      {
        name: "경제 성장 이론 (솔로우 모형)",
        description:
          "기술 진보, 자본 축적, 노동력 증가 등이 경제 성장에 미치는 영향을 분석하는 이론",
      },
    ],
    summary:
      "제2차 세계대전 이후 케인즈주의가 거시경제 분석의 주류로 자리 잡으면서, 이를 신고전학파의 미시경제학적 원리와 통합하려는 시도였습니다. 즉, 단기적으로는 케인즈의 주장처럼 가격 경직성 등으로 인해 시장이 불완전하여 정부 개입이 유효할 수 있지만, 장기적으로는 신고전학파의 주장처럼 시장이 균형을 찾아간다고 보았습니다. 폴 새뮤얼슨은 그의 저서 『경제학』을 통해 이러한 종합을 대중화했으며, 존 힉스가 개발한 IS-LM 모형은 신고전파 종합의 핵심 분석 도구가 되었습니다. 로버트 솔로우는 경제 성장의 요인을 분석하는 신고전파 성장 모형을 제시하여 노벨 경제학상을 수상했습니다. 이 시기 경제학 교과서의 주류를 이루었으나, 1970년대 스태그플레이션 현상을 제대로 설명하지 못하면서 통화주의와 새고전학파의 도전을 받게 됩니다.",
    quote:
      "케인즈의 거시경제 이론과 신고전학파의 미시경제 원리를 하나로! 단기에는 정부가 경제를 조율할 수 있지만, 장기에는 시장이 제 갈 길을 간다. 이것이 경제학의 새로운 표준이다.",
    diagramClass: "neoclassical",
    emergenceContext:
      "제2차 세계대전 이후 케인즈주의가 거시경제 분석의 주류로 부상하자, 이를 전통적인 신고전학파의 미시경제학적 원리와 통합하려는 학문적 시도였습니다. 단기적으로는 케인즈적 분석을, 장기적으로는 신고전학파적 균형을 상정하여 경제 현상을 설명하고자 했습니다.",
  },
  {
    id: "behavioral",
    name: "행동경제학",
    period: "1979 ~ 현재",
    era: "행동·신종합·신케인즈 세대",
    status: "현대 주요 흐름 (새로운 시도)",
    scholars: [
      {
        nameKr: "대니얼 카너먼",
        nameEn: "Daniel Kahneman",
        achievements: "전망이론, 제한된 합리성",
        nobelPrize: 2002,
        image: "/static/images/scholars/daniel_kahneman.jpg",
      },
      {
        nameKr: "아모스 트버스키",
        nameEn: "Amos Tversky",
        achievements: "전망이론 공동 개발",
        image: "/static/images/scholars/amos_tversky.jpg",
      },
      {
        nameKr: "리처드 탈러",
        nameEn: "Richard Thaler",
        achievements: "넛지, 행동경제학 확장",
        nobelPrize: 2017,
        image: "/static/images/scholars/richard_thaler.jpg",
      },
    ],
    keyConcepts: [
      {
        name: "제한된 합리성",
        description:
          "인간의 의사결정이 정보 부족, 인지 능력 한계 등으로 인해 완전히 합리적이지 못하다는 개념",
      },
      {
        name: "전망이론",
        description:
          "불확실한 상황에서 사람들이 이익보다 손실에 더 민감하게 반응하며 의사결정한다는 이론",
      },
      {
        name: "프레이밍 효과",
        description:
          "동일한 문제라도 제시되는 방식(프레임)에 따라 사람들의 선택이 달라지는 현상",
      },
      {
        name: "손실 회피",
        description:
          "같은 크기의 이익에서 얻는 만족감보다 손실에서 느끼는 고통을 더 크게 평가하는 경향",
      },
      {
        name: "넛지",
        description:
          "강압 없이 부드러운 개입으로 사람들이 더 좋은 선택을 하도록 유도하는 방법",
      },
    ],
    summary:
      "전통 경제학(특히 신고전학파)의 '완전 합리적인 인간(호모 이코노미쿠스)' 가정을 비판하고, 심리학적 연구 성과를 경제학에 접목하여 인간의 실제 의사결정 과정을 분석합니다. 대니얼 카너먼과 아모스 트버스키는 불확실성 하에서의 인간 판단이 체계적으로 편향될 수 있음을 보였고, 이익보다 손실에 더 민감하게 반응하는 경향 등을 설명하는 전망이론을 제시했습니다 (카너먼은 이 공로로 노벨 경제학상 수상). 리처드 탈러는 제한된 합리성, 자기 통제 부족, 사회적 선호 등 인간의 심리적 특성이 경제 행동에 미치는 영향을 연구하고, 이를 바탕으로 사람들이 더 나은 선택을 하도록 유도하는 '넛지' 개념을 제시했습니다 (탈러도 노벨 경제학상 수상). 행동경제학은 금융, 마케팅, 공공정책 등 다양한 분야에 응용되고 있습니다.",
    quote:
      "인간은 항상 합리적이지 않다! 감정과 편향에 휘둘리며 때로는 비합리적인 선택을 한다. 이러한 인간의 실제 모습을 이해해야 경제 현상을 제대로 설명하고 더 나은 정책을 만들 수 있다.",
    diagramClass: "behavioral",
    emergenceContext:
      "전통 경제학의 '완전 합리적인 인간' 가정이 현실의 복잡한 인간 행동을 설명하는 데 한계가 있다는 인식이 확산되었습니다. 심리학의 연구 성과를 경제학에 접목하여, 인간의 인지적 편향과 비합리적 선택이 시장에 미치는 영향을 분석하려는 새로운 접근법으로 주목받았습니다.",
  },
  {
    id: "newkeynesian",
    name: "신케인즈주의 (새케인즈학파)",
    period: "1980 ~ 현재",
    era: "행동·신종합·신케인즈 세대",
    status: "현대 거시경제 주류",
    scholars: [
      {
        nameKr: "조지프 스티글리츠",
        nameEn: "Joseph Stiglitz",
        achievements: "정보 비대칭, 시장 실패",
        nobelPrize: 2001,
        image: "/static/images/scholars/joseph_stiglitz.jpg",
      },
      {
        nameKr: "폴 크루그먼",
        nameEn: "Paul Krugman",
        achievements: "국제무역, 경제지리학",
        nobelPrize: 2008,
        image: "/static/images/scholars/paul_krugman.jpg",
      },
      {
        nameKr: "그레고리 맨큐",
        nameEn: "Gregory Mankiw",
        achievements: "가격 경직성, 효율성 임금",
      },
      {
        nameKr: "재닛 옐런",
        nameEn: "Janet Yellen",
        achievements: "노동시장 분석, 거시경제 정책",
      },
    ],
    keyConcepts: [
      {
        name: "미시적 기초",
        description:
          "거시경제 현상을 개인과 기업의 합리적 선택과 최적화 행동으로 설명하려는 접근",
      },
      {
        name: "가격 경직성 (메뉴 비용)",
        description:
          "가격을 변경하는 데 비용이 들어 가격이 즉각적으로 조정되지 않는 현상",
      },
      {
        name: "임금 경직성",
        description: "임금이 시장 상황 변화에 따라 신속하게 조정되지 않는 현상",
      },
      {
        name: "정보 비대칭",
        description: "거래 당사자 간에 정보가 불균등하게 분포된 상황",
      },
      {
        name: "시장 실패",
        description: "시장이 자원을 효율적으로 배분하지 못하는 상황",
      },
    ],
    summary:
      "케인즈주의의 핵심 주장인 '시장의 불완전성과 정부 개입의 필요성'을 신고전학파적인 미시경제학적 분석틀(합리적 선택, 최적화) 위에서 설명하려는 시도입니다. 이들은 시카고학파 등의 새고전학파가 주장하는 '완벽한 시장' 가정을 비판하며, 현실에서는 가격이나 임금이 즉각적으로 조정되지 않는 경직성(예: 메뉴 비용, 효율성 임금)이 존재하고, 정보가 모든 경제 주체에게 대칭적으로 주어지지 않는 정보 비대칭 문제 등으로 인해 시장이 실패할 수 있다고 봅니다. 조지프 스티글리츠는 정보 비대칭이 시장에 미치는 영향을 심층 분석하여 노벨 경제학상을 수상했습니다. 폴 크루그먼은 국제무역과 경제지리학 분야에서 규모의 경제와 불완전 경쟁을 분석하여 노벨 경제학상을 수상했으며, 거시경제 정책에 대해서도 활발히 발언합니다. 신케인즈주의는 현대 거시경제학의 주요 흐름 중 하나로, 경기 안정화를 위한 정부의 역할을 여전히 중요하게 생각합니다.",
    quote:
      "시장은 완벽하지 않다! 가격과 임금은 생각보다 뻣뻣하고(경직적), 정보는 모두에게 공평하게 주어지지 않는다. 따라서 시장은 때때로 실패하며, 정부의 현명한 개입이 필요할 수 있다.",
    diagramClass: "keynesian",
    emergenceContext:
      "1970년대 스태그플레이션과 새고전학파의 비판에 직면하여, 케인즈주의의 핵심 아이디어(시장 불완전성, 정부 개입 필요성)를 미시경제학적 기초 위에 재정립하려는 노력이었습니다. 가격 경직성, 정보 비대칭 등 시장의 불완전성을 합리적 기대 가설과 결합하여 설명하고자 했습니다.",
    realWorldApplication: {
      title: "글로벌 금융위기 대응과 양적완화",
      story:
        "2008년 글로벌 금융위기 발생 시, 벤 버냉키 당시 연준 의장은 대공황 연구를 바탕으로 적극적인 통화정책을 펼쳤습니다. 그는 전통적인 금리 인하 정책을 넘어 대규모 자산 매입을 통한 양적완화(QE)를 단행하여 시장에 유동성을 공급하고 금융 시스템 붕괴를 막는 데 기여했습니다. 이러한 정책은 신케인즈주의적 아이디어에 기반하여 위기 상황에서 중앙은행의 적극적인 역할을 강조한 사례로 평가받습니다.",
      figures: [
        {
          nameKr: "벤 버냉키",
          nameEn: "Ben Bernanke",
          role: "미국 연방준비제도 의장",
        },
      ],
    },
  },
];
