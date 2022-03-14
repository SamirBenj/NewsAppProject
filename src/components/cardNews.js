import firestore from '@react-native-firebase/firestore';
import React from 'react';
import {Text, View, Image,StyleSheet, ImageBackground, TouchableOpacity, ToastAndroid} from 'react-native';

const NewsCard = ({item, dataUser})=>{
var title = item.title;
var image = item.urlToImage;
var nameSource = item.source.name;
var publishedAt = item.publishedAt;
var author = item.author;
// console.log(author);
    return(
        <View style={styles.MainContainer}>
            <View style={{alignItems:'flex-end'}}>
               
            </View>
            
            <ImageBackground
            borderRadius={30}         
            style={styles.newsImage}
                source={{ uri:`${image}`}}
                resizeMode='contain'
                >
    <View style={{
                paddingRight:50, 
                paddingTop:6,
                
            }}>
    <TouchableOpacity onPress={()=>{
        firestore().collection('Users').doc(dataUser.uid).collection('Favoris').add({
            'title':title,
            'image':image,
            'nameSource':nameSource,
            'author':author,
            'description':item.description,

        }).then((result)=>{
            console.log('it work')
            ToastAndroid.show('Ajouté ! ✅',ToastAndroid.SHORT)
        })
    }}>
        <Image 
            source={require('../assets/favoris.png')} 
            style={{
                width:30, 
                height:30,
                tintColor:'red',
                // backgroundColor:'white',
                borderRadius:5,
                
                }}>

            </Image>
    </TouchableOpacity>
            </View>
                </ImageBackground>
                <View style={{backgroundColor:'white', bottom:-19, marginLeft:-20,marginRight:-20 ,borderRadius:10, padding:10}}>
                    <Text style={styles.title}>{title}</Text>

                    <View style={styles.subtitle}>
                    <Text style={{color:'grey'}}>{nameSource}</Text>
                    <Image source={require('../assets/next.png')} style={{width:30,height:30}}></Image>
                    <Text style={{width:100, color:'grey'}} numberOfLines={1}>{author}</Text>

                    </View>
                </View>
        </View>
    )
            }
// }#353839
const styles= StyleSheet.create({
    MainContainer:{
        backgroundColor: 'white',
        margin:20,
        padding:20,
        borderRadius:15,
        
    },
    title:{
        color:'black',
        fontWeight:'bold',
        textAlign:'center',
        fontSize: 15,
        textAlign:'left'
    },
    newsImage:{
        margin:5,
        height:130,
        width:'100%',
        borderRadius:20,
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    subtitle:{
        paddingTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
    }
})

export default NewsCard;