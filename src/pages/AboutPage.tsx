// src/pages/AboutPage.tsx
import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutPage: React.FC = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <motion.img
          style={{ y: backgroundY }}
          src="https://picsum.photos/id/1015/1600/800"
          alt="About Hero"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 text-white text-4xl md:text-6xl font-bold drop-shadow-lg"
        >
          About Us
        </motion.h1>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            ModernStore was born out of a passion for creating beautiful and functional products. Every item in our collection reflects attention to detail, quality craftsmanship, and timeless design.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Since 2025, we have strived to bring elegance and innovation into your everyday life.
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
