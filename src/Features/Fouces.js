import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { colors } from '../utils/colors';
export const Focus = () => (
<View style={StyleSheet.container}>
    <Text style = {style.text}>Fouce Time</Text>

</View>
)

const style= StyleSheet.create({
    container:{ 
        flex: 1,
    },
    text:{
        color: colors.white,
    },
})