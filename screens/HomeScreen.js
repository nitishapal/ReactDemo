import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home screen</Text>
      <Button
        title="go to detail screen"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};
export default HomeScreen;