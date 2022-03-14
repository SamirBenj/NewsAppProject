import React from "react";
import { View,StyleSheet, Text, Image } from "react-native";
import AvatarTile from "./avatarTile";

const FavoriteTile = ({item})=>{
// console.log(item.title)
    return (
        <View style={styles.tileContainer}>
            <Image
            source={{ uri:`${item.image}`}}
            style={{width:90, height:90,resizeMode:'cover',}}
            ></Image>
            <View style={{flexDirection:'column', paddingLeft:10}}>
                <Text style={styles.title}>{item.title} </Text>
                <Text style={styles.subtitleTile}>{item.nameSource} </Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tileContainer:{
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:10,
        // shadowColor: 'black',
        elevation: 9,
        padding: 10,
        margin:10,
        alignItems:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:15,
        width:250,
        // color:'white'
    },
    subtitleTile:{
        paddingTop:10,
        fontSize:15,
        // color:'white',
        fontWeight:'300'
    }
});
export default FavoriteTile;
