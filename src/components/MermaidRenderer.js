"use client";

import { useEffect, useRef, useState } from "react";

const MermaidRenderer = ({ chartDefinition }) => {
  const containerRef = useRef(null);
  const [isMermaidLoaded, setIsMermaidLoaded] = useState(false);

  useEffect(() => {
    const initializeMermaid = () => {
      if (window.mermaid) {
        window.mermaid.initialize({
          startOnLoad: false, // We will manually render
          theme: "base",
          securityLevel: "loose",
          flowchart: {
            // Consistent with EconomicFamilyTreeDiagram
            clusterBkg: "#ffffff",
            clusterBorder: "#bbbbbb",
          },
        });
        setIsMermaidLoaded(true);
      }
    };

    if (typeof window !== "undefined") {
      if (!window.mermaid) {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js";
        script.async = true;
        script.onload = initializeMermaid;
        document.body.appendChild(script);
      } else {
        initializeMermaid();
      }
    }
  }, []);

  useEffect(() => {
    if (isMermaidLoaded && chartDefinition && containerRef.current) {
      // Assign the chart definition to the div for mermaid.init to find
      // Or, mermaid.init can sometimes take the string directly, but this is safer with DOM nodes.
      // Forcing a re-flow or ensuring the DOM is updated before init might be needed.
      // However, mermaid.init is designed to scan, so this should be okay.

      // The mermaid definition needs to be *inside* the element that mermaid.init targets.
      // So, we'll set it and then call init.
      // containerRef.current.textContent = chartDefinition; // Removed: will render as child instead
      // Mermaid will parse it.

      try {
        // Remove data-processed attribute to allow re-rendering if chartDefinition changes
        containerRef.current.removeAttribute("data-processed");

        // Use mermaid.run() instead of deprecated mermaid.init()
        // mermaid.run() expects the node itself to contain the definition.
        // React ensures `chartDefinition` is a child of `containerRef.current`.
        window.mermaid.run({
          nodes: [containerRef.current],
        });
      } catch (error) {
        console.error("Error rendering Mermaid diagram:", error);
        if (containerRef.current) {
          containerRef.current.innerHTML =
            "<pre>Error rendering diagram: " + error.message + "</pre>";
        }
      }
    }
  }, [isMermaidLoaded, chartDefinition]); // Rerun if chartDefinition changes

  // Render the container div with the "mermaid" class
  // Mermaid.js will look for this class to process the diagram
  return (
    <div ref={containerRef} className="mermaid">
      {chartDefinition}
    </div>
  );
};

export default MermaidRenderer;
