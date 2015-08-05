/**
* Sample React Native App
* https://github.com/facebook/react-native
*/


import {React, Component, View, Icon, Icons, Colors, Text, StyleSheet, AppRegistry} from 'components';
import StoreComponentDemo from './StoreComponentDemo';

class HackApp extends Component{

  render(){
    return (
      <View style={styles.container}>
        <Icon name={Icons.Welcome} size="30" color={Colors.Link}/>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>

        <View style={styles.demo}>
          <Text style={styles.instructions}>StoreComponent demo</Text>
          <StoreComponentDemo title="Component A"/>
          <StoreComponentDemo title="Component B"/>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.LightBackground,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  demo:{
    width:300,
    marginTop: 30,
    padding:10
  }
});

AppRegistry.registerComponent('HackApp', () => HackApp);
