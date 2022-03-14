import React,{useState,useEffect}from 'react';
import { View,Text, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import FeedTile from '../components/feedTile';
import firestore from '@react-native-firebase/firestore';
import { firebase } from "@react-native-firebase/auth";
import  Icon from '@ant-design/icons';


const ChatScreen =({navigation})=>{
    const [userData, setUserData] = useState('');    
    const [feedsData, setFeedsData]=useState([]);
    const [isLoading, setLoading] = useState(true);

    const fetchFeeds = async (uid) => {
        const unsubscribe = firestore()
        .collection('feeds').orderBy('timestamp','desc').onSnapshot(snap => {
            const data = snap.docs.map(doc => doc.data())
            setFeedsData(data)
            // console.log(data)
            if (isLoading) {
                setLoading(false);
              }  
            });
          return ()=>unsubscribe();
      };
       
     useEffect(() => {
         //Recupere les donnée de l'utilisateur connéctée
        var dataUser = firebase.auth().currentUser;
        setUserData(dataUser)
        //Recuperer les feeds des utilisateur
        fetchFeeds(dataUser.uid)
    
    },[]);
    return(
        <View style={styles.MainContainer}>
            <Text style={styles.MainTitle}>Your Feeds 😁</Text>
           {
           isLoading?<Text>Veuillez Patientez .....</Text> :
           <FlatList 
           data={feedsData}
           style={{width:'100%'}}
            renderItem={({item})=>
            //  <TouchableOpacity onPress={()=>{navigation.navigate('CommentScreen',{docTitle:item.title})}}>
            <FeedTile item={item} data={navigation}></FeedTile>
            // </TouchableOpacity>
        }
            ></FlatList>
            }
        </View>
    );
}
const styles =StyleSheet.create({
    MainContainer:{
        flex:1,
        flexDirection:'column',
        alignItems:'center'
    },
    MainTitle:{
        fontWeight:'bold',
        fontSize:30,
        marginTop:20,
    },
})

export default ChatScreen;