import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Input = (props) => {
    const {title, isPassword, iconName} = props;
    return (
        <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <Text>{title}</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    {...props}
                />
                {
                    isPassword ?
                    <View style={styles.iconContainer}>
                        <TouchableOpacity{...props}>
                            <Icon
                                name={iconName}
                                type='ionicon'
                                size={30}
                            />
                        </TouchableOpacity>
                    </View>
                    :
                    null
                }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        // marginBottom: 8,
        marginTop: 12
    },
    titleContainer: {
        // marginLeft: 16
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 8,
        // margin: 8,
    },
    input: {
        padding: 8,
        flex: 1,
        color: 'black',
        borderRadius: 8,
        backgroundColor: '#D9D9D9'
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 8,
        // margin: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconContainer: {
        padding: 8
    }
})
