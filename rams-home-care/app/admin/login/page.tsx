"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (
      username === "admin" &&
      password === "admin123"
    ) {
      localStorage.setItem("adminLoggedIn", "true");
      router.push("/admin/dashboard");
    } else {
      alert("Invalid Username or Password");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 p-6">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        <h1 className="mb-2 text-center text-3xl font-bold text-blue-900">
          Elite Home Care & Nursing
        </h1>

        <p className="mb-8 text-center text-gray-500">
          Admin Login
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          <div className="relative">
            <User className="absolute left-4 top-4 h-5 w-5 text-gray-500" />

            <input
              type="text"
              placeholder="Username"
              className="w-full rounded-xl border pl-12 pr-4 py-3"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-4 h-5 w-5 text-gray-500" />

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border pl-12 pr-4 py-3"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-700 py-3 font-bold text-white transition hover:bg-blue-800"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}