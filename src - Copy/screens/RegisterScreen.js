import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Button } from '../components/ButtonComponent'
import { Input } from '../components/InputComponent'
import realm from '../../store/realm'
import React, {useEffect, useState} from 'react'
import { Value } from 'react-native-reanimated'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen-hooks'

const RegisterScreen = (props) => {
    const [isPassVisible, setIsPassVisible] = useState(false)
    const {navigation} = props;

    const [isEmailCorrect, setIsEmailCorrect] = useState(true);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(true)

    const onchangeInput = (inputType, value) => {
        setUserData({
            ...userData,
            [inputType]: value
        });
        console.log(userData)
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

        if (inputType === 'email'){
            if (!emailRegex.test(value)) {
                setIsEmailCorrect(false);
            }
            else
            {
                setIsEmailCorrect(true)
            };
        };
        if (inputType === 'password'){
            if (!passwordRegex.test(value)){
                setIsPasswordCorrect(false);
            }
            else
            {
                setIsPasswordCorrect(true);
            };
        }
    }

    const [userData, setUserData] = useState({
        userName: '',
        password: '',
        email: ''
    })

    const saveData = () => {
        if (userData.userName === '' || userData.password === '' || userData.email === '' )
            {
                alert('Please fill all the data');
            }
            else
            {
                const allData = realm.objects('User');
                const lastId = allData.length === 0 ? 0 : allData[allData.length -1].id;
                realm.write(() => {realm.create('User',
                    {
                        username: userData.userName,
                        password: userData.password,
                        email: userData.email,
                        id: lastId+1,
                        isLogin: false
                    }
                )})
                Alert.alert('Succes', "Regiister Succes", [
                    {
                        onPress: navigation.navigate('Login'),
                        text: 'Ok'
                    }
                ])
                
            }
    }

    return (
        <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                    <View style={styles.mainHeaderText}>
                        <Text styles={styles.mainHeaderText}>
                            Sign Up!
                        </Text>
                    </View>
                    <View style={styles.secondHeaderText}>
                        <Text style={styles.secondHeaderText}>
                            Create account and choose your food!
                        </Text>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        title="Username"
                        placeholder="Username"
                        onChangeText={
                            (text) => onchangeInput('userName', text)
                        }
                    />
                    <Input
                        title="Email"
                        placeholder="Your Email"
                        onChangeText={
                                (text) => onchangeInput('email', text)
                        }
                    />
                    {/* Menampilkan tulisan apabila email tidak sesuai format */}
                    {
                        isEmailCorrect ?
                        null
                        :
                        <View style={styles.warningContainer}>
                            <Text style={styles.warning}>
                                Please input the right email format !
                            </Text>
                        </View>
                    }
                    <Input
                        title="Password"
                        placeholder="Your Password"
                        onChangeText={
                            (text) => onchangeInput('password', text)
                        }
                        isPassword={true}
                        secureTextEntry={isPassVisible ? false : true}
                        iconName={isPassVisible ? 'eye-off' : 'eye'}
                        onPress={() => setIsPassVisible(!isPassVisible)}
                    />
                    {
                        isPasswordCorrect ?
                        null
                        :
                        <View style={styles.warningContainer}>
                            <Text style={styles.warning}>
                                Please input the right Password !
                            </Text>
                        </View>
                    } 
                </View>
                <View style={styles.bottomSection}>
                    <Button
                        style={styles.registerButton}
                        text="Register"
                        onPress={() => saveData()}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            Already have anccount ?
                        </Text>
                        <TouchableOpacity
                            onPress={
                                () => navigation.navigate('Login')
                            }>
                            <Text style={styles.LoginText}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                 </View>
            </View>
        </ScrollView>

    )
};

const styles = StyleSheet.create({
    scroll: {
        flexGrow: 1,
    },
    mainContainer: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: 'white'
    },
    mainHeaderText: {
        marginLeft: 20
    },  
    header: {
        // alignItems: 'flex-start'
    },
    inputContainer: {
        padding : 16,
        width: '100%'
    },
    textContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    text: {
        fontSize: 16
    },
    LoginText: {
        fontSize: 16
    },
    warningContainer: {
        marginBottom: 16,
        marginLeft: 16
    },
    warning: {
        color:'red'
    },
    registerButton: {
    flexDirection: 'row',
    backgroundColor: '#7BC07E',
    borderRadius: 8,
    height: hp('4.5%'),
    width: wp('90'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    },
    LoginText: {
        color: '#7BC07E'
    },
    bottomSection: {
        alignItems: 'center'
    }
})

export default RegisterScreen