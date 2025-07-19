// src/components/ProductCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, imageUrl }) => {
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(`Added product ${id} to cart`);
  };

  return (
    <Link
      to={`/product/${id}`}
      className="block group relative rounded-2xl overflow-hidden shadow-lg bg-white/60 backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
    >
      {/* IMAGE */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-60 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
        />
        {/* Price Badge */}
        <span className="absolute top-3 left-3 bg-indigo-600 text-white text-sm px-3 py-1 rounded-full shadow-lg">
          ${price.toFixed(2)}
        </span>
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 text-gray-800 hover:bg-indigo-500 hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Add to cart"
        >
          <ShoppingBag size={20} />
        </button>
      </div>

      {/* INFO */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 truncate">{name}</h3>
      </div>
    </Link>
  );
};

export default ProductCard;
