import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';

class AuthLoading extends React.Component {
    constructor(props) {
        super(props);
        this.authenticate();
    }

    authenticate = () => {
        if(this.props.isAuthenticated) {
            this.props.navigation.navigate('Home')
        } else {
            this.props.navigation.navigate('Login')
        }
    }

    
    render() {
        return(
            <ActivityIndicator />
        );
    }
}

const mapState = state => {
    return {
        isAuthenticated: state.user.isAuthenticated
    }
}

export default connect(mapState)(AuthLoading)