import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { useState } from 'react';
import CourseInput from './components/CourseInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courses, setCourses] = useState([])

  const startModal = () => {
    setModalIsVisible(true);
  }

  const endModal = () => {
    setModalIsVisible(false);
  }

  const addCourse = (courseTitle) => {
    setCourses((currentCourses) => [
      ...currentCourses, { text: courseTitle, id: Math.random().toString() }
    ])
    endModal();
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Button title='Add Course' color='red' onPress={startModal} />
        </TouchableOpacity>
        <CourseInput
          visible={modalIsVisible}
          onAddCourse={addCourse}
          onCancel={endModal}
        />
        <View style={styles.coursesContainer}>
          <FlatList
            data={courses}
            renderItem={({ item }) => (
              <View style={styles.courseItem}>
                <Text style={styles.courseText}>{item.text}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 10
  },
  button: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  courseItem: {
    backgroundColor: 'gray',
    margin: 8,
    borderRadius: 5
  },
  courseText: {
    padding: 8,
    color: 'white',
    textAlign: 'center'
  },
  coursesContainer: {
    marginTop: 30
  }
});
