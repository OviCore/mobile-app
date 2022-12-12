import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function SettingsScreen({ navigation,route }) {
    const{name,age,email,id} = route.params;
    console.log(name,age,email,id)
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Name: {name}</Text>
            <Text style={styles.titleText}>Age: {age}</Text>
            <Text style={styles.titleText}>email: {email}</Text>
            <Text style={styles.titleText}>id: {id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    titleText:{
        fontFamily: 'nunito-bold',
        fontSize: 18
    }
})