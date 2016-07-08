import {AUTHORIZING, AUTHORIZED, AUTHORIZE_ERROR} from '../constants/authorize';

var Vk = require('react-native-vksdk');

function authorizing() {
  return {
    type: AUTHORIZING
  };
}

function authorized(userId) {
  return {
    type: AUTHORIZED,
    userId: userId
  };
}

function error() {
  return {type: AUTHORIZE_ERROR};
}

export const authorize = () => dispatch => {
  dispatch(authorizing());

  Vk.authorize()
    .then((result) => {
      return dispatch(authorized(result.credentials.userId));
    }, (error) => {
      return dispatch(error());
      // console.log('errorR: ' + JSON.stringify(error));
    });
};

