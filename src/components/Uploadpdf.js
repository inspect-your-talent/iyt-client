import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import {DocumentPicker} from 'expo';
import { setResultAnalyst } from '../redux/main_redux/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from '../axios'
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
        let type = match ? `application/${match[1]}` : `pdf`;
        let formData = new FormData();
        formData.append('cv_file', { uri: localUri, name: filename, type });

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
        <Button
          title="Select Document"
          onPress={this._pickDocument}
        />
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setResultAnalyst,
    }, dispatch)
}
export default connect(null, mapDispatchToProps)(Uploadpdf)
