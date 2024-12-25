import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AddTask from './AddTask';

function Tasks(props) {
    return (
        <SafeAreaView>
            <View>
                <Text>To Do List</Text>
                <AddTask />
            </View>
        </SafeAreaView>
    );
}

export default Tasks;