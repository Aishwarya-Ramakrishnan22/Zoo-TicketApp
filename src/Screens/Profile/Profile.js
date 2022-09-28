import React from 'react';
import {View, Text, Pressable, ImageBackground} from 'react-native';
import CustomButton from '../../components/CustomButton/button';
import style from './style';
const Profile = () => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('@../../../src/Assets/tiger1.png')}>
      <View>
        <View style={style.container}>
          <Text style={{padding: '15%', fontSize: 15, fontWeight: 'bold'}}>
            Account Nmae
          </Text>
        </View>
        <View style={style.button}>
          <CustomButton text={'Edit Profile'} />
          <CustomButton text={'About Us'} />
          <CustomButton text={'Logout'} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Profile;
