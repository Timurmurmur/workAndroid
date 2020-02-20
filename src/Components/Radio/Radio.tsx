import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TEXT_COLOR_RED, SHADOW_COLOR } from '../../constants/constants';


export const Radio = ({data}) => {
  const [radioChecker, setRadioChecker] = useState(false);
  
  const handleRadioChecker = () => {
    if (!radioChecker) {
      setRadioChecker(true);
    } else {
      setRadioChecker(false);
    }
  }
  
  return(
    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
      <View onTouchStart={handleRadioChecker} style={{width: 50,height: 28, backgroundColor: 'rgba(75,7,0,.45)', borderRadius: 19, display: 'flex', justifyContent: `${radioChecker ? 'flex-end' : 'flex-start'}`, flexDirection:'row'}}>
        <View style={{width: 28, height: 28,backgroundColor: '#fff', borderWidth: 1,borderColor: SHADOW_COLOR, borderRadius: 50}}></View>
      </View>
      <View style={{marginTop: 8, marginLeft: 15}}>
        <Text style={{
    fontSize: 13,
    color: TEXT_COLOR_RED,
    marginBottom: 10
  }}>{data}</Text>
      </View>
    </View>
  )
}
