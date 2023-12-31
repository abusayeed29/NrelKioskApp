import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import LevelCard from './LevelCard';

const {width, height} = Dimensions.get('window');


const Levels = ({item, index}) => {

  //console.log(item.companies);
  const companydata = item.companies;
  return (
      <View className="items-center m-1 mx-auto rounded-xl w-1/2">
        <Text className="text-white text-lg mb-1" style={{fontFamily:'Alata-Regular'}}>{item.title} </Text>
        <LevelCard data={companydata} index={index}/>
      </View>
  );
};

export default Levels;
