import Section from "@/components/Section";

const TransformationFramework = () => {
  return (
    <Section title="디지털 전환과 사회변혁: 패러다임의 재설계">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-indigo-100">
              <th className="py-3 px-4 border-b border-gray-300 text-indigo-700 font-bold text-left text-sm"></th>
              <th className="py-3 px-4 border-b border-gray-300 text-indigo-700 font-bold text-left text-sm">
                AS-IS:
                <br />
                산업화 시대 체제의 한계
              </th>
              <th className="py-3 px-4 border-b border-gray-300 text-indigo-700 font-bold text-left text-sm">
                TO-BE:
                <br />
                안전하고 건강한 미래
              </th>
              <th className="py-3 px-4 border-b border-gray-300 text-indigo-700 font-bold text-left text-sm">
                TO-DO:
                <br />
                실행 과제
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-300 align-top text-sm font-semibold text-gray-800">
                소유 질서
              </td>
              <td className="py-3 px-4 border-b border-gray-300 align-top text-sm text-gray-700">
                <div>무형자산 중심</div>
                <div>데이터 독점</div>
                <div>개인 데이터 기업 소유</div>
                <div>지식재산권 한계</div>
              </td>
              <td className="py-3 px-4 border-b border-gray-300 align-top text-sm text-gray-700">
                <div>공동 창작물 공정 소유</div>
                <div>데이터 민주적 관리</div>
                <div>디지털 공유재 (접근/사용권) 확대</div>
              </td>
              <td className="py-3 px-4 border-b border-gray-300 align-top text-sm text-gray-700">
                <div>디지털 자산 공동소유 모델</div>
                <div>개인 데이터 통제권 법제화</div>
                <div>오픈소스 인센티브</div>
                <div>공유 IP 플랫폼</div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-300 align-top text-sm font-semibold text-gray-800">
                분배 질서
              </td>
              <td className="py-3 px-4 border-b border-gray-300 align-top text-sm text-gray-700">
                <div>디지털 이익 소수 집중</div>
                <div>노동-소득 연결 약화</div>
                <div>플랫폼 독점으로 부 이전</div>
              </td>
              <td className="py-3 px-4 border-b border-gray-300 align-top text-sm text-gray-700">
                <div>기여 기반 분배</div>
                <div>최소 안전망</div>
                <div>불평등 완화</div>
                <div>기본 자원권 보장</div>
              </td>
              <td className="py-3 px-4 border-b border-gray-300 align-top text-sm text-gray-700">
                <div>사회적 기여 지표 개발</div>
                <div>기본소득 실험</div>
                <div>데이터 생산자 보상</div>
                <div>알고리즘 공정성 감사</div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-300 align-top text-sm font-semibold text-gray-800">
                시장 질서
              </td>
              <td className="py-3 px-4 border-b border-gray-300 align-top text-sm text-gray-700">
                <div>승자독식</div>
                <div>지속불가능 소비</div>
                <div>시장 독점</div>
                <div>규제 사각지대</div>
              </td>
              <td className="py-3 px-4 border-b border-gray-300 align-top text-sm text-gray-700">
                <div>소셜 임팩트 투자</div>
                <div>문제 해결 중심 비즈니스</div>
                <div>지속가능 가치 창출</div>
                <div>공정 경쟁</div>
              </td>
              <td className="py-3 px-4 border-b border-gray-300 align-top text-sm text-gray-700">
                <div>사회문제 해결형 비즈니스 인센티브</div>
                <div>지역 가치 토큰</div>
                <div>ESG 재구성</div>
                <div>디지털 반독점 규제</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default TransformationFramework;
