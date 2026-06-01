import type { Metadata } from "next";
import Script from "next/script";
import { Noto_Sans_TC } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LineButton from "@/components/LineButton";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://tianqingxin.com";

export const metadata: Metadata = {
  title: {
    default: "天擎鑫有限公司 | 專業管材配件供應商",
    template: "%s | 天擎鑫有限公司",
  },
  description:
    "天擎鑫有限公司位於台北中山區，為專業接線盒供應商與管材配件批發商，提供牙條、鑄鐵另件、不銹鋼另件、機械接頭、管配件及防水金屬軟管，台北接線盒供應商首選，量大價優。",
  keywords: [
    "接線盒",
    "牙條",
    "鑄鐵另件",
    "不銹鋼另件",
    "機械接頭",
    "管配件",
    "防水金屬軟管",
    "水電材料",
    "配管工程",
    "電氣配件",
    "管材配件",
    "天擎鑫",
    "台北接線盒供應商",
    "中山區管材配件",
    "台北水電材料批發",
  ],
  openGraph: {
    siteName: "天擎鑫有限公司",
    locale: "zh_TW",
    type: "website",
    url: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "接線盒有哪些種類與材質？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "天擎鑫供應單聯、八角、雙連、歐規等多種接線盒，材質包含鍍鋅鋼板、熱浸鍍鋅、白鐵（不鏽鋼）及烤漆，適用各類建築水電配管工程。",
      },
    },
    {
      "@type": "Question",
      name: "牙條有哪些規格可選？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "提供鍍鋅鋼及不鏽鋼材質牙條，多種規格與長度齊全，長期穩定大量供應，量大價優。",
      },
    },
    {
      "@type": "Question",
      name: "防水金屬軟管適用於哪些場所？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "防水金屬軟管分為鍍鋅及不鏽鋼材質，外覆PVC防水防塵，適用於建築機電、化工廠房、食品工廠等需要防水防塵的配管場所。",
      },
    },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "天擎鑫有限公司",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "專業管材配件供應商，提供接線盒、牙條、鑄鐵另件、不銹鋼另件、機械接頭、管配件及防水金屬軟管。",
  address: {
    "@type": "PostalAddress",
    streetAddress: "松江路204巷36號",
    addressLocality: "中山區",
    addressRegion: "臺北市",
    postalCode: "104",
    addressCountry: "TW",
  },
  telephone: "0916-027-603",
  email: "TianQingHsin@gmail.com",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "0916-027-603",
    contactType: "customer service",
    availableLanguage: "Chinese",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${notoSansTC.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <LineButton />
      </body>
    </html>
  );
}
