import {
  GET_CLASSES_PENDING,
  GET_CLASSES_SUCCESS,
  GET_CLASSES_ERROR,
  DEL_CLASS_PENDING,
  DEL_CLASS_SUCCESS,
  DEL_CLASS_ERROR,
  POST_CLASS_PENDING,
  POST_CLASS_SUCCESS,
  POST_CLASS_ERROR,
  PUT_CLASS_PENDING,
  PUT_CLASS_SUCCESS,
  PUT_CLASS_ERROR,
  GET_BY_ID_CLASS_PENDING,
  GET_BY_ID_CLASS_SUCCESS,
  GET_BY_ID_CLASS_ERROR
} from './constants';

export const getClassesPending = () => {
  return {
    type: GET_CLASSES_PENDING
  };
};

export const getClassesSuccess = (data) => {
  return {
    type: GET_CLASSES_SUCCESS,
    payload: data
  };
};

export const getClassesError = (error) => {
  return {
    type: GET_CLASSES_ERROR,
    payload: error
  };
};

export const deleteClassPending = () => {
  return {
    type: DEL_CLASS_PENDING
  };
};

export const deleteClassSuccess = (_id) => {
  return {
    type: DEL_CLASS_SUCCESS,
    payload: _id
  };
};

export const deleteClassError = (error) => {
  return {
    type: DEL_CLASS_ERROR,
    payload: error
  };
};

export const postClassPending = () => {
  return {
    type: POST_CLASS_PENDING
  };
};

export const postClassSuccess = (aClass) => {
  return {
    type: POST_CLASS_SUCCESS,
    payload: aClass
  };
};

export const postClassError = (error) => {
  return {
    type: POST_CLASS_ERROR,
    payload: error
  };
};

export const putClassPending = () => {
  return {
    type: PUT_CLASS_PENDING
  };
};

export const putClassSuccess = (data) => {
  return {
    type: PUT_CLASS_SUCCESS,
    payload: data
  };
};

export const putClassError = (error) => {
  return {
    type: PUT_CLASS_ERROR,
    payload: error
  };
};

export const getByIdClassPending = () => {
  return {
    type: GET_BY_ID_CLASS_PENDING
  };
};

export const getByIdClassSuccess = (data) => {
  return {
    type: GET_BY_ID_CLASS_SUCCESS,
    payload: data
  };
};

export const getByIdClassError = (error) => {
  return {
    type: GET_BY_ID_CLASS_ERROR,
    payload: error
  };
};
