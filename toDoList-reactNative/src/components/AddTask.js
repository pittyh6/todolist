import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';



function handleAddTask(e) {
    console.log('addTask button')
}
function AddTask(props) {
    const [addTaskText, setAddTaskText] = useState("")
    return (
        <View>
            <TextInput
                placeholder="Insert your task"
            />
            <TouchableHighlight >
                <Text onPress={handleAddTask}>+</Text>
            </TouchableHighlight>
        </View>
    );
}

export default AddTask;