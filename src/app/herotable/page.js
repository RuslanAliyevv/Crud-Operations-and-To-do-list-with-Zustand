"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/react";
import axios from "axios";

const HeroTable = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    { key: "title", label: "NAME" },
    { key: "description", label: "ROLE" },
    { key: "status", label: "STATUS" },
  ];

  useEffect(() => {
    // Backend-dən datanı çəkirik
    axios
      .get("/api/data") // Məsələn: http://localhost:5000/api/users
      .then((res) => {
        setRows(res.data.data);
      })
      .catch((err) => console.error("Error loading users:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Table aria-label="Users table" isStriped isCompact>
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.key}>{column.label}</TableColumn>
        )}
      </TableHeader>

      <TableBody
        items={rows}
        emptyContent={loading ? "Loading..." : "No users found"}
      >
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => {
              const value = getKeyValue(item, columnKey);

              // Status sütununa xüsusi görünüş veririk
              if (columnKey === "status") {
                return (
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-medium ${
                        value === "active"
                          ? "bg-green-100 text-green-700"
                          : value === "disabled"
                          ? "bg-red-100 text-red-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {value}
                    </span>
                  </TableCell>
                );
              }

              return <TableCell>{value}</TableCell>;
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default HeroTable;
