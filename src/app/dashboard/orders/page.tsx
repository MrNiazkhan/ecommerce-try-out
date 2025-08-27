"use client";

import React, { useState } from "react";
import { FaEye, FaEdit, FaTimes } from "react-icons/fa";

type Order = {
  id: number;
  customer: string;
  items: number;
  total: string;
  status: "Completed" | "Pending" | "Canceled";
};

const OrdersPage: React.FC = () => {
  const [orders] = useState<Order[]>([
    { id: 101, customer: "Alice", items: 3, total: "$250", status: "Completed" },
    { id: 102, customer: "Bob", items: 1, total: "$120", status: "Pending" },
    { id: 103, customer: "Charlie", items: 5, total: "$540", status: "Completed" },
    { id: 104, customer: "David", items: 2, total: "$90", status: "Canceled" },
    { id: 105, customer: "Eva", items: 4, total: "$310", status: "Pending" },
  ]);

  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<"All" | "Completed" | "Pending" | "Canceled">("All");

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.id.toString().includes(search);
    const matchesFilter = filter === "All" || order.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-6xl bg-white shadow p-4 rounded flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Orders</h1>
        <nav className="text-gray-500 text-xs sm:text-sm">Dashboard &gt; Orders</nav>
      </header>

      {/* Search & Filter */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-3">
        <input
          type="text"
          placeholder="Search by Customer or Order ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/2 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as "All" | "Completed" | "Pending" | "Canceled")}
          className="border p-2 rounded w-full sm:w-1/4 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          <option value="All">All Status</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Canceled">Canceled</option>
        </select>
      </div>

      {/* Desktop Table */}
      <section className="hidden sm:block w-full max-w-6xl mt-4 bg-white rounded-lg shadow p-4 overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left text-gray-600">ID</th>
              <th className="p-3 text-left text-gray-600">Customer</th>
              <th className="p-3 text-left text-gray-600">Items</th>
              <th className="p-3 text-left text-gray-600">Total</th>
              <th className="p-3 text-left text-gray-600">Status</th>
              <th className="p-3 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-4 text-center text-gray-500">
                  No orders found.
                </td>
              </tr>
            ) : (
              filteredOrders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-3">{order.id}</td>
                  <td className="p-3">{order.customer}</td>
                  <td className="p-3">{order.items}</td>
                  <td className="p-3">{order.total}</td>
                  <td className={`p-3 font-semibold ${order.status === "Completed" ? "text-green-600" : order.status === "Pending" ? "text-yellow-600" : "text-red-600"}`}>
                    {order.status}
                  </td>
                  <td className="p-3 flex gap-2">
                    <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                      <FaEye />
                    </button>
                    <button className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
                      <FaEdit />
                    </button>
                    <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                      <FaTimes />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>

      {/* Mobile Cards */}
      <section className="sm:hidden w-full max-w-md mt-4 flex flex-col gap-3">
        {filteredOrders.length === 0 ? (
          <div className="bg-white p-4 rounded shadow text-center text-gray-500">
            No orders found.
          </div>
        ) : (
          filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-lg shadow p-4 flex flex-col gap-2"
            >
              <div className="flex flex-col gap-1 text-sm">
                <span className="font-semibold">ID: {order.id}</span>
                <span>Customer: {order.customer}</span>
                <span>Items: {order.items}</span>
                <span>Total: {order.total}</span>
                <span className={`font-semibold ${order.status === "Completed" ? "text-green-600" : order.status === "Pending" ? "text-yellow-600" : "text-red-600"}`}>
                  {order.status}
                </span>
              </div>
              <div className="flex gap-1 justify-center">
                <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-xs">
                  <FaEye />
                </button>
                <button className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition text-xs">
                  <FaEdit />
                </button>
                <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition text-xs">
                  <FaTimes />
                </button>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default OrdersPage;
