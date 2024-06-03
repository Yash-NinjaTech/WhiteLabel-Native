import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Hotels from './Hotels';
import Flights from './Flights';

const Tab = createMaterialTopTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Hotels"
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: '#363944',
        tabBarInactiveTintColor: '#818698',
        tabBarStyle: {backgroundColor: '#f3f3f6'},
        tabBarItemStyle: {width: 100, height: 90},
      }}>
      <Tab.Screen
        name="Hotels"
        options={{
          tabBarLabel: 'Hotels',
          tabBarShowIcon: true,
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="hotel" color={color} size={23} />
          ),
        }}
        component={Hotels}
      />
      <Tab.Screen
        name="Flights"
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="airplane-outline" color={color} size={25} />
          ),
        }}
        component={Flights}
      />
      <Tab.Screen
        name="Hotels1"
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="steering" color={color} size={25} />
          ),
        }}
        component={Hotels}
      />
      <Tab.Screen
        name="Hotels11"
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="steering" color={color} size={25} />
          ),
        }}
        component={Hotels}
      />
      <Tab.Screen
        name="Hotels111"
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="steering" color={color} size={25} />
          ),
        }}
        component={Hotels}
      />
    </Tab.Navigator>
  );
}

const Dashboard = () => {
  return <Tabs />;
};

export default Dashboard;
