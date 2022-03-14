import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";

const DetailsNewsFavoris=({route})=>{
    const {data} = route.params;
    return(
        <View style={styles.MainContainer}>
            <Image   
            style={styles.newsImage}
                source={{ uri:`${data.image}`}}
                resizeMode='cover'
                ></Image> 
                <View style={styles.container}>
                <Text style={styles.MainTitle}>{data.title}</Text>

                <Text style={styles.subtitle}>{data.description}</Text>
                <View style={styles.subContainer }>
                    <Text style={styles.textAuthor}>{data.author}</Text>
                <Text style={styles.textAuthor}>{data.nameSource}</Text>
                </View>
                

                </View>           
               
            
        </View>
    );
}
const styles = StyleSheet.create({
    MainContainer:{
        flex:1,
    },
    subtitle:{
        margin:15,
        fontWeight:'400',
        letterSpacing:2.0,
        lineHeight:25,
    },
    subContainer:{
    flexDirection:'row', 
    justifyContent:'space-between', 
    margin:20,
    },
    textAuthor:{
        fontWeight:'bold',
        fontSize:15,
        color:'red'
    },
    MainTitle:{
        fontWeight:'bold',
        marginTop:30,
        marginLeft:15,
        fontSize:18,
        color:'black',
        letterSpacing:1.0

    },
    newsImage:{
        width:'100%',
        height:200,
        backgroundColor:'grey'
    },
    container:{
        backgroundColor:'white',
        // height:400,
        flex:2,
        marginTop:10,
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
    },
})

export default DetailsNewsFavoris