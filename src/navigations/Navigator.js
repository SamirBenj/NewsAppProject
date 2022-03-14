import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import LoginPage from '../screens/loginPage';
import DrawerStackNavigator from './DrawerNavigator';
import InscriptionPage from '../screens/inscriptions';
import DetailsNewsModal from '../screens/details/detailNews';
import DetailsNewsFavoris from '../screens/details/detailsNewsFavoris';
import CommentScreen from '../screens/commentScreen';
import WelcomeScreen from '../screens/WelcomePage';
import CategoryDetailScreen from '../screens/category/CategorieDetailsScreen';


const Stack = createNativeStackNavigator();

// const screenOptionStyle = {
//     headerShown = false
// }

export default class HomeStackNavigator extends React.Component {
    
    render(){
    return (
        <Stack.Navigator
        initialRouteName="WelcomeScreen"
        >
                <Stack.Screen
                name= "WelcomeScreen"
                component={WelcomeScreen}
                options={{ title: 'Welcome' , headerShown:false}}
                />
                <Stack.Screen 
                name= "Home"
                component={DrawerStackNavigator}
                options={{ title: 'Home' ,headerShown:false}}
                />
                <Stack.Screen
                
                name= "Login"
                component={LoginPage}
                options={{ title: 'Login' , headerShown:false}}
                />
                 <Stack.Screen
                
                name= "CategoryDetailScreen"
                component={CategoryDetailScreen}
                options={{ title: 'Votre Categorie' , headerShown:true}}
                />
                <Stack.Screen
                
                name= "Inscription"
                component={InscriptionPage}
                options={{ title: 'Inscription' , headerShown:false}}
                />
                <Stack.Screen
                
                name= "Details"
                component={DetailsNewsModal}
                options={{ title: 'Details' , headerShown:true}}
                />
                <Stack.Screen
                
                name= "DetailsFavoris"
                component={DetailsNewsFavoris}
                options={{ title: 'Details' , headerShown:true}}
                />
                <Stack.Screen
                
                name= "CommentScreen"
                component={CommentScreen}
                options={{ title: 'Commenter' , headerShown:true}}
                />
            
        </Stack.Navigator>
    )
    }
}

// export default HomeStackNavigator;