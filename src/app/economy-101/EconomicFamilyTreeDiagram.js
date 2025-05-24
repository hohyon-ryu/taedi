"use client";

import MermaidRenderer from "@/components/MermaidRenderer";

const chartDefinition = `flowchart TD

classDef ancient fill:#e6f2ff,stroke:#0066cc,stroke-width:2px
classDef classical fill:#fff2e6,stroke:#ff8c00,stroke-width:2px
classDef marxist fill:#ffe6e6,stroke:#cc0000,stroke-width:2px
classDef neoclassical fill:#fff2e6,stroke:#ff8c00,stroke-width:2px
classDef austrian fill:#e6ffe6,stroke:#009900,stroke-width:2px
classDef keynesian fill:#e6f9ff,stroke:#0099cc,stroke-width:2px
classDef institutional fill:#f2e6ff,stroke:#6600cc,stroke-width:2px
classDef chicago fill:#e6ffe6,stroke:#009900,stroke-width:2px
classDef behavioral fill:#f2e6ff,stroke:#6600cc,stroke-width:2px
classDef modern fill:#f9f9f9,stroke:#333333,stroke-width:2px
classDef gametheory fill:#e1f5fe,stroke:#039be5,stroke-width:2px
classDef information fill:#e0f7fa,stroke:#00acc1,stroke-width:2px
classDef environmental fill:#e8f5e9,stroke:#66bb6a,stroke-width:2px
classDef digital fill:#e3f2fd,stroke:#42a5f5,stroke-width:2px
classDef development fill:#fff3e0,stroke:#ffa726,stroke-width:2px
classDef evolutionary fill:#f0e6ff,stroke:#9933ff,stroke-width:2px
classDef systems fill:#e0ffff,stroke:#00ced1,stroke-width:2px

Ancient["고대 및 중세 경제사상<br>(BC 350~1500년)<br><br><b>등장배경:</b><br>도시국가 발전, 기독교 중심 사회<br>윤리적, 철학적 관점 논의<br><br>아리스토텔레스, 토마스 아퀴나스<br>공정가격론, 자연법<br><i>윤리적 경제관, 공정가격 중시</i>"]
Mercantil["중상주의<br>(1500~1700년)<br><br><b>등장배경:</b><br>절대왕정, 국제무역 경쟁<br>국가 부와 권력 증대 목적<br><br>토마스 먼, 콜베르<br>무역차액설, 금은보유론<br><i>국부 증진, 보호무역 강조</i>"]
Classical["고전학파<br>(1776~1870년)<br><br><b>등장배경:</b><br>산업혁명, 계몽사상<br>중상주의 비판, 개인 자유 중시<br><br>애덤 스미스, 데이비드 리카도<br>보이지 않는 손, 비교우위론<br><i>자유방임, 시장 자율성 강조</i>"]
Marxist["마르크스주의<br>(1848~1917년)<br><br><b>등장배경:</b><br>자본주의 발전, 노동자 문제<br>자본주의 모순 비판, 새 사회 모색<br><br>카를 마르크스, 프리드리히 엥겔스<br>잉여가치론, 역사적 유물론<br><i>자본주의 비판, 계급투쟁</i>"]
Neoclassical["신고전학파<br>(1870~1930년)<br><br><b>등장배경:</b><br>과학적 방법론 영향<br>노동가치설 비판, 경제학 과학화<br><br>알프레드 마셜, 레온 왈라스<br>한계효용이론, 일반균형이론<br><i>한계효용, 수학적 분석</i>"]
Austrian["오스트리아학파<br>(1870~현재)<br><br><b>등장배경:</b><br>신고전학파와 동시대, 다른 접근<br>수학적 모델보다 인간 행동 중시<br><br>멩거, 하이에크, 미제스<br>주관적 가치론, 경기변동이론<br><i>주관적 가치, 정부개입 최소화</i>"]
Keynesian["케인즈주의<br>(1936~1970년)<br><br><b>등장배경:</b><br>대공황 발생<br>시장 자율 회복 불신, 정부 역할 강조<br><br>존 메이너드 케인즈<br>유효수요이론, 승수효과<br><i>정부개입, 유효수요 창출</i>"]
Institutional["제도주의<br>(1899~현재)<br><br><b>등장배경:</b><br>신고전학파 추상성 비판<br>법, 관습 등 제도적 맥락 중시<br><br>베블런, 코먼스, 미첼<br>제도변화론, 거래비용이론<br><i>제도와 관습의 중요성</i>"]
Chicago["시카고학파/통화주의<br>(1950~1990년)<br><br><b>등장배경:</b><br>케인즈주의 한계 (스태그플레이션)<br>정부개입 축소, 시장 기능 신뢰<br><br>밀턴 프리드먼<br>통화량이론, 자연실업률<br><i>통화량 관리, 작은 정부</i>"]
Behavioral["행동경제학<br>(1979~현재)<br><br><b>등장배경:</b><br>전통 경제학의 합리적 인간 가정 비판<br>인간의 실제 의사결정 과정 분석<br><br>카너먼, 탈러<br>전망이론, 프레이밍효과<br><i>제한된 합리성, 심리학 접목</i>"]
NewKeynesian["신케인즈주의<br>(1980~현재)<br><br><b>등장배경:</b><br>새고전학파 비판에 대응<br>케인즈주의 핵심 + 미시적 기초<br><br>스티글리츠, 크루그먼<br>비대칭정보이론, 메뉴비용이론<br><i>미시적 기초, 시장 불완전성</i>"]
NeoSynthesis["신고전주의 종합<br>(1950~1970년)<br><br><b>등장배경:</b><br>케인즈주의 주류화<br>거시(케인즈)와 미시(신고전) 통합<br><br>솔로우, 새뮤얼슨<br>IS-LM모형, 성장이론<br><i>케인즈 + 신고전 통합 시도</i>"]
GameTheory["게임이론<br>(1950~현재)<br><br><b>등장배경:</b><br>냉전, 과점 경쟁<br>상호의존적 의사결정 분석 필요<br><br>존 내쉬, 토마스 셸링<br>내쉬균형, 죄수의 딜레마<br><i>전략적 상호작용 분석</i>"]
Development["발전경제학<br>(1950~현재)<br><br><b>등장배경:</b><br>식민지 독립, 저개발국 발전 과제<br>경제 성장 전략 및 정책 연구<br><br>아마티아 센, 대런 애쓰모글루<br>역량접근법, 제도와 성장<br><i>저개발국 빈곤 문제 해결</i>"]
Environmental["환경경제학<br>(1960~현재)<br><br><b>등장배경:</b><br>환경오염, 자원고갈 심화<br>경제성장과 환경보존 조화 모색<br><br>로널드 코스, 윌리엄 노드하우스<br>외부성, 탄소세<br><i>환경문제 경제학적 접근</i>"]
Information["정보경제학<br>(1970~현재)<br><br><b>등장배경:</b><br>정보 불균형 현실 인식<br>정보가 시장과 의사결정에 미치는 영향 분석<br><br>조지 애컬로프, 조셉 스티글리츠<br>비대칭정보, 역선택<br><i>정보 비대칭의 영향 분석</i>"]
Digital["디지털경제학<br>(1990~현재)<br><br><b>등장배경:</b><br>인터넷, 디지털 기술 발전<br>새로운 경제 현상 분석 필요<br><br>칼 샤피로, 홀 베리언<br>네트워크효과, 플랫폼경제<br><i>디지털 기술의 경제적 영향</i>"]
PublicChoice["공공선택이론<br>(1960~현재)<br><br><b>등장배경:</b><br>정부개입 비효율성 발생<br>'정부 실패' 가능성 설명<br><br>제임스 뷰캐넌, 고든 털럭<br>지대추구, 투표역설<br><i>정치현상 경제학적 분석</i>"]
ComplexityEcon["복잡성 경제학<br>(1990~현재)<br><br><b>등장배경:</b><br>전통 모델의 현실 설명 한계<br>복잡계 이론 도입, 시스템 진화 연구<br><br>브라이언 아서, 도인 파머<br>복잡적응시스템, 자기강화<br><i>경제는 복잡적응시스템</i>"]
EvolutionaryEcon["진화 경제학<br>(1980~현재)<br><br><b>등장배경:</b><br>신고전학파 한계, 기술혁신 중요성<br>경제 동태적 변화, 복잡성 설명 시도<br><br>슘페터(영향), 넬슨, 윈터<br>창조적 파괴, 혁신, 경로의존성<br><i>경제는 진화하는 시스템</i>"]
SystemsEcon["시스템 경제학<br>(1970~현재)<br><br><b>등장배경:</b><br>컴퓨터 발전, 복잡계 모델링<br>전통 경제학의 환원주의 비판<br><br>볼딩, 포레스터, 사이먼<br>피드백 루프, 비선형 동학<br><i>경제는 복잡 동적 시스템</i>"]

Ancient --> Classical
Mercantil --> Classical
Classical --> Marxist
Classical --> Neoclassical
Classical --> Austrian
Neoclassical --> Keynesian
Marxist --> Institutional
Austrian --> Chicago
Neoclassical --> Chicago
Keynesian --> Behavioral
Institutional --> Behavioral
Keynesian --> NewKeynesian
Behavioral --> NewKeynesian
Chicago --> NeoSynthesis
Behavioral --> NeoSynthesis
NeoSynthesis --> GameTheory
NewKeynesian --> GameTheory
NeoSynthesis --> Development
Institutional --> Development
NeoSynthesis --> Environmental
Chicago --> Environmental
NewKeynesian --> Information
Information --> Digital
GameTheory --> Digital
Environmental --> Digital
Chicago --> PublicChoice
Austrian --> PublicChoice
GameTheory --> ComplexityEcon
Information --> ComplexityEcon
Digital --> ComplexityEcon
Institutional --> EvolutionaryEcon
Austrian --> EvolutionaryEcon
EvolutionaryEcon --> ComplexityEcon
ComplexityEcon --> SystemsEcon
GameTheory --> SystemsEcon
Information --> SystemsEcon
Behavioral --> EvolutionaryEcon

Ancient:::ancient
Mercantil:::ancient
Classical:::classical
Marxist:::marxist
Neoclassical:::neoclassical
Austrian:::austrian
Keynesian:::keynesian
Institutional:::institutional
Chicago:::chicago
Behavioral:::behavioral
NewKeynesian:::keynesian
NeoSynthesis:::neoclassical
GameTheory:::gametheory
Development:::development
Environmental:::environmental
Information:::information
Digital:::digital
PublicChoice:::chicago
ComplexityEcon:::modern
EvolutionaryEcon:::evolutionary
SystemsEcon:::systems

subgraph 경제학의 가계도
end

subgraph "고대·중세 전통" 
  Ancient
  Mercantil
end

subgraph "고전학파 세대" 
  Classical
end

subgraph "신고전·마르크스·오스트리아 세대"
  Neoclassical
  Marxist
  Austrian
end

subgraph "케인즈·제도·시카고 세대"
  Keynesian
  Institutional
  Chicago
end

subgraph "행동·신종합·신케인즈 세대"
  Behavioral
  NeoSynthesis
  NewKeynesian
end

subgraph "현대 경제학"
  GameTheory
  Development
  Environmental
  Information
  Digital
  PublicChoice
  ComplexityEcon
  EvolutionaryEcon
  SystemsEcon
end
`;

const EconomicFamilyTreeDiagram = () => {
  return (
    <div className="my-8 rounded-lg shadow-lg bg-gray-50">
      <MermaidRenderer chartDefinition={chartDefinition} />
    </div>
  );
};

export default EconomicFamilyTreeDiagram;
