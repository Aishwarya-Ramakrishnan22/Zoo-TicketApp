import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import CustomInput from '../../components/CustomInput/input';
import Head from '../../components/Header/header';
import style from './styles';
import CustomButton from '../../components/CustomButton/button';
const SignUp = ({navigation}) => {
  function LogIn() {
    navigation.navigate('LogIn');
  }
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('@.,/../../src/Assets/eagle.jpg')}>
      <View>
        <View style={style.textview}>
          <Text style={style.texts}>Sign Up</Text>
        </View>
        <View style={style.input}>
          <CustomInput placeholder={'UserName'} />
          <CustomInput placeholder={'Email'} />
          <CustomInput secureTextEntry={true} placeholder={'Password'} />
          <CustomButton text={'Sign Up'} onPress={LogIn} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignUp;
