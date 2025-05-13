"use client";

import { useEffect } from "react";

const EconomicFamilyTreeDiagram = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Helper function to initialize Mermaid with new configuration
      const initializeMermaid = () => {
        if (window.mermaid) {
          window.mermaid.initialize({
            startOnLoad: true,
            theme: "base", // Changed from "default" to "base"
            securityLevel: "loose",
            flowchart: {
              // Added for subgraph styling
              clusterBkg: "#ffffff", // White background for subgraphs
              clusterBorder: "#bbbbbb", // Light grey border for subgraphs
            },
          });
          window.mermaid.init(undefined, document.querySelectorAll(".mermaid"));
        }
      };

      if (!window.mermaid) {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js";
        script.async = true;
        script.onload = initializeMermaid; // Use the helper function
        document.body.appendChild(script);
      } else {
        initializeMermaid(); // Use the helper function
      }
    }
  }, []);

  return (
    <div className="my-8 p-6 rounded-lg shadow-lg bg-gray-50">
      <div className="mermaid">
        {`flowchart TD

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
classDef happiness fill:#fffde7,stroke:#ffee58,stroke-width:2px


Ancient["고대 및 중세 경제사상<br>(BC 350~1500년)<br>아리스토텔레스, 토마스 아퀴나스<br>공정가격론, 자연법<br><i>'공정한 가격이 있어요'</i>"]
Mercantil["중상주의<br>(1500~1700년)<br>토마스 먼, 콜베르<br>무역차액설, 금은보유론<br><i>'금이랑 은이 많아야 국가가 부자예요'</i>"]
Classical["고전학파<br>(1776~1870년)<br>애덤 스미스, 데이비드 리카도<br>보이지 않는 손, 비교우위론<br><i>'보이지 않는 손, 각자 이기심대로 해도 알아서 잘 돌아가요'</i>"]
Marxist["마르크스주의<br>(1848~1917년)<br>카를 마르크스, 프리드리히 엥겔스<br>잉여가치론, 역사적 유물론<br><i>'자본가들이 노동자들 돈 뺏어가요'</i>"]
Neoclassical["신고전학파<br>(1870~1930년)<br>알프레드 마셜, 레온 왈라스<br>한계효용이론, 일반균형이론<br><i>'사람들은 가장 행복한 선택을 해요'</i>"]
Austrian["오스트리아학파<br>(1870~현재)<br>멩거, 하이에크, 미제스<br>주관적 가치론, 경기변동이론<br><i>'정부는 경제에 손대지 마세요'</i>"]
Keynesian["케인즈주의<br>(1936~1970년)<br>존 메이너드 케인즈<br>유효수요이론, 승수효과<br><i>'불황 때는 정부가 돈 많이 써야 해요'</i>"]
Institutional["제도주의<br>(1899~현재)<br>베블런, 코먼스, 미첼<br>제도변화론, 거래비용이론<br><i>'규칙과 관습이 경제를 만들어요'</i>"]
Chicago["시카고학파/통화주의<br>(1950~1990년)<br>밀턴 프리드먼<br>통화량이론, 자연실업률<br><i>'돈의 양이 중요해요, 너무 많이 찍으면 안돼요'</i>"]
Behavioral["행동경제학<br>(1979~현재)<br>카너먼, 탈러<br>전망이론, 프레이밍효과<br><i>'사람들은 생각보다 똑똑하지 않아요'</i>"]
NewKeynesian["신케인즈주의<br>(1980~현재)<br>스티글리츠, 크루그먼<br>비대칭정보이론, 메뉴비용이론<br><i>'시장도 좋지만 가끔 정부 도움이 필요해요'</i>"]
NeoSynthesis["신고전주의 종합<br>(1950~1970년)<br>솔로우, 새뮤얼슨<br>IS-LM모형, 성장이론<br><i>'여러 이론을 다 합쳐봤어요'</i>"]

%% 현대 경제학 분야들을 개별 노드로 분리
GameTheory["게임이론<br>(1950~현재)<br>존 내쉬, 토마스 셸링<br>내쉬균형, 죄수의 딜레마<br><i>'다른 사람의 선택도 중요해요'</i>"]
Development["발전경제학<br>(1950~현재)<br>아마티아 센, 대니 로드릭<br>역량접근법, 산업정책<br><i>'가난한 나라가 잘 살게 하는 방법이 있어요'</i>"]
Environmental["환경경제학<br>(1960~현재)<br>로널드 코스, 윌리엄 노드하우스<br>외부성, 탄소세<br><i>'환경도 경제에서 중요해요'</i>"]
Happiness["행복경제학<br>(1970~현재)<br>리처드 이스털린, 브루노 프레이<br>이스털린 역설, 행복지수<br><i>'돈이 많다고 꼭 행복한 건 아니에요'</i>"]
Information["정보경제학<br>(1970~현재)<br>조지 애컬로프, 조셉 스티글리츠<br>비대칭정보, 역선택<br><i>'정보가 누구에게 있는지가 중요해요'</i>"]
Digital["디지털경제학<br>(1990~현재)<br>칼 샤피로, 홀 베리언<br>네트워크효과, 플랫폼경제<br><i>'디지털 세상은 다른 경제 규칙이 있어요'</i>"]
PublicChoice["공공선택이론<br>(1960~현재)<br>제임스 뷰캐넌, 고든 털럭<br>지대추구, 투표역설<br><i>'정치인과 관료도 자기 이익을 추구해요'</i>"]
ComplexityEcon["복잡성 경제학<br>(1990~현재)<br>브라이언 아서, 도이네 파머<br>복잡적응시스템, 자기강화<br><i>'경제는 복잡하고 끊임없이 진화해요'</i>"]


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

%% 현대 경제학 분야들과의 연결
NeoSynthesis --> GameTheory
NewKeynesian --> GameTheory

NeoSynthesis --> Development
Institutional --> Development

NeoSynthesis --> Environmental
Chicago --> Environmental

Behavioral --> Happiness
Institutional --> Happiness

NewKeynesian --> Information
Chicago --> Information

Information --> Digital
GameTheory --> Digital
Environmental --> Digital

Chicago --> PublicChoice
Austrian --> PublicChoice


GameTheory --> ComplexityEcon
Information --> ComplexityEcon
Digital --> ComplexityEcon


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
Happiness:::happiness
Information:::information
Digital:::digital
PublicChoice:::chicago
%% FeministEcon class removed
ComplexityEcon:::modern


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
  Happiness
  Information
  Digital
  PublicChoice
  ComplexityEcon 
end
`}
      </div>
    </div>
  );
};

export default EconomicFamilyTreeDiagram;
