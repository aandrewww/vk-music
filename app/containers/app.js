import React, {Component} from 'react';
import {
  View
} from 'react-native';

import {Actions, DefaultRenderer} from 'react-native-router-flux';
import {connect} from 'react-redux';

import Player from '../components/Player/Player';

import {authorize} from '../actions/authorize';

class App extends Component {
  
  constructor(props) {
    super(props);

  }

  static propTypes = {
    authorize: React.PropTypes.func.isRequired,
    player: React.PropTypes.object.isRequired,
    audios: React.PropTypes.object.isRequired,
    playPlayPause: React.PropTypes.func.isRequired,
    playerNext: React.PropTypes.func.isRequired,
    playerPrev: React.PropTypes.func.isRequired
  }

  getPlayer() {
    if (!this.isAauthorized()) {
      return null;
    }

    return <Player
      playing={this.props.player.playing}
      audio={this.getAudio(this.props.player.current)}
      hasNext={Boolean(this.props.player.next)}
      hasPrev={Boolean(this.props.player.prev)}
      onPlay={this.props.playPlayPause}
      onNext={this.props.playerNext}
      onPrev={this.props.playerPrev}
    />;
  }

  isAauthorized() {
    return this.props.authorized;
  }

  getAudio(id) {
    return this.props.audios[id] || {};
  }

  render() {
    const children = this.props.navigationState.children;
    const state = children[0];

    return (
      <View style={{ flex: 1 }}>
        <DefaultRenderer
          navigationState={state}
          key={state.key}
          {...state}
          onNavigate={this.props.onNavigate}
        />
        {children.length > 1 && children.map((el, i) => {
          if (i > 0 && el.component) {
            const Component = el.component;
            return <Component key={el.key} {...el} />;
          }

          return null;
        })}

        {this.getPlayer()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  authorized: state.authorize.authorized,
  player: state.player,
  audios: state.audio.all
});

const mapDispatchToProps = dispatch => ({
  authorize: () => dispatch(authorize()),
  playPlayPause: () => dispatch(playerPlayPause()),
  playerNext: () => dispatch(playerNext()),
  playerPrev: () => dispatch(playerPrev())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
