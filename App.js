import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.container}>
            <Image></Image>
            <Text style={styles.bigFont}>Hello World!</Text>
            <Text style={styles.bigFont}>I'm the flash,...</Text>
            <Text style={styles.bigFont}>The fastest man alive..</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bigFont: {
    fontSize: 40,
    color: '#fff'
  },
  buttonStyle: {
    backgroundColor: '#fff',
    color: '#3498db',
    overlayColor: '#fff'
  },
  logo: {
    width: 200,
    height: 50,
  }
});
