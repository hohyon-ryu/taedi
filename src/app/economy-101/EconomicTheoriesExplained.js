import TheoryCard from "./TheoryCard"; // TheoryCard import 추가
import { eraSummaries, theories } from "./economicTheoriesData";

const EconomicTheoriesExplained = () => {
  const theoriesByEra = theories.reduce((acc, theory) => {
    const era = theory.era || "기타";
    if (!acc[era]) {
      acc[era] = [];
    }
    acc[era].push(theory);
    return acc;
  }, {});

  const eraOrder = [
    "고대·중세 전통",
    "고전학파 세대",
    "신고전·마르크스·오스트리아 세대",
    "케인즈·제도·시카고 세대",
    "행동·신종합·신케인즈 세대",
    "현대 경제학",
  ];
  const sortedEras = eraOrder.filter((era) => theoriesByEra[era]);

  if (theoriesByEra["기타"]) {
    sortedEras.push("기타");
  }

  return (
    <div className="my-10 container mx-auto px-4 sm:px-6 lg:px-8">
      {/* 타이틀 글씨 크기 text-3xl -> text-2xl로 수정 */}
      <h2 className="text-2xl font-extrabold mb-10 text-gray-800 text-center border-b-4 border-blue-600 pb-4">
        주요 경제학 이론 상세 설명
      </h2>
      {sortedEras.map((era) => (
        <section key={era} className="mb-12">
          {eraSummaries[era] && eraSummaries[era].image && (
            <div className="relative mb-6 overflow-hidden rounded-lg shadow-lg">
              <img
                src={eraSummaries[era].image}
                alt={`${era} Banner`}
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "16/9", maxHeight: "150px" }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4">
                <h3 className="text-2xl font-bold text-white">{era}</h3>
                {/* 시대 기간 표시 추가 */}
                {theoriesByEra[era] &&
                  theoriesByEra[era][0] &&
                  theoriesByEra[era][0].period && (
                    <span className="text-sm text-gray-200 ml-2">
                      ({theoriesByEra[era][0].period})
                    </span>
                  )}
              </div>
            </div>
          )}
          {!eraSummaries[era]?.image && (
            <div className="flex items-baseline">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b-2 border-indigo-200">
                {era}
              </h3>
              {/* 시대 기간 표시 추가 */}
              {theoriesByEra[era] &&
                theoriesByEra[era][0] &&
                theoriesByEra[era][0].period && (
                  <span className="text-sm text-gray-500 ml-2">
                    ({theoriesByEra[era][0].period})
                  </span>
                )}
            </div>
          )}
          {eraSummaries[era] && eraSummaries[era].summary && (
            <p className="text-md text-gray-700 mb-6 p-4 bg-indigo-50 rounded-md shadow-sm">
              <strong className="font-semibold text-indigo-600">
                시대 요약:
              </strong>{" "}
              {eraSummaries[era].summary}
            </p>
          )}
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            {theoriesByEra[era].map((theory) => (
              <TheoryCard key={theory.id} theory={theory} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default EconomicTheoriesExplained;
