import React from 'react'
import { StatusBar, View } from 'react-native'
import { Image } from 'react-native-svg'

const TopNav = () => {
  return (
    <View>
     <Image
        source={require('../assets/images/bg-main.jpg')}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        resizeMode="cover"
      />
      <StatusBar style="light" />
    </View>
  )
}

export default TopNav