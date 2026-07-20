"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Supabase login will be connected in next step.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-2">
          Raam's Home Nursing ServicesA
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Admin Login
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-xl p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl p-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="w-full bg-blue-600 text-white rounded-xl p-3 font-semibold hover:bg-blue-700"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}