import React, { useRef, useState, useEffect } from "react";
import {
    StyleSheet, Text, View, SafeAreaView, Animated, TouchableOpacity, FlatList,
} from 'react-native';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Tasks(props) {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getData();
    }, [])


    const getData = async () => {
        try {
            const tasksValues = await AsyncStorage.getItem("tasks")
            console.log("getItem storage in tasks.jsx: ", tasksValues)
            const parsedTasks = tasksValues != null ? JSON.parse(tasksValues) : [];
            setTasks(parsedTasks)
            return parsedTasks
        } catch (error) {
            console.error("getItem storage error in tasks.jsx: ", error)
        }
    }

    const completeTask = async (id) => {
        const updatedTasks = tasks.map((task) => task.id === id ? { ...task, taskStatus: true } : task)
        setTasks(updatedTasks)
        //setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, taskStatus: true } : task)));
        try {
            await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks))
            await AsyncStorage.mergeItem('tasks', JSON.stringify(tasks))
            const currentStorage = await AsyncStorage.getItem('tasks')
            console.log("currentStorage: ", currentStorage)
        } catch (error) {
            console.log("Merge error: ", error)
        }

    }
    const deleteTask = async (id) => {
        console.log("Deleted tasks: ", id)
        const deletedTask = tasks.filter((task) => task.id !== id)
        console.log("deletedTask: ", deletedTask)
        setTasks(deletedTask)
        //setTasks((prev) => prev.filter((task) => task.id !== id))
        try {
            await AsyncStorage.removeItem("tasks")
        } catch (error) {
            console.error("it was not possible to delete task: ", error)
        }

    }

    //gesture handler - method swipeable left and right actions.
    const renderLeftActions = (progress, dragX, taskId) => (
        <TouchableOpacity style={styles.leftAction} onPress={() => completeTask(taskId)}>
            <Text style={styles.actionText}>Done</Text>
        </TouchableOpacity>
    )
    const renderRightActions = (progress, dragX, taskId) => (
        <TouchableOpacity style={styles.rightAction} onPress={() => deleteTask(taskId)}>
            <Text style={styles.actionText}>Delete</Text>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
        <Swipeable
            renderLeftActions={(progress, dragX) => renderLeftActions(progress, dragX, item.id)}
            renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, item.id)}
        >
            <View style={[styles.item, item.taskStatus && styles.done]}>
                <Text style={styles.itemText}>{item.taskDescription}</Text>
            </View>
        </Swipeable>
    );

    {/* return (
        <View>
           {Object.keys(tasks).map((key) => {
                return (
                    <Text key={key}>{tasks[key].taskDescription}</Text>
                )
            })}
            <Text>--------------------------------</Text> 
        </View>*/}
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            </View>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        backgroundColor: "#d190a4",
        borderRadius: 8,
        width: 320,
    },
    done: {
        backgroundColor: "#d3f9d8",
    },
    itemText: {
        fontSize: 16,
    },
    separator: {
        height: 10,
    },
    leftAction: {
        backgroundColor: "#5b9fa6",
        justifyContent: "center",
        flex: 1,
    },
    rightAction: {
        backgroundColor: "#ff6b6b",
        justifyContent: "center",
        flex: 1,
    },
    actionText: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        padding: 20,
    },
});

export default Tasks;