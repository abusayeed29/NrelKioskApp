import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import LinearGradient from 'react-native-linear-gradient';

export default function AboutScreen() {
  const navigation = useNavigation();

  const [yearCount, setYearCount] = useState(0);

  useEffect(() => {
    const calculateYearCount = startYear => {
      const currentYear = new Date().getFullYear();
      const difference = currentYear - 1996 + 1; // Adding 1 to include the start year
      setYearCount(difference);
    };
    calculateYearCount();
  }, []);

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
        <View className="mx-4 mb-5">
          <View className="border-rose-400 border-b">
            <Text className="text-white mt-10 pb-3 text-lg pt-5 font-medium">
              ABOUT
              <Text className="text-red-500"> NREL</Text>
            </Text>
          </View>
          <Text className="text-neutral-100 mt-3 font-light leading-5 text-justify">
            The chronicle of Navana Real Estate Ltd. (NREL) is a glorious
            history to be told. It is a history of one and half year’s decade of
            innovation, intelligence and indomitable industrious approach. Since
            its establishment in 1996 by its Chairman Mr. Shafiul Islam, NREL
            has been proving its worth, as a proud concern of Navana Group.
            These days, from construction to energy, manufacturing to trading,
            Navana Group is the frontrunner in multi-diversified business
            operations.
          </Text>
          <Text className="text-neutral-100 mt-3 font-light leading-5 text-justify">
            NREL, as a sister concern of Navana Group now stands out as one of
            the leading real-estate company in the country which is recognized
            already as “Super Brand”. Under the banner of “Navana” in recent
            time, NREL is successfully turning the dreams of both local citizens
            and NRB’s into a reality. In the pursuit of being “Different”, NREL
            has been most successful in bringing design shift in the building
            construction. With rigorous scientific and technical knowhow and
            continuous innovation, NREL is racing ahead to fulfill the ever
            increasing need and demand of the prospective buyers of the
            metropolis.
          </Text>
          <Text className="text-neutral-100 font-light leading-5 text-justify">
            In the last {yearCount} years, NREL has completed a significant
            number of projects in all over Dhaka and Chittagong cities. Around
            more than hundred projects both residential and commercial are now
            ongoing in Dhaka and Chittagong cities.
          </Text>
          {/* <Text className="items-center justify-center mt-3 text-red-500 mx-auto">DIFFERENT.DEPENDABLE.DEFINITIVE
         </Text> */}
        </View>

        <View className="mx-4 mb-5">
          <View className="border-rose-400 border-b">
            <Text className="text-white pb-3 text-lg pt-5 font-medium">
              ABOUT
              <Text className="text-red-500"> HR TOWER</Text>
            </Text>
          </View>
          <Text className="text-neutral-100 mt-3 font-light leading-5 text-justify">
            Explore Navana HR Tower, a prestigious project by Navana Real
            Estate.
          </Text>
          <Text className="text-neutral-100 mt-3 font-light leading-5 text-justify">
            The complex consists of two buildings. The first building stands
            tall with 9 floors, while the second one commands attention with its
            13 floors. Additionally, there are two basement floors specifically
            designated for parking purposes. It presents unparalleled
            architectural brilliance, flawless landscaping, and premium
            amenities.
          </Text>
          <Text className="text-neutral-100 mt-3 font-light leading-5 text-justify mb-5">
            Welcome to Navana HR Tower which combines form and function in
            perfect harmony.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
