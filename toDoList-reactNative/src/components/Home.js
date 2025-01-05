import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AddTask from './AddTask';
import Dropdown from './Dropdown';
import Tasks from './Tasks';

function Home(props) {
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.text}>To Do List</Text>
                <AddTask />
                <Dropdown />
                <Tasks />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        fontWeight: "bold",
        textDecorationLine: "underline",
        textAlign: "center",
        marginBottom: 30,
    }
})

export default Home;