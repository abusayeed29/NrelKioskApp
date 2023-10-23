import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const RightNav = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 inline-flex rounded-md shadow-sm absolute right-0 z-10 top-40 bg-white text-center justify-center opacity-90">
      <TouchableOpacity onPress={() => navigation.navigate('Home')}
        className="border-b border-gray-300">
        <View className="px-1 py-2">
            <View className="bg-red-600 w-100 justify-center items-center text-cente mx-auto rounded-full p-1">
                <Icon name="chevron-up-sharp" size={18} color="#fff"/>
            </View>
          <Text className="text-black text-center">Levels</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Map')}
        className="border-b border-gray-300">
        <View className="px-1 py-2">
            <View className="bg-red-600 w-100 justify-center items-center text-cente mx-auto rounded-full p-1">
                <Icon name="location" size={18} color="#fff"/>
            </View>
          <Text className=" text-black text-center">Maps</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Directory')}
        className="border-b border-gray-300">
        <View className="px-1 py-2">
            <View className="bg-red-600 w-100 justify-center items-center text-cente mx-auto rounded-full p-1">
                <Icon name="checkmark" size={18} color="#fff"/>
            </View>
          <Text className="text-black text-center">Directory</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Search')}
        >
        <View className="px-1 py-2">
            <View className="bg-red-600 w-100 justify-center items-center text-cente mx-auto rounded-full p-1">
                <Icon name="search" size={18} color="#fff"/>
            </View>
          <Text className="text-black text-center">Search</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RightNav;
