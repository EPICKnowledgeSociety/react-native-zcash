import React, { Component } from 'react'
import {
  StyleSheet,
  // Text,
  View,
  // Button,
} from 'react-native'
// import { createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation'

import client from 'state/client'

// import Logout from 'components/Logout'
import NetWorkScreen from 'components/NetworkScreen'
import XferScreen from 'components/XferScreen'
import HistoryScreen from 'components/HistoryScreen'

const stack = {
  Network: {
    screen: NetWorkScreen,
  },
  Xfer: {
    screen: XferScreen,
  },
  Wallet: {
    screen: HistoryScreen,
  }
}
const options = {
  initialRouteName: 'Xfer',
  tabStyle: {
    // marginTop: 10
    padding: 10,
  },
  labelStyle: {
    // marginTop: 2
    padding: 10,
  },
  tabBarPosition: 'bottom',
  // animationEnabled: true,
  // swipeEnabled: true,
  tabBarOptions: {
    // indicatorStyle: {
    //   backgroundColor: 'transparent',
    // },
    // showIcon: true,
    labelStyle: {
      fontSize: 15
    },
    style: {
      // backgroundColor: 'grey',
    },
    tabStyle: {
      // height: 10,
    },
    // iconStyle: {
    //   flexGrow: 0,
    //   marginTop: 1.5
    // },
  },
}
const RootStack = createBottomTabNavigator(stack, options)


export default class LoggedInContainer extends Component {
  componentWillMount() {
    // TODO: this is just a shortcut to load a bunch of data from
    // the server into redux. We might want to make this more
    // fine-grained.
    client.start()
  }
  render() {
    return (
      <View style={styles.container}>
        <RootStack />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // padding: 10,
    flex: 1,
    // padding: 10,
    // justifyContent: 'space-between',
    justifyContent: 'center',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    marginTop: 23,
    backgroundColor: '#fdf',
  },
  bottomNav: {
    // flex: 1,
    flexDirection: 'row',
  },
})
