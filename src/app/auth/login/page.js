"use client";
import { useState } from "react";
import { login } from "../../lib/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter();

 const handleLogin = async () => {
  if (email === "admin@portal.com" && pass === "12345") {
    // cookie add
    document.cookie = `adminhub-user=true; path=/; max-age=${60 * 60 * 24}`;
    // localStorage
    localStorage.setItem("adminhub-user", JSON.stringify({ name: "Admin" }));

    
    console.log("Cookie yazildi:", document.cookie);
    console.log("LocalStorage yazildi:", localStorage.getItem("adminhub-user"));

    router.push("/dashboard");
  } else {
    alert("Invalid credentials");
  }
};

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[380px] space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Admin Portal Login
        </h2>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">Email</label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="admin@portal.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="12345"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
        >
          Login
        </button>

        <p className="text-xs text-center text-gray-500">© 2025 Admin Portal</p>
      </div>
    </div>
  );
}
