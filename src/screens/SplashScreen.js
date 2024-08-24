import React, {useEffect, useState} from "react";
import { View, ImageBackground, Image, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../../store/actions/userLoginAction";
import realm from "../../store/realm";

const SplashScreen = (props) => {
    const {navigation} = props;
    const isLogin = useSelector(store => store.userLoginReducer.isLogin);
    const dispatch = useDispatch()
    useEffect(() => {
    }, [])
    
    useEffect(() => {
        const user = realm.objects('User').filtered('isLogin=true')
        setTimeout(() => {
            if(user.length > 0) {
                dispatch(saveUser(user[0]))
                navigation.replace('Start');
            }
            else{
                navigation.replace('Register');

            }
        }, 1500);
    }, []);

    return (
        <View style = {styles.mainContainer}>
            <ImageBackground
                style={styles.ImageBackground}
                source={require('../../assets/images/splashScreen.jpg')}
            >
            </ImageBackground>
        </View>
    );
};

export default SplashScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    ImageBackground: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})
