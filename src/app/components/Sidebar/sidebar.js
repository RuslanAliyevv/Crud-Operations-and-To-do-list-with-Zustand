"use client";
import { useState } from "react";
import { Home, Users, Settings, LogOut, BarChart3,ShoppingBag,FilterIcon } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <Home size={18} />, path: "/homepage", key: "dashboard" },
    { name: "Login", icon: <Users size={18} />, path: "/", key: "users" },
    { name: "Filter", icon: <FilterIcon size={18} />, path: "/filterpage", key: "analytics" },
    { name: "Products", icon: <ShoppingBag size={18} />, path: "/dashboard", key: "settings" },
  ];

  return (
 <div className="fixed top-0 left-0 h-screen w-75 bg-transparent backdrop-blur-lg text-padding-box flex flex-col shadow-lg z-50">


      {/* Header */}
      <div className="p-4 text-xl font-bold tracking-wide border-b border-gray-700">
        Admin Panel
      </div>

      {/* Menu */}
      <nav className="flex-1 p-2 mt-4 overflow-y-auto scrollbar-none">
        {menuItems.map((item) => (
          <Link
            key={item.key}
            href={item.path}
            onClick={() => setActive(item.key)}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-pointer transition-all 
              ${
                active === item.key
                  ? "bg-gray-800 text-white"
                  : "text-gray-700 hover:bg-gray-800 hover:text-white"
              }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-700 p-4">
        <button className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}