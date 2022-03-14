import { firebase } from "@react-native-firebase/auth";
import React from "react";
import { View ,StyleSheet,Image,Text, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';

const AvatarTile =({item})=>{
    const navigation = useNavigation();

    return (
        <View style={styles.avatar}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image   
                    style={styles.newsImage}
                    source={{ uri:`${item.photoURL}`}}
                    resizeMode='cover'>
                </Image>
                <View style={styles.subtitleAvatar}>
                    <Text style={{color:'grey', fontWeight:'400', textTransform:'uppercase'}}>WELCOME ! ,</Text>
                    <Text style={{color:'blue', fontWeight:'bold', textTransform:'uppercase',paddingTop: 5}}>{item.displayName}</Text>
                </View>
            </View>
            <View style={{justifyContent:'center'}}>
                <TouchableOpacity onPress={()=>{
                    firebase.auth().signOut().then((result)=>{
                        console.log('signing out');
                        navigation.navigate('WelcomeScreen');

                    }).catch((error)=>{
                        console.log(error);
                        console.log('not working');
                    });
                    }}>
                    <Image style={{height:30,width:30}} source={require('../assets/log-out.png')}></Image>
                </TouchableOpacity>
            </View>
    </View> 
    )
}

const styles =StyleSheet.create({
    subtitleAvatar:{
        margin:10,
        flexDirection:'column'
    },
    avatar:{
        flexDirection:'row',
        // width:'100%',
        margin:10,
        padding:10,
        backgroundColor: 'white',
        borderRadius:10,
        justifyContent:'space-between',
    }, 
    newsImage:{
        backgroundColor:'red',
        // borderRadius: 5*100,
        // margin:10,
        height:50,
        width:50,
        flexDirection:'row',
        
    },
})
export default AvatarTile;