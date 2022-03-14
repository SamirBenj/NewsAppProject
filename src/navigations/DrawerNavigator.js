import React,{useState} from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import { View,Image,Text, Touchable, TouchableOpacity } from 'react-native';
import FavoriteScreen from '../screens/favoritePage';
import { firebase } from '@react-native-firebase/auth';
import CreateScreen from '../screens/createScreen';
import ChatScreen from '../screens/feedsScreen';
import CategoryScreen from '../screens/category/categoryScreen';
const CustomTabBarButton=({ children, onPress})=>(
    <TouchableOpacity
    style={{
        top:-30,
        // bottom:10,
        // position: 'absolute',
        justifyContent:'center',
        alignItems:'center',

    }}
     onPress={onPress}

    >
        <View style={{width:70,height:70, borderRadius:35, backgroundColor:'red'}}>{children}</View>
    </TouchableOpacity>
);
const Tab = createMaterialBottomTabNavigator();

// const screenOptionStyle = {
//     headerShown = false
// }


const DrawerStackNavigator= ()=>{    

   
    return (
        <Tab.Navigator 
        initialRouteName="Home"
        // activeColor="#e91e63"

        barStyle={{ 
        // showLabel:true,
        // position:'absolute',
        backgroundColor: 'black',
        // bottom: 10,
        // left:20,
        // right:20,
        // elevation:3,
        // borderRadius:20,
        // height:70,
    }}
        >
            <Tab.Screen name="Home" component={Home} 

            options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                    <Image source={require('../assets/accueil.png')} 
                            resizeMode='contain'  
                            style={{width:25,height:25,tintColor:focused ?'white':'grey'}}>
                    </Image>
                    <Text style={{fontSize:12 ,padding:10}}></Text>
                </View>
                
            )}}
        
            >
            </Tab.Screen>
           
            <Tab.Screen name="Categories" component={CategoryScreen} options={{
                
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <Image source={require('../assets/menu.png')} 
                                resizeMode='contain'  
                                style={{width:25,height:25,tintColor:focused ?'white':'grey',}}>
                        </Image>
                        <Text style={{fontSize:12 ,padding:10}}></Text>
                    </View>
                )}}></Tab.Screen> 
        <Tab.Screen name="Publier" component={CreateScreen} 
            options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                    <Image source={require('../assets/plus-2.png')} 
                            resizeMode='contain'  
                            style={{width:30,height:30,tintColor:focused ?'white':'grey'}}>
                    </Image>
                    <Text style={{fontSize:12 ,padding:15}}></Text>
                </View>
            )}}>
            </Tab.Screen>
            <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
                
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <Image source={require('../assets/favoris.png')} 
                                resizeMode='contain'  
                                style={{width:30,height:30,tintColor:focused ?'white':'grey',}}>
                        </Image>
                        <Text style={{fontSize:12 ,padding:10}}></Text>
                    </View>
                )}}>
                </Tab.Screen>

            <Tab.Screen name="Chatting" component={ChatScreen} options={{
                
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                    <Image source={require('../assets/discuter.png')} 
                            resizeMode='contain'  
                            style={{width:30,height:30,tintColor:focused ?'white':'grey',}}>
                    </Image>
                    <Text style={{fontSize:12 ,padding:10}}></Text>
                </View>
            )}}></Tab.Screen>
        </Tab.Navigator>
          
          );
    
}
export default  DrawerStackNavigator;

// export default HomeStackNavigator;