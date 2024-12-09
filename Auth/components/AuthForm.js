import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

export default function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('')


    const {
        email: emailIsInvalid,
        password: passwordIsInvalid,
        confirmEmail: emailsDontMatch,
        confirmPassword: passwordsDontMatch
    } = credentialsInvalid

    console.log(emailIsInvalid, emailsDontMatch, passwordIsInvalid, passwordsDontMatch)

    function submitHandler() {
        onSubmit({
            email: enteredEmail,
            password: enteredPassword,
            confirmEmail: enteredConfirmEmail,
            confirmPassword: enteredConfirmPassword
        })
    }

    function updateInput(inputType, enteredValue) {
        switch (inputType) {
            case 'email':
                setEnteredEmail(enteredValue);
                break;
            case 'password':
                setEnteredPassword(enteredValue);
                break;
            case 'confirmEmail':
                setEnteredConfirmEmail(enteredValue);
                break;
            case 'confirmPassword':
                setEnteredConfirmPassword(enteredValue);
                break;
            default:
                break;
        }
    }

    return (
        <View>
            <Input
                label='Email'
                keyboardType='email-address'
                onUpdateValue={updateInput.bind(this, 'email')}
                value={enteredEmail}
                isInvalid={emailIsInvalid}
            />
            {!isLogin && (
                <Input
                    label='Repeat Your Email'
                    keyboardType='email-address'
                    onUpdateValue={updateInput.bind(this, 'confirmEmail')}
                    value={enteredConfirmEmail}
                    isInvalid={emailsDontMatch}
                />
            )}
            <Input
                label='Password'
                secure
                onUpdateValue={updateInput.bind(this, 'password')}
                value={enteredPassword}
                isInvalid={passwordIsInvalid}
            />
            {!isLogin && (
                <Input
                    label='Repeat Your Password'
                    secure
                    onUpdateValue={updateInput.bind(this, 'confirmPassword')}
                    value={enteredConfirmPassword}
                    isInvalid={passwordsDontMatch}
                />
            )}
            <View style={styles.buttons}>
                <Button onPress={submitHandler}>
                    {isLogin ? 'Login' : 'Sign Up'}
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        marginTop: 10
    }
})