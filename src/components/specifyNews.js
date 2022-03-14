import React from 'react';
import {Text, View, Image,StyleSheet, ImageBackground} from 'react-native';

const SpecificNews = ({item})=>{
var title = item.title;
var image = item.urlToImage;
var nameSource = item.source.name;
var publishedAt = item.publishedAt;
var author = item.author;
// console.log(image);
    return(
        // <View style={styles.MainContainer}>
            <View style={{ 
                backgroundColor:'white',
                margin:10,
                alignItems:'center',
                borderRadius:20
        // justifyContent:'flex-end',
        // flexDirection:'column',
        }}>
            <Image     
            style={styles.newsImage}
                source={{ uri:`${image}`}}
                resizeMode='contain'
                borderRadius={30}
                >
                </Image>
                <View style={{backgroundColor:'white',width:230,flexDirection:'column'}}>
                    <Text numberOfLines={3} style={styles.title}>{title}</Text>

                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around', width:230,margin:5}}>
                     <Text> {nameSource}</Text>
                     <Text style={{width:50}} numberOfLines={1}>{author}</Text>

</View>
                </View>
        // </View>
    )
}
const styles= StyleSheet.create({
    MainContainer:{
        // backgroundColor: 'white',
        margin:10,
        padding:10,
        borderRadius:20,
        // width:300,
        // height:200,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        color:'black',
        fontWeight:'500',
        textAlign:'center',
        fontSize: 13,
        letterSpacing:1,
        bottom:10,
        
        
    },
    newsImage:{
        // borderRadius:50,
        justifyContent:'flex-end',
        alignItems:'center',
        margin:20,
        height:110,
        width:'100%',
       
        
        
    }
})

export default SpecificNews;