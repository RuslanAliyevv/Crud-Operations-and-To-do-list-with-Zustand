"use client"
import Image from "next/image";
import "./globals.css";
import { useState, useEffect } from "react";
import Login from "../app/admin-user-dashboard/page";
import DataTable from "../app/components/DataTable/table";
// import Login from "./auth/login/page";

export default function Home() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (role) setLogged(true);
  }, []);

  // function handleLogout() {
  //   localStorage.removeItem("userRole");
  //   localStorage.removeItem("userName");
  //   setLogged(false);
  // }

  return (
    <>
      {/* <Login /> */}
        <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {!logged ? (
        <Login onLogin={() => setLogged(true)} />
      ) : (
        <div className="max-w-3xl w-full">
          <DataTable/>
        </div>
      )}
    </main>
    </>
  );
}
