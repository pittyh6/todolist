import React, { useRef } from "react";
import {
    StyleSheet, Text, View, SafeAreaView, Animated,
    PanResponder, TouchableOpacity, FlatList,
} from 'react-native';



function Tasks(props) {
    const tasks = [
        { id: 1, taskDescription: "React Native", taskStatus: "Pending" },
        { id: 2, taskDescription: "Read", taskStatus: "Completed" },
        { id: 3, taskDescription: "Draw", taskStatus: "Completed" },
        { id: 4, taskDescription: "Rest", taskStatus: "Completed" },
    ]


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