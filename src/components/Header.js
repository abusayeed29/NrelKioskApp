import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <>
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
      <View className="absolute top-3 left-3 right-0 z-10">
        <Text className="text-white font-bold text-3xl">NREL</Text>
      </View>
      
    </>
  );
};

export default Header;
