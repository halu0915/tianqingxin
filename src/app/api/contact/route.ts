import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, subject, message } = body as {
      name?: string;
      phone?: string;
      email?: string;
      subject?: string;
      message?: string;
    };

    // 驗證必填欄位
    if (!name || !email || !subject || !message) {
      return Response.json(
        { success: false, message: "請填寫所有必填欄位（姓名、電子郵件、主旨、訊息內容）" },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // 開發模式 fallback
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
      from: "天擎鑫網站 <noreply@tianqingxin.com>",
      to: "info@tianqingxin.com",
      subject: `[網站聯絡] ${subject}`,
      replyTo: email,
      html: `
        <h2>網站聯絡表單</h2>
        <p><strong>姓名：</strong>${name}</p>
        <p><strong>電話：</strong>${phone || "未填寫"}</p>
        <p><strong>電子郵件：</strong>${email}</p>
        <p><strong>主旨：</strong>${subject}</p>
        <hr />
        <p><strong>訊息內容：</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
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
