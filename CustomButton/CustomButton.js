import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react'

const CustomButton = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3A362E',
    width: '70%',
    marginVertical: 20,
    padding: 15,
    borderColor: 'e8e8e8',
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CustomButton;
