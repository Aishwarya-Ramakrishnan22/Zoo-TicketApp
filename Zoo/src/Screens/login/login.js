import React from 'react';
import {View, Text, Image, ImageBackground, Pressable} from 'react-native';
import CustomInput from '../../components/CustomInput/input';
import Head from '../../components/Header/header';
import style from './style';
import CustomButton from '../../components/CustomButton/button';

const Login = ({navigation}) => {
  function signScreen() {
    navigation.navigate('SignUp');
  }
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('@.,/../../src/Assets/eagle.jpg')}>
      <View>
        <View style={style.textview}>
          <Text style={style.texts}>Log In</Text>
        </View>
        <View style={style.input}>
          <CustomInput placeholder={'UserName or Email'} />
          <CustomInput secureTextEntry={true} placeholder={'Password'} />
          <CustomButton text={'LogIn'} />
          <Text style={{color: 'white'}}>Not A User, Click Here</Text>
          <View style={style.but}>
            <CustomButton text={'Sign Up'} onPress={signScreen} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
