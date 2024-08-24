import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal,} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button} from '../components/ButtonComponent';
import {Input} from '../components/InputComponent';
import {Icon} from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp,} from 'react-native-responsive-screen-hooks';
import realm from '../../store/realm';
import {UserSchema} from '../../store/realm/UserSchema';
import { CommonActions } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { saveUser } from '../../store/actions/userLoginAction';

const LoginScreen = (props) => {
  const {navigation} = props
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const dispatch = useDispatch()
  
  const [userData, setUserData] = useState({
    userName: '',
    password: '',
    phoneNumber: '',
  });
  const onchangeInput = (inputType, value) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    // if (inputType === 'email') {
    //   if (!emailRegex.test(value)) {
    //     setIsEmailCorrect(false);
    //   } else {
    //     setIsEmailCorrect(true);
    //   }
    // }
    if (inputType === 'password') {
      if (!passwordRegex.test(value)) {
        setIsPasswordCorrect(false);
      } else {
        setIsPasswordCorrect(true);
      }
    }
    setUserData({
      ...userData,
      [inputType]: value,
    });
    console.log(userData);
  };

  const checkData = () => {
    if (userData.userName === '' || userData.password === '') {
      alert('Please input your username and password');

    } else {

      const allData = realm.objects('User').filtered(`username = '${userData.userName}'`)
      if (allData.length > 0){
        if (allData[0].password == userData.password){
          realm.write(() => {
            allData[0].isLogin=true
          })
          navigation.replace("Splash")
          dispatch(saveUser(allData[0]))
        }else{
          alert('password salah')
        }
      }else{
        alert('Your username not found !');

      }
    }
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>Hi, welcome back</Text>
      <Text style={styles.secondHeaderText}>Log in to your account</Text>

      {/* Input Container */}
      <View style={styles.inputContainer}>
        <Input
          title="Username"
          placeholder="Input your username !"
          onChangeText={text => onchangeInput('userName', text)}
        />

        <Input
          title="Password"
          placeholder="Input your password !"
          isPassword={true}
          secureTextentry={isPasswordCorrect ? false : true}
          iconName={isPasswordCorrect ? 'eye-off' : 'eye'}
          onPress={() => setIsPasswordCorrect(!isPasswordCorrect)}
          onChangeText={text => onchangeInput('password', text)}
        />
        {/* Dump Text */}
        <TouchableOpacity>
        <Text style={styles.dumpText}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <Button
        style={styles.buttonContainer}
        text="Login"
        onPress={() => checkData()}>
      </Button>

      <Text style={styles.bottomText}>
        Don't have an account ?
        <TouchableOpacity 
          onPress={
            () => navigation.navigate('Register')
          }>
          <Text style={styles.dumpText}> Sign Up</Text>
        </TouchableOpacity>
      </Text>

      {/* <Modal animationType="fade" transparent={true}></Modal> */}

      <Text style={styles.bottomText}> Or with </Text>

      {/* GOOGLE LOGIN */}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.googleContainer}>
          <Icon name="google" type="antdesign" size={18} style={styles.icon} />
          <Text style={styles.alternativeText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>

      {/* APPLE LOGIN */}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.appleContainer}>
          <Icon name="apple1" type="antdesign" size={18} style={styles.icon} />
          <Text style={styles.alternativeText}>Sign in with Apple ID</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: '#1A5319',
    backgroundColor: 'white',
    padding: 12,
    // marginBottom: 12,
    color: 'black',
  },
  headerText: {
    marginBottom: 10,
    fontSize: 26,
    color: 'black',
  },
  secondHeaderText: {
    fontSize: 20,
    color: '#7BC07E',
  },
  inputContainer: {
    marginTop: 16,
    marginBottom: 32,
  },
  dumpText: {
    color: '#7BC07E',
  },
  buttonContainer: {
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#7BC07E',
    alignItems: 'center',
  },
  bottomText: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  googleContainer: {
    flexDirection: 'row',
    backgroundColor: '#7BC07E',
    borderRadius: 8,
    height: hp('4.5%'),
    width: wp('90'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  appleContainer: {
    flexDirection: 'row',
    backgroundColor: '#7BC07E',
    borderRadius: 8,
    height: hp('4.5%'),
    width: wp('90'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 12,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 12,
  },
});

export default LoginScreen;
