// src/pages/CartPage.tsx
import React from 'react';

const CartPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold">Your Shopping Cart</h1>
      <p className="mt-4 text-lg">Your cart is currently empty.</p>
    </div>
  );
};

export default CartPage;