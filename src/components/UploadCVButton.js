import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet, Modal } from 'react-native';
import { ImagePicker } from 'expo';
import axios from '../axios';
import { setResultAnalyst } from '../redux/main_redux/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class UploadCVButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        }
    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true
        });
        console.log(result);
        if (!result.cancelled) {
            this.setState({ image: result.uri });
            this.uploadCv();
        }
    };

    uploadCv = async () => {

        let localUri = this.state.image;
        let filename = localUri.split('/').pop();
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;
        let formData = new FormData();
        formData.append('image', { uri: localUri, name: filename, type });

        this.props.navigation.navigate('WaitingUploadCv')

        axios.post('/upload-cv', formData)
            .then((data) => {
                alert('Upload completed!');
                this.props.navigation.navigate('Profile')
                this.props.setResultAnalyst(data.data.data)
                console.log(data.data.data)
            })
            .catch(err => {
                console.log(err, ' ini error')
                alert('Upload failed!');
                this.props.navigation.navigate('Home')

            })
    }

    render() {
      console.log('this props', this.props)
        return (
            <View>
                {this.state.image &&
                    <Image
                        source={{ uri: this.state.image }}
                        style={{ width: 200, height: 200 }} />}
                <TouchableOpacity
                    onPress={this.pickImage}
                    style={styles.buttonUpload}>
                    <Text style={styles.buttonText}> Upload CV </Text>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    buttonUpload: {
        width: '100%',
        height: 50,
        backgroundColor: '#841584',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white'
    }
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setResultAnalyst,
    }, dispatch)
}
export default connect(null, mapDispatchToProps)(UploadCVButton)
