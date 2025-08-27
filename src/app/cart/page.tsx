"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const CartPage: React.FC = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    incrementQuantity,
    decrementQuantity,
    total,
    discount,
    applyDiscount,
  } = useCart();

  const [promoCode, setPromoCode] = useState("");
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleApplyPromo = () => {
    if (promoCode === "DISCOUNT10") applyDiscount(total * 0.1);
    else alert("Invalid Promo Code");
  };

  const handleCheckout = () => setShowPaymentModal(true);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map(item => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">Price: {item.price}</p>
                </div>
              </div>

              <div className="flex items-center mt-4 sm:mt-0 gap-4">
                <div className="flex items-center border rounded">
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
                  >
                    <FaMinus />
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => incrementQuantity(item.id)}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
                  >
                    <FaPlus />
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}

         
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Promo Code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="border px-3 py-2 rounded w-full md:w-64"
              />
              <button
                onClick={handleApplyPromo}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
              >
                Apply
              </button>
            </div>

            <div className="text-right space-y-2">
              <p className="text-lg font-semibold">Subtotal: ${total.toFixed(2)}</p>
              {discount > 0 && (
                <p className="text-green-600 font-semibold">Discount: -${discount.toFixed(2)}</p>
              )}
              <p className="text-xl font-bold">
                Total: ${(total - discount).toFixed(2)}
              </p>
              <div className="flex gap-2 justify-end mt-2">
                <button
                  onClick={clearCart}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                  Clear Cart
                </button>
                <button
                  onClick={handleCheckout}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md space-y-4 relative">
            <h2 className="text-2xl font-bold text-gray-800">Payment</h2>
            <p>Total: ${(total - discount).toFixed(2)}</p>
            <p className="text-gray-600">Enter card details (frontend only)</p>
            <input
              type="text"
              placeholder="Card Number"
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Expiry MM/YY"
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="CVC"
              className="w-full border px-3 py-2 rounded"
            />
            <button
              onClick={() => { alert("Payment Successful!"); clearCart(); setShowPaymentModal(false); }}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Pay ${(total - discount).toFixed(2)}
            </button>
            <button
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
