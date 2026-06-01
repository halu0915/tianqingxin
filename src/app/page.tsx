import type { Metadata } from "next";
import Link from "next/link";
import { productIconMap } from "@/components/ProductIcons";

const SITE_URL = "https://tianqingxin.com";

export const metadata: Metadata = {
  title: "天擎鑫有限公司 | 接線盒、牙條、管配件、防水金屬軟管供應",
  description:
    "天擎鑫有限公司為台北中山區專業管材配件供應商，提供接線盒、牙條、鑄鐵另件、不銹鋼另件、機械接頭、管配件及防水金屬軟管，適用建築、水電、機電工程。",
  openGraph: {
    title: "天擎鑫有限公司 | 專業管材配件供應商",
    description:
      "提供接線盒、牙條、鑄鐵另件、不銹鋼另件、機械接頭、管配件及防水金屬軟管，量大價優，服務建築水電機電工程。",
    url: SITE_URL,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const products = [
  {
    title: "接線盒",
    desc: "單聯、八角、雙連、歐規全系列，大量現貨供應，量大價優。",
  },
  {
    title: "牙條",
    desc: "多種規格齊全，長期穩定大量供應，具競爭力價格。",
  },
  {
    title: "鑄鐵另件",
    desc: "高強度鑄鐵配件，耐用可靠，應用範圍廣泛。",
  },
  {
    title: "不銹鋼另件",
    desc: "耐腐蝕不銹鋼配件，適用於潮濕及特殊環境。",
  },
  {
    title: "機械接頭",
    desc: "各式管路機械接頭，安裝方便，連接穩固。",
  },
  {
    title: "管配件",
    desc: "多種管路配件，滿足各類配管工程需求。",
  },
  {
    title: "防水金屬軟管",
    desc: "防水防塵金屬軟管，備貨充足量大價優，滿足大型工程需求。",
  },
];

const highlights = [
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "品質保證",
    desc: "嚴格把關每一道工序，確保接線盒、管配件等產品符合國家標準與客戶要求。",
  },
  {
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    title: "產品齊全",
    desc: "接線盒、牙條、鑄鐵另件、不銹鋼另件、機械接頭、管配件一站供應。",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "快速交貨",
    desc: "完善的庫存管理與物流配合，水電材料與管材配件快速出貨，滿足工程交期需求。",
  },
];

const stats = [
  { value: "10+", label: "年經驗" },
  { value: "200+", label: "服務客戶" },
  { value: "50+", label: "產品規格" },
  { value: "7", label: "大產品類別" },
];

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "天擎鑫有限公司",
  url: SITE_URL,
  description:
    "專業管材配件供應商，提供接線盒、牙條、鑄鐵另件、不銹鋼另件、機械接頭、管配件及防水金屬軟管。",
  publisher: {
    "@type": "Organization",
    name: "天擎鑫有限公司",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-gold-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-gold-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-44 text-center">
          <p className="text-gold-300 tracking-widest text-sm mb-4">
            接線盒 / 牙條 / 鑄鐵另件 / 不銹鋼另件 / 機械接頭 / 管配件 / 防水金屬軟管
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            天擎鑫有限公司
            <br />
            <span className="text-gold-400">專業管材配件 品質值得信賴</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed">
            水電材料與電氣配件，一站式供應。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              立即詢價
            </Link>
            <Link
              href="/products"
              className="inline-block border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-dark-900 font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              瀏覽產品
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gold-50 border-b border-gold-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-gold-600">
                  {stat.value}
                </div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800">
            主要<span className="text-gold-500">產品</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            完整的管材配件與電氣配件產品線，一站式滿足配管工程需求
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.title}
              href="/products"
              className="group bg-warm-50 border border-warm-200 rounded-2xl p-6 hover:shadow-lg hover:border-gold-200 transition-all"
            >
              <div className="bg-warm-200 rounded-xl h-40 flex items-center justify-center mb-4 group-hover:bg-gold-100 transition-colors">
                {(() => {
                  const Icon = productIconMap[product.title];
                  return Icon ? (
                    <Icon className="w-20 h-20 text-gray-400 group-hover:text-gold-600 transition-colors" />
                  ) : null;
                })()}
              </div>
              <h3 className="text-lg font-semibold text-dark-800 mb-1">
                {product.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {product.desc}
              </p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/products"
            className="text-gold-600 hover:text-gold-700 font-medium inline-flex items-center gap-1"
          >
            查看全部產品
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-warm-100 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-800">
              為什麼選擇<span className="text-gold-500">天擎鑫</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-gold-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 適用產業 */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800">
            適用<span className="text-gold-500">產業</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            天擎鑫的管材配件與水電材料廣泛應用於各類工程與產業領域
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
              title: "建築工程",
              desc: "住宅大樓、商辦大樓等建築的電氣配管與管路系統安裝，使用接線盒、牙條等配件。",
            },
            {
              icon: "M13 10V3L4 14h7v7l9-11h-7z",
              title: "水電工程",
              desc: "室內外水電管路配置，提供各式接線盒與管路配件。",
            },
            {
              icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
              title: "機電工程",
              desc: "空調、消防、電力等機電系統所需之管材與配件供應。",
            },
            {
              icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              title: "工廠設施",
              desc: "製造業廠房管路配置，提供不銹鋼另件與防水金屬軟管，適用化工、食品、電子等產業。",
            },
          ].map((industry) => (
            <div
              key={industry.title}
              className="bg-warm-50 border border-warm-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-gold-200 transition-all"
            >
              <div className="w-14 h-14 bg-gold-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-gold-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="img"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={industry.icon}
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-dark-800 mb-2">
                {industry.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {industry.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gold-500 to-gold-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            需要報價或大量採購？
          </h2>
          <p className="text-gold-100 mb-8 text-lg">
            歡迎來電洽詢接線盒、牙條、管配件等水電材料，我們將盡速為您回覆
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-gold-600 hover:bg-gold-50 font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            立即詢價
          </Link>
        </div>
      </section>
    </>
  );
}
