import DigitalEconomyCharacteristics from "@/app/digital-economy-masterplan/DigitalEconomyCharacteristics";
import EconomicOrderChangeResearchPlan from "@/app/digital-economy-masterplan/EconomicOrderChangeResearchPlan";
import ResearchStrategy from "@/app/digital-economy-masterplan/ResearchStrategy";
import TransformationFramework from "@/app/digital-economy-masterplan/TransformationFramework";

const DigitalEconomyMasterplanPage = () => {
  return (
    <div className="bg-white min-h-screen py-6 px-2 sm:px-4 lg:px-6 text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3 text-gray-900 tracking-tight">
            디지털 전환과 경제 질서 변혁 마스터플랜
          </h1>
        </div>
        {/* 1. 디지털 경제의 특성 */}
        <DigitalEconomyCharacteristics />
        {/* 2. 변화의 흐름 */}
        <EconomicOrderChangeResearchPlan />
        {/* 3. 변화 프레임워크: AS-IS, TO-BE, TO-DO */}
        <TransformationFramework />

        {/* Page break before ResearchStrategy */}
        {/* <div className="page-break-before"></div> */}

        {/* 4. 연구 주제 연구 전략 */}
        <ResearchStrategy />
        {/* 푸터 */}
        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} 태재미래전략연구원 디지털 전환과 사회변혁
          팀
        </div>
      </div>
    </div>
  );
};

export default DigitalEconomyMasterplanPage;
