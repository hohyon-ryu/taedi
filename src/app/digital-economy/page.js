import Image from "next/image";
import React from "react";

export const metadata = {
  title: "디지털 시대의 경제 질서 연구 | 태재미래전략연구원",
  description:
    "디지털 전환이 가속화됨에 따라 사회 구조는 어떻게 변화하며, 이러한 변화는 기존 경제 질서에 어떤 영향을 미치는가? 디지털 시대의 경제 질서에 대한 연구 기획안입니다.",
  keywords:
    "디지털 경제, 디지털 시대, 경제 질서, 디지털 전환, 사회 변화, 미래 경제, 태재미래전략연구원",
  openGraph: {
    title: "디지털 시대의 경제 질서 연구 | 태재미래전략연구원",
    description:
      "디지털 전환에 따른 사회 구조 변화와 경제 질서에 미치는 영향에 대한 연구",
    url: "https://taedi.org/digital-economy",
    siteName: "태재미래전략연구원 디지털 전환팀",
    locale: "ko_KR",
    type: "article",
    publishedTime: "2025-04-18T00:00:00Z",
  },
};

const DigitalEconomyPoster = () => {
  return (
    <div className="bg-white min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold mb-2 text-gray-900 tracking-tight">
            디지털 시대의 경제 질서 연구 기획안
          </h1>
          <div className="bg-gray-100 p-3 rounded-lg inline-block">
            <p className="text-base text-gray-800 italic font-medium">
              "디지털 전환이 가속화됨에 따라 사회 구조는 어떻게 변화하며, 이러한
              변화는 기존 경제 질서에 어떤 영향을 미치는가?"
            </p>
          </div>
        </div>

        {/* 디지털 혁명과 사회적 파급 효과 */}
        <div className="mb-2 bg-white overflow-hidden">
          <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                <Image
                  src="/static/images/posters/digital_economy/section2.png"
                  alt=""
                  width={800}
                  height={200}
                  className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                  style={{
                    maskImage:
                      "linear-gradient(to right, transparent 20%, black 50%)",
                  }}
                />
              </div>
            </div>
            <div className="relative z-10 flex justify-between items-center">
              <h2 className="text-lg font-bold">1. 디지털 시대 사회 변혁</h2>
            </div>
          </div>

          <div className="px-0 py-3">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-gray-50 p-2 rounded-lg">
                <h4 className="text-base font-bold text-gray-800 mb-1">개인</h4>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>
                    • AI로 인한 개인의 능력 강화로 슈퍼휴먼 탄생 - 자기 해결
                    능력이 뛰어난 개인의 등장
                  </li>
                  <li>
                    • AI를 활용하여 영향력 증폭(10%), 비용 절감(30~70%), 소외
                    계층으로 새롭게 분화
                  </li>
                  <li>• 전문직의 역할이 지식에서 책임으로 변화</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-2 rounded-lg">
                <h4 className="text-base font-bold text-gray-800 mb-1">가정</h4>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>
                    • 가족 제도 변화 - 결혼과 출산을 선택으로 인식하는 경향 증가
                  </li>
                  <li>• 개인 강화로 가족에 대한 의존도 감소, 가족관계 약화</li>
                  <li>• AI가 건강을 책임지고 커리어를 돕는 스마트홈</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-2 rounded-lg">
                <h4 className="text-base font-bold text-gray-800 mb-1">
                  커뮤니티
                </h4>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>
                    • 능력이 강화된 개인들이 공통 관심사나 가치관 중심으로
                    형성되는 느슨한 공동체
                  </li>
                  <li>• 물리적 이동의 감소로 온라인 중심 커뮤니티 활성화</li>
                  <li>• 개인의 사회적 의미가 능력에서 관계로 변화</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-2 rounded-lg">
                <h4 className="text-base font-bold text-gray-800 mb-1">도시</h4>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>
                    • 기능별로 전문화된 도시 발전 - 교육도시, 의료도시 등으로
                    특화
                  </li>
                  <li>
                    • 개인이 필요에 따라 도시를 선택하는 구독형 도시 개념 등장
                  </li>
                  <li>
                    • 국가 기능의 90%가 도시로 이전, 도시 중심의 행정 체계 구축
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-2 rounded-lg">
                <h4 className="text-base font-bold text-gray-800 mb-1">국가</h4>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• 개인과 국가의 관계 재정립 - 국가 역할 축소와 분권화</li>
                  <li>
                    • 조세 체계의 변화 - 로봇세 등 새로운 과세 대상과 방식 등장
                  </li>
                  <li>• 국경의 중요성 감소와 도시 중심의 국제 질서 형성</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-2 rounded-lg">
                <h4 className="text-base font-bold text-gray-800 mb-1">
                  소유와 분배
                </h4>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>
                    • 지식재산권과 데이터 소유권에 대한 새로운 개념 정립 필요
                  </li>
                  <li>
                    • 개인 생산성 향상으로 소유 개념의 변화와 공유경제 확산
                  </li>
                  <li>• 국가의 분배 기능 약화와 새로운 경제 질서 형성</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* AS-IS, TO-BE, TO-DO 섹션 */}
        <div className="mb-2 bg-white overflow-hidden">
          <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                <Image
                  src="/static/images/posters/digital_economy/section5.png"
                  alt=""
                  width={800}
                  height={200}
                  className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                  style={{
                    maskImage:
                      "linear-gradient(to right, transparent 20%, black 50%)",
                  }}
                />
              </div>
            </div>
            <div className="relative z-10 flex justify-between items-center">
              <h2 className="text-lg font-bold">
                2. 안전하고 건강한 공동체와 경제 질서
              </h2>
            </div>
          </div>

          <div className="px-0 py-3">
            <div className="grid grid-cols-3 gap-4">
              {/* AS-IS */}
              <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-400">
                <h4 className="text-base font-bold text-gray-800 mb-2">
                  AS-IS (현 문제점)
                </h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• 개인 역량 강화와 공동체의 통제 사이의 갈등</li>
                  <li>• 국가 단위 경제 구조와 규제의 한계</li>
                  <li>• 디지털 경제에 맞지 않는 조세 체계</li>
                  <li>• 디지털 자산 소유·분배 기준 부재</li>
                </ul>
              </div>

              {/* TO-BE */}
              <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-400">
                <h4 className="text-base font-bold text-gray-800 mb-2">
                  TO-BE (바람직한 미래)
                </h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• 개인 강화와 공동체의 조화로운 성장</li>
                  <li>• 도시 중심 협력 네트워크 경제 구조</li>
                  <li>• 공정하고 효율적인 디지털 조세 체계</li>
                  <li>• 정의로운 디지털 자산 소유·분배 체계 확립</li>
                </ul>
              </div>

              {/* TO-DO */}
              <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-400">
                <h4 className="text-base font-bold text-gray-800 mb-2">
                  TO-DO (핵심 연구 과제)
                </h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>1. 개인의 강화와 공동체 변화 연구</li>
                  <li>2. 국가 개념의 변화와 역할 재정의</li>
                  <li>3. 디지털 시대 규제와 조세 체계 구축</li>
                  <li>4. 디지털 자산의 소유·분배 원칙 재설계</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 주요 연구 과제 */}
        <div className="mb-2 bg-white overflow-hidden">
          <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                <Image
                  src="/static/images/posters/digital_economy/section5.png"
                  alt=""
                  width={800}
                  height={200}
                  className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                  style={{
                    maskImage:
                      "linear-gradient(to right, transparent 20%, black 50%)",
                  }}
                />
              </div>
            </div>
            <div className="relative z-10 flex justify-between items-center">
              <h2 className="text-lg font-bold">3. 연구 과제</h2>
            </div>
          </div>

          <div className="px-0 py-3">
            <div className="grid grid-cols-2 gap-4">
              {/* 과제 1: 개인의 강화와 공동체 변화 */}
              <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-300">
                <h4 className="text-base font-bold text-gray-800 mb-2">
                  과제 1. 개인의 강화와 공동체 변화{" "}
                  <span className="text-xs font-normal text-gray-500">
                    (유재연)
                  </span>
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  디지털 기술은 어떻게 슈퍼휴먼을 만드는가, 그리고 슈퍼휴먼은
                  공동체와 도시를 어떻게 변화시키는가?
                </p>

                <ul className="text-sm space-y-1 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">Daron Acemoglu</span> (MIT
                      인스티튜트 교수, 노벨 경제학상 수상자) -
                      <span className="text-gray-600 italic">
                        {" "}
                        기술 편향적 변화(SBTC) 및 과업 기반 프레임워크 개발,
                        AI의 생산성 향상 효과와 불평등 심화 가능성 분석
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">Erik Brynjolfsson</span>{" "}
                      (스탠포드 HAI 디지털 경제 연구소 소장) -
                      <span className="text-gray-600 italic">
                        {" "}
                        생산-분배-소비의 경제 기본 구조가 디지털화로 변화하는
                        과정 연구, '생산성의 역설'(Productivity Paradox) 개념
                        개발
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">Stuart Russell</span> (UC
                      버클리 컴퓨터공학과 교수, 『인공지능: 현대적 접근』 공동
                      저자) -
                      <span className="text-gray-600 italic">
                        {" "}
                        인간 중심 AI 설계 및 통제 가능성 강조. AI 시스템의
                        사회적 위험과 윤리적 설계에 대한 국제적 자문 활동,
                        Human-compatible AI 연구 프레임 제안
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* 과제 2: 국가 개념의 변화 */}
              <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-300">
                <h4 className="text-base font-bold text-gray-800 mb-2">
                  과제 2. 국가 기능의 재편과 도시-개인의 부상{" "}
                  <span className="text-xs font-normal text-gray-500">
                    (윤준영)
                  </span>
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  국가의 전통적 기능이 어떻게 도시와 개인에게 재분배되고, 이것이
                  미래 사회의 권력구조와 의사결정 메커니즘을 재편할 것인가?
                </p>

                <ul className="text-sm space-y-1 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">Simon Curtis</span>{" "}
                      (University of East Anglia, 4-50대) -
                      <span className="text-gray-600 italic">
                        {" "}
                        도시가 국가의 부속물이 아니라 국제질서를 재편하는 독립
                        행위자라는 점을 이론적으로 정립한 도시 국제관계학(Urban
                        IR)의 선구자
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">Aihwa Ong</span> (University
                      of California, Berkeley, 70대) -
                      <span className="text-gray-600 italic">
                        {" "}
                        시민권과 주권의 경계가 유동화되는 글로벌 시대의 권력
                        재편을 설명하는 '유연한 시민권'과 '점진적 주권' 개념의
                        창시자
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">Saskia Sassen</span>{" "}
                      (Columbia University, 70대) -
                      <span className="text-gray-600 italic">
                        {" "}
                        '글로벌 도시'와 '탈국가화'를 통해 자본주의와 권력이
                        도시를 중심으로 재배치되는 매커니즘을 설명한
                        도시사회학자
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">
                        Global Parliament of Mayors
                      </span>{" "}
                      (네덜란드, 2016-현재) -
                      <span className="text-gray-600 italic">
                        {" "}
                        Benjamin Barber가 설립한 글로벌 시장 의회로, 도시
                        정부(city government) 간 국제적 협의체
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* 과제 3: 규제와 조세의 변화 */}
              <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-300">
                <h4 className="text-base font-bold text-gray-800 mb-2">
                  과제 3. 규제와 조세의 변화{" "}
                  <span className="text-xs font-normal text-gray-500">
                    (김민호)
                  </span>
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  디지털 시대의 규제와 조세는 어떻게 달라지는가?
                </p>

                <ul className="text-sm space-y-1 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">Lawrence Lessig</span>{" "}
                      (하버드 로스쿨 교수) -
                      <span className="text-gray-600 italic">
                        {" "}
                        '코드가 법이다(Code is Law)' 개념 창시자, 디지털
                        아키텍처가 새로운 형태의 규제로 작용하는 방식 연구
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">Gabriel Zucman</span> (UC
                      버클리 경제학 교수) -
                      <span className="text-gray-600 italic">
                        {" "}
                        글로벌 조세 회피와 불평등 전문가, 디지털 경제의 조세
                        정의 문제 연구
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">Julie Cohen</span> (조지타운
                      로스쿨 교수) -
                      <span className="text-gray-600 italic">
                        {" "}
                        정보 자본주의 법적 구조 전문가, 디지털 기술과 사회
                        변화를 위한 규제 프레임워크 연구
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* 과제 4: 디지털 자산 및 소유권 개념 */}
              <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-300">
                <h4 className="text-base font-bold text-gray-800 mb-2">
                  과제 4. 디지털 자산 및 소유권 개념{" "}
                  <span className="text-xs font-normal text-gray-500">
                    (노가빈)
                  </span>
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  슈퍼휴먼이 생산하는 디지털 생산물의 소유와 분배 질서는 어떻게
                  정립되어야 하는가?
                </p>

                <ul className="text-sm space-y-1 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">
                        Viktor Mayer-Schönberger
                      </span>{" "}
                      (옥스퍼드 인터넷 연구소 교수) -
                      <span className="text-gray-600 italic">
                        {" "}
                        데이터 소유권과 개인정보보호 전문가, 빅데이터가 만드는
                        새로운 경제 가치와 권력 관계 연구
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">Arun Sundararajan</span>{" "}
                      (NYU 경영대학원 교수) -
                      <span className="text-gray-600 italic">
                        {" "}
                        공유 경제와 디지털 소유권 전문가, 디지털 플랫폼이 가치
                        창출과 소유권 개념에 미치는 영향 연구
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">Nick Srnicek</span>{" "}
                      (킹스칼리지 런던 정치경제학과 교수) -
                      <span className="text-gray-600 italic">
                        {" "}
                        플랫폼 자본주의 이론가, 디지털 경제에서 데이터의
                        수집·통제·축적을 통해 형성되는 권력 구조와 소유의 정치
                        분석
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <div className="mt-3 text-right text-sm text-gray-600">
          © 2025 태재미래전략연구원 디지털 전환과 사회변혁 팀
        </div>
      </div>
    </div>
  );
};

export default DigitalEconomyPoster;
