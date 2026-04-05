"use client";

export default function LineButton() {
  return (
    <a
      href="https://line.me/R/ti/p/@tianqingxin"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="加入 LINE 好友"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#06C755] shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path d="M12 2C6.48 2 2 5.64 2 10.11c0 4.02 3.56 7.39 8.37 8.03.33.07.77.22.88.5.1.26.07.66.03.92l-.14.87c-.04.26-.2 1.02.89.56.73-.31 3.94-2.32 5.38-3.97C19.39 14.83 22 12.68 22 10.11 22 5.64 17.52 2 12 2zm-3.07 10.54H7.12a.47.47 0 0 1-.47-.47V8.25c0-.26.21-.47.47-.47s.47.21.47.47v3.35h1.34c.26 0 .47.21.47.47s-.21.47-.47.47zm1.59-.47a.47.47 0 0 1-.94 0V8.25a.47.47 0 0 1 .94 0v3.82zm3.3 0a.47.47 0 0 1-.33.45.47.47 0 0 1-.52-.17l-1.72-2.34v2.06a.47.47 0 0 1-.94 0V8.25a.47.47 0 0 1 .33-.45.47.47 0 0 1 .52.17l1.72 2.34V8.25a.47.47 0 0 1 .94 0v3.82zm2.78-2.88c.26 0 .47.21.47.47s-.21.47-.47.47h-1.34v.94h1.34c.26 0 .47.21.47.47s-.21.47-.47.47h-1.81a.47.47 0 0 1-.47-.47V8.25c0-.26.21-.47.47-.47h1.81c.26 0 .47.21.47.47s-.21.47-.47.47h-1.34v.94h1.34z" />
      </svg>
    </a>
  );
}
