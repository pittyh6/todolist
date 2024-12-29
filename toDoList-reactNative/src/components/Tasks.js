import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AddTask from './AddTask';
import Dropdown from './Dropdown';

function Tasks(props) {
    return (
        <SafeAreaView>
            <View>
                <Text>To Do List</Text>
                <AddTask />
                <Dropdown />
            </View>
        </SafeAreaView>
    );
}

export default Tasks;