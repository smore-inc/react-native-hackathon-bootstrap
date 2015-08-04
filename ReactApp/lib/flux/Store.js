import _ from 'underscore';
import EventEmitter from 'eventemitter3';
import Dispatcher from './Dispatcher';

/****
 BaseStore
 ============
 **/

const CHANGE_EVENT = 'change';

class Store {

  constructor() {
    this.emitter = new EventEmitter();
    this._registerStore();
  }

  _registerStore() {
    if (_.isFunction(this.handleAction)) {
      this.disptachToken = Dispatcher.register(this.handleAction.bind(this));
    } else {
      //console.log(`Store ${this.constructor.name} must define a 'handleAction' function`);
    }
  }

  emitChange() {
    this._emit(CHANGE_EVENT);
  }

  addChangeListener(callback, context) {
    this._on(CHANGE_EVENT, callback, context);
  }

  removeChangeListener(callback, context) {
    this._removeListener(CHANGE_EVENT, callback, context);
  }

  _emit(event, options) {
    this.emitter.emit(event, options);
  }

  _on(event, callback, context) {
    this.emitter.on(event, callback, context);
  }

  _removeListener(event, callback, context) {
    this.emitter.removeListener(event, callback, context);
  }

}

export default Store;
