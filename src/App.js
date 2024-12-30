import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Vision from "./components/Vision";
import Research from "./components/Research";
import Team from "./components/Team";
import OKR from "./components/OKR";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <main>
                  <Vision />
                  <Research />
                  <Team />
                </main>
              </>
            }
          />
          <Route path="/okr" element={<OKR />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
