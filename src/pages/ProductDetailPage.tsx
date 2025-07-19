// src/pages/ProductDetailPage.tsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [activeFeature, setActiveFeature] = useState(0);
  const { scrollYProgress } = useScroll();

  // Parallax transforms for sticky section
  const imageScale = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [1, 1.1]),
    { stiffness: 80, damping: 15 }
  );
  const imageX = useTransform(scrollYProgress, [0, 0.5], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 0.5], [50, -20]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Product data
  const product = {
    name: `Product ${productId}`,
    price: 999.99,
    description:
      'Experience innovation like never before. Designed with precision, built with premium materials, and engineered for performance.',
    longDescription:
      'This product redefines excellence. With cutting-edge technology and a design that inspires, it delivers performance, elegance, and functionality in every detail.',
    heroImage: `https://picsum.photos/seed/${productId}-hero/1600/900`,
    bgImage: `https://picsum.photos/seed/${productId}-bg/1600/900`,
  };

  const features = [
    {
      title: 'Ultra-Wide Display',
      desc: 'Edge-to-edge screen that immerses you in every pixel.',
      imageUrl: `https://picsum.photos/seed/${productId}-feat1/800/600`,
    },
    {
      title: 'Next-Gen Performance',
      desc: 'Blazing fast CPU and GPU for pro-level tasks.',
      imageUrl: `https://picsum.photos/seed/${productId}-feat2/800/600`,
    },
    {
      title: 'All-Day Battery',
      desc: 'Power to spare so you never hunt for an outlet.',
      imageUrl: `https://picsum.photos/seed/${productId}-feat3/800/600`,
    },
    {
      title: 'Studio-Quality Speakers',
      desc: 'Rich, room-filling sound engineered for clarity.',
      imageUrl: `https://picsum.photos/seed/${productId}-feat4/800/600`,
    },
  ];

  const gallery = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    src: `https://picsum.photos/seed/${productId}-gal${i}/400/300`,
    hoverSrc: `https://picsum.photos/seed/${productId}-gal${i}-alt/400/300`,
  }));

  const handleAddToCart = () => {
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center">
        <img
          src={product.heroImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-4">
            {product.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            {product.description}
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-black/40" />
      </section>
{/* STICKY FEATURES with Image Inside Card */}
<section
  className="relative bg-cover bg-center"
  style={{ backgroundImage: `url(${product.bgImage})` }}
>
  <div className="min-h-[400vh] relative">
    {/* Sticky container */}
    <div className="sticky top-0 h-screen flex justify-center items-center">
      {features.map((feat, idx) => (
        <motion.div
          key={idx}
          className="absolute max-w-lg w-full rounded-3xl shadow-2xl bg-black/30 backdrop-blur-sm overflow-hidden"
          style={{ scale: imageScale, x: imageX }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: activeFeature === idx ? 1 : 0,
            transition: { duration: 0.8, ease: 'easeInOut' },
          }}
        >
          {/* Image inside card */}
          <img
            src={feat.imageUrl}
            alt={feat.title}
            className="w-full object-cover rounded-t-3xl"
            style={{ height: '400px' }}
          />

          {/* Text content below image */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="p-6 text-center"
          >
            <h3 className="text-3xl md:text-4xl font-semibold text-white mb-2">
              {feat.title}
            </h3>
            <p className="text-lg md:text-xl text-gray-200">
              {feat.desc}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>

    {/* Invisible anchors to auto-set activeFeature */}
    <div className="absolute top-0 left-0 w-full h-full">
      {features.map((_, idx) => (
        <motion.div
          key={idx}
          className="h-[100vh] w-full"
          onViewportEnter={() => setActiveFeature(idx)}
        />
      ))}
    </div>
  </div>
</section>

      {/* HORIZONTAL SWIPE GALLERY */}
      <section className="py-16 bg-gray-100 overflow-x-auto">
        <div className="flex space-x-6 px-6">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="min-w-[300px] md:min-w-[400px] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={feat.imageUrl}
                alt={feat.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold">{feat.title}</h4>
                <p className="text-gray-600">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FLY-IN GRID GALLERY with FADE HOVER */}
      <section className="py-24 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {gallery.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: img.id * 0.2 }}
              className="relative overflow-hidden rounded-xl shadow-lg group"
            >
              {/* Base image */}
              <img
                src={img.src}
                alt={`Gallery ${img.id}`}
                className="object-cover w-full h-64 transition-opacity duration-500 group-hover:opacity-0"
              />
              {/* Hover image */}
              <img
                src={img.hoverSrc}
                alt={`Gallery ${img.id} alternate`}
                className="absolute inset-0 object-cover w-full h-64 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-32 text-center bg-gray-50">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold mb-4"
        >
          Own it today
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl text-gray-600 mb-8"
        >
          Starting at ${product.price.toFixed(2)}
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCart}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white text-lg font-medium hover:bg-gray-800 transition-colors duration-300 shadow-xl"
        >
          <ShoppingBag size={22} />
          Buy Now
        </motion.button>
      </section>
    </div>
  );
};

export default ProductDetailPage;
