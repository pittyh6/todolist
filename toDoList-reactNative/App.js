import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home'

export default function App() {
  return (
    <View style={[styles.container, styles.body]}>
      <Home />
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
