import type { Metadata } from "next";
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

const SITE_URL = "https://www.tianqingxin.com.tw";

export const metadata: Metadata = {
  title: {
    default: "天擎鑫有限公司 | 專業管材配件供應商",
    template: "%s | 天擎鑫有限公司",
  },
  description:
    "天擎鑫有限公司位於臺北，專業供應接線盒、牙條、鑄鐵另件、不銹鋼另件、機械接頭、管配件及防水金屬軟管，提供客製化材料管控服務，量大價優。",
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
  email: "info@tianqingxin.com",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <LineButton />
      </body>
    </html>
  );
}
