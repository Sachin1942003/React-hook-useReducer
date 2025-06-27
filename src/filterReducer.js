export const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MIN_PRICE':
      return { ...state, minPrice: action.payload };
    case 'SET_MAX_PRICE':
      return { ...state, maxPrice: action.payload };
    case 'SET_MIN_DISCOUNT':
      return { ...state, minDiscount: action.payload };
    case 'SET_MIN_RATING':
      return { ...state, minRating: action.payload };
    case 'SET_CATEGORY':
      return { ...state, category: action.payload };
    case 'RESET_FILTERS':
      return action.payload; // Pass initial state as payload
    default:
      return state;
  }
};

export const filterActions = {
  setMinPrice: (value) => ({ type: 'SET_MIN_PRICE', payload: value }),
  setMaxPrice: (value) => ({ type: 'SET_MAX_PRICE', payload: value }),
  setMinDiscount: (value) => ({ type: 'SET_MIN_DISCOUNT', payload: value }),
  setMinRating: (value) => ({ type: 'SET_MIN_RATING', payload: value }),
  setCategory: (value) => ({ type: 'SET_CATEGORY', payload: value }),
  resetFilters: (initialState) => ({ type: 'RESET_FILTERS', payload: initialState }),
};