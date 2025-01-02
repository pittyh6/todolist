import React, { useRef, useState } from "react";
import {
    StyleSheet, Text, View, SafeAreaView, Animated, TouchableOpacity, FlatList,
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';


function Tasks(props) {
    const [tasks, setTasks] = useState([
        { id: 1, taskDescription: "React Native", taskStatus: "Pending" },
        { id: 2, taskDescription: "Read", taskStatus: "Completed" },
        { id: 3, taskDescription: "Draw", taskStatus: "Pending" },
        { id: 4, taskDescription: "Rest", taskStatus: "Completed" },
    ])

    const completeTask = (id) => {
        setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, taskStatus: "Completed" } : task)));
    }
    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id))
    }

    return (
        <View>
            {Object.keys(tasks).map((key) => {
                return (
                    <Text key={key}>{tasks[key].taskDescription}</Text>
                )
            })}
        </View>
    );
}

export default Tasks;