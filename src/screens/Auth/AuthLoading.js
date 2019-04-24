import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import { NavigationEvents } from 'react-navigation';

class AuthLoading extends React.Component {
    constructor(props) {
        super(props);
    }

    _toMainStack = () => {
        this.props.navigation.navigate('Home')
    }
    
    _toLoginScreen = () => {
        alert('auth error');
        this.props.navigation.navigate('Login');
    }

    render() {
        return(
            <View>
                <NavigationEvents onDidFocus={() => this.props.isAuthenticated ? this._toMainStack() : this._toLoginScreen()}
                />
                <ActivityIndicator />
            </View>
        );
    }
}

const mapState = state => {
    return {
        isAuthenticated: state.user.isAuthenticated
    }
}

export default connect(mapState)(AuthLoading)