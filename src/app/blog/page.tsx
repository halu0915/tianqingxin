import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://tianqingxin.com";

export const metadata: Metadata = {
  title: "知識庫",
  description:
    "管材配件專業知識庫 — 接線盒選購指南、鑄鐵與不銹鋼管件比較、防水金屬軟管安裝要點，天擎鑫助您掌握水電材料與配管工程的實用知識。",
  openGraph: {
    title: "知識庫 | 天擎鑫有限公司",
    description:
      "管材配件專業知識庫，涵蓋接線盒、管配件、防水金屬軟管等水電材料選購與工程實務。",
    url: `${SITE_URL}/blog`,
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

const articles = [
  {
    slug: "junction-box-guide",
    title: "接線盒規格選購指南 — 單聯、八角、雙連、歐規怎麼選？",
    summary:
      "深入解析四種常見接線盒的規格、適用場景與材質選擇，幫助水電工程人員根據實際需求做出最佳選購決策。",
    date: "2026-04-01",
  },
  {
    slug: "cast-iron-vs-stainless",
    title: "鑄鐵管件 vs 不銹鋼管件 — 材質比較與選用建議",
    summary:
      "從強度、耐腐蝕性、價格與適用環境等面向，全面比較鑄鐵與不銹鋼管件的特性差異，協助您在不同工程條件下做出正確的材質選擇。",
    date: "2026-03-25",
  },
  {
    slug: "waterproof-conduit",
    title: "防水金屬軟管選購與安裝要點",
    summary:
      "詳解防水金屬軟管的材質差異、適用環境及搭配接頭的選擇原則，並分享安裝施工時的關鍵注意事項。",
    date: "2026-03-18",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark-900 via-dark-800 to-gold-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            知識<span className="text-gold-400">庫</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            管材配件專業知識，幫助您做出最佳選擇
          </p>
        </div>
      </section>

      {/* Article List */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-warm-50 border border-warm-200 rounded-2xl p-6 hover:shadow-lg hover:border-gold-200 transition-all flex flex-col"
            >
              <div className="bg-warm-200 rounded-xl h-40 flex items-center justify-center mb-4 group-hover:bg-gold-100 transition-colors">
                <svg
                  className="w-12 h-12 text-gray-400 group-hover:text-gold-600 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <time className="text-sm text-gray-400 mb-2">{article.date}</time>
              <h2 className="text-lg font-semibold text-dark-800 mb-2 group-hover:text-gold-600 transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {article.summary}
              </p>
              <span className="text-gold-600 text-sm font-medium mt-4 inline-flex items-center gap-1">
                閱讀全文
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-gold-500 to-gold-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            需要更多產品資訊？
          </h2>
          <p className="text-gold-100 mb-8 text-lg">
            歡迎瀏覽我們的產品頁面或直接與我們聯繫
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-block bg-white text-gold-600 hover:bg-gold-50 font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              瀏覽產品
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-white text-white hover:bg-white hover:text-gold-600 font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              立即詢價
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
