import { StyleSheet, Text, View, SafeAreaView } from 'react-native';



function Tasks(props) {
    const tasks = [
        { taskDescription: "Study", taskStatus: "Pending" },
        { taskDescription: "Rest", taskStatus: "Completed" }
    ]
    return (
        <View>
            <Text>{tasks[0].taskDescription}</Text>
        </View>
    );
}

export default Tasks;