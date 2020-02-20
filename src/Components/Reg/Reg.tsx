import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { TEXT_COLOR_RED, SHADOW_COLOR } from '../../constants/constants';
import { Radio } from '../Radio/Radio';
import SegmentedControlTab  from 'react-native-segmented-control-tab';
import { Button } from '../Button/Button';

export const Reg = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  
  const handleIndexChange = index => {
    setSelectedIndex(index);
  }

  return(
   <ScrollView>
      <View style={{display: 'flex', alignItems: 'center'}}>
      <View style={{width: '90%'}}>
        <View style={{marginTop: 30, marginBottom: 60}}>
          <Text style={style.title}>
            Регистрация
          </Text>
        </View>
        <View>
          <View style={style.input_wrapper}>
            <View>
              <Text style={style.input_label}>Введите имя</Text>
            </View>
            <View>
              <TextInput placeholderTextColor="#b79b99"  placeholder={'Иванов Иван'} style={style.input}></TextInput>
            </View>
          </View>
          <View style={style.input_wrapper}>
            <View>
              <Text style={style.input_label}>Введите номер телефона</Text>
            </View>
            <View>
              <TextInput placeholderTextColor="#b79b99"  placeholder={'+7 (999) 123 45 78'} style={style.input}></TextInput>
            </View>
          </View>
          <View style={style.input_wrapper}>
            <View>
              <Text style={style.input_label}>Введите e-mail</Text>
            </View>
            <View>
              <TextInput  placeholderTextColor="#b79b99" placeholder={'user@somedomain.com'} style={style.input}></TextInput>
            </View>
          </View>
          <View style={style.input_wrapper}>
            <View>
              <Text style={style.input_label}>Выберете пол</Text>
            </View>
            <View>
              <SegmentedControlTab 
              values={["Мужской", "Женский"]} 
              selectedIndex={selectedIndex} 
              onTabPress={handleIndexChange}
              activeTabStyle={{backgroundColor: '#A68582', borderRadius: 6}}
              tabTextStyle={{fontSize: 13, color: 'rgba(75,7,0,.45)'}}
              tabStyle={{borderWidth: 0, borderColor: '#fff',paddingVertical: 10}}
              ></SegmentedControlTab>
            </View>
          </View>
          <View style={style.input_wrapper}>
            <View>
              <Text style={style.input_label}>Укажите дату рождения</Text>
            </View>
            <View>
              <TextInput placeholderTextColor="#b79b99" placeholder={'01/01/1990'} style={style.input}></TextInput>
            </View>
          </View>
          <View style={style.input_wrapper}>
            <Radio data={'Принимаю условия'}/>
          </View>
          <View>
            <Button>Зарегистрироваться</Button>
          </View>
        </View>
      </View>
    </View>
   </ScrollView>)
}

const style = StyleSheet.create({
  input: {
    paddingBottom: 3,
    borderBottomColor: TEXT_COLOR_RED,
    borderBottomWidth: 1,
  },
  title: {fontSize: 16, fontWeight: 'bold', color: TEXT_COLOR_RED, textTransform: 'uppercase'},
  input_label: {
    fontSize: 13,
    color: TEXT_COLOR_RED,
    marginBottom: 10
  },
  input_wrapper: {
    marginBottom: 20
  }
})