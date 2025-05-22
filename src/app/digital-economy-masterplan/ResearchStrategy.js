import Section from "@/components/Section";

const ResearchStrategy = () => {
  return (
    <Section title="4. 연구 주제 및 전략 - 마스터플랜">
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

      {/* 1. 시대적 배경: 디지털 전환과 공동체 변화의 양상 - 마스터플랜 */}
      <div className="p-6 bg-white rounded-xl shadow-lg mb-6">
        <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
          1. 디지털 전환과 공동체 변화의 양상 - 마스터플랜
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          디지털 전환은 가정 내 역할 변화, 지역 공동체 연결 방식 변화, 도시의
          창조 플랫폼화, 국가 역할의 조정자/촉진자 전환 등 공동체 전반에 걸친
          재편을 촉진합니다.
        </p>
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
              디지털 기술로 인한 개인 역량 강화와 계층 분화 현상 분석 (작성
              완료)
            </li>
            <li className="flex items-center">
              <div className="flex space-x-1 mr-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
              </div>
              욕망과 절제의 균형을 통한 지속가능한 가치 창출 메커니즘 연구
              (social impact) (기본 연구)
            </li>
            <li className="flex items-center">
              <div className="flex space-x-1 mr-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
              </div>
              디지털 시대 공동체 변화 대응 마스터플랜 수립 (개념 설정)
            </li>
          </ul>
        </div>
      </div>

      {/* 2. 소유와 분배 질서 - 마스터플랜 */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
          2. 소유와 분배 질서 - 마스터플랜
        </h3>
        <p className="text-sm text-gray-600 mb-1">
          <strong className="font-semibold">현상:</strong> 무형자산 가치 증대와
          노동-소득 연결 약화
        </p>
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h4 className="text-md font-semibold text-gray-700 mb-2">
            연구 과제 및 진행 상황
          </h4>
          <ul className="list-none text-sm text-gray-600 space-y-3">
            <li className="flex items-center">
              <div className="flex space-x-1 mr-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
              </div>
              디지털 자산과 데이터의 소유권 개념 변화 연구 (개념 설정)
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
          </ul>
        </div>
      </div>

      {/* 3. 도시 중심 무역 질서 - 마스터플랜 */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
          3. 도시 중심 무역 질서 - 마스터플랜
        </h3>
        <p className="text-sm text-gray-600 mb-1">
          <strong className="font-semibold">현상:</strong> 국경을 초월한 디지털
          무역 확대, 데이터 패권 경쟁
        </p>
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
      </div>
    </Section>
  );
};

export default ResearchStrategy;
