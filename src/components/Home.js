// External Dependencies
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Internal Dependencies
import theme from './theme';

// Component Definition
const Home = () => (
  <View style={styles.home}>
    <Text style={styles.text}>DrumFun</Text>
  </View>
);

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  text: {
    fontFamily: 'Changa-Regular',
    fontSize: 40,
    fontWeight: '500',
    textAlign: 'center',
    color: theme.black,
  },
});

export default Home;
