import React, { useEffect } from "react";
import { View,Text, StyleSheet,Image } from "react-native";


const CategoryTile = ({item})=>{
    var category = item.nom;
    var urlImage = item.url;

    return(
        <View style={styles.MainContainer}>
            <Image
            style={{width:50,height:50}}
                source={{uri:`${urlImage}`}}
            >   
            </Image>
            <Text style={styles.categTitle}>{category}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    MainContainer:{
        backgroundColor:'white',
        padding:20,
        margin: 10,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center',
        borderRadius:20,
    },
    categTitle:{
        fontWeight:'bold',
        letterSpacing:1.0,
        fontSize:20,
        textTransform:'capitalize'
    },
});

export default CategoryTile