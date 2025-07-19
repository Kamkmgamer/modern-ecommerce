// src/pages/CartPage.tsx
import React from 'react';
import { useCartStore } from '../store/cartStore'; // Import the store

const CartPage: React.FC = () => {
  // ✅ SOLUTION: Select each piece of state individually.
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
      {items.length === 0 ? (
        <p className="mt-4 text-lg">Your cart is currently empty.</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center space-x-4">
                <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6 text-right">
            <h2 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;