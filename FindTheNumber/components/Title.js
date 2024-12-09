import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Title({children}) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        borderWidth:2,
        borderColor:'red',
        textAlign:'center',
        padding:15,
        borderRadius:20,
        marginVertical:20,
        color:'white',
        fontSize:25
    }
})