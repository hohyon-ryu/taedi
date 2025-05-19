"use client";

import { useEffect, useRef, useState } from "react";

const MermaidRenderer = ({ chartDefinition }) => {
  const containerRef = useRef(null);
  const [isMermaidLoaded, setIsMermaidLoaded] = useState(false);
  const [svgContent, setSvgContent] = useState("");

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
        // Initialize Mermaid for the specific element referred to by containerRef.current
        // The second argument to init can be a single DOM element or a NodeList.
        window.mermaid.init(undefined, containerRef.current);
      } catch (error) {
        console.error("Error initializing Mermaid diagram:", error);
        if (containerRef.current) {
          containerRef.current.innerHTML = // Use innerHTML here for formatted error
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
