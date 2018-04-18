import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Alert } from 'react-native';
import { Facebook } from 'expo';
import * as c from '../config/constant';
import { provider } from '../config/firebase';
import { setFBTokenFunc } from '../redux/main_redux/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class LoginFacebook extends Component {
    constructor() {
        super()
        this.state = {
            isLoginFB: false
        }
    }

    onSignInWithFacebook = async (e) => {
        const options = { permissions: ['public_profile', 'email'], }
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(c.FACEBOOK_APP_ID, options);
        if (type === 'success') {
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            console.log(token)
            Alert.alert(
                'Logged in!',
                `Hi ${(await response.json()).name}!`,
            );
            this.setState({
                isLoginFB: true
            })
            this.props.setFBTokenFunc(token)
        }
    }

    render() {
        return (
            <View>
                <Text> { this.state.isLoginFB } </Text>
                <TouchableHighlight onPress = { this.onSignInWithFacebook } >
                    <Text> Login Facebook </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setFBTokenFunc,
    }, dispatch)
}
 
export default connect(null, mapDispatchToProps)(LoginFacebook)
