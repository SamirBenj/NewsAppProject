import React, { useState,useEffect } from 'react';
import { Button, StyleSheet, Text, View,TextInput, ToastAndroid} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { firebase } from "@react-native-firebase/auth";
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';

const CreateScreen=()=>{
    const [title, setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [userData, setUserData] = useState('');    

    //  console.log( Date().valueOf())
    useEffect(() => {
        var dataUser = firebase.auth().currentUser;
        setUserData(dataUser)
    }, [])
    
    return (
        <View style={styles.MainContainer}>
            <Text style={styles.mainTitle}>CREER VOTRE SUJET</Text>
            <View style={styles.formContainer}>
                <TextInput placeholder='Nom du sujet ...'
                style={{
                    backgroundColor:'white',
                    borderRadius:50,
                    }}
                    onChangeText={(value)=>setTitle(value)}
                    value={title}
                    >
                </TextInput>
                <TextInput 
                style={{
                    backgroundColor:'white', 
                    borderRadius:15,
                    width:200
                }}
                numberOfLines={5}
                onChangeText={(value)=>setDescription(value)}
                placeholder='Description'
                value={description}
                ></TextInput>

                <Button title='PUBLIER' color={'grey'} onPress={()=>{
                    firestore().collection('feeds').doc(title).set({
                        'title':title,
                        'desciption':description,
                        'timestamp':Date.now(),
                        'imageProfileUrl':userData.photoURL
                    }).then(docRef=>{
                        // console.log(docRef)
                        // console.log(test.id)
                        // firestore.collection('feeds').doc(test.id).update({
                        //     'docId':test.id,
                        // });
                        // navigation.navigate('D')
                        ToastAndroid.show('Pbulication en cours ✅',ToastAndroid.SHORT)
                        setTitle('');
                        setDescription('');
                        dismissKeyboard();
                    }).catch((error)=>{
                        console.log('error')
                        console.log(error)
                    });
                }}></Button>
            </View>
        </View>
    );


}
const styles =  StyleSheet.create({
    MainContainer:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    mainTitle:{
        fontSize:30,    
        color:'black',
        textTransform:'uppercase',
        fontWeight:'bold',
        letterSpacing:2.0,
        textAlign:'center'
    },
    formContainer:{
        height:300,
        justifyContent:'space-around'
    },
})

export default CreateScreen