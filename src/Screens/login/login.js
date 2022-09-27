import React from 'react';
import {View, Text, Image, ImageBackground, Pressable} from 'react-native';
import CustomInput from '../../components/CustomInput/input';
import Head from '../../components/Header/header';
import style from './style';
import CustomButton from '../../components/CustomButton/button';
import {useState} from 'react';
import {data} from './dymmy';
import {Alert} from 'react-native';
import Home from '../Home/home';

const Login = ({navigation}) => {
  const [UserName, setUserName] = useState('');
  const [pass, setpass] = useState('');

  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'incorrect password or Username', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  function signScreen() {
    navigation.navigate('SignUp');
  }

  function username(test) {
    setUserName(test);
  }

  function Password(pass) {
    setpass(pass);
  }
  function press() {
    if (UserName.length != 0 && pass.length != 0) {
      if (data.user == UserName && data.pass == pass) {
        navigation.navigate('Home');
      } else {
        createTwoButtonAlert();
      }
    }
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
          <CustomInput placeholder={'UserName or Email'} setValue={username} />
          <CustomInput
            secureTextEntry={true}
            placeholder={'Password'}
            setValue={Password}
          />
          <CustomButton text={'LogIn'} onPress={press} />
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
