import React from 'react'
import { Text, View } from 'react-native'
import TopNav from '../components/Header'

const SearchScreen = () => {
  return (
    <View className="bg-[#f64e32] flex-1 justify-end items-center space-y-5 relative">
      <TopNav/>
      <Text>SearchScreen</Text>
    </View>
  )
}

export default SearchScreen