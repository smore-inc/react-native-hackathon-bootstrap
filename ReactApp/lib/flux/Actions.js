import Dispatcher from './Dispatcher';

class Actions {
  _dispatch(actionKey, payload) {
    Dispatcher.handleAction(actionKey, payload);
  }
}

export default Actions;
