import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AddTask(props) {

    const [addTaskText, setAddTaskText] = useState([""])
    const [newTaskDescription, setNewTaskDescription] = useState("")

    useEffect(() => {
        getData();
    }, [])

    // useEffect(() => {
    //     clearAsyncStorage();
    // }, [])

    // const clearAsyncStorage = async () => {
    //     AsyncStorage.clear();
    // }
    const getData = async () => {
        try {
            const tasksValues = await AsyncStorage.getItem("tasks")
            const parsedTasks = tasksValues != null ? JSON.parse(tasksValues) : [];
            setAddTaskText(parsedTasks)
            return parsedTasks
        } catch (error) {
            console.error("getItem storage error: ", error)
        }
    }

    const handleAddTask = async () => {
        if (newTaskDescription.trim() === "") {
            Alert.alert('Task value is null', "Insert a task")
            return;
        }

        const newTask = {
            id: addTaskText.length + 1, // Generate new ID dynamically
            taskDescription: newTaskDescription,
            taskStatus: false,
        }

        try {
            //retrieve existent tasks from AsyncStorage
            const existingTaskJson = await AsyncStorage.getItem("tasks");
            const existingTasks = existingTaskJson ? JSON.parse(existingTaskJson) : [];

            //Add new task to the list of existing tasks
            const updateTasks = [...existingTasks, newTask]

            // Save updated list back to AsyncStorage
            await AsyncStorage.setItem("tasks", JSON.stringify(updateTasks))

            // Update the local state
            setAddTaskText(updateTasks)
            setNewTaskDescription("")

        } catch (error) {
            console.error("error storing task: ", error)
        }
        //update the useStates
        //setAddTaskText([...addTaskText, newTask]); // Append the new task to the state array
        //setNewTaskDescription(""); // Clear the input after adding
    }


    return (
        <View style={styles.body}  >
            <TextInput
                // placeholder="Insert your task" style={styles.input} onChangeText={newValue => setAddTaskText({ ...AddTask, id: idAddTask, taskDescription: newValue, taskStatus: false })}
                placeholder="Insert your task" style={styles.input} value={newTaskDescription} onChangeText={setNewTaskDescription} // Update the new task description)}
            />
            <TouchableHighlight onPress={handleAddTask} style={[styles.button, styles.text]}>
                <Text style={styles.text} >+</Text>
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