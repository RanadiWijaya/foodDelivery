import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Input } from 'react-native-elements'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import { Button } from '../components/ButtonComponent'
import { useDispatch, useSelector } from 'react-redux'
import Counter from 'react-native-counters'
import { saveChart } from '../../store/actions/chartAction'
import { foodList } from '../../data/data'
// import NumericInput from 'react-native-numeric-input'


const DetailMenuScreen = (props) => {
  const {route} = props
  const foodData = route.params.foodData
  const [quantity, setQuantity] = useState(1) 
  const [totalPrice,settotalPrice] = useState(0)
  const dispatch = useDispatch()
  const chartData = useSelector(store => store.chartReducers.chart)
  const {navigation} = props

  useEffect (() => {
    settotalPrice(quantity*foodData.price)
  },[quantity])

  const savedataChart = () => {
    dispatch(saveChart({
      ...foodData, 
      quantity:quantity, 
      totalPrice: totalPrice
    }));
      navigation.navigate('Cart')
    console.log(chartData)
  }
  return (
    // <NumericInput 
    //   value={quantity}
    //   onChange={value => setQuantity(value)}
    // />
    
            <View style={styles.mainContainer}>
              <Image
                source={{uri: foodData.image}}
                style={styles.image}
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>
                  {foodData.name}
                </Text>
                  <Text style={styles.description}>
                    {foodData.description}
                  </Text>
                    <Text style={styles.price}>
                      ${foodData.price}
                    </Text>
                      {/* <TextInput
                        value={quantity.toString()}
                        onChangeText={value => setQuantity(value == "" ? 0 : parseInt(value))}
                        keyboardType='numeric'
                      /> */}
                      <Counter start={1}
                        min = {1}
                        onChange={(number, type) =>{
                          setQuantity(number)
                        }}

                      />
                        <Text style={styles.totalPrice}>
                          ${totalPrice}
                        </Text>
                          <Button
                            style={styles.button}
                            text='Add to chart'
                            onPress={() => savedataChart()}
                          /> 
              </View>
            </View>      
  )
}

const styles = StyleSheet.create({
  input: {

  },
  mainContainer: {
    backgroundColor: 'white',
    flex: 1
    
  },
  textContainer: {
    marginTop: 20,
    marginLeft: 12,
  },
  title:{
    fontSize: 26,
    color: '#27912C'
  },
  description:{
    fontSize: 16
  },
  image: {
    width: 350,
    height: 400,
    alignItems: 'center',
    margin: 12
  },
  price: {
    color: '#27912C'
  },
  totalPrice:{
    color: '#27912C'
  },
  button: {
    marginTop: 100,
    marginRight: 12,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#27912C',
    width: 355,
    height: 40,
    borderRadius: 20
  }
})
export default DetailMenuScreen