// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View } from 'react-native';
//  import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import ReduxThunk from 'redux-thunk';
// import reducers from '../reducers';
// // import getTheme from '../theme/components';
// // import variables from '../theme/variables/commonColor';
// // import LibraryList from './LibraryList';
// import { Header, Button, CardSection } from './components/common';

// // import { Container, Title, Content, Icon, Card, CardItem, Body, Left, Right } from 'native-base';
// // import { StyleProvider } from 'native-base';
// // import Button from '../theme/components/Button';
// // import Router from "./Router/Router"
// import { Actions } from 'react-native-router-flux';


// class AppIndex extends Component {
//       static navigationOptions = {
//         header: false }

        
//       //   getdata(season) {
//       //   alert(season);
//       // }
//       goToNext() {
//           Actions.about({ type: 'reset',typehello: 'Jane'});
//       //  this.props.navigation.navigate('About', { name: 'Jane' });
//       //Actions.about({ type: 'reset',typehello: 'Jane', getdata:this.getdata.bind(this)}); if want to get back data 
//      }
   
    
//     render() {
//      return (
//             <View>
//             <Header headerText={'Albums'} />
//             {/* <LibraryList/> */}
//             <CardSection>
//              <Button onPress={this.goToNext.bind(this)}>Go to next</Button>
//              </CardSection>
//             </View>
//             );
//       }
//     }
    
//     export default AppIndex;

//using sagas to fetch the data from the server

import React , {Component}from "react";
import { bindActionCreators } from "redux";
import {Text,View,Image } from "react-native"
import { connect } from "react-redux";

import { requestApiData } from "./actions";

class AppIndex extends Component{
  componentDidMount() {
    this.props.requestApiData();
  }

  person = (x, i) =>
  //  console.log(x);
    <View key={x.id.value}>
      <Text>
        {x.gender}
      </Text>
      <Text>
        {x.name.first}
      </Text>
      <Text>
        {x.name.last}
      </Text>
      <Image source={{uri:x.picture.medium}}
       style={{width: 400, height: 400}} />
      {/* <Img  src={x.picture.medium} /> */}
    </View>;

  render() {
    const { results = [] } = this.props.data;
    return results.length
      ? <View>
          {results.map(this.person)}
        </View>
      : <Text>loading...</Text>;
  }
}

//get data in component from the reducers
const mapStateToProps = state => ({ data: state.data });


//dispatching the asyns function calls 
const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppIndex);

