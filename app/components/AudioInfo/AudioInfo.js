import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native'; 

import Styles from "./styles";

export default class AudioItem extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    artist: React.PropTypes.string.isRequired,
    genre: React.PropTypes.string,
    playerStyle: React.PropTypes.bool
  };

  render() {
    return (
      <View style={Styles.textContainer}>
        <Text style={Styles.title}
              numberOfLines={1}>{this.props.artist} / {this.props.title}</Text>
      </View>
    );
  }

  // shouldComponentUpdate(nextProps) {
  //   return !this.checkProps(nextProps);
  // }

  // checkProps(nextProps) {
  //   const {title, artist, genre} = this.props;

  //   return title === nextProps.title && artist === nextProps.artist && genre === nextProps.genre;
  // }
}
