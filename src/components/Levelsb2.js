import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import LevelCard from './LevelCard';

const {width, height} = Dimensions.get('window');


const Levels = ({item, index}) => {

  //console.log(item.companies);
  const companydata = item.companies;
  return (
    <View className="mb-1 mt-5 ml-5">
      <View className="flex-row justify-between items-center">
        <Text className="text-white text-lg font-bold">{item.title} </Text>
      </View>
      <LevelCard data={companydata} index={index}/>
    </View>
  );
};

export default Levels;
