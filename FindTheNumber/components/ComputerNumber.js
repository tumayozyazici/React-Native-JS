import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ComputerNumber({children}) {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:'yellow',
        borderRadius:20,
        padding:25,
        alignItems:'center'
    },
    text:{
        fontSize:36,
        color:'yellow'
    }
})