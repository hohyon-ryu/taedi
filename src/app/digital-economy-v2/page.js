import DigitalEconomyCharacteristicsWrapper from "./economy-101/DigitalEconomyCharacteristicsWrapper";
import EconomicFamilyTreeWrapper from "./economy-101/EconomicFamilyTreeWrapper";

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

export default function DigitalEconomyV2Page() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white shadow-2xl rounded-xl overflow-hidden">
          <header className="p-8 bg-gradient-to-r from-blue-800 to-indigo-900 text-white text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              경제학 기초 (Economy 101)
            </h1>
            <p className="mt-3 text-xl sm:text-2xl text-blue-200 font-medium">
              디지털 시대의 경제 원리를 이해하기 위한 기초 개념
            </p>
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

                <p className="text-gray-700 mt-4">
                  위 다이어그램은 경제학의 주요 학파들의 발전 과정을 보여줍니다.
                  고전학파에서 시작하여 마르크스주의, 신고전학파, 오스트리아학파
                  등 다양한 분파로 갈라지고, 이후 새로운 종합과 현대 경제학의
                  다양한 분야로 발전해온 과정을 확인할 수 있습니다.
                </p>
              </div>

              {/* 주요 경제학파 설명 */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  주요 경제학파 상세 설명
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <EconomicTermCard title="고전학파 (1776~1870년)">
                    <p>
                      <Highlight>
                        각자 자기 좋을 대로 하면 사회 전체가 알아서 잘 돌아가요.
                        정부는 너무 참견하지 마세요.
                      </Highlight>
                    </p>
                    <p className="mt-3">
                      <strong>주요 인물:</strong> 애덤 스미스, 데이비드 리카도,
                      토마스 맬서스, 존 스튜어트 밀
                    </p>
                    <p className="mt-3">
                      <strong>주요 이론:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>
                        <strong>보이지 않는 손(Invisible Hand):</strong> 시장이
                        자율적으로 균형을 이룬다는 이론
                      </li>
                      <li>
                        <strong>비교우위론(Comparative Advantage):</strong>{" "}
                        상대적으로 효율적인 생산에 집중해야 한다는 무역 이론
                      </li>
                      <li>
                        <strong>자유방임주의(Laissez-faire):</strong> 정부 개입
                        없는 자유 시장 옹호
                      </li>
                    </ul>
                  </EconomicTermCard>

                  <EconomicTermCard title="케인즈주의 (1936~1970년)">
                    <p>
                      <Highlight>
                        경제가 어려울 때는 정부가 돈을 많이 써서 일자리를
                        만들어야 해요. 모두가 돈을 안 쓰면 더 어려워져요.
                      </Highlight>
                    </p>
                    <p className="mt-3">
                      <strong>주요 인물:</strong> 존 메이너드 케인즈, 폴
                      새뮤얼슨, 존 히크스
                    </p>
                    <p className="mt-3">
                      <strong>주요 이론:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>
                        <strong>유효수요 이론:</strong> 총수요가 경제 성장과
                        고용의 핵심 요소
                      </li>
                      <li>
                        <strong>승수효과:</strong> 정부 지출이 경제에 미치는
                        확대 효과
                      </li>
                      <li>
                        <strong>정부 개입:</strong> 경기 침체 시 정부의 적극적
                        재정 정책 필요성 주장
                      </li>
                    </ul>
                  </EconomicTermCard>

                  <EconomicTermCard title="행동경제학 (1979~현재)">
                    <p>
                      <Highlight>
                        사람들은 생각보다 실수를 많이 해요. 좋은 선택을 하도록
                        살짝 도와주면 더 행복해질 수 있어요.
                      </Highlight>
                    </p>
                    <p className="mt-3">
                      <strong>주요 인물:</strong> 대니얼 카너먼, 리처드 탈러,
                      아모스 트버스키
                    </p>
                    <p className="mt-3">
                      <strong>주요 이론:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>
                        <strong>제한된 합리성:</strong> 인간의 의사결정은 완전히
                        합리적이지 않음
                      </li>
                      <li>
                        <strong>프레이밍 효과:</strong> 같은 정보도 제시 방식에
                        따라 다른 결정을 내림
                      </li>
                      <li>
                        <strong>넛지(Nudge):</strong> 강제 없이 더 나은 선택으로
                        유도하는 방법론
                      </li>
                    </ul>
                  </EconomicTermCard>

                  <EconomicTermCard title="디지털경제학 (1990~현재)">
                    <p>
                      <Highlight>
                        디지털 세상에서는 물건을 한 번 만들면 복제하는 비용이
                        거의 들지 않아요. 또 많은 사람이 같이 쓸수록 더 가치가
                        커지는 서비스들이 있어요.
                      </Highlight>
                    </p>
                    <p className="mt-3">
                      <strong>주요 인물:</strong> 칼 샤피로, 홀 베리언, 에릭
                      브린욜프슨
                    </p>
                    <p className="mt-3">
                      <strong>주요 이론:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>
                        <strong>네트워크 효과:</strong> 사용자가 많을수록
                        서비스의 가치가 증가하는 현상
                      </li>
                      <li>
                        <strong>플랫폼 경제:</strong> 서로 다른 사용자 그룹을
                        연결하는 플랫폼 비즈니스 모델
                      </li>
                      <li>
                        <strong>경험재와 정보재:</strong> 디지털 상품의 특성과
                        가격 결정 메커니즘
                      </li>
                    </ul>
                  </EconomicTermCard>
                </div>
              </div>
            </section>

            {/* Section 3: 디지털 경제의 특징 */}
            <section className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 border-b-4 border-blue-600 pb-3 mb-8 text-center">
                3. 디지털 경제의 특징
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700">
                  디지털 경제는 전통적인 경제 모델과는 다른 독특한 특성을 가지고
                  있습니다. 특히 무형자산의 중요성, 네트워크 효과, 한계비용 제로
                  등의 특징이 두드러집니다. AI 시대에 접어들면서 이러한 특성은
                  더욱 강화되고 있습니다.
                </p>

                {/* 디지털 경제 특성 다이어그램 */}
                <DigitalEconomyCharacteristicsWrapper />

                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    디지털 경제의 주요 특성 상세 설명
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <EconomicTermCard title="한계비용 제로 (Zero Marginal Cost)">
                      <p>
                        <Highlight>
                          한 번 만들면 추가로 복제하는 비용이 거의 들지 않아요.
                        </Highlight>
                      </p>
                      <p className="mt-3">
                        디지털 상품(소프트웨어, 앱, 디지털 콘텐츠)은 처음 개발할
                        때는 비용이 많이 들지만, 한 번 만들어지면 추가 복제본을
                        만드는 비용은 거의 0에 가깝습니다.
                      </p>
                      <p className="mt-3">
                        <strong>쉬운 예시:</strong> 게임을 만드는 회사는 처음
                        게임을 만들 때 많은 돈을 쓰지만, 만들어진 게임을
                        인터넷으로 다운로드 받는 추가 비용은 거의 들지 않아요.
                      </p>
                    </EconomicTermCard>

                    <EconomicTermCard title="네트워크 효과 (Network Effect)">
                      <p>
                        <Highlight>
                          사용하는 사람이 많아질수록 서비스의 가치가 더 커져요.
                        </Highlight>
                      </p>
                      <p className="mt-3">
                        사용자가 증가할수록 모든 사용자에게 제공되는 가치가
                        증가하는 현상입니다. 소셜 미디어, 메신저 앱, 공유 경제
                        플랫폼에서 흔히 볼 수 있습니다.
                      </p>
                      <p className="mt-3">
                        <strong>쉬운 예시:</strong> 카카오톡은 친구들이 많이
                        사용할수록 더 유용해져요. 친구들이 아무도 사용하지
                        않는다면 아무리 좋은 앱이라도 쓸모가 없어요.
                      </p>
                    </EconomicTermCard>

                    <EconomicTermCard title="플랫폼 중심 (Platform-Centric)">
                      <p>
                        <Highlight>
                          다른 사람들을 연결해주는 회사가 가장 큰 회사가 돼요.
                        </Highlight>
                      </p>
                      <p className="mt-3">
                        서로 다른 사용자 그룹(소비자와 생산자)을 연결하는 플랫폼
                        비즈니스 모델이 중심이 됩니다. 양면 시장(Two-sided
                        Market)을 형성하여 가치를 창출합니다.
                      </p>
                      <p className="mt-3">
                        <strong>쉬운 예시:</strong> 배달의민족은 음식점과 배고픈
                        사람들을 연결해 주는 플랫폼이에요. 직접 음식을 만들지
                        않아도 연결해 주는 역할만으로 큰 회사가 되었어요.
                      </p>
                    </EconomicTermCard>

                    <EconomicTermCard title="승자독식 (Winner-Takes-All)">
                      <p>
                        <Highlight>
                          1등만 기억하고 2등은 잊혀져요. 1등이 거의 모든 이익을
                          가져가요.
                        </Highlight>
                      </p>
                      <p className="mt-3">
                        네트워크 효과와 규모의 경제로 인해 시장을 선점한 기업이
                        지배적 위치를 차지하고, 대부분의 시장 이익을 독차지하는
                        현상입니다.
                      </p>
                      <p className="mt-3">
                        <strong>쉬운 예시:</strong> 검색엔진을 생각해보세요.
                        구글이 가장 많이 사용되고, 다른 검색엔진들은 훨씬 적게
                        사용돼요. 1등 구글이 대부분의 광고 수익을 가져가요.
                      </p>
                    </EconomicTermCard>

                    <EconomicTermCard title="무형자산 중심 (Intangible Assets)">
                      <p>
                        <Highlight>
                          만질 수 없는 것들(지식, 데이터, 브랜드)이 가장 가치
                          있어요.
                        </Highlight>
                      </p>
                      <p className="mt-3">
                        공장이나 기계 같은 물리적 자산보다 소프트웨어, 데이터,
                        알고리즘, 브랜드, 특허 등 무형자산이 기업 가치의 핵심이
                        됩니다.
                      </p>
                      <p className="mt-3">
                        <strong>쉬운 예시:</strong> 애플은 스마트폰 공장보다
                        아이폰 디자인과 iOS 운영체제라는 무형자산 때문에 가치가
                        높아요. 삼성도 공장보다 기술과 브랜드가 더 가치 있어요.
                      </p>
                    </EconomicTermCard>

                    <EconomicTermCard title="AI 지능화 (AI Intelligence)">
                      <p>
                        <Highlight>
                          기계가 스스로 생각하고 배우면서 점점 더 똑똑해져요.
                        </Highlight>
                      </p>
                      <p className="mt-3">
                        인공지능 기술이 발전하면서 기계가 데이터로부터 학습하고,
                        인간의 개입 없이도 의사결정을 내릴 수 있게 되었습니다.
                      </p>
                      <p className="mt-3">
                        <strong>쉬운 예시:</strong> 넷플릭스는 내가 본 영화들을
                        기억하고 배워서 내가 좋아할 만한 새로운 영화를 추천해
                        줘요. 유튜브도 내가 좋아할 만한 영상을 계속 추천해 줘요.
                      </p>
                    </EconomicTermCard>

                    <EconomicTermCard title="초개인화 (Hyper-Personalization)">
                      <p>
                        <Highlight>
                          나에게 딱 맞는 서비스와 상품을 제공해요.
                        </Highlight>
                      </p>
                      <p className="mt-3">
                        AI와 빅데이터를 활용해 개인의 취향, 행동, 필요에 맞춘
                        완전히 개인화된 상품과 서비스를 제공합니다.
                      </p>
                      <p className="mt-3">
                        <strong>쉬운 예시:</strong> 내가 좋아하는 음악만 모아서
                        틀어주는 개인 맞춤 플레이리스트, 내 피부 타입에 맞춘
                        화장품, 내 공부 습관에 맞춘 학습 프로그램 등이 있어요.
                      </p>
                    </EconomicTermCard>

                    <EconomicTermCard title="자동화 가속 (Automation Acceleration)">
                      <p>
                        <Highlight>
                          사람이 하던 일을 점점 더 많이 기계가 대신해요.
                        </Highlight>
                      </p>
                      <p className="mt-3">
                        AI와 로봇 기술의 발전으로 단순 반복 업무뿐만 아니라
                        복잡한 인지 업무까지 자동화되고 있습니다.
                      </p>
                      <p className="mt-3">
                        <strong>쉬운 예시:</strong> 예전에는 계산원이 마트에서
                        계산을 해 주었지만, 이제는 셀프 계산대가 많아졌어요.
                        공장에서도 사람 대신 로봇이 물건을 만들고 있어요.
                      </p>
                    </EconomicTermCard>

                    <EconomicTermCard title="데이터 가치화 (Data Valorization)">
                      <p>
                        <Highlight>
                          많은 정보(데이터)가 새로운 돈이 되었어요.
                        </Highlight>
                      </p>
                      <p className="mt-3">
                        데이터가 핵심 경제 자원으로 부상하면서 수집, 분석,
                        활용하는 능력이 기업과 국가의 경쟁력을 좌우합니다.
                      </p>
                      <p className="mt-3">
                        <strong>쉬운 예시:</strong> 페이스북은 우리가 무엇을
                        좋아하는지, 어떤 글을 읽는지 같은 정보를 모아서
                        광고주에게 팔아 돈을 벌어요.
                      </p>
                    </EconomicTermCard>

                    <EconomicTermCard title="예측 경제 (Prediction Economy)">
                      <p>
                        <Highlight>
                          AI가 미래를 예측하고, 그 예측이 가치를 만들어요.
                        </Highlight>
                      </p>
                      <p className="mt-3">
                        AI 기술의 발전으로 소비자 행동, 시장 변화, 위험 요소
                        등을 더 정확히 예측할 수 있게 되었습니다.
                      </p>
                      <p className="mt-3">
                        <strong>쉬운 예시:</strong> 날씨 앱은 내일 비가 올지
                        예측해 주고, 쇼핑몰은 내가 다음에 무엇을 살지 예측해요.
                        은행은 누가 돈을 잘 갚을지 예측해서 돈을 빌려줘요.
                      </p>
                    </EconomicTermCard>
                  </div>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg shadow-md my-6 mt-10">
                  <h3 className="text-xl font-bold text-indigo-800 mb-3">
                    디지털 경제와 AI의 도전 과제
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow">
                      <h4 className="font-bold text-red-600">불평등 심화</h4>
                      <p className="text-sm mt-2">
                        디지털 기술과 AI에 접근할 수 있는 사람과 그렇지 못한
                        사람들 사이의 격차가 더 커질 수 있어요. 기술을 가진
                        사람들은 더 많은 기회를 얻고, 그렇지 못한 사람들은
                        뒤처질 수 있어요.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                      <h4 className="font-bold text-orange-600">일자리 변화</h4>
                      <p className="text-sm mt-2">
                        로봇과 AI가 사람들의 일자리를 대체하면서 많은 직업이
                        사라지고 새로운 직업이 생겨요. 하지만 새 일자리는 더
                        많은 교육과 기술이 필요한 경우가 많아요.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                      <h4 className="font-bold text-blue-600">독점 문제</h4>
                      <p className="text-sm mt-2">
                        소수의 대형 기술 기업들이 시장을 지배하게 되면 경쟁이
                        줄어들고 가격이 올라가거나 서비스 품질이 나빠질 수
                        있어요. 이들의 권력을 적절히 조절하는 것이 중요해요.
                      </p>
                    </div>
                  </div>
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

              <div className="mt-8 text-center">
                <p className="text-lg font-semibold text-gray-700">
                  이 페이지는 디지털 경제를 이해하기 위한 기초 지식을
                  제공합니다. 더 자세한 내용은 다른 세부 섹션을 참조하세요.
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
