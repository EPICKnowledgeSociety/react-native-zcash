import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import { connect } from 'react-redux'

import DisplayBalance from 'components/DisplayBalance'
import Client from 'zcash-redux/Client'


const styles = StyleSheet.create({
  container: {
    // padding: 0,
  },
})

class ZGetTotalBalance extends React.Component {
  componentWillMount() {
    const client = new Client()
    client.z_gettotalbalance()
  }
  render() {
    return (
      <View style={styles.container}>
        <DisplayBalance
          name={"ZGetTotalBalance"}
          balance={this.props.z_gettotalbalance}
        />
      </View>
    )
  }
}

export default connect((state) => {
  return {
    z_gettotalbalance: state.z_gettotalbalance,
  }
})(ZGetTotalBalance)
