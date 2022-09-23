import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({onPress, title, bgColor, textColor}) => {
  return (
    <TouchableOpacity style={styles.button}  onPress={ () => onPress()}>
        <Text style={{color:textColor}}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles= StyleSheet.create({
    button:{
        backgroundColor:"#000",
        justifyContent:"center",
        alignItems:"center",
        width:"95%",
        height:50,
        borderRadius:10,
        alignSelf:"center",
        marginTop:50
    }
})
export default CustomButton;
