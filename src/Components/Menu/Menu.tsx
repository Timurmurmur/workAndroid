import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Bonus } from '../Bonus/Bonus';
import { HeaderLayout, Header } from '../Header/Header';
import { COLOR_WHITE, TEXT_COLOR_RED } from '../../constants/constants';
import { Info } from '../Info/Info';
import { FeedBack } from '../FeedBack/FeedBack';
import { News } from '../News/News';
import { Terms } from '../Terms/Terms';
import { Condition } from '../Condition/Condition';
import { Settings } from '../Settings/Settings';
import { Confidential } from '../Confidential/Confidential';
const Stack = createStackNavigator();


const Menu = ({navigation}) => {
  console.log(navigation)
  const goToRoute = (routeName) => {
    navigation.navigate(routeName)
  }

  return(
    <View style={style.container}>
      <View style={style.item}>
        <Text onPress={e => goToRoute('Bonus')} style={style.link}>Бонусная система</Text>
      </View>
      <View style={style.item}>
        <Text onPress={e => goToRoute('Info')} style={style.link}>О нас</Text>
      </View>
      <View style={style.item}>
        <Text onPress={e => goToRoute('FeedBack')} style={style.link}>Оставить отзыв</Text>
      </View>
      <View style={style.item}>
        <Text onPress={e => goToRoute('News')} style={style.link}>Новости и акции</Text>
      </View>
      <View style={style.item}>
        <Text onPress={e => goToRoute('Terms')} style={style.link}>Пользовательское соглашение</Text>
      </View>
      <View style={style.item}>
        <Text onPress={e => goToRoute('Confidential')} style={style.link}>Политика конфиденциальности</Text>
      </View>
      <View style={style.item}>
        <Text onPress={e => goToRoute('Contacts')} style={style.link}>Контакты</Text>
      </View>
      <View style={style.item}>
        <Text onPress={e => goToRoute('Settings')} style={style.link}>Настройки</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLOR_WHITE
  },
  item: {
    borderBottomColor: 'rgba(75,6,0,.4)',
    borderBottomWidth: 1,
  },
  link: {
    paddingBottom: 14,
    color: TEXT_COLOR_RED,
    fontSize: 13,
    marginTop: 10
  }
})

export const MenuPage: React.FC = () => {
  return(
    <Stack.Navigator initialRouteName={"Menu"} 
    screenOptions={
      {cardStyle: {backgroundColor: COLOR_WHITE}, 
      header: ({scene, previous, navigation}) => {
        const { options } = scene.descriptor;
        const title = 
          options.headerTitle !== undefined
            ? options.headerTitle
            : options.title !== undefined
            ? options.title
            : scene.route.name;

            return(
              <Header navigation={navigation} leftButton={previous ? true : false}/>
            )
      }}}>
      <Stack.Screen name="Bonus" component={Bonus} options={{title: 'Бонусная система'}}/>
      <Stack.Screen name="Menu" component={({navigation}) => {return(<Menu navigation={navigation}/>)}}/>
      <Stack.Screen name="Info" component={Info}/>
      <Stack.Screen name="FeedBack" component={FeedBack}/>
      <Stack.Screen name="News" component={News}/>
      <Stack.Screen name="Terms" component={Terms} />
      <Stack.Screen name="Confidential" component={Confidential}/>
      <Stack.Screen name="Contacts" component={({navigation}) => {return <Text>Контакты</Text>}}/>
      <Stack.Screen name="Settings" component={Settings}/>
    </Stack.Navigator>
  )
}