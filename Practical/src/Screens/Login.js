import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomButton from '../Components/CustomButton';
import CustomTextInput from '../Components/CustomTextInput';
import Loader from '../Components/Loader';


const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const validate = () => {
    setModalVisible(true);
    if (email == "") {
      setModalVisible(false);
      setBadEmail(true);
    } else {
      setBadEmail(false);
    }
    if (password == "") {
      setModalVisible(true);
      setBadPassword(true);
    } else {
      setBadPassword(false);
      getData();
    }
  }

  const getData = async () => {
    const mEmail = await AsyncStorage.getItem("EMAIL");
    const mPassword = await AsyncStorage.getItem("PASSWORD");
    console.log("Email", mEmail)
    console.log("password", mPassword)
    if (email === mEmail && mPassword === password) {
      setModalVisible(true);
      navigation.navigate("Home");
    } else {
      setModalVisible(true);
    }
  }
  return (
    <View style={{ flex: 1 }}>
      {/* <Image source={require("../../assets/Images/email.png")} style={styles.ImgStyle} /> */}
      <Text style={styles.txtStyle}>Login</Text>
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
        placeholder={"Enter Password"}
        icon={require('../../assets/Images/lock.png')}
        value={password}
        onChangeText={txt => {
          setPassword(txt);
        }}
        type={password}
      />
      {badPassword == true && (
        <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}> Please Enter Password</Text>
      )}
      <CustomButton
        title={"Login"}
        bgColor={"#000"}
        textColor={"#fff"}
        onPress={() => { validate() }}
      />
      <Text style={{ fontSize: 18, fontWeight: "800", alignSelf: "center", marginTop: 20, textDecorationLine: "underline" }}
        onPress={() => navigation.navigate("SignUp")} >Create New Account?</Text>
      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  ImgStyle: {
    width: 60,
    height: 60,
    alignSelf: "center",
    marginTop: 100
  },
  txtStyle: {
    marginTop: 50,
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "600",
    color: "#000"
  }
})

export default Login;
