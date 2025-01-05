import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';



function handleAddTask(e) {
    console.log('addTask button')
}
function AddTask(props) {
    const [addTaskText, setAddTaskText] = useState("")
    return (
        <View style={styles.body}>
            <TextInput
                placeholder="Insert your task" style={styles.input}
            />
            <TouchableHighlight style={[styles.button, styles.text]}>
                <Text onPress={handleAddTask} style={styles.text}>+</Text>
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