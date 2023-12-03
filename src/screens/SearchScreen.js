import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/outline';
import Header from '../components/Header';
import { companyData } from '../components/data/ProjectData';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [userInput, setUserInput] = useState('');

  const filterData = item => {
    // if input is empty
    if (userInput === '') {
      return (
        <View className="flex-row justify-between flex-wrap bg-neutral-700 mb-1 opacity-80 rounded-md">
          <View className="space-y-2">
            <Text className="text-gray-300 ml-1 py-2"> {item.name}</Text>
          </View>
        </View>
      );
    }

    if (item.name.toLowerCase().includes(userInput.toLowerCase())) {
      return (
        <View className="flex-row justify-between flex-wrap">
          <View className="space-y-2 mb-4">
            <Text className="text-gray-300 ml-1"> {item.name}</Text>
          </View>
        </View>
      );
    }
  };

  return (
    <View className="bg-neutral-800 flex-1 space-y-5 relative">
      <Header />

      <SafeAreaView className="flex-1">
        <View 
        style={{borderColor:'#737373', borderWidth:1}}
        className="mx-4 mb-3 mt-10 flex-row  border-neutral-500 justify-between items-center rounded-full">
          <TextInput
            placeholder="Search here ..."
            placeholderTextColor={'lightgray'}
            onChangeText={text => setUserInput(text)}
            className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Levels');
            }}
            className="rounded-full p-3 m-1 bg-neutral-500">
            <XMarkIcon size="25" color="white" />
          </TouchableOpacity>
        </View>

        <View className="mx-4 mt-1">
          <Text className="text-white font-semibold ml-1 mb-3">Results:</Text>
          <FlatList
            data={companyData}
            renderItem={({item, index}) => filterData(item)}
          />
        </View>

        {/* <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 15}}
          className="space-y-3">
        </ScrollView> */}
      </SafeAreaView>
    </View>
  );
};

export default SearchScreen;
