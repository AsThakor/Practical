import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import CustomButton from '../Components/CustomButton';
import CustomTextInput from '../Components/CustomTextInput';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [badName, setBadName] = useState(false);
  const [email, setEmail] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [badPassword, setBadPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [badConfirmPassword, setBadConfirmPassword] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [badMobileNumber, setBadMobileNumber] = useState(false);

  const validate = () => {
    if (email == "") {
      setBadEmail(true);
    } else {
      setBadEmail(false);
    } if (name == "") {
      setBadName(true);
    } else {
      setBadName(false)
    } if (mobileNumber == "") {
      setBadMobileNumber(true);
    } else {
      setBadMobileNumber(false);
    }
    if (password == "") {
      setBadPassword(true);
    } else {
      setBadPassword(false);
    } if (confirmPassword == "") {
      setBadConfirmPassword(true);
    } else {
      setBadConfirmPassword(false);
    }
    setTimeout(() => {
      if( badName == false && badEmail == false && badMobileNumber==false
          &&badPassword==false && badConfirmPassword == false)
      {
        saveData()
      }else{
        seButtonDisable(false);
      }
    },2000);
};

    const saveData = async (value) => {
      try {
        await AsyncStorage.setItem('NAME', name);
        await AsyncStorage.setItem('EMAIL', email);
        await AsyncStorage.setItem('MOBILENUMBER', mobileNumber);
        await AsyncStorage.setItem('PASSWORD', password);
      } catch (e) {
        console.log(e)
        // saving error
      }
      navigation.navigate("Login")
    }

  // const getData =async () => {
      
  // }
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1 }}>
         {/* <Image source={require("../../assets/Images/email.png")} style={styles.ImgStyle}/>   */}
        <Text style={styles.txtStyle}>SignUp</Text>
        <CustomTextInput
          placeholder={"Enter Name"}
          icon={require('../../assets/Images/user.png')}
          value={name}
          onChangeText={txt => {
            setName(txt);
          }}
        />
        {badName == true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}> Please Enter Name</Text>
        )}
        <CustomTextInput
          placeholder={"Enter Email Id"}
          icon={require('../../assets/Images/email.png')}
          value={email}
          onChangeText={txt => {
            setEmail(txt);
          }}
        />
        {badEmail == true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}> Please Enter Email Id</Text>
        )}
        <CustomTextInput
          placeholder={"Enter Mobile Number"}
          icon={require('../../assets/Images/mobile.png')}
          value={mobileNumber}
          keyboardType={"number-pad"}
          onChangeText={txt => {
            setMobileNumber(txt);
          }}
        />
        {badMobileNumber == true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}> Please Enter Mobile Number</Text>
        )}
        <CustomTextInput
          value={password}
          onChangeText={txt => { setPassword(txt); }}
          placeholder={"Enter Password"}
          icon={require("../../assets/Images/lock.png")}
        />
        {badPassword == true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}> Please Enter Password</Text>
        )}
        <CustomTextInput
          value={confirmPassword}
          onChangeText={txt => { setConfirmPassword(txt); }}
          placeholder={"Enter Confirm Password"}
          icon={require("../../assets/Images/lock.png")}
        />
        {badConfirmPassword == true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}> Please Enter Confirm Password</Text>
        )}
        <CustomButton
          title={"SignUp"}
          bgColor={"#000"}
          textColor={"#fff"}
          onPress={() => { validate() }}
        />
        <Text style={{ fontSize: 18, fontWeight: "800", alignSelf: "center", marginTop: 20, textDecorationLine: "underline" }}
          onPress={() => navigation.goBack()} >Already have account?</Text>
      </View>

    </ScrollView>
  );
}

const styles=StyleSheet.create({
  ImgStyle:{
      width:60,
      height:60,
      alignSelf:"center",
      marginTop:50
  },
  txtStyle:{
      marginTop:50,
      alignSelf:"center",
      fontSize:24,
      fontWeight:"600",
      color:"#000"
  }
})

export default SignUp;
