import React from 'react';
import { Dimensions, Image, View } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import Header from '../components/Header';

const MapScreen = () => {
  return (
    <View className="bg-[#f64e32] flex-1 justify-end items-center space-y-5 relative">
      <Header/>
      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={700}
        imageHeight={950}
      >
        <Image 
            source={require('../assets/images/floormap.jpg')}
            className="absolute w-full h-full z-20"
            resizeMode='cover'
        />

      </ImageZoom>
    </View>
  )
}

export default MapScreen