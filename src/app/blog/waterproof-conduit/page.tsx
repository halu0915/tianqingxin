import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://tianqingxin.vercel.app";

export const metadata: Metadata = {
  title: "防水金屬軟管選購與安裝要點",
  description:
    "詳解防水金屬軟管的鍍鋅與不鏽鋼材質差異、適用環境選擇、搭配接頭原則及安裝施工注意事項，天擎鑫專業管材配件供應商完整分享。",
  openGraph: {
    title: "防水金屬軟管選購與安裝要點 | 天擎鑫有限公司",
    description:
      "防水金屬軟管材質差異、適用環境及安裝注意事項完整指南。",
    url: `${SITE_URL}/blog/waterproof-conduit`,
  },
  alternates: {
    canonical: `${SITE_URL}/blog/waterproof-conduit`,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "防水金屬軟管選購與安裝要點",
  description:
    "詳解防水金屬軟管的材質差異、適用環境及安裝施工注意事項。",
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
  datePublished: "2026-03-18",
  dateModified: "2026-03-18",
  mainEntityOfPage: `${SITE_URL}/blog/waterproof-conduit`,
};

export default function WaterproofConduitPage() {
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
          <time className="text-gold-300/70 text-sm block mb-3">2026-03-18</time>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            防水金屬軟管選購與安裝要點
          </h1>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-4">什麼是防水金屬軟管？</h2>
            <p>
              防水金屬軟管（Liquid Tight Flexible Metal Conduit，簡稱 LFMC）是由金屬內管外覆 PVC 防水被覆層組成的可撓性管材。它結合了金屬管的機械保護強度與 PVC 的防水密封特性，能在需要彎曲走管的同時提供優異的防水防塵性能。在電氣配管工程中，當管路需要經過彎曲路徑、連接會振動的設備，或是安裝在可能接觸水氣的環境時，防水金屬軟管是不可或缺的配管材料。
            </p>
            <p>
              相較於硬質金屬管（如 EMT 管或 RSC 管），防水金屬軟管的最大優勢在於其可撓性。施工時不需要使用彎管器，只需徒手即可依照管路路徑彎曲成所需角度，大幅提升施工效率。同時，其外層的 PVC 被覆提供了額外的防水屏障，使管內的電線電纜免受水分侵入。天擎鑫有限公司長期供應防水金屬軟管，備貨充足，量大價優，是許多水電工程行的穩定供應來源。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-4">鍍鋅 vs 不鏽鋼：材質怎麼選？</h2>
            <p>
              防水金屬軟管的內管材質主要分為鍍鋅鋼帶與不鏽鋼鋼帶兩種，兩者在性能與價格上有明顯差異，應根據使用環境來選擇。
            </p>

            <h3 className="text-xl font-semibold text-dark-800 mt-6 mb-3">鍍鋅防水金屬軟管</h3>
            <p>
              鍍鋅防水金屬軟管以鍍鋅鋼帶螺旋捲繞成型作為內管，外覆 PVC 防水被覆。鍍鋅材質具備良好的機械強度與基本的防鏽能力，在一般環境下能提供可靠的保護。其價格相對經濟，是市場上使用最廣泛的類型，適用於一般建築工程的戶外配線、機電設備連接、空調系統配管等場景。對於大多數沒有特殊腐蝕風險的工程而言，鍍鋅防水金屬軟管是性價比最高的選擇。
            </p>

            <h3 className="text-xl font-semibold text-dark-800 mt-6 mb-3">不鏽鋼防水金屬軟管</h3>
            <p>
              不鏽鋼防水金屬軟管以不鏽鋼鋼帶（通常為 304 或 316 等級）螺旋捲繞製成內管，外覆 PVC 被覆。不鏽鋼材質具備極佳的耐腐蝕性能，即使在高濕度、含鹽分或化學物質的環境中，也能長期維持管體的完整性。雖然單價高於鍍鋅款，但在嚴苛環境中的使用壽命與可靠性遠超鍍鋅產品，長期而言反而更具經濟效益。
            </p>

            <div className="overflow-x-auto mt-6">
              <table className="w-full border-collapse border border-warm-200 text-sm">
                <thead>
                  <tr className="bg-warm-100">
                    <th className="border border-warm-200 px-4 py-3 text-left text-dark-800">比較項目</th>
                    <th className="border border-warm-200 px-4 py-3 text-left text-dark-800">鍍鋅</th>
                    <th className="border border-warm-200 px-4 py-3 text-left text-dark-800">不鏽鋼</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-warm-200 px-4 py-3 font-medium">價格</td>
                    <td className="border border-warm-200 px-4 py-3">較經濟</td>
                    <td className="border border-warm-200 px-4 py-3">較高</td>
                  </tr>
                  <tr className="bg-warm-50">
                    <td className="border border-warm-200 px-4 py-3 font-medium">耐腐蝕性</td>
                    <td className="border border-warm-200 px-4 py-3">良好</td>
                    <td className="border border-warm-200 px-4 py-3">優異</td>
                  </tr>
                  <tr>
                    <td className="border border-warm-200 px-4 py-3 font-medium">耐高溫</td>
                    <td className="border border-warm-200 px-4 py-3">中等</td>
                    <td className="border border-warm-200 px-4 py-3">優異</td>
                  </tr>
                  <tr className="bg-warm-50">
                    <td className="border border-warm-200 px-4 py-3 font-medium">使用壽命</td>
                    <td className="border border-warm-200 px-4 py-3">長</td>
                    <td className="border border-warm-200 px-4 py-3">更長</td>
                  </tr>
                  <tr>
                    <td className="border border-warm-200 px-4 py-3 font-medium">建議用途</td>
                    <td className="border border-warm-200 px-4 py-3">一般戶外、建築工程</td>
                    <td className="border border-warm-200 px-4 py-3">化工、食品、沿海環境</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-4">適用環境</h2>
            <p>
              防水金屬軟管的應用範圍相當廣泛，以下是常見的使用場景與對應的選材建議：
            </p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>
                <strong className="text-dark-800">戶外配線工程：</strong>
                屋頂、外牆、停車場等直接暴露於雨水的區域，是防水金屬軟管最典型的應用場景。一般戶外環境使用鍍鋅材質即可滿足需求。
              </li>
              <li>
                <strong className="text-dark-800">潮濕環境：</strong>
                地下室、浴廁設備間、泳池機房、水處理設施等高濕度場所。長期處於高濕環境建議選用不鏽鋼材質，以延長使用壽命。
              </li>
              <li>
                <strong className="text-dark-800">設備連接：</strong>
                馬達、空調主機、水泵、發電機等設備的電源配線，需要可撓性以吸收設備運轉時產生的振動，防止硬質管路因振動而鬆脫或斷裂。
              </li>
              <li>
                <strong className="text-dark-800">化工廠與特殊環境：</strong>
                化工廠、電鍍廠、半導體廠等有化學腐蝕風險的場所，務必選用不鏽鋼材質，並確認 PVC 被覆的耐化性是否符合現場介質要求。
              </li>
              <li>
                <strong className="text-dark-800">食品加工廠：</strong>
                對衛生標準有嚴格要求的食品與製藥環境，不鏽鋼防水金屬軟管的耐腐蝕與衛生特性使其成為首選。
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-4">搭配接頭的選擇</h2>
            <p>
              防水金屬軟管必須搭配專用的金屬軟管接頭（Connector）使用，才能確保連接處的防水密封性能。接頭負責將軟管與接線盒、配電箱或設備端口銜接固定，其品質直接影響整條管路的防水等級。天擎鑫提供與軟管配套的各式接頭產品，選擇時需注意以下要點：
            </p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>
                <strong className="text-dark-800">尺寸匹配：</strong>
                接頭的管徑必須與軟管一致，常見規格有 1/2 吋、3/4 吋、1 吋、1-1/4 吋、1-1/2 吋及 2 吋等。尺寸不符會導致無法正確安裝或密封不良。
              </li>
              <li>
                <strong className="text-dark-800">材質對應：</strong>
                鍍鋅軟管應搭配鍍鋅接頭，不鏽鋼軟管應搭配不鏽鋼接頭。混用不同金屬材質可能造成電化學腐蝕（伽凡尼腐蝕），加速管路劣化。
              </li>
              <li>
                <strong className="text-dark-800">連接規格確認：</strong>
                確認接頭另一端與接線盒或設備的連接規格是否吻合，包含螺牙規格（公制或英制）、孔徑大小等。
              </li>
              <li>
                <strong className="text-dark-800">防水等級：</strong>
                根據使用環境選擇對應的 IP 防水等級。一般戶外使用至少需達 IP65 以上，浸水環境則需 IP67 或更高。
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-4">安裝注意事項</h2>
            <p>
              正確的安裝施工是確保防水金屬軟管發揮最佳性能的關鍵。以下是施工時應特別留意的要點：
            </p>
            <ol className="list-decimal pl-6 space-y-3 mt-4">
              <li>
                <strong className="text-dark-800">遵守最小彎曲半徑：</strong>
                不要過度彎折軟管，應保持在最小彎曲半徑以上（通常為管徑的 6 倍）。例如 1 吋的軟管，彎曲半徑不應小於 6 吋。過度彎折會導致內管結構變形，破壞防水被覆層的完整性。
              </li>
              <li>
                <strong className="text-dark-800">適當的固定間距：</strong>
                每隔適當距離用管夾固定軟管，避免因自重下垂或振動導致鬆脫。水平配管建議每 1 至 1.5 公尺固定一處，垂直配管的間距可適度縮短。管夾材質也應與軟管材質對應，避免異種金屬接觸。
              </li>
              <li>
                <strong className="text-dark-800">切割後的處理：</strong>
                切割軟管時使用專用切管器或鋼鋸，切口需保持平整。切割後務必去除金屬毛邊，並確認 PVC 外被覆完整無破損。若被覆層有破損，該段管路的防水性能將大打折扣。
              </li>
              <li>
                <strong className="text-dark-800">接頭確實鎖緊：</strong>
                接頭與軟管的連接處要確實鎖緊至定位，必要時使用密封膠帶或防水密封膠加強密封效果。鎖緊力道要適中，過鬆會滲水，過緊則可能損壞螺牙。
              </li>
              <li>
                <strong className="text-dark-800">預留撓曲餘量：</strong>
                安裝時不可過度拉伸軟管，特別是設備連接處需保留足夠的撓曲空間。設備振動時，軟管需要靠撓曲來吸收位移，若安裝過緊反而會造成接頭處承受過大應力。
              </li>
              <li>
                <strong className="text-dark-800">確保接地連續性：</strong>
                確保軟管兩端的接頭與接地系統連接良好，維持電氣接地的連續性。若接地不完整，一旦管內線路發生漏電，將無法有效觸發保護裝置，構成安全隱患。
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-4">結語</h2>
            <p>
              防水金屬軟管在現代電氣配管工程中扮演著不可或缺的角色，從戶外配線到工業廠房，從設備連接到特殊環境，都能見到它的身影。正確的材質選擇、接頭搭配與安裝施工，是確保管路系統長期穩定運作的三大關鍵。天擎鑫有限公司提供鍍鋅與不鏽鋼兩種材質的防水金屬軟管，搭配齊全的接頭配件與機械接頭產品，備貨充足且量大價優，歡迎各水電工程同業來電洽詢或前來選購。
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-warm-100 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-dark-800 mb-3">
            需要防水金屬軟管報價？
          </h3>
          <p className="text-gray-500 mb-6">
            天擎鑫備貨充足，量大價優，歡迎洽詢
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
