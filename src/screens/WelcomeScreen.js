import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Reels from '../components/Reels';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View className="bg-[#f64e32] flex-1 justify-end space-y-5 relative">
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
        <Image
          source={require('../assets/images/logo.png')}
          style={{
            height:27,
            width:85
          }}
        />
        {/* <Text className="text-white font-bold text-3xl">NREL</Text> */}
      </View>

      {/* Swiper FlatList component */}
      <Reels />

      <View className="w-full bottom-0 absolute mx-auto rounded-t-full z-10 justify-cente h-25">
        
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeTab')}
          className="justify-center items-center">
          <Text style={{fontFamily:'Alata-Regular'}} className="text-white text-xl font-light items-center py-24">
            Touch to Navigate
          </Text>
          <Image
            source={require('../assets/images/ellipse.png')}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          />
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
