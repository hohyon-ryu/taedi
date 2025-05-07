"use client";

import Image from "next/image";
import React from "react";
import AnimateOnScroll from "../../../../components/AnimateOnScroll";

const EconomicInstitutionsOnePager = () => {
  return (
    <div className="bg-white min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <AnimateOnScroll animation="scale-in">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold mb-2 text-gray-900 tracking-tight">
              디지털 시대 경제 질서의 제도화 - 경제 제도
            </h1>
            <h2 className="text-xl text-gray-600 mb-2">원페이지 요약</h2>
            <div className="bg-gray-100 p-3 rounded-lg inline-block">
              <p className="text-sm text-gray-800 italic font-medium">
                "디지털 혁명으로 인한 글로벌 경제 질서 변화와 국가 간 경제 제도, 규범의 재구성 연구"
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Main content */}
        <AnimateOnScroll animation="fade-in" delay={0.2}>
          <div className="bg-white rounded-lg overflow-hidden shadow mb-8">
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                디지털 경제 시대에는 초국경적 디지털 기업 활동, 무형자산 중심 가치 창출, 로봇·자동화로 인한 노동시장 변화가 전통적 국가 조세 및 규제 체계의 실효성을 약화시키고 있습니다.
              </p>
              
              <div className="mb-6">
                <h3 className="font-bold text-gray-800 mb-3 text-lg">경제 질서 변화의 역사적 흐름</h3>
                
                <div className="overflow-x-auto mb-2">
                  <table className="min-w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-3 py-2 border text-left">시대 구분</th>
                        <th className="px-3 py-2 border text-left">가치 창출 방식</th>
                        <th className="px-3 py-2 border text-left">소유권 개념</th>
                        <th className="px-3 py-2 border text-left">과세 구조</th>
                        <th className="px-3 py-2 border text-left">규제 체계</th>
                        <th className="px-3 py-2 border text-left">정부-기업 관계</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border font-semibold">전산업 시대</td>
                        <td className="px-3 py-2 border">수공업, 농업 생산</td>
                        <td className="px-3 py-2 border">토지 중심, 봉건적 소유</td>
                        <td className="px-3 py-2 border">토지세, 인두세, 관세</td>
                        <td className="px-3 py-2 border">길드, 장원법, 왕실 특허</td>
                        <td className="px-3 py-2 border">왕실 독점권, 상업활동 면허제</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-3 py-2 border font-semibold">산업 시대 초기</td>
                        <td className="px-3 py-2 border">기계화 대량생산, 공장제</td>
                        <td className="px-3 py-2 border">자본/기계 중심, 사적 재산권</td>
                        <td className="px-3 py-2 border">소득세 도입, 상품세</td>
                        <td className="px-3 py-2 border">자유방임적, 최소 규제</td>
                        <td className="px-3 py-2 border">국가 간섭 최소화, 야경국가</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border font-semibold">산업 시대 후기</td>
                        <td className="px-3 py-2 border">과학적 관리, 포디즘, 대기업</td>
                        <td className="px-3 py-2 border">주식회사, 분산 소유, 지적재산권</td>
                        <td className="px-3 py-2 border">법인세, 누진소득세, 사회보장세</td>
                        <td className="px-3 py-2 border">반독점법, 노동법, 환경규제</td>
                        <td className="px-3 py-2 border">복지국가, 혼합경제, 규제강화</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-3 py-2 border font-semibold">디지털 시대 초기<br/>(현재)</td>
                        <td className="px-3 py-2 border">플랫폼, 네트워크 효과, 자동화</td>
                        <td className="px-3 py-2 border">무형자산, 데이터, 알고리즘</td>
                        <td className="px-3 py-2 border">국가별 디지털세 시도, BEPS</td>
                        <td className="px-3 py-2 border">국가별 상이한 디지털 규제</td>
                        <td className="px-3 py-2 border">초국가적 기업 영향력 확대</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border font-semibold">향후 디지털 시대<br/>(지향점)</td>
                        <td className="px-3 py-2 border">AI/로봇 자율생산, 인간-기계 협업</td>
                        <td className="px-3 py-2 border">분산/공유 데이터 자산</td>
                        <td className="px-3 py-2 border">디지털서비스세, 로봇세, 데이터세</td>
                        <td className="px-3 py-2 border">글로벌 디지털 거버넌스, 초국가 규제</td>
                        <td className="px-3 py-2 border">국제협력 기반 공동 거버넌스</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* AS-IS */}
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-400">
                  <h3 className="font-bold text-gray-800 mb-3">As-Is (현재 상황)</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• 디지털 경제의 국가 조세·규제 체계 무력화</li>
                    <li>• 초국경적 디지털 기업들의 조세 회피</li>
                    <li>• 자동화·로봇화로 인한 노동세원 약화</li>
                    <li>• 디지털 환경에서 국가 규제 권한 약화</li>
                    <li>• 국제적 디지털 거버넌스 체계 부재</li>
                    <li>• 알고리즘 기반 의사결정 투명성 부족</li>
                  </ul>
                </div>
                
                {/* TO-BE */}
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-400">
                  <h3 className="font-bold text-gray-800 mb-3">To-Be (미래 지향점)</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• 디지털 경제에 적합한 새로운 조세·규제 체계</li>
                    <li>• 초국경적 디지털 거래 통합 과세 구조</li>
                    <li>• 로봇·자동화 기술 가치 포착 과세 인프라</li>
                    <li>• AI 기반 동적 규제, 원칙 중심 규제 시스템</li>
                    <li>• 국가 간 디지털 경제 협력 체계 구축</li>
                    <li>• 알고리즘 투명성과 책임성 제도화</li>
                  </ul>
                </div>
                
                {/* TO-DO */}
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <h3 className="font-bold text-gray-800 mb-3">To-Do (필요한 대응)</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• 디지털 경제 조세·규제 체계 혁신 과제 도출</li>
                    <li>• 초국경 거래, 무형자산 과세 방안 개발</li>
                    <li>• 로봇세, 자동화세 등 대체 세원 발굴</li>
                    <li>• 디지털 기업 알고리즘/데이터 규제 정립</li>
                    <li>• 국제 조세 협력, 데이터 거버넌스 강화</li>
                    <li>• 적응형 규제 체계 개발 및 표준화</li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-3">두 가지 디지털 경제 모델</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <h4 className="font-semibold">미국형 자유주의 모델</h4>
                      <ul className="space-y-0.5 pl-4 text-gray-700">
                        <li>• 구글, 아마존 등 민간 주도</li>
                        <li>• 시장 중심 혁신 강조</li>
                        <li>• 최소 규제, 자유로운 데이터 이동</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">중국형 국가통제 모델</h4>
                      <ul className="space-y-0.5 pl-4 text-gray-700">
                        <li>• 국가 전략과 민간기업 통합</li>
                        <li>• 디지털 주권, 데이터 현지화</li>
                        <li>• 국가 안보 중심 기술 개발</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-3">조세 패러다임 변화</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <h4 className="font-semibold">초국경 서비스와 조세회피</h4>
                      <ul className="space-y-0.5 pl-4 text-gray-700">
                        <li>• 물리적 실체 없는 가치 창출</li>
                        <li>• 세율 낮은 국가로 이익 이전</li>
                        <li>• 고정사업장 개념 적용 한계</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">자동화와 소득세 약화</h4>
                      <ul className="space-y-0.5 pl-4 text-gray-700">
                        <li>• AI/로봇 기반 자동화 확산</li>
                        <li>• 노동소득세 기반 축소</li>
                        <li>• 사회안전망 재원 확보 위기</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-3">미래 전략 방향</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">초국경적 과세 체계</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 무형자산/데이터 기반 가치 포착</li>
                      <li>• 로봇세 등 새로운 과세 기반</li>
                      <li>• 국제 조세 협력 체계 강화</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">포용적 디지털 전환</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 자동화 대응 일자리 정책</li>
                      <li>• 디지털 격차 해소 메커니즘</li>
                      <li>• 디지털 역량 강화 교육 체계</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">디지털 규제 혁신</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 국제 공조 기반 규제 체계</li>
                      <li>• 초국가적 규제 기관 설립</li>
                      <li>• 적응형 규제 설계와 구현</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Footer */}
        <div className="mt-6 text-right text-xs text-gray-600">
          © 2025 태재미래전략연구원 디지털 경제 질서 연구팀
        </div>
      </div>
    </div>
  );
};

export default EconomicInstitutionsOnePager;
