"use client";

import React, { useState } from "react";
import { FaUserCircle, FaBell, FaLock } from "react-icons/fa";

const DashboardSettingsPage: React.FC = () => {
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [notifications, setNotifications] = useState(true);
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">Settings</h1>
        <nav className="text-gray-500 text-sm">Dashboard &gt; Settings</nav>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto p-4 gap-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-white rounded-lg shadow p-4 space-y-4 flex-shrink-0">
          <div className="flex items-center gap-2 text-gray-700 p-2 rounded hover:bg-gray-50 cursor-pointer">
            <FaUserCircle /> Profile
          </div>
          <div className="flex items-center gap-2 text-gray-700 p-2 rounded hover:bg-gray-50 cursor-pointer">
            <FaBell /> Notifications
          </div>
          <div className="flex items-center gap-2 text-gray-700 p-2 rounded hover:bg-gray-50 cursor-pointer">
            <FaLock /> Security
          </div>
        </aside>

        {/* Settings Form */}
        <section className="flex-1 bg-white rounded-lg shadow p-6 space-y-6">
          {/* Profile Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Profile Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full border p-2 rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border p-2 rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Notifications Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Notifications</h2>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
                className="h-5 w-5 text-indigo-600 rounded border-gray-300"
              />
              <span className="text-gray-700">Enable email notifications</span>
            </label>
          </div>

          {/* Security Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Security</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">New Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border p-2 rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
              <div className="flex md:justify-start">
                <button className="w-full md:w-auto bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                  Update Password
                </button>
              </div>
            </div>
          </div>

          {/* Save Changes Button */}
          <div className="flex justify-end">
            <button className="w-full sm:w-auto bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              Save Changes
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardSettingsPage;
