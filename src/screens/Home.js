import React,{useState ,useRef} from 'react';
import { View, StyleSheet,Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useEffect } from 'react';
import AvatarTile from '../components/avatarTile';
import NewsCard from '../components/cardNews';
import SpecificNews from '../components/specifyNews';
import firestore, { firebase } from '@react-native-firebase/firestore';
import { getCountryCode, hasPermission } from '../api/loginFunctions';
import Geolocation from 'react-native-geolocation-service';
import { getDataTest } from '../api/apiFunction';



const Home =({navigation})=>{
    const [userData, setUserData] = useState('');    
    const [data, setData]= useState();
    const [dataNewsCategory, setNewsCategory]= useState();
    const [isLoadingList, setLoadingList]=useState(true);
    const [countryCode,setCountryCode] = useState('fr');

    //initialisation de l'utilisateur connecté
    const initData = async()=>{
        var uid = firebase.auth().currentUser;
        setUserData(uid);
    }
    //Récuperation de la localisation
    const getLocation = async () => {
        const permissionValue = await hasPermission();
        if (!permissionValue) {
          return;
        }
     Geolocation.getCurrentPosition(
            (position) => {
            //recupere le code du pays
            getCountryCode(position.coords.latitude, position.coords.longitude).then((result)=>{
                 setCountryCode(result)
             });
            },
            (error) => {
              Alert.alert(`Code ${error.code}`, error.message);
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

    useEffect(()=>{
        //Recuperation de la localisation
        getLocation();
        //Initialiser l'utilisateur connécté
        initData();
        //Récuperationn des news selon le pays
        // getGeneralNews();
        getDataTest(countryCode,'general').then((result)=>{
            setData(result.articles);
            setLoadingList(false);
        });
        getDataTest(countryCode,'technology').then((result)=>{
            setNewsCategory(result.articles);
        });
    },[userData.uid,countryCode]);


    return(
        <View style={styles.MainContainer}>
            <AvatarTile item={userData}></AvatarTile>
            <View >
                <Text style={{fontSize:20, textAlign:'center', fontWeight:'300'}}>Technologie</Text>
                { isLoadingList? 
                <Text style={{color:'red', textAlign:'center', fontWeight:'bold', margin:30}}>Veuillez patientez ....</Text>:
                <FlatList
                horizontal
                data={dataNewsCategory}
                renderItem={({item})=>
                <TouchableOpacity onPress={()=>{navigation.navigate('Details',{data:item})}}>
                    <SpecificNews item={item}></SpecificNews>
                </TouchableOpacity>}
                >
                </FlatList>}
            </View>
            <View style={{ flexDirection:'column', paddingTop:10}}>
               <Text style={{fontWeight:'bold', paddingLeft:25, fontSize:18, letterSpacing:1, textAlign:'left'}}>En ce Moment</Text>
                {isLoadingList ? 
                <Text style={{color:'red', textAlign:'center', fontWeight:'bold', margin:30}}>Veuillez patientez ....</Text>:
                <FlatList
                data={data } 
                renderItem={({item})=>
                <TouchableOpacity onPress={()=>{navigation.navigate('Details',{data:item})}}>
                    <NewsCard item={item} dataUser={userData}></NewsCard>
                </TouchableOpacity>}>
                </FlatList>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    MainContainer:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#F2F2F2'
    },
});

export default Home
