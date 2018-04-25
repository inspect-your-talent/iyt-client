import React, { Component } from 'react';
import { View, TouchableHighlight, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import { Facebook } from 'expo';
import * as c from '../config/constant';
import { provider } from '../config/firebase';
import { setFBTokenFunc, setFbId } from '../redux/main_redux/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Font } from 'expo';
import Logo from '../assets/img/SmallLogo.png';
import { Button, Icon, Text } from 'native-base';
import { Entypo } from '@expo/vector-icons';

class LoginFacebook extends Component {

    constructor() {
        super()
        this.state = {
            isLoginFB: false
        }
    }

    onSignInWithFacebook = async (e) => {
        const options = { permissions: ['public_profile', 'email', 'user_posts'], }
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(c.FACEBOOK_APP_ID, options);
        if (type === 'success') {
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            console.log(token)

            this.props.setFbId((await response.json()).id)

            this.setState({
                isLoginFB: true
            })
            this.props.setFBTokenFunc(token)
            this.props.navigation.navigate('Home')
        }
    }

    render() {
        return (
            <View style={[styles.mainLoginContent, styles.textCenter]}>
                <Image 
                    source={{ uri: 'https://c1.staticflickr.com/1/823/41666795381_1bc5e5b329_m.jpg' }}
                    style={{ width: 160, height: 80 }} 
                />
                <Text style={[styles.textCenter, styles.paddingContent]}>
                Inspecta is a mobile application that help recruiter to analyze their talent / job applicant based on their cv resume.
                </Text>
                <TouchableOpacity onPress={this.onSignInWithFacebook} style={ styles.LoginFB }>
                    <Text style={styles.TextBtnFB}>
                        Login with Facebook
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainLoginContent: {
        alignItems: 'center',
    },
    textCenter: {
        textAlign: 'center',
    },
    paddingContent: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 32,
    },
    LoginFB: {
        borderWidth: 2,
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 42,
        paddingLeft: 42,
        borderRadius: 50,
    },
    TextBtnFB: {
        fontSize: 16,
    },
})


const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setFBTokenFunc,
        setFbId
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginFacebook)
