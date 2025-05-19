import Section from "@/components/Section";

const DigitalEconomyCharacteristics = () => {
  return (
    <Section title="1. 디지털 경제의 특성">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
          <thead className="bg-indigo-50">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-indigo-800 border-b border-indigo-100 w-1/3">
                경제 질서 전환의 특성
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-indigo-800 border-b border-indigo-100 w-1/3">
                산업화의 경제 질서 변화
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-indigo-800 border-b border-indigo-100 w-1/3">
                디지털 전환의 경제 질서 변화
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                1. 가치 창출 방식의 변화
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                물리적 자원과 노동력 기반 가치 창출
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                데이터와 알고리즘 기반 무형자산 중심 가치 창출
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                2. 시장 구조와 경쟁 방식의 변화
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                규모의 경제와 자본 집약적 경쟁
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                네트워크 효과와 승자독식 구조의 플랫폼 경제
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                3. 소유권과 분배 구조의 변화
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                물리적 자산 중심의 소유권과 자본-노동 분배 구조
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                데이터 소유권 문제와 노동-소득 연결 약화
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                4. 거래 방식과 화폐 시스템의 변화
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                중앙화된 금융 시스템과 국가 통화 중심
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                블록체인 기반 탈중앙화 거래와 암호화폐의 등장
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                5. 경제 주체와 조직 형태의 변화
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                수직적 통합 기업과 고정된 고용 관계
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                네트워크형 조직과 긱 이코노미, 1인 기업의 부상
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        디지털 전환은 경제 질서의 근본적인 변화를 가져오고 있습니다. 산업화가
        물리적 자원과 자본의 집중을 통한 경제 질서를 형성했다면, 디지털 전환은
        무형자산, 네트워크 효과, 데이터 기반 가치 창출이라는 새로운 경제
        패러다임을 만들어내고 있습니다. 특히 AI와 블록체인 기술의 발전은 생산,
        소유, 분배, 거래의 기본 원리를 재정의하며 기존 경제 질서의 근본적인
        전환을 촉진하고 있습니다.
      </p>
    </Section>
  );
};

export default DigitalEconomyCharacteristics;
