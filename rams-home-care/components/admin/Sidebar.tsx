"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  UserCog,
  IndianRupee,
  Wallet,
  Bell,
  FileBarChart,
  Settings,
  LogOut,
} from "lucide-react";

const menus = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Customers",
    href: "/admin/customers",
    icon: Users,
  },
  {
    name: "Staff",
    href: "/admin/staff",
    icon: UserCog,
  },
  {
    name: "Income",
    href: "/admin/income",
    icon: IndianRupee,
  },
  {
    name: "Expenses",
    href: "/admin/expenses",
    icon: Wallet,
  },
  {
    name: "Renewals",
    href: "/admin/renewals",
    icon: Bell,
  },
  {
    name: "Reports",
    href: "/admin/reports",
    icon: FileBarChart,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  function logout() {
    localStorage.removeItem("adminLoggedIn");
    router.push("/admin/login");
  }

  return (
    <aside className="flex h-screen w-72 flex-col bg-blue-950 text-white">

      <div className="border-b border-blue-800 p-6">

        <h2 className="text-2xl font-bold">
          Elite Home Care & Nursing
        </h2>

        <p className="mt-1 text-sm text-blue-200">
          Admin Panel
        </p>

      </div>

      <nav className="flex-1 space-y-2 p-4">

        {menus.map((menu) => {
          const Icon = menu.icon;

          const active = pathname === menu.href;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-blue-700"
                  : "hover:bg-blue-900"
              }`}
            >
              <Icon size={20} />

              {menu.name}
            </Link>
          );
        })}

      </nav>

      <div className="border-t border-blue-800 p-4">

        <button
          onClick={logout}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 py-3 font-semibold transition hover:bg-red-700"
        >
          <LogOut size={20} />

          Logout
        </button>

      </div>

    </aside>
  );
}