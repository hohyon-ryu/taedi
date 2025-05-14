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
  "고대·중세 전통":
    "경제 활동에 대한 윤리적, 철학적 접근이 주를 이루었으며, 공정 가격과 이자 수취 제한 등이 주요 논의 대상이었습니다. 아리스토텔레스, 토마스 아퀴나스가 고대 사상을 대표하며, 이후 국가 중심의 부국강병을 목표로 한 중상주의(토마스 먼, 콜베르)가 등장하여 근세 경제 정책의 주류를 이루었습니다.",
  "고전학파 세대":
    "개인의 자유로운 경제활동과 시장의 자율 조정 능력을 강조하는 고전학파(애덤 스미스, 데이비드 리카도)가 등장하여 자유방임주의의 기초를 마련했습니다. 이 시기는 근대 경제학의 출발점으로 평가됩니다.",
  "신고전·마르크스·오스트리아 세대":
    "고전학파 이후 다양한 사상이 분화된 시기입니다. 자본주의의 모순을 지적하는 마르크스주의(카를 마르크스), 개인의 효용과 수학적 분석을 중시하는 신고전학파(알프레드 마셜, 레온 왈라스)가 근대 후기 주류를 형성했으며, 개인의 주관적 가치와 자생적 질서를 강조하는 오스트리아학파(칼 멩거, 하이에크)도 독자적인 흐름을 이어갔습니다.",
  "케인즈·제도·시카고 세대":
    "20세기 경제학의 주요 패러다임이 형성된 시기입니다. 대공황 이후 정부의 적극적 시장 개입을 주장한 케인즈주의(존 메이너드 케인즈)가 20세기 중반 주류로 부상했습니다. 이에 대한 반론으로 시카고학파/통화주의(밀턴 프리드먼)가 등장하여 20세기 후반 주류 및 신자유주의의 이론적 토대를 제공했습니다. 한편, 경제 현상에서 법, 관습 등 제도의 중요성을 강조하는 제도주의(소스타인 베블런, 로널드 코즈)도 꾸준히 발전하며 영향을 미쳤습니다.",
  "행동·신종합·신케인즈 세대":
    "기존 주류 이론들을 통합하거나 새로운 관점을 제시하려는 노력이 나타난 시기입니다. 신고전주의 종합(폴 새뮤얼슨, 로버트 솔로우)은 케인즈주의와 신고전학파를 통합하려 시도했습니다. 이후 케인즈주의의 핵심을 미시적으로 설명하려는 신케인즈주의(조지프 스티글리츠, 폴 크루그먼)가 현대 거시경제의 주류로 자리 잡았습니다. 또한, 인간의 심리적 측면을 경제 분석에 도입한 행동경제학(대니얼 카너먼, 리처드 탈러)이 새로운 주요 흐름으로 부상했습니다.",
  "현대 경제학":
    "경제학이 매우 다양하고 세분화된 분과들로 발전한 시기입니다. 게임이론(존 내쉬)은 전략적 상호작용 분석의 핵심 도구가 되었고, 정보경제학(조지 애컬로프, 조지프 스티글리츠)은 정보 비대칭 문제의 중요성을 밝혔습니다. 발전경제학(아마티아 센), 환경경제학(윌리엄 노드하우스), 공공선택이론(제임스 뷰캐넌) 등 특정 문제 영역을 다루는 응용 분야들이 발전했습니다. 최근에는 디지털 기술 발전에 따른 디지털경제학(칼 샤피로, 장 티롤), 인간의 행복을 직접 연구하는 행복경제학(리처드 이스털린), 경제를 복잡계로 파악하는 복잡성 경제학(브라이언 아서) 등 새로운 연구 경향과 시도들이 활발하게 이루어지고 있습니다.",
};
