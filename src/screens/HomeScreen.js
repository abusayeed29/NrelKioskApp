import React from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import TopNav from '../components/Header';
import Levels from '../components/Levels';
import { LevelData } from '../components/data/ProjectData';

const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <View className="bg-[#f64e32] flex-1 space-y-5 relative">
      {/* Top Nav section */}
      <TopNav />

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
