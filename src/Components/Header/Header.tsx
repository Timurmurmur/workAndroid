import React, {useState} from 'react';
import {Text, View, Button, Image, StyleSheet, Dimensions} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { COLOR_BLACK, COLOR_WHITE, TEXT_COLOR_RED, BORDER_COLOR} from '../../constants/constants';
import { Drawer } from '../Drawer/Drawer';


export const HeaderLayout = ({navigation, children}) => {
  return(
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header navigation={navigation} />
      {children}
    </View>
  )
}

interface HeaderProps {
  navigation: any;
  leftButton?: boolean;
}

export const Header:React.FC<HeaderProps> = ({navigation,leftButton}) => {
  const { navigate, goBack } = navigation;
  console.log(navigate)

  const openMenu = () => {
    navigate('Menu')
  }

  return (
    <View style={style.container}>
      <View style={{flex: 1}}>
        <View style={{maxWidth: 26, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          {leftButton ? <View onTouchStart={goBack}><Ionicons name="md-arrow-back" size={30}/></View> : <View style={{maxWidth: 25}} onTouchStart={openMenu} ><Ionicons name="ios-menu" size={40}/></View>} 
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Image
          style={{width: 40, height: 40}}
          source={require('../../assets/logo.png')}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          flex: 1
        }}>
        <Text
          style={{
            fontSize: 24,
            color: TEXT_COLOR_RED,
            fontWeight: 'bold',
            marginBottom: 2,
          }}>
          256{' '}
        </Text>
        <FontAwesome name="ruble" size={20} color={'#A68582'}/>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 61,
    overflow: 'hidden',
  },
});
