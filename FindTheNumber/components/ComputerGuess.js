import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'

export default function ComputerGuess({children}) {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        fontSize:18
    }
})