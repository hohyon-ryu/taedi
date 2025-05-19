const Section = ({ title, children, titleLevel = 2 }) => {
  const titleClassName =
    "font-bold mb-3 text-gray-800 border-b pb-2 " +
    (titleLevel === 2 ? "text-2xl" : "text-xl");

  let TitleComponent;
  if (titleLevel === 1) {
    TitleComponent = <h1 className={titleClassName}>{title}</h1>;
  } else if (titleLevel === 3) {
    TitleComponent = <h3 className={titleClassName}>{title}</h3>;
  } else if (titleLevel === 4) {
    TitleComponent = <h4 className={titleClassName}>{title}</h4>;
  } else if (titleLevel === 5) {
    TitleComponent = <h5 className={titleClassName}>{title}</h5>;
  } else if (titleLevel === 6) {
    TitleComponent = <h6 className={titleClassName}>{title}</h6>;
  } else {
    // Default to h2
    TitleComponent = <h2 className={titleClassName}>{title}</h2>;
  }

  return (
    <div className="mb-8 p-4 bg-gray-50 rounded-lg shadow">
      {TitleComponent}
      <div className="space-y-2 text-gray-700">{children}</div>
    </div>
  );
};

export default Section;
