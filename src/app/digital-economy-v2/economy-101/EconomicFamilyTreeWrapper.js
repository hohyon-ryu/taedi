"use client";

import dynamic from "next/dynamic";

// Import the client component with dynamic import and disable SSR
const EconomicFamilyTreeDiagram = dynamic(
  () => import("./EconomicFamilyTreeDiagram"),
  { ssr: false }
);

export default function EconomicFamilyTreeWrapper() {
  return <EconomicFamilyTreeDiagram />;
}