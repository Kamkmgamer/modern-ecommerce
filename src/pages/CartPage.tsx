// src/pages/CartPage.tsx
import React from 'react';
import { useCartStore } from '../store/cartStore';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash } from 'lucide-react';

const CartPage: React.FC = () => {
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQty = useCartStore((state) => state.increaseQuantity);
  const decreaseQty = useCartStore((state) => state.decreaseQuantity);

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Your Shopping Bag</h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Your cart is empty. Start shopping!
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row items-center justify-between bg-white/70 backdrop-blur rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-4 w-full md:w-auto">
                  {/* Product Image */}
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  {/* Product Info */}
                  <div>
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>

                {/* Quantity & Actions */}
                <div className="flex flex-col md:flex-row items-center md:space-x-6 mt-4 md:mt-0">
                  {/* Quantity Selector */}
                  <div className="flex items-center border rounded-lg overflow-hidden">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-3 py-1 text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-1 text-gray-800">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-3 py-1 text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <motion.button
                    whileHover={{ scale: 1.1, color: '#EF4444' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => removeFromCart(item.id)}
                    className="mt-3 md:mt-0 text-red-500 flex items-center space-x-1"
                  >
                    <Trash size={18} />
                    <span>Remove</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="sticky top-24 bg-white/90 backdrop-blur-lg rounded-xl shadow-lg p-6 space-y-4">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between text-gray-700">
              <span>Items:</span>
              <span>{items.length}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Total:</span>
              <span className="font-medium text-lg">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
