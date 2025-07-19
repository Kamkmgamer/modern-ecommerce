import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

// Define the application routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Parent layout for all pages
    children: [
      {
        index: true, // HomePage is the default for '/'
        element: <HomePage />,
      },
      {
        path: 'product/:productId',
        element: <ProductDetailPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'about', // ✅ Added AboutPage route
        element: <AboutPage />,
      },
      {
        path: 'contact', // ✅ Added ContactPage route
        element: <ContactPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
