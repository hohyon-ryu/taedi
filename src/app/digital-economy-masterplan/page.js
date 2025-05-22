import MasterPlanContent from "@/app/digital-economy-masterplan/MasterPlanContent";

const DigitalEconomyMasterplanPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
            디지털 전환과 경제 질서 변혁 마스터플랜
          </h1>
          <p className="mt-3 text-xl text-gray-600 sm:mt-4">
            새로운 디지털 시대의 경제 질서 재편을 위한 종합 계획
          </p>
        </header>

        <MasterPlanContent />

        <footer className="mt-12 pt-8 border-t border-gray-300 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} 태재미래전략연구원 디지털 전환과
            사회변혁 팀
          </p>
          <p>All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default DigitalEconomyMasterplanPage;
