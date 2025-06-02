// ImplementationPlan.js

const ImplementationPlan = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
        5. 단계별 실행 계획
      </h2>

      <div className="space-y-6">
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            연구 기반 경제 질서 구축 로드맵
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 shadow-sm">
              <h4 className="font-semibold text-blue-900 mb-2">
                1단계: 심화 연구 (2027-2028)
              </h4>
              <ul className="text-sm text-blue-700 space-y-1 mb-3">
                <li>• 데이터 소유권 법제화 연구</li>
                <li>• 공동체 경제 모델 설계</li>
                <li>• AI-인간 협력 플랫폼 개발</li>
                <li>• 기여 기반 분배 시스템 연구</li>
                <li>• 디지털 화폐 시스템 연구</li>
              </ul>
              <p className="text-xs text-blue-600 italic">
                이론적 토대 구축 및 프로토타입 개발
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200 shadow-sm">
              <h4 className="font-semibold text-orange-900 mb-2">
                2단계: 실증 검증 (2028-2030)
              </h4>
              <ul className="text-sm text-orange-700 space-y-1 mb-3">
                <li>• 파일럿 프로그램 실행</li>
                <li>• 정책 프레임워크 개발</li>
                <li>• 국제 협력 모델 구축</li>
                <li>• 효과성 평가 및 개선</li>
              </ul>
              <p className="text-xs text-orange-600 italic">
                소규모 실험을 통한 실현 가능성 검증
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 shadow-sm">
              <h4 className="font-semibold text-green-900 mb-2">
                3단계: 경제질서 완성 (2030-2035)
              </h4>
              <ul className="text-sm text-green-700 space-y-1 mb-3">
                <li>• 안전하고 건강한 디지털 경제</li>
                <li>• 지속가능한 협력 기반 사회</li>
                <li>• 인간 중심 기술 거버넌스</li>
                <li>• 글로벌 경제 질서 안정화</li>
              </ul>
              <p className="text-xs text-green-600 italic">
                새로운 경제 질서의 전면적 구현
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            핵심 성공 요인
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    연구 기반 정책 개발
                  </h4>
                  <p className="text-sm text-gray-600">
                    실증 데이터와 시뮬레이션 결과를 바탕으로 한 정책 설계
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    시민 참여와 공동 설계
                  </h4>
                  <p className="text-sm text-gray-600">
                    경제 주체들의 직접 참여를 통한 민주적 거버넌스
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    국제 협력과 표준화
                  </h4>
                  <p className="text-sm text-gray-600">
                    글로벌 차원의 협력을 통한 경제 질서 표준 확립
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    기술과 제도의 균형
                  </h4>
                  <p className="text-sm text-gray-600">
                    기술 혁신과 사회 제도 개선의 조화로운 발전
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationPlan;
