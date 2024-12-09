import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Information from '../../components/Information'

export default function CoursesInformationScreen() {
  return (
    <ScrollView>
      <Information 
      title="Angular Course"
      imageSource={require('../../assets/angular.jpg')}
      desc="Fully-Covered Angular Course"
      />
      <Information
      title="Bootstrap5 Course"
      imageSource={require('../../assets/bootstrap5.png')}
      desc="Fully-Covered Bootstrap5 Course"
      />
      <Information
      title="C Course"
      imageSource={require('../../assets/c.png')}
      desc="Fully-Covered C Course"
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({})