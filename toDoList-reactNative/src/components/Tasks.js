import React from "react";
import {
    StyleSheet, Text, View, SafeAreaView, Animated,
    PanResponder, TouchableOpacity, FlatList,
} from 'react-native';
import { Swipeable } from "react-native-gesture-handler";



function Tasks(props) {
    const tasks = [
        { id: 1, taskDescription: "React Native", taskStatus: "Pending" },
        { id: 2, taskDescription: "Read", taskStatus: "Completed" },
        { id: 3, taskDescription: "Draw", taskStatus: "Completed" },
        { id: 4, taskDescription: "Rest", taskStatus: "Completed" },
    ]

    const renderItem = ({ item }) => {
        const translateX = useRef(new Animation.Value(0)).current;
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