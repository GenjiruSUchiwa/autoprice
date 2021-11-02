import * as types from './type'
import * as api from '../../api';

export const fetchSingleProduct = id => async dispatch => {
  try {
    dispatch({ type: types.FETCH_SINGLE_PRODUCT_REQUEST });
    const { data } = await api.fetchSingleProduct(id);
    dispatch({ type: types.FETCH_SINGLE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.FETCH_SINGLE_PRODUCT_FAIL, payload: error.message });
  }
};

export const createProduct = product => async dispatch => {
  try {
    dispatch({ type: types.CREATE_PRODUCT_REQUEST, payload: product });
    const { data } = product
    dispatch({
      type: types.CREATE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: types.CREATE_PRODUCT_FAIL, payload: error.message });
  }
};

export const updateProduct = (id, product) => async dispatch => {
  try {
    dispatch({ type: types.UPDATE_PRODUCT_REQUEST });
    const { data } = product
    dispatch({
      type: types.UPDATE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: types.UPDATE_PRODUCT_FAIL, payload: error.message });
  }
};

export const deleteProduct = id => async dispatch => {
  try {
    dispatch({ type: types.DELETE_PRODUCT_REQUEST });
    const { data } = await api.deleteProduct(id);
    dispatch({
      type: types.DELETE_PRODUCT_SUCCESS,
      payload: data._id,
    });
  } catch (error) {
    dispatch({ type: types.DELETE_PRODUCT_FAIL, payload: error.message });
  }
};