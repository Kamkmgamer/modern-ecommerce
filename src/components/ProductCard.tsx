// src/components/ProductCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  imageUrl?: string; // optional so we can fallback to placeholder
  index?: number;    // added index for dynamic placeholder
};

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, imageUrl, index = 0 }) => {
  const placeholderUrl = `https://picsum.photos/seed/${index + 1}/400/300`;

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(`Added product ${id} to cart`);
  };

  return (
    <Link
      to={`/product/${id}`}
      className="group relative block rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.03] hover:rotate-[-0.5deg]"
    >
      <div className="relative">
        <img
          src={imageUrl || placeholderUrl}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 p-3 rounded-full bg-white/70 backdrop-blur-md text-gray-800 shadow-lg hover:bg-indigo-500 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
          aria-label="Add to cart"
        >
          <ShoppingBag size={20} />
        </button>
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-medium text-lg text-gray-900 truncate">{name}</h3>
        <p className="text-gray-500 mt-1">${price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
