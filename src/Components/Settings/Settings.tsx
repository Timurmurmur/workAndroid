import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { styles } from '../Condition/Condition';
import { Radio } from '../Radio/Radio';

export const Settings:React.FC = () => {
  return(
    <ScrollView>
      <View style={{flex: 1, padding: 20}}>
        <View style={{marginBottom: 40}}>
          <Text style={styles.title}>Настройки</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <View style={{flex: 5}}>
            <Text style={{fontSize: 13, lineHeight: 16,}}>Получать уведомления о новостях и акциях</Text>
          </View>
          <View style={{flex: 1}}>
            <Radio data={''}/>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}