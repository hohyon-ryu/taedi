import Section from "@/components/Section";

const ResearchStrategy = () => {
  return (
    <Section title="4. 연구 주제 연구 전략">
      {/* 4.1 개인 역량 강화와 격차 발생 */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
          4.1. 개인 역량 강화와 격차 발생
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          AI 시대의 전환은 개인 역량 강화에서 시작하여 공동체, 국가 역할의
          변화로 이어지며, 궁극적으로 소유와 분배 질서를 포함한 경제 질서의
          근본적 재편을 가져옵니다. 이러한 변화는 서로 연결되어 있으며, 각
          영역의 변화가 다른 영역에 영향을 미치는 복합적인 메커니즘을
          형성합니다.
        </p>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-gray-700">
            개인 역량의 강화와 새로운 계층 분화
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong className="font-semibold">현상:</strong> AI 기술에 의한
              개인 역량 강화와 생산성 향상
            </li>
            <li>
              <strong className="font-semibold">계층 분화:</strong>
            </li>
            <li>소득 증가 집단(10%): 기존 자본과 전문성 보유자</li>
            <li>비용 절감 집단(30~70%): 중간층</li>
            <li>기술 소외 집단: 디지털 접근성 및 활용 능력 취약 계층</li>
            <li>
              <strong className="font-semibold">과제:</strong> 디지털 리터러시
              강화, 균형 있는 발전 지원, 기술 접근성 보장
            </li>
          </ul>
        </div>
      </div>
      {/* 4.2 공동체의 변화 */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
          4.2. 공동체의 변화 (가정, 이웃, 도시, 국가)
        </h3>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-gray-700">
            공동체, 도시, 국가 역할의 재편
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong className="font-semibold">현상:</strong> 국가 주권의 변화,
              도시 네트워크의 부상
            </li>
            <li>
              <strong className="font-semibold">가정의 변화:</strong>
            </li>
            <li>AI 기술 활용을 통한 가정 내 역할 변화</li>
            <li>원격 교육과 원격 근무로 인한 가정 공간의 재구성</li>
            <li>가족 구성원 간 디지털 격차와 새로운 소통 방식</li>
            <li>
              <strong className="font-semibold">이웃과 지역 공동체:</strong>
            </li>
            <li>디지털 플랫폼을 통한 지역 공동체 연결 강화</li>
            <li>공유 경제와 지역 기반 협력 모델 확산</li>
            <li>온-오프라인 혼합형 커뮤니티 활성화</li>
            <li>
              <strong className="font-semibold">도시의 새로운 역할:</strong>
            </li>
            <li>개인이 경제적 자율성을 추구하고 실현하는 공간</li>
            <li>창조 플랫폼으로서의 도시 개념 강화</li>
            <li>물리적 경계를 넘어선 도시 간 협력 네트워크</li>
            <li>
              <strong className="font-semibold">국가 역할의 재정의:</strong>
            </li>
            <li>통제자에서 조정자, 촉진자로 전환</li>
            <li>디지털 평화 체계 구축</li>
            <li>국가 안보 개념의 확장(디지털, 환경, 보건 등 포괄)</li>
            <li>
              <strong className="font-semibold">과제:</strong> 도시 간 협력 체계
              구축, 디지털 공공재 확충
            </li>
          </ul>
        </div>
      </div>
      {/* 4.3 소유질서의 재정립 */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
          4.3. 소유질서의 재정립 (데이터)
        </h3>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-gray-700">
            데이터 소유권과 블록체인 기술
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong className="font-semibold">현상:</strong> 디지털 자산의
              소유권 문제와 중앙화된 데이터 통제
            </li>
            <li>
              <strong className="font-semibold">데이터 소유권의 재정립:</strong>
            </li>
            <li>개인 데이터에 대한 주권 강화</li>
            <li>데이터 생성자의 권리 인정과 보상 체계</li>
            <li>공공 데이터와 개인 데이터의 균형적 활용</li>
            <li>
              <strong className="font-semibold">블록체인과 소유권:</strong>
            </li>
            <li>분산원장 기술을 통한 디지털 자산 소유권 증명</li>
            <li>스마트 계약을 통한 자동화된 권리 이전 및 실행</li>
            <li>탈중앙화된 소유권 등록 및 관리 시스템</li>
            <li>
              <strong className="font-semibold">암호화폐와 경제 질서:</strong>
            </li>
            <li>국가 통화 시스템을 보완하는 대안적 가치 교환 수단</li>
            <li>국경을 초월한 가치 이전과 마이크로 트랜잭션 활성화</li>
            <li>토큰 이코노미를 통한 새로운 인센티브 구조 형성</li>
            <li>
              <strong className="font-semibold">과제:</strong> 규제 프레임워크
              개발, 에너지 효율성 향상, 사용자 친화적 인터페이스 구축
            </li>
          </ul>
        </div>
      </div>
      {/* 4.4 분배 질서의 재정립 */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
          4.4. 분배 질서의 재정립
        </h3>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-gray-700">
            소유와 분배 질서의 재정립
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong className="font-semibold">현상:</strong> 무형자산 가치
              증대와 노동-소득 연결 약화
            </li>
            <li>
              <strong className="font-semibold">철학적 방향:</strong>
            </li>
            <li>모든 사람은 공동 자원과 부에 대한 권리를 가짐</li>
            <li>기본적 생활을 영위할 수 있는 권리 보장</li>
            <li>경제적 안전망이 있을 때 진정한 선택의 자유 가능</li>
            <li>부의 극단적 불평등 완화 필요</li>
            <li>
              <strong className="font-semibold">새로운 분배 모델:</strong>
            </li>
            <li>기본소득과 데이터 배당 등 새로운 분배 메커니즘</li>
            <li>디지털 경제의 이익을 사회 전체가 공유하는 시스템</li>
            <li>노동과 소득의 연결을 넘어선 가치 분배 체계</li>
            <li>
              <strong className="font-semibold">새로운 소유권 모델:</strong>{" "}
              개인의 창의적 기여와 공공 이익의 균형 보장
            </li>
            <li>
              <strong className="font-semibold">분배 시스템:</strong> 디지털
              경제 이익의 공정한 분배 메커니즘 개발
            </li>
          </ul>
        </div>
      </div>
      {/* 4.5 시장 질서의 재정립 */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200">
          4.5. 시장 질서의 재정립
        </h3>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-gray-700">
            마켓의 가치 변화와 지속가능한 생태계
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong className="font-semibold">현상:</strong> 경제적 양극화
              심화와 지속가능성 위기
            </li>
            <li>
              <strong className="font-semibold">변화 방향:</strong> 지속가능한
              비즈니스 생태계 확산
            </li>
            <li>
              <strong className="font-semibold">새로운 시장 질서:</strong>
            </li>
            <li>플랫폼 경제의 공정성과 투명성 강화</li>
            <li>독점 방지와 건전한 경쟁 환경 조성</li>
            <li>사회적 가치와 경제적 가치의 통합</li>
            <li>
              <strong className="font-semibold">특징:</strong>
            </li>
            <li>사회적 문제 해결과 경제적 이익 창출의 결합</li>
            <li>다양한 이해관계자 참여와 비즈니스 기반의 문제 해결</li>
            <li>지속가능한 가치 창출 메커니즘 구축</li>
            <li>
              <strong className="font-semibold">전망:</strong> 경제적 가치와
              사회적 가치의 통합, 공동체가 추구하는 가치의 변화
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default ResearchStrategy;
