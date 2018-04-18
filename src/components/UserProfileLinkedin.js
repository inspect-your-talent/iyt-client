import React, { Component } from 'react';
import {View, Text} from 'react-native'
import { bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { getProfileLinkedin } from '../redux/main_redux/action'

class LinkedinUserProfile extends Component {
  componentDidUpdate(){
    const { token_linkedin } = this.props.redux
    if (!token_linkedin){
      console.log('no token')
    }else{
      const {access_token} = this.props.redux.token_linkedin
      this.props.getProfileLinkedin(access_token)
    }
  }

  

  render() {
    const {profil_linkedin} = this.props.redux
    // console.log(profil_linkedin.firstName)
      return (
        <View>
          <Text>{profil_linkedin.firstName}</Text>
          <Text>{profil_linkedin.lastName}</Text>
        </View>
      )
  }
}
const mapStateToProps = (state) => {
  return {
    redux: state.reducer
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({getProfileLinkedin}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LinkedinUserProfile)
