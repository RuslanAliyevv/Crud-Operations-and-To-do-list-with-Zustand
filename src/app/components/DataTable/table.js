"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DataTable() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  // Privilege
  const [privs, setPrivs] = useState([]);

  useEffect(() => {
    const n = localStorage.getItem("userName");
    const s = localStorage.getItem("userStatus");
    const p = JSON.parse(localStorage.getItem("userPrivileges") || "[]");

    setName(n);
    setStatus(s);
    setPrivs(p);

    (async () => {
      try {
        const res = await axios.get("/api/data");
        setItems(res.data.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const CAN_ADD = privs.includes("ADD");
  const CAN_UPDATE = privs.includes("UPDATE");
  const CAN_DELETE = privs.includes("DELETE");

  async function handleDelete(id) {
    if (!CAN_DELETE) {
      alert("You don't have DELETE permission");
      return;
    }

    try {
      const res = await axios.delete(`/api/delete/${id}?role=${localStorage.getItem("userRole")}`);;
      if (res.data.success) {
        setItems((prev) => prev.filter((it) => it.id !== id));
      }
    } catch (err) {
      alert(err.response?.data?.message || "Delete error");
    }
  }

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Welcome, {name}  
        </h2>

        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
          className="text-blue-600 underline"
        >
          Logout
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Job</th>
              <th className="p-3">Date</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {items.map((it) => (
              <tr key={it.id} className="border-t">
                <td className="p-3 text-center">{it.id}</td>
                <td className="p-3 text-center">{it.title}</td>
                <td className="p-3 text-center">{it.description}</td>
                <td className="p-3 text-center">{it.createdAt}</td>

                <td className="p-3 flex gap-2 items-center">

                  {CAN_ADD && (
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                      Add
                    </button>
                  )}

                  {CAN_UPDATE && (
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                      Update
                    </button>
                  )}

                  {CAN_DELETE && (
                    <button
                      onClick={() => handleDelete(it.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  )}

                  {status === "active" ? (
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                      Active
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">
                      Disabled
                    </span>
                  )}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}