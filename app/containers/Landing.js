import React, {Component} from 'react';

import {connect} from 'react-redux';

import { Actions } from 'react-native-router-flux';
import Authorize from '../components/Authorize/Authorize';

import {authorize} from '../actions/authorize';

class Landing extends Component {
	static propTypes = {
		authorize: React.PropTypes.func.isRequired
	}

  componentDidUpdate() {
    if (this.props.authorized) {
      Actions.myAudios();
    }
  }

  render() {
    return (
      <Authorize onAuthBtnClick={this.props.authorize} />
    );
  }
}

const mapStateToProps = state => ({
  authorized: state.authorize.authorized
});

const mapDispatchToProps = dispatch => ({
  authorize: () => dispatch(authorize())
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
