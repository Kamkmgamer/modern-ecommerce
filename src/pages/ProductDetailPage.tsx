// src/pages/ProductDetailPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold">Product Detail Page</h1>
      <p className="mt-4 text-lg">Details for Product ID: {productId}</p>
    </div>
  );
};

export default ProductDetailPage;