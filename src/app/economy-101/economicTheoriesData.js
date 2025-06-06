import { theories as ancientMedievalTraditionTheories } from "./era_ancient_medieval_tradition";
import { theories as behavioralNeosynthesisNewKeynesianGenerationTheories } from "./era_behavioral_neosynthesis_new_keynesian_generation";
import { theories as classicalSchoolGenerationTheories } from "./era_classical_school_generation";
import { theories as keynesianInstitutionalChicagoGenerationTheories } from "./era_keynesian_institutional_chicago_generation";
import { theories as modernEconomicsTheories } from "./era_modern_economics";
import { theories as neoclassicalMarxistAustrianGenerationTheories } from "./era_neoclassical_marxist_austrian_generation";

export const theories = [
  ...ancientMedievalTraditionTheories,
  ...classicalSchoolGenerationTheories,
  ...neoclassicalMarxistAustrianGenerationTheories,
  ...keynesianInstitutionalChicagoGenerationTheories,
  ...behavioralNeosynthesisNewKeynesianGenerationTheories,
  ...modernEconomicsTheories,
];

export const eraSummaries = {
  "고대·중세 전통": {
    summary:
      "고대 그리스의 도시 국가 발전과 로마 제국의 팽창, 중세 유럽의 봉건제도와 기독교 중심 사회 속에서 경제 활동은 주로 윤리적, 철학적 관점에서 논의되었습니다. 아리스토텔레스의 '오이코노미아' 개념, 플라톤의 이상 국가론, 로마법의 소유권 개념 정립 등이 이루어졌습니다. 중세에는 토마스 아퀴나스가 '공정 가격' 이론을 발전시키고, 이슬람 황금기 학자들은 상업과 금융에 대한 선구적인 아이디어를 제시했습니다. 이 시기에는 농업 중심 경제, 길드 조직, 지중해 무역 활성화 등의 역사적 배경 속에서 경제 사상이 싹텄습니다.",
    image: "/static/images/banners/ancient_medieval_tradition.png",
    realWorldApplication: {
      story:
        "로마법은 소유권 개념을 성문화하여 이후 서양 법체계와 경제 질서의 기초를 마련했으며, 중세 교회는 '공정 가격'과 이자 수취 제한(우수리)에 대한 교리를 통해 당시 상업 활동에 윤리적 기준을 제시하려 했습니다. 이는 중세 도시의 길드 규약이나 상거래 관행에 영향을 미쳤습니다.",
    },
  },
  "중상주의와 중농주의": {
    summary:
      "절대 왕정 시대 유럽 국가들이 중앙집권화를 이루고 식민지 개척과 국제 무역 경쟁을 벌이던 시기입니다. 신항로 개척으로 인한 상업 혁명, 아메리카 대륙의 금은 유입, 종교개혁과 과학혁명 등이 이 시대의 주요 배경입니다. 중상주의는 국가 부흥을 목표로 금은 축적과 무역 흑자를 강조했고, 중농주의는 프랑스를 중심으로 농업만이 부의 원천이라고 보았습니다. 이 시기에는 국제 무역, 보호 무역, 화폐의 역할 등에 대한 논의가 활발했으며, 국가의 경제 개입을 정당화하는 이론들이 발전했습니다.",
    image: "/static/images/banners/mercantilism_era.png",
    realWorldApplication: {
      story:
        "프랑스의 장바티스트 콜베르는 콜베르주의를 통해 국가 주도의 산업 육성, 보호무역, 수출 장려 정책을 강력히 추진하여 프랑스의 부와 군사력을 증강시키려 했습니다. 영국의 항해법 역시 자국 해운업 보호와 식민지 무역 통제를 통해 국가의 해상력을 강화하려는 중상주의 정책의 대표적 사례입니다. 한편, 프랑스의 재무총감이었던 안 로베르 자크 튀르고는 중농주의 사상에 기반하여 곡물 거래 자유화, 길드 폐지 등 개혁을 시도했으나 귀족들의 반발로 좌절되었습니다.",
    },
  },
  "고전학파 세대": {
    summary:
      "산업 혁명으로 인한 생산력 증대, 자본주의의 발흥, 미국 독립과 프랑스 혁명 등 시민 계급의 성장이 두드러진 시기입니다. 애덤 스미스를 필두로 자유 시장 경제의 원리를 제시한 학파입니다. '보이지 않는 손', 분업, 자유 무역 등을 강조하며 경제학을 체계적인 학문으로 발전시켰습니다. 데이비드 리카도의 비교 우위론, 토머스 맬서스의 인구론, 장 바티스트 세이의 '세이의 법칙' 등도 이 시기의 중요한 이론입니다. 이들은 개인의 경제적 자유와 시장의 자율 조정 능력을 신뢰했습니다.",
    image: "/static/images/banners/classical_school_generation.png",
    realWorldApplication: {
      story:
        "애덤 스미스의 자유방임주의 사상은 19세기 영국에서 곡물법 폐지(1846년)를 이끌어내 자유 무역을 확대하는 데 기여했습니다. 또한, 고전학파의 이론은 당시 영국 정부의 경제 정책에 영향을 미쳐 금본위제 확립, 정부 지출 축소, 자유로운 기업 활동 보장 등의 방향으로 나아가는 데 이론적 기반을 제공했습니다.",
    },
  },
  "신고전·마르크스·오스트리아 세대": {
    summary:
      "19세기 후반부터 20세기 초, 제국주의 경쟁 심화, 노동 운동의 확산, 제1차 세계 대전 발발 등 격동의 시기였습니다. 고전학파 이후 다양한 경제 사상이 분화·발전한 시기입니다. 신고전학파는 한계효용 이론을 중심으로 미시경제학을 발전시켰고, 앨프리드 마셜은 수요와 공급의 균형 이론을 정립했습니다. 칼 마르크스는 자본주의의 모순과 계급투쟁을 분석하며 사회주의 사상의 이론적 토대를 제공했습니다. 오스트리아 학파는 주관적 가치 이론과 기업가 정신을 강조하며 신고전학파와 다른 길을 걸었습니다.",
    image:
      "/static/images/banners/neoclassical_marxist_austrian_generation_kr.png",
    realWorldApplication: {
      story:
        "신고전학파의 시장 효율성 이론은 20세기 초 미국의 반독점법(예: 셔먼법, 클레이튼법) 제정의 이론적 배경 중 하나로 작용하여 경쟁적 시장 구조를 유지하려는 시도에 영향을 주었습니다. 한편, 칼 마르크스의 사상은 20세기 러시아 혁명(블라디미르 레닌)과 중국 혁명(마오쩌둥) 등 사회주의 국가 수립의 이념적 토대가 되어 중앙 계획 경제와 생산수단의 국유화를 핵심으로 하는 경제 시스템 구축으로 이어졌습니다. 오스트리아학파의 사상은 직접적인 대규모 정책 실행보다는 자유지상주의 운동이나 특정 중앙은행 정책(예: 인플레이션 억제)에 대한 비판적 관점을 제공하는 데 영향을 미쳤습니다.",
    },
  },
  "케인즈·제도·시카고 세대": {
    summary:
      "1929년 대공황이라는 전례 없는 경제 위기와 제2차 세계 대전을 겪으며 자본주의 시스템에 대한 근본적인 성찰이 이루어진 시기입니다. 존 메이너드 케인스는 거시경제학과 정부의 적극적 역할을 강조하며 '케인즈 혁명'을 일으켰습니다. 제도학파는 법, 관습 등 제도의 중요성을 역설했고, 프리드리히 하이에크와 밀턴 프리드먼을 중심으로 한 시카고 학파는 자유 시장과 통화주의를 옹호하며 케인즈주의에 반론을 제기했습니다. 이 시기에는 경제 안정화 정책, 불완전 경쟁, 정보경제학 등 다양한 분야에서 연구가 진행되었습니다.",
    image:
      "/static/images/banners/keynesian_institutional_chicago_generation_kr.png",
    realWorldApplication: {
      story:
        "존 메이너드 케인즈의 이론은 미국의 프랭클린 D. 루스벨트 대통령이 추진한 뉴딜 정책에 큰 영향을 주어, 대공황 극복을 위한 정부의 적극적인 공공사업 투자와 사회보장제도 확충의 이론적 근거를 제공했습니다. 이후 서구 여러 정부는 케인즈주의적 수요 관리 정책을 통해 완전 고용과 경제 안정을 추구했습니다. 시카고학파의 밀턴 프리드먼은 1970년대 스태그플레이션 이후 폴 볼커 당시 연준 의장 등이 통화량 관리를 통해 인플레이션을 억제하는 정책을 채택하는 데 영향을 주었으며, 이는 이후 로널드 레이건 행정부와 마거릿 대처 정부의 신자유주의 정책으로 이어졌습니다.",
    },
  },
  "행동·신종합·신케인즈 세대": {
    summary:
      "냉전 종식 이후 세계화와 기술 발전이 가속화되고, 1970년대 스태그플레이션, 2008년 글로벌 금융위기 등 새로운 경제 문제에 직면한 시기입니다. 현대 경제학의 흐름을 주도하는 세대로, 인간의 합리성에 대한 가정을 완화하고 심리학적 요소를 경제 분석에 도입한 행동경제학(대니얼 카너먼, 리처드 탈러)이 부상했습니다. 신고전학파의 미시적 기초 위에 케인즈주의의 거시경제학적 통찰을 통합하려는 신케인즈주의(조지프 스티글리츠, 그레고리 맨큐)와 새고전학파(로버트 루카스)의 논쟁도 이 시기의 중요한 특징입니다.",
    image:
      "/static/images/banners/behavioral_neosynthesis_new_keynesian_generation_kr.png",
    realWorldApplication: {
      story:
        "2008년 글로벌 금융위기 시 벤 버냉키 연준 의장은 신케인즈주의적 아이디어와 대공황 연구를 바탕으로 양적완화 등 적극적인 통화정책을 시행하여 금융 시스템 붕괴를 막고 경제 회복을 시도했습니다. 이는 위기 상황에서 중앙은행의 적극적 역할을 보여준 사례입니다.",
    },
  },
  "현대 경제학": {
    summary:
      "21세기, 디지털 전환, 기후 변화, 지정학적 갈등, 팬데믹 등 복합적인 글로벌 도전 과제에 직면하고 있습니다. 게임 이론, 정보경제학, 공공선택론, 복잡계 경제학 등 더욱 다양하고 세분화된 분야로 발전하고 있습니다. 계량경제학의 발달로 정교한 데이터 분석이 가능해졌으며, 경제학은 사회의 다양한 문제를 해결하는 데 기여하고 있습니다. 지속 가능한 발전, 불평등 문제, 인공지능의 경제적 영향, 행동경제학의 정책 적용 등 새로운 도전 과제에 대한 연구도 활발히 진행 중입니다.",
    image: "/static/images/banners/modern_economics_kr.png",
    realWorldApplication: {
      story:
        "카를로타 페레즈는 기술 혁명이 경제 및 사회 시스템에 미치는 장기적 영향을 분석하는 '기술경제 패러다임' 이론을 제시했습니다. 그녀의 이론은 정보통신기술(ICT) 혁명과 같은 주요 기술 변화가 어떻게 금융 자본과 결합하여 버블을 형성하고, 이후 생산 자본으로 전환되어 '황금기'를 이끄는지 설명합니다. 이 분석은 각국 정부와 기업이 새로운 기술 패러다임에 적응하고, 사회경제적 전환을 관리하며, 지속 가능한 성장을 위한 정책을 수립하는 데 중요한 통찰을 제공합니다. 예를 들어, 디지털 전환기의 정책 입안자들은 페레즈의 이론을 참고하여 인프라 투자, 교육 시스템 개혁, 사회 안전망 확충 등 미래 지향적 전략을 모색할 수 있습니다.",
    },
  },
};
