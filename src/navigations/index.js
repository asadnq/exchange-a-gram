import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Login from '../screens/Login/Login.container';
import AuthLoading from '../screens/Auth/AuthLoading';
import Home from '../screens/Home/Home.container';
import Profile from '../screens/Profile/Profile.container';
import CreatePost from '../screens/Main/CreatePost';
import PostDetail from '../screens/Main/PostDetail';
import PostComment from '../screens/Main/PostComment';

const AuthStack = createStackNavigator({
  Login: {
    screen: Login
  }
});

const HomeStack = createStackNavigator({
  Home: {
    screen: Home
  }
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile
  }
});

const CreatePostStack = createStackNavigator({
    CreatePost: {
      screen: CreatePost,
    }
})

const MainTab = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const iconName = focused ? 'home' : 'home';
          return <Icon name={iconName} size={32} outlined />;
        }
      })
    },
    CreatePost: {
      screen: CreatePostStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const iconName = focused ? 'add' : 'add';
          return <Icon name={iconName} size={32} />;
        }
      })
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const iconName = focused ? 'person' : 'person';
          return <Icon name={iconName} size={32} />;
        }
      })
    }
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: '#222',
      inactiveTintColor: '#555'
    }
  }
);

const MainStack = createStackNavigator(
  {
    MainTab: {
      screen: MainTab,
      navigationOptions: {
        header: null
      }
    },
    PostDetail: {
      screen: PostDetail
    },
    PostComment: {
      screen: PostComment
    }
  },
  {
    initialRouteName: 'MainTab'
  }
);

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
);

const RootNavigation = createAppContainer(MainSwitch);

export default RootNavigation;