import type { Metadata } from "next";
import ContactForm from "./ContactForm";

const SITE_URL = "https://tianqingxin.vercel.app";

export const metadata: Metadata = {
  title: "聯絡我們 | 管材配件詢價與合作洽談",
  description:
    "聯繫天擎鑫有限公司，詢價接線盒、牙條、鑄鐵另件、不銹鋼另件、機械接頭、管配件及防水金屬軟管，臺北市中山區松江路，歡迎來電或填寫表單。",
  openGraph: {
    title: "聯絡天擎鑫 | 管材配件詢價",
    description:
      "臺北市中山區松江路，接線盒、牙條、管配件等水電材料詢價與合作洽談，歡迎來電或填寫表單。",
    url: `${SITE_URL}/contact`,
  },
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

const contactInfo = [
  {
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    label: "電話",
    value: "0916-027-603",
    link: "tel:0916027603",
  },
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    label: "電子郵件",
    value: "TianQingHsin@gmail.com",
    link: "mailto:TianQingHsin@gmail.com",
  },
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    label: "地址",
    value: "臺北市中山區松江路204巷36號",
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    label: "營業時間",
    value: "週一至週五 09:00 - 18:00",
  },
  {
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    label: "LINE 官方帳號",
    value: "@199vmkbg",
    link: "https://line.me/R/ti/p/@199vmkbg",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "天擎鑫有限公司",
  description:
    "專業管材配件供應商，提供接線盒、牙條、鑄鐵另件、不銹鋼另件、機械接頭、管配件及防水金屬軟管等水電材料。",
  url: SITE_URL,
  telephone: "0916-027-603",
  email: "TianQingHsin@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "松江路204巷36號",
    addressLocality: "中山區",
    addressRegion: "臺北市",
    postalCode: "104",
    addressCountry: "TW",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.058,
    longitude: 121.5325,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "0916-027-603",
    contactType: "customer service",
    email: "TianQingHsin@gmail.com",
    availableLanguage: "Chinese",
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      {/* Page Header */}
      <section className="bg-gradient-to-br from-dark-900 to-dark-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">聯絡我們</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            接線盒、牙條、管配件等水電材料詢價，或任何合作需求，歡迎隨時與我們聯繫
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-dark-800 mb-6">
              傳送<span className="text-gold-500">訊息</span>
            </h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-dark-800 mb-6">
              聯絡<span className="text-gold-500">資訊</span>
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-gold-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={info.icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    {"link" in info && info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-dark-800 font-medium hover:text-gold-500 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-dark-800 font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map */}
            <div className="mt-8 rounded-2xl overflow-hidden">
              <iframe
                title="天擎鑫有限公司位置"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5!2d121.5325!3d25.0580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAzJzI4LjgiTiAxMjHCsDMxJzU3LjAiRQ!5e0!3m2!1szh-TW!2stw!4v1700000000000"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="bg-warm-100 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-800 text-center mb-12">
            常見<span className="text-gold-500">問題</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "最小訂購量是多少？",
                a: "標準庫存品無最小訂購量限制，歡迎小量採購。若為特殊規格訂製品，最小訂購量依產品類別而定，歡迎來電洽詢，我們將依您的需求提供最佳方案。",
              },
              {
                q: "交貨期大約多久？",
                a: "庫存現貨品通常可於下單後 1 至 3 個工作天內出貨。訂製品或大量採購訂單，交期依數量與規格而定，一般約為 7 至 14 個工作天，確切交期將於報價時一併告知。",
              },
              {
                q: "接受哪些付款方式？",
                a: "我們接受銀行匯款及支票付款。首次合作客戶原則上採預付款方式；長期合作客戶可依雙方協議提供月結帳期，詳細付款條件歡迎洽談。",
              },
              {
                q: "可以提供樣品嗎？",
                a: "可以。我們提供標準品樣品供客戶確認規格與品質。部分樣品免費提供，特殊規格樣品可能酌收費用，詳情請與業務人員聯繫。",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-dark-800 mb-3 flex items-start gap-3">
                  <span className="text-gold-500 font-bold flex-shrink-0">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
