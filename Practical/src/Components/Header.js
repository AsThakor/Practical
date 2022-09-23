import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Product List</Text>
            <TouchableOpacity style={styles.headerImg}>
                <Text>Favorite</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderBottomColor: "#BeBeBe"
    },
    headerText: {
        fontWeight: "600",
        fontSize: 20,
        color: "#000",
        marginLeft: 20
    },
    headerImg: {
        marginRight: 20,
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 30
    }
})
export default Header;