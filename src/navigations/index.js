import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/Auth/Login';
import Home from '../screens/Main/Home';
import AuthLoading from '../screens/Auth/AuthLoading';

const AuthStack = createStackNavigator(
    {
        Login: {
            screen: Login
        }
    }
)

const MainStack = createStackNavigator(
    {
        Home: {
            screen: Home 
        }
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
        initialRouteName: 'Auth'
    }
)

const RootNavigation = createAppContainer(MainSwitch)

export default RootNavigation