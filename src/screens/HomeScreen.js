import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import Header from '../components/Header';
import Levels from '../components/Levels';
import { LevelData } from '../components/data/ProjectData';

const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-[#f64e32] flex-1 space-y-5 relative">
      {/* Top Nav section */}
      <Header />

      <View className="absolute top-3 right-3 z-10 flex-1 space-y-2">
        <TouchableOpacity
          className="flex-row text-red-500 border border-red-500 rounded-full py-1 px-2 justify-end"
          onPress={() => navigation.navigate('About')}>
          <Text className="text-white text-sm mr-3">About</Text>

          <View className="bg-red-500 w-5 h-5 rounded-full justify-center mt-[1] p-1">
            <ArrowRightIcon size="12" strokeWidth={2.5} color="#fff" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className=" justify-end flex-row text-red-500 border border-red-500 rounded-full py-1 px-3"
          onPress={() => navigation.navigate('Contact')}>
          <Text className="text-white text-sm mr-4">Contact</Text>
          <View className="bg-red-500 w-5 h-5 rounded-full justify-center mt-[1] p-1">
            <ArrowRightIcon size="12" strokeWidth={2.5} color="#fff" />
          </View>
        </TouchableOpacity>
        
      </View>

      {/* Project levels */}
      <ScrollView>
        <View className="mt-10 mb-5">
          {LevelData.map((item, index) => (
            <Levels item={item} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
