import AUTH_TYPES from './types';

const initialState = { check: true, logged: false };
const defaultAction = { type: '', payload: {} };

const reducer = (state = initialState, action = defaultAction) => {
  switch (action.type) {
    case AUTH_TYPES.LOGIN:
      return { ...state, ...action.payload, logged: true };
    case AUTH_TYPES.CHECK:
      return { ...state, ...action.payload, check: false };
    case AUTH_TYPES.LOGOUT:
      return { ...state, logged: false };
    default:
      return state;
  }
};

export default reducer;
