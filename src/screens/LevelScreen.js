import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import Header from '../components/Header';
import Levels from '../components/Levels';
import RightNav from '../components/RightNav';
import { LevelData } from '../components/data/ProjectData';

const {width, height} = Dimensions.get('window');

const HomeScreenB2 = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-[#f64e32] flex space-y-5">
      {/* Top Nav section */}
      <Header />

      <View className="absolute top-0 right-3 z-10 flex-1 space-y-2">
        <TouchableOpacity
          className="flex-row text-red-500 border border-red-500 rounded-full py-1 px-2 justify-end"
          onPress={() => navigation.navigate('About')}>
          <Text style={{fontFamily:'Alata-Regular'}}  className="text-white text-sm mr-3">About</Text>

          <View className="bg-red-500 w-5 h-5 rounded-full justify-center mt-[1] p-1">
            <ArrowRightIcon size="12" strokeWidth={2.5} color="#fff" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className=" justify-end flex-row text-red-500 border border-red-500 rounded-full py-1 px-3"
          onPress={() => navigation.navigate('Contact')}>
          <Text style={{fontFamily:'Alata-Regular'}}  className="text-white text-sm mr-4">Contact</Text>
          <View className="bg-red-500 w-5 h-5 rounded-full justify-center mt-[1] p-1">
            <ArrowRightIcon size="12" strokeWidth={2.5} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Right Nav */}
      <RightNav />

      {/* Project levels */}
      <ScrollView>
        {/* <View className="flex flex-row flex-wrap content-center items-center gap-2 overflow-hidden">
          <Text className="flex flex-1 basis-[32]">01</Text>
          <Text className="flex flex-1  basis-[32]">01</Text>
          <Text className="flex flex-1  basis-[32]">01</Text>
          <Text className="flex flex-1  basis-[32]">01</Text>

          <Text className="flex flex-1  basis-[32]">01</Text>
          <Text className="flex flex-1  basis-[32]">01</Text>
          <Text className="flex flex-1  basis-[32]">01</Text>
          <Text className="flex flex-1  basis-[32]">01</Text>
          <Text className="flex flex-1  basis-[32]">01</Text>
          <Text className="flex flex-1  basis-[32]">01</Text>
          <Text className="flex flex-1  basis-[32]">01 sdsdsd</Text>
          <Text className="flex flex-1  basis-[32]">Welcome hsajsh dsd</Text>
        </View> */}
        <View className="mt-20 mb-5 flex flex-row flex-wrap mr-16">
          {LevelData.map((item, index) => (
            <Levels item={item} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreenB2;
