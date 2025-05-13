"use client";

import ConceptCard from "./ConceptCard";
import ScholarCard from "./ScholarCard";

const classColors = {
  ancient: "#0066cc",
  classical: "#ff8c00",
  marxist: "#cc0000",
  neoclassical: "#ff8c00",
  austrian: "#009900",
  keynesian: "#0099cc",
  institutional: "#6600cc",
  chicago: "#009900",
  behavioral: "#6600cc",
  modern: "#333333",
  gametheory: "#039be5",
  information: "#00acc1",
  environmental: "#66bb6a",
  digital: "#42a5f5",
  development: "#ffa726",
};

const getColorForClass = (diagramClass) => {
  return classColors[diagramClass] || "#dddddd";
};

const getColorForStatus = (status) => {
  const simplifiedStatus = (() => {
    if (
      status.includes("주류") ||
      status.includes("주요 흐름") ||
      status.includes("핵심 분야")
    ) {
      return "주류";
    }
    if (status.includes("비주류") || status.includes("독자적 학파")) {
      return "비주류";
    }
    if (
      status.includes("새로운 시도") ||
      status.includes("최신 동향") ||
      status.includes("최신 연구 경향")
    ) {
      return "새로운 시도";
    }
    if (
      status.includes("고대 사상") ||
      status.includes("지속적 영향") ||
      status.includes("분석 도구") ||
      status.includes("응용 분야")
    ) {
      return "기타";
    }
    return "기타";
  })();

  const statusColors = {
    주류: { bg: "bg-blue-500", text: "text-white" },
    비주류: { bg: "bg-green-500", text: "text-white" },
    "새로운 시도": { bg: "bg-purple-500", text: "text-white" },
    기타: { bg: "bg-gray-400", text: "text-black" },
  };
  return (
    statusColors[simplifiedStatus] || {
      bg: "bg-gray-200",
      text: "text-gray-700",
    }
  );
};

const TheoryCard = ({ theory }) => {
  const statusColor = theory.status
    ? getColorForStatus(theory.status)
    : { bg: "bg-gray-200", text: "text-gray-700" };
  return (
    <div
      className={`border border-gray-300 rounded-md mb-4 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full ${
        theory.diagramClass ? "border-l-4" : ""
      }`}
      style={{
        borderLeftColor: theory.diagramClass
          ? getColorForClass(theory.diagramClass)
          : "transparent",
      }}
    >
      <div className="p-5 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-blue-700">{theory.name}</h3>
          {theory.status && (
            <span
              className={`text-xs ${statusColor.bg} ${statusColor.text} px-2 py-1 rounded-full ml-2 whitespace-nowrap`}
            >
              {theory.status}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-500 font-normal mb-1">
          ({theory.period})
        </p>
        {theory.image && (
          <div className="my-4 flex justify-center">
            <img
              src={theory.image}
              alt={`Image of ${theory.name}`}
              className="w-32 h-32 object-cover rounded-full shadow-md"
            />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {theory.scholars && theory.scholars.length > 0 && (
            <div className="md:col-span-7 mb-3">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                주요 학자:
              </p>
              <div className="flex flex-wrap gap-2">
                {theory.scholars.map((scholar, index) => (
                  <ScholarCard key={index} scholar={scholar} />
                ))}
              </div>
            </div>
          )}
          {theory.keyConcepts && theory.keyConcepts.length > 0 && (
            <div className="md:col-span-5 mb-3">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                주요 개념:
              </p>
              <div className="flex flex-col gap-2">
                {theory.keyConcepts.map((concept, index) => (
                  <ConceptCard key={index} concept={concept} />
                ))}
              </div>
            </div>
          )}
        </div>
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          {theory.summary}
        </p>
      </div>
      <div className="mt-auto bg-gray-50 p-4 border-t border-gray-200 rounded-b-md">
        <p className="text-sm text-gray-600 italic">
          &ldquo;{theory.quote}&rdquo;
        </p>
      </div>
    </div>
  );
};

export default TheoryCard;
