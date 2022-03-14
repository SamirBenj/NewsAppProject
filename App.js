import React from 'react';
import { Pressable, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackNavigator from './src/navigations/Navigator';
import DrawerStackNavigator from './src/navigations/DrawerNavigator';


const App = () => {
  const theme = useColorScheme();
  console.log(theme);

  return (
    // <View>
    //   <Text>hello</Text>
    //   <Pressable onPress={

    //   }></Pressable>
    // </View>
    <NavigationContainer>
    {/* <DrawerStackNavigator /> */}
<HomeStackNavigator></HomeStackNavigator>
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
