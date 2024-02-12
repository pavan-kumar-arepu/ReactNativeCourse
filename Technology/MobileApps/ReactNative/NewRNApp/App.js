import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>React Native is crazy developmennt! 
      </Text>
      <Text>Left Side is Android Emulator
      </Text>
      <Text>Right Side is iphone Real Device Emulator
      </Text>
      <Text> It just creating and refreshing</Text>
      <Text> Just Press Control S. Thats it! Its Amazing!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
