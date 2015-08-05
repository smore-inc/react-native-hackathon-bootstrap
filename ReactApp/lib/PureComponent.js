import React from 'react-native';
import shallowEqual from 'react-pure-render/shallowEqual';

/***
 * Pure Component
 * ==============
 *
 * Pure components are components that their rendering depends *only* on their state and
 * their props.
 *
 * As a result, we can provide a basic `shouldComponentUpdate` method, that only test the state and
 * props objects for change.
 *
 */
class PureComponent extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
  }

}

export default PureComponent;
