import React, {useEffect, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../../store/actions/userLoginAction";
import { Icon } from "react-native-elements";
import { color } from "react-native-reanimated";
import { Text } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MenuScreen from "../screens/MenuScreen";
import CartScreen from "../screens/CartScreen";
import realm from "../../store/realm";
import DetailMenuScreen from "../screens/DetailMenuScreen";
import SplashScreen from "../screens/SplashScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StartScreen = () => {
    return (
       <Tab.Navigator initialRouteName="Splash">
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options=
                {{
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                color: focused ? 'green' : 'grey',
                                fontSize: 12
                            }}> Home </Text>
                    ),
                    tabBarIcon : ({ focused }) => (
                        <Icon
                            name="home"
                            type="material-community"
                            color={ focused ? 'green' : 'grey'}
                            size={24}
                        />
                    ),
                    tabBarLabelPosition: 'below-icon',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'green'
                    }
                }}
            />

            <Tab.Screen
                name="Menu"
                component={MenuScreen}
                options=
                {{
                    tabBarLabel: ({ focused}) => (
                        <Text
                            style={{
                                color: focused ? 'green' : 'grey',
                                fontSize: 12
                            }}> Menu </Text>
                    ),
                    tabBarIcon : ({ focused }) => (
                        <Icon
                            name="microsoft-xbox-controller-menu"
                            type="material-community"
                            color={ focused ? 'green' : 'grey'}
                            size={24}
                        />
                    ),
                    tabBarLabelPosition: 'below-icon',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'green'
                    }
                }}
            />

            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options=
                {{
                    tabBarLabel: ({ focused}) => (
                        <Text
                            style={{
                                color: focused ? 'green' : 'grey',
                                fontSize: 12
                            }}> Cart </Text>
                    ),
                    tabBarIcon : ({ focused }) => (
                        <Icon
                            name="cart-outline"
                            type="material-community"
                            color={ focused ? 'green' : 'grey'}
                            size={24}
                        />
                    ),
                    tabBarLabelPosition: 'below-icon',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'green'
                    }
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options=
                {{
                    tabBarLabel: ({ focused}) => (
                        <Text
                            style={{
                                color: focused ? 'green' : 'grey',
                                fontSize: 12
                            }}> Profile </Text>
                    ),
                    tabBarIcon : ({ focused }) => (
                        <Icon
                            name="user-circle"
                            type="font-awesome-5"
                            color={ focused ? 'green' : 'grey'}
                            size={24}
                        />
                    ),
                    tabBarLabelPosition: 'below-icon',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'green'
                    }
                }}
            />
        </Tab.Navigator>
    )
}

const MainNavigator = () => {
   
    return (
        <NavigationContainer>

            
                <Stack.Navigator initialRouteName="Splash">
            
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{
                            headerShown: false,
                        }}
                    />

                    <Stack.Screen
                        name="Register"
                        component={RegisterScreen}
                        options={{
                            headerTitleAlign: 'center',
                            headerLeft: null
                        }}
                    />

                    <Stack.Screen
                        name="Menu"
                        component={MenuScreen}
                    />
                    
                    <Stack.Screen
                        name="Detail"
                        component={DetailMenuScreen}
                    />

                    <Stack.Screen
                        name="Profile"
                        component={ProfileScreen}
                    />

                    <Stack.Screen
                        name="Start"
                        component={StartScreen}
                        options={{
                            headerShown: false
                        }}
                    />

                    <Stack.Screen
                        name="Splash"
                        component={SplashScreen}
                        options={{
                            headerShown: false
                        }}
                    />


            </Stack.Navigator>
        
        </NavigationContainer>
    )
}

export default MainNavigator;