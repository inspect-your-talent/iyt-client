import React, { Component} from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'
import LinkedInModal from 'react-native-linkedin'
import { setTokenLinkedin } from '../redux/main_redux/action'
import { bindActionCreators} from 'redux'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(255,255,255)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    margin: 16
  },
})

class LoginLinkedin extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { setTokenLinkedin} = this.props
    const { token_linkedin } = this.props.redux
    if (!token_linkedin) {
      return (
        <View style={styles.container}>
          <LinkedInModal
            clientID="81452pcu20usp6"
            clientSecret="YxRTxS5gmRsyhd1s"
            redirectUri="https://inspecta-201504.appspot.com/linkedin"
            onSuccess={token =>  {
              console.log(token)
              setTokenLinkedin(token)

            }}
            permissions={ ['r_basicprofile', 'r_emailaddress', 'w_share','rw_company_admin']}
            linkText="Login Linkedin"
            onError={ (err) => {
              console.log(err)
            }}
          />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text>Success Login Linkedin</Text>
        </View>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ setTokenLinkedin}, dispatch)
const mapStateToProps = (state) => {
  return {
    redux: state.reducer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginLinkedin)
