import React, {Component} from 'react';
import {
  View,
  Text,
  ListView
} from 'react-native'; 

import {AUDIOS_FETCH_COUNT} from '../../constants/audios';

import {getGenreById} from '../../utils/genres';

import Styles from "./styles";

import AudioItem from '../AudioItem/AudioItem';

export default class AudiosList extends Component {
  static propTypes = {
    audios: React.PropTypes.object.isRequired,
    ids: React.PropTypes.array.isRequired,
    offset: React.PropTypes.number.isRequired,
    audiosLoading: React.PropTypes.bool.isRequired,
    audiosError: React.PropTypes.number.isRequired,
    playerCurrentTrack: React.PropTypes.number.isRequired,
    playerPlaying: React.PropTypes.bool.isRequired,
    allLoaded: React.PropTypes.bool.isRequired,
    fetchAudio: React.PropTypes.func.isRequired,
    playTrack: React.PropTypes.func.isRequired,
    setTrack: React.PropTypes.func.isRequired,
    playPlayPause: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
    this.onPlayClick = this.onPlayClick.bind(this);

    this.fetch(AUDIOS_FETCH_COUNT);
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    var obj = this.props.audios;
    var arr = Object.keys(obj).map(key => obj[key]);
    const dataSourse = ds.cloneWithRows(arr);

    return (
      <View style={[Styles.tabContent], {backgroundColor: '#727272'}}>
        <ListView
            dataSource={dataSourse}
            enableEmptySections={true}
            renderRow={this.renderItem}/>
      </View>
    );
  }

  renderItem(itemData, sectionID, itemID) {
    return (
      <AudioItem
        id={itemData.id}
        title={itemData.title}
        artist={itemData.artist}
        genre={getGenreById(itemData.genre_id)}
        onPlayClick={this.onPlayClick}
        playing={this.props.playerPlaying && itemData.id === this.props.playerCurrentTrack}
      />
    );
  }

  fetch(count) {
    this.props.fetchAudio(0, count);
  }

  onPlayClick(id) {
    if (id === this.props.playerCurrentTrack) {
      this.props.playPlayPause();
    } else {
      this.props.playTrack(id);
    }
  }
}

