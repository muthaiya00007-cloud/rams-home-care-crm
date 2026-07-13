"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menus = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: "🏠",
    },
    {
      name: "Customers",
      href: "/admin/customers",
      icon: "👥",
    },
    {
      name: "Staff",
      href: "/admin/staff",
      icon: "👩‍⚕️",
    },
    {
      name: "Income",
      href: "/admin/income",
      icon: "💰",
    },
    {
      name: "Expenses",
      href: "/admin/expenses",
      icon: "💸",
    },
    {
      name: "Renewals",
      href: "/admin/renewals",
      icon: "📅",
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: "⚙️",
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white shadow-xl">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">
          Ram's Home Care
        </h1>

        <p className="text-slate-400 text-sm mt-2">
          CRM Admin Panel
        </p>
      </div>

      <nav className="p-4 space-y-2">

        {menus.map((menu) => (
          <Link
            key={menu.href}
            href={menu.href}
            className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
              pathname === menu.href
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-800 text-slate-300"
            }`}
          >
            <span>{menu.icon}</span>

            <span>{menu.name}</span>
          </Link>
        ))}

      </nav>
    </aside>
  );
}