"use client";

import Image from "next/image";
import React from "react";

const DigitalEconomyPoster = () => {
  return (
    <div className="bg-white relative">
      {/* A3 Poster Container - A3 proportions (297×420) */}
      <div className="mx-auto relative w-[1050px] h-[1485px] overflow-hidden bg-white shadow-xl print:shadow-none">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-gray-100"></div>

        {/* Subtle geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/static/images/posters/digital_economy/section1.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        </div>

        {/* Accent lines */}
        <div className="absolute left-[100px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-indigo-200 to-transparent opacity-30"></div>
        <div className="absolute right-[100px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-indigo-200 to-transparent opacity-30"></div>

        {/* Header Section */}
        <div className="relative pt-20 px-24">
          <div className="flex flex-col items-center">
            <h1 className="text-7xl font-bold tracking-tight text-slate-800 mb-6 text-center">
              디지털 시대의 경제 질서 연구
            </h1>
            <div className="w-40 h-[1px] bg-gradient-to-r from-indigo-300 via-blue-400 to-indigo-300 my-6"></div>
            <div className="max-w-3xl">
              <p className="text-2xl text-slate-600 italic font-medium text-center leading-relaxed">
                "디지털 전환이 가속화됨에 따라 사회 구조는 어떻게 변화하며,
                이러한 변화는 기존 경제 질서에 어떤 영향을 미치는가?"
              </p>
            </div>
          </div>

          {/* Subtle header image */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] opacity-10 overflow-hidden">
            <Image
              src="/static/images/posters/digital_economy/section1.png"
              alt="Digital Economy Header"
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-16 px-24">
          {/* Section 1: Digital Revolution */}
          <div className="mb-20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center border border-blue-200">
                <span className="text-blue-700 font-bold text-xl">1</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-800 ml-4 tracking-tight">
                디지털 시대 사회 변혁
              </h2>
              <div className="ml-6 flex-grow h-[1px] bg-gradient-to-r from-blue-200 to-transparent"></div>

              {/* Subtle section image */}
              <div className="w-16 h-16 relative opacity-20 ml-4">
                <Image
                  src="/static/images/posters/digital_economy/section2.png"
                  alt="Digital Revolution"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-8 pl-16">
              {/* Column 1 */}
              <div>
                <h4 className="font-bold text-lg text-blue-800 border-b border-blue-100 pb-2 mb-4">
                  개인과 가정
                </h4>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 opacity-70">◆</span>
                    <span>AI 활용으로 슈퍼휴먼 탄생 및 개인 능력 강화</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 opacity-70">◆</span>
                    <span>전문직 역할 변화와 사회 양극화 가능성</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 opacity-70">◆</span>
                    <span>전통적 가족관계 약화와 1인 가구 증가</span>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h4 className="font-bold text-lg text-blue-800 border-b border-blue-100 pb-2 mb-4">
                  이웃과 공동체
                </h4>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 opacity-70">◆</span>
                    <span>온라인 중심 커뮤니티의 활성화</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 opacity-70">◆</span>
                    <span>공통 관심사 중심의 느슨한 공동체 형성</span>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h4 className="font-bold text-lg text-blue-800 border-b border-blue-100 pb-2 mb-4">
                  도시와 국가
                </h4>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 opacity-70">◆</span>
                    <span>기능별 특화 도시 발전 (교육도시, 의료도시)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 opacity-70">◆</span>
                    <span>구독형 도시 개념 등장과 도시 중심 행정</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 opacity-70">◆</span>
                    <span>국가 역할 축소와 분권화 가속화</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 opacity-70">◆</span>
                    <span>새로운 조세 체계와 국제 질서 형성</span>
                  </li>
                </ul>
              </div>

              {/* Column 4 */}
              <div>
                <h4 className="font-bold text-lg text-blue-800 border-b border-blue-100 pb-2 mb-4">
                  소유와 분배
                </h4>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 opacity-70">◆</span>
                    <span>지식재산권과 데이터 소유권 개념 재정립</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 opacity-70">◆</span>
                    <span>개인 생산성 향상과 공유경제 확산</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2: Economic Order */}
          <div className="mb-20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center border border-purple-200">
                <span className="text-purple-700 font-bold text-xl">2</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-800 ml-4 tracking-tight">
                안전하고 건강한 경제 질서
              </h2>
              <div className="ml-6 flex-grow h-[1px] bg-gradient-to-r from-purple-200 to-transparent"></div>

              {/* Subtle section image */}
              <div className="w-16 h-16 relative opacity-20 ml-4">
                <Image
                  src="/static/images/posters/digital_economy/section3.png"
                  alt="Economic Order"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>

            <div className="pl-16 flex space-x-8">
              {/* AS-IS */}
              <div className="flex-1">
                <div className="border-l-2 border-purple-200 pl-6 py-2">
                  <h4 className="text-xl font-bold text-purple-800 mb-4">
                    AS-IS
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 opacity-70">◆</span>
                      <span>개인과 공동체 간 갈등</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 opacity-70">◆</span>
                      <span>국가 단위 경제구조 한계</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 opacity-70">◆</span>
                      <span>구시대적 조세 체계</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 opacity-70">◆</span>
                      <span>데이터 소유권 개념 혼란</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* TO-BE */}
              <div className="flex-1">
                <div className="border-l-2 border-purple-200 pl-6 py-2">
                  <h4 className="text-xl font-bold text-purple-800 mb-4">
                    TO-BE
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 opacity-70">◆</span>
                      <span>개인과 공동체의 조화</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 opacity-70">◆</span>
                      <span>도시 중심 네트워크 경제</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 opacity-70">◆</span>
                      <span>투명한 디지털 조세 체계</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 opacity-70">◆</span>
                      <span>명확한 디지털 자산 권리</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* TO-DO */}
              <div className="flex-1">
                <div className="border-l-2 border-purple-200 pl-6 py-2">
                  <h4 className="text-xl font-bold text-purple-800 mb-4">
                    TO-DO
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 opacity-70">1</span>
                      <span>개인과 공동체 변화 연구</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 opacity-70">2</span>
                      <span>국가 개념과 역할 재정의</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 opacity-70">3</span>
                      <span>디지털 시대 규제/조세</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 opacity-70">4</span>
                      <span>데이터 소유권 재설계</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Research Projects I */}
          <div className="mb-20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center border border-indigo-200">
                <span className="text-indigo-700 font-bold text-xl">3</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-800 ml-4 tracking-tight">
                핵심 연구 과제 I
              </h2>
              <div className="ml-6 flex-grow h-[1px] bg-gradient-to-r from-indigo-200 to-transparent"></div>

              {/* Subtle section image */}
              <div className="w-16 h-16 relative opacity-20 ml-4">
                <Image
                  src="/static/images/posters/digital_economy/section4.png"
                  alt="Research Projects"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>

            <div className="pl-16 space-y-12">
              {/* Project 1 */}
              <div>
                <div className="flex items-center mb-4">
                  <h4 className="text-xl font-bold text-indigo-800">
                    과제 1. 개인의 강화와 공동체 변화
                  </h4>
                  <span className="text-sm text-indigo-600 ml-3 bg-indigo-50 px-2 py-1 rounded">
                    유재연
                  </span>
                </div>

                <p className="text-slate-600 mb-6 text-sm italic max-w-3xl">
                  디지털 기술은 어떻게 슈퍼휴먼을 만드는가, 그리고 슈퍼휴먼은
                  공동체와 도시를 어떻게 변화시키는가?
                </p>

                <div className="grid grid-cols-3 gap-6">
                  <div className="border-t border-indigo-100 pt-4">
                    <p className="font-bold text-indigo-800 text-sm">
                      Daron Acemoglu
                    </p>
                    <p className="text-xs text-indigo-600 mb-1">
                      MIT 교수, 노벨 경제학상
                    </p>
                    <p className="text-xs text-slate-600 italic">
                      기술 편향적 변화와 AI의 생산성 및 불평등 영향 연구
                    </p>
                  </div>

                  <div className="border-t border-indigo-100 pt-4">
                    <p className="font-bold text-indigo-800 text-sm">
                      Erik Brynjolfsson
                    </p>
                    <p className="text-xs text-indigo-600 mb-1">
                      스탠포드 디지털경제연구소
                    </p>
                    <p className="text-xs text-slate-600 italic">
                      생산-분배-소비의 디지털화 연구, '생산성의 역설' 개념
                    </p>
                  </div>

                  <div className="border-t border-indigo-100 pt-4">
                    <p className="font-bold text-indigo-800 text-sm">
                      Shoshana Zuboff
                    </p>
                    <p className="text-xs text-indigo-600 mb-1">
                      하버드 경영대학원
                    </p>
                    <p className="text-xs text-slate-600 italic">
                      '감시 자본주의' 개념, 데이터 기반 권력구조 분석
                    </p>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex items-center mb-4">
                  <h4 className="text-xl font-bold text-indigo-800">
                    과제 2. 국가 기능의 재편과 도시-개인의 부상
                  </h4>
                  <span className="text-sm text-indigo-600 ml-3 bg-indigo-50 px-2 py-1 rounded">
                    윤준영
                  </span>
                </div>

                <p className="text-slate-600 mb-6 text-sm italic max-w-3xl">
                  국가의 전통적 기능이 어떻게 도시와 개인에게 재분배되고, 이것이
                  미래 사회 구조를 재편할 것인가?
                </p>

                <div className="grid grid-cols-3 gap-6">
                  <div className="border-t border-indigo-100 pt-4">
                    <p className="font-bold text-indigo-800 text-sm">
                      Simon Curtis
                    </p>
                    <p className="text-xs text-indigo-600 mb-1">
                      University of East Anglia
                    </p>
                    <p className="text-xs text-slate-600 italic">
                      도시 국제관계학(Urban IR) 선구자, 도시의 독립행위자 이론
                      정립
                    </p>
                  </div>

                  <div className="border-t border-indigo-100 pt-4">
                    <p className="font-bold text-indigo-800 text-sm">
                      Aihwa Ong
                    </p>
                    <p className="text-xs text-indigo-600 mb-1">UC Berkeley</p>
                    <p className="text-xs text-slate-600 italic">
                      '유연한 시민권'과 '점진적 주권' 개념 창시자
                    </p>
                  </div>

                  <div className="border-t border-indigo-100 pt-4">
                    <p className="font-bold text-indigo-800 text-sm">
                      Saskia Sassen
                    </p>
                    <p className="text-xs text-indigo-600 mb-1">
                      Columbia University
                    </p>
                    <p className="text-xs text-slate-600 italic">
                      '글로벌 도시'와 '탈국가화' 도시사회학 이론 정립
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Research Projects II */}
          <div className="mb-20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center border border-blue-200">
                <span className="text-blue-700 font-bold text-xl">4</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-800 ml-4 tracking-tight">
                핵심 연구 과제 II
              </h2>
              <div className="ml-6 flex-grow h-[1px] bg-gradient-to-r from-blue-200 to-transparent"></div>

              {/* Subtle section image */}
              <div className="w-16 h-16 relative opacity-20 ml-4">
                <Image
                  src="/static/images/posters/digital_economy/section5.png"
                  alt="Research Projects"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>

            <div className="pl-16 space-y-12">
              {/* Project 3 */}
              <div>
                <div className="flex items-center mb-4">
                  <h4 className="text-xl font-bold text-blue-800">
                    과제 3. 규제와 조세의 변화
                  </h4>
                  <span className="text-sm text-blue-600 ml-3 bg-blue-50 px-2 py-1 rounded">
                    김민호
                  </span>
                </div>

                <p className="text-slate-600 mb-6 text-sm italic max-w-3xl">
                  디지털 시대의 규제와 조세는 어떻게 달라지는가?
                </p>

                <div className="grid grid-cols-3 gap-6">
                  <div className="border-t border-blue-100 pt-4">
                    <p className="font-bold text-blue-800 text-sm">
                      Lawrence Lessig
                    </p>
                    <p className="text-xs text-blue-600 mb-1">하버드 로스쿨</p>
                    <p className="text-xs text-slate-600 italic">
                      '코드가 법이다(Code is Law)' 개념, 디지털 아키텍처와 규제
                      연구
                    </p>
                  </div>

                  <div className="border-t border-blue-100 pt-4">
                    <p className="font-bold text-blue-800 text-sm">
                      Gabriel Zucman
                    </p>
                    <p className="text-xs text-blue-600 mb-1">UC 버클리</p>
                    <p className="text-xs text-slate-600 italic">
                      글로벌 조세 회피와 디지털 경제의 조세 정의 연구
                    </p>
                  </div>

                  <div className="border-t border-blue-100 pt-4">
                    <p className="font-bold text-blue-800 text-sm">
                      Julie Cohen
                    </p>
                    <p className="text-xs text-blue-600 mb-1">
                      조지타운 로스쿨
                    </p>
                    <p className="text-xs text-slate-600 italic">
                      정보 자본주의 법적 구조와 디지털 규제 프레임워크 연구
                    </p>
                  </div>
                </div>
              </div>

              {/* Project 4 */}
              <div>
                <div className="flex items-center mb-4">
                  <h4 className="text-xl font-bold text-blue-800">
                    과제 4. 데이터 소유권과 자산 개념
                  </h4>
                  <span className="text-sm text-blue-600 ml-3 bg-blue-50 px-2 py-1 rounded">
                    노가빈
                  </span>
                </div>

                <p className="text-slate-600 mb-6 text-sm italic max-w-3xl">
                  슈퍼 휴먼이 생산하는 데이터나 다양한 결과물에 대한 소유권은
                  어떻게 정립되어야 하는가?
                </p>

                <div className="grid grid-cols-3 gap-6">
                  <div className="border-t border-blue-100 pt-4">
                    <p className="font-bold text-blue-800 text-sm">
                      Viktor Mayer-Schönberger
                    </p>
                    <p className="text-xs text-blue-600 mb-1">
                      옥스퍼드 인터넷 연구소
                    </p>
                    <p className="text-xs text-slate-600 italic">
                      데이터 소유권과 빅데이터의 경제 가치 연구
                    </p>
                  </div>

                  <div className="border-t border-blue-100 pt-4">
                    <p className="font-bold text-blue-800 text-sm">
                      Lisa Nakamura
                    </p>
                    <p className="text-xs text-blue-600 mb-1">미시간 대학교</p>
                    <p className="text-xs text-slate-600 italic">
                      디지털 불평등과 디지털 자산 접근권 연구
                    </p>
                  </div>

                  <div className="border-t border-blue-100 pt-4">
                    <p className="font-bold text-blue-800 text-sm">
                      Arun Sundararajan
                    </p>
                    <p className="text-xs text-blue-600 mb-1">NYU 경영대학원</p>
                    <p className="text-xs text-slate-600 italic">
                      공유 경제와 디지털 소유권 개념 변화 연구
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Print Instructions - Hidden in print view */}
        <div className="p-6 bg-gray-50 mx-24 rounded-lg mt-6 print:hidden border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-3">A3 인쇄 지침</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-gray-400 mr-2">•</span>
              <span>이 포스터는 A3 용지(297×420mm)에 최적화되어 있습니다.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2">•</span>
              <span>인쇄 설정에서 용지 크기를 A3로 선택하세요.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2">•</span>
              <span>최상의 품질을 위해 컬러 인쇄를 권장합니다.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2">•</span>
              <span>
                여백 없음(Borderless) 옵션을 선택하면 더 나은 결과를 얻을 수
                있습니다.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2">•</span>
              <span>
                인쇄 미리보기를 통해 모든 내용이 올바르게 표시되는지 확인하세요.
              </span>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-500 italic">
          <div className="flex justify-between items-center px-24">
            <div>© 2025 태재미래전략연구원</div>
            <div>디지털 전환과 사회변혁 팀</div>
            <div>A3 포스터 (297×420mm)</div>
          </div>
        </div>

        {/* Print-specific styles */}
        <style jsx global>{`
          @media print {
            @page {
              size: A3;
              margin: 0;
            }
            body {
              margin: 0;
              padding: 0;
            }
            .print\\:hidden {
              display: none !important;
            }
            .print\\:shadow-none {
              box-shadow: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default DigitalEconomyPoster;
