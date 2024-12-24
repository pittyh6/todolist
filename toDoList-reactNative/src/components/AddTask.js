import { StyleSheet, Text, View, TextInput } from 'react-native';

function AddTask(props) {
    return (
        <View>
            <TextInput
                placeholder="Insert your task"
            />
        </View>
    );
}

export default AddTask;