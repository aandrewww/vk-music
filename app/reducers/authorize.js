import {AUTHORIZED, AUTHORIZE_ERROR} from '../constants/authorize';

const initialState = {
  authorized: false,
  authError: false,
  userId: 0
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case AUTHORIZED:
      return {...state, authorized: true, authError: false, userId: action.userId};
    case AUTHORIZE_ERROR:
      return {...state, authorized: false, authError: true, userId: 0};
    default: return state;
  }
};
