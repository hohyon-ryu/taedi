"use client";

import dynamic from "next/dynamic";

// Import the client component with dynamic import and disable SSR
const DigitalEconomyCharacteristicsDiagram = dynamic(
  () => import("./DigitalEconomyCharacteristicsDiagram"),
  { ssr: false }
);

export default function DigitalEconomyCharacteristicsWrapper() {
  return <DigitalEconomyCharacteristicsDiagram />;
}
