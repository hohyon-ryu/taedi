import React from "react";
import AudioPageStyles from "../../components/AudioPageStyles";
import Link from "next/link";

export default function IndividualEmpowermentLayout({ children }) {
  return (
    <>
      <header className="custom-header">
        <div className="header-container">
          <Link href="/" className="back-link-header">
            <span className="back-arrow">←</span>
            <span className="back-text">홈으로</span>
          </Link>
          <h1 className="header-title">개인 강화, 공동체, 국가의 변화</h1>
        </div>
      </header>
      <main>{children}</main>
      <AudioPageStyles />
    </>
  );
}
