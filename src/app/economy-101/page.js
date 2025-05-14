import DigitalEconomyCharacteristicsWrapper from "./DigitalEconomyCharacteristicsWrapper";
import DigitalEconomyFeatures from "./DigitalEconomyFeatures";
import EconomicFamilyTreeWrapper from "./EconomicFamilyTreeWrapper";
import EconomicTheoriesExplained from "./EconomicTheoriesExplained";

// Styled components section
const Highlight = ({ children }) => (
  <span className="bg-amber-50 px-2 py-1 rounded-md font-medium">
    {children}
  </span>
);

const EconomicTermCard = ({ title, children }) => (
  <div className="border border-gray-200 rounded-lg p-6 mb-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
    <h4 className="text-xl font-bold text-blue-700 mb-4 pb-2 border-b-2 border-gray-100">
      {title}
    </h4>
    {children}
  </div>
);

const ComparisonTable = ({ children }) => (
  <div className="overflow-x-auto rounded-lg shadow-md my-6">
    <table className="w-full border-collapse">{children}</table>
  </div>
);

export default function Economy101Page() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white shadow-2xl rounded-xl overflow-hidden">
          <header
            className="p-8 bg-gradient-to-r from-blue-800 to-indigo-900 text-white text-center"
            style={{
              backgroundImage:
                "url('/static/images/banners/keynesian_institutional_chicago_school_era.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-black bg-opacity-50 p-4 rounded-md">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                경제학 기초
              </h1>
              <p className="mt-3 text-xl sm:text-2xl text-blue-200 font-medium">
                디지털 시대의 경제 원리를 이해하기 위한 기초 개념
              </p>
            </div>
          </header>

          <div className="p-6 sm:p-10">
            {/* Section 1: 경제학 개요 */}
            <section className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 border-b-4 border-blue-600 pb-3 mb-8 text-center">
                1. 경제학의 기본 개념
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700">
                  경제학은 희소한 자원의 효율적 배분에 관한 학문입니다.
                  기본적으로 개인, 기업, 정부가 제한된 자원을 어떻게 활용하여
                  다양한 욕구를 충족시키는지 연구합니다.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg shadow-md my-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">
                    경제학의 주요 분야
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>미시경제학</strong>: 개인과 기업의 의사결정과
                      시장의 작동 원리를 연구
                    </li>
                    <li>
                      <strong>거시경제학</strong>: 경제 전체의 성장, 인플레이션,
                      실업률 등 국가 경제 지표를 연구
                    </li>
                    <li>
                      <strong>국제경제학</strong>: 국가 간 무역과 금융 관계를
                      분석
                    </li>
                    <li>
                      <strong>행동경제학</strong>: 심리적 요인이 경제적
                      의사결정에 미치는 영향 연구
                    </li>
                    <li>
                      <strong>정보경제학</strong>: 정보의 비대칭성과 디지털
                      경제의 특성 연구
                    </li>
                  </ul>
                </div>
              </div>

              {/* 미시경제학과 거시경제학 비교 */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  미시경제학과 거시경제학의 비교
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <EconomicTermCard title="미시경제학 (Microeconomics)">
                    <p>
                      미시경제학은{" "}
                      <Highlight>
                        개별 경제 주체들의 의사결정과 이들 간의 상호작용
                      </Highlight>
                      을 분석하는 경제학의 한 분야입니다. 여기서 경제 주체란
                      가계, 기업, 정부 등을 의미합니다.
                    </p>
                    <p className="mt-3">주요 연구 대상:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>
                        <strong>소비자 행동이론</strong>: 효용 극대화, 예산
                        제약, 선호 체계, 수요 함수 도출
                      </li>
                      <li>
                        <strong>생산자 행동이론</strong>: 이윤 극대화, 비용
                        최소화, 공급 함수 도출
                      </li>
                      <li>
                        <strong>시장 구조</strong>: 완전 경쟁 시장, 독점, 과점,
                        독점적 경쟁
                      </li>
                      <li>
                        <strong>가격 결정 메커니즘</strong>: 수요와 공급의
                        상호작용을 통한 시장 균형
                      </li>
                    </ul>
                  </EconomicTermCard>

                  <EconomicTermCard title="거시경제학 (Macroeconomics)">
                    <p>
                      거시경제학은{" "}
                      <Highlight>경제 전체의 총체적 현상과 변동</Highlight>을
                      연구하는 경제학의 분야입니다. 개별 주체보다는 경제 전체의
                      집계변수들에 초점을 맞춥니다.
                    </p>
                    <p className="mt-3">주요 연구 대상:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>
                        <strong>경제 성장</strong>: 장기적 생산성 증가, 성장
                        결정 요인, 솔로우 성장 모형
                      </li>
                      <li>
                        <strong>인플레이션</strong>: 물가 상승, 통화량과 물가의
                        관계, 필립스 곡선
                      </li>
                      <li>
                        <strong>실업</strong>: 자연실업률, 경기적 실업, 구조적
                        실업, 마찰적 실업
                      </li>
                      <li>
                        <strong>국제 무역</strong>: 비교우위론, 무역 균형, 환율
                        결정 메커니즘
                      </li>
                    </ul>
                  </EconomicTermCard>
                </div>

                <ComparisonTable>
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-3 text-center">구분</th>
                      <th className="px-6 py-3 text-center">미시경제학</th>
                      <th className="px-6 py-3 text-center">거시경제학</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 font-medium">분석 단위</td>
                      <td className="px-6 py-4">개별 경제주체 (가계, 기업)</td>
                      <td className="px-6 py-4">경제 전체 (국가, 지역)</td>
                    </tr>
                    <tr className="bg-gray-50 border-b">
                      <td className="px-6 py-4 font-medium">주요 변수</td>
                      <td className="px-6 py-4">
                        개별 가격, 개별 수량, 개별 시장 균형
                      </td>
                      <td className="px-6 py-4">
                        GDP, 실업률, 인플레이션, 금리
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 font-medium">정책 목표</td>
                      <td className="px-6 py-4">
                        자원 배분의 효율성, 시장 실패 교정
                      </td>
                      <td className="px-6 py-4">
                        완전 고용, 물가 안정, 경제 성장
                      </td>
                    </tr>
                    <tr className="bg-gray-50 border-b">
                      <td className="px-6 py-4 font-medium">대표 이론가</td>
                      <td className="px-6 py-4">알프레드 마셜, 레온 왈라스</td>
                      <td className="px-6 py-4">
                        존 메이너드 케인즈, 밀턴 프리드먼
                      </td>
                    </tr>
                  </tbody>
                </ComparisonTable>
              </div>
            </section>

            {/* Section 2: 경제학의 가계도 */}
            <section className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 border-b-4 border-blue-600 pb-3 mb-8 text-center">
                2. 경제학의 가계도와 주요 학파
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700">
                  경제학은 다양한 사조와 학파들이 시대적 흐름에 따라
                  발전해왔습니다. 아래 다이어그램은 고대부터 현대까지 주요
                  경제학파들의 발전과 상호 관계를 보여줍니다.
                </p>

                {/* Client component wrapper for the Mermaid diagram */}
                <EconomicFamilyTreeWrapper />
                <EconomicTheoriesExplained />

                <p className="text-gray-700 mt-4">
                  위 다이어그램은 경제학의 주요 학파들의 발전 과정을 보여줍니다.
                  고전학파에서 시작하여 마르크스주의, 신고전학파, 오스트리아학파
                  등 다양한 분파로 갈라지고, 이후 새로운 종합과 현대 경제학의
                  다양한 분야로 발전해온 과정을 확인할 수 있습니다.
                </p>
              </div>
            </section>

            {/* Section 3: 디지털 경제의 특징 */}
            <section className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 border-b-4 border-blue-600 pb-3 mb-8 text-center">
                3. 디지털 경제의 특징
              </h2>
              <DigitalEconomyCharacteristicsWrapper />
              <div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700">
                    디지털 경제는 전통적인 경제 모델과는 다른 독특한 특성을
                    가지고 있습니다. 특히 무형자산의 중요성, 네트워크 효과,
                    한계비용 제로 등의 특징이 두드러집니다.
                  </p>

                  <DigitalEconomyFeatures />
                </div>
              </div>
            </section>

            {/* Section 4: 경제 체제와 관련 개념들 */}
            <section className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 border-b-4 border-blue-600 pb-3 mb-8 text-center">
                4. 경제 체제와 관련 개념들
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <EconomicTermCard title="경제 체제 (Economic System)">
                  <p>
                    경제 체제는{" "}
                    <Highlight>
                      한 사회가 희소한 자원을 생산, 분배, 소비하는 방식과 구조
                    </Highlight>
                    를 의미합니다. 이는 생산 수단의 소유권, 경제적 의사결정
                    방식, 자원 배분 메커니즘을 포함합니다.
                  </p>
                  <p className="mt-3">주요 경제 체제:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>
                      <strong>자본주의 체제</strong>: 사적 소유권, 시장
                      메커니즘, 이윤 동기
                    </li>
                    <li>
                      <strong>사회주의 체제</strong>: 공적/사회적 소유권,
                      중앙계획, 평등한 분배
                    </li>
                    <li>
                      <strong>혼합 경제 체제</strong>: 시장과 정부 개입의 혼합,
                      공공재와 공익산업 국유화
                    </li>
                  </ul>
                </EconomicTermCard>

                <EconomicTermCard title="경제 질서 (Economic Order)">
                  <p>
                    경제 질서는{" "}
                    <Highlight>
                      경제 체제를 구성하는 제도적, 법적, 규범적 틀
                    </Highlight>
                    을 의미합니다. 이는 경제 체제보다 더 광범위한 개념으로, 경제
                    활동을 규제하는 법적 체계와 사회적 규범을 포함합니다.
                  </p>
                  <p className="mt-3">대표적인 경제 질서:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>
                      <strong>오르도자유주의(Ordoliberalism)</strong>: 독일의
                      '사회적 시장 경제'의 이론적 기초, 경쟁 질서의 중요성 강조
                    </li>
                    <li>
                      <strong>신자유주의(Neoliberalism)</strong>: 시장 자유화,
                      규제 완화, 민영화 강조
                    </li>
                    <li>
                      <strong>
                        조정 시장 경제(Coordinated Market Economy)
                      </strong>
                      : 독일, 일본 등의 이해관계자 조정 중심 모델
                    </li>
                  </ul>
                </EconomicTermCard>

                <EconomicTermCard title="경제 모델 (Economic Model)">
                  <p>
                    경제 모델은{" "}
                    <Highlight>
                      특정 국가나 지역에서 채택하고 발전시킨 고유한 경제 운영
                      방식
                    </Highlight>
                    을 의미합니다. 이는 역사적, 문화적, 지정학적 맥락에 따라
                    형성됩니다.
                  </p>
                  <p className="mt-3">대표적인 경제 모델:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>
                      <strong>북유럽 모델(Nordic Model)</strong>: 높은 조세와
                      복지, 노동시장 유연성, 사회적 합의
                    </li>
                    <li>
                      <strong>라인강 자본주의(Rhine Capitalism)</strong>: 독일식
                      모델, 은행 중심 금융, 장기적 관점, 이해관계자 참여
                    </li>
                    <li>
                      <strong>한국형 발전 모델</strong>: 국가 주도 산업화, 재벌
                      중심 경제, 수출 주도 성장
                    </li>
                  </ul>
                </EconomicTermCard>

                <EconomicTermCard title="경제 이데올로기 (Economic Ideology)">
                  <p>
                    경제 이데올로기는{" "}
                    <Highlight>
                      경제 운영에 관한 규범적, 가치적 신념 체계
                    </Highlight>
                    를 의미합니다. 이는 정치적 입장과 밀접하게 연관되어 있으며,
                    바람직한 경제 체제의 모습에 대한 비전을 제공합니다.
                  </p>
                  <p className="mt-3">주요 경제 이데올로기:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>
                      <strong>고전적 자유주의(Classical Liberalism)</strong>:
                      애덤 스미스, 자유 시장, 자유 무역, 정부 개입 최소화
                    </li>
                    <li>
                      <strong>케인스주의(Keynesianism)</strong>: 정부의 적극적
                      역할, 총수요 관리, 복지국가
                    </li>
                    <li>
                      <strong>마르크스주의(Marxism)</strong>: 자본주의 비판,
                      생산수단의 사회적 소유, 계급 투쟁
                    </li>
                  </ul>
                </EconomicTermCard>
              </div>

              <ComparisonTable>
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-3 text-center">구분</th>
                    <th className="px-6 py-3 text-center">중점 사항</th>
                    <th className="px-6 py-3 text-center">사례</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 font-medium">경제 체제</td>
                    <td className="px-6 py-4">
                      자원 배분 메커니즘, 소유권 구조
                    </td>
                    <td className="px-6 py-4">자본주의, 사회주의, 혼합경제</td>
                  </tr>
                  <tr className="bg-gray-50 border-b">
                    <td className="px-6 py-4 font-medium">경제 질서</td>
                    <td className="px-6 py-4">제도적, 법적 틀, 규범체계</td>
                    <td className="px-6 py-4">
                      사회적 시장경제, 신자유주의적 질서
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 font-medium">경제 모델</td>
                    <td className="px-6 py-4">국가별 고유한 경제 운영 방식</td>
                    <td className="px-6 py-4">북유럽 모델, 한국형 발전 모델</td>
                  </tr>
                  <tr className="bg-gray-50 border-b">
                    <td className="px-6 py-4 font-medium">경제 이데올로기</td>
                    <td className="px-6 py-4">규범적 신념체계, 가치관</td>
                    <td className="px-6 py-4">
                      케인스주의, 마르크스주의, 통화주의
                    </td>
                  </tr>
                </tbody>
              </ComparisonTable>
            </section>

            {/* Section 5: 디지털 시대의 경제적 도전과제 */}
            <section>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 border-b-4 border-blue-600 pb-3 mb-8 text-center">
                5. 디지털 시대의 경제적 도전과제
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 mb-6">
                    디지털 전환은 경제 시스템에 여러 도전과제를 제시합니다.
                    이러한 과제들을 이해하고 해결책을 모색하는 것이 지속가능한
                    디지털 경제 구축의 핵심입니다.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-red-700">
                        디지털 격차와 불평등
                      </h3>
                      <p>
                        디지털 기술 접근성과 활용 능력의 차이가 경제적 불평등을
                        심화시킬 수 있습니다. 교육, 소득, 지역에 따른 디지털
                        격차를 해소하기 위한 정책적 접근이 필요합니다.
                      </p>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-orange-700">
                        시장 집중과 독점
                      </h3>
                      <p>
                        네트워크 효과와 규모의 경제로 인해 소수 기업이 시장을
                        지배하는 현상이 심화되고 있습니다. 효과적인 경쟁 정책과
                        규제 프레임워크 개발이 중요합니다.
                      </p>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-teal-700">
                        노동시장 변화
                      </h3>
                      <p>
                        자동화와 AI의 발전으로 일자리 구조가 변화하고 있습니다.
                        기술 발전에 따른 일자리 소멸과 생성에 대응하는 교육
                        시스템과 사회안전망 구축이 필요합니다.
                      </p>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-blue-700">
                        데이터 소유권과 가치 분배
                      </h3>
                      <p>
                        데이터가 핵심 경제 자원으로 부상함에 따라, 데이터
                        소유권과 그 가치의 공정한 분배에 관한 새로운 경제적,
                        법적 프레임워크가 요구됩니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
