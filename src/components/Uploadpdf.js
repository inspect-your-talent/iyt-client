import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import {DocumentPicker} from 'expo';
import { setResultAnalyst } from '../redux/main_redux/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from '../axios';


class Uploadpdf extends React.Component {

    _pickDocument = async () => {
  	    let result = await DocumentPicker.getDocumentAsync({});
        console.log(result);
        if (!result.cancelled) {
            this.uploadCv(result.uri);
        }
  	}
    uploadCv = async (uri) => {

        let localUri =uri;
        let filename = localUri.split('/').pop();
        let match = /\.(\w+)$/.exec(filename);
        let type = 'application/pdf'
        let formData = new FormData();
        formData.append('cv_file', { uri: localUri, name: filename, type });
        console.log("FORM DATA ", formData)
        this.props.navigation.navigate('WaitingUploadCv')

        axios.post('/upload-pdf', formData)
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
    return (
      <View>
            <TouchableOpacity style={styles.parentStyle} onPress={this._pickDocument}>
                <Image
                    source={{ uri: 'https://c1.staticflickr.com/1/865/40958581714_6829e25d67_t.jpg' }}
                    style={{ width: 80, height: 80, marginRight: 20, }} />
                <View style={[styles.middleContent, { width: 400 }]}>
                    <Text style={{ fontWeight: 'bold', }}>
                        Document
                     </Text>
                     <Text style={{ fontSize: 12, marginTop: 5, }}>
                        Upload pdf file using from storage. {"\n"}
                     </Text>
                </View>
                <View style={[{ justifyContent: 'center', alignItems: 'flex-end', minWidth: 10}]}>
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
            ></View>
      </View>
    );
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

export default connect(null, mapDispatchToProps)(Uploadpdf)
