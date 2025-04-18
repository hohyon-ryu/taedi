import Header from "../components/Header";
import Research from "../components/Research";
import Team from "../components/Team";
import Vision from "../components/Vision";

export const metadata = {
  title: "TFCI Digital Transformation Team",
  description:
    "Taejae Future Consensus Institute - Digital Transformation Team. Pioneering the future through digital transformation research and innovative governance solutions.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Vision />
        <Research />
        <Team />
      </main>
    </>
  );
}
