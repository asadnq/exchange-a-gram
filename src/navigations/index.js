import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Login from '../screens/Auth/Login';
import Home from '../screens/Main/Home';
import CreatePost from '../screens/Main/CreatePost';
import AuthLoading from '../screens/Auth/AuthLoading';

const AuthStack = createStackNavigator(
    {
        Login: {
            screen: Login
        }
    }
)

const MainTab = createBottomTabNavigator(
    {
        Home: {
            screen: Home
        },
        CreatePost: {
            screen: CreatePost
        }
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;

                let iconName;

                if(routeName === 'Home') {
                    iconName = 'home';
                } else {
                    iconName = 'add';
                }
                return <Icon name={iconName} size={32} color={tintColor} />
            }
        }),
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeTintColor: '#222',
            inactiveTintColor: '#555'
        }
    }
)

const MainStack = createStackNavigator(
    {
        MainTab: {
            screen: MainTab 
        }
    },
    {
        initialRouteName: 'MainTab'
    }
)

const MainSwitch = createSwitchNavigator(
    {
        Auth: {
            screen: AuthStack
        },
        Main: {
            screen: MainStack
        },
        AuthLoading: {
            screen: AuthLoading
        }
    },
    {
        initialRouteName: 'Main'
    }
)

const RootNavigation = createAppContainer(MainSwitch)

export default RootNavigation