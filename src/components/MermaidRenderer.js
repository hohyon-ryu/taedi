"use client";

import { useEffect, useRef, useState } from "react";

const MermaidRenderer = ({ chartDefinition, id }) => {
  const containerRef = useRef(null);
  const [isMermaidLoaded, setIsMermaidLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [uniqueId] = useState(
    () =>
      id || `mermaid-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  );

  useEffect(() => {
    const initializeMermaid = () => {
      if (window.mermaid) {
        try {
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
        } catch (err) {
          setError(err.message);
        }
      }
    };

    if (typeof window !== "undefined") {
      if (!window.mermaid) {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js";
        script.async = true;
        script.onload = initializeMermaid;
        script.onerror = () => {
          setError("Failed to load Mermaid library");
        };
        document.body.appendChild(script);
      } else {
        initializeMermaid();
      }
    }
  }, []);

  useEffect(() => {
    if (isMermaidLoaded && chartDefinition && containerRef.current) {
      try {
        // Clear any previous content and error state
        setError(null);
        containerRef.current.removeAttribute("data-processed");

        // Clear the container first
        containerRef.current.innerHTML = "";

        // Set unique ID for this diagram
        containerRef.current.id = uniqueId;

        // Add the chart definition as text content
        containerRef.current.textContent = chartDefinition;

        // Use mermaid.run() to render the chart
        window.mermaid.run({
          nodes: [containerRef.current],
        });
      } catch (error) {
        setError(error.message);
        if (containerRef.current) {
          containerRef.current.innerHTML =
            "<pre style='color: red; background: #fff; padding: 10px; border: 1px solid #ddd; white-space: pre-wrap;'>Mermaid Syntax Error: " +
            error.message +
            "\n\nChart Definition:\n" +
            chartDefinition +
            "</pre>";
        }
      }
    }
  }, [isMermaidLoaded, chartDefinition, uniqueId]); // Rerun if chartDefinition changes

  // Show error state if there's an error
  if (error) {
    return (
      <div
        className="mermaid-error"
        style={{
          padding: "20px",
          background: "#ffebee",
          border: "1px solid #f44336",
          borderRadius: "4px",
          margin: "10px 0",
        }}
      >
        <h4
          style={{ color: "#c62828", margin: "0 0 15px 0", fontSize: "16px" }}
        >
          🚨 Mermaid Syntax Error
        </h4>
        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#d32f2f" }}>Error Message:</strong>
          <pre
            style={{
              color: "#666",
              margin: "5px 0",
              fontSize: "12px",
              background: "#fff",
              padding: "8px",
              borderRadius: "3px",
              border: "1px solid #e0e0e0",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {error}
          </pre>
        </div>
        <details style={{ marginTop: "10px" }}>
          <summary
            style={{ color: "#d32f2f", cursor: "pointer", fontWeight: "bold" }}
          >
            View Chart Definition
          </summary>
          <pre
            style={{
              color: "#333",
              margin: "10px 0 0 0",
              fontSize: "11px",
              background: "#fff",
              padding: "10px",
              borderRadius: "3px",
              border: "1px solid #e0e0e0",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              maxHeight: "300px",
              overflow: "auto",
            }}
          >
            {chartDefinition}
          </pre>
        </details>
      </div>
    );
  }

  // Show loading state
  if (!isMermaidLoaded) {
    return (
      <div
        className="mermaid-loading"
        style={{
          padding: "20px",
          background: "#f5f5f5",
          border: "1px solid #ddd",
          borderRadius: "4px",
          textAlign: "center",
        }}
      >
        Loading Mermaid...
      </div>
    );
  }

  // Render the container div with the "mermaid" class and unique ID
  // Mermaid.js will look for this class to process the diagram
  return (
    <div
      ref={containerRef}
      className="mermaid"
      id={uniqueId}
      style={{ minHeight: "200px" }}
    >
      {/* Chart definition will be set via textContent in the effect */}
    </div>
  );
};

export default MermaidRenderer;
