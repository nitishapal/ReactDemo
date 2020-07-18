import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const DetailScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>DetailScreen screen</Text>
      <Button
        title="go to detail screen..again"
        onPress={() => navigation.push('Detail')}
      />
      <Button
        title="go to home screen"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="go Back" onPress={() => navigation.goBack()} />
      <Button
        title="go to the first screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default DetailScreen;
