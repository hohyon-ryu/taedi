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
    image: "/static/images/banners/고대·중세 전통.png",
  },
  "중상주의와 중농주의": {
    summary:
      "절대 왕정 시대 유럽 국가들이 중앙집권화를 이루고 식민지 개척과 국제 무역 경쟁을 벌이던 시기입니다. 신항로 개척으로 인한 상업 혁명, 아메리카 대륙의 금은 유입, 종교개혁과 과학혁명 등이 이 시대의 주요 배경입니다. 중상주의는 국가 부흥을 목표로 금은 축적과 무역 흑자를 강조했고, 중농주의는 프랑스를 중심으로 농업만이 부의 원천이라고 보았습니다. 이 시기에는 국제 무역, 보호 무역, 화폐의 역할 등에 대한 논의가 활발했으며, 국가의 경제 개입을 정당화하는 이론들이 발전했습니다.",
    image: "/static/images/banners/Mercantilism & Physiocracy Era.png",
  },
  "고전학파 세대": {
    summary:
      "산업 혁명으로 인한 생산력 증대, 자본주의의 발흥, 미국 독립과 프랑스 혁명 등 시민 계급의 성장이 두드러진 시기입니다. 애덤 스미스를 필두로 자유 시장 경제의 원리를 제시한 학파입니다. '보이지 않는 손', 분업, 자유 무역 등을 강조하며 경제학을 체계적인 학문으로 발전시켰습니다. 데이비드 리카도의 비교 우위론, 토머스 맬서스의 인구론, 장 바티스트 세이의 '세이의 법칙' 등도 이 시기의 중요한 이론입니다. 이들은 개인의 경제적 자유와 시장의 자율 조정 능력을 신뢰했습니다.",
    image: "/static/images/banners/고전학파 세대.png",
  },
  "신고전·마르크스·오스트리아 세대": {
    summary:
      "19세기 후반부터 20세기 초, 제국주의 경쟁 심화, 노동 운동의 확산, 제1차 세계 대전 발발 등 격동의 시기였습니다. 고전학파 이후 다양한 경제 사상이 분화·발전한 시기입니다. 신고전학파는 한계효용 이론을 중심으로 미시경제학을 발전시켰고, 앨프리드 마셜은 수요와 공급의 균형 이론을 정립했습니다. 칼 마르크스는 자본주의의 모순과 계급투쟁을 분석하며 사회주의 사상의 이론적 토대를 제공했습니다. 오스트리아 학파는 주관적 가치 이론과 기업가 정신을 강조하며 신고전학파와 다른 길을 걸었습니다.",
    image: "/static/images/banners/신고전·마르크스·오스트리아 세대.png",
  },
  "케인즈·제도·시카고 세대": {
    summary:
      "1929년 대공황이라는 전례 없는 경제 위기와 제2차 세계 대전을 겪으며 자본주의 시스템에 대한 근본적인 성찰이 이루어진 시기입니다. 존 메이너드 케인스는 거시경제학과 정부의 적극적 역할을 강조하며 '케인즈 혁명'을 일으켰습니다. 제도학파는 법, 관습 등 제도의 중요성을 역설했고, 프리드리히 하이에크와 밀턴 프리드먼을 중심으로 한 시카고 학파는 자유 시장과 통화주의를 옹호하며 케인즈주의에 반론을 제기했습니다. 이 시기에는 경제 안정화 정책, 불완전 경쟁, 정보경제학 등 다양한 분야에서 연구가 진행되었습니다.",
    image: "/static/images/banners/케인즈·제도·시카고 세대.png",
  },
  "행동·신종합·신케인즈 세대": {
    summary:
      "냉전 종식 이후 세계화와 기술 발전이 가속화되고, 1970년대 스태그플레이션, 2008년 글로벌 금융위기 등 새로운 경제 문제에 직면한 시기입니다. 현대 경제학의 흐름을 주도하는 세대로, 인간의 합리성에 대한 가정을 완화하고 심리학적 요소를 경제 분석에 도입한 행동경제학(대니얼 카너먼, 리처드 탈러)이 부상했습니다. 신고전학파의 미시적 기초 위에 케인즈주의의 거시경제학적 통찰을 통합하려는 신케인즈주의(조지프 스티글리츠, 그레고리 맨큐)와 새고전학파(로버트 루카스)의 논쟁도 이 시기의 중요한 특징입니다.",
    image: "/static/images/banners/행동·신종합·신케인즈 세대.png",
  },
  "현대 경제학": {
    summary:
      "21세기, 디지털 전환, 기후 변화, 지정학적 갈등, 팬데믹 등 복합적인 글로벌 도전 과제에 직면하고 있습니다. 게임 이론, 정보경제학, 공공선택론, 복잡계 경제학 등 더욱 다양하고 세분화된 분야로 발전하고 있습니다. 계량경제학의 발달로 정교한 데이터 분석이 가능해졌으며, 경제학은 사회의 다양한 문제를 해결하는 데 기여하고 있습니다. 지속 가능한 발전, 불평등 문제, 인공지능의 경제적 영향, 행동경제학의 정책 적용 등 새로운 도전 과제에 대한 연구도 활발히 진행 중입니다.",
    image: "/static/images/banners/현대 경제학.png",
  },
};
