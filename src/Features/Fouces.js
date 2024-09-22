import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Focus = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.text}>
        welcomes
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
  },
  text: {
    color: colors.white,
  },
});
