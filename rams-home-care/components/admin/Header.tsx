export default function Header() {
  return (
    <header className="bg-white rounded-2xl shadow-lg p-5 flex items-center justify-between mb-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h2>
        <p className="text-gray-500">
          Welcome to Raam's Home Nursing ServicesA CRM
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-slate-100 px-4 py-2 rounded-lg">
          🔔
        </button>

        <div className="flex items-center gap-3 bg-slate-100 px-4 py-2 rounded-xl">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            A
          </div>

          <div>
            <p className="font-semibold">Admin</p>
            <p className="text-xs text-gray-500">
              Raam's Home Nursing ServicesA
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}