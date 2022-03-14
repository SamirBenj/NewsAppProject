import React from 'react'
import { StyleSheet,View,Text, Image } from 'react-native';
const CommentTile = ({item})=>{
    // console.log(item[0]['desciption'])
    return (
        <View style={styles.CardContainer}>
        <View style={styles.NameAvatar}>
        <Image
            source={{ uri:`${item.imageUrl}`}}
            style={{width:30, height:30,borderRadius:50, esizeMode:'cover',}}
            ></Image>  
            <Text style={{
                textTransform:'capitalize',
                marginLeft:20,
                color:'black', 
                fontSize:17
                }}>{item.name}</Text>
        </View>
        <Text style={styles.subtitle}>{item.comment}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    CardContainer:{
        backgroundColor:'white',
        borderRadius:20,
        margin:20,
        padding:15,
    },
    NameAvatar:{
        flexDirection:'row',
        alignItems:'center'
    },
    subtitle:{
        marginTop:15,
        fontSize:15,
        fontWeight:'400'

    }
})

export default CommentTile