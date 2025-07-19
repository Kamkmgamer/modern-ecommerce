// src/App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';

// Define the application routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Use Layout as the parent for all pages
    children: [
      {
        index: true, // This makes HomePage the default child route for '/'
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;