"use client";

import React, { useState } from "react";
import { FaShoppingCart, FaUsers, FaDollarSign } from "react-icons/fa";

const SalesPage: React.FC = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: "Alice", total: "$250", status: "Completed" },
    { id: 2, customer: "Bob", total: "$120", status: "Pending" },
    { id: 3, customer: "Charlie", total: "$540", status: "Completed" },
    { id: 4, customer: "David", total: "$90", status: "Canceled" },
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Sales</h1>
        <nav className="text-gray-500 text-sm">
          Dashboard &gt; Sales
        </nav>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
            <FaDollarSign className="text-green-500 text-3xl" />
            <div>
              <p className="text-gray-500">Revenue</p>
              <p className="text-xl font-semibold">$12,450</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
            <FaShoppingCart className="text-blue-500 text-3xl" />
            <div>
              <p className="text-gray-500">Orders</p>
              <p className="text-xl font-semibold">320</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
            <FaUsers className="text-purple-500 text-3xl" />
            <div>
              <p className="text-gray-500">Customers</p>
              <p className="text-xl font-semibold">150</p>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales Overview</h2>
          <div className="h-64 bg-gray-100 flex items-center justify-center rounded-lg">
            {/* Placeholder for chart */}
            <p className="text-gray-400">Chart will go here</p>
          </div>
        </section>

        {/* Recent Orders Table */}
        <section className="bg-white rounded-lg shadow p-6 overflow-x-auto">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Orders</h2>
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left text-gray-600">Order ID</th>
                <th className="p-3 text-left text-gray-600">Customer</th>
                <th className="p-3 text-left text-gray-600">Total</th>
                <th className="p-3 text-left text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-3">{order.id}</td>
                  <td className="p-3">{order.customer}</td>
                  <td className="p-3">{order.total}</td>
                  <td className={`p-3 font-semibold ${
                    order.status === "Completed" ? "text-green-600" :
                    order.status === "Pending" ? "text-yellow-600" :
                    "text-red-600"
                  }`}>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default SalesPage;
