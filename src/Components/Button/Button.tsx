import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TouchableOpacityProps } from 'react-native';
import { Text, StyleSheet } from 'react-native';

interface IButton extends TouchableOpacityProps{
}


export const Button: React.FC<IButton> = ({children, style, onPress}) => {
  return (<TouchableOpacity onPress={onPress}
  style={btnStyle.btn}>
      <Text style={btnStyle.btn__text}>{children}</Text>
    </TouchableOpacity>)
}

const btnStyle = StyleSheet.create({
  btn: {
    width: '100%', 
    borderColor: '#5E0902', 
    borderWidth: 1,
    padding: 16, 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: "center",
    borderRadius: 6,
    marginTop: 25  
  },
    btn__text: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: '#5E0902',
      fontSize: 15,
      
    }
})