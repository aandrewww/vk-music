import {
  AUDIOS_ERROR,
  AUDIOS_LOADED,
  AUDIOS_LOADING,
  AUDIOS_MY_FETCHED
} from '../constants/audios';

var Vk = require('react-native-vksdk');

import normalizeBy from '../utils/normalizeBy';

function loading(ownerIs, albumId, audioIds, offset, count) {
  return {
    type: AUDIOS_LOADING,
    payload: {
      ownerIs,
      albumId,
      audioIds,
      offset,
      count
    }
  };
}

function loaded() {
  return {
    type: AUDIOS_LOADED
  };
}

function error(id) {
  return {
    type: AUDIOS_ERROR,
    payload: id
  };
}

function myAudiosFetched(offset, audios) {
  console.log(audios.length);
  return {
    type: AUDIOS_MY_FETCHED,
    payload: {
      offset,
      ...normalizeBy(audios, 'id')
    }
  };
}

function fetchAudios(ownerIs, albumId, audioIds, offset, count) {
  let params = {
    offset,
    count
  };

  if (ownerIs) {
    params.owner_id = ownerIs;
  }

  if (albumId) {
    params.album_id = albumId;
  }

  if (audioIds) {
    params.audio_ids = audioIds;
  }

  
  return Vk.callMethod('audio.get', {offset: offset, count: count});
}

export const fetchMyAudio = (offset, count) => dispatch => {
  dispatch(loading(undefined, undefined, undefined, offset, count));

  fetchAudios(undefined, undefined, undefined, offset, count)
    .then(audios => dispatch(myAudiosFetched(offset, audios.items)))
    .then(() => dispatch(loaded()))
    .catch(id => dispatch(error(id)));
};
