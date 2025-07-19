// src/pages/HomePage.tsx (updated)
// ... imports
import ProductCard from '../components/ProductCard';
import PageTransition from '../components/PageTransition';

// Dummy data for now
const products = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Modern Widget ${i + 1}`,
  price: 29.99 + i * 10,
  imageUrl: `https://picsum.photos/seed/${i + 1}/400/300`,
}));

const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default HomePage;