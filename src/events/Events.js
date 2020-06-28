import dispatch from './dispatch'
import handleRegistration from './handleRegistration'

export default function() {
  const ON_CONNECTED = "onConnected";
  const ON_CONNECTING = "onConnecting";
  const ON_DISCONNECTED = "onDisconnected";
  const ON_SCORE = "onScore";
  const ON_WIN = "onWin";

  // dispatch events with these methods
  this.connect = (player) => dispatch(ON_CONNECTED, player);
  this.connecting = (player) => dispatch(ON_CONNECTING, player);
  this.disconnect = (player) => dispatch(ON_DISCONNECTED, player);
  this.score = (player) => dispatch(ON_SCORE, player);
  this.win = (player) => dispatch(ON_WIN, player);

  // register and unregister from events with these methods
  this.onConnected = (fn, registered=true) => {
    handleRegistration(ON_CONNECTED, fn, registered);
  }
  this.onConnecting = (fn, registered=true) => {
    handleRegistration(ON_CONNECTING, fn, registered);
  }
  this.onDisconnected = (fn, registered=true) => {
    handleRegistration(ON_DISCONNECTED, fn, registered);
  }
  this.onScore = (fn, registered=true) => {
    handleRegistration(ON_SCORE, fn, registered);
  }
  this.onWin = (fn, registered=true) => {
    handleRegistration(ON_WIN, fn, registered);
  }
}
