import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function DesignScreen() {
    return (
        <View>
            {/* <View
                style={{ width: 50, height: 50, backgroundColor: "red" }}
            /> */}
            {/* <View
                style={{ width: 100, height: 100, backgroundColor: "green" }}
            /> */}
            {/* <View
                style={{ width: 150, height: 150, backgroundColor: "blue" }}
            /> */}
            {/* <Text>----------------------------------------------------------</Text> */}

            {/* <View style={styles.mainView}>
                <Text style={styles.mainTextOne}>1</Text>
                <Text style={styles.mainTextTwo}>2</Text>
                <Text style={styles.mainTextThree}>3</Text>
            </View> */}
            {/* <Text>----------------------------------------------------------</Text> */}

            <View style={styles.mainView}>
                <View style={styles.absTL} />
                <View style={styles.absTR} />
                <View style={styles.absBL} />
                <View style={styles.absBR} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    absTL: {
        position: "absolute",
        width: "25%",
        height: "25%",
        backgroundColor: "red"
    },
    absTR: {
        position: "absolute",
        width: "25%",
        height: "25%",
        backgroundColor: "blue",
        right:0
    },
    absBL: {
        position: "absolute",
        width: "25%",
        height: "25%",
        backgroundColor: "green",
        bottom:0
    },
    absBR: {
        position: "absolute",
        width: "25%",
        height: "25%",
        backgroundColor: "yellow",
        bottom:0,
        right:0
    },
    mainView: {
        marginVertical: 4,
        borderWidth: 1,
        borderColor: "black",
        marginHorizontal: 4,
        borderRadius: 5,
        // alignItems:"flex-start",
        // flexDirection:"row",
        // justifyContent:"flex-start",
        height: "100%",
        width: "100%"
    },
    mainTextOne: {
        borderWidth: 1,
        borderColor: "red",
        margin: 10,
        borderRadius: 5,
        paddingHorizontal: 10,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
        // flex:4
        // alignSelf: "flex-start"
        // },
        // mainTextTwo:{
        //     borderWidth:1,
        //     borderColor:"red",
        //     margin:10,
        //     borderRadius:5,
        //     paddingHorizontal:10,
        //     // flex:5
        //     // alignSelf:"center"
        //     // top:10
        //     // left:10
        //     // bottom:10
        //     // right:10

        // },
        // mainTextThree:{
        //     borderWidth:1,
        //     borderColor:"red",
        //     margin:10,
        //     borderRadius:5,
        //     paddingHorizontal:10,
        //     // flex:1
        //     // alignSelf:"flex-start"
    }
})