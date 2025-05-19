import Section from "@/components/Section";

const TransformationFramework = () => {
  return (
    <Section title="3. 변화 프레임워크: AS-IS, TO-BE, TO-DO">
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
                공동체 변화
              </td>
              <td className="py-3 px-4 border-b border-gray-300 align-top text-sm text-gray-700">
                {/* AS-IS for 공동체 변화 - Placeholder */}
                <div>기존 공동체 구조의 약화</div>
                <div>디지털 격차 심화</div>
              </td>
              <td className="py-3 px-4 border-b border-gray-300 align-top text-sm text-gray-700">
                {/* TO-BE for 공동체 변화 - Placeholder */}
                <div>포용적 디지털 공동체</div>
                <div>새로운 연결과 협력</div>
              </td>
              <td className="py-3 px-4 border-b border-gray-300 align-top text-sm text-gray-700">
                {/* TO-DO for 공동체 변화 - Placeholder */}
                <div>디지털 리터러시 교육 강화</div>
                <div>온-오프라인 연계 플랫폼 구축</div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-300 align-top text-sm font-semibold text-gray-800">
                소유와 분배 질서
              </td>
              <td className="py-3 px-4 border-b border-gray-300 align-top text-sm text-gray-700">
                {/* AS-IS for 소유와 분배 질서 - Placeholder */}
                <div>데이터 및 무형자산 가치 독점</div>
                <div>소득 불평등 심화</div>
              </td>
              <td className="py-3 px-4 border-b border-gray-300 align-top text-sm text-gray-700">
                {/* TO-BE for 소유와 분배 질서 - Placeholder */}
                <div>데이터 주권 확립 및 공유</div>
                <div>공정한 가치 분배 시스템</div>
              </td>
              <td className="py-3 px-4 border-b border-gray-300 align-top text-sm text-gray-700">
                {/* TO-DO for 소유와 분배 질서 - Placeholder */}
                <div>데이터 공유 플랫폼 구축</div>
                <div>새로운 분배 모델(기본소득 등) 연구</div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-300 align-top text-sm font-semibold text-gray-800">
                도시 중심 무역 질서
              </td>
              <td className="py-3 px-4 border-b border-gray-300 align-top text-sm text-gray-700">
                {/* AS-IS for 도시 중심 무역 질서 - Placeholder */}
                <div>국가 중심의 전통적 무역 질서</div>
                <div>디지털 무역 장벽 존재</div>
              </td>
              <td className="py-3 px-4 border-b border-gray-300 align-top text-sm text-gray-700">
                {/* TO-BE for 도시 중심 무역 질서 - Placeholder */}
                <div>도시 간 직접적인 디지털 무역 활성화</div>
                <div>개방적이고 공정한 데이터 흐름</div>
              </td>
              <td className="py-3 px-4 border-b border-gray-300 align-top text-sm text-gray-700">
                {/* TO-DO for 도시 중심 무역 질서 - Placeholder */}
                <div>도시 간 무역 협정 지원</div>
                <div>글로벌 디지털 무역 규범 수립 참여</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default TransformationFramework;
