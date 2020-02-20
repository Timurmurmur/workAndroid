import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { TEXT_COLOR_RED, SHADOW_COLOR } from '../../constants/constants';
import { IMAGES } from '../Images/Img';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export const Info = () => {
  return(
   <ScrollView>
      <View style={{padding: 24, flex: 1}}>
        <View>
          <Text style={[styles.color_red,styles.title]}>О НАС</Text>
          <Text style={{fontSize: 13, marginBottom: 5}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
        <View style={{paddingTop: 45, width: '100%'}}>
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