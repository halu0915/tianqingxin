"use client";

import { useState, type FormEvent } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [responseMessage, setResponseMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await res.json()) as { success: boolean; message: string };

      if (data.success) {
        setStatus("success");
        setResponseMessage(data.message);
        setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setResponseMessage(data.message);
      }
    } catch {
      setStatus("error");
      setResponseMessage("送出失敗，請稍後再試或直接來電聯繫。");
    }
  }

  const inputClass =
    "w-full px-4 py-3 border border-warm-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-warm-50";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            姓名 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="您的姓名"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            電話
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="您的電話"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          電子郵件 <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="subject" className={labelClass}>
          主旨 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className={inputClass}
          placeholder="諮詢主旨"
        />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>
          訊息內容 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
          placeholder="請描述您的需求..."
        />
      </div>

      {status === "success" && (
        <div className="bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-lg">
          {responseMessage}
        </div>
      )}

      {status === "error" && (
        <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
          {responseMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3.5 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "送出中..." : "送出訊息"}
      </button>
    </form>
  );
}
