import Section from "@/components/Section";

const frameworkData = [
  {
    category: "소유 질서",
    asIs: "무형자산 중심, 데이터 독점, 개인 데이터 기업 소유, 지식재산권 한계",
    toBe: "공동 창작물 공정 소유, 데이터 민주적 관리, 디지털 공유재 (접근/사용권) 확대",
    toDo: "디지털 자산 공동소유 모델, 개인 데이터 통제권 법제화, 오픈소스 인센티브, 공유 IP 플랫폼",
  },
  {
    category: "분배 질서",
    asIs: "디지털 이익 소수 집중, 노동-소득 연결 약화, 플랫폼 독점으로 부 이전",
    toBe: "기여 기반 분배, 최소 안전망, 불평등 완화, 기본 자원권 보장",
    toDo: "사회적 기여 지표 개발, 기본소득 실험, 데이터 생산자 보상, 알고리즘 공정성 감사",
  },
  {
    category: "시장 질서",
    asIs: "승자독식, 지속불가능 소비, 시장 독점, 규제 사각지대",
    toBe: "소셜 임팩트 투자, 문제 해결 중심 비즈니스, 지속가능 가치 창출, 공정 경쟁",
    toDo: "사회문제 해결형 비즈니스 인센티브, 지역 가치 토큰, ESG 재구성, 디지털 반독점 규제, 순환경제 도입",
  },
];

const TransformationFramework = () => {
  return (
    <Section title="디지털 전환과 사회변혁: 패러다임의 재설계">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-indigo-100">
              <th className="py-3 px-4 border-b border-gray-300 text-indigo-700 font-bold text-left text-sm">
                분류
              </th>
              <th className="py-3 px-4 border-b border-gray-300 text-indigo-700 font-bold text-left text-sm">
                AS-IS: 현재 상태
              </th>
              <th className="py-3 px-4 border-b border-gray-300 text-indigo-700 font-bold text-left text-sm">
                TO-BE: 재정의된 미래상
              </th>
              <th className="py-3 px-4 border-b border-gray-300 text-indigo-700 font-bold text-left text-sm">
                TO-DO: 혁신적 실행 과제
              </th>
            </tr>
          </thead>
          <tbody>
            {frameworkData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b border-gray-300 align-top text-sm font-semibold text-gray-800">
                  {item.category}
                </td>
                <td className="py-3 px-4 border-b border-gray-300 align-top text-sm text-gray-700">
                  {item.asIs}
                </td>
                <td className="py-3 px-4 border-b border-gray-300 align-top text-sm text-gray-700">
                  {item.toBe}
                </td>
                <td className="py-3 px-4 border-b border-gray-300 align-top text-sm text-gray-700">
                  {item.toDo}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default TransformationFramework;
