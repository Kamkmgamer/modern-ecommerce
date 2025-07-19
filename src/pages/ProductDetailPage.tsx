// src/pages/ProductDetailPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  // Simulate product data (placeholder)
  const product = {
    name: `Product ${productId}`,
    price: 49.99,
    description:
      'This is a placeholder description for the product. It highlights key features, benefits, and specifications.',
    imageUrl: `https://picsum.photos/seed/${productId}/600/400`,
  };

  const handleAddToCart = () => {
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-2xl text-indigo-600 mt-4">${product.price.toFixed(2)}</p>
          <p className="mt-6 text-gray-700 leading-relaxed">{product.description}</p>

          <button
            onClick={handleAddToCart}
            className="mt-8 inline-flex items-center gap-2 bg-indigo-600 text-white text-lg font-medium px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition-colors duration-300"
          >
            <ShoppingBag size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
