import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from './components/Splash';
import Main from './components/Main';
import SubCommon from './common/subcommon/SubCommon';
import Common from './common/Common';
import Setting from './components/Setting';
import Calculation from './common/subcommon/Calculation';

const Stack=createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name='Main' component={Main} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name='Setting' component={Setting} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name='Common' component={Common} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name='SubCommon' component={SubCommon} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name='Calculation' component={Calculation} options={{headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default AppNavigator