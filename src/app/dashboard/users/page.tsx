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
  const [users, setUsers] = useState<User[]>([
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
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Users</h1>
        <nav className="text-gray-500 text-sm">Dashboard &gt; Users</nav>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <input
            type="text"
            placeholder="Search by name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded w-full md:w-1/2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value as "All" | "Admin" | "Editor" | "User")}
            className="border p-2 rounded w-full md:w-1/4 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="All">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="User">User</option>
          </select>
        </div>

        {/* Users Table */}
        <section className="bg-white rounded-lg shadow p-6 overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left text-gray-600">Avatar</th>
                <th className="p-3 text-left text-gray-600">Name</th>
                <th className="p-3 text-left text-gray-600">Email</th>
                <th className="p-3 text-left text-gray-600">Role</th>
                <th className="p-3 text-left text-gray-600">Status</th>
                <th className="p-3 text-left text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-4 text-center text-gray-500">
                    No users found.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50 transition">
                    <td className="p-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                        {user.avatar ? (
                          <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-gray-500">{user.name.charAt(0)}</span>
                        )}
                      </div>
                    </td>
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.role}</td>
                    <td className={`p-3 font-semibold ${user.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                      {user.status}
                    </td>
                    <td className="p-3 flex gap-2">
                      <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        <FaEye />
                      </button>
                      <button className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
                        <FaEdit />
                      </button>
                      <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                        <FaTrash />
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

export default UsersPage;
