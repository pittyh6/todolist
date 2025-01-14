import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={[styles.container, styles.body]}>
      <h1>Hiiii</h1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#94bbe9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    width: '100%',
  }
});
