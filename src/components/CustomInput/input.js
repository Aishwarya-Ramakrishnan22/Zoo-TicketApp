import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import styles from './style';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="black"
      />
    </View>
  );
};

export default CustomInput;
