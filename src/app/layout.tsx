"use client";

import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext"; 
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen antialiased">
        <AuthProvider>
          <CartProvider>
            <WishlistProvider> 
              <Navbar />
              <main className="flex-1 pt-16">{children}</main>
              <Footer />
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
