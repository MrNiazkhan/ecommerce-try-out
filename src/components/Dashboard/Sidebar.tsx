"use client";

import React from "react";
import Link from "next/link";
import { FaHome, FaUser, FaCog, FaChartLine, FaShoppingCart, FaUsers } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white shadow-lg flex flex-col min-h-screen">
      
      <div className="h-20 flex items-center justify-center text-2xl font-bold border-b">
        Dashboard
      </div>

      
      <nav className="flex-1 p-4 space-y-2">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 transition"
        >
          <FaHome /> Home
        </Link>

        <Link
          href="/dashboard/profile"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 transition"
        >
          <FaUser /> Profile
        </Link>

        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 transition"
        >
          <FaCog /> Settings
        </Link>

        <hr className="my-2 border-gray-300" />

       
        <Link
          href="/dashboard/sales"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 transition"
        >
          <FaChartLine /> Sales
        </Link>

        <Link
          href="/dashboard/orders"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 transition"
        >
          <FaShoppingCart /> Orders
        </Link>

        <Link
          href="/dashboard/users"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 transition"
        >
          <FaUsers /> Users
        </Link>
      </nav>

     
      <div className="p-4 border-t">
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          New Report
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
