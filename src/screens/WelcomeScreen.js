import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import Reels from '../components/Reels';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  
  return (
    <View className="bg-[#f64e32] flex-1 justify-end items-center space-y-5 relative">
      <Image
        source={require('../assets/images/bg-splash.jpg')}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        resizeMode="cover"
      />
      <StatusBar style="light" />
      <View className="absolute top-0 left-3 right-0 z-10">
        <Text className="text-white font-bold text-3xl">NREL</Text>
      </View>
      
      {/* Swiper FlatList component */}
      <Reels/>

      <View className="w-full bottom-0 absolute mx-auto rounded-t-full z-10  border-neutral-100 border border-b-0 justify-center opacity-40 bg-black">
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeTab')}
          className="justify-center items-center py-5">
          <Text className="text-white text-xl font-light items-center">Switch to Navigate</Text>
        </TouchableOpacity>
      </View>


      {/* title and button */}
      {/* <View className="flex items-center justify-center py-28 max-w-[80%]">
        <Text className="text-white text-4xl font-bold tracking-widest my-4">
          HR Tower
        </Text>
        <View className="my-4 mb-36">
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeTab')}
            className="px-12 py-3 rounded-xl bg-red-600">
            <Text className="text-white text-lg font-medium">Explore</Text>
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
};

export default WelcomeScreen;
