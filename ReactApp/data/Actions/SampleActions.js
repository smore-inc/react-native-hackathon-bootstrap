import ActionKeys from './ActionKeys';
import {Actions} from 'lib/flux';


class SampleActions extends Actions{
  /***
  Set the sample value for SampleStore
  **/
  setSampleValue(newValue){
    this._dispatch(ActionKeys.SET_SAMPLE_VALUE, {
      value: newValue
    });
  }
}

// Export singleton
export default new SampleActions();
