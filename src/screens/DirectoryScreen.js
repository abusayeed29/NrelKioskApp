import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import TopNav from '../components/Header';

const DirectoryScreen = () => {
  return (
    <View className="bg-[#f64e32] flex-1 space-y-5 relative">
      <TopNav />

      <ScrollView>
        <View className="mx-4 border-rose-400 border-b">
          <Text className="text-white mt-10 pb-3 text-xl pt-5">Directory</Text>
        </View>
        <View className="mx-4 flex-1 mb-3">
          <View className="flex-row justify-between mt-3">
            <Text className="text-white font-bold w-48">Company</Text>
            <Text className="text-white font-bold">Level</Text>
            <Text className="text-white font-bold">Unit</Text>
          </View>
          <View className="mt-3 flex-1">
            <View className="mt-1">
              <Text className="text-gray-400 text-md">A</Text>
              <View className="flex-row justify-between">
                <Text className="text-gray-300 text-sm ml-3">
                  Navana Real Estate Ltd.
                </Text>
                <Text className="text-gray-300 text-sm ml-3">3</Text>
                <Text className="text-gray-300 text-sm ml-3">3 A</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-300 text-sm ml-3">
                  Navana Real Estate Ltd.
                </Text>
                <Text className="text-gray-300 text-sm ml-3">3</Text>
                <Text className="text-gray-300 text-sm ml-3">3 A</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-300 text-sm ml-3">
                  Navana Real Estate Ltd.
                </Text>
                <Text className="text-gray-300 text-sm ml-3">3</Text>
                <Text className="text-gray-300 text-sm ml-3">3 A</Text>
              </View>
            </View>

            <View className="mt-1">
              <Text className="text-gray-400 text-md">B</Text>
              <View className="flex-row justify-between">
                <Text className="text-gray-300 text-sm ml-3">
                  Navana Real Estate Ltd.
                </Text>
                <Text className="text-gray-300 text-sm ml-3">3</Text>
                <Text className="text-gray-300 text-sm ml-3">3 A</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-300 text-sm ml-3">
                  Navana Real Estate Ltd.
                </Text>
                <Text className="text-gray-300 text-sm ml-3">3</Text>
                <Text className="text-gray-300 text-sm ml-3">3 A</Text>
              </View>
            </View>

            {/* start level */}
            <View className="mt-1">
              <Text className="text-gray-400 text-md">C</Text>
              <View className="flex-row justify-between">
                <Text className="text-gray-300 text-sm ml-3">
                  Navana Engineering Ltd.
                </Text>
                <Text className="text-gray-300 text-sm ml-3">3</Text>
                <Text className="text-gray-300 text-sm ml-3">3 A</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-300 text-sm ml-3">
                  Navana Real Estate Ltd.
                </Text>
                <Text className="text-gray-300 text-sm ml-3">3</Text>
                <Text className="text-gray-300 text-sm ml-3">3 A</Text>
              </View>
            </View>
            {/* end level */}
            {/* start level */}
            <View className="mt-1">
              <Text className="text-gray-400 text-md">C</Text>
              <View className="flex-row justify-between">
                <Text className="text-gray-300 text-sm ml-3">
                  Navana Engineering Ltd.
                </Text>
                <Text className="text-gray-300 text-sm ml-3">3</Text>
                <Text className="text-gray-300 text-sm ml-3">3 A</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-300 text-sm ml-3">
                  Navana Real Estate Ltd.
                </Text>
                <Text className="text-gray-300 text-sm ml-3">3</Text>
                <Text className="text-gray-300 text-sm ml-3">3 A</Text>
              </View>
            </View>
            {/* end level */}
            {/* start level */}
            <View className="mt-1">
              <Text className="text-gray-400 text-md">C</Text>
              <View className="flex-row justify-between">
                <Text className="text-gray-300 text-sm ml-3">
                  Navana Engineering Ltd.
                </Text>
                <Text className="text-gray-300 text-sm ml-3">3</Text>
                <Text className="text-gray-300 text-sm ml-3">3 A</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-300 text-sm ml-3">
                  Navana Real Estate Ltd.
                </Text>
                <Text className="text-gray-300 text-sm ml-3">3</Text>
                <Text className="text-gray-300 text-sm ml-3">3 A</Text>
              </View>
            </View>
            {/* end level */}
            

          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DirectoryScreen;
