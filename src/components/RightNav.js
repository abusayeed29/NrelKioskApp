import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const RightNav = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.name);
  return (
    <View className="flex-1 inline-flex rounded-bl-md rounded-tl-md shadow-sm absolute right-0 z-10 top-16 bg-white text-center justify-center opacity-80">
      <TouchableOpacity
        onPress={() => navigation.navigate('Levels')}
        className={
          'border-b border-gray-300 rounded-tl-md' +
          (route.name == 'Levels' ? ' bg-black' : 'bg-white')
        }>
        <View className="px-1 py-2">
          <LinearGradient
            colors={['#dc2626', '#dc2626', '#dc2626']}
            className="w-100 justify-center items-center text-cente mx-auto rounded-full p-1">
            <Icon name="chevron-up-sharp" size={18} color="#fff" />
          </LinearGradient>
          <Text
            style={{fontFamily: 'Alata-Regular'}}
            className={
              'text-center ' +
              (route.name == 'Levels' ? 'text-white' : 'text-black')
            }>
            Levels
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Map')}
        className={
          'border-b border-gray-300 ' +
          (route.name == 'Map' ? ' bg-black' : 'bg-white')
        }>
        <View className="px-1 py-2">
          <LinearGradient
            colors={['#dc2626', '#dc2626', '#dc2626']}
            className="w-100 justify-center items-center text-cente mx-auto rounded-full p-1">
            <Icon name="location" size={18} color="#fff" />
          </LinearGradient>
          <Text
            style={{fontFamily: 'Alata-Regular'}}
            className={
              'text-center ' +
              (route.name == 'Map' ? 'text-white' : 'text-black')
            }>
            Maps
          </Text>
        </View>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => navigation.navigate('Directory')}
        className={"border-b border-gray-300 "+ (route.name == 'Directory' ? ' bg-black': 'bg-white') }>
        <View className="px-1 py-2">
            <View className="bg-red-600 w-100 justify-center items-center text-cente mx-auto rounded-full p-1">
                <Icon name="checkmark" size={18} color="#fff"/>
            </View>
            <Text style={{fontFamily:'Alata-Regular'}} className={"text-center " + (route.name == 'Directory' ? 'text-white': 'text-black') }>Directory</Text>
        </View>
      </TouchableOpacity> */}

      <TouchableOpacity
        onPress={() => navigation.navigate('Search')}
        className={
          'border-b border-gray-300 ' +
          (route.name == 'Search' ? ' bg-black' : 'bg-white')
        }>
        <View className="px-1 py-2">
          <LinearGradient
            colors={['#dc2626', '#dc2626', '#dc2626']}
            className="w-100 justify-center items-center text-cente mx-auto rounded-full p-1">
            <Icon name="search" size={18} color="#fff" />
          </LinearGradient>
          <Text
            style={{fontFamily: 'Alata-Regular'}}
            className={
              'text-center ' +
              (route.name == 'Search' ? 'text-white' : 'text-black')
            }>
            Search
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Video')}
        className="border-b border-gray-300 bg-white">
        <View className="px-1 py-2">
          <LinearGradient
            colors={['#dc2626', '#dc2626', '#dc2626']}
            className="w-100 justify-center items-center text-cente mx-auto rounded-full p-1">
            <Icon name="videocam" size={18} color="#fff" />
          </LinearGradient>
          <Text
            style={{fontFamily: 'Alata-Regular'}}
            className={
              'text-center ' +
              (route.name == 'Video' ? 'text-white' : 'text-black')
            }>
            Video
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('About')}
        className={
          'border-b border-gray-300 ' +
          (route.name == 'About' ? ' bg-black' : 'bg-white')
        }>
        <View className="px-1 py-2">
          <LinearGradient
            colors={['#dc2626', '#dc2626', '#dc2626']}
            className="w-100 justify-center items-center text-cente mx-auto rounded-full p-1">
            <Icon name="arrow-forward" size={18} color="#fff" />
          </LinearGradient>
          <Text
            style={{fontFamily: 'Alata-Regular'}}
            className={
              'text-center ' +
              (route.name == 'About' ? 'text-white' : 'text-black')
            }>
            About
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Contact')}
        className="border-b border-gray-300 rounded-bl-md bg-white">
        <View className="px-1 py-2">
          <LinearGradient
            colors={['#dc2626', '#dc2626', '#dc2626']}
            className="w-100 justify-center items-center text-cente mx-auto rounded-full p-1">
            <Icon name="call" size={18} color="#fff" />
          </LinearGradient>
          <Text
            style={{fontFamily: 'Alata-Regular'}}
            className={
              'text-center ' +
              (route.name == 'Contact' ? 'text-white' : 'text-black')
            }>
            Contact
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RightNav;
