"use client";

import { Bell, CalendarDays, Search, UserCircle2 } from "lucide-react";

export default function Header() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8 shadow-sm">

      <div>
        <h1 className="text-3xl font-bold text-blue-900">
          Dashboard
        </h1>

        <p className="mt-1 text-gray-500">
          {today}
        </p>
      </div>

      <div className="flex items-center gap-6">

        <div className="relative">

          <Search
            className="absolute left-4 top-3.5 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-72 rounded-xl border py-3 pl-12 pr-4 outline-none focus:border-blue-600"
          />

        </div>

        <button className="relative rounded-full bg-gray-100 p-3 transition hover:bg-gray-200">

          <Bell size={22} />

          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-600"></span>

        </button>

        <div className="flex items-center gap-3">

          <UserCircle2
            size={42}
            className="text-blue-700"
          />

          <div>

            <h3 className="font-bold">
              Administrator
            </h3>

            <p className="text-sm text-gray-500">
              Elite Home Care & Nursing
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}