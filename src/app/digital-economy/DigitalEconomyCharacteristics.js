import Section from "@/components/Section";

const DigitalEconomyCharacteristics = () => {
  return (
    <Section title="1. 디지털 경제의 역사적 맥락">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
          <thead className="bg-indigo-50">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-indigo-800 border-b border-indigo-100 w-1/4">
                경제 질서 전환의 특성
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-indigo-800 border-b border-indigo-100 w-1/4">
                농업 시대
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-indigo-800 border-b border-indigo-100 w-1/4">
                산업화 시대
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-indigo-800 border-b border-indigo-100 w-1/4">
                디지털 전환 시대
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                1. 가치 창출 방식
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                토지 및 자연자원 기반, 노동력 중심
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                물리적 자원과 기계 기반 대량 생산
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                데이터, 지식, 네트워크 기반 무형자산 중심
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                2. 시장 구조와 경쟁
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                지역적 시장, 제한된 경쟁
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                규모의 경제, 자본 집약적 경쟁
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                네트워크 효과, 플랫폼 중심, 승자독식 심화
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                3. 소유권과 분배
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                토지 소유 중심, 신분 기반 분배
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                물리적 자산 소유, 자본-노동 분배
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                데이터 소유권, 지식재산권, 노동-소득 연결 약화
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                4. 거래 방식과 화폐
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                물물교환, 지역 화폐, 귀금속 기반
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                중앙화된 금융, 국가 통화 중심
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                디지털 결제, 암호화폐, 탈중앙화 금융(DeFi)
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                5. 경제 주체와 조직
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                가족 단위 생산, 장원, 길드
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                수직적 통합 기업, 표준화된 고용
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                네트워크형 조직, 긱 이코노미, 1인 기업, AI 협업
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        경제 발전은 농업 시대, 산업화 시대를 거쳐 디지털 전환 시대로 진입하며 각
        시대마다 가치 창출 방식, 시장 구조, 소유 및 분배, 거래 방식, 경제 주체
        등 경제 질서의 근본적인 변화를 겪어왔습니다. 농업 시대는 토지와
        자연자원에 의존했고, 산업화 시대는 물리적 자본과 대량 생산을 특징으로
        했습니다. 현재의 디지털 전환 시대는 데이터, 지식, 네트워크를 핵심
        자원으로 하며, AI와 블록체인 같은 기술이 이러한 변화를 더욱 가속화하고
        있습니다.
      </p>
    </Section>
  );
};

export default DigitalEconomyCharacteristics;
