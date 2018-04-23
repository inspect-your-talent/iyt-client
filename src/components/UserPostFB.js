import React, { Component } from 'react';
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {getUserPost} from '../redux/main_redux/action'

class UserPostFB extends Component {
  componentDidUpdate(){
    if(!this.props.redux.FBToken){
      console.log('no token')
    }else{
      this.props.getUserPost(this.props.redux.FBToken)
    }
  }
  render() {
    // console.log('this props', this.props.redux.user_FBPost)
    return (
      <View>

      </View>
    )
  }
};

const mapStateToProps = (state) => ({
  redux: state.reducer
})
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getUserPost
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserPostFB)
