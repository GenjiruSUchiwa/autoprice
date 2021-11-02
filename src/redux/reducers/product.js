import * as types from '../actions/type';

const initialState = {
  products: [],
  currentProduct: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.CREATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false,
      };
    case types.CREATE_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case types.DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(product => product._id !== action.payload),
        currentProduct: null,
        loading: false,
      };
    case types.DELETE_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export { productReducer };