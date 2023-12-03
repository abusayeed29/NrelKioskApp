import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import LevelDetails from '../components/LevelDetails';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import DirectoryScreen from '../screens/DirectoryScreen';
import HomeScreen from '../screens/LevelScreen';
import MapScreen from '../screens/MapScreen';
import SearchScreen from '../screens/SearchScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  function HomeStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Video">
        <Stack.Screen name="HomeTab" component={HomeTabs} />
        <Stack.Screen name="Video" component={WelcomeScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="LevelDetails" component={LevelDetails} />
      </Stack.Navigator>
    );
  }

  function HomeTabs() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,

          tabBarIcon: ({focused}) => {
            let iconName;
            if (route.name === 'Levels') {
              iconName = 'list';
            }else if (route.name === 'Map') {
              iconName = 'location';
            } else if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'Directory') {
              iconName = 'checkmark';
            }
            const customizeSize = 25;

            return (
              <Ionicon
                name={iconName}
                size={customizeSize}
                color={focused ? 'white' : 'gray'}
              />
            );
          },

          tabBarActiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: '#363636',
            borderTopWidth: 0,
            paddingBottom: 10,
          },
        })}>
        <Tab.Screen name="Levels" component={HomeScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Directory" component={DirectoryScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
