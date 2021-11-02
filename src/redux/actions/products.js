import * as types from './type'
import * as api from '../../api';


export const createProduct = product => async dispatch => {
  try {
    dispatch({ type: types.CREATE_PRODUCT_REQUEST, payload: product });
    dispatch({
      type: types.CREATE_PRODUCT_SUCCESS,
      payload: product,
    });
  } catch (error) {
    dispatch({ type: types.CREATE_PRODUCT_FAIL, payload: error.message });
  }
};


export const deleteProduct = id => async dispatch => {
  try {
    dispatch({ type: types.DELETE_PRODUCT_REQUEST });

    dispatch({
      type: types.DELETE_PRODUCT_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({ type: types.DELETE_PRODUCT_FAIL, payload: error.message });
  }
};