import React from 'react';
import {View, Text} from 'react-native';
import style from './style';

const Head = ({head}) => {
  return (
    <View style={style.head}>
      <Text style={style.text}>{head}</Text>
    </View>
  );
};

export default Head;
