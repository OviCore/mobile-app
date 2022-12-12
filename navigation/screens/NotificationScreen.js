import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function NotificationScreen({ navigation }) {
    const people = [{
        id: 1,
        name: 'John Doe',
        status: 'online',},
        {id: 2,
        name: 'Mary Jane',
        status: 'offline',},
        {id: 3,
        name: 'Macy Mount',
        status: 'online',}
    ]

    const active = people.filter(person =>
        person.status === 'online'
        );

    const listItems = active.map(person => 
        <View>
            <Text style={styles.titleText}>
                User Name: {person.name},
                ID: {person.id},
                Status: {person.status}
            </Text>
        </View>)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.titleText}>
                Current User Online:
                {listItems}
            </Text>
        </View>
    );
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