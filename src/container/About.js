// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View } from 'react-native';
//  import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import ReduxThunk from 'redux-thunk';
// import reducers from '../reducers';
// import getTheme from '../theme/components';
// import variables from '../theme/variables/commonColor';
// import LibraryList from './LibraryList';
// import { Header } from './components/common';
// import { Container, Title, Content, Button, Icon, Card, Header, CardItem, Body, Left, Right } from 'native-base';
// import { } from 'native-base';
// import Router from "./Router/Router"


// class About extends Component {
//   static navigationOptions = {
//     header: false }

//     constructor(props) {
//     super(props);
//     }


//      goBack() {
//         this.props.navigation.pop();
//         }

//       gotoNext() {
//       this.props.navigation.navigate('Datepick');
//       }
    
//       render() {
//             const { params } = this.props.navigation.state;
//           return (
//            <Container>
//            <Header>
//            <Button transparent onPress={() => this.goBack()}>
//             <Icon name='arrow-back' style={{ color: 'blue' }} />
//             </Button>
//             <Body style={{ color: 'blue' }}>
//             <Title style={{ color: 'blue' }}>About</Title>
//            </Body>
//            </Header>
//            <Content>
          
//             <Text>{params.name}</Text>
//              <Button onPress={() => this.goBack()} style={{ paddingRight: 10 }}>
//               <Icon name='arrow-back' style={{ color: 'black' }} /><Text>Go Back</Text>
//             </Button>

//             <Button onPress={() => this.gotoNext()} style={{ paddingRight: 10 }}>
//               <Icon name='arrow-back' style={{ color: 'black' }} /><Text>Go Back</Text>
//             </Button>
//             </Content>
//             </Container> 
//         );
//       }
//     }
    
//     export default About;
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'


import Header from '../../src/components/Header';
// import List from './components/List';
import Menu from '../../src/components/Menu';
// import Slide from './components/Slider';

import SideMenu from 'react-native-side-menu';
import { Actions } from 'react-native-router-flux';

class About extends Component {
      constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    static navigationOptions = {
        header: false
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    updateMenu(isOpen) {
        this.setState({ isOpen });
    }

    // goBack(){
    //     this.props.getdata("HelloBack");
    //     Actions.pop();
    // }

    render() {
       // console.log(this.props.name);//this will give the ke name of screen
       alert (this.props.name);
        // alert (this.props.typehello);
        console.log(this.props);
        return (
            <View style={{ flex: 1 }}>
                <SideMenu
                    menu={<Menu />}
                    isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenu(isOpen)}
                    style={{ flex: 1 }}
                >
                    <View style={[{ flex: 1 }, styles.container]}>
                        <Header navigation={this.props.navigation} toggle={this.toggle.bind(this)} />
                        {/* <Slide /> */}
                        {/* <List navigation={this.props.navigation} /> */}
                        <TouchableOpacity onPress={null}><Text>Go Back</Text></TouchableOpacity>
                    </View>
                </SideMenu>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        
       
    }
});

export default About;
