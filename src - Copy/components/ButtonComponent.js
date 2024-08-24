import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const Button = (props) => {
    const {text, isLogout} = props;
    return (
        <View style={ 
            [
                styles.buttonContainer,
                {
                    backgroundColor: isLogout ?
                    'F87B7B' :  '#CAE3BBB'
                }
            ]
        }>
            <TouchableOpacity
                style={styles.button}
                {...props}
            >
                <Text style={styles.text}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    // buttonContainer: {
    //     alignItems: 'center',
    //     alignContent: 'center',
    //     borderWidth: 1,
    //     borderRadius: 8,
    //     // margin: 16
    // },
    // button: {
    //     padding: 8,
    //     borderRadius: 8,
    //     backgroundColor: 'grey'

    // },
    text: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center'
    }
})