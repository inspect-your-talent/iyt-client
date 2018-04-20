import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, } from 'react-native';
import { Camera, Permissions } from 'expo';
import axios from '../axios';

export default class CameraCV extends Component {
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
            axios.post('/upload-cv', formData)
                .then((data) => {
                    alert('Upload completed!');
                    console.log(data.data.data)
                })
                .catch(err => {
                    console.log(err, ' ini error')
                    alert('Upload failed!');
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
                        <View>

                            <TouchableOpacity
                                style={{
                                    flex: 0.1,
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    this.setState({
                                        type: this.state.type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back,
                                    });
                                }}>
                                <Text
                                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                                    {' '}Flip{' '}
                                </Text>
                                
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={ this.snap }>
                                <Text> SNAP </Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            );
        }

    }
}
