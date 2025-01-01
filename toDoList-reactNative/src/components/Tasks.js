import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Swipeable } from "react-native-gesture-handler";



function Tasks(props) {
    const tasks = [
        { taskDescription: "Study", taskStatus: "Pending" },
        { taskDescription: "Rest", taskStatus: "Completed" }
    ]

    return (
        <View>
            {Object.keys(tasks).map((key) => {
                console.log(key)
                return (
                    <Text>{tasks[key].taskDescription}</Text>
                )
            })}
        </View>

    );
}

export default Tasks;