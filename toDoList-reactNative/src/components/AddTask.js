import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AddTask(props) {

    const [addTaskText, setAddTaskText] = useState([
        { id: 1, taskDescription: "React Native", taskStatus: false },
        { id: 2, taskDescription: "Read", taskStatus: true },
    ])
    const [newTaskDescription, setNewTaskDescription] = useState("")

    function handleAddTask() {
        console.log('addTask button: ', addTaskText)

        if (newTaskDescription.trim() === "") {
            console.log("Empty description.")
            Alert.alert('Task value is null', "Insert a task")
            return;
        }

        const newTask = {
            id: addTaskText.length + 1, // Generate new ID dynamically
            taskDescription: newTaskDescription,
            taskStatus: false,
        }

        //update the useStates
        setAddTaskText([...addTaskText, newTask]); // Append the new task to the state array
        setNewTaskDescription(""); // Clear the input after adding



    }


    return (
        <View style={styles.body}>
            <TextInput
                // placeholder="Insert your task" style={styles.input} onChangeText={newValue => setAddTaskText({ ...AddTask, id: idAddTask, taskDescription: newValue, taskStatus: false })}
                placeholder="Insert your task" style={styles.input} value={newTaskDescription} onChangeText={setNewTaskDescription} // Update the new task description)}
            />
            <TouchableHighlight style={[styles.button, styles.text]}>
                <Text onPress={handleAddTask} style={styles.text} >+</Text>
            </TouchableHighlight>
        </View>
    );
}
const styles = StyleSheet.create({
    body: {
        flex: 0,
        flexDirection: 'row',
    },
    button: {
        backgroundColor: "#68aeec",
        borderRadius: 8,
        height: 50,
        width: 60,
    },
    input: {
        backgroundColor: "#fff",
        borderRadius: 8,
        marginRight: 10,
        height: 50,
        width: 250,
    },
    text: {
        textAlign: "center",
        justifyContent: "center",
    }
})

export default AddTask;