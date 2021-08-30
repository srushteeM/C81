import React, { Component } from 'react'
import { Text, View } from 'react-native'
import DrawerNavigator from './Navigator/DrawerNavigator'
import {NavigationContainer} from '@react-navigation/native'
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    )
  }
}