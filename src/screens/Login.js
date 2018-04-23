import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
// import LoginFacebook from '../components/LoginFacebook';
import { create } from 'domain';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login',
    };

    render() {
        return (
            <View style = { styles.loginContainer }>
                {/* <LoginFacebook /> */}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    loginContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    }
})
