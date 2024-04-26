import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeEkrani from '../Screens/HomeEkrani';
import KesfetEkrani from '../Screens/KesfetEkrani';
import ProfilEkrani from '../Screens/ProfilEkrani';
import GonderiEkleEkrani from '../Screens/GonderiEkleEkrani';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (

    <Tab.Navigator screenOptions={{
      /*headerShown : false*/
      tabBarActiveTintColor:'black'
  
  }}
    >
        
        <Tab.Screen name='AnaSayfa' component = {HomeEkrani}
        options={{
          tabBarLabel: ({color})=>(
            <Text style = {{color:color, fontSize:12, fontWeight:'bold', marginBottom:2}} >AnaSayfa</Text>
          ),
          tabBarIcon:({color,size})=>(
        <Entypo name="home" size={size} color={color} />

          )

        }}
        />


        <Tab.Screen name='Keşfet' component = {KesfetEkrani}
        
        options={{
          tabBarLabel: ({color})=>(
            <Text style = {{color:color, fontSize:12, fontWeight:'bold', marginBottom:2}} >Keşfet</Text>
          ),
          tabBarIcon:({color,size})=>(
            <FontAwesome name="search" size={24} color={color} />

          )

        }}

        />

        <Tab.Screen name='Gönderi' component = {GonderiEkleEkrani} 
        
        options={{
          tabBarLabel: ({color})=>(
            <Text style = {{color:color, fontSize:12, fontWeight:'bold', marginBottom:2}} >Gönderi</Text>
          ),
          tabBarIcon:({color,size})=>(
            <FontAwesome5 name="share-square" size={24} color={color}/>
          )

        }}
        
        />


        <Tab.Screen name='Profil' component = {ProfilEkrani} 
        
        options={{
          tabBarLabel: ({color})=>(
            <Text style = {{color:color, fontSize:12, fontWeight:'bold', marginBottom:2}} >Profil</Text>
          ),
          tabBarIcon:({color,size})=>(
            <FontAwesome name="user-circle-o" size={24} color={color} />

          )

        }}
        
        />

    </Tab.Navigator>

   
  )
}

export default TabNavigation