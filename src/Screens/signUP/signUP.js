import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import CustomInput from '../../components/CustomInput/input';
import Head from '../../components/Header/header';
import style from './styles';
import CustomButton from '../../components/CustomButton/button';
import {useState} from 'react';

const SignUp = ({navigation}) => {
  const [UserName, setUserName] = useState('');
  const [Email, setEmail] = useState('');
  const [pass, setpass] = useState('');

  function LogIn() {
    if (UserName.length != 0 && Email.length != 0 && pass.length != 0) {
      navigation.navigate('LogIn');
      console.log(UserName, Email, pass);
    }
  }
  function username(test) {
    setUserName(test);
  }
  function email(mail) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(mail) === false) {
      return false;
    } else {
      setEmail(mail);
      console.log(mail);
    }
  }
  function Password(pass) {
    setpass(pass);
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
          <CustomInput placeholder={'UserName'} setValue={username} />
          <CustomInput placeholder={'Email'} setValue={email} />
          <CustomInput
            secureTextEntry={true}
            placeholder={'Password'}
            setValue={Password}
          />
          <CustomButton text={'Sign Up'} onPress={LogIn} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignUp;
