import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {useSelector,useDispatch} from "react-redux";
import { View, Text, SafeAreaView, StatusBar, StyleSheet, Alert, FlatList, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import { removeFromWishList } from '../Redux/actions/Action';

const WishList = () => {
    const wishListData = useSelector(state => state);
    const dispatch = useDispatch();
    console.log("wishlist data is this",wishListData)

  return (
    <View style={{marginTop:15}}>
    <FlatList
                 data={wishListData}
                 numColumns={2}
                 columnWrapperStyle={styles.column}
                 keyExtractor={item => item.id}
                 renderItem={({ item, index }) => {
                     return (
                         <>
                             <TouchableOpacity style={styles.subCategory} key={index}>
                                 <View style={{ width: "100%" }}>
                                     {/* <Image source={{ uri: item.category.image }} style={styles.subCategoryImg} /> */}
                                     <Image source={{ uri: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" }} style={styles.subCategoryImg} />
                                     <Text style={styles.subCategoryText}> {item.first_name}</Text>
                                         <Text style={styles.subText}> {"Rs" + item.last_name}</Text>
                                     <TouchableOpacity onPress={x  => { dispatch(removeFromWishList(index));}} style={{ width: 40, elevation: 5, height: 40, backgroundColor: "#fff", borderRadius: 20, justifyContent: "center", alignItems: "center", position: "absolute", top: 10, right: 10 }}>
                                         <Image source={require('../../assets/Images/redheart.png')} style={{ width: 24, height: 24 }} />
                                     </TouchableOpacity>
                                 </View>
                             </TouchableOpacity>
                         </>
                     )
                 }}
            />
</View>
  );
}

const styles = StyleSheet.create({
    categoryWrapper: {
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10
    },
    categoryText: {
        color: "#000",
        marginLeft: 10,
        marginRight: 10,
    },
    subCategory: {
        borderRadius: 20,
        width: 160,
        elevation: 5,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        backgroundColor: "#fff",
        marginBottom: 10
    },
    subCategoryImg: {
        width: "100%",
        height: 120,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    subCategoryText: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 18,
        fontFamily: "600"
    },
    subText: {
        marginTop: 5,
        marginLeft: 10,
        fontSize: 18,
        marginBottom: 10,
        fontFamily: "600"
    },
    column: {
        flexShrink: 1,
    },
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    loadMoreBtn: {
        padding: 10,
        backgroundColor: '#800000',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
})

export default WishList;
