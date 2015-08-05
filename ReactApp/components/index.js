/****
components
==========

This is a utility package to simplify import statements in your project
It helps you go from something like this:
```js
import React from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
const {Image, Navigator, StyleSheet} = React;
```
To this:
```js
import {React, Icon, Image, Navigator, StyleSheet} from 'components';
```

**/

import React from 'react-native';
import PureComponent from 'lib/PureComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import {StoreComponent} from 'lib/flux';

const {
  // Components
  ActivityIndicatorIOS,
  DatePickerIOS,
  Image,
  ListView,
  MapView,
  Navigator,
  NavigatorIOS,
  PickerIOS,
  ProgressViewIOS,
  ScrollView,
  SegmentedControlIOS,
  SliderIOS,
  SwitchIOS,
  TabBarIOS,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  WebView,

  // APIs
  ActionSheetIOS,
  AdSupportIOS,
  AlertIOS,
  Animated,
  AppRegistry,
  AppStateIOS,
  AsyncStorage,
  CameraRoll,
  Dimensions,
  Easing,
  ImagePickerIOS,
  InteractionManager,
  LayoutAnimation,
  LinkingIOS,
  NetInfo,
  PanResponder,
  PixelRatio,
  PushNotificationIOS,
  Settings,
  StatusBarIOS,
  StyleSheet,
  VibrationIOS,

  // Plugins
  DeviceEventEmitter,
  NativeAppEventEmitter,
  NativeModules,
  Platform,
  requireNativeComponent,
} = React;

const components = {
  // React
  // Components
  ActivityIndicatorIOS,
  DatePickerIOS,
  Image,
  ListView,
  MapView,
  Navigator,
  NavigatorIOS,
  PickerIOS,
  ProgressViewIOS,
  ScrollView,
  SegmentedControlIOS,
  SliderIOS,
  SwitchIOS,
  TabBarIOS,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  WebView,

  // APIs
  ActionSheetIOS,
  AdSupportIOS,
  AlertIOS,
  Animated,
  AppRegistry,
  AppStateIOS,
  AsyncStorage,
  CameraRoll,
  Dimensions,
  Easing,
  ImagePickerIOS,
  InteractionManager,
  LayoutAnimation,
  LinkingIOS,
  NetInfo,
  PanResponder,
  PixelRatio,
  PushNotificationIOS,
  Settings,
  StatusBarIOS,
  StyleSheet,
  VibrationIOS,

  // Plugins
  DeviceEventEmitter,
  NativeAppEventEmitter,
  NativeModules,
  Platform,
  requireNativeComponent,

  React, // So we won't need to import React separately
  Component: PureComponent, // Override React's default compoment to use PureComponent

  // Globals
  Icons: require('./Icons'), // Global icons const
  Colors: require('./Colors'), // Global colors const

  // Additional components
  Icon,
  StoreComponent
};

export default components;
