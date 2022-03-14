import React from "react";
import { StyleSheet, Text, View,Pressable } from "react-native";
import  Icon from 'react-native-vector-icons/AntDesign';

const WelcomeScreen =({navigation})=>{
    return (
        <View style={styles.mainContaier}>
                <Text style={{
                  fontSize:30,
                  fontWeight:'bold',
                  width:230,
                  color:'black',
              }}>
                  Bienvenue sur NewsApp
                </Text>
                <View style={{
                    backgroundColor:'black',
                    bottom:-120,
                    height:400, 
                    width:'100%', 
                    flexDirection:'column', 
                    justifyContent:'center',
                    borderTopLeftRadius:50,
                    borderTopRightRadius:50,
                    alignItems:'center',
                    }}>
        <Pressable
         style={styles.buttonStyle} 
         onPress={()=>{navigation.navigate('Login')}}>
                <View style={{flexDirection:'row', marginRight:20}}>
                   <Text style={{fontWeight:'bold' , fontSize:20,color:'black',textAlign:'center', width:'100%'}}>
                    Commencer
                    </Text>
                    <Icon style={{fontSize:25,paddingLeft:20,color:'black'}} name='arrowright'></Icon>

                </View>                   
                   
        </Pressable> 
                </View>
              
        </View>
    );
}

const styles = StyleSheet.create({
    mainContaier:{
    flex:1,
    backgroundColor: 'white',
    alignItems:'center',
    textAlign:'cenrer',
    justifyContent:'space-around',

  },
    buttonStyle:{
        // width:290,
        padding:15,
        alignItems:'center',
        borderRadius:10,
        width:240,
        backgroundColor:'white',
      
      }
});

export default WelcomeScreen