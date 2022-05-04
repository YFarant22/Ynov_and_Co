import React from "react";
import { View, Image, Text, Button, StyleSheet, TextInput } from "react-native";
import Menu from './Menu';

function Homepage() {
    return (
        <View style={styles.container}>
            <View style={styles.homeTop}>
                <Image style={styles.logo} source={require("../assets/ynov_logo.jpg")} ></Image>
                <Text style={[ styles.AddText, {color:"#0fb19c"}]}> And <Text style={[styles.AddText, {color:"#df3862"}]}>Co</Text></Text>
            </View>

            <View style={styles.homeBottom}>
                <TextInput style={styles.put}> Adresse email Ynov </TextInput>
                <TextInput style={styles.put}> Mot de passe </TextInput>
                <Button onPress={Menu} title="Se connecter" color="#0fb19c" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },

    homeTop: {
        alignItems: "center",
    },
    
    logo: {
        width: 300,
        height: 120,
    },

    AddText: {
        fontSize: 90,
        fontWeight: "bold",
        paddingBottom: 70,
    },
    
    homeBottom: {
        alignItems: "center",
        width: "90%"
    },

    put: {
        width: "100%",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,    
    }
});

export default Homepage;