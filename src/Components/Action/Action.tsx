import React from 'react';
import {View, Image, StyleSheet, ScrollView, Platform, ImageBackground} from 'react-native';
const img1 = require('../../assets/1.png');
const img2 = require('../../assets/2.png');
const img3 = require('../../assets/ForDelete/3.png');

export const Action = () => {
  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.wrapper}>
          <ImageBackground source={img1} style={style.img}></ImageBackground>
        </View>
        <View style={style.wrapper}>
          <ImageBackground source={img2} style={style.img}></ImageBackground>
        </View>
        <View style={style.wrapper}>
          <ImageBackground source={img3} style={style.img}></ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 5,
    backgroundColor: '#fff'
  },
  wrapper: {
    width: '90%',
    height: 220,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 6,
    overflow: 'hidden',
    // borderColor: '#000',
    // borderWidth: 1,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowRadius: 3,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 3},
      },
      android: {
        shadowColor: '#000',
        shadowRadius: 3,
        shadowOpacity: 0.3,
        shadowOffset: { width:3, height: 3},
      }
    })
    
  },
  img: {
    width: '100%',
    height: 220,
    borderRadius: 6,
    overflow: 'hidden',
  },
});
