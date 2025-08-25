"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { FaChartLine, FaShoppingCart, FaUsers } from "react-icons/fa";

const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!user) window.location.href = "/auth/login";
  }, [user]);

  if (!user || !mounted) return null;

  return (
    <div className="space-y-6 p-6">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow rounded flex items-center gap-4">
          <FaChartLine className="text-3xl text-blue-600" />
          <div>
            <p className="text-gray-500">Sales</p>
            <p className="text-2xl font-bold">1,245</p>
          </div>
        </div>

        <div className="p-6 bg-white shadow rounded flex items-center gap-4">
          <FaShoppingCart className="text-3xl text-green-600" />
          <div>
            <p className="text-gray-500">Orders</p>
            <p className="text-2xl font-bold">532</p>
          </div>
        </div>

        <div className="p-6 bg-white shadow rounded flex items-center gap-4">
          <FaUsers className="text-3xl text-purple-600" />
          <div>
            <p className="text-gray-500">Users</p>
            <p className="text-2xl font-bold">3,214</p>
          </div>
        </div>
      </div>

      <section className="p-6 bg-white shadow rounded">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <p className="text-gray-500">Charts or tables can go here.</p>
      </section>
    </div>
  );
};

export default DashboardPage;
