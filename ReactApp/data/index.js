/***
  data
  ====
  Data package, used for managing stores, actions and models
*/

import Actions from './Actions';
import Stores from './Stores';
import Models from './Models';

export default {
  ...Actions,
  ...Stores,
  ...Models
};
