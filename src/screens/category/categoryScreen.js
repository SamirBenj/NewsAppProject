import React from "react";
import { StyleSheet, View,FlatList,Text, TouchableOpacity } from "react-native";
import CategoryTile from "../../components/CategoryTile"

const CategoryScreen = ({navigation})=>{

    return(
        <View style={styles.MainContainer}>
            <View style={{backgroundColor:'white', borderRadius:15, padding:15, margin:10}}>
                <Text style={{
                    textAlign:'center', 
                    fontWeight:'bold', 
                    textTransform:'uppercase',
                    letterSpacing:1.0,
                    fontSize:20,
                    }}>Choissez Votre Categorie 😁</Text>

            </View>
            <View>
               <FlatList
            data={[
               { nom:'technology',url:'https://cdn-icons-png.flaticon.com/512/2037/2037801.png'},
               { nom:'general',url:'https://static.thenounproject.com/png/3857507-200.png'},
               { nom:'health', url:'https://play-lh.googleusercontent.com/5eLm7YTvVVBJ5o4cl7yXFlA5Pxn_oUKDpReyU6aRgcbeZvLwBoS8wfxYjDzYOAFDtbI'},
            ]}
            renderItem={({item})=>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('CategoryDetailScreen',{dataCateg: item.nom});
            }}>
            <CategoryTile item={item} ></CategoryTile>
            </TouchableOpacity>}
            ></FlatList> 
            </View>
            
        </View>
    );
}

export const styles = StyleSheet.create({
    MainContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-evenly'
    }
});

export default CategoryScreen