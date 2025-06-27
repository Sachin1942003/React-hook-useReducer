// App.jsx
import { useReducer } from 'react';
import { initialProducts, initialFilterState } from './productsData';
import { filterReducer, filterActions } from './filterReducer';
import './ProductFilterPage.css';

export default function App() {
  const [filters, dispatch] = useReducer(filterReducer, initialFilterState);

  const filteredProducts = initialProducts.filter(product => (
    product.price >= filters.minPrice &&
    product.price <= filters.maxPrice &&
    product.discount >= filters.minDiscount &&
    product.rating >= filters.minRating &&
    (filters.category === 'all' || product.category === filters.category)
  ));

  const categories = ['all', ...new Set(initialProducts.map(product => product.category))];

  return (
    <div className="product-filter-page">
      <h1>Product Filter</h1>
      
      <div className="filter-container">
        {/* Price Range Filter */}
        <div className="filter-section">
          <h3>Price Range</h3>
          <div className="price-range">
            <div>
              <label>Min: ${filters.minPrice}</label>
              <input
                type="range"
                min="0"
                max="200"
                value={filters.minPrice}
                onChange={(e) => dispatch(filterActions.setMinPrice(Number(e.target.value)))}
              />
            </div>
            <div>
              <label>Max: ${filters.maxPrice}</label>
              <input
                type="range"
                min="0"
                max="200"
                value={filters.maxPrice}
                onChange={(e) => dispatch(filterActions.setMaxPrice(Number(e.target.value)))}
              />
            </div>
          </div>
        </div>

        {/* Discount Filter */}
        <div className="filter-section">
          <h3>Minimum Discount</h3>
          <select
            value={filters.minDiscount}
            onChange={(e) => dispatch(filterActions.setMinDiscount(Number(e.target.value)))}
          >
            <option value="0">Any</option>
            <option value="5">5% or more</option>
            <option value="10">10% or more</option>
            <option value="20">20% or more</option>
            <option value="30">30% or more</option>
          </select>
        </div>

        {/* Rating Filter */}
        <div className="filter-section">
          <h3>Minimum Rating</h3>
          <div className="rating-filter">
            {[0, 1, 2, 3, 4].map((rating) => (
              <button
                key={rating}
                className={`rating-btn ${filters.minRating === rating ? 'active' : ''}`}
                onClick={() => dispatch(filterActions.setMinRating(rating))}
              >
                {rating === 0 ? 'Any' : `${rating}+`}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="filter-section">
          <h3>Category</h3>
          <select
            value={filters.category}
            onChange={(e) => dispatch(filterActions.setCategory(e.target.value))}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Reset Button */}
        <button 
          className="reset-btn"
          onClick={() => dispatch(filterActions.resetFilters(initialFilterState))}
        >
          Reset Filters
        </button>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-badge">
                <span className="discount">{product.discount}% OFF</span>
                <span className="rating">★ {product.rating}</span>
              </div>
              <h3>{product.name}</h3>
              <div className="price">
                <span className="original-price">${product.price.toFixed(2)}</span>
                <span className="discounted-price">
                  ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                </span>
              </div>
              <p className="category">{product.category}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No products match your filters.</p>
        )}
      </div>
    </div>
  );
}