import {
  AUDIOS_ERROR,
  AUDIOS_LOADED,
  AUDIOS_LOADING,
  AUDIOS_MY_FETCHED
} from '../constants/audios';

import isArrayStartFrom from '../utils/isArrayStartFrom';
import getDifferencesByKeys from '../utils/getDifferencesByKeys';

const initialState = {
  all: {},
  my: {
    offset: 0,
    ids: [],
    allLoaded: false
  },
  friends: {
  },
  loading: false,
  error: 0
}

function getAllAudios(allAudios, newAudios) {
  let differentAudios = getDifferencesByKeys(allAudios, newAudios, 'title', 'artist', 'genre');

  if (differentAudios) {
    return {...allAudios, ...differentAudios};
  }

  return allAudios;
}

function audiosLoading(state) {
  return {
    ...state,
    loading: true
  };
}

function myAudiosFetched(state, action) {
  let ids = state.my.ids;
  let newIds = action.payload.ids;

  return {
    ...state,
    my: {
      offset: action.payload.offset,
      ids: isArrayStartFrom(ids, newIds) ? ids : newIds,
      allLoaded: true
    },
    all: getAllAudios(state.all, action.payload.normalized)
  };
}

function audiosError(state, action) {
  return {
    ...state,
    loading: false,
    error: action.payload
  };
}

function audiosLoaded(state) {
  return {
    ...state,
    loading: false
  };
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case AUDIOS_LOADING:
      return audiosLoading(state);
    case AUDIOS_MY_FETCHED:
      return myAudiosFetched(state, action);
    case AUDIOS_ERROR:
      return audiosError(state, action);
    case AUDIOS_LOADED:
      return audiosLoaded(state);
    default: return state;
  }
};
