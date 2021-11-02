import * as types from '../actions/type';

const initialState = {
  products: [],
  currentProduct: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.FETCH_SINGLE_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case types.FETCH_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        currentProduct: action.payload,
        loading: false,
      };
    case types.FETCH_SINGLE_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

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
    case types.UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.map(product => {
          product._id === action.payload._id ? action.payload : product;
        }),
        currentProduct: action.payload,
        loading: false,
      };
    case types.UPDATE_PRODUCT_FAIL:
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