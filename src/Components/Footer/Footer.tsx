import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const Footer = () => {
  return (
    <View style={style.footer_container}>
      <View style={style.footer_link}>
        <Image
          source={require('../../assets/footer_home.png')}
          style={{marginBottom: 6, width: 30, height: 28}}
        />
        <Text style={style.link_text}>Главная</Text>
      </View>
      <View style={style.footer_link}>
        <Image
          source={require('../../assets/user_icon.png')}
          style={{backgroundColor: '#fff', marginBottom: 6, width: 30, height: 28}}
        />
        <Text style={style.link_text}>личный кабинет</Text>
      </View>
      <View style={style.footer_link}>
        <Image
          source={require('../../assets/info_icon.png')}
          style={{backgroundColor: '#fff', marginBottom: 6,width: 30, height: 28}}
        />
        <Text style={style.link_text}>инфо</Text>
      </View>
      <View style={style.footer_link}>
        <Image
          source={require('../../assets/map.png')}
          style={{backgroundColor: '#fff', marginBottom: 6, width: 30, height: 28}}
        />
        <Text style={style.link_text}>карта</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  link_text: {
    fontSize: 10,
    textTransform: 'uppercase',
  },
  footer_container: {
    borderTopColor: 'rgba(0,0,0,.11)',
    borderTopWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 29,
    paddingRight: 29,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: 'rgb(255,255,255)',
  },
  footer_link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
