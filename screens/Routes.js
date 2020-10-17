import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Ionicons as Icon } from '@expo/vector-icons'

import Home from './Home/Home'

const Tab = createMaterialBottomTabNavigator()

export default function Routes (){
    return (

        <Tab.Navigator
            initialRouteName='Home'
            activeColor="#3284FF"
            inactiveColor="#434B56"
            barStyle={{ backgroundColor: '#1F1F1F' }}
        >
            <Tab.Screen 
                name='Home'
                component={Home}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Icon name="md-home" color={color} size={26} />
                    ),
                }}

            />
        </Tab.Navigator>
 
    );
}