import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={{ uri: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340' }}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>Welcome With React!</Text>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    width: '80%',
    height: '50%',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent overlay
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontSize: 30,
    
    
  },
});
