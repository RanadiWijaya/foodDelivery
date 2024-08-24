import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'
import { foodList } from '../../data/data'
import { Button } from '../components/ButtonComponent'
import React from 'react'
import { anotherFood } from '../../data/dataAnother'

const MenuScreen = (props) => {
  const navigation = props
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerText}>
        <Text style={styles.mainTitle}>
          Our Food
        </Text>
          <Text style={styles.secondTitle}>
            Special For You
          </Text>
      </View>
      <View style = {styles.searchBox}>
          <Icon
            name='search'
            type='font-awesome'
            size={18}
            style={styles.searchIcon}
            color='grey'
          /> 
                        
          <TextInput
            placeholder='Search Here'
            style={styles.searchInput}
            onChangeText={(text) => searchData(text)}
            // value={searchText}
          /> 
      </View>
      <FlatList
        data={foodList}
        key={0}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatlistContainer}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Detail")}
              style={styles.button}>
                <Image
                    source={{uri: item.image}}
                    style={styles.image}
                />
                  <Text style={styles.itemName}>
                    {item.name}
                  </Text>
                    <Text style={styles.description}>
                      {item.description}
                    </Text>
                    <Text style={styles.itemPrice}>
                      ${item.price}
                    </Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles =StyleSheet.create({
  mainContainer: {
    backgroundColor : 'white',
    flex: 1
  },
  searchBox: {
    flexDirection: 'row',
    borderWidth: 1,
    margin: 8,
    borderRadius: 10,
    alignItems: 'center'
  },
  searchIcon: {
    padding: 8,
  },
  searchInput: {
    height: 30,
    padding: 8,
    flex: 1
  },
  headerText: {
    marginTop: 16,
    marginBottom: 16
  },
  mainTitle: {
    marginLeft: 12,    fontSize: 28,
    fontWeight: 'bold',
    color: 'black'
  },
  secondTitle: {
    marginLeft: 12,
    fontSize: 20,
    color: 'green'
  },
  image: {
    width: 180,
    height: 300,
    borderRadius: 20,
    margin: 8
  },
  itemName: {
    textAlign: 'justify',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8
  },
  description: {
    textAlign: 'justify',
    fontSize: 16,
    marginLeft: 8
  },
  itemPrice: {
    color: '#27912C',
    marginBottom: 20,
    marginLeft: 8
  },
  flatlistContainer: {
    paddingRight: 20,
  }
})

export default MenuScreen