// src/pages/HomePage.tsx
import React from 'react';
import ProductCard from '../components/ProductCard';
import PageTransition from '../components/PageTransition';
import { motion, useScroll, useTransform } from 'framer-motion';

// Dummy data
const products = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Modern Widget ${i + 1}`,
  price: 29.99 + i * 10,
  imageUrl: `https://picsum.photos/seed/${i + 547}/400/300`,
}));

const HomePage: React.FC = () => {
  const { scrollY } = useScroll();

  // Parallax effect: background y position changes slower than scroll
  const backgroundY = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <PageTransition>
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">

        {/* HERO */}
        <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
          {/* Parallax Background */}
          <motion.img
            style={{ y: backgroundY }}
            src="https://picsum.photos/seed/hero-background/1920/1080"
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative z-10 max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl mb-6">
              Redefine Your Style
            </h1>
            <p className="text-lg md:text-2xl mb-8 leading-relaxed drop-shadow">
              Discover premium products crafted with modern elegance and innovation.
            </p>
            <motion.a
              href="#products"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-white/90 text-black rounded-full text-lg font-semibold shadow-lg backdrop-blur hover:bg-white transition-all duration-300"
            >
              Shop Now
            </motion.a>
          </motion.div>
        </section>

        {/* PRODUCTS GRID */}
        <section
          id="products"
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl font-bold text-center mb-12"
          >
            Our Featured Collection
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default HomePage;
