// filepath: /Users/will_ryu/workspace/hohyon-ryu/hohyon/src/components/teaching/DigitalFutureEconomics/EconomicFamilyTree.js
import styled from "@emotion/styled";
import { useEffect } from "react";

const Highlight = styled.span`
  background-color: #fff8e1;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-weight: 500;
`;

const EconomicTermCard = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
  }

  h4 {
    margin: 0 0 1rem 0;
    color: #0070f3;
    font-size: 1.2rem;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 0.5rem;
  }

  p {
    margin: 0.5rem 0;
    line-height: 1.6;
  }
`;

const MermaidDiagram = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: auto;
`;

const SectionContent = styled.div`
  margin-bottom: 2rem;
`;

// 경제학의 가계도 컴포넌트
const EconomicFamilyTree = () => {
  useEffect(() => {
    if (!window.mermaid) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js";
      script.async = true;
      script.onload = () => {
        if (window.mermaid) {
          window.mermaid.initialize({
            startOnLoad: true,
            theme: "default",
            securityLevel: "loose",
          });
          window.mermaid.init(undefined, document.querySelectorAll(".mermaid"));
        }
      };
      document.body.appendChild(script);
    } else {
      window.mermaid.initialize({
        startOnLoad: true,
        theme: "default",
        securityLevel: "loose",
      });
      window.mermaid.init(undefined, document.querySelectorAll(".mermaid"));
    }
  }, []);

  return (
    <SectionContent>
      <h3>경제학의 가계도</h3>
      <p>
        경제학은 다양한 사조와 학파들이 시대적 흐름에 따라 발전해왔습니다. 아래
        다이어그램은 고대부터 현대까지 주요 경제학파들의 발전과 상호 관계를
        보여줍니다.
      </p>
      <MermaidDiagram>
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
  classDef environmental fill:#e8f5e9,stroke:#43a047,stroke-width:2px
  classDef digital fill:#f3e5f5,stroke:#8e24aa,stroke-width:2px
  classDef development fill:#fff3e0,stroke:#fb8c00,stroke-width:2px
  classDef information fill:#e0f7fa,stroke:#00acc1,stroke-width:2px
  

  Ancient["고대 및 중세 경제사상<br>(BC 350~1500년)<br>아리스토텔레스, 토마스 아퀴나스<br>이론: 공정가격론, 자연법<br><i>'공정한 가격이 있어요'</i>"]
  Mercantil["중상주의<br>(1500~1700년)<br>토마스 먼, 콜베르<br>이론: 무역차액설, 금은보유론<br><i>'금이랑 은이 많아야 국가가 부자예요'</i>"]
  Classical["고전학파<br>(1776~1870년)<br>애덤 스미스, 데이비드 리카도<br>이론: 보이지 않는 손, 비교우위론<br><i>'보이지 않는 손, 각자 이기심대로 해도 알아서 잘 돌아가요'</i>"]
  Marxist["마르크스주의<br>(1848~1917년)<br>카를 마르크스, 프리드리히 엥겔스<br>이론: 잉여가치론, 역사적 유물론<br><i>'자본가들이 노동자들 돈 뺏어가요'</i>"]
  Neoclassical["신고전학파<br>(1870~1930년)<br>알프레드 마셜, 레온 왈라스<br>이론: 한계효용이론, 일반균형이론<br><i>'사람들은 가장 행복한 선택을 해요'</i>"]
  Austrian["오스트리아학파<br>(1870~현재)<br>멩거, 하이에크, 미제스<br>이론: 주관적 가치론, 경기변동이론<br><i>'정부는 경제에 손대지 마세요'</i>"]
  Keynesian["케인즈주의<br>(1936~1970년)<br>존 메이너드 케인즈<br>이론: 유효수요이론, 승수효과<br><i>'불황 때는 정부가 돈 많이 써야 해요'</i>"]
  Institutional["제도주의<br>(1899~현재)<br>베블런, 코먼스, 미첼<br>이론: 제도변화론, 거래비용이론<br><i>'규칙과 관습이 경제를 만들어요'</i>"]
  Chicago["시카고학파/통화주의<br>(1950~1990년)<br>밀턴 프리드먼<br>이론: 통화량이론, 자연실업률<br><i>'돈의 양이 중요해요, 너무 많이 찍으면 안돼요'</i>"]
  Behavioral["행동경제학<br>(1979~현재)<br>카너먼, 탈러<br>이론: 전망이론, 프레이밍효과<br><i>'사람들은 생각보다 똑똑하지 않아요'</i>"]
  NewKeynesian["신케인즈주의<br>(1980~현재)<br>스티글리츠, 크루그먼<br>이론: 비대칭정보이론, 메뉴비용이론<br><i>'시장도 좋지만 가끔 정부 도움이 필요해요'</i>"]
  NeoSynthesis["신고전주의 종합<br>(1950~1970년)<br>솔로우, 새뮤얼슨<br>이론: IS-LM모형, 성장이론<br><i>'여러 이론을 다 합쳐봤어요'</i>"]
  
  %% 현대 경제학 분야들을 개별 노드로 분리
  GameTheory["게임이론<br>(1950~현재)<br>존 내쉬, 토마스 셸링<br>이론: 내쉬균형, 죄수의 딜레마<br><i>'다른 사람의 선택도 중요해요'</i>"]
  Development["발전경제학<br>(1950~현재)<br>아마티아 센, 대니 로드릭<br>이론: 역량접근법, 산업정책<br><i>'가난한 나라가 잘 살게 하는 방법이 있어요'</i>"]
  Environmental["환경경제학<br>(1960~현재)<br>로널드 코스, 윌리엄 노드하우스<br>이론: 외부성, 탄소세<br><i>'환경도 경제에서 중요해요'</i>"]
  Happiness["행복경제학<br>(1970~현재)<br>리처드 이스털린, 브루노 프레이<br>이론: 이스털린 역설, 행복지수<br><i>'돈이 많다고 꼭 행복한 건 아니에요'</i>"]
  Information["정보경제학<br>(1970~현재)<br>조지 애컬로프, 조셉 스티글리츠<br>이론: 비대칭정보, 역선택<br><i>'정보가 누구에게 있는지가 중요해요'</i>"]
  Digital["디지털경제학<br>(1990~현재)<br>칼 샤피로, 홀 베리언<br>이론: 네트워크효과, 플랫폼경제<br><i>'디지털 세상은 다른 경제 규칙이 있어요'</i>"]
  

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
  Happiness:::behavioral
  Information:::information
  Digital:::digital
  

  subgraph 경제학의 가계도
  end`}
        </div>
      </MermaidDiagram>
      <p>
        위 다이어그램은 경제학의 주요 학파들의 발전 과정을 보여줍니다.
        고전학파에서 시작하여 마르크스주의, 신고전학파, 오스트리아학파 등 다양한
        분파로 갈라지고, 이후 새로운 종합과 현대 경제학의 다양한 분야로 발전해
        온 과정을 확인할 수 있습니다.
      </p>

      <div className="economic-school-details">
        <h3>주요 경제학파 상세 설명</h3>
        <p>
          각 경제학파의 활동 시기, 주요 이론과 쉬운 설명을 통해 경제학의 발전
          과정을 살펴봅시다.
        </p>

        <EconomicTermCard>
          <h4>고대 및 중세 경제사상 (BC 350~1500년)</h4>
          <p>
            <Highlight>
              물건에는 정당한 가격이 있어요. 너무 비싸게 팔면 나쁜 일이에요.
              돈을 빌려주고 이자 받는 것도 좋지 않아요.
            </Highlight>
          </p>
          <p>
            <strong>주요 인물:</strong> 아리스토텔레스, 토마스 아퀴나스, 이븐
            할둔
          </p>
          <p>
            <strong>주요 이론:</strong>
          </p>
          <ul>
            <li>
              <strong>공정가격론:</strong> 모든 상품과 서비스에는 도덕적으로
              적절한 가격이 있다는 이론
            </li>
            <li>
              <strong>고리대금 금지:</strong> 돈을 빌려주고 이자를 받는 것은
              부도덕하다는 견해
            </li>
            <li>
              <strong>자연법:</strong> 신이 만든 자연 질서에 따라 경제도
              운영되어야 한다는 사상
            </li>
            <li>
              <strong>경제 윤리:</strong> 경제 활동에 도덕적 판단이 적용되어야
              함
            </li>
          </ul>
        </EconomicTermCard>

        <EconomicTermCard>
          <h4>중상주의 (1500~1700년)</h4>
          <p>
            <Highlight>
              나라가 부자가 되려면 금과 은을 많이 모아야 해요. 물건을 많이 팔고
              적게 사면 금이 들어와요. 다른 나라에서 싼 물건이 들어오지 못하게
              막아야 해요.
            </Highlight>
          </p>
          <p>
            <strong>주요 인물:</strong> 토마스 먼, 장-바티스트 콜베르, 안토니오
            세라
          </p>
          <p>
            <strong>주요 이론:</strong>
          </p>
          <ul>
            <li>
              <strong>무역차액설:</strong> 국가 부의 원천은 금과 은의
              보유량이며, 수출이 수입보다 많아야 한다는 이론
            </li>
            <li>
              <strong>보호무역주의:</strong> 자국 산업 보호를 위한 관세와 무역
              규제 정책
            </li>
            <li>
              <strong>식민지 개발:</strong> 원자재 공급과 수출시장 확보를 위한
              식민지 확장
            </li>
            <li>
              <strong>국가 개입:</strong> 경제 발전을 위한 국가의 적극적인 역할
              강조
            </li>
          </ul>
        </EconomicTermCard>

        <EconomicTermCard>
          <h4>고전학파 (1776~1870년)</h4>
          <p>
            <Highlight>
              각자 자기 좋을 대로 하면 사회 전체가 알아서 잘 돌아가요. 정부는
              너무 참견하지 마세요.
            </Highlight>
          </p>
          <p>
            <strong>주요 인물:</strong> 애덤 스미스, 데이비드 리카도, 토마스
            맬서스, 존 스튜어트 밀
          </p>
          <p>
            <strong>주요 이론:</strong>
          </p>
          <ul>
            <li>
              <strong>보이지 않는 손(Invisible Hand):</strong> 시장이 자율적으로
              균형을 이룬다는 이론
            </li>
            <li>
              <strong>비교우위론(Comparative Advantage):</strong> 상대적으로
              효율적인 생산에 집중해야 한다는 무역 이론
            </li>
            <li>
              <strong>자유방임주의(Laissez-faire):</strong> 정부 개입 없는 자유
              시장 옹호
            </li>
            <li>
              <strong>가치론:</strong> 노동가치설에 기반한 가격 결정 이론
            </li>
          </ul>
        </EconomicTermCard>

        <EconomicTermCard>
          <h4>마르크스주의 (1848~1917년)</h4>
          <p>
            <Highlight>
              부자들이 노동자들이 만든 돈을 너무 많이 가져가서 문제예요. 모두가
              공평하게 나눠야 해요.
            </Highlight>
          </p>
          <p>
            <strong>주요 인물:</strong> 카를 마르크스, 프리드리히 엥겔스
          </p>
          <p>
            <strong>주요 이론:</strong>
          </p>
          <ul>
            <li>
              <strong>잉여가치론:</strong> 노동자가 창출한 가치의 일부를
              자본가가 착취한다는 이론
            </li>
            <li>
              <strong>역사적 유물론:</strong> 경제적 관계가 역사와 사회 변화를
              결정한다는 견해
            </li>
            <li>
              <strong>계급투쟁:</strong> 자본가와 노동자 간의 갈등이 사회 변화의
              원동력
            </li>
            <li>
              <strong>공산주의:</strong> 생산수단의 공동 소유와 계급 없는 사회를
              지향
            </li>
          </ul>
        </EconomicTermCard>

        <EconomicTermCard>
          <h4>신고전학파 (1870~1930년)</h4>
          <p>
            <Highlight>
              사람들은 가장 행복해지는 방법을 잘 알고 있어요. 모두가 똑똑하게
              선택하면 경제가 잘 돌아가요.
            </Highlight>
          </p>
          <p>
            <strong>주요 인물:</strong> 알프레드 마셜, 레온 왈라스, 칼 멩거,
            윌리엄 제번스
          </p>
          <p>
            <strong>주요 이론:</strong>
          </p>
          <ul>
            <li>
              <strong>한계효용이론:</strong> 추가적인 한 단위의 소비에서 오는
              만족도에 기반한 가치 이론
            </li>
            <li>
              <strong>일반균형이론:</strong> 모든 시장이 동시에 균형을 이루는
              상태에 대한 분석
            </li>
            <li>
              <strong>수요공급 모형:</strong> 가격 결정 메커니즘에 대한 체계적
              설명
            </li>
            <li>
              <strong>효용 극대화:</strong> 소비자는 제한된 자원으로 효용을
              최대화하려 한다는 이론
            </li>
          </ul>
        </EconomicTermCard>

        <EconomicTermCard>
          <h4>케인즈주의 (1936~1970년)</h4>
          <p>
            <Highlight>
              경제가 어려울 때는 정부가 돈을 많이 써서 일자리를 만들어야 해요.
              모두가 돈을 안 쓰면 더 어려워져요.
            </Highlight>
          </p>
          <p>
            <strong>주요 인물:</strong> 존 메이너드 케인즈, 폴 새뮤얼슨, 존
            히크스
          </p>
          <p>
            <strong>주요 이론:</strong>
          </p>
          <ul>
            <li>
              <strong>유효수요 이론:</strong> 총수요가 경제 성장과 고용의 핵심
              요소
            </li>
            <li>
              <strong>승수효과:</strong> 정부 지출이 경제에 미치는 확대 효과
            </li>
            <li>
              <strong>유동성 함정:</strong> 금리가 매우 낮을 때 통화정책의
              효과가 제한됨
            </li>
            <li>
              <strong>정부 개입:</strong> 경기 침체 시 정부의 적극적 재정 정책
              필요성 주장
            </li>
          </ul>
        </EconomicTermCard>

        <EconomicTermCard>
          <h4>오스트리아학파 (1870~현재)</h4>
          <p>
            <Highlight>
              정부와 은행이 경제에 너무 참견하면 오히려 문제가 생겨요. 사람들이
              자유롭게 거래하게 두세요.
            </Highlight>
          </p>
          <p>
            <strong>주요 인물:</strong> 칼 멩거, 루트비히 폰 미제스, 프리드리히
            하이에크
          </p>
          <p>
            <strong>주요 이론:</strong>
          </p>
          <ul>
            <li>
              <strong>방법론적 개인주의:</strong> 모든 경제 현상은 개인의
              행동에서 비롯됨
            </li>
            <li>
              <strong>주관적 가치론:</strong> 가치는 객관적이 아닌 주관적인 것
            </li>
            <li>
              <strong>경기변동이론:</strong> 중앙은행의 통화 개입이 경기변동을
              일으킴
            </li>
            <li>
              <strong>자생적 질서:</strong> 사회 제도는 자연적으로 발생하고
              진화한다는 관점
            </li>
          </ul>
        </EconomicTermCard>

        <EconomicTermCard>
          <h4>제도주의 (1899~현재)</h4>
          <p>
            <Highlight>
              사람들이 경제 활동을 할 때는 법률, 습관, 문화 같은 '규칙'이
              중요해요. 사람들은 가끔 필요 없는 물건도 남에게 보이려고 사기도
              해요.
            </Highlight>
          </p>
          <p>
            <strong>주요 인물:</strong> 소스타인 베블런, 존 R. 코먼스, 웨슬리
            미첼
          </p>
          <p>
            <strong>주요 이론:</strong>
          </p>
          <ul>
            <li>
              <strong>제도의 중요성:</strong> 사회적 관습, 규칙, 규범이 경제
              행동을 형성한다는 이론
            </li>
            <li>
              <strong>과시적 소비:</strong> 사회적 지위를 위해 필요 이상으로
              소비하는 행동 분석
            </li>
            <li>
              <strong>거래비용이론:</strong> 경제 활동에는 정보 수집, 계약 체결
              등의 비용이 수반됨
            </li>
            <li>
              <strong>진화론적 접근:</strong> 경제는 정적 균형이 아닌 계속
              변화하는 진화 과정
            </li>
          </ul>
        </EconomicTermCard>

        <EconomicTermCard>
          <h4>시카고학파/통화주의 (1950~1990년)</h4>
          <p>
            <Highlight>
              돈을 너무 많이 찍으면 물건 값만 올라요. 정부는 돈의 양만 잘
              조절하고 다른 것은 시장에 맡겨요.
            </Highlight>
          </p>
          <p>
            <strong>주요 인물:</strong> 밀턴 프리드먼, 조지 스티글러, 게리 베커
          </p>
          <p>
            <strong>주요 이론:</strong>
          </p>
          <ul>
            <li>
              <strong>통화량 이론:</strong> 물가는 통화량에 직접적으로 영향받음
            </li>
            <li>
              <strong>자연실업률:</strong> 경제가 장기적으로 회귀하는 실업률
              수준
            </li>
            <li>
              <strong>합리적 기대:</strong> 경제 주체들은 합리적으로 미래를
              예측함
            </li>
            <li>
              <strong>규제 완화:</strong> 시장 자율성과 경쟁을 저해하는 규제
              비판
            </li>
          </ul>
        </EconomicTermCard>

        <EconomicTermCard>
          <h4>행동경제학 (1979~현재)</h4>
          <p>
            <Highlight>
              사람들은 생각보다 실수를 많이 해요. 좋은 선택을 하도록 살짝
              도와주면 더 행복해질 수 있어요.
            </Highlight>
          </p>
          <p>
            <strong>주요 인물:</strong> 대니얼 카너먼, 리처드 탈러, 아모스
            트버스키
          </p>
          <p>
            <strong>주요 이론:</strong>
          </p>
          <ul>
            <li>
              <strong>제한된 합리성:</strong> 인간의 의사결정은 완전히
              합리적이지 않음
            </li>
            <li>
              <strong>프레이밍 효과:</strong> 같은 정보도 제시 방식에 따라 다른
              결정을 내림
            </li>
            <li>
              <strong>손실회피:</strong> 사람들은 이득보다 손실에 더 민감하게
              반응
            </li>
            <li>
              <strong>넛지(Nudge):</strong> 강제 없이 더 나은 선택으로 유도하는
              방법론
            </li>
          </ul>
        </EconomicTermCard>

        <EconomicTermCard>
          <h4>신케인즈주의 (1980~현재)</h4>
          <p>
            <Highlight>
              시장이 항상 완벽하지는 않아요. 정보가 불공평하게 퍼져 있고, 가격이
              쉽게 바뀌지 않아요. 그래서 가끔은 정부가 도와야 해요.
            </Highlight>
          </p>
          <p>
            <strong>주요 인물:</strong> 조셉 스티글리츠, 폴 크루그먼, 그레고리
            맨큐
          </p>
          <p>
            <strong>주요 이론:</strong>
          </p>
          <ul>
            <li>
              <strong>비대칭 정보:</strong> 경제 주체들 간 정보 불균형이 시장
              실패를 초래함
            </li>
            <li>
              <strong>가격 경직성:</strong> 가격이 즉각적으로 조정되지 않아 시장
              불균형 발생
            </li>
            <li>
              <strong>메뉴비용:</strong> 가격 변경에 따른 비용이 가격 조정을
              방해함
            </li>
            <li>
              <strong>미시적 기초:</strong> 케인즈의 거시경제 이론에
              미시경제학적 기초 제공
            </li>
          </ul>
        </EconomicTermCard>

        <EconomicTermCard>
          <h4>신고전주의 종합 (1950~1970년)</h4>
          <p>
            <Highlight>
              여러 경제학 이론들에서 좋은 부분만 모아봤어요. 짧은 기간에는
              정부가 경제를 도울 수 있지만, 긴 시간으로 보면 시장이 스스로
              균형을 찾아요.
            </Highlight>
          </p>
          <p>
            <strong>주요 인물:</strong> 폴 새뮤얼슨, 로버트 솔로우, 존 히크스
          </p>
          <p>
            <strong>주요 이론:</strong>
          </p>
          <ul>
            <li>
              <strong>IS-LM 모형:</strong> 상품시장과 화폐시장의 균형을 동시에
              분석하는 모형
            </li>
            <li>
              <strong>신고전파 성장이론:</strong> 자본축적과 기술진보가
              경제성장의 원동력이라는 이론
            </li>
            <li>
              <strong>케인즈-고전파 종합:</strong> 단기에는 케인즈 이론,
              장기에는 고전파 이론 적용
            </li>
            <li>
              <strong>필립스 곡선:</strong> 인플레이션과 실업률 간의 상충관계
              분석
            </li>
          </ul>
        </EconomicTermCard>

        <EconomicTermCard>
          <h4>게임이론 (1950~현재)</h4>
          <p>
            <Highlight>
              경제에서는 내 선택이 다른 사람의 선택에 영향을 받아요. 모두가 자기
              이익만 따르면 오히려 모두가 손해 볼 수 있어요. 협력하는 게 때로는
              더 좋아요.
            </Highlight>
          </p>
          <p>
            <strong>주요 인물:</strong> 존 내쉬, 토마스 셸링, 로버트 악셀로드
          </p>
          <p>
            <strong>주요 이론:</strong>
          </p>
          <ul>
            <li>
              <strong>내쉬 균형:</strong> 모든 참여자가 다른 사람의 선택을
              고려한 최적 전략을 택하는 상태
            </li>
            <li>
              <strong>죄수의 딜레마:</strong> 개인의 합리적 선택이 전체 이익
              극대화에 반하는 상황
            </li>
            <li>
              <strong>진화게임이론:</strong> 시간이 지남에 따라 전략이 어떻게
              진화하는지 분석
            </li>
            <li>
              <strong>협조와 비협조 게임:</strong> 참여자 간 합의 가능 여부에
              따른 게임 유형 구분
            </li>
          </ul>
        </EconomicTermCard>

        <EconomicTermCard>
          <h4>발전경제학 (1950~현재)</h4>
          <p>
            <Highlight>
              가난한 나라가 잘 살게 되려면 특별한 방법이 필요해요. 돈만 많이
              버는 게 아니라, 교육과 건강도 중요하고, 사람들이 자유롭게 선택할
              수 있어야 해요.
            </Highlight>
          </p>
          <p>
            <strong>주요 인물:</strong> 아마티아 센, 대니 로드릭, 하인리히 라오
          </p>
          <p>
            <strong>주요 이론:</strong>
          </p>
          <ul>
            <li>
              <strong>역량접근법:</strong> 발전은 소득 증가뿐 아니라 개인의
              자유와 역량 확대를 의미
            </li>
            <li>
              <strong>구조변화 이론:</strong> 경제발전은 농업에서 산업,
              서비스로의 구조적 변화 과정
            </li>
            <li>
              <strong>인적자본:</strong> 교육과 건강에 대한 투자가 발전의 핵심
            </li>
            <li>
              <strong>산업정책:</strong> 특정 산업 육성을 통한 경제발전 전략
            </li>
          </ul>
        </EconomicTermCard>

        <EconomicTermCard>
          <h4>환경경제학 (1960~현재)</h4>
          <p>
            <Highlight>
              공장에서 물건을 만들면 연기가 나와 공기가 더러워져요. 이런 나쁜
              영향도 경제에서 계산해야 해요. 지구도 지키면서 경제도 발전시킬
              방법을 찾아요.
            </Highlight>
          </p>
          <p>
            <strong>주요 인물:</strong> 로널드 코스, 윌리엄 노드하우스, 니콜라스
            스턴
          </p>
          <p>
            <strong>주요 이론:</strong>
          </p>
          <ul>
            <li>
              <strong>외부성:</strong> 경제활동이 제3자나 환경에 미치는
              긍정적/부정적 영향
            </li>
            <li>
              <strong>코스 정리:</strong> 재산권이 명확하면 시장이 외부효과
              문제를 해결할 수 있다는 이론
            </li>
            <li>
              <strong>피구세:</strong> 오염 등 외부 비용을 내부화하기 위한 세금
            </li>
            <li>
              <strong>지속가능한 발전:</strong> 환경을 보전하면서 경제발전을
              추구하는 방식
            </li>
          </ul>
        </EconomicTermCard>

        <EconomicTermCard>
          <h4>행복경제학 (1970~현재)</h4>
          <p>
            <Highlight>
              돈이 많다고 꼭 행복한 건 아니에요. 어느 정도 필요한 것이 있으면,
              그 이상의 돈보다는 친구, 가족, 건강, 자유 같은 것이 행복에 더
              중요해요.
            </Highlight>
          </p>
          <p>
            <strong>주요 인물:</strong> 리처드 이스털린, 브루노 프레이, 캐럴
            그레이엄
          </p>
          <p>
            <strong>주요 이론:</strong>
          </p>
          <ul>
            <li>
              <strong>이스털린 역설:</strong> 일정 수준 이상의 소득은 행복을
              크게 증가시키지 않는다는 발견
            </li>
            <li>
              <strong>주관적 웰빙:</strong> 객관적 지표보다 주관적 행복감이
              중요하다는 관점
            </li>
            <li>
              <strong>행복지수:</strong> GDP 외에 행복과 삶의 질을 측정하는
              대안적 지표
            </li>
            <li>
              <strong>적응이론:</strong> 인간은 좋은 상황과 나쁜 상황 모두에
              적응한다는 이론
            </li>
          </ul>
        </EconomicTermCard>

        <EconomicTermCard>
          <h4>정보경제학 (1970~현재)</h4>
          <p>
            <Highlight>
              물건을 사고팔 때 파는 사람이 살 사람보다 더 많은 정보를 가지고
              있으면 문제가 생길 수 있어요. 예를 들어 중고차를 살 때 그 차의
              문제를 모르면 속을 수 있어요.
            </Highlight>
          </p>
          <p>
            <strong>주요 인물:</strong> 조지 애컬로프, 조셉 스티글리츠, 마이클
            스펜스
          </p>
          <p>
            <strong>주요 이론:</strong>
          </p>
          <ul>
            <li>
              <strong>비대칭 정보:</strong> 거래 당사자들이 가진 정보의 불균형
              상태
            </li>
            <li>
              <strong>역선택:</strong> 정보 불균형으로 인해 나쁜 상품이 시장을
              지배하는 현상
            </li>
            <li>
              <strong>도덕적 해이:</strong> 위험에서 보호받는 상황에서 더 위험한
              행동을 취하는 경향
            </li>
            <li>
              <strong>신호이론:</strong> 정보를 가진 측이 자신의 특성을 알리기
              위한 신호 전달 행위
            </li>
          </ul>
        </EconomicTermCard>

        <EconomicTermCard>
          <h4>디지털경제학 (1990~현재)</h4>
          <p>
            <Highlight>
              디지털 세상에서는 물건을 한 번 만들면 복제하는 비용이 거의 들지
              않아요. 또 많은 사람이 같이 쓸수록 더 가치가 커지는 서비스들이
              있어요. SNS나 메신저 같은 것들이 그래요.
            </Highlight>
          </p>
          <p>
            <strong>주요 인물:</strong> 칼 샤피로, 홀 베리언, 에릭 브린욜프슨
          </p>
          <p>
            <strong>주요 이론:</strong>
          </p>
          <ul>
            <li>
              <strong>네트워크 효과:</strong> 사용자가 많을수록 서비스의 가치가
              증가하는 현상
            </li>
            <li>
              <strong>플랫폼 경제:</strong> 서로 다른 사용자 그룹을 연결하는
              플랫폼 비즈니스 모델
            </li>
            <li>
              <strong>락인(Lock-in) 효과:</strong> 한 제품/서비스에서 다른
              것으로 전환하기 어려운 상황
            </li>
            <li>
              <strong>경험재와 정보재:</strong> 디지털 상품의 특성과 가격 결정
              메커니즘
            </li>
          </ul>
        </EconomicTermCard>

        <EconomicTermCard>
          <h4>현대 경제학 분야들</h4>
          <p>
            <Highlight>
              세상은 너무 복잡해서 하나의 이론으로는 설명할 수 없어요. 다양한
              도구가 필요하고, 환경과 행복도 중요해요.
            </Highlight>
          </p>
          <p>
            각 현대 경제학 분야의 특징과 초등학생도 이해할 수 있는 설명은
            다이어그램에서 확인할 수 있습니다. 게임이론, 발전경제학, 환경경제학,
            행복경제학, 정보경제학, 디지털경제학 등 다양한 분야가 각각의 독특한
            관점과 방법론으로 경제 현상을 분석하고 있습니다.
          </p>
        </EconomicTermCard>
      </div>
    </SectionContent>
  );
};

export default EconomicFamilyTree;
