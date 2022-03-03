import { REQUEST_STATE } from "../constants";

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  postState: REQUEST_STATE.INITIAL,
  habitsList: []
};

export const habitsActionTypes = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  POSTING: 'POSTING',
  POSTING_SUCCESS: 'POSTING_SUCCESS'
};

export const habitsReducer = (state, action) => {
  switch (action.type) {
    case habitsActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING
      };
    case habitsActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        fetchState: REQUEST_STATE.OK,
        habitsList: action.payload.habits
      };
    case habitsActionTypes.POSTING:
      return {
        ...state,
        postState: REQUEST_STATE.LOADING
      };
    case habitsActionTypes.POSTING_SUCCESS:
      return {
        ...state,
        postState: REQUEST_STATE.OK
      };
    default:
      throw new Error();
  };
};
