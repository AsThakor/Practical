import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useEffect} from 'react';
import { View ,Image} from 'react-native';

const  Splash = ({navigation}) => {
    console.log("navigation ",navigation.navigate)
    useEffect(() => {
      setTimeout (() => {
         getData();
      },3000);
    }, []);

    const getData =async () =>{
        const email = await AsyncStorage.getItem("EMAIL");
       
        if(email !== "" || email !== null || email !== undefined ){
          navigation.navigate("Home");
          console.log("email is this",email)
        }else{
          navigation.navigate("Login");
        }
    }

  return (
    <View>
      <Image source={require("../../assets/Images/splash.png")} style={{height:"100%",width:"100%"}}/>
     </View>
  );
}

export default Splash;