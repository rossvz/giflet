import React, { Component } from 'react'
import { GIPHY_API_KEY } from 'react-native-dotenv'
import { ActivityIndicator, KeyboardAvoidingView, StyleSheet, Text, TextInput, ScrollView, Button } from 'react-native'
import axios from 'axios'
import PreviewGif from './PreviewGif'
class Set extends Component {
  constructor () {
    super()
    this.state = { searchTerm: '', gifs: [], currentGif: '' }
    this.onSearch = this.onSearch.bind(this)
    this.onChange = this.onChange.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
  }

  onChange (text) {
    this.setState({ searchTerm: text })
  }

  async onSearch () {
    this.setState({ loading: true })
    console.log(this.state.searchTerm)
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${
      this.state.searchTerm
    }&limit=25&offset=0&rating=PG-13&lang=en`
    const results = await axios.get(url)
    this.setState({ gifs: results.data.data, loading: false })
  }

  clearSearch () {
    this.setState({ searchTerm: '', gifs: [] })
  }

  render () {
    return (
      <KeyboardAvoidingView style={styles.container} enabled>
        <Text style={styles.title}>Set new gif</Text>
        <TextInput
          value={this.state.searchTerm}
          onFocus={this.clearSearch}
          blurOnSubmit
          onChangeText={this.onChange}
          onBlur={this.onSearch}
          style={styles.input}
        />
        <Button color={'white'} style={styles.button} title={'Search'} onPress={this.onSearch}>
          Search
        </Button>
        {this.state.loading && <ActivityIndicator size='large' color='#0000ff' />}
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardDismissMode={'on-drag'}>
          {this.state.gifs.map(gif => <PreviewGif setCurrentGif={this.props.setCurrentGif} gif={gif} key={gif.id} />)}
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 30,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 30
  },
  button: {
    height: 200,
    borderRadius: 100,
    borderColor: 'white',
    lineHeight: 40,
    backgroundColor: 'white'
  },
  input: {
    backgroundColor: 'gray',
    borderRadius: 40,
    padding: 20,
    fontSize: 40,
    width: 300
  }
})

export default Set
