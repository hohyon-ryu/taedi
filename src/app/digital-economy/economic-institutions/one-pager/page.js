"use client";

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
                "디지털 혁명으로 인한 글로벌 경제 질서 변화와 국가 간 경제 제도,
                규범의 재구성 연구"
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Main content */}
        <AnimateOnScroll animation="fade-in" delay={0.2}>
          <div className="bg-white rounded-lg overflow-hidden shadow mb-8">
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                디지털 경제 시대에는 초국경적 디지털 기업 활동, 무형자산 중심
                가치 창출, 로봇·자동화로 인한 노동시장 변화가 전통적 국가 조세
                및 규제 체계의 실효성을 약화시키고 있습니다. 이에 대응하여
                새로운 글로벌 경제 질서의 제도화가 요구되며, 국제적 협력을 통한
                디지털 거버넌스 구축이 시급합니다. 특히 인공지능, 로봇 등 첨단
                기술의 빠른 발전은 새로운 규제 체계와 국제 협력 메커니즘을
                필요로 합니다.
              </p>

              <div className="mb-8">
                <h3 className="font-bold text-gray-800 mb-3 text-lg">
                  역사적 관점에서 본 경제 질서와 제도의 변천
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">
                    시대 전환기의 제도적 변화 패턴
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    역사적으로 생산 방식의 큰 변화는 소유권, 규제, 과세 체계의
                    근본적 재편으로 이어졌습니다. 농경사회에서 산업사회로,
                    그리고 지금 산업사회에서 디지털 사회로의 전환 과정에서
                    유사한 패턴이 나타납니다.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold mb-1">
                        농경사회 → 산업사회
                      </h5>
                      <ul className="space-y-1 text-gray-700">
                        <li>
                          • <span className="font-medium">소유권 변화:</span>{" "}
                          토지 중심에서 자본/생산수단 중심으로 전환
                        </li>
                        <li>
                          • <span className="font-medium">규제 체계:</span>{" "}
                          길드/장원 체계에서 국가 주도 규제/특허 체계로 변화
                        </li>
                        <li>
                          • <span className="font-medium">과세 구조:</span>{" "}
                          토지세/인두세에서 소득세/법인세 중심으로 전환
                        </li>
                        <li>
                          • <span className="font-medium">적응 기간:</span> 약
                          100-150년에 걸친 점진적 제도 변화
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold mb-1">
                        산업사회 → 디지털사회
                      </h5>
                      <ul className="space-y-1 text-gray-700">
                        <li>
                          • <span className="font-medium">소유권 변화:</span>{" "}
                          물리적 자산에서 무형자산/데이터 중심으로 전환
                        </li>
                        <li>
                          • <span className="font-medium">규제 체계:</span> 국가
                          중심에서 초국경적/글로벌 규제 필요성 대두
                        </li>
                        <li>
                          • <span className="font-medium">과세 구조:</span>{" "}
                          노동소득 중심에서 디지털/데이터/로봇 가치 포착 필요
                        </li>
                        <li>
                          • <span className="font-medium">적응 속도:</span>{" "}
                          10-20년 내 급격한 변화 대응 필요
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold mb-1">주요 차이점</h5>
                      <ul className="space-y-1 text-gray-700">
                        <li>
                          • <span className="font-medium">변화 속도:</span>{" "}
                          산업혁명보다 10배 이상 빠른 변화 속도
                        </li>
                        <li>
                          • <span className="font-medium">초국경성:</span> 국가
                          경계를 초월한 경제 활동의 일상화
                        </li>
                        <li>
                          • <span className="font-medium">비가시성:</span> 가치
                          창출 과정의 비물질화, 추적 어려움
                        </li>
                        <li>
                          • <span className="font-medium">자동화:</span> 인간
                          노동 개입 최소화된 가치 창출 프로세스
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-3 py-2 border text-left">
                          시대 구분
                        </th>
                        <th className="px-3 py-2 border text-left">
                          소유권 개념
                        </th>
                        <th className="px-3 py-2 border text-left">
                          규제 체계
                        </th>
                        <th className="px-3 py-2 border text-left">
                          가치 창출 방식
                        </th>
                        <th className="px-3 py-2 border text-left">
                          정부-기업 관계
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border font-semibold">
                          전산업 시대
                        </td>
                        <td className="px-3 py-2 border">
                          토지 중심, 봉건적 소유권, 공유지 개념
                        </td>
                        <td className="px-3 py-2 border">
                          길드, 장원법, 왕실 특허
                        </td>
                        <td className="px-3 py-2 border">
                          수공업, 농업 생산 중심
                        </td>
                        <td className="px-3 py-2 border">
                          왕실 독점권 부여, 상업 활동 면허제
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-3 py-2 border font-semibold">
                          산업 시대 초기
                        </td>
                        <td className="px-3 py-2 border">
                          자본/기계 중심, 사적 재산권 강화
                        </td>
                        <td className="px-3 py-2 border">
                          자유방임적, 최소 규제
                        </td>
                        <td className="px-3 py-2 border">
                          기계화된 대량생산, 공장제
                        </td>
                        <td className="px-3 py-2 border">
                          국가 간섭 최소화, 야경국가
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border font-semibold">
                          산업 시대 후기
                        </td>
                        <td className="px-3 py-2 border">
                          주식회사, 분산 소유권, 지적재산권 발전
                        </td>
                        <td className="px-3 py-2 border">
                          반독점법, 노동법, 환경규제 등장
                        </td>
                        <td className="px-3 py-2 border">
                          과학적 관리, 포디즘, 조직화된 노동
                        </td>
                        <td className="px-3 py-2 border">
                          복지국가, 혼합경제, 규제 강화
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-3 py-2 border font-semibold">
                          디지털 시대 초기
                        </td>
                        <td className="px-3 py-2 border">
                          무형자산, 데이터, 알고리즘 가치
                        </td>
                        <td className="px-3 py-2 border">
                          국가별 상이한 디지털 규제, 규제 공백
                        </td>
                        <td className="px-3 py-2 border">
                          플랫폼, 네트워크 효과, 자동화
                        </td>
                        <td className="px-3 py-2 border">
                          초국가적 기업 영향력 확대, 규제 지연
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border font-semibold">
                          향후 디지털 시대
                        </td>
                        <td className="px-3 py-2 border">
                          분산/공유 데이터 자산, 알고리즘 공유
                        </td>
                        <td className="px-3 py-2 border">
                          글로벌 디지털 거버넌스, 초국가 규제
                        </td>
                        <td className="px-3 py-2 border">
                          AI/로봇 자율생산, 인간-기계 협업
                        </td>
                        <td className="px-3 py-2 border">
                          국제협력 기반 규제, 기업-국가 공동 거버넌스
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-sm text-gray-700 mb-4">
                  역사적으로 볼 때, 산업혁명 이후 새로운 경제 질서의 제도화에는
                  상당한 시간이 소요되었습니다. 공장법, 노동법, 반독점법 등의
                  발전은 산업화 이후 수십 년에 걸쳐 진행되었으며, 각국은 자국의
                  상황에 맞게 제도를 발전시켰습니다. 그러나 디지털 혁명은 그
                  속도가 훨씬 빠르고 글로벌한 특성을 가지고 있어, 개별 국가
                  차원의 대응만으로는 효과적인 규제와 제도화가 어렵다는 특징이
                  있습니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* AS-IS */}
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-400">
                  <h3 className="font-bold text-gray-800 mb-3">
                    As-Is (현재 상황)
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• 디지털 경제의 국가 조세·규제 체계 무력화</li>
                    <li>• 초국경적 디지털 기업들의 조세 회피와 세원 잠식</li>
                    <li>• 자동화·로봇화로 인한 전통적 노동기반 세원 약화</li>
                    <li>• 디지털 환경에서 국가 규제 권한 실효성 상실</li>
                    <li>• 국제적 디지털 거버넌스 체계 부재</li>
                    <li>• 알고리즘 기반 의사결정의 투명성 부족</li>
                    <li>• 디지털 독점과 승자독식 현상 심화</li>
                  </ul>
                </div>

                {/* TO-BE */}
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-400">
                  <h3 className="font-bold text-gray-800 mb-3">
                    To-Be (미래 지향점)
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
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
                    <li>• 국가 간 디지털 경제 협력 체계 구축</li>
                    <li>• 알고리즘 투명성과 책임성 제도화</li>
                    <li>• 디지털 격차 해소를 위한 글로벌 협력 체계</li>
                  </ul>
                </div>

                {/* TO-DO */}
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <h3 className="font-bold text-gray-800 mb-3">
                    To-Do (필요한 대응)
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• 디지털 경제 국가 조세·규제 체계 혁신 과제 도출</li>
                    <li>
                      • 초국경적 거래 포착, 무형자산 과세 등 새로운 과세 방안
                      개발
                    </li>
                    <li>• 로봇세, 자동화세 등 대체 세원 발굴</li>
                    <li>
                      • 디지털 기업 알고리즘 및 데이터 활용 규제 체계 정립
                    </li>
                    <li>• 국제 조세 협력, 데이터 거버넌스 글로벌 협력 강화</li>
                    <li>• 디지털 시대 적합한 소득 재분배 메커니즘 설계</li>
                    <li>• 기술 발전 속도에 대응하는 적응형 규제 체계 개발</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-3">
                  디지털 시대의 특징
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">
                      디지털 시대의 생산 방식
                    </h4>
                    <ul className="space-y-1 text-gray-700">
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
                  <div>
                    <h4 className="font-semibold mb-2">
                      디지털 시대의 과세 특징
                    </h4>
                    <ul className="space-y-1 text-gray-700">
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
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-3">
                    두 가지 디지털 경제 모델
                  </h3>
                  <div className="text-sm space-y-3 text-gray-700">
                    <div>
                      <h4 className="font-semibold">미국 중심 자유주의 모델</h4>
                      <ul className="space-y-0.5 pl-4">
                        <li>• 구글, 아마존, 메타 주도</li>
                        <li>• 기업 자율성과 시장 중심 혁신</li>
                        <li>• 글로벌 플랫폼 통한 영향력</li>
                        <li>• 최소한의 규제와 자유로운 데이터 이동</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">중국 중심 국가통제 모델</h4>
                      <ul className="space-y-0.5 pl-4">
                        <li>• 알리바바, 텐센트 등 국가 전략 통합</li>
                        <li>• 디지털 주권과 사회 통제 강조</li>
                        <li>• 데이터 현지화와 사이버 주권</li>
                        <li>• 국가 안보 중심 기술 개발</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-3">
                    조세 패러다임 변화
                  </h3>
                  <div className="text-sm space-y-3 text-gray-700">
                    <div>
                      <h4 className="font-semibold">
                        초국경 서비스와 조세회피
                      </h4>
                      <ul className="space-y-0.5 pl-4">
                        <li>• 물리적 이동 없는 국경 넘는 서비스</li>
                        <li>• 세율 낮은 국가로 이익 이전</li>
                        <li>• 고정사업장 개념 적용 한계</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">자동화와 소득세 약화</h4>
                      <ul className="space-y-0.5 pl-4">
                        <li>• AI/로봇 기반 자동화와 노동시장 변화</li>
                        <li>• 일자리 감소에 따른 소득세 감소</li>
                        <li>• 사회안전망 재원 확보 어려움</li>
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
                      <li>• 로봇세 등 새로운 과세 기반 마련</li>
                      <li>• 국제 조세 협력 체계 강화</li>
                      <li>• 디지털 서비스세 국제 표준화</li>
                      <li>• 물리적 실체 없는 과세 접근법 개발</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">포용적 디지털 전환</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 자동화로 인한 일자리 변화 대응</li>
                      <li>• 디지털 격차 해소 정책</li>
                      <li>• 디지털 역량 강화 교육 체계 구축</li>
                      <li>• 자동화 이익의 사회적 재분배 메커니즘</li>
                      <li>• 보편적 기본소득 등 대안적 모델 검토</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">디지털 규제 혁신</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 국제 공조 기반 디지털 규제 체계</li>
                      <li>• 초국가적 규제 기관 설립 검토</li>
                      <li>• 기술 발전에 맞춘 적응형 규제 설계</li>
                      <li>• 알고리즘 투명성과 감사 체계 구축</li>
                      <li>• 디지털 독점 방지를 위한 새로운 접근법</li>
                      <li>• 국경 초월 규제 실효성 확보 방안</li>
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
