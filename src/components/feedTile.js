import React from 'react';
import { Text,StyleSheet,View,Image,TouchableOpacity } from 'react-native';
import {  useNavigation } from '@react-navigation/native';
import  Icon from 'react-native-vector-icons/AntDesign';
import {CommentOutlined} from '@ant-design/icons'
const FeedTile = ({item})=>{
    const navigation = useNavigation();
    return(
        <View style={styles.tileContainer}>
            <View style={styles.headline}>
                <Image
            source={{ uri:`${item.imageProfileUrl}`}}
            style={{width:45, height:45,borderRadius:50, resizeMode:'cover',}}
            ></Image>  
            <Text style={{fontWeight:'bold'}}>Samir Benjalloul</Text>  
            </View>
                     
            <View style={{flexDirection:'column'}}>
                <Text style={styles.title}>{item.title} </Text>
                <Text style={styles.subtitleTile}>{item.desciption} </Text>
            </View>
            <View style={styles.subHeadLine}>
                <TouchableOpacity onPress={()=>{navigation.navigate('CommentScreen',{ docTitle:item.title})}}>
                     <Image  
                source={require('../assets/commentaire.png')}
                style={{width:30,height:30}}
                ></Image>
            </TouchableOpacity>
{/*                
                 <Image  
                source={require('../assets/like.png')}
                style={{width:25,height:25}}
                ></Image> */}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
        tileContainer:{
            flexDirection:'column',
            backgroundColor:'white',
            borderRadius:10,
            // shadowColor: 'black',
            elevation: 9,
            padding: 10,
            margin:10,
        },
        subHeadLine:{
            margin:10,
            flexDirection:'row',
            justifyContent:'space-around'
        },
        headline:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
        },
        title:{
            marginTop:10,
            textAlign:'center',
            fontWeight:'bold',
            fontSize:15,
            textTransform:'uppercase',
            color:'black'
        },
        subtitleTile:{
            paddingTop:10,
            fontSize:15,
            // width:290,
            color:'grey',
            letterSpacing:1.5,
            fontWeight:'400',
            textAlign:'center'
        }
});
export default FeedTile;