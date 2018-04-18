import React, { Component} from 'react'
import { View, StyleSheet } from 'react-native'

import LinkedInModal from 'react-native-linkedin'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

class LoginLinkedin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinkedInModal
          clientID="81452pcu20usp6"
          clientSecret="YxRTxS5gmRsyhd1s"
          redirectUri="https://inspecta-201504.appspot.com/linkedin"
          onSuccess={token => console.log(token)}
          permissions={ ['r_basicprofile', 'r_emailaddress', 'w_share','rw_company_admin']}
          linkText="Login Linkedin"
          onError={}
        />
      </View>
    )
  }
}

export default LoginLinkedin
