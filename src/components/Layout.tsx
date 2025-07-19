// src/components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Outlet /> {/* Child routes will render here */}
      </main>
    </div>
  );
};

export default Layout;