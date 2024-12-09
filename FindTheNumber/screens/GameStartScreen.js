import { StyleSheet, Text, TextInput, View,Alert } from 'react-native';
import React,{useState} from 'react';
import CustomButton from '../components/CustomButton';
import Title from '../components/Title';

export default function GameStartScreen({onSendNumber}) {

  const [entry, setEntry] = useState('');

  function resetHandler() {
    setEntry('');
  }

  function confirmHandler() {
    const choosenNumber = parseInt(entry);
    if(isNaN(choosenNumber) || choosenNumber<=0 || choosenNumber>99){
      //ALERT TASARIMI 
      Alert.alert('Invalid Number', 'The number must be between 1 and 99',[{text:'Tamam', style:'destructive',onPress:resetHandler}]);
    }
    else{
      onSendNumber(choosenNumber);
    }
  }

  return (
    <View style={styles.container}>
      <Title style={styles.text}>Number Guessing Game</Title>
      <View style={styles.card}>
        <TextInput style={styles.input}
          keyboardType='number-pad'
          maxLength={2}
          onChangeText={(text)=>setEntry(text)}
          value={entry}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={resetHandler}>Clear</CustomButton>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={confirmHandler}>Submit</CustomButton>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  card: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginTop: 20,
    borderRadius: 20,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  input: {
    borderBottomWidth: 2,
    borderColor: 'yellow',
    width: 50,
    height: 50,
    marginVertical: 10,
    fontSize: 35,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  },
  text: {

  },
  clearButton: {

  },
  submitButton: {

  }
});
