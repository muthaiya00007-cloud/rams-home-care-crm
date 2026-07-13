import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-blue-900/80 backdrop-blur-md text-white p-5 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
  <Image
    src="/logo/logo.png"
    alt="Ram's Home Care"
    width={50}
    height={50}
  />
  <h1 className="text-2xl font-bold">Ram's Home Care</h1>
</div>

        <div className="flex gap-6">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}