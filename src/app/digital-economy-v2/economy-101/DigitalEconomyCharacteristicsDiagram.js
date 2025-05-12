"use client";

import { useEffect } from "react";

const DigitalEconomyCharacteristicsDiagram = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.mermaid) {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js";
        script.async = true;
        script.onload = () => {
          if (window.mermaid) {
            window.mermaid.initialize({
              startOnLoad: true,
              theme: "default",
              securityLevel: "loose",
            });
            window.mermaid.init(
              undefined,
              document.querySelectorAll(".mermaid")
            );
          }
        };
        document.body.appendChild(script);
      } else {
        window.mermaid.initialize({
          startOnLoad: true,
          theme: "default",
          securityLevel: "loose",
        });
        window.mermaid.init(undefined, document.querySelectorAll(".mermaid"));
      }
    }
  }, []);

  return (
    <div className="my-8 p-6 rounded-lg shadow-lg bg-gray-50">
      <div className="mermaid">
        {`flowchart TD
    classDef digitalEra fill:#e6f2ff,stroke:#0066cc,stroke-width:2px
    classDef aiEra fill:#e6ffe6,stroke:#009900,stroke-width:2px
    classDef common fill:#fff2e6,stroke:#ff8c00,stroke-width:2px
    classDef challenge fill:#ffe6e6,stroke:#cc0000,stroke-width:2px
    
    DigitalEcon[("디지털 경제의<br>특성")]
    
    NoMarginalCost["한계비용 제로<br><small>한 번 만들면<br>복제 비용이 없어요</small>"]
    NetworkEffect["네트워크 효과<br><small>많이 쓸수록<br>더 가치가 높아져요</small>"]
    Platform["플랫폼 중심<br><small>다른 사람들을<br>연결해주는 회사가 커져요</small>"]
    WinnerTakes["승자독식<br><small>1등만 기억하고<br>2등은 잊혀져요</small>"]
    
    IntangibleAssets["무형자산 중심<br><small>만질 수 없는 것이<br>더 가치 있어요</small>"]
    
    AI_Intelligence["AI 지능화<br><small>기계가 스스로<br>생각하고 배워요</small>"]
    AI_Personalization["초개인화<br><small>나에게 딱 맞는<br>서비스를 제공해요</small>"]
    AI_Automation["자동화 가속<br><small>사람이 하던 일을<br>기계가 해요</small>"]
    AI_DataValue["데이터 가치화<br><small>많은 정보가<br>돈이 돼요</small>"]
    AI_Prediction["예측 경제<br><small>미래를 미리<br>알 수 있어요</small>"]
    
    Challenge1["불평등 심화<br><small>기술을 가진 사람과<br>없는 사람의 차이</small>"]
    Challenge2["일자리 변화<br><small>옛날 일은 사라지고<br>새로운 일이 생겨요</small>"]
    Challenge3["독점 문제<br><small>큰 회사들이<br>너무 커져요</small>"]
    
    DigitalEcon --> NoMarginalCost
    DigitalEcon --> NetworkEffect
    DigitalEcon --> Platform
    DigitalEcon --> WinnerTakes
    DigitalEcon --> IntangibleAssets
    
    DigitalEcon --> AI_Intelligence
    AI_Intelligence --> AI_Personalization
    AI_Intelligence --> AI_Automation
    AI_Intelligence --> AI_DataValue
    AI_Intelligence --> AI_Prediction
    
    AI_Automation --> Challenge1
    AI_Automation --> Challenge2
    Platform --> Challenge3
    WinnerTakes --> Challenge3
    
    NoMarginalCost:::digitalEra
    NetworkEffect:::digitalEra
    Platform:::digitalEra
    WinnerTakes:::digitalEra
    IntangibleAssets:::digitalEra
    
    AI_Intelligence:::aiEra
    AI_Personalization:::aiEra
    AI_Automation:::aiEra
    AI_DataValue:::aiEra
    AI_Prediction:::aiEra
    
    Challenge1:::challenge
    Challenge2:::challenge
    Challenge3:::challenge
    
    DigitalEcon:::common`}
      </div>
    </div>
  );
};

export default DigitalEconomyCharacteristicsDiagram;
