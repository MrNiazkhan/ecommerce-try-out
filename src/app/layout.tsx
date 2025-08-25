"use client";

import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import Loading from "@/components/Loading";
import "./globals.css";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
   
    setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen antialiased">
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <Navbar />

              
              {isLoading && <Loading />}

              <main className="flex-1 pt-16">{children}</main>

              <Footer />
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
