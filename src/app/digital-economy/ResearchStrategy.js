import Section from "@/components/Section";

const ResearchStrategy = () => {
  return (
    <Section title="4. 연구 주제 및 전략">
      {/* 시대적 배경 섹션 */}
      <div className="mb-8 p-6 bg-slate-50 rounded-xl shadow-lg">
        <h3 className="text-2xl font-extrabold text-gray-800 mb-6 pb-3 border-b-2 border-gray-300">
          시대적 배경: 디지털 전환과 공동체 변화의 양상
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* 개인 역량 강화와 격차 발생 */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-semibold text-indigo-600 mb-3">
              개인 역량 강화와 격차 발생
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              AI는 개인 역량 강화와 생산성 향상을 이끌지만, 동시에 기존
              자본/전문성 보유자와 기술 소외 계층 간 격차를 심화시켜 새로운 계층
              분화를 야기합니다. 디지털 리터러시 강화와 균형 발전 지원이
              필요합니다.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>
                <strong className="font-semibold">현상:</strong> AI 기반 개인
                역량 및 생산성 증대
              </li>
              <li>
                <strong className="font-semibold">계층 분화:</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>소득 증가 집단 (상위 10%): 자본/전문성 보유</li>
                  <li>비용 절감 집단 (중간 30-70%): AI 활용</li>
                  <li>기술 소외 집단: 디지털 접근/활용 취약</li>
                </ul>
              </li>
              <li>
                <strong className="font-semibold">과제:</strong> 디지털
                리터러시, 균형 발전, 기술 접근성 보장
              </li>
            </ul>
          </div>

          {/* 공동체의 변화 */}
          <div>
            <h4 className="text-xl font-semibold text-indigo-600 mb-3">
              공동체의 변화 (가정, 이웃, 도시, 국가)
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              디지털 전환은 가정 내 역할 변화, 지역 공동체 연결 방식 변화,
              도시의 창조 플랫폼화, 국가 역할의 조정자/촉진자 전환 등 공동체
              전반에 걸친 재편을 촉진합니다.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>
                <strong className="font-semibold">가정:</strong> AI 활용 역할
                변화, 원격 생활로 공간 재구성, 디지털 격차 발생
              </li>
              <li>
                <strong className="font-semibold">이웃/지역:</strong> 디지털
                플랫폼 연결, 공유경제 확산, 온-오프라인 혼합 커뮤니티
              </li>
              <li>
                <strong className="font-semibold">도시:</strong> 개인 경제
                자율성 공간, 창조 플랫폼, 초국경 네트워크
              </li>
              <li>
                <strong className="font-semibold">국가:</strong> 통제자 →
                조정자/촉진자, 폭력의 독점 및 관리
              </li>
              <li>
                <strong className="font-semibold">과제:</strong> 도시 간 협력,
                디지털 공공재 확충
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 1. 소유질서의 재정립 */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
          1. 소유질서의 재정립 - 윤준영
        </h3>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-gray-700">
            데이터 소유권과 블록체인 기술
          </h4>
          <p className="text-sm text-gray-600 mb-1">
            <strong className="font-semibold">현상:</strong> 디지털 자산의
            소유권 문제와 중앙화된 데이터 통제
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong className="font-semibold">데이터 소유권의 재정립:</strong>
          </p>
          <p className="text-sm text-gray-600 mb-1 ml-4">
            개인 데이터에 대한 주권 강화
          </p>
          <p className="text-sm text-gray-600 mb-1 ml-4">
            데이터 생성자의 권리 인정과 보상 체계
          </p>
          <p className="text-sm text-gray-600 mb-1 ml-4">
            공공 데이터와 개인 데이터의 균형적 활용
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong className="font-semibold">블록체인과 소유권:</strong>
          </p>
          <p className="text-sm text-gray-600 mb-1 ml-4">
            분산원장 기술을 통한 디지털 자산 소유권 증명
          </p>
          <p className="text-sm text-gray-600 mb-1 ml-4">
            스마트 계약을 통한 자동화된 권리 이전 및 실행
          </p>
          <p className="text-sm text-gray-600 mb-1 ml-4">
            탈중앙화된 소유권 등록 및 관리 시스템
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong className="font-semibold">암호화폐와 경제 질서:</strong>
          </p>
          <p className="text-sm text-gray-600 mb-1 ml-4">
            국가 통화 시스템을 보완하는 대안적 가치 교환 수단
          </p>
          <p className="text-sm text-gray-600 mb-1 ml-4">
            국경을 초월한 가치 이전과 마이크로 트랜잭션 활성화
          </p>
          <p className="text-sm text-gray-600 mb-1 ml-4">
            토큰 이코노미를 통한 새로운 인센티브 구조 형성
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong className="font-semibold">과제:</strong> 규제 프레임워크
            개발, 에너지 효율성 향상, 사용자 친화적 인터페이스 구축
          </p>
        </div>
      </div>

      {/* 2. 분배 질서의 재정립 */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
          2. 분배 질서의 재정립 - 노가빈
        </h3>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-gray-700">
            소유와 분배 질서의 재정립
          </h4>
          <p className="text-sm text-gray-600 mb-1">
            <strong className="font-semibold">현상:</strong> 무형자산 가치
            증대와 노동-소득 연결 약화
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong className="font-semibold">철학적 방향:</strong>
          </p>
          <p className="text-sm text-gray-600 mb-1 ml-4">
            모든 사람은 공동 자원과 부에 대한 권리를 가짐
          </p>
          <p className="text-sm text-gray-600 mb-1 ml-4">
            기본적 생활을 영위할 수 있는 권리 보장
          </p>
          <p className="text-sm text-gray-600 mb-1 ml-4">
            경제적 안전망이 있을 때 진정한 선택의 자유 가능
          </p>
          <p className="text-sm text-gray-600 mb-1 ml-4">
            부의 극단적 불평등 완화 필요
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong className="font-semibold">새로운 분배 모델:</strong>
          </p>
          <p className="text-sm text-gray-600 mb-1 ml-4">
            기본소득과 데이터 배당 등 새로운 분배 메커니즘
          </p>
          <p className="text-sm text-gray-600 mb-1 ml-4">
            디지털 경제의 이익을 사회 전체가 공유하는 시스템
          </p>
          <p className="text-sm text-gray-600 mb-1 ml-4">
            노동과 소득의 연결을 넘어선 가치 분배 체계
          </p>
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

      {/* 3. 시장 질서의 재정립 */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
          3. 시장 질서의 재정립 - 유재연
        </h3>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-gray-700">
            마켓의 가치 변화와 지속가능한 생태계
          </h4>
          <p className="text-sm text-gray-600 mb-1">
            <strong className="font-semibold">현상:</strong> 경제적 양극화
            심화와 지속가능성 위기
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong className="font-semibold">변화 방향:</strong> 지속가능한
            비즈니스 생태계 확산
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong className="font-semibold">새로운 시장 질서:</strong>
          </p>
          <p className="text-sm text-gray-600 mb-1 ml-4">
            플랫폼 경제의 공정성과 투명성 강화
          </p>
          <p className="text-sm text-gray-600 mb-1 ml-4">
            독점 방지와 건전한 경쟁 환경 조성
          </p>
          <p className="text-sm text-gray-600 mb-1 ml-4">
            사회적 가치와 경제적 가치의 통합
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong className="font-semibold">특징:</strong>
          </p>
          <p className="text-sm text-gray-600 mb-1 ml-4">
            사회적 문제 해결과 경제적 이익 창출의 결합
          </p>
          <p className="text-sm text-gray-600 mb-1 ml-4">
            다양한 이해관계자 참여와 비즈니스 기반의 문제 해결
          </p>
          <p className="text-sm text-gray-600 mb-1 ml-4">
            지속가능한 가치 창출 메커니즘 구축
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong className="font-semibold">전망:</strong> 경제적 가치와
            사회적 가치의 통합, 공동체가 추구하는 가치의 변화
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ResearchStrategy;
