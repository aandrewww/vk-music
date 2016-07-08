import React, {Component} from 'react';
import {
  View,
  Text,
  ListView,
  TouchableHighlight
} from 'react-native'; 

import AudioInfo from '../AudioInfo/AudioInfo';

import Styles from "./styles";

export default class AudioItem extends Component {
  static propTypes = {
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    artist: React.PropTypes.string.isRequired,
    genre: React.PropTypes.string,
    playing: React.PropTypes.bool.isRequired,
    onPlayClick: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.onPlay = this.onPlay.bind(this);
  }

  render() {
    return (
      <TouchableHighlight onPress={this.onPlay} underlayColor='#dddddd'>
        <View>
          <View style={Styles.rowContainer}>
            <AudioInfo title={this.props.title} artist={this.props.artist} genre={this.props.genre} />
          </View>
          <View style={Styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }

  onPlay() {
    this.props.onPlayClick(this.props.id);
  }
}
