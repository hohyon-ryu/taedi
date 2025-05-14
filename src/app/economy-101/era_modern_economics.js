export const theories = [
  {
    id: "gametheory",
    name: "게임이론",
    period: "1950 ~ 현재",
    era: "현대 경제학",
    status: "현대 분석 도구 (응용 분야 다양)",
    scholars: [
      {
        nameKr: "존 폰 노이만",
        nameEn: "John von Neumann",
        achievements: "게임이론 창시, 수학적 분석",
      },
      {
        nameKr: "오스카 모르겐슈테른",
        nameEn: "Oskar Morgenstern",
        achievements: "『게임이론과 경제행동』 공동 저술",
      },
      {
        nameKr: "존 내쉬",
        nameEn: "John Nash",
        achievements: "내쉬 균형, 전략적 상호작용",
        nobelPrize: 1994,
        image: "/static/images/scholars/john_nash.jpg",
      },
      {
        nameKr: "토마스 셸링",
        nameEn: "Thomas Schelling",
        achievements: "갈등과 협상 분석",
        nobelPrize: 2005,
        image: "/static/images/scholars/thomas_schelling.png",
      },
      {
        nameKr: "라인하르트 젤텐",
        nameEn: "Reinhard Selten",
        achievements: "반복 게임, 제한된 합리성",
        nobelPrize: 1994,
      },
    ],
    keyConcepts: [
      {
        name: "전략적 상호작용",
        description:
          "한 행위자의 결정이 다른 행위자의 결정에 영향을 미치는 상황",
      },
      {
        name: "내쉬 균형",
        description:
          "모든 행위자가 상대방의 전략에 대해 최선의 전략을 선택하여 더 이상 전략을 바꿀 유인이 없는 상태",
      },
      {
        name: "죄수의 딜레마",
        description:
          "개인의 합리적 선택이 집단 전체에는 비합리적인 결과를 초래하는 상황",
      },
      { name: "반복 게임", description: "동일한 게임이 여러 번 반복되는 상황" },
      {
        name: "정보의 역할",
        description: "게임 상황에서 정보가 행위자의 전략과 결과에 미치는 영향",
      },
    ],
    summary:
      "여러 경제 주체(플레이어)들의 전략적 상호작용 상황을 수학적으로 분석하는 이론입니다. 즉, 한 주체의 의사결정이 다른 주체의 의사결정에 영향을 미치고, 그 반대도 성립하는 상황을 다룹니다. 존 폰 노이만과 오스카 모르겐슈테른의 『게임이론과 경제행동』이 그 시초로 평가받습니다. 존 내쉬는 상대방의 전략을 주어진 것으로 보고 자신의 최적 전략을 선택할 때 모든 참여자가 더 이상 전략을 바꿀 유인이 없는 상태인 '내쉬 균형' 개념을 정립하여 노벨 경제학상을 수상했습니다. 토마스 셸링은 갈등과 협상, 위협과 약속 등 전략적 행동을 분석하여 노벨 경제학상을 수상했습니다. 게임이론은 과점 시장 분석, 경매 이론, 국제 협상, 정치학 등 경제학뿐만 아니라 다양한 사회과학 분야에 광범위하게 응용되고 있습니다.",
    quote:
      "나의 선택이 너의 결과에, 너의 선택이 나의 결과에 영향을 미친다! 이 복잡한 상호작용 속에서 최적의 전략은 무엇일까? 이것이 바로 게임의 핵심이다.",
    diagramClass: "gametheory",
    emergenceContext:
      "냉전 시대 전략적 사고의 중요성이 부각되고, 기업 간의 과점 경쟁 등 상호 의존적인 의사결정 상황을 분석할 필요성이 커지면서 발전했습니다. 수학적 모델을 통해 복잡한 전략적 상호작용과 그 결과를 예측하고 설명하는 강력한 분석 도구로 자리 잡았습니다.",
  },
  {
    id: "development",
    name: "발전경제학",
    period: "1950 ~ 현재",
    era: "현대 경제학",
    status: "현대 응용 분야",
    scholars: [
      {
        nameKr: "아서 루이스",
        nameEn: "Arthur Lewis",
        achievements: "이중 경제 모델, 노벨 경제학상 수상",
        nobelPrize: 1979,
      },
      {
        nameKr: "군나르 뮈르달",
        nameEn: "Gunnar Myrdal",
        achievements: "누적적 인과관계, 불평등 심화",
        nobelPrize: 1974,
      },
      {
        nameKr: "아마티아 센",
        nameEn: "Amartya Sen",
        achievements: "인간 개발, 역량 이론",
        nobelPrize: 1998,
      },
      {
        nameKr: "대런 애쓰모글루",
        nameEn: "Daron Acemoglu",
        achievements: "제도와 성장 연구",
        nobelPrize: 2024,
        image: "/static/images/scholars/daron_acemoglu.jpg",
      },
      {
        nameKr: "에스테르 뒤플로",
        nameEn: "Esther Duflo",
        achievements: "무작위 통제 실험(RCT), 빈곤 연구",
        nobelPrize: 2019,
      },
    ],
    keyConcepts: [
      {
        name: "빈곤의 악순환",
        description: "가난이 가난을 낳는 지속적인 빈곤 상태",
      },
      {
        name: "이중 경제 모델",
        description:
          "전통 부문과 현대 부문으로 구성된 개발도상국의 경제 구조 모델",
      },
      {
        name: "인간 개발",
        description:
          "소득뿐 아니라 교육, 건강, 자유 등 인간의 삶의 질 향상을 중시하는 발전 개념",
      },
      {
        name: "제도와 성장",
        description: "정치·경제 제도가 경제 성장에 미치는 영향",
      },
      {
        name: "무작위 통제 실험(RCT)",
        description: "정책 효과를 과학적으로 검증하기 위해 사용되는 실험 방법",
      },
    ],
    summary:
      "주로 저개발국가의 경제 발전과 빈곤 문제 해결을 연구하는 분야입니다. 초기에는 자본 축적과 산업화 전략에 초점을 맞추었습니다. 아서 루이스는 농촌의 잉여 노동력이 도시 산업 부문으로 이동하면서 경제가 발전한다는 이중 경제 모델을 제시하여 노벨 경제학상을 수상했습니다. 군나르 뮈르달은 선진국과 저개발국 간의 불평등 심화(누적적 인과관계)를 지적했습니다. 아마티아 센은 소득뿐만 아니라 교육, 건강, 자유 등 인간의 기본적인 '역량' 확충이 진정한 발전이라고 주장하며 인간개발지수(HDI)의 이론적 토대를 제공하여 노벨 경제학상을 수상했습니다. 최근에는 제도의 질, 거버넌스, 교육, 건강 등이 경제 성장에 미치는 영향에 대한 연구와 함께, 에스테르 뒤플로 등이 주도하는 무작위 통제 실험(RCT)을 통해 특정 정책의 효과를 엄밀하게 검증하려는 시도가 활발합니다.",
    quote:
      "왜 어떤 나라는 가난하고 어떤 나라는 부유한가? 가난의 덫에서 벗어나 지속적인 경제 발전을 이루려면 무엇이 필요한가? 단순히 돈을 넘어선 인간의 삶의 질 개선이 진정한 발전이다.",
    diagramClass: "development",
    emergenceContext:
      "제2차 세계대전 이후 많은 식민지 국가들이 독립하면서 신생 저개발국들의 경제 발전과 빈곤 퇴치 문제가 국제적인 주요 과제로 떠올랐습니다. 이들 국가의 특수한 상황을 고려하여 경제 성장 전략과 정책 방안을 연구하는 과정에서 발전했습니다.",
  },
  {
    id: "environmental",
    name: "환경경제학",
    period: "1960 ~ 현재",
    era: "현대 경제학",
    status: "현대 응용 분야 (정책 중요성 증대)",
    scholars: [
      {
        nameKr: "로널드 코즈",
        nameEn: "Ronald Coase",
        achievements: "코즈 정리, 거래비용",
        nobelPrize: 1991,
      },
      {
        nameKr: "아서 세실 피구",
        nameEn: "Arthur Cecil Pigou",
        achievements: "피구세, 외부효과 교정",
      },
      {
        nameKr: "윌리엄 노드하우스",
        nameEn: "William Nordhaus",
        achievements: "기후변화 경제학, 통합평가모형",
        nobelPrize: 2018,
      },
      {
        nameKr: "마틴 와이츠먼",
        nameEn: "Martin Weitzman",
        achievements: "환경 정책 분석",
      },
    ],
    keyConcepts: [
      {
        name: "외부효과 (피구세, 코즈 정리)",
        description:
          "어떤 경제 주체의 행동이 다른 주체에게 의도치 않은 영향을 미치고 보상이 이루어지지 않는 현상",
      },
      {
        name: "공유지의 비극",
        description: "주인 없는 공유자원이 남용되어 고갈되는 현상",
      },
      {
        name: "지속가능한 발전",
        description:
          "미래 세대의 필요를 충족시킬 능력을 저해하지 않으면서 현재 세대의 필요를 충족시키는 발전",
      },
      {
        name: "탄소배출권 거래제",
        description:
          "온실가스 배출 권리를 사고팔 수 있도록 하여 시장 원리에 따라 배출량을 줄이는 제도",
      },
      {
        name: "기후변화 경제학",
        description:
          "기후변화가 경제에 미치는 영향과 대응 방안을 연구하는 분야",
      },
    ],
    summary:
      "경제 활동이 환경에 미치는 영향과 환경 문제 해결을 위한 경제학적 접근을 연구합니다. 아서 세실 피구는 오염과 같은 부정적 외부효과를 교정하기 위해 세금을 부과(피구세)하거나 보조금을 지급할 것을 제안했습니다. 로널드 코스는 재산권이 명확하게 설정되고 거래비용이 낮다면 외부효과 문제가 시장 자율 협상을 통해 해결될 수 있다는 코즈 정리를 제시하여 노벨 경제학상을 수상했습니다. 환경경제학은 '공유지의 비극' 문제를 해결하고, 지속가능한 발전을 달성하기 위한 정책 수단으로 탄소세, 배출권 거래제 등을 분석합니다. 윌리엄 노드하우스는 기후변화가 경제에 미치는 장기적 영향을 분석하고 통합평가모형(IAM)을 개발한 공로로 노벨 경제학상을 수상했습니다.",
    quote:
      "깨끗한 공기와 물도 희소한 자원이다! 환경오염은 시장 실패의 대표적 사례이며, 이를 해결하기 위해 세금, 보조금, 재산권 설정 등 경제적 유인을 활용해야 지속가능한 발전을 이룰 수 있다.",
    diagramClass: "environmental",
    emergenceContext:
      "1960년대 이후 산업화로 인한 환경오염과 자원 고갈 문제가 심각한 사회 문제로 인식되기 시작했습니다. 경제 성장과 환경 보존의 조화를 모색하고, 외부효과, 공유지의 비극 등 환경 문제 해결을 위한 경제학적 해법을 찾으려는 노력 속에서 발전했습니다.",
  },
  {
    id: "information",
    name: "정보경제학",
    period: "1970 ~ 현재",
    era: "현대 경제학",
    status: "현대 주요 흐름 (디지털 경제와 연관)",
    scholars: [
      {
        nameKr: "조지 애컬로프",
        nameEn: "George Akerlof",
        achievements: "역선택, 레몬 문제",
        nobelPrize: 2001,
      },
      {
        nameKr: "마이클 스펜스",
        nameEn: "Michael Spence",
        achievements: "신호 발송 이론",
        nobelPrize: 2001,
      },
      {
        nameKr: "조지프 스티글리츠",
        nameEn: "Joseph Stiglitz",
        achievements: "정보 비대칭, 선별 과정",
        nobelPrize: 2001,
        image: "/static/images/scholars/joseph_stiglitz.jpg",
      },
      {
        nameKr: "케네스 애로우",
        nameEn: "Kenneth Arrow",
        achievements: "정보의 역할, 시장 실패",
        nobelPrize: 1972,
      },
    ],
    keyConcepts: [
      {
        name: "정보 비대칭",
        description: "거래 당사자 간에 정보가 불균등하게 분포된 상황",
      },
      {
        name: "역선택",
        description:
          "정보가 부족한 쪽이 불리한 선택을 하게 되는 문제 (예: 불량품만 남는 중고차 시장)",
      },
      {
        name: "도덕적 해이",
        description:
          "정보를 가진 쪽이 계약 후 상대방이 관찰할 수 없는 행동을 하여 자신의 이익을 추구하는 문제",
      },
      {
        name: "신호 발송",
        description:
          "정보 우위에 있는 쪽이 자신의 특성을 알리기 위해 보내는 행동 (예: 학력, 자격증)",
      },
      {
        name: "주인-대리인 문제",
        description:
          "주인(위임자)과 대리인(수임자) 간의 정보 비대칭과 이해상충으로 발생하는 문제",
      },
    ],
    summary:
      "경제 주체들 사이에 정보가 불균등하게 분포되어 있는 상황(정보 비대칭)이 시장과 경제 행동에 미치는 영향을 분석합니다. 조지 애컬로프는 중고차 시장의 '레몬(불량품)' 문제를 통해 정보가 부족한 쪽이 불리한 선택을 하게 되는 역선택 문제를 설명했습니다. 마이클 스펜스는 정보 우위에 있는 쪽이 자신의 특성을 알리기 위해 보내는 '신호 발송'(예: 학력)의 역할을 분석했습니다. 조지프 스티글리츠는 정보 비대칭이 시장 실패를 야기하고, 보험 시장 등에서 관찰되는 선별 과정 등을 연구했습니다. 이 세 학자는 정보 비대칭 시장 분석에 대한 공로로 함께 노벨 경제학상을 수상했습니다. 정보경제학은 계약이론, 금융시장 분석, 규제 정책 등 다양한 분야에 중요한 시사점을 제공하며, 특히 인터넷과 디지털 경제 시대에 그 중요성이 더욱 커지고 있습니다.",
    quote:
      "정보는 힘이다! 누가 무엇을 알고 모르는지가 시장 결과를 좌우한다. 정보 비대칭은 역선택과 도덕적 해이를 낳고, 시장을 왜곡시킬 수 있다.",
    diagramClass: "digital",
    emergenceContext:
      "현실 경제에서 거래 당사자 간 정보가 불완전하거나 비대칭적으로 분포하는 경우가 많다는 인식이 확산되었습니다. 이러한 정보의 불균형이 시장의 효율성과 개인의 의사결정에 미치는 영향을 체계적으로 분석할 필요성이 제기되면서 발전했습니다.",
  },
  {
    id: "digital",
    name: "디지털경제학",
    period: "1990 ~ 현재",
    era: "현대 경제학",
    status: "최신 핵심 분야",
    scholars: [
      {
        nameKr: "칼 샤피로",
        nameEn: "Carl Shapiro",
        achievements: "정보재, 네트워크 효과",
        image: "/static/images/scholars/carl_shapiro.jpg",
      },
      {
        nameKr: "홀 베리언",
        nameEn: "Hal Varian",
        achievements: "플랫폼 경제, 데이터 경제",
      },
      {
        nameKr: "에릭 브린욜프슨",
        nameEn: "Erik Brynjolfsson",
        achievements: "디지털 기술과 생산성",
        image: "/static/images/scholars/erik_brynjolfsson.jpg",
      },
      {
        nameKr: "장 티롤",
        nameEn: "Jean Tirole",
        achievements: "양면시장, 플랫폼 지배력",
        nobelPrize: 2014,
        image: "/static/images/scholars/jean_tirole.jpg",
      },
      {
        nameKr: "존 폰 노이만",
        nameEn: "John von Neumann",
        achievements: "게임 이론 창시, 경제 행동의 수학적 모델 제시",
        image: "/static/images/scholars/john_von_neumann.jpg",
      },
    ],
    keyConcepts: [
      {
        name: "네트워크 효과",
        description:
          "사용자가 증가할수록 서비스의 가치가 기하급수적으로 증가하는 현상",
      },
      {
        name: "플랫폼 경제",
        description:
          "온라인 플랫폼을 통해 공급자와 수요자를 연결하는 경제 모델",
      },
      {
        name: "정보재",
        description: "소프트웨어, 디지털 콘텐츠 등 정보 형태로 존재하는 재화",
      },
      {
        name: "한계비용 제로",
        description: "디지털 제품의 추가 생산 비용이 거의 들지 않는 특성",
      },
      {
        name: "양면시장",
        description:
          "서로 다른 두 사용자 집단이 플랫폼을 통해 상호작용하는 시장 (예: 쇼핑 플랫폼의 구매자와 판매자)",
      },
      {
        name: "데이터 경제",
        description:
          "데이터의 수집, 분석, 활용이 핵심적인 가치를 창출하는 경제",
      },
    ],
    summary:
      "인터넷, 모바일, 빅데이터, 인공지능(AI) 등 디지털 기술이 경제 구조와 활동에 미치는 영향을 연구하는 비교적 새로운 분야입니다. 정보재(소프트웨어, 디지털 콘텐츠 등)는 초기 개발 비용은 높지만 복제 비용(한계비용)은 거의 0에 가깝다는 특징을 가집니다. 또한, 사용자가 많아질수록 서비스 가치가 증가하는 네트워크 효과가 강하게 나타나며, 이는 승자독식 시장을 형성하는 경향이 있습니다. 칼 샤피로와 홀 베리언은 『정보 경제학 입문』에서 이러한 디지털 경제의 특징을 분석했습니다. 장 티롤은 플랫폼 기업의 시장 지배력, 양면시장 특성 등을 분석하여 노벨 경제학상을 수상했습니다. 디지털경제학은 데이터의 가치, 프라이버시, 알고리즘 편향, 디지털 격차 등 새로운 경제적, 사회적 쟁점들을 다룹니다.",
    quote:
      "디지털 세상은 기존 경제 규칙을 뒤흔든다! 한계비용 제로, 강력한 네트워크 효과, 플랫폼의 지배력, 데이터의 폭발적 증가... 새로운 경제 패러다임이 펼쳐지고 있다.",
    diagramClass: "digital",
    emergenceContext:
      "인터넷과 디지털 기술의 급격한 발전으로 전통적인 산업 구조와 경제 활동 방식에 근본적인 변화가 나타났습니다. 네트워크 효과, 플랫폼 경제, 정보재의 특성 등 디지털 환경 고유의 경제 현상을 분석하고 이해하기 위한 새로운 이론적 틀이 요구되었습니다.",
  },
  {
    id: "publicchoice",
    name: "공공선택이론",
    period: "1960 ~ 현재",
    era: "현대 경제학",
    status: "현대 응용 분야 (정치경제학)",
    scholars: [
      {
        nameKr: "제임스 뷰캐넌",
        nameEn: "James M. Buchanan",
        achievements:
          "공공선택이론 발전, 재정학, 정치경제학, 노벨 경제학상 수상",
        nobelPrize: 1986,
        image: "/static/images/scholars/james_buchanan.jpg",
      },
      {
        nameKr: "고든 털럭",
        nameEn: "Gordon Tullock",
        achievements: "공공선택이론 공동 개척, 지대추구 이론",
        // image: "/static/images/scholars/gordon_tullock.jpg" // Image not downloaded yet
      },
      {
        nameKr: "맨서 올슨",
        nameEn: "Mancur Olson",
        achievements: "집단행동의 논리, 이익집단 연구",
      },
    ],
    keyConcepts: [
      {
        name: "정치시장에서의 합리적 선택",
        description:
          "정치인, 관료, 유권자 등 정치 참여자들이 자신의 이익을 극대화하기 위해 행동한다는 가정",
      },
      {
        name: "정부 실패",
        description:
          "정부의 개입이 자원 배분의 효율성을 오히려 저해하거나 사회 후생을 감소시키는 현상",
      },
      {
        name: "지대추구 행위",
        description:
          "생산적인 활동보다는 정치적 로비 등을 통해 인위적으로 이익(지대)을 얻으려는 행위",
      },
      {
        name: "투표의 역설과 유권자의 무관심",
        description:
          "개인 투표의 영향력이 미미하여 합리적인 유권자가 투표에 적극적으로 참여하지 않을 수 있는 현상",
      },
      {
        name: "관료주의와 예산 극대화",
        description: "관료들이 자신의 이익(권력, 예산)을 위해 행동하는 경향",
      },
    ],
    summary:
      "정치적 의사결정 과정을 경제학적 방법론, 특히 합리적 선택 이론을 적용하여 분석하는 분야입니다. 전통적으로 정부를 공익 추구자로 간주했던 것과 달리, 공공선택이론은 정치인, 관료, 유권자, 이익집단 등 정치 과정 참여자들을 자신의 효용이나 이익을 극대화하려는 합리적 경제인으로 가정합니다. 이를 통해 '시장 실패'에 대응하는 '정부 실패'의 가능성을 경고하고, 지대추구 행위, 관료주의의 비효율, 투표 행태 등을 설명합니다. 제임스 뷰캐넌과 고든 털럭이 이 분야의 주요 개척자로 꼽히며, 뷰캐넌은 공공선택이론에 대한 공로로 노벨 경제학상을 수상했습니다.",
    quote:
      "정치인도 결국 사람이다! 공익이라는 허울 좋은 명분 뒤에는 각자의 이해관계가 숨어있다. 시장이 실패하듯 정부도 실패할 수 있음을 직시해야 한다.",
    diagramClass: "political",
    emergenceContext:
      "1950년대와 60년대, 정부의 역할 확대와 그에 따른 비효율성에 대한 비판적 인식이 높아지면서 등장했습니다. 경제학의 분석 도구를 정치 현상에 적용하여 정부 정책과 정치 과정을 보다 현실적으로 이해하려는 시도에서 발전했습니다.",
  },
  {
    id: "complexityeconomics",
    name: "복잡계 경제학",
    period: "1980 ~ 현재",
    era: "현대 경제학",
    status: "최신 연구 분야 (학제간 연구 활발)",
    scholars: [
      {
        nameKr: "브라이언 아서",
        nameEn: "W. Brian Arthur",
        achievements: "수익체증, 경로 의존성, 복잡계 경제학 선구자",
        image: "/static/images/scholars/brian_arthur.jpg",
      },
      {
        nameKr: "에릭 바인하커",
        nameEn: "Eric D. Beinhocker",
        achievements: "복잡계 경제학 대중화, 『부의 기원』 저술",
        image: "/static/images/scholars/eric_beinhocker.jpg",
      },
      {
        nameKr: "도인 파머",
        nameEn: "J. Doyne Farmer",
        achievements: "물리학 기반 경제 모델링, 시장 생태학",
      },
      {
        nameKr: "새뮤얼 보울스",
        nameEn: "Samuel Bowles",
        achievements: "제도와 행동 경제학, 복잡계 관점 통합",
      },
    ],
    keyConcepts: [
      {
        name: "행위자 기반 모형 (ABM)",
        description:
          "다양한 특성과 행동 규칙을 가진 행위자들의 상호작용을 시뮬레이션하는 분석 방법",
      },
      {
        name: "창발적 현상",
        description:
          "개별 행위자 수준에서는 예측할 수 없었던 거시적 패턴이나 질서가 시스템 전체 수준에서 나타나는 현상",
      },
      {
        name: "비선형 동학",
        description:
          "시스템의 반응이 입력에 정비례하지 않아 작은 변화가 큰 결과를 초래할 수 있는 특성",
      },
      {
        name: "적응적 시스템",
        description:
          "행위자들이 환경 변화에 따라 학습하고 전략을 수정하며 시스템 전체가 진화하는 과정",
      },
      {
        name: "네트워크 효과와 피드백 루프",
        description:
          "행위자 간 연결 구조와 상호작용이 시스템 전체의 동태적 변화에 영향을 미치는 과정",
      },
      {
        name: "경로 의존성",
        description:
          "초기의 우연한 사건이나 선택이 장기적인 시스템의 발전 경로를 결정하는 현상",
      },
    ],
    summary:
      "경제를 끊임없이 진화하고 적응하는 복잡한 시스템으로 간주하는 경제학의 한 분야입니다. 전통 경제학의 합리적 개인과 시장 균형 가정에서 벗어나, 제한된 합리성을 가진 다양한 행위자들의 상호작용과 그로 인해 발생하는 창발적 현상에 주목합니다. 행위자 기반 모형(ABM)과 같은 컴퓨터 시뮬레이션 방법을 사용하여 금융 시장의 변동성, 기술 혁신의 확산, 도시 성장, 경제 위기 등 예측하기 어려운 동태적 과정을 연구합니다. 샌타페이 연구소가 복잡계 경제학 연구의 중심지 역할을 하고 있으며, 브라이언 아서 등이 주요 학자로 꼽힙니다. 이 접근법은 경제 현상의 불확실성과 예측 불가능성을 인정하고, 시스템 전체의 구조와 진화 과정을 이해하는 데 중점을 둡니다.",
    quote:
      "경제는 살아있는 유기체와 같다! 수많은 구성원들의 상호작용이 예측 불가능한 패턴을 만들고, 끊임없이 변화하고 진화한다. 단순한 균형이 아닌, 복잡한 질서의 춤이다.",
    diagramClass: "complexity",
    emergenceContext:
      "전통적인 경제 모델이 금융 위기나 급격한 기술 변화와 같은 현실 경제의 동태적이고 불확실한 측면을 설명하는 데 한계를 보이면서, 물리학, 생물학 등 자연과학의 복잡계 이론을 경제학에 도입하려는 시도에서 발전했습니다. 컴퓨터 기술의 발전으로 복잡한 시뮬레이션이 가능해진 것도 중요한 배경입니다.",
  },
  {
    id: "evolutionaryeconomics",
    name: "진화 경제학",
    period: "1980 ~ 현재", // Approximate, as it builds on earlier ideas
    era: "현대 경제학",
    status: "현대 경제학의 주요 흐름",
    scholars: [
      {
        nameKr: "조지프 슘페터",
        nameEn: "Joseph Schumpeter",
        achievements: "창조적 파괴, 혁신 이론의 선구자 (사상적 기반 제공)",
        image: "/static/images/scholars/Joseph_Schumpeter.jpg",
      },
      {
        nameKr: "리처드 넬슨",
        nameEn: "Richard R. Nelson",
        achievements: "진화 경제학 정립, 『경제 변화의 진화 이론』 공동 저술",
      },
      {
        nameKr: "시드니 윈터",
        nameEn: "Sidney G. Winter",
        achievements: "진화 경제학 정립, 『경제 변화의 진화 이론』 공동 저술",
      },
      {
        nameKr: "조반니 도시",
        nameEn: "Giovanni Dosi",
        achievements: "기술 패러다임, 혁신 시스템 연구",
      },
      {
        nameKr: "쿠르트 도플러",
        nameEn: "Kurt Dopfer",
        achievements: "미시-메조-매크로 프레임워크",
      },
    ],
    keyConcepts: [
      {
        name: "창조적 파괴 (Creative Destruction)",
        description:
          "새로운 혁신이 기존의 기술, 기업, 산업 구조를 파괴하고 대체하는 과정",
      },
      {
        name: "혁신 (Innovation)",
        description:
          "경제 발전의 핵심 동력으로, 새로운 기술, 제품, 프로세스, 시장, 조직 등을 도입하는 것",
      },
      {
        name: "기업가 정신 (Entrepreneurship)",
        description:
          "혁신을 주도하고 새로운 기회를 포착하여 경제 변화를 이끄는 역할",
      },
      {
        name: "경로 의존성 (Path Dependency)",
        description:
          "과거의 선택이나 사건이 현재와 미래의 경제 발전 경로에 지속적인 영향을 미치는 현상",
      },
      {
        name: "다양성과 선택 (Variety and Selection)",
        description:
          "경제 내 다양한 행위자, 기술, 전략 등이 경쟁하고 환경에 적응하며 선택되는 과정",
      },
      {
        name: "루틴 (Routines)",
        description:
          "기업 내에서 반복적으로 수행되는 행동 패턴으로, 지식과 역량의 저장소 역할",
      },
    ],
    summary:
      "경제를 생물학적 진화 과정에 유비하여 이해하려는 접근 방식입니다. 조지프 슘페터의 '창조적 파괴' 개념에서 중요한 영감을 받았으며, 기업, 기술, 제도 등이 시간의 흐름에 따라 어떻게 변화하고 적응하며 선택되는지에 초점을 맞춥니다. 신고전학파의 합리적 행위자와 균형 상태 가정에 비판적이며, 다양성, 혁신, 경로 의존성, 불확실성 하에서의 의사결정 등을 핵심 요소로 간주합니다. 리처드 넬슨과 시드니 윈터는 『경제 변화의 진화 이론』(An Evolutionary Theory of Economic Change, 1982)을 통해 이를 정형화하는 데 크게 기여했습니다. 진화 경제학은 기술 변화, 산업 동학, 경제 성장, 정책 등을 분석하는 데 중요한 관점을 제공합니다.",
    quote:
      "혁신은 낡은 것을 파괴하고 새로운 것을 창조하는 끊임없는 폭풍이다. 이것이 자본주의의 본질적 사실이다. - 조지프 슘페터 (유사 인용)",
    diagramClass: "evolutionaryeconomics", // Add a specific class if needed for diagrams
    emergenceContext:
      "1970년대 이후 신고전학파 경제학의 정태적 균형 분석과 합리적 행위자 가정의 한계가 드러나면서, 경제 현상의 동태적 변화와 복잡성을 설명하려는 시도로 등장했습니다. 특히 기술 혁신과 산업 구조 변화의 중요성이 부각되면서 주목받기 시작했습니다.",
  },
  {
    id: "systemseconomics",
    name: "시스템 경제학",
    period: "1970 ~ 현재", // Approximate
    era: "현대 경제학",
    status: "학제간 연구 분야",
    scholars: [
      {
        nameKr: "케네스 볼딩",
        nameEn: "Kenneth Boulding",
        achievements: "일반 시스템 이론의 경제학 적용 선구자",
      },
      {
        nameKr: "제이 포레스터",
        nameEn: "Jay Wright Forrester",
        achievements: "시스템 다이내믹스 창시, 산업 및 도시 동학 모델 개발",
      },
      {
        nameKr: "허버트 사이먼",
        nameEn: "Herbert A. Simon",
        achievements: "제한된 합리성, 복잡계 연구, 노벨 경제학상 수상",
        nobelPrize: 1978,
        image: "/static/images/scholars/Herbert_A_Simon.jpg",
      },
      {
        nameKr: "도넬라 메도우즈",
        nameEn: "Donella H. Meadows",
        achievements: "『성장의 한계』 공동 저자, 시스템 사고 대중화",
      },
      {
        nameKr: "니콜라스 조르제스쿠-뢰겐",
        nameEn: "Nicholas Georgescu-Roegen",
        achievements: "생태 경제학의 선구자, 열역학 법칙의 경제학적 함의 연구",
      },
    ],
    keyConcepts: [
      {
        name: "피드백 루프 (Feedback Loops)",
        description:
          "시스템 내에서 한 요소의 변화가 다른 요소에 영향을 미치고, 그 영향이 다시 원래 요소로 돌아오는 순환적 인과 관계 (양성 피드백, 음성 피드백)",
      },
      {
        name: "비선형 동학 (Nonlinear Dynamics)",
        description:
          "원인과 결과 사이에 정비례 관계가 성립하지 않는 복잡한 시스템의 행동 양식",
      },
      {
        name: "자기 조직화 (Self-Organization)",
        description:
          "외부의 직접적인 통제 없이 시스템 스스로 질서 있는 구조나 패턴을 형성하는 과정",
      },
      {
        name: "창발성 (Emergence)",
        description:
          "하위 구성 요소들의 개별적 특성만으로는 예측할 수 없는 시스템 전체 수준의 새로운 특성이나 행동이 나타나는 현상",
      },
      {
        name: "스톡과 플로우 (Stocks and Flows)",
        description:
          "시스템 내에 축적되는 양(스톡)과 시간에 따라 변화하는 양(플로우)을 통해 시스템 구조와 행동을 분석하는 개념",
      },
      {
        name: "시스템 경계 (System Boundary)",
        description:
          "분석 대상 시스템과 그 외부 환경을 구분하는 경계로, 문제 정의에 중요",
      },
    ],
    summary:
      "경제를 상호 연결된 구성 요소들로 이루어진 복잡한 동적 시스템으로 파악하고 분석하는 학문입니다. 시스템 전체의 구조, 행동, 그리고 진화 과정에 주목하며, 피드백 루프, 비선형 관계, 자기 조직화, 창발적 속성 등 시스템 이론의 개념을 경제 현상 해석에 적용합니다. 경제 주체들 간의 상호작용과 환경과의 관계를 중시하며, 정책 결정 시 예기치 않은 결과를 고려하는 전체론적 관점을 제공합니다. 시스템 다이내믹스, 복잡계 경제학 등과 밀접한 관련이 있으며, 환경 문제, 금융 시스템 안정성, 도시 계획 등 다양한 분야에 응용됩니다.",
    quote:
      "우리는 세상을 조각내어 분석하려 하지만, 세상은 통합된 전체로서 작동한다. 시스템 사고는 이 전체를 보는 방법이다. - 도넬라 메도우즈 (유사 인용)",
    diagramClass: "systemseconomics", // Add a specific class if needed for diagrams
    emergenceContext:
      "컴퓨터 기술의 발전과 함께 복잡한 시스템을 모델링하고 시뮬레이션할 수 있는 능력이 향상되면서 발전했습니다. 전통 경제학의 환원주의적 접근 방식으로는 설명하기 어려운 거시적 현상이나 예기치 않은 결과를 이해하려는 수요와 맞물려 성장했습니다.",
  },
];
