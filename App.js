import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Signin from './Components/Signin'
import { Container } from 'native-base'
import Signup from './Components/Signup'
import Success from './Components/Success'

//avoiding setting timer
import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

class App extends Component {
  render() {

    const StatusBarHight = StatusBar.currentHeight

    return (
      <Container style={{ marginTop: StatusBarHight }}>
        <Router />
      </Container>
    )
  }
}

export default App

//navigations
const Screens = createSwitchNavigator({
  initial: Signin,
  signup: Signup,
  success: Success
})

const Router = createAppContainer(Screens)
