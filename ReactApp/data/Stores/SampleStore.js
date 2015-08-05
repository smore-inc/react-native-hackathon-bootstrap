import {Store} from 'lib/flux';
import {ActionKeys} from '../Actions';

class SampleStore extends Store{

  constructor(){
    super();
    // Set initial value
    this._value = 0;
  }

  handleAction(action) {
    switch (action.actionType) {
      case ActionKeys.SET_SAMPLE_VALUE:
        this.setValue(action.value);
      break;
    }
  }

  setValue(newValue){
    this._value = newValue;
    this.emitChange();
  }

  getValue(){
    return this._value;
  }
}


export default new SampleStore();
