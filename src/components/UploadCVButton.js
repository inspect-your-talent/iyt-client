import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet, Modal } from 'react-native';
import { ImagePicker } from 'expo';
import axios from '../axios';

class UploadCVButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            modalVisible: false
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
        this.setState({
            modalVisible: true
        })
        let localUri = this.state.image;
        let filename = localUri.split('/').pop();
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;
        let formData = new FormData();
        formData.append('image', { uri: localUri, name: filename, type });
        axios.post('/upload-cv', formData)
            .then((data) => {
                this.setState({
                    modalVisible: false
                })
                alert('Upload completed!');
                console.log(data.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <View>
                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}
                    style={styles.modalContainer}>
                    <View>
                        <Text style={styles.modalText}>Uploading...</Text>
                    </View>
                </Modal>
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
        width: 200,
        height: 50,
        backgroundColor: '#841584',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalText: {
        fontSize: 18
    }
})

export default UploadCVButton;