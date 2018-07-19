import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'

const PreviewGif = ({ gif, setCurrentGif }) => {
  if (gif.images && gif.images && gif.images.fixed_height_small) {
    return (
      <TouchableOpacity onPress={() => setCurrentGif(gif.images.original.url)}>
        <Image style={styles.previewGif} source={{ uri: gif.images.fixed_height_small.url }} />
      </TouchableOpacity>
    )
  }
}

export default PreviewGif

const styles = StyleSheet.create({
  previewGif: {
    height: 100,
    width: 100,
    margin: 10
  }
})
