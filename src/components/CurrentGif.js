import React from 'react'
import { TouchableOpacity } from 'react-native'
import Gif from './Gif'

const CurrentGif = ({ currentGif, showSearch }) => (
  <TouchableOpacity onPress={showSearch}>
    <Gif source={currentGif} />
  </TouchableOpacity>
)

export default CurrentGif
