import React from 'react'
import { StyleSheet, View } from 'react-native'
import SearchGifs from './src/components/SearchGifs/SearchGifs'
import CurrentGif from './src/components/CurrentGif'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = { currentGif: '', showSearch: true }

    this.setCurrentGif = this.setCurrentGif.bind(this)
    this.showSearch = this.showSearch.bind(this)
  }

  setCurrentGif (url) {
    this.setState({
      currentGif: url,
      showSearch: false
    })
  }

  showSearch () {
    this.setState({ showSearch: true })
  }

  render () {
    return (
      <View style={styles.container}>
        {this.state.showSearch ? (
          <SearchGifs setCurrentGif={this.setCurrentGif} />
        ) : (
          <CurrentGif showSearch={this.showSearch} currentGif={this.state.currentGif} />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'black'
  }
})
