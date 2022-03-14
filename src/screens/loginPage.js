import React, {useEffect,useState } from "react";
import {Pressable, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { firebase } from '@react-native-firebase/auth';
import { loginValidationSchema } from "../api/loginFunctions";

const LoginPage=({navigation})=>{    

      const [user, setUser] = useState();
      const [valid, setValid]=useState();

      //Fonction qui permet la connection
      const signInWithEmailPassword= async(email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email,password).then((user)=>{
            console.log(user.user.uid);
            setValid(true)
            navigation.navigate('Home')
          }).catch(error=>{
            setValid(false)
            console.log(error);
            console.log('erreur');
        });
    }
    //onIdTokenChanged
   const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            setUser(user)
          // console.log(user.uid) working
          // firebase.auth().signOut();
          navigation.navigate('Home');
          // console.log(user.displayName)
        }else{
          navigation.navigate('WelcomePage')
        }
      });    
    
        useEffect(() => {  
          unsubscribe();
        }, []);
  
  return (
    <View style={styles.MainContainer}>
      {/* <TouchableOpacity onPress={()=>sendNotification()}>
      <Text>Test Notification</Text>
      </TouchableOpacity> */}
      <View style={styles.container} >
        <Formik
          validationSchema={loginValidationSchema}
           initialValues={{ email: '', password: '' }}
           onSubmit={values => console.log(values)}>
           {({ handleChange, handleBlur, handleSubmit,isValid,isSubmitting, values,errors, touched }) => (
          <>
          
          <Text style={styles.loginText}>SE CONNECTER</Text>
          <TextInput
          focusable='false'
          style={styles.inputUsername}
          label="Username"
          placeholder="Email"
          
          // onBlur={handleChange('email')}
          value={values.email}
          onChangeText={handleChange('email')}
          />
          {(errors.email) &&
                    <Text style={styles.errorText}>{errors.email}</Text>
                  }
          <TextInput 
          focusable='false'
          style={styles.inputPassword}
          secureTextEntry={true}
          placeholder="Mot de passe"
          label="Password"
          value={values.password}
          // onBlur={handleBlur('password')}
          onChangeText={handleChange('password')}/>
            {errors.touched &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
            }
          <TouchableOpacity disabled={!isValid} style={isValid? styles.button:styles.buttonDis} onPress={()=>{
              if(values.email=='' || values.password=='' ){
                console.log('vide')
              }else{
                console.log('pas vide');
                signInWithEmailPassword(values.email,values.password);
              }
          }}>
          {isValid?<Text style={styles.text}>VALIDER</Text>:<Text>Allez plus vite 😃 !</Text>}
          </TouchableOpacity> 
          </>
          )}
        </Formik>
        <Pressable style={styles.button} onPress={()=>{navigation.navigate('Inscription')}}>
          <Text style={styles.text}>S'INSCRIRE</Text>
        </Pressable>  
        
        {valid ? <Text>Un probleme est survenue</Text>:<Text></Text>}
    </View>   
  </View>
    );
}

const styles= StyleSheet.create({
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  buttonDis:{
        marginRight:30,
        marginLeft:30,
        marginTop:15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#625E5D',
  },
    MainContainer:{
        flex:1,
        backgroundColor: 'grey',
        // alignItems:'center',
        flexDirection:'column',
        justifyContent: 'center',
      },
      container:{
        flexDirection:'column',
        margin:10,
      },
      inputUsername:{
        marginTop:40,
        borderRadius:10,
        backgroundColor:'white',
        
        margin:10,
      },
      inputPassword:{
        backgroundColor:'white',
        borderRadius:10,
        margin:10
      },
      loginText:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:30,
      }, 
      button: {
        marginRight:30,
        marginLeft:30,
        marginTop:15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
})

export default LoginPage;