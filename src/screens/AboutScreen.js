import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';

export default function AboutScreen() {
  const navigation = useNavigation();
  return (
    <View className=" bg-[#000] flex-1 space-y-5 relative">
      <Image
        source={require('../assets/images/bg-main.jpg')}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        resizeMode="cover"
      />
      <StatusBar style="light" />

      <View className="absolute z-20 w-full flex-row justify-between items-center px-4 mt-3">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="rounded-3xl p-1 mb-3 bg-red-500 ">
          <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View className="mx-4 mb-5">
          <View className="border-rose-400 border-b">
            <Text className="text-white mt-10 pb-3 text-lg pt-5 font-medium">
              ABOUT
              <Text className="text-red-500"> NREL</Text>
            </Text>
            
          </View>
          <Text className="text-neutral-100 mt-3 font-light leading-5 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>

        <View className="mx-4 mb-5">
          <View className="border-rose-400 border-b">
            <Text className="text-white pb-3 text-lg pt-5 font-medium">
              ABOUT 
              <Text className="text-red-500"> HR TOWER</Text>
            </Text>
          </View>
          <Text className="text-neutral-100 mt-3 font-light leading-5 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text className="text-neutral-100 mt-3 font-light leading-5 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text className="text-neutral-100 mt-3 font-light leading-5 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          
        </View>
        
        
      </ScrollView>
    </View>
  );
}
