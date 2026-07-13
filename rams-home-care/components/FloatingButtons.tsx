export default function FloatingButtons() {
  return (
    <>
      <a
        href="https://wa.me/919000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-lg z-50"
      >
        WhatsApp
      </a>

      <a
        href="tel:+919000000000"
        className="fixed bottom-24 right-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full shadow-lg z-50"
      >
        Call
      </a>
    </>
  );
}