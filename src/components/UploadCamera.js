import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class componentName extends Component {
  render() {
    return (
        <View>
            <TouchableOpacity style={styles.parentStyle} onPress={() => this.props.navigation.navigate('CameraCV')}>
                <Image
                    source={{ uri: 'https://c1.staticflickr.com/1/925/41630351612_16deea5ec7_t.jpg' }}
                    style={{ width: 80, height: 80, marginRight: 20, }} />
                />
                <View style={[styles.middleContent, { width: 400 }]}>
                    <Text style={{ fontWeight: 'bold', }}>
                        Photo
                     </Text>
                    <Text style={{ fontSize: 12, marginTop: 5, }}>
                        Upload file by take a picture. {"\n"}
                    </Text>
                </View>
                <View style={[{ justifyContent: 'center', alignItems: 'flex-end', minWidth: 10 }]}>
                    <Image
                        source={{ uri: 'https://c1.staticflickr.com/1/897/41629797722_9fde74d00d_m.jpg' }}
                        style={[{ width: 10, height: 30, }]} />
                    />
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
