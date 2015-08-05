/****
* StoreComponentDemo
* ==================
*
* A simple component for demonstrating flux
*
*/

import {React, StoreComponent, View, Text, StyleSheet, TouchableOpacity, Colors} from 'components';
import {SampleStore, SampleActions} from 'data';


class StoreComponentDemo extends StoreComponent{

  static propTypes = {
    title: React.PropTypes.string.isRequired
  }

  static getStoresToSubscribe(){
    return [SampleStore];
  }

  static getStateFromStores(props){
    return {
      currentValue: SampleStore.getValue()
    };
  }

  render(){
    return (
      <TouchableOpacity onPress={(e) => this._onPress(e)}  style={styles.container}>
        <View style={styles.inner}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text>{this.state.currentValue}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  _onPress(e){
    SampleActions.setSampleValue(Number(new Date()));
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.Link,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 5,
    flex:1
  },

  inner: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    flex:1,
    fontWeight: 'bold',
    color: Colors.Title
  }

});


export default StoreComponentDemo;
