import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://tianqingxin.com";

export const metadata: Metadata = {
  title: "接線盒規格選購指南 — 單聯、八角、雙連、歐規怎麼選？",
  description:
    "深入解析單聯接線盒、八角接線盒、雙連接線盒、歐規接線盒的規格差異與適用場景，涵蓋鍍鋅鋼板、熱浸鍍鋅、白鐵、烤漆等材質選擇建議。天擎鑫專業管材配件供應。",
  openGraph: {
    title: "接線盒規格選購指南 | 天擎鑫有限公司",
    description:
      "四種常見接線盒的規格、適用場景與材質選擇完整指南。",
    url: `${SITE_URL}/blog/junction-box-guide`,
  },
  alternates: {
    canonical: `${SITE_URL}/blog/junction-box-guide`,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "接線盒規格選購指南 — 單聯、八角、雙連、歐規怎麼選？",
  description:
    "深入解析四種常見接線盒的規格、適用場景與材質選擇建議。",
  author: {
    "@type": "Organization",
    name: "天擎鑫有限公司",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "天擎鑫有限公司",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  datePublished: "2026-04-01",
  dateModified: "2026-04-01",
  mainEntityOfPage: `${SITE_URL}/blog/junction-box-guide`,
};

export default function JunctionBoxGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-dark-900 via-dark-800 to-gold-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <Link
            href="/blog"
            className="text-gold-400 hover:text-gold-300 text-sm inline-flex items-center gap-1 mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回知識庫
          </Link>
          <time className="text-gold-300/70 text-sm block mb-3">2026-04-01</time>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            接線盒規格選購指南 — 單聯、八角、雙連、歐規怎麼選？
          </h1>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-4">什麼是接線盒？</h2>
            <p>
              接線盒（Junction Box）是電氣配管工程中不可或缺的基礎元件，主要用於電線與電線之間的連接、分歧及保護。在建築水電工程中，接線盒被埋設於牆面、天花板或地板內部，提供安全的導線會合空間，防止線路外露造成短路或觸電危險。無論是住宅、商辦大樓還是工廠設施，只要有電氣配線需求，就需要使用接線盒。
            </p>
            <p>
              接線盒的選擇直接影響施工效率與安全性。選用不當不僅可能導致安裝困難，還可能在日後維護時造成不便。因此，了解各類型接線盒的特點與適用情境，是每位水電工程人員必備的專業知識。天擎鑫作為專業管材配件供應商，長期供應各式接線盒，以下將針對市場上四種最常見的類型進行詳細解析。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-4">四種常見接線盒類型比較</h2>

            <h3 className="text-xl font-semibold text-dark-800 mt-6 mb-3">一、單聯接線盒</h3>
            <p>
              單聯接線盒是最基礎也是使用最廣泛的類型，外型為長方形，通常設有一組開關或插座的安裝孔位。其標準尺寸適合嵌入一般牆壁厚度，適用於住宅與商業空間中單一開關或插座的安裝位置。單聯接線盒的優勢在於體積小巧、安裝簡便，且價格經濟實惠，是一般居家水電配線最常使用的規格。在牆面空間有限或僅需單一迴路的場合，選擇單聯接線盒最為合適。
            </p>

            <h3 className="text-xl font-semibold text-dark-800 mt-6 mb-3">二、八角接線盒</h3>
            <p>
              八角接線盒因其八角形的外觀而得名，主要安裝於天花板上，用於吊燈、吸頂燈或吊扇等設備的固定與配線。八角形設計提供了多個方向的管路進出孔位，使得從不同方向進入的電線管都能便利地銜接，特別適合天花板區域多管路匯集的場景。此外，八角接線盒通常具備較高的承重能力，能夠承受燈具或小型吊扇的重量。在進行天花板配線工程時，八角接線盒幾乎是標準配備。
            </p>

            <h3 className="text-xl font-semibold text-dark-800 mt-6 mb-3">三、雙連接線盒</h3>
            <p>
              雙連接線盒的寬度約為單聯的兩倍，提供兩組安裝孔位，適合需要並排安裝兩個開關或插座的場合。在現代建築中，一個位置同時配置多個開關（例如控制不同區域的照明）或多個插座的需求相當普遍，此時使用雙連接線盒可以讓施工更為整潔，避免在牆面上開設兩個獨立的安裝孔，也減少了線路分歧的複雜度。對於需要集中控制的區域，如客廳入口、會議室門旁等位置，雙連接線盒是理想的選擇。
            </p>

            <h3 className="text-xl font-semibold text-dark-800 mt-6 mb-3">四、歐規接線盒</h3>
            <p>
              歐規接線盒依循歐洲電氣標準設計，外型多為圓形，尺寸與安裝規格與台灣傳統規格有所不同。隨著進口開關面板與智慧家居設備在台灣市場的普及，歐規接線盒的需求也逐漸增加。歐規接線盒的深度通常較深，能容納更多接線空間，適合搭配歐系品牌的開關插座使用。在高端住宅、設計師指定案或使用進口電氣設備的工程中，往往需要採用歐規接線盒，施工前務必先確認面板規格以避免不相容的問題。
            </p>
          </section>

          {/* Comparison Table */}
          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-4">四種接線盒快速比較</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-warm-200 text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="border border-warm-200 px-4 py-3 text-left text-dark-800">類型</th>
                    <th className="border border-warm-200 px-4 py-3 text-left text-dark-800">外型</th>
                    <th className="border border-warm-200 px-4 py-3 text-left text-dark-800">主要用途</th>
                    <th className="border border-warm-200 px-4 py-3 text-left text-dark-800">適用場景</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-warm-200 px-4 py-3 font-medium">單聯</td>
                    <td className="border border-warm-200 px-4 py-3">長方形</td>
                    <td className="border border-warm-200 px-4 py-3">單一開關/插座安裝</td>
                    <td className="border border-warm-200 px-4 py-3">住宅、商辦一般配線</td>
                  </tr>
                  <tr className="bg-warm-50">
                    <td className="border border-warm-200 px-4 py-3 font-medium">八角</td>
                    <td className="border border-warm-200 px-4 py-3">八角形</td>
                    <td className="border border-warm-200 px-4 py-3">天花板燈具/吊扇固定</td>
                    <td className="border border-warm-200 px-4 py-3">天花板配線工程</td>
                  </tr>
                  <tr>
                    <td className="border border-warm-200 px-4 py-3 font-medium">雙連</td>
                    <td className="border border-warm-200 px-4 py-3">寬長方形</td>
                    <td className="border border-warm-200 px-4 py-3">雙開關/雙插座並排</td>
                    <td className="border border-warm-200 px-4 py-3">集中控制區、多迴路位置</td>
                  </tr>
                  <tr className="bg-warm-50">
                    <td className="border border-warm-200 px-4 py-3 font-medium">歐規</td>
                    <td className="border border-warm-200 px-4 py-3">圓形</td>
                    <td className="border border-warm-200 px-4 py-3">搭配歐系面板/智慧設備</td>
                    <td className="border border-warm-200 px-4 py-3">高端住宅、進口設備工程</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-4">材質選擇建議</h2>
            <p>
              接線盒的材質會直接影響其耐用度與適用環境，以下是常見的四種材質及其特性：
            </p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>
                <strong className="text-dark-800">鍍鋅鋼板：</strong>
                最為普遍的材質，以冷軋鋼板經電鍍鋅處理製成，具備基本的防鏽能力，適合室內一般環境使用。價格實惠，是大多數住宅與商辦建築的標準選擇。
              </li>
              <li>
                <strong className="text-dark-800">熱浸鍍鋅：</strong>
                鍍鋅層較厚，防鏽能力顯著優於一般鍍鋅鋼板，適合半戶外或濕度較高的環境，如地下室、機房、停車場等。雖然單價稍高，但在潮濕環境中的使用壽命遠勝一般鍍鋅產品。
              </li>
              <li>
                <strong className="text-dark-800">白鐵（不銹鋼）：</strong>
                耐腐蝕性最佳，適用於化工廠、食品加工廠、沿海地區等高腐蝕環境。不銹鋼接線盒的價格較高，但在嚴苛環境下的耐久性無可取代，長期來看反而更為經濟。
              </li>
              <li>
                <strong className="text-dark-800">烤漆：</strong>
                在鋼板表面施以烤漆處理，除了防鏽功能外，還能提供較佳的外觀質感。適合對美觀有要求的明裝工程，或需要色彩標示的特殊場合。
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-4">選購時的注意事項</h2>
            <p>
              在選購接線盒時，建議水電工程人員注意以下幾個要點：
            </p>
            <ol className="list-decimal pl-6 space-y-3 mt-4">
              <li>
                <strong className="text-dark-800">確認面板規格：</strong>
                施工前務必確認所使用的開關面板品牌與規格，以選擇對應的接線盒類型。特別是歐規與台規之間的尺寸差異，若規格不符將導致無法安裝。
              </li>
              <li>
                <strong className="text-dark-800">評估安裝環境：</strong>
                根據安裝位置的濕度、溫度與腐蝕風險，選擇適合的材質。室內乾燥環境使用鍍鋅鋼板即可，潮濕或戶外環境則應考慮熱浸鍍鋅或不銹鋼材質。
              </li>
              <li>
                <strong className="text-dark-800">預留足夠的接線空間：</strong>
                若該位置需要較多導線匯集，應選擇深度較深或尺寸較大的接線盒，避免日後線路擁擠導致散熱不良或維修困難。
              </li>
              <li>
                <strong className="text-dark-800">注意進線孔數量與方向：</strong>
                根據管路走向，確認接線盒的敲落孔數量與位置是否滿足實際配管需求。
              </li>
              <li>
                <strong className="text-dark-800">選擇可靠的供應商：</strong>
                接線盒的品質直接關係到電氣安全，建議向信譽良好的供應商採購，確保產品符合國家標準。天擎鑫長期供應各式接線盒，品質穩定、規格齊全，可滿足不同工程的需求。
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-4">結語</h2>
            <p>
              接線盒雖然是電氣工程中看似簡單的配件，但正確的選型對於施工品質與長期使用安全至關重要。從類型的選擇到材質的考量，每個環節都需要根據實際工程條件做出判斷。天擎鑫有限公司提供單聯、八角、雙連、歐規全系列接線盒，並備有鍍鋅鋼板、熱浸鍍鋅、白鐵、烤漆等多種材質選擇，歡迎水電工程同業前來洽詢。
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-warm-100 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-dark-800 mb-3">
            需要接線盒報價或技術諮詢？
          </h3>
          <p className="text-gray-500 mb-6">
            天擎鑫提供全系列接線盒，量大價優，歡迎來電洽詢
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              瀏覽產品
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              聯絡我們
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
