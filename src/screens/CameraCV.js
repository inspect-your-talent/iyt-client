import React, { Component } from 'react';
import { View, TouchableOpacity, } from 'react-native';
import {Button, Text} from 'native-base'
import { Camera, Permissions } from 'expo';
import axios from '../axios';
import { setResultAnalyst } from '../redux/main_redux/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CameraCV extends Component {
    constructor() {
        super()
        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back
        }
    }

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === 'granted'
        })
    }

    snap = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            let localUri = photo.uri
            let filename = localUri.split('/').pop();
            let match = /\.(\w+)$/.exec(filename);
            let type = match ? `image/${match[1]}` : `image`;
            let formData = new FormData();
            formData.append('image', { uri: photo.uri, name: filename, type });
            console.log(formData, ' ini form data')
            console.log('masuk')
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
    };

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera ref={ref => { this.camera = ref }} style={{ flex: 1 }} type={this.state.type}>
                        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center',  }}>
                          <Button onPress={ this.snap } full>
                             <Text>Capture</Text>
                          </Button>
                        </View>
                    </Camera>
                </View>
            );
        }

    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setResultAnalyst,
    }, dispatch)
}
export default connect(null, mapDispatchToProps)(CameraCV)
