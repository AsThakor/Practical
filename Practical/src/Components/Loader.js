import React,{useState} from 'react';
import { View, Text ,Modal,StyleSheet,Pressable, ActivityIndicator} from 'react-native';

const Loader = ({modalVisible,setModalVisible}) => {
   
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centerView}>
           <View style={styles.modalView}>
            <ActivityIndicator size={'large'}/>
          </View>
          </View>
      </Modal>
  );
}

const styles=StyleSheet.create({
    centerView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    modalView: {
        width:100,
        height:100,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        justifyContent:"center",
        alignItems:"center",
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
})

export default Loader;
