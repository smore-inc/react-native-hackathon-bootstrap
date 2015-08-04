import {Dispatcher as BaseDispatcher} from 'flux';


class Dispatcher extends BaseDispatcher {

  /***
   * Dispatch an action with a specific action type
   *
   *
   * @param actionType
   * @param payload
   */
  handleAction(actionType, payload) {
    this.dispatch({
      ...payload,
      actionType
    });
  }
}

const dispatcher = new Dispatcher();

export default dispatcher;
