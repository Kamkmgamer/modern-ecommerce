// src/components/ProductCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

// Placeholder props - we will connect this to real data later
type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, imageUrl }) => {
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent link navigation
    // We'll implement the fly-to-cart animation here
    console.log(`Added product ${id} to cart`);
  };

  return (
    <Link to={`/product/${id}`} className="group block">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
        <div className="relative">
          <img src={imageUrl} alt={name} className="w-full h-56 object-cover" />
          <div className="absolute top-0 right-0 m-2">
            <button
              onClick={handleAddToCart}
              className="bg-white/70 backdrop-blur-sm rounded-full p-2 text-gray-800 hover:bg-indigo-500 hover:text-white transition-colors duration-200 opacity-0 group-hover:opacity-100"
              aria-label="Add to cart"
            >
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg truncate">{name}</h3>
          <p className="text-gray-600 mt-1">${price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;