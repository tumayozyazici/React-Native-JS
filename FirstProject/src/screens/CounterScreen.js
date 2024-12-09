import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useReducer } from 'react'
import { useSafeAreaFrame } from 'react-native-safe-area-context'

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload };
        case 'decrement':
            return { ...state, count: state.count - action.payload };
        default:
            return state;
    }
};

//state =={count:0}
//action =={type:'increment', type:'decrement', payload}
export default function CounterScreen() {

    //const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <View>
            <Button title='Artır' onPress={() => {
                // setCounter(counter + 1);
                dispatch({ type: 'increment', payload: 1 })
            }} />
            <Button title='Azalt' onPress={() => {
                //setCounter(counter - 1);
                dispatch({ type: 'decrement', payload: 1 })
            }} />
            <Text>Sayı: {state.count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})