import { REQUEST_STATE } from "../constants";

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  postState: REQUEST_STATE.INITIAL,
  putState: REQUEST_STATE.INITIAL,
  habit: []
};

export const habitActionTypes = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  POSTING: 'POSTING',
  POSTING_SUCCESS: 'POSTING_SUCCESS',
  PUTTING: 'PUTTING',
  PUTTING_SUCCESS: 'PUTTING_SUCCESS'
};

export const habitReducer = (state, action) => {
  switch (action.type) {
    case habitActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING
      };
    case habitActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        fetchState: REQUEST_STATE.OK,
        habit: action.payload.habit
      };
    case habitActionTypes.POSTING:
      return {
        ...state,
        postState: REQUEST_STATE.LOADING
      };
    case habitActionTypes.POSTING_SUCCESS:
      return {
        ...state,
        postState: REQUEST_STATE.OK
      };
    case habitActionTypes.PUTTING:
      return {
        ...state,
        putState: REQUEST_STATE.LOADING
      };
    case habitActionTypes.PUTTING_SUCCESS:
      return {
        ...state,
        putState: REQUEST_STATE.OK
      };
    default:
      throw new Error();
  };
};
