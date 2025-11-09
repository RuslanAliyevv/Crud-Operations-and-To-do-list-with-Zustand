"use client";
import React, { useState } from "react";
import axios from "axios";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    try {
      const res = await axios.post("/api/loginroles", { email, password });
      if (res.data?.success) {
        const { role, name } = res.data.user;
        localStorage.setItem("userRole", role);
        localStorage.setItem("userName", name);
        localStorage.setItem("userStatus", status);
        onLogin();
      } else {
        setErr("Email or password wrong");
      }
    } catch {
      setErr("Xəta baş verdi");
    }
  }

  return (
    <div className="flex items-center justify-center  bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-[400px] space-y-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-600">
          Admin Portal Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@portal.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="12345"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md"
          >
        Enter
          </button>

          {err && (
            <p className="text-red-600 text-sm text-center font-medium">
              {err}
            </p>
          )}

          <div className="text-sm text-gray-600 mt-6 bg-gray-50 p-3 rounded-lg border border-gray-200">
            <p className="font-semibold">🔑 Testing:</p>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>admin@portal.com / 12345</li>
              <li>user@portal.com / 54321</li>
            </ul>
          </div>

          <button
            type="button"
            onClick={() => {
              setEmail("admin@portal.com");
              setPassword("12345");
            }}
            className="block w-full text-sm text-center text-blue-600 hover:text-blue-700 underline transition"
          >
            Copy the Admin
          </button>
          
          <button
            type="button"
            onClick={() => {
              setEmail("user@portal.com");
              setPassword("54321");
            }}
            className="block w-full text-sm text-center text-blue-600 hover:text-blue-700 underline transition"
          >
           Copy the User
          </button>
        </form>

        <p className="text-xs text-center text-gray-500 mt-4">
          © 2025 Admin Portal 
        </p>
      </div>
    </div>
  );
}
