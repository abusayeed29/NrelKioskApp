import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const LevelCard = ({data, index}) => {
  const navigation = useNavigation();
  //console.log(data);

  // const renderItem = ({item, index}) => {
  //   return (
  //     <TouchableWithoutFeedback
  //       key={index}
  //       onPress={() => {
  //         navigation.navigate('LevelDetails', {data: item});
  //       }}>
  //       <View
  //         style={{width: width * 0.45, height: height * 0.18}}
  //         className="space-y-1 bg-neutral-700 flex-1 rounded-xl items-center ms-1 shadow-2xl">
  //         <Image
  //           source={require('../assets/images/bg-main.jpg')}
  //           className="rounded-xl"
  //           resizeMode="contain"
  //           style={{width: width * 0.45, height: height * 0.1}}
  //         />
  //         <Text className="text-white mx-1 justify-center items-center">
  //           {item.name}
  //         </Text>
  //       </View>
  //     </TouchableWithoutFeedback>
  //   );
  // };

  return (
    <View className="flex flex-row mb-3">
      {data.map((item, index) => (
        <TouchableWithoutFeedback
          key={index}
          onPress={() => {
            navigation.navigate('LevelDetails', {data: item});
          }}>
          <View
            style={{width: width * 0.39, height: height * 0.14}}
            className="space-y-1 bg-neutral-700 flex-1 rounded-xl items-center mx-1 shadow-2xl shadow-white-500/50 ">
            <Image
              source={require('../assets/images/hr-tower-b.png')}
              className="rounded-t-xl	 bg-neutral-600"
              resizeMode="cover"
              style={{width: width * 0.39, height: height * 0.09}}
            />
            <Text className="text-white justify-center items-center mx-1 " style={{fontFamily:'Alata-Regular'}}>
              {item.name}
              {/* {item.name.length > 30
                ? item.name.slice(0, 30) + '...'
                : item.name} */}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      ))}

      {/* <FlatList
        data={data} 
        renderItem={renderItem}
        keyExtractor={(item,index)=>index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:5
        }}
    /> */}
    </View>
  );
};

export default LevelCard;
