"use client";

export default function FloatingButtons() {
  return (
    <>
      <a
        href="https://wa.me/919994475537"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 rounded-full bg-green-500 px-5 py-4 text-white shadow-lg transition hover:bg-green-600 z-50"
        aria-label="Chat on WhatsApp"
      >
        WhatsApp
      </a>

      <a
        href="tel:+919994475537"
        className="fixed bottom-24 right-6 rounded-full bg-blue-600 px-6 py-4 text-white shadow-lg transition hover:bg-blue-700 z-50"
        aria-label="Call 99944 75537"
      >
        Call
      </a>
    </>
  );
}
