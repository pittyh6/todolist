import React, { useRef, useState } from "react";
import {
    StyleSheet, Text, View, SafeAreaView, Animated, TouchableOpacity, FlatList,
} from 'react-native';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';


function Tasks(props) {
    const [tasks, setTasks] = useState([ //false=pending/true=completed
        { id: 1, taskDescription: "React Native", taskStatus: false },
        { id: 2, taskDescription: "Read", taskStatus: true },
        { id: 3, taskDescription: "Draw", taskStatus: false },
        { id: 4, taskDescription: "Rest", taskStatus: true },
    ])


    const completeTask = (id) => {
        setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, taskStatus: true } : task)));
    }
    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id))
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
        width: 300,
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
        backgroundColor: "#557d5a",
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