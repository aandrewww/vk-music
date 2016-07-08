import {combineReducers} from 'redux';

import router from './router';
import authorize from './authorize';
import audio from './audio';
import player from './player';

export default combineReducers({
  router,
  authorize,
  audio,
  player
});
