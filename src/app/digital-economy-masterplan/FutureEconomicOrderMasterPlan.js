import ConclusionSection from "./components/ConclusionSection";
import DistributionMechanisms from "./components/DistributionMechanisms";
import EconomicOrderEvolution from "./components/EconomicOrderEvolution";
import MasterPlanHeader from "./components/MasterPlanHeader";
import NewEconomicActors from "./components/NewEconomicActors";
import OwnershipParadigm from "./components/OwnershipParadigm";
import ResearchRoadmap from "./components/ResearchRoadmap";
import RestraintEconomyModel from "./components/RestraintEconomyModel";

const FutureEconomicOrderMasterPlan = () => {
  return (
    <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none">
      <MasterPlanHeader />
      <ResearchRoadmap />
      <EconomicOrderEvolution />
      <NewEconomicActors />
      <OwnershipParadigm />
      <DistributionMechanisms />
      <RestraintEconomyModel />
      <ConclusionSection />
    </article>
  );
};

export default FutureEconomicOrderMasterPlan;
