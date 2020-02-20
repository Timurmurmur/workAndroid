import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

export const SideMenu = () => {
  return (
    <View style={style.sideMenu_container}>
      <Text>Timurmurmur</Text>
    </View>
  );
};

const style = StyleSheet.create({
  sideMenu_container: {
    backgroundColor: 'rgb(255,255,255)',
  },
});
