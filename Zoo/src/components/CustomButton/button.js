import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import styles from './style';
const CustomButton = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;
