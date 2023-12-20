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
import {
  ChevronLeftIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from 'react-native-heroicons/outline';
import LinearGradient from 'react-native-linear-gradient';

export default function ContactScreen() {
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
        <LinearGradient
          colors={['#dc2626', '#dc2626', '#dc2626']}
          className="rounded-3xl p-1 my-3 border-none shadow-lg shadow-white-500/50">
          <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <ScrollView>
        <View className="mx-4 mb-5 space-y-2">
          <View className="border-rose-400 border-b">
            <Text className="text-white mt-10 pb-3 text-lg pt-5 font-medium">
              CONTACT
              <Text className="text-red-500"> NREL</Text>
            </Text>
          </View>

          <View className="flex-row my-auto">
            <MapPinIcon
              style={{
                marginTop: 15,
              }}
              size={16}
              strokeWidth={2.5}
              color="white"
            />
            <Text className="text-white mt-3 font-light leading-5 text-justify ml-2">
              H #3/A, R #90, Gulshan-02, Dhaka-1212, Bangladesh
            </Text>
          </View>
          <View className="flex-row my-auto">
            <EnvelopeIcon
              style={{
                marginTop: 15,
              }}
              size={16}
              strokeWidth={2.5}
              color="white"
            />
            <Text className="text-white mt-3 font-light leading-5 text-justify ml-2">
              info@navana-realestate.com
            </Text>
          </View>

          <View className="flex-row my-auto">
            <PhoneIcon
              style={{
                marginTop: 15,
              }}
              size={16}
              strokeWidth={2.5}
              color="white"
            />
            <Text className="text-white mt-3 font-light leading-5 text-justify ml-2">
              Dial# 58815305 (Hunting), +880 1730 150390 {'\n'}Fax # 02-58815195{' '}
              {'\n'}Hotline # 16254
            </Text>
          </View>
        </View>

        <View className="mx-4 mb-5 space-y-2">
          <View className="border-rose-400 border-b">
            <Text className="text-white pb-3 text-lg pt-5 font-medium">
              CONTACT
              <Text className="text-red-500"> BUILDING MANAGER</Text>
            </Text>
          </View>

          <View className="flex-row my-auto">
            <MapPinIcon
              style={{
                marginTop: 15,
              }}
              size={16}
              strokeWidth={2.5}
              color="white"
            />
            <Text className="text-white mt-3 font-light leading-5 text-justify ml-2">
              205-207 Tejgaon I/A, Bit Uttam Mir Shawkat Sarak, Dhaka -1208
            </Text>
          </View>
          <View className="flex-row my-auto">
            <EnvelopeIcon
              style={{
                marginTop: 15,
              }}
              size={16}
              strokeWidth={2.5}
              color="white"
            />
            <Text className="text-white mt-3 font-light leading-5 text-justify ml-2">
              info@navana-realestate.com
            </Text>
          </View>

          <View className="flex-row my-auto">
            <PhoneIcon
              style={{
                marginTop: 15,
              }}
              size={16}
              strokeWidth={2.5}
              color="white"
            />
            <Text className="text-white mt-3 font-light leading-5 text-justify ml-2">
              01730150390
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
