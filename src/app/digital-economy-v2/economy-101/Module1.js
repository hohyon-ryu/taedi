import styled from "@emotion/styled";
import EconomicFamilyTree from "./EconomicFamilyTree";
import { ContentList, ModuleSection, NestedList } from "./styles";

// Styled components for non-expandable content
const SectionContent = styled.div`
  margin-bottom: 2rem;
`;

const ComparisonTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;

  th,
  td {
    padding: 12px 15px;
    text-align: left;
  }

  thead tr {
    background-color: #0070f3;
    color: white;
    text-align: center;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f9f9f9;
  }

  tbody tr:hover {
    background-color: #f0f7ff;
  }

  th:first-of-type,
  td:first-of-type {
    padding-left: 20px;
  }

  th:last-of-type,
  td:last-of-type {
    padding-right: 20px;
  }
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

const Highlight = styled.span`
  background-color: #fff8e1;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-weight: 500;
`;

// 모듈 1: 경제 체제의 기본 구조와 역사적 변천
const Module1 = () => {
  return (
    <ModuleSection>
      <h2>1. 경제 체제의 기본 구조와 역사적 변천 (15분)</h2>

      <p>경제 체제의 기본 구조와 역사적 변천에 대한 개요입니다.</p>

      {/* 경제학의 가계도 섹션을 별도 컴포넌트로 분리 */}
      <EconomicFamilyTree />

      <SectionContent>
        <h3>핵심 개념 및 원리</h3>
        <ContentList>
          <li>경제 체제의 정의: 사회가 희소한 자원을 배분하는 방식과 구조</li>
          <li>
            경제 체제의 기본 요소:
            <NestedList>
              <li>소유권 구조 (공적/사적)</li>
              <li>자원 배분 메커니즘 (시장/계획)</li>
              <li>의사결정 프로세스 (중앙집중/분산)</li>
              <li>인센티브 시스템</li>
            </NestedList>
          </li>
        </ContentList>

        <p>
          <strong>경제 체제의 기본 요소 다이어그램:</strong> 소유권 구조, 자원
          배분 메커니즘, 의사결정 프로세스, 인센티브 시스템으로 구성된 경제
          체제의 기본 요소를 보여주는 다이어그램입니다.
        </p>
      </SectionContent>

      <SectionContent>
        <h3>미시경제학과 거시경제학의 비교</h3>
        <EconomicTermCard>
          <h4>미시경제학 (Microeconomics)</h4>
          <p>
            미시경제학은{" "}
            <Highlight>
              개별 경제 주체들의 의사결정과 이들 간의 상호작용
            </Highlight>
            을 분석하는 경제학의 한 분야입니다. 여기서 경제 주체란 가계, 기업,
            정부 등을 의미합니다.
          </p>
          <p>주요 연구 대상:</p>
          <ul>
            <li>
              <strong>소비자 행동이론</strong>: 효용 극대화, 예산 제약, 선호
              체계, 수요 함수 도출
            </li>
            <li>
              <strong>생산자 행동이론</strong>: 이윤 극대화, 비용 최소화, 공급
              함수 도출
            </li>
            <li>
              <strong>시장 구조</strong>: 완전 경쟁 시장, 독점, 과점, 독점적
              경쟁
            </li>
            <li>
              <strong>가격 결정 메커니즘</strong>: 수요와 공급의 상호작용을 통한
              시장 균형
            </li>
            <li>
              <strong>외부성과 공공재</strong>: 시장 실패와 정부 개입의 필요성
            </li>
            <li>
              <strong>게임 이론</strong>: 전략적 의사결정, 내쉬 균형, 죄수의
              딜레마
            </li>
          </ul>
          <p>
            미시경제학적 분석의 핵심은{" "}
            <Highlight>한계 개념(marginal concept)</Highlight>입니다. 예를 들어,
            소비자는 한계 효용(추가적인 1단위 소비로부터 얻는 효용)과 한계
            비용을 비교하여 최적 소비량을 결정합니다.
          </p>
        </EconomicTermCard>

        <EconomicTermCard>
          <h4>거시경제학 (Macroeconomics)</h4>
          <p>
            거시경제학은 <Highlight>경제 전체의 총체적 현상과 변동</Highlight>을
            연구하는 경제학의 분야입니다. 개별 주체보다는 경제 전체의
            집계변수들에 초점을 맞춥니다.
          </p>
          <p>주요 연구 대상:</p>
          <ul>
            <li>
              <strong>경제 성장</strong>: 장기적 생산성 증가, 성장 결정 요인,
              솔로우 성장 모형
            </li>
            <li>
              <strong>인플레이션</strong>: 물가 상승, 통화량과 물가의 관계,
              필립스 곡선
            </li>
            <li>
              <strong>실업</strong>: 자연실업률, 경기적 실업, 구조적 실업,
              마찰적 실업
            </li>
            <li>
              <strong>국제 무역</strong>: 비교우위론, 무역 균형, 환율 결정
              메커니즘
            </li>
            <li>
              <strong>재정 정책과 통화 정책</strong>: 정부 지출, 조세, 통화량
              조절
            </li>
            <li>
              <strong>경기 변동</strong>: 확장과 수축의 순환, 경기 예측, 경기
              대응 정책
            </li>
          </ul>
          <p>
            거시경제학은 <Highlight>케인스 혁명</Highlight> 이후에 독립적인
            분야로 발전했으며, 총수요-총공급 모형을 통한 분석이 핵심입니다.
            IS-LM 모형, AD-AS 모형 등의 분석 도구를 활용합니다.
          </p>
        </EconomicTermCard>

        <ComparisonTable>
          <thead>
            <tr>
              <th>구분</th>
              <th>미시경제학</th>
              <th>거시경제학</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>분석 단위</strong>
              </td>
              <td>개별 경제주체 (가계, 기업)</td>
              <td>경제 전체 (국가, 지역)</td>
            </tr>
            <tr>
              <td>
                <strong>주요 변수</strong>
              </td>
              <td>개별 가격, 개별 수량, 개별 시장 균형</td>
              <td>GDP, 실업률, 인플레이션, 금리</td>
            </tr>
            <tr>
              <td>
                <strong>분석 방법</strong>
              </td>
              <td>최적화 이론, 한계 분석, 부분 균형</td>
              <td>집계 모형, 거시 균형, 동태적 분석</td>
            </tr>
            <tr>
              <td>
                <strong>정책 목표</strong>
              </td>
              <td>자원 배분의 효율성, 시장 실패 교정</td>
              <td>완전 고용, 물가 안정, 경제 성장</td>
            </tr>
            <tr>
              <td>
                <strong>시간 범위</strong>
              </td>
              <td>주로 단기적 분석</td>
              <td>단기와 장기 모두 분석</td>
            </tr>
            <tr>
              <td>
                <strong>대표 이론가</strong>
              </td>
              <td>알프레드 마셜, 레온 왈라스</td>
              <td>존 메이너드 케인스, 밀턴 프리드먼</td>
            </tr>
          </tbody>
        </ComparisonTable>

        <p>
          미시경제학과 거시경제학은 상호보완적인 관계를 갖습니다. 현대
          경제학에서는{" "}
          <Highlight>
            미시적 기초를 가진 거시경제학(microfounded macroeconomics)
          </Highlight>
          이 중요한 연구 방향이 되었으며, 이는 개별 경제주체들의 합리적 선택이
          어떻게 거시경제 현상으로 이어지는지 설명하려는 시도입니다.
        </p>

        <p>
          <strong>미시경제학과 거시경제학 비교 다이어그램:</strong> 미시경제학은
          개별 경제주체와 시장에 초점을, 거시경제학은 국가 경제 전체에 초점을
          맞추는 두 접근법의 차이를 보여주는 다이어그램입니다.
        </p>
      </SectionContent>

      <SectionContent>
        <h3>경제 체제와 관련 개념들</h3>
        <EconomicTermCard>
          <h4>경제 체제 (Economic System)</h4>
          <p>
            경제 체제는{" "}
            <Highlight>
              한 사회가 희소한 자원을 생산, 분배, 소비하는 방식과 구조
            </Highlight>
            를 의미합니다. 이는 생산 수단의 소유권, 경제적 의사결정 방식, 자원
            배분 메커니즘을 포함합니다.
          </p>
          <p>주요 경제 체제:</p>
          <ul>
            <li>
              <strong>자본주의 체제</strong>: 사적 소유권, 시장 메커니즘, 이윤
              동기
            </li>
            <li>
              <strong>사회주의 체제</strong>: 공적/사회적 소유권, 중앙계획,
              평등한 분배
            </li>
            <li>
              <strong>혼합 경제 체제</strong>: 시장과 정부 개입의 혼합, 공공재와
              공익산업 국유화
            </li>
            <li>
              <strong>전통 경제 체제</strong>: 관습과 전통에 기반한 생산과 분배
            </li>
          </ul>
        </EconomicTermCard>

        <EconomicTermCard>
          <h4>경제 질서 (Economic Order)</h4>
          <p>
            경제 질서는{" "}
            <Highlight>경제 체제를 구성하는 제도적, 법적, 규범적 틀</Highlight>
            을 의미합니다. 이는 경제 체제보다 더 광범위한 개념으로, 경제 활동을
            규제하는 법적 체계와 사회적 규범을 포함합니다.
          </p>
          <p>대표적인 경제 질서:</p>
          <ul>
            <li>
              <strong>오르도자유주의(Ordoliberalism)</strong>: 독일의 '사회적
              시장 경제'의 이론적 기초, 경쟁 질서의 중요성 강조
            </li>
            <li>
              <strong>신자유주의(Neoliberalism)</strong>: 시장 자유화, 규제
              완화, 민영화 강조
            </li>
            <li>
              <strong>조정 시장 경제(Coordinated Market Economy)</strong>: 독일,
              일본 등의 이해관계자 조정 중심 모델
            </li>
            <li>
              <strong>자유 시장 경제(Liberal Market Economy)</strong>: 미국,
              영국 등의 경쟁 중심 모델
            </li>
          </ul>
        </EconomicTermCard>

        <EconomicTermCard>
          <h4>경제 모델 (Economic Model)</h4>
          <p>
            경제 모델은{" "}
            <Highlight>
              특정 국가나 지역에서 채택하고 발전시킨 고유한 경제 운영 방식
            </Highlight>
            을 의미합니다. 이는 역사적, 문화적, 지정학적 맥락에 따라 형성됩니다.
          </p>
          <p>대표적인 경제 모델:</p>
          <ul>
            <li>
              <strong>북유럽 모델(Nordic Model)</strong>: 높은 조세와 복지,
              노동시장 유연성, 사회적 합의
            </li>
            <li>
              <strong>라인강 자본주의(Rhine Capitalism)</strong>: 독일식 모델,
              은행 중심 금융, 장기적 관점, 이해관계자 참여
            </li>
            <li>
              <strong>영미식 자본주의(Anglo-Saxon Capitalism)</strong>: 주주
              가치 중심, 단기 성과, 주식시장 중심 금융
            </li>
            <li>
              <strong>국가 자본주의(State Capitalism)</strong>: 중국, 싱가포르
              등의 국가 주도 발전 모델
            </li>
            <li>
              <strong>한국형 발전 모델</strong>: 국가 주도 산업화, 재벌 중심
              경제, 수출 주도 성장
            </li>
          </ul>
        </EconomicTermCard>

        <EconomicTermCard>
          <h4>경제 이데올로기 (Economic Ideology)</h4>
          <p>
            경제 이데올로기는{" "}
            <Highlight>경제 운영에 관한 규범적, 가치적 신념 체계</Highlight>를
            의미합니다. 이는 정치적 입장과 밀접하게 연관되어 있으며, 바람직한
            경제 체제의 모습에 대한 비전을 제공합니다.
          </p>
          <p>주요 경제 이데올로기:</p>
          <ul>
            <li>
              <strong>고전적 자유주의(Classical Liberalism)</strong>: 애덤
              스미스, 자유 시장, 자유 무역, 정부 개입 최소화
            </li>
            <li>
              <strong>마르크스주의(Marxism)</strong>: 자본주의 비판, 생산수단의
              사회적 소유, 계급 투쟁
            </li>
            <li>
              <strong>케인스주의(Keynesianism)</strong>: 정부의 적극적 역할,
              총수요 관리, 복지국가
            </li>
            <li>
              <strong>통화주의(Monetarism)</strong>: 물가 안정, 통화량 조절,
              시장 자율성 강조
            </li>
            <li>
              <strong>발전국가론(Developmental State)</strong>: 동아시아
              국가들의 산업 정책, 국가 주도 산업화
            </li>
          </ul>
        </EconomicTermCard>

        <ComparisonTable>
          <thead>
            <tr>
              <th>구분</th>
              <th>중점 사항</th>
              <th>사례</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>경제 체제</strong>
              </td>
              <td>자원 배분 메커니즘, 소유권 구조</td>
              <td>자본주의, 사회주의, 혼합경제</td>
            </tr>
            <tr>
              <td>
                <strong>경제 질서</strong>
              </td>
              <td>제도적, 법적 틀, 규범체계</td>
              <td>사회적 시장경제, 신자유주의적 질서</td>
            </tr>
            <tr>
              <td>
                <strong>경제 모델</strong>
              </td>
              <td>국가별 고유한 경제 운영 방식</td>
              <td>북유럽 모델, 한국형 발전 모델</td>
            </tr>
            <tr>
              <td>
                <strong>경제 이데올로기</strong>
              </td>
              <td>규범적 신념체계, 가치관</td>
              <td>케인스주의, 마르크스주의, 통화주의</td>
            </tr>
          </tbody>
        </ComparisonTable>

        <p>
          이러한 개념들은 서로 중첩되고 상호작용하면서{" "}
          <Highlight>특정 사회의 경제적 틀을 형성</Highlight>합니다. 예를 들어,
          독일의 경제는 자본주의 체제를 기반으로 하되, 사회적 시장경제라는 경제
          질서를 채택하고, 라인강 자본주의라는 고유한 경제 모델을 발전시켰으며,
          오르도자유주의라는 경제 이데올로기에 영향을 받았습니다.
        </p>

        <p>
          <strong>경제 개념들의 관계:</strong> 경제 체제, 경제 질서, 경제 모델,
          경제 이데올로기 간의 상호관계와 영향을 보여주는 개념도입니다. 각
          개념이 어떻게 서로 영향을 주고받으며 전체 경제 시스템을 형성하는지
          설명합니다.
        </p>
      </SectionContent>
    </ModuleSection>
  );
};

export default Module1;
