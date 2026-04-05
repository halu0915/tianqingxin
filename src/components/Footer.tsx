import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold-500 flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="天擎鑫有限公司 Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gold-400">天擎鑫有限公司</h3>
                <p className="text-xs text-gold-600/60 tracking-widest">TQH Co., Ltd.</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              專注於接線盒及管材配件供應，提供客製化材料管控服務，降低您的工程成本。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3">快速連結</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors">
                  關於我們
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-gold-400 transition-colors">
                  產品介紹
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-400 transition-colors">
                  服務項目
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 transition-colors">
                  聯絡我們
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-3">聯絡資訊</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="tel:0916027603" className="hover:text-gold-400 transition-colors">電話：0916-027-603</a></li>
              <li><a href="mailto:TianQingHsin@gmail.com" className="hover:text-gold-400 transition-colors">信箱：TianQingHsin@gmail.com</a></li>
              <li><a href="https://www.google.com/maps/search/?api=1&query=臺北市中山區松江路204巷36號" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">地址：臺北市中山區松江路204巷36號</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} 天擎鑫有限公司. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
