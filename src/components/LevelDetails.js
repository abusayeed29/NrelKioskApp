import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import LinearGradient from 'react-native-linear-gradient';

var {width, height} = Dimensions.get('window');

//const ios = Platform.OS == 'ios';
//const topMargin = ios ? '' : ' mt-3';

const LevelDetails = ({route}) => {
  const content = route.params.data;
  const navigation = useNavigation();
  console.log(content);

  const visitData = content.visit;
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 20}}
      className="flex-1 bg-neutral-900">
      {/* back button and movie poster */}
      <View className="w-full">
        <SafeAreaView
          className={
            'absolute z-20 w-full flex-row justify-between items-center px-4 mt-3'
          }>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="rounded-3xl p-1 mb-3 bg-red-500">
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
        </SafeAreaView>

        <View>
          <Image
            source={require('../assets/images/bg-main.jpg')}
            style={{width: width, height: height * 0.55}}
          />
          <LinearGradient
            colors={[
              'transparent',
              'rgba(23, 23, 23, 0.8)',
              'rgba(23, 23, 23, 1)',
            ]}
            style={{width, height: height * 0.4}}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            className="absolute bottom-0"
          />
        </View>
      </View>
      {/* Company details */}
      <View style={{marginTop: -(height * 0.09)}} className="space-y-3">
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {content?.name}
        </Text>

        <View className="flex-row justify-center mx-4 space-x2">
          <Text className="text-neutral-300 font-semibold text-base text-center">
            Location: {content.map}
          </Text>
        </View>
        <Text className="text-neutral-400 mx-4 tracking-wide">
          {content?.desciption}
        </Text>

        <View className="my-3 mx-4 flex-row justify-evenly">
          <View>
            <Text className="text-white text-lg mb-3 mt-3">Visit</Text>
            <View className="flex-col justify-between">
              {visitData?.map((item, index) => {
                return (
                  <View key={index}>
                    <Text className="text-white text-md">
                      {item.day} : {item.time}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
          {/* right side */}
          <View>
            <Text className="text-white text-lg mb-3 mt-3">Contact Info</Text>
            <Text className="text-neutral-300 font-semibold text-base text-left">
                Email: {content.email}
            </Text>
            <Text className="text-neutral-300 font-semibold text-base text-left">
                Phone: {content.phone}{' '}
            </Text>

          </View>
        </View>

      </View>
    </ScrollView>
  );
};

export default LevelDetails;
