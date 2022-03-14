import { Formik } from "formik";
import React from "react";
import {  Pressable, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import {createFirstAccount } from "../api/loginFunctions";
import * as yup from 'yup';
const InscriptionPage=({navigation})=>{

    // const [username, setUsername] = useState('');
    // const [password ,setPassword]= useState('');
    // const [email ,setEmail]= useState('');
    const loginValidationSchema = yup.object().shape({
      email: yup
        .string()
        .email("Please enter valid email")
        .required('Email Address is Required'),
      password: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
        username:yup.string()
        .min(5, ({ min }) => `Votre nom doit avoir au moins ${min} caracteres allez faite un effort`)
        .required('Username demandé'),
    })
    const validate = values => {
         const errors = {};
         if (!values.username) {
           errors.username = 'Required';
         } else if (values.username.length > 15) {
           errors.username = 'Must be 15 characters or less';
     }
    }
    return (
    <View style={styles.MainContainer}>
      <View style={styles.container} >
        <Text style={styles.loginText}>INSCRIPTION</Text>
        <Formik
          validationSchema={loginValidationSchema}
           initialValues={{ email: '', password: '' }}
           onSubmit={values => console.log(values)}
         >
           {({ handleChange, handleBlur, handleSubmit,isValid,validate, values,errors, touched }) => (
             <>
          
        <TextInput
        focusable='false'
        style={styles.inputUsername}
        label="Username"
        placeholder="Username"
        value={values.username}
        onChangeText={handleChange('username')}/>
        {(errors.username) &&
                  <Text style={styles.errorText}>{errors.username}</Text>
                }
        <TextInput 
        focusable='false'
        style={styles.inputPassword}
        placeholder="Votre Adresse mail"
        label="Password"
        value={values.email}
        onChangeText={handleChange('email')}/>

        <TextInput 
        focusable='false'
        style={styles.inputPassword}
        secureTextEntry={true}
        placeholder="Mot de passe"
        label="Password"
        value={values.password}
        onChangeText={handleChange('password')}/>

<TouchableOpacity disabled={!isValid} style={isValid? styles.button:styles.buttonDis} onPress={()=>{
       if(values.email=='' || values.password==''|| values.username==''){
        console.log('vide');
      }else{
        console.log('pas vide');
        createFirstAccount(values.email,values.password,values.username, navigation);

      }
      
    }}>

        <Text style={styles.text}>VALIDER</Text>
    </TouchableOpacity>  
    
      <Pressable style={styles.button} onPress={()=>{
       navigation.navigate('Login')
    }}>
        <Text style={styles.text}>SE CONNECTER</Text>
    </Pressable>  
    </>
    )}
    </Formik>
      </View>
        
     </View>
    );
}
const styles= StyleSheet.create({
    MainContainer:{
        flex:1,
        backgroundColor: 'grey',
        // alignItems:'center',
        flexDirection:'column',
        justifyContent: 'center',
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

export default InscriptionPage;