import type { Metadata } from "next";
import Link from "next/link";
import { productIconMap, productItemIconMap } from "@/components/ProductIcons";

const SITE_URL = "https://tianqingxin.vercel.app";

export const metadata: Metadata = {
  title: "產品介紹 | 接線盒、牙條、管配件、防水金屬軟管",
  description:
    "天擎鑫產品總覽：接線盒（單聯、八角、雙連、歐規）、牙條、鑄鐵另件、不銹鋼另件、機械接頭、管配件及防水金屬軟管，規格齊全，大量現貨供應。",
  openGraph: {
    title: "產品介紹 | 天擎鑫管材配件與水電材料",
    description:
      "接線盒、牙條、鑄鐵另件、不銹鋼另件、機械接頭、管配件及防水金屬軟管，規格齊全，量大價優。",
    url: `${SITE_URL}/products`,
  },
  alternates: {
    canonical: `${SITE_URL}/products`,
  },
};

const categories = [
  {
    title: "接線盒",
    products: [
      {
        name: "單聯 Box 接線盒",
        material: "鍍鋅鋼板 / 熱浸鍍鋅 / 烤漆",
        desc: "標準單開關或單插座安裝用，大量現貨供應，量大價優。",
      },
      {
        name: "ST 單聯 Box 接線盒",
        material: "白鐵（不鏽鋼）",
        desc: "不鏽鋼材質，耐腐蝕性佳，適用於潮濕或特殊環境。",
      },
      {
        name: "八角 BOX 接線盒",
        material: "鍍鋅鋼板 / 熱浸鍍鋅 / 烤漆",
        desc: "多角度出線設計，廣泛用於燈具、吊扇等天花板安裝。",
      },
      {
        name: "八角加深 BOX",
        material: "鍍鋅鋼板 / 熱浸鍍鋅 / 烤漆",
        desc: "加深 5cm / 6.5cm 規格，適用於線路較多的配線需求。",
      },
      {
        name: "雙連 BOX 接線盒",
        material: "鍍鋅鋼板 / 熱浸鍍鋅 / 烤漆",
        desc: "雙開關或雙插座安裝專用，適用於需要並排安裝的場景。",
      },
      {
        name: "歐規 BOX 接線盒",
        material: "鍍鋅鋼板 / 烤漆",
        desc: "符合歐洲規格標準，適用於外銷工程及特殊規格需求。",
      },
    ],
  },
  {
    title: "牙條",
    products: [
      {
        name: "鍍鋅牙條",
        material: "鍍鋅鋼",
        desc: "多種規格與長度，長期穩定大量供應，具競爭力價格。",
      },
      {
        name: "不銹鋼牙條",
        material: "不鏽鋼",
        desc: "耐腐蝕材質，適用於戶外及潮濕環境的固定連接。",
      },
    ],
  },
  {
    title: "鑄鐵另件",
    products: [
      {
        name: "鑄鐵管件",
        material: "鑄鐵",
        desc: "高強度鑄鐵配件，包含彎頭、三通、四通、活接等，耐壓耐用。",
      },
      {
        name: "鑄鐵接頭",
        material: "鑄鐵",
        desc: "各式管路連接用鑄鐵接頭，規格齊全，適用於各類管路系統。",
      },
    ],
  },
  {
    title: "不銹鋼另件",
    products: [
      {
        name: "不銹鋼管件",
        material: "304 / 316 不鏽鋼",
        desc: "耐腐蝕、耐高溫，適用於化工、食品、潔淨環境等場所。",
      },
      {
        name: "不銹鋼接頭",
        material: "304 / 316 不鏽鋼",
        desc: "各式規格不銹鋼接頭，品質穩定，連接可靠。",
      },
    ],
  },
  {
    title: "機械接頭",
    products: [
      {
        name: "不鏽鋼管機械接頭",
        material: "不鏽鋼",
        desc: "適用於不鏽鋼管路系統的機械式連接，耐腐蝕、安裝快速便利。",
      },
      {
        name: "鍍鋅鋼管機械接頭",
        material: "鍍鋅鋼",
        desc: "適用於鍍鋅鋼管的管路連接，堅固耐用，規格齊全。",
      },
    ],
  },
  {
    title: "管配件",
    products: [
      {
        name: "管夾 / 管束",
        material: "鍍鋅鋼 / 不鏽鋼",
        desc: "多種尺寸管夾，用於管路固定與支撐。",
      },
      {
        name: "護管接頭",
        material: "鍍鋅鋼 / 不鏽鋼",
        desc: "管路與接線盒之間的連接配件，確保管路系統完整性。",
      },
    ],
  },
  {
    title: "防水金屬軟管",
    products: [
      {
        name: "鍍鋅防水金屬軟管",
        material: "鍍鋅鋼 + PVC 被覆",
        desc: "內層金屬軟管外覆 PVC，防水防塵性能佳，備貨充足量大價優。",
      },
      {
        name: "不鏽鋼防水金屬軟管",
        material: "不鏽鋼 + PVC 被覆",
        desc: "耐腐蝕不鏽鋼材質，適用於化工、食品廠等高規格防水需求場所。",
      },
      {
        name: "金屬軟管接頭",
        material: "鍍鋅鋼 / 不鏽鋼",
        desc: "搭配防水金屬軟管使用之專用接頭，確保連接處密封防水。",
      },
    ],
  },
];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "天擎鑫管材配件產品列表",
  description:
    "接線盒、牙條、鑄鐵另件、不銹鋼另件、機械接頭、管配件及防水金屬軟管等水電材料與電氣配件。",
  numberOfItems: 7,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "接線盒",
      description: "單聯、八角、雙連、歐規全系列接線盒，鍍鋅鋼板與不鏽鋼材質。",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "牙條",
      description: "鍍鋅牙條與不銹鋼牙條，多種規格齊全，長期穩定供應。",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "鑄鐵另件",
      description: "高強度鑄鐵管件與接頭，耐壓耐用。",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "不銹鋼另件",
      description: "304/316不鏽鋼管件與接頭，耐腐蝕耐高溫。",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "機械接頭",
      description: "適用於不鏽鋼管、鍍鋅鋼管等管路系統的機械式接頭，含防水型。",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "管配件",
      description: "管夾、管束、護管接頭等配管工程配件。",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "防水金屬軟管",
      description: "鍍鋅與不鏽鋼防水金屬軟管，防水防塵性能佳。",
    },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      {/* Page Header */}
      <section className="bg-gradient-to-br from-dark-900 to-dark-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">產品介紹</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            接線盒、牙條、鑄鐵另件、不銹鋼另件、機械接頭、管配件、防水金屬軟管 — 水電材料與電氣配件一站式供應
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="bg-gold-50 border-b border-gold-100 sticky top-[72px] z-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-3 flex gap-4 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href={`#${cat.title}`}
              className="text-sm font-medium text-gray-600 hover:text-gold-600 whitespace-nowrap transition-colors"
            >
              {cat.title}
            </a>
          ))}
        </div>
      </section>

      {/* Product Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-16">
          {categories.map((cat) => (
            <div key={cat.title} id={cat.title}>
              <h2 className="text-2xl font-bold text-dark-800 mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-gold-500 rounded-full" />
                {cat.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.products.map((product) => (
                  <div
                    key={product.name}
                    className="bg-warm-50 border border-warm-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gold-200 transition-all"
                  >
                    <div className="bg-warm-200 h-48 flex items-center justify-center">
                      {(() => {
                        const Icon = productItemIconMap[product.name] || productIconMap[cat.title];
                        return Icon ? (
                          <Icon className="w-24 h-24 text-gray-400" />
                        ) : null;
                      })()}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-dark-800 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 text-sm mb-3">
                        {product.desc}
                      </p>
                      <p className="text-xs text-gold-600 bg-gold-50 inline-block px-3 py-1 rounded-full">
                        材質：{product.material}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold-50 border-t border-gold-100">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-800 mb-4">
            需要特殊規格或大量採購？
          </h2>
          <p className="text-gray-500 mb-8">
            歡迎來電洽詢接線盒、牙條、防水金屬軟管等管材配件，我們將盡速為您報價
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
