import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { DIMENSIONS } from '../constants'

const CurrentGif = ({ source }) => {
  console.log(source)
  return <Image style={styles.gif} source={{ uri: source }} resizeMode='cover' />
}

const styles = StyleSheet.create({
  gif: {
    height: DIMENSIONS.height,
    width: DIMENSIONS.width,
    flex: 1,
    alignSelf: 'stretch'
  }
})

export default CurrentGif
