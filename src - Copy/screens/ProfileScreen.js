import { View, Text, Image, StyleSheet } from 'react-native'
import { Input } from '../components/InputComponent'
import { useSelector, useDispatch } from 'react-redux'
import { Modal } from 'react-native'
import React, {useState} from 'react'
import { userLoginReducer } from '../../store/realm/reeducers/userLoginReducer'
import { Button } from '../components/ButtonComponent'

const ProfileScreen = () => {
  const globalData = useSelector(store => store.userLoginReducer)
  const dispatch = useDispatch()
  {
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/AvatarMaker.png')}
        />
      </View>

      <View style={styles.inputContainer}>
        <Input
          title="Username"
          editable={false}
          value={globalData.username}
        />

        <Input
          title="Password"
          editable={false}
          value={globalData.password}
        />

        <Input
          title="Email"
          editable={false}
          value={globalData.email}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center'
  },
  imageContainer: {
    margin: 16,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black'
  },
  inputContainer: {
    padding: 16,
    width: '100%'
  },
})

export default ProfileScreen