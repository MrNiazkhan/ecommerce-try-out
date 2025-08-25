"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Dashboard/Sidebar";
import { FaBell, FaBars } from "react-icons/fa";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<Props> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white">
      
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setSidebarOpen(false)}
          ></div>
          <div className="relative w-64 bg-white shadow-lg flex flex-col">
            <Sidebar />
          </div>
        </div>
      )}

      
      <div className="flex-1 flex flex-col">
        
        <header className="w-full bg-white shadow px-4 py-3 flex items-center justify-between md:justify-end">
         
          <button
            className="md:hidden p-2 rounded hover:bg-gray-200 transition"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars />
          </button>

         
          <div className="flex items-center gap-4 ml-auto">
           
            <button className="relative p-2 rounded hover:bg-gray-200 transition">
              <FaBell />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></span>
            </button>

            
            <Link
              href="/dashboard/profile"
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 transition-transform hover:scale-105"
            >
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User Avatar"
                className="w-full h-full object-cover cursor-pointer"
              />
            </Link>
          </div>
        </header>

       
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
