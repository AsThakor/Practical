import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';

const CustomTextInput = ({ placeholder, icon, value, onChangeText, type, keyboardType }) => {
  const [text, setText] = useState(value);
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon}></Image>
      <TextInput
        value={value}
        keyboardType={keyboardType ? keyboardType : "default"}
        placeholder={placeholder}
        onChangeText={(txt) => {
          onChangeText(txt);
        }}
        sequreTextEntry={type ? true : false} style={{ marginLeft: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "85%",
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  icon: {
    width: 24,
    height: 24,
  }
})
export default CustomTextInput;