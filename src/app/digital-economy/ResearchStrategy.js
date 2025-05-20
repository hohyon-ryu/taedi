import Section from "@/components/Section";

const ResearchStrategy = () => {
  return (
    <Section title="4. 연구 주제 및 전략">
      {/* 진행 상황 범례 */}
      <div className="mb-10 p-4 border rounded-lg bg-gray-50">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">
          진행 상황 범례:
        </h3>
        <div className="flex flex-wrap items-center text-sm">
          {/* 준비 중 */}
          <div className="flex items-center mr-6 mb-2">
            <div className="flex space-x-1 mr-2">
              <div
                className="w-3 h-3 rounded-full border border-gray-300"
                style={{ backgroundColor: "#E5E7EB" }}
              ></div>
              <div
                className="w-3 h-3 rounded-full border border-gray-300"
                style={{ backgroundColor: "#E5E7EB" }}
              ></div>
              <div
                className="w-3 h-3 rounded-full border border-gray-300"
                style={{ backgroundColor: "#E5E7EB" }}
              ></div>
              <div
                className="w-3 h-3 rounded-full border border-gray-300"
                style={{ backgroundColor: "#E5E7EB" }}
              ></div>
            </div>
            <span>준비 중</span>
          </div>
          {/* 개념 설정 */}
          <div className="flex items-center mr-6 mb-2">
            <div className="flex space-x-1 mr-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#6366F1" }}
              ></div>
              <div
                className="w-3 h-3 rounded-full border border-gray-300"
                style={{ backgroundColor: "#E5E7EB" }}
              ></div>
              <div
                className="w-3 h-3 rounded-full border border-gray-300"
                style={{ backgroundColor: "#E5E7EB" }}
              ></div>
              <div
                className="w-3 h-3 rounded-full border border-gray-300"
                style={{ backgroundColor: "#E5E7EB" }}
              ></div>
            </div>
            <span>개념 설정</span>
          </div>
          {/* 기본 연구 */}
          <div className="flex items-center mr-6 mb-2">
            <div className="flex space-x-1 mr-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#6366F1" }}
              ></div>
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#6366F1" }}
              ></div>
              <div
                className="w-3 h-3 rounded-full border border-gray-300"
                style={{ backgroundColor: "#E5E7EB" }}
              ></div>
              <div
                className="w-3 h-3 rounded-full border border-gray-300"
                style={{ backgroundColor: "#E5E7EB" }}
              ></div>
            </div>
            <span>기본 연구</span>
          </div>
          {/* 연구 완료 */}
          <div className="flex items-center mr-6 mb-2">
            <div className="flex space-x-1 mr-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#6366F1" }}
              ></div>
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#6366F1" }}
              ></div>
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#6366F1" }}
              ></div>
              <div
                className="w-3 h-3 rounded-full border border-gray-300"
                style={{ backgroundColor: "#E5E7EB" }}
              ></div>
            </div>
            <span>연구 완료</span>
          </div>
          {/* 작성 완료 */}
          <div className="flex items-center mr-6 mb-2">
            <div className="flex space-x-1 mr-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#6366F1" }}
              ></div>
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#6366F1" }}
              ></div>
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#6366F1" }}
              ></div>
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#6366F1" }}
              ></div>
            </div>
            <span>작성 완료</span>
          </div>
        </div>
      </div>

      {/* 1. 시대적 배경: 디지털 전환과 공동체 변화의 양상 - 유재연 */}
      <div className="p-6 bg-white rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
          1. 디지털 전환과 공동체 변화의 양상 - 유재연
        </h3>
        {/* Main Descriptive Content for Sec 1 */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* 개인 역량 강화와 격차 발생 */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              개인 역량 강화와 격차 발생
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              AI는 개인 역량 강화와 생산성 향상을 이끌지만, 동시에 기존
              자본/전문성 보유자와 기술 소외 계층 간 격차를 심화시켜 새로운 계층
              분화를 야기합니다. 디지털 리터러시 강화와 균형 발전 지원이
              필요합니다.
            </p>
            <div className="text-sm text-gray-600 mb-3">
              <p>
                <strong className="font-semibold">현상:</strong> AI 기반 개인
                역량 및 생산성 증대
              </p>
              <div className="mt-1">
                <strong className="font-semibold">계층 분화:</strong>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>소득 증가 집단 (상위 10%): 자본/전문성 보유</li>
                  <li>비용 절감 집단 (중간 30-70%): AI 활용</li>
                  <li>기술 소외 집단: 디지털 접근/활용 취약</li>
                </ul>
              </div>
              <p className="mt-1">
                <strong className="font-semibold">과제:</strong> 디지털
                리터러시, 균형 발전, 기술 접근성 보장
              </p>
            </div>
          </div>
          {/* 공동체의 변화 */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              공동체의 변화 (가정, 이웃, 도시, 국가)
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              디지털 전환은 가정 내 역할 변화, 지역 공동체 연결 방식 변화,
              도시의 창조 플랫폼화, 국가 역할의 조정자/촉진자 전환 등 공동체
              전반에 걸친 재편을 촉진합니다.
            </p>
            <p className="text-sm text-gray-600 mb-4">
              현재 경제 시스템의 한계 속에서, 절제와 균형에 기반한 새로운 경제
              생태계가 부상하고 있습니다. 이는 이윤 추구를 넘어 공동체 가치와
              지속가능성을 중시하며, 다양한 이해관계자 참여를 통해 장기적 가치를
              창출하는 모델로, 산업사회의 욕망 중심에서 절제와 균형의 경제로
              전환을 모색합니다.
            </p>
            <p className="text-sm text-gray-600 mb-3">
              <strong className="font-semibold">가정:</strong> AI 활용 역할
              변화, 원격 생활로 공간 재구성, 디지털 격차 발생
              <br />
              <strong className="font-semibold">이웃/지역:</strong> 디지털
              플랫폼 연결, 공유경제 확산, 온-오프라인 혼합 커뮤니티
              <br />
              <strong className="font-semibold">도시:</strong> 개인 경제 자율성
              공간, 창조 플랫폼, 초국경 네트워크
              <br />
              <strong className="font-semibold">국가:</strong> 통제자 →
              조정자/촉진자, 폭력의 독점 및 관리
              <br />
              <strong className="font-semibold">과제:</strong> 도시 간 협력,
              디지털 공공재 확충
            </p>
          </div>
        </div>

        {/* 연구 과제 및 진행 상황 - 유재연 */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h4 className="text-md font-semibold text-gray-700 mb-2">
            연구 과제 및 진행 상황
          </h4>
          <ul className="list-none text-sm text-gray-600 space-y-3">
            <li className="flex items-center">
              <div className="flex space-x-1 mr-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
              </div>
              디지털 기술로 인한 개인 역량 강화와 계층 분화 현상 분석 (연구
              완료)
            </li>
            <li className="flex items-center">
              <div className="flex space-x-1 mr-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
              </div>
              욕망과 절제의 균형을 통한 지속가능한 가치 창출 메커니즘 연구
              (social impact) (개념 설정)
            </li>
          </ul>
        </div>

        {/* 글로벌 공동연구 후보 - 유재연 */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h4 className="text-md font-semibold text-gray-700 mb-2">
            글로벌 공동연구 후보
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Daron Acemoglu */}
            <div className="border border-gray-200 rounded-md p-4 shadow-sm bg-white">
              <h5 className="text-sm font-semibold text-gray-800">
                다론 아세모글루 (Daron Acemoglu, b. 1967)
              </h5>
              <div className="text-xs text-gray-600 mt-1 space-y-1">
                <p>
                  <strong className="font-semibold">소속:</strong> MIT 경제학과
                  인스티튜트 교수, 노벨 경제학상 수상자
                </p>
                <p>
                  <strong className="font-semibold">학력:</strong> 런던 정경대학
                  경제학 박사
                </p>
                <p>
                  <strong className="font-semibold">전문 분야:</strong> 기술
                  편향적 변화 (SBTC), 노동 경제학, 제도 경제학
                </p>
                <p>
                  <strong className="font-semibold">대표 저서:</strong>{" "}
                  <em>Why Nations Fail</em> (2012), <em>Power and Progress</em>{" "}
                  (2023)
                </p>
                <p>
                  <strong className="font-semibold">소개:</strong> 기술 편향적
                  변화 및 과업 기반 프레임워크 개발, AI의 생산성 향상 효과와
                  불평등 심화 가능성 분석 연구
                </p>
              </div>
            </div>
            {/* Erik Brynjolfsson */}
            <div className="border border-gray-200 rounded-md p-4 shadow-sm bg-white">
              <h5 className="text-sm font-semibold text-gray-800">
                에릭 브린욜프슨 (Erik Brynjolfsson, b. 1962)
              </h5>
              <div className="text-xs text-gray-600 mt-1 space-y-1">
                <p>
                  <strong className="font-semibold">소속:</strong>{" "}
                  스탠포드대학교 HAI 디지털 경제 연구소 소장
                </p>
                <p>
                  <strong className="font-semibold">학력:</strong> 하버드대학교
                  경영학 박사
                </p>
                <p>
                  <strong className="font-semibold">전문 분야:</strong> 디지털
                  경제학, 생산성 패러독스, 기술 혁신
                </p>
                <p>
                  <strong className="font-semibold">대표 저서:</strong>{" "}
                  <em>The Second Machine Age</em> (2014),{" "}
                  <em>Machine, Platform, Crowd</em> (2017)
                </p>
                <p>
                  <strong className="font-semibold">소개:</strong>{" "}
                  생산-분배-소비의 경제 기본 구조가 디지털화로 변화하는 과정
                  연구, '생산성의 역설'(Productivity Paradox) 개념 개발
                </p>
              </div>
            </div>
            {/* Stuart Russell */}
            <div className="border border-gray-200 rounded-md p-4 shadow-sm bg-white">
              <h5 className="text-sm font-semibold text-gray-800">
                스튜어트 러셀 (Stuart Russell, b. 1962)
              </h5>
              <div className="text-xs text-gray-600 mt-1 space-y-1">
                <p>
                  <strong className="font-semibold">소속:</strong> UC 버클리
                  컴퓨터공학과 교수
                </p>
                <p>
                  <strong className="font-semibold">학력:</strong>{" "}
                  스탠포드대학교 컴퓨터 과학 박사
                </p>
                <p>
                  <strong className="font-semibold">전문 분야:</strong>{" "}
                  인공지능, 기계학습, AI 안전성
                </p>
                <p>
                  <strong className="font-semibold">대표 저서:</strong>{" "}
                  <em>Artificial Intelligence: A Modern Approach</em> (1995),{" "}
                  <em>Human Compatible</em> (2019)
                </p>
                <p>
                  <strong className="font-semibold">소개:</strong> 인간 중심 AI
                  설계 및 통제 가능성 강조. AI 시스템의 사회적 위험과 윤리적
                  설계에 대한 국제적 자문 활동, Human-compatible AI 연구 프레임
                  제안
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 소유와 분배 질서 - 노가빈 */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
          2. 소유와 분배 질서 - 노가빈
        </h3>
        {/* Main Descriptive Content for Sec 2 */}
        <div className="mb-4 md:mb-0">
          {" "}
          {/* This div now primarily holds descriptive content */}
          <p className="text-sm text-gray-600 mb-1">
            <strong className="font-semibold">현상:</strong> 무형자산 가치
            증대와 노동-소득 연결 약화
          </p>
          <h4 className="text-lg font-semibold my-2 text-gray-700">
            철학적 방향:
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-3">
            <li>모든 사람은 공동 자원과 부에 대한 권리를 가짐</li>
            <li>기본적 생활을 영위할 수 있는 권리 보장</li>
            <li>경제적 안전망이 있을 때 진정한 선택의 자유 가능</li>
            <li>부의 극단적 불평등 완화 필요</li>
          </ul>
          <p className="text-sm text-gray-600 mb-1">
            <strong className="font-semibold">새로운 소유권 모델:</strong>{" "}
            개인의 창의적 기여와 공공 이익의 균형 보장
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong className="font-semibold">분배 시스템:</strong> 디지털 경제
            이익의 공정한 분배 메커니즘 개발
          </p>
        </div>

        {/* 연구 과제 및 진행 상황 - 노가빈 */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h4 className="text-md font-semibold text-gray-700 mb-2">
            연구 과제 및 진행 상황
          </h4>
          <ul className="list-none text-sm text-gray-600 space-y-3">
            <li className="flex items-center">
              <div className="flex space-x-1 mr-2">
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
              </div>
              디지털 자산과 데이터의 소유권 개념 변화 연구 (미시작)
            </li>
            <li className="flex items-center">
              <div className="flex space-x-1 mr-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
              </div>
              무형 자산 가치 측정과 공정한 분배 메커니즘 개발 (기본 연구)
            </li>
            <li className="flex items-center">
              <div className="flex space-x-1 mr-2">
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
              </div>
              개인의 자유가 최대한 보장되면서, 공공의 질서를 위해 최소한의
              거버넌스 (미시작)
            </li>
          </ul>
        </div>

        {/* 글로벌 공동연구 후보 - 노가빈 */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h4 className="text-md font-semibold text-gray-700 mb-2">
            {" "}
            {/* Adjusted to match styling of other H4s */}
            글로벌 공동연구 후보
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 조지프 스티글리츠 */}
            <div className="border border-gray-200 rounded-md p-4 shadow-sm bg-white">
              <h5 className="text-sm font-semibold text-gray-800">
                조지프 스티글리츠 (Joseph Stiglitz, b. 1943)
              </h5>
              <div className="text-xs text-gray-600 mt-1 space-y-1">
                <p>
                  <strong className="font-semibold">소속:</strong> 미국
                  컬럼비아대학교 경제학과 석좌교수
                </p>
                <p>
                  <strong className="font-semibold">학력:</strong> MIT 경제학
                  박사
                </p>
                <p>
                  <strong className="font-semibold">주요 경력:</strong> 노벨
                  경제학상(2001), 전 세계은행 수석 부총재 겸 수석이코노미스트
                </p>
                <p>
                  <strong className="font-semibold">전문 분야:</strong>{" "}
                  정보경제학, 불평등, 공공경제, 시장실패 이론
                </p>
                <p>
                  <strong className="font-semibold">대표 저서:</strong>{" "}
                  <em>The Price of Inequality</em> (2012),{" "}
                  <em>People, Power, and Profits</em> (2019)
                </p>
                <p>
                  <strong className="font-semibold">소개:</strong> 현대
                  자본주의의 불평등과 시장 실패를 정치철학적 정의 기준에서
                  비판하는 대표 경제학자.
                </p>
              </div>
            </div>
            {/* T. M. 스캔런 */}
            <div className="border border-gray-200 rounded-md p-4 shadow-sm bg-white">
              <h5 className="text-sm font-semibold text-gray-800">
                토마스 스캔런 (Thomas M. Scanlon, b. 1940)
              </h5>
              <div className="text-xs text-gray-600 mt-1 space-y-1">
                <p>
                  <strong className="font-semibold">소속:</strong> 하버드대학교
                  철학과 명예교수
                </p>
                <p>
                  <strong className="font-semibold">학력:</strong>{" "}
                  프린스턴대학교 철학 박사
                </p>
                <p>
                  <strong className="font-semibold">전문 분야:</strong>{" "}
                  도덕철학, 계약주의, 정치철학
                </p>
                <p>
                  <strong className="font-semibold">대표 저서:</strong>{" "}
                  <em>What We Owe to Each Other</em> (1998),{" "}
                  <em>The Difficulty of Tolerance</em> (2003)
                </p>
                <p>
                  <strong className="font-semibold">소개:</strong> 존 롤스 이후
                  계약주의 윤리학을 재정의한 대표적 철학자로, 정의와 공정성의
                  기준이 되는 ‘도덕적 정당화’의 조건을 이론화.
                </p>
              </div>
            </div>
            {/* 데브라 사츠 */}
            <div className="border border-gray-200 rounded-md p-4 shadow-sm bg-white">
              <h5 className="text-sm font-semibold text-gray-800">
                데브라 사츠 (Debra Satz)
              </h5>
              <div className="text-xs text-gray-600 mt-1 space-y-1">
                <p>
                  <strong className="font-semibold">소속:</strong> 미국
                  스탠퍼드대학교 정치철학 교수, 인문대학 학장
                </p>
                <p>
                  <strong className="font-semibold">학력:</strong> MIT 정치철학
                  박사
                </p>
                <p>
                  <strong className="font-semibold">전문 분야:</strong> 불평등,
                  시장윤리, 도덕철학, 교육정책
                </p>
                <p>
                  <strong className="font-semibold">대표 저서:</strong>{" "}
                  <em>Why Some Things Should Not Be for Sale</em> (2010)
                </p>
                <p>
                  <strong className="font-semibold">소개:</strong> 시장의 도덕적
                  한계를 분석하고, 공정한 분배를 위협하는 경제적·사회적 조건을
                  비판적으로 성찰.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. 도시 중심 무역 질서 - 윤준영 */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
          3. 도시 중심 무역 질서 - 윤준영
        </h3>
        {/* Main Descriptive Content for Sec 3 */}
        <div className="mb-4 md:mb-0">
          {" "}
          {/* This div now primarily holds descriptive content */}
          <p className="text-sm text-gray-600 mb-1">
            <strong className="font-semibold">현상:</strong> 국경을 초월한
            디지털 무역 확대, 데이터 패권 경쟁
          </p>
          <h4 className="text-lg font-semibold my-2 text-gray-700">
            핵심 변화 영역: 무역 패러다임 전환
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-3">
            <li>물리적 상품에서 무형 자산 중심으로 전환</li>
            <li>도시 간 무역 네트워크의 중요성 증대</li>
            <li>디지털 인프라의 전략적 가치 상승</li>
          </ul>
          <h4 className="text-lg font-semibold my-2 text-gray-700">
            거버넌스 과제:
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>국가 주권과 글로벌 협력의 새로운 균형</li>
            <li>넥스트 WTO 같은 새로운 글로벌 무역 체계 필요</li>
            <li>데이터 흐름과 디지털 인프라에 관한 공정한 국제 질서 구축</li>
          </ul>
        </div>

        {/* 연구 과제 및 진행 상황 (도시 중심 무역 질서) - REFORMATTED */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h4 className="text-md font-semibold text-gray-700 mb-2">
            연구 과제 및 진행 상황
          </h4>
          <ul className="list-none text-sm text-gray-600 space-y-3">
            <li className="flex items-center">
              <div className="flex space-x-1 mr-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
              </div>
              글로벌 경제질서 (무역, 통화, 금융 등) 연구 우선순위 검토 (완료)
            </li>
            <li className="flex items-center">
              <div className="flex space-x-1 mr-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
              </div>
              국가 역할 축소에 따른 글로벌 경제질서 재편: 도시 간 무역을
              중심으로 (기본 연구)
            </li>
          </ul>
        </div>

        {/* 글로벌 공동연구 후보 - 윤준영 */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h4 className="text-md font-semibold text-gray-700 mb-2">
            글로벌 공동연구 후보
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Parag Khanna */}
            <div className="border border-gray-200 rounded-md p-4 shadow-sm bg-white">
              <h5 className="text-sm font-semibold text-gray-800">
                파라그 카나 (Parag Khanna, b. 1977)
              </h5>
              <div className="text-xs text-gray-600 mt-1 space-y-1">
                <p>
                  <strong className="font-semibold">현직:</strong> AlphaGeo CEO,
                  Climate Alpha CEO, FutureMap 매니징 파트너
                </p>
                <p>
                  <strong className="font-semibold">전문 분야:</strong> 미래학,
                  지경학, 도시 네트워크, AI 기반 분석
                </p>
                <p>
                  <strong className="font-semibold">대표 저서:</strong>{" "}
                  <em>Connectography</em> (2016), <em>The Future is Asian</em>{" "}
                  (2019), <em>MOVE</em> (2021)
                </p>
                <p>
                  <strong className="font-semibold">핵심 주장:</strong> 인프라
                  네트워크와 도시 간 연결성이 국가를 초월하는 새로운 질서의
                  핵심. 국가는 플랫폼화되고, 실질적 전략 단위는 도시.
                </p>
                <div>
                  <strong className="font-semibold">협업 아젠다 제안:</strong>
                  <div className="space-y-1 mt-1 pl-4">
                    <p>
                      국가의 주권적 기능이 축소되는 시대에, 도시는 어떻게
                      물리적·디지털 인프라를 기반으로 새로운 '공간적 질서'를
                      창출하고 있는가?
                    </p>
                    <p>
                      도시 간 무역 네트워크는 어떻게 지정학적 충돌의 완충지대
                      혹은 회피 경로로 기능하는가?
                    </p>
                    <p>
                      국가와 도시 경제주권의 제도적 협력모델 및 분권적 연합을
                      통한 재구조화
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ResearchStrategy;
