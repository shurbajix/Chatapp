import React from 'react';
import {View, Text ,StyleSheet} from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
export const Focus = () => (
<View style={styles.container}>
    
    <TextInput label="Fouce Item" />
</View>
)

const styles= StyleSheet.create({
    container:{ 
        flex: 1,
    },
    text:{
        color: colors.white,
    },
})