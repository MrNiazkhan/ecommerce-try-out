"use client";

import React from "react";
import Link from "next/link";

const AuthGatewayPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Access Dashboard</h1>
        <p className="text-gray-600 mb-6">
          You need to login or signup to access the dashboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/auth/login"
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition font-semibold"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthGatewayPage;
