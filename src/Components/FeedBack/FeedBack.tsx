import React from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { Button } from '../Button/Button';
import {styles} from '../Condition/Condition';
import { TEXT_COLOR_RED } from '../../constants/constants';

export const FeedBack: React.FC = () => {
  return(
    <ScrollView>
      <View style={{flex: 1, padding: 20}}>
        <View style={{marginBottom: 40}}>
          <Text style={styles.title}>Оставьте отзыв</Text>
        </View>
        <View>
          <Text style={{color: TEXT_COLOR_RED}}>Введите текст отзыва</Text>
          <TextInput style={{borderBottomColor: TEXT_COLOR_RED, borderBottomWidth: 1, height: 100}}></TextInput>
        </View>
        <View>
          <Button>ОТПРАВИТЬ</Button>
        </View>
      </View>
    </ScrollView>
  )
}