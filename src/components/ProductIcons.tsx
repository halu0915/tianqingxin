const iconClass = "w-full h-full";

{/* 單聯接線盒 — 直立長方形 */}
export function SingleBoxIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tall rectangular box */}
      <rect x="35" y="15" width="50" height="90" rx="4" stroke="currentColor" strokeWidth="2.5" />
      {/* Top knockout */}
      <circle cx="60" cy="15" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      {/* Bottom knockout */}
      <circle cx="60" cy="105" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      {/* Side knockouts */}
      <circle cx="35" cy="60" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="85" cy="60" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      {/* Screw holes */}
      <circle cx="47" cy="30" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="73" cy="30" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="47" cy="90" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="73" cy="90" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      {/* Center mounting bracket */}
      <line x1="50" y1="55" x2="70" y2="55" stroke="currentColor" strokeWidth="2" />
      <line x1="50" y1="65" x2="70" y2="65" stroke="currentColor" strokeWidth="2" />
      <circle cx="60" cy="60" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

{/* 八角接線盒 — 八角形 */}
export function OctagonBoxIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Octagon shape */}
      <polygon
        points="45,15 75,15 100,40 100,80 75,105 45,105 20,80 20,40"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      {/* Knockouts on 4 sides */}
      <circle cx="60" cy="15" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="60" cy="105" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="20" cy="60" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="100" cy="60" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      {/* Screw holes */}
      <circle cx="45" cy="40" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="75" cy="40" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="45" cy="80" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="75" cy="80" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      {/* Center mounting bracket */}
      <line x1="50" y1="56" x2="70" y2="56" stroke="currentColor" strokeWidth="2" />
      <line x1="50" y1="64" x2="70" y2="64" stroke="currentColor" strokeWidth="2" />
      <circle cx="60" cy="60" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

{/* 雙連接線盒 — 寬扁正方/橫長方形 */}
export function DoubleBoxIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wide rectangular box */}
      <rect x="10" y="30" width="100" height="60" rx="4" stroke="currentColor" strokeWidth="2.5" />
      {/* Center divider */}
      <line x1="60" y1="30" x2="60" y2="90" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
      {/* Top knockouts */}
      <circle cx="35" cy="30" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="85" cy="30" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      {/* Bottom knockouts */}
      <circle cx="35" cy="90" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="85" cy="90" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      {/* Side knockouts */}
      <circle cx="10" cy="60" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="110" cy="60" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      {/* Left screw holes */}
      <circle cx="22" cy="42" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="22" cy="78" r="2" stroke="currentColor" strokeWidth="1.5" />
      {/* Right screw holes */}
      <circle cx="98" cy="42" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="98" cy="78" r="2" stroke="currentColor" strokeWidth="1.5" />
      {/* Left mounting bracket */}
      <line x1="28" y1="56" x2="48" y2="56" stroke="currentColor" strokeWidth="1.5" />
      <line x1="28" y1="64" x2="48" y2="64" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="38" cy="60" r="2.5" stroke="currentColor" strokeWidth="1.2" />
      {/* Right mounting bracket */}
      <line x1="72" y1="56" x2="92" y2="56" stroke="currentColor" strokeWidth="1.5" />
      <line x1="72" y1="64" x2="92" y2="64" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="82" cy="60" r="2.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

{/* 歐規接線盒 — 圓形 */}
export function EuroBoxIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Round box body */}
      <circle cx="60" cy="60" r="42" stroke="currentColor" strokeWidth="2.5" />
      {/* Knockouts */}
      <circle cx="60" cy="18" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="60" cy="102" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="18" cy="60" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="102" cy="60" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      {/* Screw holes */}
      <circle cx="43" cy="46" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="77" cy="46" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="43" cy="74" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="77" cy="74" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      {/* EU label */}
      <text x="60" y="63" fontSize="12" fontWeight="bold" fill="currentColor" opacity="0.3" textAnchor="middle">EU</text>
    </svg>
  );
}

{/* 接線盒總覽圖示（首頁用）— 組合展示 */}
export function JunctionBoxIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Single box (top-left, tall rectangle) */}
      <rect x="10" y="10" width="22" height="35" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="21" cy="27" r="2" stroke="currentColor" strokeWidth="1" />
      {/* Octagon box (top-right) */}
      <polygon points="62,10 78,10 88,20 88,36 78,46 62,46 52,36 52,20" stroke="currentColor" strokeWidth="1.8" fill="none" />
      <circle cx="70" cy="28" r="2" stroke="currentColor" strokeWidth="1" />
      {/* Double box (bottom-left, wide) */}
      <rect x="10" y="60" width="45" height="25" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <line x1="32" y1="60" x2="32" y2="85" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
      <circle cx="21" cy="72" r="2" stroke="currentColor" strokeWidth="1" />
      <circle cx="43" cy="72" r="2" stroke="currentColor" strokeWidth="1" />
      {/* Euro box (bottom-right, circle) */}
      <circle cx="85" cy="72" r="18" stroke="currentColor" strokeWidth="1.8" />
      <text x="85" y="75" fontSize="8" fontWeight="bold" fill="currentColor" opacity="0.3" textAnchor="middle">EU</text>
    </svg>
  );
}

export function ThreadedRodIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Rod body */}
      <rect x="55" y="10" width="10" height="100" rx="2" stroke="currentColor" strokeWidth="2" />
      {/* Thread lines */}
      {[18, 26, 34, 42, 50, 58, 66, 74, 82, 90, 98].map((y) => (
        <line key={y} x1="52" y1={y} x2="68" y2={y} stroke="currentColor" strokeWidth="1.2" />
      ))}
      {/* Nut top */}
      <rect x="46" y="14" width="28" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      {/* Nut bottom */}
      <rect x="46" y="94" width="28" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function CastIronIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* T-fitting shape */}
      {/* Horizontal pipe */}
      <rect x="10" y="45" width="100" height="22" rx="4" stroke="currentColor" strokeWidth="2.5" />
      {/* Vertical pipe going down */}
      <rect x="49" y="67" width="22" height="40" rx="4" stroke="currentColor" strokeWidth="2.5" />
      {/* Flanges / rims */}
      <line x1="8" y1="43" x2="8" y2="69" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="112" y1="43" x2="112" y2="69" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="47" y1="109" x2="73" y2="109" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* Inner detail lines */}
      <line x1="15" y1="56" x2="45" y2="56" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="75" y1="56" x2="105" y2="56" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="60" y1="72" x2="60" y2="104" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

export function StainlessSteelIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 90-degree elbow fitting */}
      <path
        d="M25 30 L25 65 Q25 95 55 95 L90 95"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M35 30 L35 65 Q35 85 55 85 L90 85"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Top flange */}
      <line x1="20" y1="30" x2="40" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* Right flange */}
      <line x1="90" y1="80" x2="90" y2="100" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* Shine marks for stainless steel look */}
      <line x1="28" y1="40" x2="32" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="28" y1="50" x2="32" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="65" y1="88" x2="65" y2="92" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="75" y1="88" x2="75" y2="92" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      {/* ST label */}
      <text x="55" y="60" fontSize="14" fontWeight="bold" fill="currentColor" opacity="0.3" textAnchor="middle">ST</text>
    </svg>
  );
}

export function MechanicalConnectorIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left pipe */}
      <rect x="10" y="48" width="35" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
      {/* Right pipe */}
      <rect x="75" y="48" width="35" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
      {/* Connector body (hexagonal nut shape) */}
      <path
        d="M45 42 L55 35 L65 35 L75 42 L75 78 L65 85 L55 85 L45 78 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      {/* Grip lines on connector */}
      <line x1="48" y1="50" x2="72" y2="50" stroke="currentColor" strokeWidth="1.2" />
      <line x1="48" y1="56" x2="72" y2="56" stroke="currentColor" strokeWidth="1.2" />
      <line x1="48" y1="64" x2="72" y2="64" stroke="currentColor" strokeWidth="1.2" />
      <line x1="48" y1="70" x2="72" y2="70" stroke="currentColor" strokeWidth="1.2" />
      {/* Center bore */}
      <circle cx="60" cy="60" r="8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
    </svg>
  );
}

export function PipeFittingIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pipe clamp / U-bolt shape */}
      <path
        d="M35 30 L35 60 Q35 90 60 90 Q85 90 85 60 L85 30"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Top plate */}
      <rect x="25" y="22" width="70" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
      {/* Bolt threads on left */}
      <line x1="32" y1="15" x2="38" y2="15" stroke="currentColor" strokeWidth="1.2" />
      <line x1="32" y1="18" x2="38" y2="18" stroke="currentColor" strokeWidth="1.2" />
      <line x1="32" y1="21" x2="38" y2="21" stroke="currentColor" strokeWidth="1.2" />
      {/* Bolt threads on right */}
      <line x1="82" y1="15" x2="88" y2="15" stroke="currentColor" strokeWidth="1.2" />
      <line x1="82" y1="18" x2="88" y2="18" stroke="currentColor" strokeWidth="1.2" />
      <line x1="82" y1="21" x2="88" y2="21" stroke="currentColor" strokeWidth="1.2" />
      {/* Nuts on top */}
      <rect x="30" y="8" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="78" y="8" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
      {/* Pipe inside (dashed) */}
      <path
        d="M45 55 Q45 75 60 75 Q75 75 75 55"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="4 3"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}

export function FlexConduitIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left connector fitting */}
      <rect x="8" y="46" width="20" height="28" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <line x1="18" y1="46" x2="18" y2="74" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      {/* Right connector fitting */}
      <rect x="92" y="46" width="20" height="28" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <line x1="102" y1="46" x2="102" y2="74" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      {/* Flexible corrugated tube - wave pattern */}
      <path
        d="M28 48 Q33 44 38 48 Q43 52 48 48 Q53 44 58 48 Q63 52 68 48 Q73 44 78 48 Q83 52 88 48 L92 48"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M28 72 Q33 76 38 72 Q43 68 48 72 Q53 76 58 72 Q63 68 68 72 Q73 76 78 72 Q83 68 88 72 L92 72"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* Inner corrugation lines */}
      {[35, 45, 55, 65, 75, 85].map((x) => (
        <line key={x} x1={x} y1="52" x2={x} y2="68" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      ))}
      {/* Water droplets (waterproof indicator) */}
      <path d="M50 28 L53 22 L56 28 Q56 32 53 32 Q50 32 50 28Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M62 32 L64 28 L66 32 Q66 35 64 35 Q62 35 62 32Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M40 33 L42 29 L44 33 Q44 36 42 36 Q40 36 40 33Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

export const productIconMap: Record<string, React.FC<{ className?: string }>> = {
  "接線盒": JunctionBoxIcon,
  "牙條": ThreadedRodIcon,
  "鑄鐵另件": CastIronIcon,
  "不銹鋼另件": StainlessSteelIcon,
  "機械接頭": MechanicalConnectorIcon,
  "管配件": PipeFittingIcon,
  "防水金屬軟管": FlexConduitIcon,
};

export function ConduitConnectorIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left: short corrugated pipe stub */}
      <path
        d="M10 50 Q15 46 20 50 Q25 54 30 50"
        stroke="currentColor" strokeWidth="2" fill="none"
      />
      <path
        d="M10 70 Q15 74 20 70 Q25 66 30 70"
        stroke="currentColor" strokeWidth="2" fill="none"
      />
      <line x1="10" y1="50" x2="10" y2="70" stroke="currentColor" strokeWidth="2" />
      {/* Connector body - cylindrical with hex grip */}
      <rect x="30" y="42" width="18" height="36" rx="3" stroke="currentColor" strokeWidth="2.5" />
      {/* Hex nut section */}
      <path
        d="M48 38 L56 32 L64 32 L72 38 L72 82 L64 88 L56 88 L48 82 Z"
        stroke="currentColor" strokeWidth="2.5" fill="none"
      />
      {/* Grip lines */}
      <line x1="51" y1="48" x2="69" y2="48" stroke="currentColor" strokeWidth="1.2" />
      <line x1="51" y1="55" x2="69" y2="55" stroke="currentColor" strokeWidth="1.2" />
      <line x1="51" y1="65" x2="69" y2="65" stroke="currentColor" strokeWidth="1.2" />
      <line x1="51" y1="72" x2="69" y2="72" stroke="currentColor" strokeWidth="1.2" />
      {/* Right: threaded output */}
      <rect x="72" y="46" width="28" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
      <line x1="78" y1="52" x2="96" y2="52" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="78" y1="58" x2="96" y2="58" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="78" y1="64" x2="96" y2="64" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="78" y1="70" x2="96" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      {/* Seal ring */}
      <circle cx="48" cy="60" r="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      {/* Water drop symbol */}
      <path d="M55 18 L58 12 L61 18 Q61 22 58 22 Q55 22 55 18Z" stroke="currentColor" strokeWidth="1.3" fill="none" />
    </svg>
  );
}

export const productItemIconMap: Record<string, React.FC<{ className?: string }>> = {
  "單聯 Box 接線盒": SingleBoxIcon,
  "ST 單聯 Box 接線盒": SingleBoxIcon,
  "八角 BOX 接線盒": OctagonBoxIcon,
  "八角加深 BOX": OctagonBoxIcon,
  "雙連 BOX 接線盒": DoubleBoxIcon,
  "歐規 BOX 接線盒": EuroBoxIcon,
  "金屬軟管接頭": ConduitConnectorIcon,
};
