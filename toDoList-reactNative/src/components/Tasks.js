import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AddTask from './AddTask';

function Tasks(props) {
    return (
        <SafeAreaView>
            <View>
                <AddTask />
                <Text>Hi darling</Text>
            </View>
        </SafeAreaView>
    );
}

export default Tasks;