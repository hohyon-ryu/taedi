"use client";

import Image from "next/image";
import React from "react";

const DigitalEconomyPoster = () => {
  return (
    <div className="bg-white relative">
      {/* A3 Poster Container - A3 proportions (297×420) */}
      <div className="mx-auto relative w-[1050px] h-[1485px] overflow-hidden bg-white shadow-xl print:shadow-none">
        {/* Background pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-gradient-to-br from-blue-500 to-purple-700"></div>

        {/* Header Section with Hero Image */}
        <div className="relative h-[300px] w-full overflow-hidden">
          <Image
            src="/static/images/posters/digital_economy/section1.png"
            alt="Digital Economy Header"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-purple-900/70 flex flex-col justify-center items-center text-white p-10">
            <h1 className="text-6xl font-bold mb-6 tracking-tight text-center">
              디지털 시대의 경제 질서 연구
            </h1>
            <div className="bg-white/20 backdrop-blur-md p-5 rounded-lg max-w-3xl">
              <p className="text-xl text-white italic font-medium text-center">
                "디지털 전환이 가속화됨에 따라 사회 구조는 어떻게 변화하며,
                이러한 변화는 기존 경제 질서에 어떤 영향을 미치는가?"
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 gap-6 p-8 mt-4">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Digital Revolution Section */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src="/static/images/posters/digital_economy/section2.png"
                  alt="Digital Revolution"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 to-blue-600/70 flex items-center p-6">
                  <h2 className="text-3xl font-bold text-white">
                    1. 디지털 시대 사회 변혁
                  </h2>
                </div>
              </div>

              <div className="p-5">
                <div className="grid grid-cols-2 gap-4">
                  {/* Society Changes */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-lg text-blue-800 border-b border-blue-200 pb-1">
                      개인과 가정
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>AI 활용으로 슈퍼휴먼 탄생 및 개인 능력 강화</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>전문직 역할 변화와 사회 양극화 가능성</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>전통적 가족관계 약화와 1인 가구 증가</span>
                      </li>
                    </ul>

                    <h4 className="font-bold text-lg text-blue-800 border-b border-blue-200 pb-1 mt-4">
                      이웃과 공동체
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>온라인 중심 커뮤니티의 활성화</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>공통 관심사 중심의 느슨한 공동체 형성</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-lg text-blue-800 border-b border-blue-200 pb-1">
                      도시와 국가
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>기능별 특화 도시 발전 (교육도시, 의료도시)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>구독형 도시 개념 등장과 도시 중심 행정</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>국가 역할 축소와 분권화 가속화</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>새로운 조세 체계와 국제 질서 형성</span>
                      </li>
                    </ul>

                    <h4 className="font-bold text-lg text-blue-800 border-b border-blue-200 pb-1 mt-4">
                      소유와 분배
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>지식재산권과 데이터 소유권 개념 재정립</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>개인 생산성 향상과 공유경제 확산</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Economic Order Section */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src="/static/images/posters/digital_economy/section3.png"
                  alt="Economic Order"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800/80 to-purple-600/70 flex items-center p-6">
                  <h2 className="text-3xl font-bold text-white">
                    2. 안전하고 건강한 경제 질서
                  </h2>
                </div>
              </div>

              <div className="p-5">
                <div className="grid grid-cols-3 gap-4">
                  {/* AS-IS */}
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <h4 className="text-lg font-bold text-purple-900 mb-2">
                      AS-IS
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>개인과 공동체 간 갈등</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>국가 단위 경제구조 한계</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>구시대적 조세 체계</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>데이터 소유권 개념 혼란</span>
                      </li>
                    </ul>
                  </div>

                  {/* TO-BE */}
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <h4 className="text-lg font-bold text-purple-900 mb-2">
                      TO-BE
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>개인과 공동체의 조화</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>도시 중심 네트워크 경제</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>투명한 디지털 조세 체계</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>명확한 디지털 자산 권리</span>
                      </li>
                    </ul>
                  </div>

                  {/* TO-DO */}
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <h4 className="text-lg font-bold text-purple-900 mb-2">
                      TO-DO
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">1.</span>
                        <span>개인과 공동체 변화 연구</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">2.</span>
                        <span>국가 개념과 역할 재정의</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">3.</span>
                        <span>디지털 시대 규제/조세</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">4.</span>
                        <span>데이터 소유권 재설계</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Research Projects Top */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src="/static/images/posters/digital_economy/section4.png"
                  alt="Research Projects"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-800/80 to-indigo-600/70 flex items-center p-6">
                  <h2 className="text-3xl font-bold text-white">
                    3. 핵심 연구 과제 I
                  </h2>
                </div>
              </div>

              <div className="p-5">
                <div className="space-y-5">
                  {/* Project 1 */}
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-lg border-l-4 border-indigo-400">
                    <h4 className="text-lg font-bold text-indigo-900 mb-1">
                      과제 1. 개인의 강화와 공동체 변화
                      <span className="text-xs font-normal text-indigo-600 ml-2">
                        (유재연)
                      </span>
                    </h4>
                    <p className="text-indigo-800 mb-2 text-sm italic">
                      디지털 기술은 어떻게 슈퍼휴먼을 만드는가, 그리고
                      슈퍼휴먼은 공동체와 도시를 어떻게 변화시키는가?
                    </p>

                    <div className="grid grid-cols-3 gap-3 text-xs">
                      <div className="bg-white/50 p-2 rounded">
                        <p className="font-bold text-indigo-800">
                          Daron Acemoglu
                        </p>
                        <p className="text-indigo-600">
                          MIT 교수, 노벨 경제학상
                        </p>
                        <p className="italic">
                          기술 편향적 변화와 AI의 생산성 및 불평등 영향 연구
                        </p>
                      </div>

                      <div className="bg-white/50 p-2 rounded">
                        <p className="font-bold text-indigo-800">
                          Erik Brynjolfsson
                        </p>
                        <p className="text-indigo-600">
                          스탠포드 디지털경제연구소
                        </p>
                        <p className="italic">
                          생산-분배-소비의 디지털화 연구, '생산성의 역설' 개념
                        </p>
                      </div>

                      <div className="bg-white/50 p-2 rounded">
                        <p className="font-bold text-indigo-800">
                          Shoshana Zuboff
                        </p>
                        <p className="text-indigo-600">하버드 경영대학원</p>
                        <p className="italic">
                          '감시 자본주의' 개념, 데이터 기반 권력구조 분석
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-lg border-l-4 border-indigo-400">
                    <h4 className="text-lg font-bold text-indigo-900 mb-1">
                      과제 2. 국가 기능의 재편과 도시-개인의 부상
                      <span className="text-xs font-normal text-indigo-600 ml-2">
                        (윤준영)
                      </span>
                    </h4>
                    <p className="text-indigo-800 mb-2 text-sm italic">
                      국가의 전통적 기능이 어떻게 도시와 개인에게 재분배되고,
                      이것이 미래 사회 구조를 재편할 것인가?
                    </p>

                    <div className="grid grid-cols-3 gap-3 text-xs">
                      <div className="bg-white/50 p-2 rounded">
                        <p className="font-bold text-indigo-800">
                          Simon Curtis
                        </p>
                        <p className="text-indigo-600">
                          University of East Anglia
                        </p>
                        <p className="italic">
                          도시 국제관계학(Urban IR) 선구자, 도시의 독립행위자
                          이론 정립
                        </p>
                      </div>

                      <div className="bg-white/50 p-2 rounded">
                        <p className="font-bold text-indigo-800">Aihwa Ong</p>
                        <p className="text-indigo-600">UC Berkeley</p>
                        <p className="italic">
                          '유연한 시민권'과 '점진적 주권' 개념 창시자
                        </p>
                      </div>

                      <div className="bg-white/50 p-2 rounded">
                        <p className="font-bold text-indigo-800">
                          Saskia Sassen
                        </p>
                        <p className="text-indigo-600">Columbia University</p>
                        <p className="italic">
                          '글로벌 도시'와 '탈국가화' 도시사회학 이론 정립
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Projects Bottom */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src="/static/images/posters/digital_economy/section5.png"
                  alt="Research Projects"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 to-blue-600/70 flex items-center p-6">
                  <h2 className="text-3xl font-bold text-white">
                    4. 핵심 연구 과제 II
                  </h2>
                </div>
              </div>

              <div className="p-5">
                <div className="space-y-5">
                  {/* Project 3 */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <h4 className="text-lg font-bold text-blue-900 mb-1">
                      과제 3. 규제와 조세의 변화
                      <span className="text-xs font-normal text-blue-600 ml-2">
                        (김민호)
                      </span>
                    </h4>
                    <p className="text-blue-800 mb-2 text-sm italic">
                      디지털 시대의 규제와 조세는 어떻게 달라지는가?
                    </p>

                    <div className="grid grid-cols-3 gap-3 text-xs">
                      <div className="bg-white/50 p-2 rounded">
                        <p className="font-bold text-blue-800">
                          Lawrence Lessig
                        </p>
                        <p className="text-blue-600">하버드 로스쿨</p>
                        <p className="italic">
                          '코드가 법이다(Code is Law)' 개념, 디지털 아키텍처와
                          규제 연구
                        </p>
                      </div>

                      <div className="bg-white/50 p-2 rounded">
                        <p className="font-bold text-blue-800">
                          Gabriel Zucman
                        </p>
                        <p className="text-blue-600">UC 버클리</p>
                        <p className="italic">
                          글로벌 조세 회피와 디지털 경제의 조세 정의 연구
                        </p>
                      </div>

                      <div className="bg-white/50 p-2 rounded">
                        <p className="font-bold text-blue-800">Julie Cohen</p>
                        <p className="text-blue-600">조지타운 로스쿨</p>
                        <p className="italic">
                          정보 자본주의 법적 구조와 디지털 규제 프레임워크 연구
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Project 4 */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <h4 className="text-lg font-bold text-blue-900 mb-1">
                      과제 4. 데이터 소유권과 자산 개념
                      <span className="text-xs font-normal text-blue-600 ml-2">
                        (노가빈)
                      </span>
                    </h4>
                    <p className="text-blue-800 mb-2 text-sm italic">
                      슈퍼 휴먼이 생산하는 데이터나 다양한 결과물에 대한
                      소유권은 어떻게 정립되어야 하는가?
                    </p>

                    <div className="grid grid-cols-3 gap-3 text-xs">
                      <div className="bg-white/50 p-2 rounded">
                        <p className="font-bold text-blue-800">
                          Viktor Mayer-Schönberger
                        </p>
                        <p className="text-blue-600">옥스퍼드 인터넷 연구소</p>
                        <p className="italic">
                          데이터 소유권과 빅데이터의 경제 가치 연구
                        </p>
                      </div>

                      <div className="bg-white/50 p-2 rounded">
                        <p className="font-bold text-blue-800">Lisa Nakamura</p>
                        <p className="text-blue-600">미시간 대학교</p>
                        <p className="italic">
                          디지털 불평등과 디지털 자산 접근권 연구
                        </p>
                      </div>

                      <div className="bg-white/50 p-2 rounded">
                        <p className="font-bold text-blue-800">
                          Arun Sundararajan
                        </p>
                        <p className="text-blue-600">NYU 경영대학원</p>
                        <p className="italic">
                          공유 경제와 디지털 소유권 개념 변화 연구
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Print Instructions - Hidden in print view */}
        <div className="p-6 bg-gray-100 mx-8 rounded-lg mt-6 print:hidden">
          <h3 className="text-lg font-bold text-gray-800 mb-3">A3 인쇄 지침</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• 이 포스터는 A3 용지(297×420mm)에 최적화되어 있습니다.</li>
            <li>• 인쇄 설정에서 용지 크기를 A3로 선택하세요.</li>
            <li>• 최상의 품질을 위해 컬러 인쇄를 권장합니다.</li>
            <li>
              • 여백 없음(Borderless) 옵션을 선택하면 더 나은 결과를 얻을 수
              있습니다.
            </li>
            <li>
              • 인쇄 미리보기를 통해 모든 내용이 올바르게 표시되는지 확인하세요.
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-600 italic">
          <div className="flex justify-between items-center px-8">
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
