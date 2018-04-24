import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class componentName extends Component {
  render() {
    return (
      <View>
            <TouchableOpacity style={styles.gridItem} onPress={this.pickImage}>
                <Text style={styles.textGrid}>
                    Photo
                    </Text>
            </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    gridItem: {
        borderWidth: 2,
        width: 100,
        minHeight: 100,
    },
    textGrid: {
        textAlign: 'center'
    }
})
