"use client";

import React, { useState } from "react";
import { FaEye, FaEdit, FaTimes } from "react-icons/fa";

// Define proper type for order
type Order = {
  id: number;
  customer: string;
  items: number;
  total: string;
  status: "Completed" | "Pending" | "Canceled";
};

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([
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
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Orders</h1>
        <nav className="text-gray-500 text-sm">Dashboard &gt; Orders</nav>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <input
            type="text"
            placeholder="Search by Customer or Order ID"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded w-full md:w-1/2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as "All" | "Completed" | "Pending" | "Canceled")}
            className="border p-2 rounded w-full md:w-1/4 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="All">All Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Canceled">Canceled</option>
          </select>
        </div>

        {/* Orders Table */}
        <section className="bg-white rounded-lg shadow p-6 overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left text-gray-600">Order ID</th>
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
                    <td
                      className={`p-3 font-semibold ${
                        order.status === "Completed"
                          ? "text-green-600"
                          : order.status === "Pending"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
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
      </div>
    </div>
  );
};

export default OrdersPage;
