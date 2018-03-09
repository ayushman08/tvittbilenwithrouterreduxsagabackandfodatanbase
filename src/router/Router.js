import React, { Component } from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import Home from '../AppIndex';
import About from '../container/About';
import { Router, Scene } from 'react-native-router-flux';

// import DatePick from '../../src/components/RegularPicker';

// const RouterComponent = StackNavigator({
//     Home: { screen: Home },
//     About: { screen: About },
//     // DatePick: { screen: DatePick }
// }, {
//     initialRouteName: 'Home',
//     headerMode: 'screen'
// }
// );
const RouterComponent = () => (
  <Router>
  <Scene key="root">
     <Scene key="home" component={Home} title="Home" initial />
     <Scene key="about" component={About} title="About" />
  </Scene>
</Router>

);

export default RouterComponent;
