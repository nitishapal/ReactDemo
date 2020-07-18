/* eslint-disable eol-last */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={Styles.container}>
      <Text>
        <Button title="click here" onPress={() => alert('Button clicked')} />
      </Text>
    </View>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
