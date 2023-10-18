import React from 'react'
import { Text, View } from 'react-native'
import TopNav from '../components/Header'

const MapScreen = () => {
  return (
    <View className="bg-[#f64e32] flex-1 justify-end items-center space-y-5 relative">
      <TopNav/>
      <Text>MapScreen</Text>
    </View>
  )
}

export default MapScreen