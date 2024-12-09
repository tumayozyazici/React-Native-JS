import { StyleSheet, Text, View, Modal, Image, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

export default function CourseInput({ visible,onAddCourse,onCancel}) {
    const [enteredCourseText, setEnteredCourseText] = useState('')

    const addCourseHandler = () => {
        onAddCourse(enteredCourseText);
        setEnteredCourseText('');
    }

    const CourseInputHandler = (enteredText) => {
        setEnteredCourseText(enteredText);
    }

    return (
        <Modal
            animationType="slide"
            visible={visible}
        >
            <View style={styles.inputContainer}>
                <Image style={styles.image}
                    source={require('../assets/images/cblogo.png')}
                />
                <TextInput
                    value={enteredCourseText}
                    onChangeText={CourseInputHandler}
                    style={styles.textInput}
                    placeholder='Add New Course'
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title='Add' color='blue'
                            onPress={addCourseHandler}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Cancel' color='red'
                            onPress={onCancel}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        marginVertical: 30,
        borderRadius: 20,
        marginHorizontal: 10,
        padding: 15
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 20,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        width: '100%',
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white'
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10
    },
    button: {
        borderRadius: 10,
        overflow: 'hidden',
        width: 150
    }
})