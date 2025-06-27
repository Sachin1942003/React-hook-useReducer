export const initialProducts = [
  { id: 1, name: 'Wireless Headphones', price: 99.99, discount: 20, rating: 4.5, category: 'electronics' },
  { id: 2, name: 'Smart Watch', price: 199.99, discount: 15, rating: 4.2, category: 'electronics' },
  { id: 3, name: 'Cotton T-Shirt', price: 24.99, discount: 30, rating: 4.0, category: 'clothing' },
  { id: 4, name: 'Running Shoes', price: 89.99, discount: 25, rating: 4.7, category: 'footwear' },
  { id: 5, name: 'Bluetooth Speaker', price: 59.99, discount: 10, rating: 3.8, category: 'electronics' },
  { id: 6, name: 'Denim Jeans', price: 49.99, discount: 40, rating: 4.3, category: 'clothing' },
  { id: 7, name: 'Fitness Tracker', price: 79.99, discount: 5, rating: 3.5, category: 'electronics' },
  { id: 8, name: 'Leather Wallet', price: 34.99, discount: 15, rating: 4.1, category: 'accessories' },
];

export const initialFilterState = {
  minPrice: 0,
  maxPrice: 200,
  minDiscount: 0,
  minRating: 0,
  category: 'all',
};