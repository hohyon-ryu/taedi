"use client";

const ConceptCard = ({ concept }) => {
  if (!concept) {
    return null;
  }
  return (
    <div className="border border-gray-200 rounded-lg p-3 mb-2 bg-sky-50 shadow-sm w-full">
      <h4
        className="text-sm font-semibold text-gray-700 truncate"
        title={concept.name}
      >
        {concept.name}
      </h4>
      {concept.description && (
        <p className="text-xs text-gray-600 whitespace-normal break-words">
          {concept.description}
        </p>
      )}
    </div>
  );
};

export default ConceptCard;
