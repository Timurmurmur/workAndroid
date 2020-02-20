import React from 'react';
import {View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { IMAGES } from '../Images/Img';
import { TEXT_COLOR_RED, SHADOW_COLOR } from '../../constants/constants';
import { ScrollView } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';
// import {YandexMapView,YandexMapKit} from 'react-native-yandexmapkit';
// 30ea34e5-64c5-421d-80ec-60f14c65c7d7
// YandexMapKit.setApiKey('30ea34e5-64c5-421d-80ec-60f14c65c7d7');
// floating apps

export const Map = () => {
  return(
    <ScrollView>
      <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <WebView style={{width: '100%', height: 300}} source={{html: '<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A24dcb119c79ae33bf7bffdd71e12e7485d71560d1575e279936cfea6290b0174&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=true"></script>'}}></WebView>
      </View>
      {/* <ImageBackground source={require('../../assets/map.png')} style={{width: '100%', height: 250}}/>  */}
      <View style={{padding: 20,paddingTop: 40, width: '100%'}}>
          <Text style={[styles.color_red, {fontSize: 14, fontWeight: 'bold'}]}>БЛИЖАЙШИЕ РЕСТОРАНЫ</Text>
          <View style={{ flex: 1, marginTop: 20 }}>
            <View style={{ justifyContent: 'space-between',flexDirection: 'row'}}>
              <View style={{ flex: 2 }}>
                <Image style={styles.shadow} source={IMAGES.GARRYS_LOGO} width={70} height={70}/>
              </View>
              <View style={{ flex: 6 }}>
                <Text style={[styles.color_red, {fontSize: 13, fontWeight: 'bold', marginBottom: 5}]}>Mr. Garry’s</Text>
                <Text style={{ fontSize: 13 }}>ТЦ ‘Гагаринский’ (ул. Набережная, 75)</Text>
                <Text style={{fontSize: 13 }}>Время работы: круглосуточно</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, marginTop: 20 }}>
            <View style={{ justifyContent: 'space-between',flexDirection: 'row'}}>
              <View style={{ flex: 2 }}>
                <Image style={styles.shadow} source={IMAGES.GARRYS_LOGO} width={70} height={70}/>
              </View>
              <View style={{ flex: 6 }}>
                <Text style={[styles.color_red, {fontSize: 13, fontWeight: 'bold', marginBottom: 5}]}>Mr. Garry’s</Text>
                <Text style={{ fontSize: 13 }}>ТЦ ‘Гагаринский’ (ул. Набережная, 75)</Text>
                <Text style={{fontSize: 13 }}>Время работы: круглосуточно</Text>
              </View>
            </View>
          </View>
          <View style={{display: 'flex', alignItems: 'center', marginTop: 25}}>
            <TouchableOpacity><Text style={{fontSize: 12, color: '#000', fontWeight: 'bold'}}>ПОКАЗАТЬ ВСЕ</Text></TouchableOpacity>
          </View>
        </View>
    </View>
    </ScrollView>
  )
}



const styles = StyleSheet.create({
  color_red: {
    color: TEXT_COLOR_RED
  },
  title : {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 17,
  },
  shadow: {
    shadowColor: SHADOW_COLOR,
    shadowRadius: 6,
    shadowOpacity: .1,
  }
})