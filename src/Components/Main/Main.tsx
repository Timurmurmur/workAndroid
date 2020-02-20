import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import { Action } from '../Action/Action';
import { HeaderLayout } from '../Header/Header';
import { Ionicons, EvilIcons, Foundation, FontAwesome } from '@expo/vector-icons';
import { Profile } from '../Profile/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Info } from '../Info/Info';
import { Feather } from '@expo/vector-icons';
import { COLOR_BLACK, TEXT_COLOR_RED, COLOR_WHITE } from '../../constants/constants';
import { Map } from '../Map/Map';
import { MenuPage as Menu } from '../Menu/Menu';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

interface IProps {
  dispatch: any;
  navigation: any;
}
interface IState {}
class Navigator extends React.Component<IProps, IState> {
  constructor(props){
    super(props);

    this.state = {}
  }
  componentDidMount(){
    console.log('props', this.props.navigation)
  }

  render() {
    return(
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Главная" tabBarOptions={{ style: {height: 61, display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: '125%', backgroundColor: '#fff'}, activeTintColor: TEXT_COLOR_RED, inactiveTintColor: COLOR_BLACK}}>
          <Tab.Screen name="Главная" component={({navigation}) => {return <HeaderLayout navigation={navigation}><Action/></HeaderLayout>}} 
          options={{tabBarIcon: ({focused, color}) => {return <Ionicons name={'ios-home'} size={30} color={color} />;}}}></Tab.Screen>
          <Tab.Screen name="Личный кабинет" component={({navigation}) => {return <HeaderLayout navigation={navigation}><Profile/></HeaderLayout>}}
          options={{tabBarIcon: ({focused, color}) => {return <EvilIcons name={'user'} size={45} color={color}/>}}}></Tab.Screen>
          <Tab.Screen name="ИНФО" component={({navigation}) => {return <HeaderLayout navigation={navigation}><Info/></HeaderLayout>}}
          options={{tabBarIcon: ({focused, color}) => {return <Feather name={'info'} size={30} color={color} />}}}></Tab.Screen>
          <Tab.Screen name="Карта" component={({navigation}) => {return <HeaderLayout navigation={navigation}><Map/></HeaderLayout>}}
          options={{tabBarIcon: ({focused, color}) => {return <FontAwesome name={'map-o'} size={30} color={color} />;}}}></Tab.Screen>
          <Tab.Screen name="Menu" component={Menu} options={{ title: ''}}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

const mapStateToProps = state => {
  navigation: state.navigation
}

export default connect(mapStateToProps)(Navigator);