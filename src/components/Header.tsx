// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react'; // A nice icon library

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              ModernStore
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ShoppingCart size={24} />
              {/* Cart item count badge */}
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;