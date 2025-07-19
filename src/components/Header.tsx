// src/components/Header.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import clsx from 'clsx';

const Header: React.FC = () => {
  const totalItems = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 transition-all duration-300',
        isHome ? 'bg-transparent text-white' : 'bg-white shadow text-gray-800'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className={clsx(
                'text-2xl font-bold',
                isHome ? 'text-white' : 'text-indigo-600'
              )}
            >
              ModernStore
            </Link>
          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-baseline space-x-6">
            <Link
              to="/"
              className="hover:underline underline-offset-4 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:underline underline-offset-4 transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:underline underline-offset-4 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CART ICON */}
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative group transition-colors"
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
