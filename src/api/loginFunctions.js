import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { PermissionsAndroid, ToastAndroid } from 'react-native';
import * as yup from 'yup';
import Geolocation from 'react-native-geolocation-service';

//Creation du compte
export const createFirstAccount = async(email, password,username,navigation)=>{
    auth().createUserWithEmailAndPassword(email, password).then((result)=>{
        console.log(result.user.uid);
        result.user.updateProfile({
          displayName:username,
        })
        var url =`https://eu.ui-avatars.com/api/?name=${username}`;

        result.user.updateProfile({
          photoURL:url,
        })
        addPersonalDataFirebase(email,password,username, result.user.uid);
        console.log('User account created');

    }
  ).catch(error=>{
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
  });
}
//Ajouter des informations personnelles dans la base de donées
export const addPersonalDataFirebase= async(email, password, username, token)=>{
  var url =`https://eu.ui-avatars.com/api/?name=${username}`;
  firestore().collection('Users').doc(token).set({
    'nom':username,
    'email':email,
    'password':password,
    'token':token,
    'profileImage':url,
  }).then((result)=>{
    console.log(result);
    console.log('reussi');
    
  }).catch((e)=>{
    console.log('un probleme est survenu');
    console.log(e);

  })
}

//Mise en place des regle pour les champs email et password
export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Entre un mail correct :)")
    .required('Email demandé !'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Mot de passe obligatoire'),
})
//Demande de permission android
export const hasPermission= async ()=>{
  const status = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  if (status === PermissionsAndroid.RESULTS.GRANTED) {
    return true;
  }

  if (status === PermissionsAndroid.RESULTS.DENIED) {
    ToastAndroid.show(
      'Location permission denied by user.',
      ToastAndroid.LONG,
    );
  } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
    ToastAndroid.show(
      'Location permission revoked by user.',
      ToastAndroid.LONG,
    );
  }

return false;


}

//Recuperation du code en fonction de la localisation
export const getCountryCode = async(lat,long)=>{
  getLocation().then((result)=>{
    console.log('the result of position')
  })
  const url=`http://api.geonames.org/countryCodeJSON?lat=${lat}&lng=${long}&username=sciencecalc`
  try{
    const result = await fetch(url);
    const response = await result.json();
    return response.countryCode
}
catch(e){
    console.log(e);
    console.log('erreur')
    // setLoadingList(true)
}
}

//Recupération de la localisation
export const getLocation = async () => {
  const permissionValue = await hasPermission();

  if (!permissionValue) {
    return;
  }
  
Geolocation.getCurrentPosition(
      (position) => {
      //   setLocation(position);
      //   fetchWeatherDataWithLatLong(position.coords.latitude,position.coords.longitude);
        // console.log(position);
      // getCountryCode(position.coords.latitude, position.coords.longitude).then((result)=>{
      //     //  console.log(result)
      //     const myCountryCode =result;
      //     //  setCountryCode(result)
      //     return result
      //  });
      },
      (error) => {
        // Alert.alert(`Code ${error.code}`, error.message);
      //   setLocation(null);
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
      },
    );
}

