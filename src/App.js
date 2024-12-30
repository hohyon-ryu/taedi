import React from "react";
import Header from "./components/Header";
import Vision from "./components/Vision";
import Research from "./components/Research";
import Team from "./components/Team";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Vision />
        <Research />
        <Team />
      </main>
    </div>
  );
}

export default App;
