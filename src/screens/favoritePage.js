import React,{useState,useEffect} from "react";
import { View ,StyleSheet, Text, FlatList,TouchableOpacity} from "react-native";
import AvatarTile from "../components/avatarTile";
import FavoriteTile from "../components/favoriteTile";
import firestore from '@react-native-firebase/firestore';
import { useIsFocused } from "@react-navigation/native";
import { firebase } from "@react-native-firebase/auth";
const FavoriteScreen =({navigation})=>{

    const [userData, setUserData] = useState('');    
    const [favorisData, setFavorisData]=useState([]);
    const [loading, setLoading] = useState(true);

    const fetchFavorite = async (uid) => {
        const unsubscribe = firestore()
        .collection('Users')
        .doc(uid)
        .collection('Favoris').onSnapshot(snap => {
            const data = snap.docs.map(doc => doc.data())
            setFavorisData(data)
            console.log(data)
            if (loading) {
                setLoading(false);
              }          });
          return ()=>unsubscribe();
      };
       
     useEffect(() => {
         //Recupere les donnée de l'utilisateur connéctée
        var dataUser = firebase.auth().currentUser;
        setUserData(dataUser)
        //Recuperer la liste des favoris de l'utilisateur
        fetchFavorite(dataUser.uid)
    
    },[]);

    return (
        <View style={styles.MainContainer}>
        <AvatarTile item={userData}></AvatarTile>
        <Text style={styles.title}> Vos Favoris</Text>
        {loading ? <Text style={{color:'red'}}>Ça arrive un peu de patience</Text> : 
        //Liste Favoris  
        <FlatList
            data={favorisData}
            renderItem={({item}) => (
            <TouchableOpacity onPress={()=>{navigation.navigate('DetailsFavoris',{data:item})}}>
                <FavoriteTile item={item}></FavoriteTile>
            </TouchableOpacity>
            )}
          />
        }
        </View>
    )
}

const styles =StyleSheet.create({
    MainContainer:{
        flex:1,
        backgroundColor:'#F2F2F2',
        flexDirection:'column',
    },
    title:{
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold'
    }
})
export default FavoriteScreen;