import * as React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Touchable } from 'react-native';
import {useState} from 'react'

export default function HomeScreen({ navigation }) {
    const[user, setUser] = useState([
        {name: 'John Doe', age: 49, email: 'johndoe@gmail.com', id: 1},
        {name: 'Mary Jane', age: 26, email: 'maryjane@gmail.com', id: 2},
        {name: 'Macy Mount', age: 25, email: 'macymount@gmail.com', id: 3}
    ]);
    return (
        <View style={styles.container}>
            <FlatList
                data={user}
                renderItem={({ item })=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('Settings', item)}>
                        <Text style={styles.titleText}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
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