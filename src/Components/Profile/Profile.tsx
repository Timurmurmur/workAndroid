import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { Button } from '../Button/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLOR_WHITE, TEXT_COLOR_RED, BORDER_COLOR } from '../../constants/constants';

interface IProps {
}
export const Profile: React.FC<IProps> = () => {


  return(
    <ScrollView style={{flex: 1, backgroundColor: COLOR_WHITE}}>
      <View style={styles.container}>
      <View style={styles.profile__wrapper}>
        <View style={styles.profile__image}>
          <Image source={require('../../assets/user_photo.png')}/>
        </View>
        <View>
          <Text style={[styles.profile__info, styles.profile__info_bold]}>Иванов Иван Иванович</Text>
          <Text style={styles.profile__info}>Тел.: +7 (999) 123 45 67</Text>
          <Text style={styles.profile__info}>E-mail: user@somedomain.com</Text>
          <Text style={styles.profile__info}>Дата рождения: 01.01.1990</Text>
        </View>
      </View>
      <View>
        <Text style={{color: TEXT_COLOR_RED, fontSize: 13, marginTop: 25}}>О себе</Text>
        <TextInput placeholder="Напишите что-нибудь о себе" style={styles.profile__input} onChange={(e) => {console.log(e)}}/>
        <Button onPress={(e) => {console.log(e)}}>Сохранить</Button>
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: COLOR_WHITE,
    paddingTop: 33,
    paddingHorizontal: 25
  },
  profile__wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  profile__image : {
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 50,
    marginRight: 15,
  },
  profile__info: {
    color: TEXT_COLOR_RED,
    fontSize: 13,
    marginBottom: 5,
  },
  profile__info_bold: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  profile__input: {
    borderBottomColor: TEXT_COLOR_RED,
    borderBottomWidth: 1,
    paddingBottom: 100,
    marginTop: 12,
  }
})