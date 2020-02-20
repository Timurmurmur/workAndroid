import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TEXT_COLOR_RED, COLOR_BLACK, SHADOW_COLOR } from '../../constants/constants';

export const News = () => {
  return(
    <ScrollView>
      <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <View style={style.container}>
        <View style={{flex: 1, marginTop: 25, marginBottom: 20}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: TEXT_COLOR_RED}}>
          НОВОСТИ И АКЦИИ
          </Text>
        </View>
      <View style={{flex: 15}}>
            
        <View style={style.wrapper}>
          <ImageBackground style={{width: '100%', height: 150}} source={require('../../assets/ForDelete/something.png')}>
          </ImageBackground>
          <View style={{margin: 13}}>
            <View>
              <Text style={{marginBottom: 7, color: COLOR_BLACK, fontWeight: 'bold', fontSize: 10}}>01.01.2020</Text>
            </View>
            <View>
              <Text style={{fontSize: 10}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</Text>
            </View>
          </View>
        </View>
        <View style={style.wrapper}>
          <ImageBackground style={{width: '100%', height: 150}} source={require('../../assets/ForDelete/something.png')}>
          </ImageBackground>
          <View style={{margin: 13}}>
            <View>
              <Text style={{marginBottom: 7, color: COLOR_BLACK, fontWeight: 'bold', fontSize: 10}}>01.01.2020</Text>
            </View>
            <View>
              <Text style={{fontSize: 10}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</Text>
            </View>
          </View>
        </View>
        <View style={style.wrapper}>
          <ImageBackground style={{width: '100%', height: 150}} source={require('../../assets/ForDelete/something.png')}>
          </ImageBackground>
          <View style={{margin: 13}}>
            <View>
              <Text style={{marginBottom: 7, color: COLOR_BLACK, fontWeight: 'bold', fontSize: 10}}>01.01.2020</Text>
            </View>
            <View>
              <Text style={{fontSize: 10}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</Text>
            </View>
          </View>
        </View>
        <View style={style.wrapper}>
          <ImageBackground style={{width: '100%', height: 150}} source={require('../../assets/ForDelete/something.png')}>
          </ImageBackground>
          <View style={{margin: 13}}>
            <View>
              <Text style={{marginBottom: 7, color: COLOR_BLACK, fontWeight: 'bold', fontSize: 10}}>01.01.2020</Text>
            </View>
            <View>
              <Text style={{fontSize: 10}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</Text>
            </View>
          </View>
        </View>
      
      </View>
    </View>
    </View>  
    </ScrollView>
  )
}

export const style = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '90%'
  },
  image_container: {
    width: '100%',
    height: 200
  },
  image: {
  },
  wrapper: {
    overflow: 'hidden',
    marginHorizontal: -6,
    marginBottom: 20,
    ...Platform.select({
      android: {
        elevation: 6,
        borderWidth: 0,
        borderColor: SHADOW_COLOR,
      },
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
      }
    })
  }
});