import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {useSelector,useDispatch} from "react-redux";
import { View, Text, SafeAreaView, StatusBar, StyleSheet, Alert, FlatList, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import Header from '../Components/Header';
import { products } from "../../assets/Data/Product";
import {  addToWishList } from '../Redux/actions/Action';



const Home = ({navigation}) => {
    const dispatch = useDispatch();
    const [categoryList, setCategoryList] = useState([]);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoadMoreData, setIsLoadMoreData] = useState(false);
    const [noMoreData, setNoMoreData] = useState(false);

    useEffect(() => {
        setIsLoadMoreData(true)
        getData(1);
    }, [])

    const getData = () => {
        setIsLoadMoreData(true);
        console.log("page number", currentPage);
        // setIsLoading(true);
        // fetch('https://api.escuelajs.co/api/v1/products?offset=' + page + '&limit=20' )
        // fetch(`https://reqres.in/api/products?page==${currentPage}`)
        fetch(`https://reqres.in/api/users?page=${currentPage}`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }).then(res => res.json())
            .then((resJson) => {
                // console.log("resJson Data", resJson)
                setIsLoadMoreData(false);
                if (resJson.data.length > 0) {
                    if (currentPage == 1) {
                        console.log("currentPage 1 in", currentPage)
                        setData(resJson.data)
                    } else {
                        setData([...data, ...resJson.data])
                        console.log("second page", data)
                    }
                    setCurrentPage(currentPage + 1)
                } else {
                    setNoMoreData(true)
                }
            })
            .catch(function (error) {
                setIsLoadMoreData(false);
            })
    }

    const _loadMoreItem = () => {
        if (!isLoadMoreData && !noMoreData) {
            getData(2);
        }
    };

    const _renderLoader = () => {
        return (
            <View>
                {isLoadMoreData &&
                    <View style={{ width: "100%", height: 50, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                        <Text>Loading...</Text>
                        <ActivityIndicator />
                    </View>
                }
            </View>
        );
    };

    const items = useSelector(state => state);
    return (
        <ScrollView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("WishList")}  style={styles.categoryWrapper}>
                        <Text style={styles.categoryText}>Favorite List</Text>
                     </TouchableOpacity>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ marginTop: 20, fontsize: 18, marginLeft: 20, fontWeight: "600", color: "#000" }}>New T Shirts </Text>
                </View>
                <View style={{ marginTop: 15 }}>
                    <FlatList
                        data={data}
                        numColumns={2}
                        columnWrapperStyle={styles.column}
                        onEndReached={_loadMoreItem}
                        onEndReachedThreshold={1}
                        keyExtractor={item => item.id}
                        ListFooterComponent={_renderLoader}
                        renderItem={({ item, index }) => {
                            return (
                                <>
                                    <TouchableOpacity style={styles.subCategory} key={index}>
                                        <View style={{ width: "100%" }}>
                                            {/* <Image source={{ uri: item.category.image }} style={styles.subCategoryImg} /> */}
                                            <Image source={{ uri: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" }} style={styles.subCategoryImg} />
                                            <Text style={styles.subCategoryText}> {item.first_name}</Text>
                                                <Text style={styles.subText}> {"Rs" + item.last_name}</Text>
                                            <TouchableOpacity onPress={x  => { dispatch(addToWishList(item));}} style={{ width: 40, elevation: 5, height: 40, backgroundColor: "#fff", borderRadius: 20, justifyContent: "center", alignItems: "center", position: "absolute", top: 10, right: 10 }}>
                                                <Image source={require('../../assets/Images/heart.png')} style={{ width: 24, height: 24 }} />
                                            </TouchableOpacity>
                                        </View>
                                    </TouchableOpacity>
                                </>
                            )
                        }}
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
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

export default Home;
