import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import CurrentGif from './src/components/Gif'
import Set from './src/components/Set'
import { withNetworkConnectivity } from 'react-native-offline'

export default withNetworkConnectivity()(
  class App extends React.Component {
    constructor () {
      super()
      this.state = { currentGif: '', showSearch: true }

      this.setCurrentGif = this.setCurrentGif.bind(this)
    }

    setCurrentGif (url) {
      this.setState({
        currentGif: url,
        showSearch: false
      })
    }

    render () {
      if (!this.props.isConnected) return <Text>No connectivity</Text>
      return (
        <View style={styles.container}>
          {this.state.showSearch ? (
            <Set setCurrentGif={this.setCurrentGif} />
          ) : (
            <TouchableOpacity onPress={() => this.setState({ showSearch: true })}>
              <CurrentGif source={this.state.currentGif} />
            </TouchableOpacity>
          )}
        </View>
      )
    }
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'black'
  }
})
