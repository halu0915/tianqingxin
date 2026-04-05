import type { Metadata } from "next";
import Image from "next/image";

const SITE_URL = "https://www.tianqingxin.com.tw";

export const metadata: Metadata = {
  title: "關於我們 | 管材配件與水電材料專業供應商",
  description:
    "天擎鑫有限公司專注接線盒、牙條、鑄鐵另件、不銹鋼另件、機械接頭、管配件及防水金屬軟管供應，提供客製化材料管控，服務建築水電機電工程。",
  openGraph: {
    title: "關於天擎鑫 | 管材配件與水電材料專業供應商",
    description:
      "深耕管材配件領域，提供接線盒、牙條、防水金屬軟管等完整產品線與客製化材料管控服務。",
    url: `${SITE_URL}/about`,
  },
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

const milestones = [
  { year: "創立", event: "公司成立，專注於接線盒設計與製造" },
  { year: "成長", event: "產品線擴展，涵蓋單聯、八角、雙連、歐規等全系列" },
  { year: "升級", event: "導入自動化生產設備，提升產能與品質穩定性" },
  { year: "展望", event: "持續創新研發，拓展國內外市場，邁向永續經營" },
];

const values = [
  {
    title: "專業技術",
    desc: "深耕接線盒與管材配件供應領域，累積豐富的配管工程服務經驗。",
  },
  {
    title: "品質追求",
    desc: "嚴格品管流程，確保每一件產品都符合標準與客戶期待。",
  },
  {
    title: "服務至上",
    desc: "以客戶需求為核心，提供快速回應與彈性配合的服務。",
  },
  {
    title: "誠信負責",
    desc: "說到做到，以誠信態度建立長久信賴的合作關係。",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-dark-900 to-dark-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">關於我們</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            以專業技術、品質追求、服務至上的信念，為建築水電工程客戶提供最佳管材配件解決方案
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-dark-800 mb-6">
              天擎鑫<span className="text-gold-500">企業簡介</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                天擎鑫有限公司秉持專業技術、品質追求、服務至上、誠信負責的經營信念，致力於贏得每一位客戶的認同與信賴。
              </p>
              <p>
                公司主要產品包含各式接線盒、牙條、鑄鐵另件、不銹鋼另件、機械接頭、管配件及防水金屬軟管等水電材料與電氣配件，產品線完整，規格齊全，可依客戶需求提供特殊規格訂製服務。
              </p>
              <p>
                我們更提供客製化材料管控服務，協助客戶精準掌握用量，減少剩料浪費，有效降低工程總成本。公司抱持永續經營理念，以穩紮穩打的經營態度，不斷創新、追求完美，為客戶提供最佳解決方案。
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-dark-900 to-dark-800 rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
            <Image
              src="/logo.jpg"
              alt="天擎鑫有限公司 TQH Logo"
              width={320}
              height={300}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-warm-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-dark-800 text-center mb-12">
            經營<span className="text-gold-500">理念</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold-600 text-xl font-bold">
                    {v.title[0]}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-dark-800 mb-2">
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Scope */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-dark-800 text-center mb-12">
          業務<span className="text-gold-500">範圍</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-warm-50 border border-warm-200 rounded-2xl p-8">
            <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-dark-800 mb-3">管材配件供應</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                接線盒全系列（單聯、八角、雙連、歐規）
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                牙條、鑄鐵另件、不銹鋼另件
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                機械接頭、管配件
              </li>
            </ul>
          </div>
          <div className="bg-warm-50 border border-warm-200 rounded-2xl p-8">
            <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-dark-800 mb-3">客製化材料管控</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                依工程需求精準配料，減少剩料浪費
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                有效降低工程總成本
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                特殊規格訂製服務
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision & Team */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 企業願景 */}
          <div className="bg-gradient-to-br from-gold-50 to-warm-50 border border-gold-100 rounded-2xl p-8">
            <div className="w-14 h-14 bg-gold-100 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-dark-800 mb-4">
              企業<span className="text-gold-500">願景</span>
            </h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p>
                天擎鑫以「成為國內管材配件領域最值得信賴的供應商」為長期願景。我們相信，唯有持續精進產品品質、深化客戶服務，才能在競爭激烈的市場中穩步前行。
              </p>
              <p>
                未來，我們將持續擴充產品線，引進更多符合國際標準的管材配件，同時強化數位化庫存管理系統，為客戶提供更即時、更精準的供貨服務，攜手合作夥伴共同成長。
              </p>
            </div>
          </div>

          {/* 團隊介紹 */}
          <div className="bg-gradient-to-br from-warm-50 to-gold-50 border border-warm-200 rounded-2xl p-8">
            <div className="w-14 h-14 bg-gold-100 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-dark-800 mb-4">
              專業<span className="text-gold-500">團隊</span>
            </h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p>
                天擎鑫擁有一支具備豐富管材配件產業經驗的專業團隊，成員涵蓋業務諮詢、技術支援、品質管理及倉儲物流等領域，能針對客戶的不同需求提供全方位的服務。
              </p>
              <p>
                從初次洽詢的需求釐清，到報價、出貨、售後追蹤，每一個環節都由專人負責，確保溝通順暢、執行到位。我們重視每一位客戶的聲音，以團隊的專業與熱忱，建立長期穩固的合作關係。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-warm-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-dark-800 text-center mb-12">
            發展<span className="text-gold-500">歷程</span>
          </h2>
          <div className="max-w-2xl mx-auto space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{m.year}</span>
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 text-lg">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
