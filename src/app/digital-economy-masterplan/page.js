import FutureEconomicOrderMasterPlan from "@/app/digital-economy-masterplan/FutureEconomicOrderMasterPlan";

const DigitalEconomyMasterplanPage = () => {
  return (
    <div className="bg-white min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <FutureEconomicOrderMasterPlan />

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
