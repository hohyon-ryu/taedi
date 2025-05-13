"use client";

const ScholarCard = ({ scholar }) => {
  if (!scholar) {
    return null;
  }

  return (
    <div className="border border-gray-200 rounded-lg bg-slate-50 shadow-sm w-40 flex-shrink-0 overflow-hidden">
      {scholar.image && (
        <img
          src={scholar.image}
          alt={scholar.nameKr}
          className="w-full h-32 object-cover mb-2"
        />
      )}
      <div className="p-2">
        <h4
          className="text-xs font-semibold text-gray-700 truncate"
          title={scholar.nameKr}
        >
          {scholar.nameKr}
        </h4>
        {scholar.nameEn && (
          <p
            className="text-xs text-gray-500 italic mb-1 truncate"
            title={scholar.nameEn}
          >
            {scholar.nameEn}
          </p>
        )}
        {scholar.achievements && (
          <p className="text-xxs text-gray-600 whitespace-normal break-words leading-snug">
            {scholar.achievements}
          </p>
        )}
      </div>
    </div>
  );
};

export default ScholarCard;
