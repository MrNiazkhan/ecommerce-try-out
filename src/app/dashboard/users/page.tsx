"use client";

import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

type User = {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "User";
  status: "Active" | "Inactive";
  avatar?: string;
};

const UsersPage: React.FC = () => {
  const [users] = useState<User[]>([
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Inactive" },
    { id: 3, name: "Charlie Lee", email: "charlie@example.com", role: "User", status: "Active" },
    { id: 4, name: "David Kim", email: "david@example.com", role: "User", status: "Active" },
    { id: 5, name: "Eva Green", email: "eva@example.com", role: "Editor", status: "Inactive" },
  ]);

  const [search, setSearch] = useState<string>("");
  const [filterRole, setFilterRole] = useState<"All" | "Admin" | "Editor" | "User">("All");

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = filterRole === "All" || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Header */}
      <header className="w-full max-w-6xl bg-white shadow p-4 rounded flex flex-col sm:flex-row sm:justify-between items-center gap-2">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Users</h1>
        <nav className="text-gray-500 text-xs sm:text-sm">Dashboard &gt; Users</nav>
      </header>

      {/* Search & Filter */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-4">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/2 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
        <select
          value={filterRole}
          onChange={(e) =>
            setFilterRole(e.target.value as "All" | "Admin" | "Editor" | "User")
          }
          className="border p-2 rounded w-full sm:w-1/4 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          <option value="All">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="User">User</option>
        </select>
      </div>

      {/* Users Table / Cards */}
      <section className="w-full max-w-6xl mt-4 flex flex-col gap-3">
        {filteredUsers.length === 0 ? (
          <div className="bg-white p-4 rounded shadow text-center text-gray-500">
            No users found.
          </div>
        ) : (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-lg shadow p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
            >
              {/* User Info */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm sm:text-base">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-gray-500">{user.name.charAt(0)}</span>
                  )}
                </div>
                <span className="font-semibold">{user.name}</span>
                <span className="text-gray-600">{user.email}</span>
                <span>{user.role}</span>
                <span
                  className={`font-semibold ${
                    user.status === "Active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {user.status}
                </span>
              </div>

              {/* Actions */}
              <div className="flex gap-1 justify-center mt-2 sm:mt-0">
                <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-xs sm:text-sm">
                  <FaEye />
                </button>
                <button className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition text-xs sm:text-sm">
                  <FaEdit />
                </button>
                <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition text-xs sm:text-sm">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default UsersPage;
