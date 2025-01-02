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
const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 20,
    },
    itemContainer: {
        marginBottom: 15,
        position: "relative",
    },
    actionsContainer: {
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        flexDirection: "row",
        alignItems: "center",
    },
    deleteButton: {
        backgroundColor: "#ff3b30",
        justifyContent: "center",
        alignItems: "center",
        width: 75,
        height: "100%",
    },
    doneButton: {
        backgroundColor: "#4caf50",
        justifyContent: "center",
        alignItems: "center",
        width: 75,
        height: "100%",
    },
    actionText: {
        color: "#fff",
        fontWeight: "bold",
    },
    item: {
        height: 60,
        justifyContent: "center",
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    itemText: {
        fontSize: 16,
        fontWeight: "500",
    },
});
export default Tasks;