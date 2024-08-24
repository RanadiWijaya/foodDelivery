import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { foodList } from '../../data/data'
import { Button } from '../components/ButtonComponent'
import CartScreen from './CartScreen'
import MenuScreen from './MenuScreen'
import { anotherFood } from '../../data/dataAnother'

const HomeScreen = (props) => {
    const {navigation} = props
    return (
    <ScrollView>
        <View style={styles.mainContainer}>
        {/* Delivery Section */}
        <View style={styles.delivery}>
            <Text style={styles.mainText}>
                 Delivery to home
            </Text>
                <Text style={styles.secondText}>
                    Jl. Raya Kuta no.38
                </Text>
                        <Button
                            style={styles.locationButton}
                            text='2.5 km'
                        />     
        </View>
   
        {/* SearchBar */}
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
    
        {/* Best Seller */}
        <View style={styles.bestSelller}>
            <Text style={styles.bestSellerText}>
                Best seller
            </Text>
                <View style={styles.seeAllContainer}>
                      <TouchableOpacity
                        onPress={
                          () => navigation.navigate("Menu")}
                        >
                        <Text style={styles.seeAlltext}>
                          See All
                        </Text>
                      </TouchableOpacity>
                </View>
            
                <FlatList
                    horizontal={true}
                    data={foodList}
                    key={0}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Detail", {foodData: item})}
                                style={styles.button}>
                                    <Image
                                        source={{uri: item.image}}
                                        style={styles.image}
                                    />
                                    <Text style={styles.itemName}>
                                    {item.name}
                                    </Text>
                                        <Text style={styles.itemDescription}>
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

        {/* Another Food */}
        <View style={styles.anotherFood}>
            <View style={styles.anotherFoodTitle}>
                <Text style={styles.anotherFoodText}>
                    Another food
                </Text>
            </View>
                <View style={styles.seeAllContainer}>
                      <TouchableOpacity
                        onPress={
                          () => navigation.navigate("Menu")}
                        >
                        <Text style={styles.seeAlltext}>
                          See All
                        </Text>
                      </TouchableOpacity>
                </View>

                <FlatList
                    horizontal={true}
                    data={anotherFood}
                    key={0}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Detail", {foodData: item})}
                                style={styles.button}>
                                    <Image
                                        source={{uri: item.image}}
                                        style={styles.image}
                                    />
                                    <Text style={styles.itemName}>
                                        {item.name}
                                    </Text>
                                            <Text style={styles.itemPrice}>
                                                ${item.price}
                                            </Text>
                            </TouchableOpacity>
                        )
                    }}
                />
        </View>
        {/* Promo Section */}
        <View style={styles.advertise}>
            <Text style={styles.mainText}>
                Special Promo
            </Text>
                <Text style={styles.secondText}>
                    Sashimi set
                </Text>
                        <Button
                            style={styles.orderButton}
                            text= 'Order Now'>
                        </Button>
        </View>
    </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        flex: 1,
    },
    searchBox: {
        flexDirection: 'row',
        borderWidth: 1,
        margin: 20,
        padding: 8,
        borderRadius: 10,
        alignItems: 'center'
    },
    searchIcon: {
        padding: 8,
    },
    searchInput: {
        height: 30,
        padding: 8,
        flex: 1,
        color: 'black'
    },
    delivery: {
        backgroundColor:'#B0E8B2',
        marginTop: 12,
        marginLeft: 8,
        marginRight: 8,
        padding: 16,
        borderRadius: 8,
        color: 'white'
    },
    mainText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 4
    },
    secondText: {
        fontSize: 18
    },
    locationButton: {
        backgroundColor:'#27912C',
        alignItems: 'center',
        width: 155,
        padding: 8,
        borderRadius: 8,
        marginTop: 20
    },
    orderButton: {
        backgroundColor:'#27912C',
        alignItems: 'center',
        width: 155,
        padding: 8,
        borderRadius: 8,
        marginTop: 20
    },  
    advertise: {
        backgroundColor:'#B0E8B2',
        marginTop: 12,
        marginLeft: 8,
        marginRight: 8,
        padding: 16,
        borderRadius: 8,
        color: 'white'
    },
    bestSellerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 12,
        marginLeft: 8,
        marginRight: 20,
        textAlign: 'left'
    },
    anotherFood: {
        marginBottom: 20,
        marginTop: 30
    },  
    anotherFoodTitle: {
        alignItems: 'flex-start'
    },
    anotherFoodText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 12,
        marginLeft: 8,
        marginRight: 20,
        textAlign: 'left'
    },
    seeAllContainer: {
        alignItems: 'flex-end',
        marginRight: 12
    },
    seeAlltext: {
        color: '#009688',
        textDecorationLine: 'underline',
    },
    image: {
        width: 200,
        height: 200,
        marginLeft: 12,
        
    },
    itemName: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight:'bold'
    },
    itemDescription: {
        textAlign: 'center'
    },
    itemPrice: {
        textAlign: 'center',
        color: '#009688'
    }
    
})

export default HomeScreen