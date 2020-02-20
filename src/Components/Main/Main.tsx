import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import { Action } from '../Action/Action';
import { HeaderLayout } from '../Header/Header';
import { Ionicons, EvilIcons, Foundation, FontAwesome } from '@expo/vector-icons';
import { Profile } from '../Profile/Profile';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Info } from '../Info/Info';
import { Feather } from '@expo/vector-icons';
import { COLOR_BLACK, TEXT_COLOR_RED, COLOR_WHITE } from '../../constants/constants';
import { Map } from '../Map/Map';
import { MenuPage as Menu } from '../Menu/Menu';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { addNavigationHelpers } from 'react-navigation';


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

interface IProps {
  dispatch: any;
  navigation: any;
}

class Navigator extends React.Component<IProps> {
  render() {
    return(
      <NavigationContainer>
        <Tab navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.navigation
        })}/>
      </NavigationContainer>
    )
  }
}

// export default createAppContainer(Tab);

const mapStateToProps = state => {
  navigation: state.navigation
}

export default connect(mapStateToProps)(Navigator);

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