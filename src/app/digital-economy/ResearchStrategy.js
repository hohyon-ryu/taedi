import Section from "@/components/Section";

const ResearchStrategy = () => {
  return (
    <Section title="4. 연구 주제 및 전략">
      {/* 1. 시대적 배경: 디지털 전환과 공동체 변화의 양상 - 유재연 */}
      <div className="mb-8 p-6 bg-slate-50 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
          1. 시대적 배경: 디지털 전환과 공동체 변화의 양상 - 유재연
        </h3>
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
            <p className="text-sm text-gray-600 mb-3">
              <strong className="font-semibold">현상:</strong> AI 기반 개인 역량
              및 생산성 증대
              <br />
              <strong className="font-semibold">계층 분화:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>소득 증가 집단 (상위 10%): 자본/전문성 보유</li>
                <li>비용 절감 집단 (중간 30-70%): AI 활용</li>
                <li>기술 소외 집단: 디지털 접근/활용 취약</li>
              </ul>
              <strong className="font-semibold">과제:</strong> 디지털 리터러시,
              균형 발전, 기술 접근성 보장
            </p>
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
      </div>

      {/* 2. 소유와 분배 질서 - 노가빈 */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
          2. 소유와 분배 질서 - 노가빈
        </h3>
        <div className="mb-4">
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
      </div>

      {/* 3. 도시 중심 무역 질서 - 윤준영 */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
          3. 도시 중심 무역 질서 - 윤준영
        </h3>
        <div className="mb-4">
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
      </div>
    </Section>
  );
};

export default ResearchStrategy;
