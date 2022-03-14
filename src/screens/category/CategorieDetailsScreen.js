import { firebase } from "@react-native-firebase/firestore";
import React,{useEffect, useState} from "react";
import { StyleSheet, View,TouchableOpacity,FlatList,Text } from "react-native";
import { getDataTest } from "../../api/apiFunction";
import NewsCard from "../../components/cardNews";

const CategoryDetailScreen = ({route})=>{
    const {dataCateg} = route.params;
    const [userData, setUserData] = useState('');    
    const [isLoadingList, setLoadingList]= useState(true);
    const [dataCategorie,setDataCategorie]= useState('');

      //initialisation de l'utilisateur connecté
      const initData = async()=>{
        var uid = firebase.auth().currentUser;
        setUserData(uid);
    }
    
    useEffect(()=>{
        setLoadingList(true);
        getDataTest('fr',dataCateg).then((result)=>{
            setDataCategorie(result.articles)
            setLoadingList(false);
        });
        
    },[]);
    return(
        <View>
             <View style={{ flexDirection:'column', paddingTop:10}}>
               <Text style={{fontWeight:'bold', paddingLeft:25, fontSize:18, letterSpacing:1, textAlign:'left'}}>En ce Moment</Text>
                {isLoadingList ? 
                <Text style={{color:'red', textAlign:'center', fontWeight:'bold', margin:30}}>Veuillez patientez ....</Text>:
                <FlatList
                data={dataCategorie} 
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
    
});
export default CategoryDetailScreen