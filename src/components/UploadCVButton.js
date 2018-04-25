import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet, Modal, Button } from 'react-native';
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
                <TouchableOpacity style={styles.parentStyle} onPress={this.pickImage}>
                    <Image
                        source={{ uri: 'https://c1.staticflickr.com/1/954/27801178638_0c29dca5eb_t.jpg' }}
                        style={{ width: 80, height: 80, marginRight: 20, }} />
                    <View style={[styles.middleContent, { width: 400 }]}>
                        <Text style={{ fontWeight: 'bold', }}>
                            Image
                        </Text>
                        <Text style={{ fontSize: 12, marginTop: 5, }}>
                            Upload file using Image. {"\n"}
                        </Text>
                    </View>
                    <View style={[{ justifyContent: 'center', alignItems: 'flex-end', minWidth: 10 }]}>
                        <Image
                            source={{ uri: 'https://c1.staticflickr.com/1/897/41629797722_9fde74d00d_m.jpg' }}
                            style={[{ width: 10, height: 30, }]} />
                    </View>
                </TouchableOpacity>
                <View
                    style={{
                        borderBottomColor: '#ECECEC',
                        borderBottomWidth: 1,
                        marginBottom: 20,
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parentStyle: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 10,
    },
    textGrid: {
        textAlign: 'center'
    },
    middleContent: {
        flex: 1,
        justifyContent: 'center',
    }
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setResultAnalyst,
    }, dispatch)
}
export default connect(null, mapDispatchToProps)(UploadCVButton)
