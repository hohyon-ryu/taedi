"use client";

import React from "react";

// 스타일 컴포넌트 대신 일반 컴포넌트를 제공
export const AudioPageContainer = ({ children, className = "" }) => (
  <div className={`min-h-screen bg-white font-sans ${className}`}>
    {children}
  </div>
);

export const BookInfo = ({ children, className = "" }) => (
  <div className={`p-6 bg-gray-50 rounded-lg shadow-md ${className}`}>
    {children}
  </div>
);

export const AudioPlayer = ({ children, className = "" }) => (
  <div className={`p-4 bg-gray-100 rounded-lg mt-6 ${className}`}>
    {children}
  </div>
);

export const ContentSection = ({ children, className = "" }) => (
  <section className={`p-8 bg-gray-50 rounded-lg shadow-md mb-8 ${className}`}>
    {children}
  </section>
);

// 기존 글로벌 스타일 컴포넌트 유지
export default function AudioPageStylesComponent() {
  return (
    <style jsx global>{`
      .notion-style-page {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        color: #37352f;
        background-color: #ffffff;
        min-height: 100vh;
      }

      .custom-header {
        position: sticky;
        top: 0;
        z-index: 100;
        backdrop-filter: blur(10px);
        background-color: rgba(255, 255, 255, 0.85);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
      }

      .header-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 16px 24px;
        display: flex;
        align-items: center;
        gap: 20px;
      }

      .back-link-header {
        display: flex;
        align-items: center;
        padding: 8px 16px;
        border-radius: 6px;
        text-decoration: none;
        color: #2d7ff9;
        font-weight: 500;
        font-size: 15px;
        transition: all 0.2s ease;
        background-color: rgba(45, 127, 249, 0.1);
      }

      .back-link-header:hover {
        background-color: rgba(45, 127, 249, 0.2);
        transform: translateX(-2px);
      }

      .back-arrow {
        margin-right: 8px;
        font-size: 18px;
      }

      .header-title {
        font-size: 20px;
        font-weight: 600;
        color: #37352f;
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .banner-image-container {
        width: 100%;
        height: 300px;
        position: relative;
        margin-top: 0;
        margin-bottom: 48px;
      }

      .banner-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .content-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 24px 48px 24px;
      }

      .page-title {
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 16px;
        color: #37352f;
        line-height: 1.2;
      }

      .subtitle {
        font-size: 18px;
        color: #787774;
        margin-bottom: 36px;
        line-height: 1.5;
      }

      .audio-section {
        margin: 32px 0;
        padding: 24px;
        background-color: #f7f6f3;
        border-radius: 4px;
        transition: background-color 0.3s ease;
      }

      .audio-section:hover {
        background-color: #eee9e3;
      }

      .audio-player-container {
        margin-bottom: 24px;
      }

      .audio-player {
        width: 100%;
        height: 40px;
        outline: none;
      }

      .audio-info {
        color: #37352f;
        font-size: 16px;
        line-height: 1.6;
      }

      .tags-section {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 32px 0;
      }

      .tag {
        display: inline-block;
        padding: 5px 10px;
        background-color: #eeebea;
        border-radius: 3px;
        font-size: 14px;
        color: #37352f;
        transition: background-color 0.2s ease;
      }

      .tag:hover {
        background-color: #e5e4e2;
      }

      .related-research {
        margin-top: 40px;
        padding-top: 24px;
        border-top: 1px solid #eee9e3;
      }

      .related-research h2 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 16px;
        color: #37352f;
      }

      .related-research p {
        color: #37352f;
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 24px;
      }

      .back-link {
        display: inline-flex;
        align-items: center;
        padding: 6px 12px;
        background-color: #f7f6f3;
        color: #37352f;
        text-decoration: none;
        border-radius: 3px;
        font-size: 14px;
        transition: background-color 0.2s ease;
      }

      .back-link:hover {
        background-color: #eee9e3;
        text-decoration: none;
      }

      .back-link::before {
        content: "←";
        margin-right: 8px;
      }

      @media (max-width: 768px) {
        .banner-image-container {
          height: 200px;
          margin-bottom: 36px;
        }

        .content-container {
          padding: 0 16px 36px 16px;
        }

        .page-title {
          font-size: 32px;
        }

        .subtitle {
          font-size: 16px;
        }

        .audio-section {
          padding: 16px;
        }
      }
    `}</style>
  );
}
