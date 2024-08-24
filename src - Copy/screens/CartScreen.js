import { View, Text, Image, StyleSheet, Alert } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Button } from '../components/ButtonComponent'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'
import Counter from 'react-native-counters'

const CartScreen = (props) => {
  const {navigation} = props
  const {route} = props
  const chartData = useSelector(store => store.chartReducers.chart)
  const [quantity, setQuantity] = useState(1) 
  const [allTotalPrice, setallTotalPrice] = useState(0)
  const checkout = () =>{
    Alert.alert('Thank you', 'Your Order Succes')
    
  }

  useEffect (() => {
    const noteListPage = navigation.addListener('focus', () => 
      {
        let totalPrice =  0
        chartData.forEach((item) => {
          totalPrice += item.totalPrice
        })
        setallTotalPrice(totalPrice)
      });
      return noteListPage
  },[])
    return (
    <View style={styles.container}>
      <FlatList
        data={chartData}
        keyExtractor={(item) => item.totalPrice}
        renderItem={({item})=> {
          return (
            <View style={styles.mainContainer}>
              <Image
                source={{uri: item.image}}
                style={styles.image}
              />
              {/* <View style={styles.textContainer}> */}
              <View style={styles.secondContainer}>
                <Text style={styles.title}>
                  {item.name}
                </Text>
                  <Text style={styles.description}>
                    {item.description}
                  </Text>
                    <Text style={styles.price}>
                      ${item.totalPrice}
                    </Text>
                      {/* <TextInput
                        value={quantity.toString()}
                        onChangeText={value => setQuantity(value == "" ? 0 : parseInt(value))}
                        keyboardType='numeric'
                      /> */}
                      {/* <Counter 
                        start={item.quantity}
                        min = {1}
                        onChange={(number, type) =>{
                          setQuantity(number)
                        }}
                      /> */}
                      <View style={styles.totalPrice}>
                      <Text style={styles.totalPrice}>
                        {item.quantity}
                      </Text>    
                      </View>
              </View>
            {/* </View> */}
      </View>  
        
        )
      }}

      />
      <Text>
        {allTotalPrice}
      </Text>
        <Button
          style={styles.button}
          text='Checkout'
          onPress={() => checkout()}
        /> 
    </View>
  )
}


const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: 'white'
  // },
  mainContainer: {
    flexDirection: 'row'
  },
  secondContainer: {
    alignItems: 'flex-start'
  },
  textContainer: {
    margin: 17
  },
  title: {
    textAlign: 'right',
    fontSize: 20,
    color: '#27912C'
  },
  description:{
    fontSize: 16
  },
  image: {
    width: 100,
    height: 100,
    margin: 12
  },
  price: {
    color: '#27912C'
  },
  totalPrice:{
    color: '#27912C'
  },
  button: {
    marginRight: 12,
    marginLeft: 12,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#27912C',
    width: 355,
    height: 40,
    borderRadius: 20
  },
  totalPrice: {
    color: '#27912C'
  }

})
export default CartScreen