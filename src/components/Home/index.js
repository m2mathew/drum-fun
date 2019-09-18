// External Dependencies
import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';

// Internal Dependencies
import theme from '../theme';

// Component Definition
const Home = () => {
  function handleClickButton() {
    console.log('button pressed!');
  }

  return (
    <View style={styles.home} testID="home-wrapper">
      <Text style={styles.text}>DrumFun</Text>
      <Button
        title="Load a Rudiment"
        onPress={handleClickButton}
      />
    </View>
  );
};

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
