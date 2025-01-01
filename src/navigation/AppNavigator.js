import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserDetailScreen from '../screens/user-details/UserDetailsScreen';
import UserListScreen from '../screens/user-list/UserListScreen';
import { Text, View } from 'react-native';

const Stack = createStackNavigator();

const AppNavigator = () => {
    console.log("in the app navigator");
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UserList" screenOptions={{headerShown: false}}>
                <Stack.Screen name="UserList" component={UserListScreen} />
                <Stack.Screen name="UserDetail" component={UserDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
