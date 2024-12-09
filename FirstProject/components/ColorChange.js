import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function ColorChange({ color,onIncrease,onDecreasse }) {
    return (
        <View>
            <Text>{color}</Text>
            <Button title={`${color} Artır`} onPress={() => onIncrease()} />
            <Button title={`${color} Azalt`} onPress={() => onDecreasse()} />
        </View>
    )
}

const styles = StyleSheet.create({})