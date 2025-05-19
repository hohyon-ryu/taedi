"use client";

import Image from "next/image";
import AnimateOnScroll from "../../../components/AnimateOnScroll";

const DigitalEconomyInstitutionsPoster = () => {
  return (
    <div className="bg-white min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 */}
        <AnimateOnScroll animation="scale-in">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-extrabold mb-2 text-gray-900 tracking-tight">
              제4장: 디지털 시대 경제 질서의 제도화 - 경제 제도
            </h1>
            <div className="bg-gray-100 p-3 rounded-lg inline-block">
              <p className="text-sm text-gray-800 italic font-medium">
                "오늘날 글로벌 경제 질서는 디지털 혁명으로 인해 근본적인 변화를
                맞이하고 있으며, 국가 간 경제 제도와 규범의 재구성이 촉발되고
                있다."
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* AS-IS, TO-BE, TO-DO 섹션 */}
        <AnimateOnScroll animation="fade-in" delay={0.2}>
          <div className="mb-8 bg-white overflow-hidden">
            <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                  <Image
                    src="/static/images/posters/digital_economy/section1.png"
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
                <h2 className="text-base font-bold">
                  1. 디지털 경제 패러다임의 변화
                </h2>
              </div>
            </div>

            <div className="px-0 py-3">
              <div className="grid grid-cols-3 gap-4">
                {/* AS-IS */}
                <AnimateOnScroll
                  animation="fade-in-left"
                  delay={0.1}
                  duration={0.5}
                >
                  <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-red-400">
                    <h4 className="text-sm font-bold text-gray-800 mb-2">
                      As-Is (현재 상황)
                    </h4>
                    <ul className="text-xs space-y-1.5 text-gray-700">
                      <li>• 디지털 경제의 국가 조세·규제 체계 무력화</li>
                      <li>• 초국경적 디지털 기업들의 조세 회피와 세원 잠식</li>
                      <li>• 자동화·로봇화로 인한 전통적 노동기반 세원 약화</li>
                      <li>• 디지털 환경에서 국가 규제 권한 실효성 상실</li>
                      <li>• 국제적 디지털 거버넌스 체계 부재</li>
                    </ul>
                  </div>
                </AnimateOnScroll>

                {/* TO-BE */}
                <AnimateOnScroll animation="fade-in" delay={0.2} duration={0.5}>
                  <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-green-400">
                    <h4 className="text-sm font-bold text-gray-800 mb-2">
                      To-Be (미래 지향점)
                    </h4>
                    <ul className="text-xs space-y-1.5 text-gray-700">
                      <li>
                        • 디지털 경제 시대에 적합한 새로운 조세·규제 패러다임
                      </li>
                      <li>
                        • 초국경적 디지털 거래에 대한 통합적 글로벌 과세 체계
                      </li>
                      <li>
                        • 로봇·자동화 기술의 경제적 가치 포착하는 과세 인프라
                      </li>
                      <li>
                        • AI 기반 동적 규제, 원칙 중심 규제 등 적응형 시스템
                      </li>
                    </ul>
                  </div>
                </AnimateOnScroll>

                {/* TO-DO */}
                <AnimateOnScroll
                  animation="fade-in-right"
                  delay={0.3}
                  duration={0.5}
                >
                  <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-yellow-400">
                    <h4 className="text-sm font-bold text-gray-800 mb-2">
                      To-Do (필요한 대응)
                    </h4>
                    <ul className="text-xs space-y-1.5 text-gray-700">
                      <li>• 디지털 경제 국가 조세·규제 체계 혁신 과제</li>
                      <li>
                        • 초국경적 거래 포착, 무형자산 과세 등 새로운 과세 방안
                        개발
                      </li>
                      <li>• 로봇세, 자동화세 등 대체 세원 발굴</li>
                      <li>
                        • 디지털 기업 알고리즘 및 데이터 활용 규제 체계 정립
                      </li>
                      <li>
                        • 국제 조세 협력, 데이터 거버넌스 글로벌 협력 강화
                      </li>
                    </ul>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* 연구 목표와 전략 */}
        <AnimateOnScroll animation="fade-in" delay={0.2}>
          <div className="mb-8 bg-white overflow-hidden">
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
                <h2 className="text-base font-bold">2. 연구 목표 및 전략</h2>
              </div>
            </div>

            <div className="px-0 py-3">
              <div className="grid grid-cols-2 gap-4">
                {/* 연구목표 */}
                <AnimateOnScroll
                  animation="fade-in-left"
                  delay={0.1}
                  duration={0.5}
                >
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="text-sm font-bold text-gray-800 mb-2">
                      연구목표
                    </h4>
                    <ul className="text-xs space-y-1.5 text-gray-700">
                      <li>• 디지털 경제 시대 국가 조세·규제 체계 변화 분석</li>
                      <li>• 글로벌 디지털 거버넌스의 새로운 모델 제시</li>
                      <li>• 해외석학 공동연구 추진을 통한 국제적 시각 확보</li>
                    </ul>
                  </div>
                </AnimateOnScroll>

                {/* 연구전략 */}
                <AnimateOnScroll
                  animation="fade-in-right"
                  delay={0.3}
                  duration={0.5}
                >
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="text-sm font-bold text-gray-800 mb-2">
                      연구전략
                    </h4>
                    <ul className="text-xs space-y-1.5 text-gray-700">
                      <li>• 국가별 디지털 과세 및 규제 사례 비교 분석</li>
                      <li>• 국제 디지털 경제 협력 체계 연구</li>
                      <li>
                        • 주요국 석학들과의 공동 워크숍 및 연구 네트워크 구축
                      </li>
                    </ul>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* 경제질서 변화의 역사적 맥락 */}
        <AnimateOnScroll animation="fade-in" delay={0.2}>
          <div className="mb-8 bg-white overflow-hidden">
            <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                  <Image
                    src="/static/images/posters/digital_economy/section3.png"
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
                <h2 className="text-base font-bold">
                  3. 경제질서 변화의 역사적 맥락
                </h2>
              </div>
            </div>

            <div className="px-0 py-3">
              <div className="overflow-x-auto">
                <table className="min-w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-3 py-2 border text-left">시대 구분</th>
                      <th className="px-3 py-2 border text-left">
                        역사적 배경
                      </th>
                      <th className="px-3 py-2 border text-left">생산 방식</th>
                      <th className="px-3 py-2 border text-left">경제 주체</th>
                      <th className="px-3 py-2 border text-left">부의 원천</th>
                      <th className="px-3 py-2 border text-left">
                        주요 과세 대상
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-3 py-2 border font-semibold">
                        전산업 시대
                      </td>
                      <td className="px-3 py-2 border">
                        • 봉건제 사회
                        <br />• 농업 중심 경제
                      </td>
                      <td className="px-3 py-2 border">수공업</td>
                      <td className="px-3 py-2 border">장인, 농민</td>
                      <td className="px-3 py-2 border">
                        • 토지와 금<br />• 제한된 상업
                      </td>
                      <td className="px-3 py-2 border">
                        • 토지
                        <br />
                        • 농산물
                        <br />• 관세
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-3 py-2 border font-semibold">
                        산업 시대
                        <br />
                        (18-19세기)
                      </td>
                      <td className="px-3 py-2 border">
                        • 산업혁명
                        <br />
                        • 시민혁명
                        <br />• 도시화
                      </td>
                      <td className="px-3 py-2 border">
                        • 공장제 제조
                        <br />• 대량생산
                      </td>
                      <td className="px-3 py-2 border">
                        • 자본가
                        <br />• 노동자
                      </td>
                      <td className="px-3 py-2 border">
                        • 노동
                        <br />
                        • 자본
                        <br />• 시장경쟁
                      </td>
                      <td className="px-3 py-2 border">
                        • 재산세
                        <br />
                        • 소득세
                        <br />• 법인세
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 border font-semibold">
                        디지털 시대
                        <br />
                        (21세기)
                      </td>
                      <td className="px-3 py-2 border">
                        • 정보통신기술
                        <br />
                        • 인터넷 상용화
                        <br />• 로봇·자동화 발전
                      </td>
                      <td className="px-3 py-2 border">
                        • 스마트 생산
                        <br />
                        • 플랫폼 경제
                        <br />• 로봇 자동화
                      </td>
                      <td className="px-3 py-2 border">
                        • 플랫폼 기업
                        <br />
                        • 크리에이터
                        <br />• AI·로봇
                      </td>
                      <td className="px-3 py-2 border">
                        • 무형자산
                        <br />
                        • 네트워크 효과
                        <br />• 자동화된 생산
                      </td>
                      <td className="px-3 py-2 border">
                        • 디지털 서비스세
                        <br />
                        • 데이터세
                        <br />• 로봇세
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* 디지털 시대의 특징 */}
        <AnimateOnScroll animation="fade-in" delay={0.2}>
          <div className="mb-8 bg-white overflow-hidden">
            <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                  <Image
                    src="/static/images/posters/digital_economy/section4.png"
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
                <h2 className="text-base font-bold">4. 디지털 시대의 특징</h2>
              </div>
            </div>

            <div className="px-0 py-3">
              <div className="grid grid-cols-2 gap-4">
                {/* 생산 방식 */}
                <AnimateOnScroll
                  animation="fade-in-left"
                  delay={0.1}
                  duration={0.5}
                >
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="text-sm font-bold text-gray-800 mb-2">
                      디지털 시대의 생산 방식
                    </h4>
                    <ul className="text-xs space-y-1.5 text-gray-700">
                      <li>
                        • <span className="font-medium">플랫폼 기반 생산:</span>{" "}
                        다양한 이해관계자를 연결하는 디지털 플랫폼을 통해 가치
                        창출
                      </li>
                      <li>
                        •{" "}
                        <span className="font-medium">
                          초국경적 생산 네트워크:
                        </span>{" "}
                        국경을 초월한 글로벌 가치사슬과 디지털 연결망 형성
                      </li>
                      <li>
                        • <span className="font-medium">스마트 팩토리:</span>{" "}
                        IoT와 AI를 활용한 자동화된 제조 환경으로 생산 효율
                        극대화
                      </li>
                      <li>
                        • <span className="font-medium">로봇·자동화:</span> 인간
                        노동을 보완/대체하는 로봇 기술과 지능형 자동화 시스템
                      </li>
                    </ul>
                  </div>
                </AnimateOnScroll>

                {/* 과세 특징 */}
                <AnimateOnScroll
                  animation="fade-in-right"
                  delay={0.3}
                  duration={0.5}
                >
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="text-sm font-bold text-gray-800 mb-2">
                      디지털 시대의 과세 특징
                    </h4>
                    <ul className="text-xs space-y-1.5 text-gray-700">
                      <li>
                        •{" "}
                        <span className="font-medium">
                          물리적 실체 없는 가치창출:
                        </span>{" "}
                        고정사업장 없이 초국경적 서비스 제공으로 전통적 과세
                        기반 약화
                      </li>
                      <li>
                        •{" "}
                        <span className="font-medium">
                          사용자 데이터 가치화:
                        </span>{" "}
                        소비자 참여와 데이터 제공이 핵심 가치를 생성하나
                        과세되지 않음
                      </li>
                      <li>
                        •{" "}
                        <span className="font-medium">
                          자동화로 인한 노동세원 감소:
                        </span>{" "}
                        로봇·AI 도입으로 노동소득세 기반 축소
                      </li>
                      <li>
                        •{" "}
                        <span className="font-medium">
                          무형자산 중심 가치이전:
                        </span>{" "}
                        지식재산권 등 무형자산을 통한 조세회피 용이
                      </li>
                    </ul>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* 기업-국가 관계 변화 */}
        <AnimateOnScroll animation="fade-in" delay={0.2}>
          <div className="mb-8 bg-white overflow-hidden">
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
                <h2 className="text-base font-bold">
                  5. 기업-국가 관계의 역사적 변화
                </h2>
              </div>
            </div>

            <div className="px-0 py-3">
              <div className="grid grid-cols-3 gap-4">
                {/* 전산업 시대 */}
                <AnimateOnScroll
                  animation="fade-in-left"
                  delay={0.1}
                  duration={0.5}
                >
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="text-sm font-bold text-gray-800 mb-2">
                      전산업 시대
                    </h4>
                    <ul className="text-xs space-y-1.5 text-gray-700">
                      <li>• 국가가 상업 활동 면허 부여</li>
                      <li>• 길드와 같은 조직을 통한 통제</li>
                      <li>• 왕실 특허를 통한 독점권 부여</li>
                      <li>• 지역 기반 제한적 경제 범위</li>
                    </ul>
                  </div>
                </AnimateOnScroll>

                {/* 산업 시대 */}
                <AnimateOnScroll animation="fade-in" delay={0.2} duration={0.5}>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="text-sm font-bold text-gray-800 mb-2">
                      산업 시대
                    </h4>
                    <ul className="text-xs space-y-1.5 text-gray-700">
                      <li>• 자유시장 원칙과 개입 최소화</li>
                      <li>• 제한적 규제와 자본주의 발전</li>
                      <li>• 국가의 기반시설 제공 역할</li>
                      <li>• 국가 단위 경제 활동 규제</li>
                    </ul>
                  </div>
                </AnimateOnScroll>

                {/* 디지털 시대 */}
                <AnimateOnScroll
                  animation="fade-in-right"
                  delay={0.3}
                  duration={0.5}
                >
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="text-sm font-bold text-gray-800 mb-2">
                      디지털 시대
                    </h4>
                    <ul className="text-xs space-y-1.5 text-gray-700">
                      <li>• 초국가적 기업이 국가 영향력 능가</li>
                      <li>• 로봇·자동화로 인한 일자리 변화</li>
                      <li>• 초국경적 활동으로 규제 회피 용이</li>
                      <li>• 국가 간 규제·과세 경쟁 심화</li>
                    </ul>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* 디지털 시대 국가-기업 관계 변화 */}
        <AnimateOnScroll animation="fade-in" delay={0.2}>
          <div className="mb-8 bg-white overflow-hidden">
            <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                  <Image
                    src="/static/images/posters/digital_economy/section1.png"
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
                <h2 className="text-base font-bold">
                  6. 디지털 시대 국가-기업 관계 변화
                </h2>
              </div>
            </div>

            <div className="px-0 py-3">
              <div className="grid grid-cols-3 gap-4">
                {/* 디지털 경제 모델 */}
                <AnimateOnScroll
                  animation="fade-in-left"
                  delay={0.1}
                  duration={0.5}
                >
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="text-sm font-bold text-gray-800 mb-2">
                      두 가지 디지털 경제 모델
                    </h4>
                    <div className="text-xs space-y-3 text-gray-700">
                      <div>
                        <h5 className="font-semibold">
                          미국 중심 자유주의 모델
                        </h5>
                        <ul className="space-y-0.5 pl-4">
                          <li>• 구글, 아마존, 메타 주도</li>
                          <li>• 기업 자율성과 시장 중심 혁신</li>
                          <li>• 글로벌 플랫폼 통한 영향력</li>
                          <li>• 최소한의 규제와 자유로운 데이터 이동</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold">
                          중국 중심 국가통제 모델
                        </h5>
                        <ul className="space-y-0.5 pl-4">
                          <li>• 알리바바, 텐센트 등 국가 전략 통합</li>
                          <li>• 디지털 주권과 사회 통제 강조</li>
                          <li>• 데이터 현지화와 사이버 주권</li>
                          <li>• 국가 안보 중심 기술 개발</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>

                {/* 초국가적 영향력 */}
                <AnimateOnScroll animation="fade-in" delay={0.2} duration={0.5}>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="text-sm font-bold text-gray-800 mb-2">
                      초국가적 디지털 기업 영향력
                    </h4>
                    <ul className="text-xs space-y-1.5 text-gray-700">
                      <li>• 빅테크 시가총액이 국가 GDP 초과</li>
                      <li>• 플랫폼 통한 데이터/시장 지배력</li>
                      <li>• 로봇·자동화 기술 독점으로 생산 통제</li>
                      <li>• 알고리즘 통한 정보 흐름과 여론 형성</li>
                      <li>• 조세회피를 통한 재정 주권 약화</li>
                    </ul>
                    <div className="mt-3">
                      <h5 className="text-xs font-semibold mb-1">
                        기술패권 경쟁의 심화
                      </h5>
                      <ul className="text-xs space-y-0.5 text-gray-700">
                        <li>• 미·중 간 핵심 기술 주도권 경쟁</li>
                        <li>• 반도체, AI, 양자컴퓨팅 등 전략기술 선점</li>
                        <li>• 로봇·자동화 기술의 군사·경제적 활용</li>
                        <li>• 기술 표준 설정 주도권 확보 경쟁</li>
                        <li>• 디지털 블록화와 기술 동맹 구축</li>
                      </ul>
                    </div>
                  </div>
                </AnimateOnScroll>

                {/* 새로운 균형점 */}
                <AnimateOnScroll
                  animation="fade-in-right"
                  delay={0.3}
                  duration={0.5}
                >
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="text-sm font-bold text-gray-800 mb-2">
                      국가-기업 새로운 균형점
                    </h4>
                    <div className="text-xs space-y-3 text-gray-700">
                      <div>
                        <h5 className="font-semibold">국가 디지털 주권 확립</h5>
                        <ul className="space-y-0.5 pl-4">
                          <li>• 핵심 디지털 인프라 통제 강화</li>
                          <li>• 데이터 현지화와 국가 정책</li>
                          <li>• 초국경적 과세 체계 구축</li>
                          <li>• 로봇·자동화 규제 프레임워크</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold">기업 혁신 보장</h5>
                        <ul className="space-y-0.5 pl-4">
                          <li>• 디지털 혁신 생태계 규제 개선</li>
                          <li>• 민관 협력 거버넌스 구축</li>
                          <li>• 책임있는 자동화 기술 개발</li>
                          <li>• 글로벌 디지털 표준 참여</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* 디지털 시대 조세와 규제의 변화 */}
        <AnimateOnScroll animation="fade-in" delay={0.2}>
          <div className="mb-8 bg-white overflow-hidden">
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
                <h2 className="text-base font-bold">
                  7. 디지털 시대 조세와 규제의 변화
                </h2>
              </div>
            </div>

            <div className="px-0 py-3">
              <div className="grid grid-cols-2 gap-4">
                {/* 규제 접근법 변화 */}
                <AnimateOnScroll
                  animation="fade-in-left"
                  delay={0.1}
                  duration={0.5}
                >
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="text-sm font-bold text-gray-800 mb-2">
                      규제 접근법 변화
                    </h4>
                    <div className="text-xs space-y-3 text-gray-700">
                      <div>
                        <h5 className="font-semibold">단일 국가 규제의 한계</h5>
                        <ul className="space-y-0.5 pl-4">
                          <li>
                            • 초국경적 디지털 활동에 대한 규제 실효성 약화
                          </li>
                          <li>• 국가별 상이한 규제로 인한 규제 차익</li>
                          <li>• 디지털 기업의 규제 회피 용이성</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold">
                          디지털 시장 규제의 어려움
                        </h5>
                        <ul className="space-y-0.5 pl-4">
                          <li>• 기존 경쟁법의 디지털 시장 적용 한계</li>
                          <li>• 네트워크 효과 기반 독점화 통제 난제</li>
                          <li>• 다면 시장과 무료 서비스 규제 복잡성</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>

                {/* 조세 패러다임 변화 */}
                <AnimateOnScroll
                  animation="fade-in-right"
                  delay={0.3}
                  duration={0.5}
                >
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="text-sm font-bold text-gray-800 mb-2">
                      조세 패러다임 변화
                    </h4>
                    <div className="text-xs space-y-3 text-gray-700">
                      <div>
                        <h5 className="font-semibold">
                          초국경 서비스와 조세회피
                        </h5>
                        <ul className="space-y-0.5 pl-4">
                          <li>• 물리적 이동 없는 국경 넘는 서비스</li>
                          <li>• 세율 낮은 국가로 이익 이전</li>
                          <li>• 고정사업장 개념 적용 한계</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold">자동화와 소득세 약화</h5>
                        <ul className="space-y-0.5 pl-4">
                          <li>• AI/로봇 기반 자동화와 노동시장 변화</li>
                          <li>• 일자리 감소에 따른 소득세 감소</li>
                          <li>• 사회안전망 재원 확보 어려움</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold">
                          글로벌 디지털 거버넌스
                        </h5>
                        <ul className="space-y-0.5 pl-4">
                          <li>• 국가 간 규제 조화 및 공동 집행 메커니즘</li>
                          <li>• 다자간 디지털 규제 기구 설립 가능성</li>
                          <li>• 새로운 조세 기반 및 제도 설계 필요</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* 미래 전략 방향 */}
        <AnimateOnScroll animation="fade-in" delay={0.2}>
          <div className="mb-4 bg-white overflow-hidden">
            <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                  <Image
                    src="/static/images/posters/digital_economy/section4.png"
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
                <h2 className="text-base font-bold">
                  8. 역사적 교훈과 미래 전략
                </h2>
              </div>
            </div>

            <div className="px-0 py-3">
              <div className="grid grid-cols-4 gap-4">
                {/* 역사적 교훈 */}
                <AnimateOnScroll
                  animation="fade-in-left"
                  delay={0.1}
                  duration={0.5}
                  className="col-span-4 md:col-span-1"
                >
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="text-sm font-bold text-gray-800 mb-2">
                      역사적 교훈
                    </h4>
                    <ul className="text-xs space-y-1.5 text-gray-700">
                      <li>
                        •{" "}
                        <span className="font-medium">
                          선제적 제도화 중요성:
                        </span>{" "}
                        산업혁명 시대 사회문제 해결에 수십 년 소요. 디지털
                        혁명은 변화 속도가 더 빠르므로 초국경적 과세, 로봇화
                        대응에 선제적 접근 필요
                      </li>
                      <li>
                        • <span className="font-medium">기술-인간 균형:</span>{" "}
                        산업혁명의 양면성처럼, 디지털 혁명도 효율성과 불평등
                        공존. 자동화와 인간 노동의 조화 필요
                      </li>
                      <li>
                        • <span className="font-medium">패권 변화 가속화:</span>{" "}
                        산업혁명은 영국에서 시작해 확산. 디지털 혁명은 초국경적
                        성격으로 국가 경계 약화와 글로벌 규범 필요성 증가
                      </li>
                    </ul>
                  </div>
                </AnimateOnScroll>

                {/* 미래 전략 방향 */}
                <AnimateOnScroll
                  animation="fade-in-right"
                  delay={0.3}
                  duration={0.5}
                  className="col-span-4 md:col-span-3"
                >
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="text-sm font-bold text-gray-800 mb-2">
                      미래 전략 방향
                    </h4>
                    <div className="grid grid-cols-3 gap-3 text-xs text-gray-700">
                      <div>
                        <h5 className="font-semibold mb-1">
                          초국경적 과세 체계 구축
                        </h5>
                        <ul className="space-y-0.5 pl-4">
                          <li>• 무형자산/데이터 기반 가치 포착</li>
                          <li>• 로봇세 등 새로운 과세 기반 마련</li>
                          <li>• 국제 조세 협력 체계 강화</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">
                          포용적 디지털 전환
                        </h5>
                        <ul className="space-y-0.5 pl-4">
                          <li>• 자동화로 인한 일자리 변화 대응</li>
                          <li>• 디지털 격차 해소 정책</li>
                          <li>• 디지털 역량 강화 교육 체계 구축</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">디지털 규제 혁신</h5>
                        <ul className="space-y-0.5 pl-4">
                          <li>• 국제 공조 기반 디지털 규제 체계 구축</li>
                          <li>• 초국가적 규제 기관 설립 검토</li>
                          <li>• 국경 초월 규제 실효성 확보 방안</li>
                          <li>• 기술 발전 속도에 맞춘 적응형 규제 설계</li>
                          <li>• 데이터 주권과 글로벌 표준 균형 모색</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* 맺음말 */}
        <AnimateOnScroll animation="fade-in" delay={0.2}>
          <div className="mb-4 p-4 bg-gray-50 rounded-lg border-l-4 border-gray-400">
            <h4 className="text-sm font-bold text-gray-800 mb-2">맺음말</h4>
            <p className="text-xs text-gray-700">
              디지털 경제 시대에 맞는 새로운 제도적 프레임워크 구축은 국가의
              경제 주권과 지속가능한 발전을 위한 핵심 과제가 되었다. 초국경적
              디지털 활동과 로봇·자동화 확산으로 전통적 경제 제도의 유효성이
              약화되는 가운데, 국가 간 협력을 통한 글로벌 조세·규제 거버넌스
              체계 구축이 시급하다. 특히 경제적 가치 창출 방식과 국가-기업
              관계가 근본적으로 변화하는 상황에서, 디지털 환경에 적합한 제도적
              혁신과 국제 공조가 불가피하다. 이제 디지털 시대의 경제 질서를
              어떻게 제도화할 것인가는 단순한 기술적 과제가 아닌, 국가 경제의
              미래와 글로벌 거버넌스의 핵심 의제로 자리잡고 있다.
            </p>
          </div>
        </AnimateOnScroll>

        {/* 푸터 */}
        <div className="mt-3 text-right text-xs text-gray-600">
          © 2025 태재미래전략연구원 디지털 경제 질서 연구팀
        </div>
      </div>
    </div>
  );
};

export default DigitalEconomyInstitutionsPoster;
