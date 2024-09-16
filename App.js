import * as React from 'react';
import { StyleSheet, Text, View,  Platform , StatusBar} from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/Features/Fouces';
export default function App() {
  return (
    <View style={styles.container}>
    <Focus ></Focus>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgrdoundcolor, 
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 70,
  },
  text:{
    color: colors.white,
    fontSize: 25,
  }
  
});
