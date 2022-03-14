import React,{useEffect, useState} from 'react';
import { StyleSheet, View,Text, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { firebase } from "@react-native-firebase/auth";
import { FlatList, TextInput } from 'react-native-gesture-handler';
import CommentTile from '../components/commentTile';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';

const CommentScreen=({route})=>{
    const {docTitle} = route.params;

    // console.log(docTitle)
    const [commentText,setCommentText]= useState('');
    const [userData, setUserData] = useState('');    
    const [commentsData, setCommentData]=useState([]);
    const [isLoading, setLoading] = useState(true);
    
    const fetchComment = async (uid) => {
        const unsubscribe = firestore().collection('feeds').doc(`${docTitle}`).collection('comments').orderBy('timestamp','asc').onSnapshot(snap => {
            const data = snap.docs.map(doc => doc.data())
            setCommentData(data)
            console.log(data[1])
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
        fetchComment(dataUser.uid)
    
    },[]);
    return(
            <View style={styles.MainContainer}>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-around',
                    marginBottom:10
                    }}>
                    <TextInput 
                    style={{
                        flexDirection:'column-reverse',
                        }} 
                    onChangeText={(value)=>setCommentText(value)}
                    value={commentText}
                    placeholder='Votre Commentaire ..'>
                    </TextInput>
                    <Button title='Publier' onPress={()=>{
                        firestore().collection('feeds')
                        .doc(docTitle)
                        .collection('comments').doc().set({
                            'name':userData.displayName,
                            'comment':commentText,
                            'timestamp':Date.now(),
                            'imageUrl':userData.photoURL
                        }).then((value)=>{
                            console.log('it work');
                            setCommentText('')
                            dismissKeyboard();
                        }).catch((error)=>{
                            console.log(error);
                            console.log("il y'a une erreur");
                        });
                    }}></Button>
                </View>
                <FlatList
                style={{flexDirection:'column-reverse'}}
                data={commentsData}
                renderItem={({item})=><CommentTile item={item}></CommentTile>}
                >

                </FlatList>
            </View>
    );
}

const styles = StyleSheet.create({
    MainContainer:{
        flex:1,
        flexDirection:'column-reverse'
    },
   
});

export default CommentScreen