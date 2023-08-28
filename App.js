import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/Home';
import Notification from './screens/Notification';
import Profile from './screens/Profile';
import Search from './screens/Search';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Tab.Navigator labeled={true}
     
     activeColor='#A52A2A'>
      <Tab.Screen  name='Home' component={Home}
       options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
      />
        <Tab.Screen  name='Notification' component={Notification}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
        <Tab.Screen  name='Profile' component={Profile}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }} 
      />
        <Tab.Screen  name='Search' component={Search}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
   </NavigationContainer>
  );
}

