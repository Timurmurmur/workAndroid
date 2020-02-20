import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from '../Button/Button';
import { TEXT_COLOR_RED } from '../../constants/constants';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderLayout } from '../Header/Header';

export const Bonus = () => {
  return(
    <ScrollView>
      <View style={{display: 'flex', alignItems: 'center',width: '100%', paddingBottom: 10}}>
        <Image source={require('../../assets/qrcode.png')}/>
        <View style={{width: '80%', alignItems: 'center'}}>
          <Text style={{color: TEXT_COLOR_RED, fontSize: 15}}>Для начисления балов приложите QR код к сканеру при покупке</Text>
        </View>
        <View style={{width: '80%'}}>
          <Button>ГОТОВО</Button>
        </View>
      </View>
    </ScrollView>
  )
}
