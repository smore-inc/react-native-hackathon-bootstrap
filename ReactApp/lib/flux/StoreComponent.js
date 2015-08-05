import shallowEqual from 'react-pure-render/shallowEqual';
import objectAssign from 'object-assign';
import Component from '../PureComponent';


/****
 *  StoreComponent
 *  ==============
 *
 *  A self updating store-listening base component
 *
 *  This component ease the development flow using Flux and stores.
 *
 *  Notes:
 *  -----
 *
 *  1. This component is implementing "pure rendering" so it will only render if state / props has changed
 *  2. If you decide to override the `constructor`, `componentWillMount`, `componentWillUnmount` or `componentWillReceiveProps` you must
 *      Call the `super()` method, or you will experience an unexpected behavior.
 *
 *
 *  Usage Example:
 *
 *  class MessageView extends StoreComponent{
 *
 *    static getStoresToSubscribe(){
 *      return [MessageStore, ConversationStore];
 *    }
 *
 *    static getStateFromStores(state, props){
 *      return {
 *        message: MessageStore.getById(props.id)
 *        conversationCount: ConversationStore.getConversationCountForMessage(props.id)
 *      };
 *    }
 *
 *    render(){
 *      return (
 *        <View>
 *          <Text>{this.state.message.title}</Text>
 *          <Text>{this.state.conversationCount} conversations</Text>
 *        </View>
 *      );
 *    }
 *  }
 */
class StoreComponent extends Component {

  constructor(props) {
    super(props);

    this._setupStoreSubscription();
  }

  componentWillMount() {
    // Setup initial state
    this.state = objectAssign({}, this.state, this.constructor.getStateFromStores(this.state, this.props));
  }

  /****
   * Another lifecycle method.
   * Removes all the change events from the stores when the component is removed
   */
  componentWillUnmount() {
    this.constructor.getStoresToSubscribe().forEach((store) => this._unregisterFromStore(store));
  }

  /***
   * A function called when the component is mounted, the props change or one of the stores has changed.
   * It is used for querying the stores for new information, and the component's state is updated with the
   * result.
   *
   * @param {Object} state the current state
   * @param {Object} props the current props
   * @returns {Object}
   */
  static getStateFromStores(state, props) {
    // Default
    return {};
  }

  /***
  * Get a list of stores to subscribe to
  **/
  static getStoresToSubscribe() {
    return [];
  }

  _setupStoreSubscription() {
    if (!this.constructor.getStoresToSubscribe().length) {
      throw new Error(`No stores were specified in the getStoresToSubscribe() for ${this.constructor.name}`);
    }

    this.constructor.getStoresToSubscribe().forEach((store) => this._registerToStore(store));
  }

  /***
   * Register to a given store's change event
   * @param {Store} store
   * @private
   */
  _registerToStore(store) {
    store.addChangeListener(this._onStoreChanged, this);
  }

  /***
   * De-register from a store
   * @param {Store} store
   * @private
   */
  _unregisterFromStore(store) {
    store.removeChangeListener(this._onStoreChanged, this);
  }

  _onStoreChanged(store) {
    // Update the state
    this._updateStateFromStores(this.props);
  }

  _updateStateFromStores(props) {
    this.setState(this.constructor.getStateFromStores(this.state, props));
  }

  /***
   * Called when the props of the components have changed
   *
   * We test that the props actually changed, and if so, we update the state from the stores
   *
   * @param {Object} nextProps
   */
  componentWillReceiveProps(nextProps) {
    if (!shallowEqual(this.props, nextProps)) {
      this._updateStateFromStores(nextProps);
    }
  }

}

export default StoreComponent;
