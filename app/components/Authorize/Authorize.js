import React, {Component} from 'react';

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Styles from "./styles";

export default class Landing extends Component {
  static propTypes = {
    onAuthBtnClick: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
      style={Styles.container}>
      <Text>Landing page</Text>
      <TouchableOpacity style={Styles.btn} onPress={this.props.onAuthBtnClick}>
        <Text style={Styles.btnText}>VK Auth</Text>
      </TouchableOpacity>
    </View>
    );
  }
}
