import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://tianqingxin.vercel.app";

export const metadata: Metadata = {
  title: "服務項目",
  description:
    "天擎鑫提供接線盒、牙條、鑄鐵另件、不銹鋼另件、機械接頭、管配件及防水金屬軟管供應，另有特殊規格訂製、品質檢驗與客製化材料管控服務。",
  openGraph: {
    title: "服務項目 | 天擎鑫管材配件供應與客製化服務",
    description:
      "標準產品供應、特殊規格訂製、品質檢驗、客製化材料管控與配送售後，完整的配管工程解決方案。",
    url: `${SITE_URL}/services`,
  },
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
};

const services = [
  {
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    title: "標準產品供應",
    desc: "提供各式接線盒、牙條、鑄鐵另件、不銹鋼另件、機械接頭及管配件，規格齊全，庫存充足。",
    features: [
      "接線盒全系列（單聯、八角、雙連、歐規）",
      "牙條（鍍鋅、不鏽鋼）",
      "鑄鐵 / 不銹鋼另件",
      "機械接頭與管配件",
    ],
  },
  {
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    title: "特殊規格訂製",
    desc: "可依客戶提供的圖面或規格需求，訂製特殊尺寸產品，滿足非標準工程的安裝需求。",
    features: [
      "依圖面或樣品訂製",
      "彈性尺寸調整",
      "小量到大量皆可配合",
      "多種材質與表面處理可選",
    ],
  },
  {
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    title: "品質檢驗",
    desc: "每一批產品皆經過嚴格品管流程，確保尺寸精度、材質強度及表面處理均符合標準。",
    features: [
      "尺寸精度檢測",
      "材質與厚度確認",
      "表面處理品質把關",
      "出貨前全數檢驗",
    ],
  },
  {
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    title: "客製化材料管控",
    desc: "依工程實際需求精準配料，協助客戶掌握用量，減少剩料浪費，有效降低工程總成本。",
    features: [
      "依工程圖面精準估料",
      "分批供貨彈性配合",
      "減少現場剩料浪費",
      "降低工程材料總成本",
    ],
  },
  {
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    title: "配送與售後",
    desc: "提供快速配送服務，並於售後持續提供技術諮詢與產品支援，確保客戶安心使用。",
    features: [
      "快速出貨配送",
      "技術諮詢服務",
      "售後產品支援",
      "長期穩定供貨",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-dark-900 to-dark-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">工地缺料不是你的錯</h1>
          <p className="text-gold-300 text-xl max-w-2xl mx-auto mb-3">
            是沒人盯著。我們盯。
          </p>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            從標準水電材料供應到客製化配管工程需求，完整的管材配件解決方案
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-warm-50 border border-warm-200 rounded-2xl p-8 hover:shadow-lg hover:border-gold-200 transition-all"
            >
              <div className="w-14 h-14 bg-gold-100 rounded-xl flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-gold-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={svc.icon}
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-dark-800 mb-3">
                {svc.title}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">{svc.desc}</p>
              <ul className="space-y-2">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
                    <svg
                      className="w-4 h-4 text-gold-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Service Flow */}
      <section className="bg-warm-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-800">
              服務<span className="text-gold-500">流程</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              從諮詢到售後，每一步都有專人為您把關
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "需求諮詢",
                desc: "透過電話、電子郵件或表單提出您的產品需求與工程規格，我們的業務團隊將為您提供專業建議。",
              },
              {
                step: "02",
                title: "報價確認",
                desc: "根據您的需求數量、規格與交期，提供詳細報價單。確認無誤後即可下單。",
              },
              {
                step: "03",
                title: "備貨出貨",
                desc: "庫存品即時出貨，訂製品依約定交期安排生產。出貨前進行品質檢驗，確保產品合格。",
              },
              {
                step: "04",
                title: "售後服務",
                desc: "出貨後持續追蹤使用狀況，提供技術諮詢與產品支援，確保您安心無憂。",
              },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow h-full">
                  <div className="w-14 h-14 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-800 text-center mb-12">
            可選<span className="text-gold-500">材質</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "鍍鋅鋼板", code: "EG" },
              { name: "熱浸鍍鋅", code: "GI" },
              { name: "白鐵（不鏽鋼）", code: "ST" },
              { name: "烤漆", code: "Coating" },
            ].map((m) => (
              <div key={m.code} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gold-600 font-bold text-sm">{m.code}</span>
                </div>
                <h3 className="font-semibold text-dark-800">{m.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold-50 border-t border-gold-100">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-800 mb-4">
            需要報價或客製化服務？
          </h2>
          <p className="text-gray-500 mb-8">
            歡迎來電洽詢接線盒、管配件等水電材料訂製與大量採購，我們將盡速為您回覆
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            立即詢價
          </Link>
        </div>
      </section>
    </>
  );
}
