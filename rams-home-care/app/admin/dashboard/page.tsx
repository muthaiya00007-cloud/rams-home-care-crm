import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

export default function AdminDashboard() {
  const cards = [
    {
      title: "Customers",
      value: "0",
      icon: "👥",
      color: "text-blue-600",
    },
    {
      title: "Staff",
      value: "0",
      icon: "👩‍⚕️",
      color: "text-green-600",
    },
    {
      title: "Income",
      value: "₹0",
      icon: "💰",
      color: "text-emerald-600",
    },
    {
      title: "Expenses",
      value: "₹0",
      icon: "💸",
      color: "text-red-600",
    },
  ];

  return (
    <div className="flex bg-slate-100">
      <Sidebar />

      <main className="ml-64 flex-1 min-h-screen p-8">

        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="text-5xl">
                {card.icon}
              </div>

              <h2 className="mt-5 text-xl font-semibold">
                {card.title}
              </h2>

              <p className={`text-3xl font-bold mt-2 ${card.color}`}>
                {card.value}
              </p>
            </div>
          ))}

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold">
              Quick Actions
            </h2>

            <div className="grid grid-cols-2 gap-4 mt-6">

              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3">
                + Customer
              </button>

              <button className="bg-green-600 hover:bg-green-700 text-white rounded-xl py-3">
                + Staff
              </button>

              <button className="bg-red-600 hover:bg-red-700 text-white rounded-xl py-3">
                + Expense
              </button>

              <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-3">
                Reports
              </button>

            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">
              Today's Summary
            </h2>

            <ul className="space-y-3">

              <li>✅ New Customers : 0</li>

              <li>👩‍⚕️ Staff On Duty : 0</li>

              <li>📅 Renewals Today : 0</li>

              <li>💰 Pending Payments : ₹0</li>

            </ul>

          </div>

        </div>

      </main>
    </div>
  );
}