import { Resend } from "resend";

// --- HTML Escape ---
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// --- Rate Limiting ---
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// --- CSRF: Allowed Origins ---
function isOriginAllowed(origin: string | null): boolean {
  if (!origin) return false;

  const allowedOrigins: string[] = [
    "http://localhost:3000",
    "https://localhost:3000",
    "https://tianqingxin.vercel.app",
  ];

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (siteUrl) {
    allowedOrigins.push(siteUrl);
  }

  return allowedOrigins.some(
    (allowed) => origin === allowed || origin.startsWith(allowed),
  );
}

// --- Input Validation ---
interface ValidationResult {
  valid: boolean;
  error?: string;
}

function validateInput(body: Record<string, unknown>): ValidationResult {
  const { name, phone, email, subject, message } = body as {
    name?: string;
    phone?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  if (!name || !email || !subject || !message) {
    return {
      valid: false,
      error: "請填寫所有必填欄位（姓名、電子郵件、主旨、訊息內容）",
    };
  }

  if (typeof name !== "string" || name.length > 100) {
    return { valid: false, error: "姓名長度不得超過 100 個字元" };
  }

  if (phone !== undefined && phone !== null) {
    if (typeof phone !== "string" || phone.length > 20) {
      return { valid: false, error: "電話長度不得超過 20 個字元" };
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (typeof email !== "string" || !emailRegex.test(email)) {
    return { valid: false, error: "請輸入有效的電子郵件地址" };
  }

  if (typeof subject !== "string" || subject.length > 200) {
    return { valid: false, error: "主旨長度不得超過 200 個字元" };
  }

  if (typeof message !== "string" || message.length > 5000) {
    return { valid: false, error: "訊息內容長度不得超過 5000 個字元" };
  }

  return { valid: true };
}

export async function POST(request: Request) {
  try {
    // CSRF check
    const origin = request.headers.get("origin");
    if (!isOriginAllowed(origin)) {
      return Response.json(
        { success: false, message: "禁止存取：來源不被允許" },
        { status: 403 },
      );
    }

    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return Response.json(
        { success: false, message: "請求過於頻繁，請稍後再試" },
        { status: 429 },
      );
    }

    const body = await request.json();

    // Input validation
    const validation = validateInput(body);
    if (!validation.valid) {
      return Response.json(
        { success: false, message: validation.error },
        { status: 400 },
      );
    }

    const { name, phone, email, subject, message } = body as {
      name: string;
      phone?: string;
      email: string;
      subject: string;
      message: string;
    };

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Dev mode fallback
      console.log("=== 聯絡表單（開發模式，未設定 RESEND_API_KEY）===");
      console.log("姓名:", name);
      console.log("電話:", phone ?? "(未填)");
      console.log("Email:", email);
      console.log("主旨:", subject);
      console.log("訊息:", message);
      console.log("=== END ===");

      return Response.json({
        success: true,
        message: "訊息已成功送出，我們會盡快與您聯繫！",
      });
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "天擎鑫網站 <onboarding@resend.dev>",
      to: "TianQingHsin@gmail.com",
      subject: `[網站聯絡] ${escapeHtml(subject)}`,
      replyTo: email,
      html: `
        <h2>網站聯絡表單</h2>
        <p><strong>姓名：</strong>${escapeHtml(name)}</p>
        <p><strong>電話：</strong>${escapeHtml(phone || "未填寫")}</p>
        <p><strong>電子郵件：</strong>${escapeHtml(email)}</p>
        <p><strong>主旨：</strong>${escapeHtml(subject)}</p>
        <hr />
        <p><strong>訊息內容：</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return Response.json({
      success: true,
      message: "訊息已成功送出，我們會盡快與您聯繫！",
    });
  } catch (error) {
    console.error("寄信失敗:", error);
    return Response.json(
      { success: false, message: "送出失敗，請稍後再試或直接來電聯繫。" },
      { status: 500 },
    );
  }
}
