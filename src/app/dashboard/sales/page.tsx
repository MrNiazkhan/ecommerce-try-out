"use client";

import React, { useState } from "react";
import { FaShoppingCart, FaUsers, FaDollarSign } from "react-icons/fa";

const SalesPage: React.FC = () => {
  const [orders] = useState([
    { id: 1, customer: "Alice", total: "$250", status: "Completed" },
    { id: 2, customer: "Bob", total: "$120", status: "Pending" },
    { id: 3, customer: "Charlie", total: "$540", status: "Completed" },
    { id: 4, customer: "David", total: "$90", status: "Canceled" },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="bg-white shadow p-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 sm:gap-0">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Sales</h1>
        <nav className="text-gray-500 text-xs sm:text-sm">Dashboard &gt; Sales</nav>
      </header>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto p-4 space-y-6">
        {/* Summary Cards */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="bg-white rounded-lg shadow p-4 flex items-center justify-center gap-3">
            <FaDollarSign className="text-green-500 text-2xl sm:text-3xl" />
            <div className="text-center">
              <p className="text-gray-500 text-xs sm:text-sm">Revenue</p>
              <p className="text-lg sm:text-xl font-semibold">$12,450</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex items-center justify-center gap-3">
            <FaShoppingCart className="text-blue-500 text-2xl sm:text-3xl" />
            <div className="text-center">
              <p className="text-gray-500 text-xs sm:text-sm">Orders</p>
              <p className="text-lg sm:text-xl font-semibold">320</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex items-center justify-center gap-3">
            <FaUsers className="text-purple-500 text-2xl sm:text-3xl" />
            <div className="text-center">
              <p className="text-gray-500 text-xs sm:text-sm">Customers</p>
              <p className="text-lg sm:text-xl font-semibold">150</p>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <section className="bg-white rounded-lg shadow p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 text-center sm:text-left">Sales Overview</h2>
          <div className="h-48 sm:h-64 md:h-80 bg-gray-100 flex items-center justify-center rounded-lg">
            <p className="text-gray-400 text-sm sm:text-base">Chart will go here</p>
          </div>
        </section>

        {/* Recent Orders */}
        {/* Desktop Table */}
        <section className="hidden sm:block bg-white rounded-lg shadow p-4 sm:p-6 overflow-x-auto">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 text-left">Recent Orders</h2>
          <table className="min-w-full border-collapse table-auto text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left text-gray-600">Order ID</th>
                <th className="p-2 text-left text-gray-600">Customer</th>
                <th className="p-2 text-left text-gray-600">Total</th>
                <th className="p-2 text-left text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-2">{order.id}</td>
                  <td className="p-2">{order.customer}</td>
                  <td className="p-2">{order.total}</td>
                  <td className={`p-2 font-semibold text-sm ${order.status === "Completed" ? "text-green-600" : order.status === "Pending" ? "text-yellow-600" : "text-red-600"}`}>
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Mobile Cards */}
        <section className="sm:hidden flex flex-col gap-3">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow p-4 flex flex-col gap-2">
              <div className="flex flex-col gap-1 text-sm">
                <span className="font-semibold">Order ID: {order.id}</span>
                <span>Customer: {order.customer}</span>
                <span>Total: {order.total}</span>
                <span className={`font-semibold ${order.status === "Completed" ? "text-green-600" : order.status === "Pending" ? "text-yellow-600" : "text-red-600"}`}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default SalesPage;
