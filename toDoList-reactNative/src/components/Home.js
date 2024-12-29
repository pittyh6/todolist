import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AddTask from './AddTask';
import Dropdown from './Dropdown';
import Tasks from './Tasks';

function Home(props) {
    return (
        <SafeAreaView>
            <View>
                <Text>To Do List</Text>
                <AddTask />
                <Dropdown />
                <Tasks />
            </View>
        </SafeAreaView>
    );
}

export default Home;