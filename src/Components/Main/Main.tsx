import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import { Action } from '../Action/Action';
import { HeaderLayout } from '../Header/Header';
import { Ionicons, EvilIcons, Foundation, FontAwesome } from '@expo/vector-icons';
import { Profile } from '../Profile/Profile';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Info } from '../Info/Info';
import { Feather } from '@expo/vector-icons';
import { COLOR_BLACK, TEXT_COLOR_RED, COLOR_WHITE } from '../../constants/constants';
import { Map } from '../Map/Map';
import { MenuPage as Menu } from '../Menu/Menu';


// const Drawer = createDrawerNavigator({
//   Bonus: { 
//     screen: ({navigation}) => { return <HeaderLayout navigation={navigation}><Bonus/></HeaderLayout>}, 
//     navigationOptions : ({navigation}) => ({
//       title: 'Бонусная система',
//     }),
//   },
//   Info: { 
//     screen: ({navigation}) => { return <HeaderLayout navigation={navigation}><Info/></HeaderLayout>}, 
//     navigationOptions : ({navigation}) => ({
//       title: 'О нас',
//     }),
//   },
//   Feedback: { 
//     screen: ({navigation}) => { return <HeaderLayout navigation={navigation}><FeedBack/></HeaderLayout>}, 
//     navigationOptions : ({navigation}) => ({
//       title: 'Оставить отзыв',
//     }),
//   },
//   Actions: { 
//     screen: ({navigation}) => { return <HeaderLayout navigation={navigation}><News/></HeaderLayout>}, 
//     navigationOptions : ({navigation}) => ({
//       title: 'Новости и акции',
//     }),
//   },
//   Terms: { 
//     screen: ({navigation}) => { return <HeaderLayout navigation={navigation}><Terms/></HeaderLayout>}, 
//     navigationOptions : ({navigation}) => ({
//       title: 'Пользовательское соглашение',
//     }),
//   },
//   Condition: { 
//     screen: ({navigation}) => { return <HeaderLayout navigation={navigation}><Condition/></HeaderLayout>}, 
//     navigationOptions : ({navigation}) => ({
//       title: 'Пользовательское соглашение',
//     }),
//   },
//   Contacts: { 
//     screen: ({navigation}) => { return <HeaderLayout navigation={navigation}><View>Контакты</View></HeaderLayout>}, 
//     navigationOptions : ({navigation}) => ({
//       title: 'Контакты',
//     }),
//   },
//   Settings: { 
//     screen: ({navigation}) => { return <HeaderLayout navigation={navigation}><Settings/></HeaderLayout>}, 
//     navigationOptions : ({navigation}) => ({
//       title: 'Настройки',
//     }),
//   },
  
// }, {drawerType: 'front', contentOptions: {
//   inactiveTintColor: TEXT_COLOR_RED,
//   activeTintColor: TEXT_COLOR_RED,
//   labelStyle: {
//     borderBottomColor: TEXT_COLOR_RED,
//     borderBottomWidth: 1,
//     paddingBottom: 15,
//     paddingTop: 15,
//     fontWeight: 'normal',
//     fontSize: 13,
//     margin: 0,
//     marginHorizontal: 20,
//     width: '80%'
//   },
//   style: {
//     width: '100%'
//   },
//   drawerStyle: {
//     width: Dimensions.get('window').width
//   },
//   activeBackgroundColor: '#fff'
// }, navigationOptions: {}})

const Tab = createBottomTabNavigator({
  "Главная": { screen: ({navigation}) => { return <HeaderLayout navigation={navigation}><Action/></HeaderLayout>}, navigationOptions: (route) => ({tabBarIcon: ({focused, tintColor}) => {
    return <Ionicons name={'ios-home'} size={30} color={tintColor} />;
  }})},
  "Личный кабинет": { screen:  ({navigation}) => { return <HeaderLayout navigation={navigation}><Profile/></HeaderLayout>}, navigationOptions: (route) => ({tabBarIcon: ({focused, tintColor}) => {
    return <EvilIcons name={'user'} size={45} color={tintColor}/>;
  }})},
  "ИНФО": { screen:  ({navigation}) => { return <HeaderLayout navigation={navigation}><Info/></HeaderLayout>}, navigationOptions: (route) => ({tabBarIcon: ({focused, tintColor}) => {
    return <Feather name={'info'} size={30} color={tintColor} />;
  }})},
  "Карта": { screen:  ({navigation}) => { return <HeaderLayout navigation={navigation}><Map/></HeaderLayout>}, navigationOptions: (route) => ({tabBarIcon: ({focused, tintColor}) => {
    return <FontAwesome name={'map-o'} size={30} color={tintColor} />;
  }})},
  "Menu": { screen: Menu, navigationOptions: { title: '' }},
},{initialRouteName: "Главная", tabBarOptions: {style: {height: 61, display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: '125%'}, activeTintColor: TEXT_COLOR_RED, inactiveTintColor: COLOR_BLACK}});


// {tabBarIcon: ({focused, tintColor}) => {
//   return(<View style={{maxWidth: 26}}>
//     <Ionicons name={'ios-menu'} size={40} color={tintColor} />
//   </View>
export default createAppContainer(Tab);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    paddingLeft: 29,
    paddingRight: 29,
    paddingTop: 5,
    backgroundColor: COLOR_WHITE,
    textTransform: 'uppercase',
    minHeight: 60,
  },
});