import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');



const LevelCard = ({data, index}) => {

  const navigation = useNavigation();
    //console.log(data);

  const renderItem = ({item,index}) => {
    return (
      <TouchableWithoutFeedback
        key={index}
        onPress={()=>{
          navigation.navigate('LevelDetails',{data:item});
        }}
      >
        <View className="space-y-1 mr-4 mt-5">
          <Image
            source={require('../assets/images/bg-main.jpg')}
            className="rounded-xl"
            style={{width: width * 0.4, height: height * 0.12}}
          />
          <Text className="text-white">{item.name}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View className="flex-row">
      <FlatList 
        horizontal data={data} 
        renderItem={renderItem}
        keyExtractor={(item,index)=>index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:5
        }}
    />
    </View>
  );
};

export default LevelCard;
