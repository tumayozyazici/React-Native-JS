import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useReducer } from 'react'
import ColorChange from '../../components/ColorChange'


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'changeRed':
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : { ...state, red: state.red + action.payload }
        case 'changeGreen':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : { ...state, green: state.green + action.payload }
        case 'changeBlue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : { ...state, blue: state.blue + action.payload }
        default:
            break;
    }
}


export default function ColorChangeScreen() {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    return (
        <View>
            <ColorChange color='Kırmızı'
                onIncrease={() => dispatch({ type: 'changeRed', payload: 20 })}
                onDecreasse={() => dispatch({ type: 'changeRed', payload: -20 })} />
            <ColorChange color='Yeşil'
                onIncrease={() => dispatch({ type: 'changeGreen', payload: 20 })}
                onDecreasse={() => dispatch({ type: 'changeGreen', payload: -20 })} />
            <ColorChange color='Mavi'
                onIncrease={() => dispatch({ type: 'changeBlue', payload: 20 })}
                onDecreasse={() => dispatch({ type: 'changeBlue', payload: -20 })} />


            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${state.red},${state.green},${state.blue})`, marginVertical: 20 }} />
        </View>
    );
}

const styles = StyleSheet.create({})