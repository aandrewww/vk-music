import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native'; 

var audio = require('react-native').NativeModules.RNAudioPlayerURL;

export default class Player extends Component {
  static propTypes = {
    audio: React.PropTypes.object.isRequired,
    playing: React.PropTypes.bool.isRequired,
    onPlay: React.PropTypes.func.isRequired,
    onNext: React.PropTypes.func.isRequired,
    onPrev: React.PropTypes.func.isRequired,
    hasNext: React.PropTypes.bool.isRequired,
    hasPrev: React.PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);

    // this.onEnded = this.onEnded.bind(this);
  }

  render() {
    audio.initWithURL(this.props.audio.url);
    audio.play();

    return (
      null
    );
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.playing !== this.props.playing || nextProps.audio.aid !== this.props.audio.id;
  }

  // onEnded() {
  //   if (this.props.hasNext) {
  //     this.props.onNext();
  //   } else {
  //     this.props.onPlay();
  //   }
  // }
}
