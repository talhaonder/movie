import { View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image, ScrollView, Text, TouchableWithoutFeedback, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const SearchScreen = () => {
    const navigation = useNavigation();
    const [results, setResults] = useState([]);
    let movieName = 'Oppenheimer biggest bomb in the world'
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(30, 33, 29)" }}>
            <View style={styles.container}>
                <TextInput
                    placeholder='Search Movie'
                    placeholderTextColor={'lightgray'}
                    style={{ paddingBottom: 10, paddingLeft: 15, color: "white", fontWeight: "400" }}
                />
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Home') }}
                    style={{ borderRadius: 999, padding: 12, margin: 4, backgroundColor: "rgb(30, 33, 29)" }}
                >
                    <Image source={require('../assets/icons/back.png')} style={{
                        height: 30, width: 30
                    }} />
                </TouchableOpacity>
            </View>
            {
                results.length > 0 ? (
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 15 }}
                        style={{ marginTop: 15 }}
                    >
                        <Text style={{ color: "white", fontWeight: "400", marginLeft: 4 }}>Results ({results.length})</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
                            {
                                results.map((item, index) => {
                                    return (
                                        <TouchableWithoutFeedback
                                            key={index}
                                            onPress={() => navigation.push("Movie", item)}
                                        >
                                            <View style={{ marginBottom: 16, marginTop: 8 }}>
                                                <Image style={{ borderRadius: 25, width: width * 0.44, height: height * 0.3 }} source={require('../assets/image/oppenheimer.jpg')} />
                                                <Text style={{ color: "rgb(142, 144, 143)", marginLeft: 4 }}>
                                                    {
                                                        movieName.length > 22 ? movieName.slice(0, 22) + '...' : movieName
                                                    }
                                                </Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                ) : (
                    <View style={{flexDirection: "row", justifyContent: "center"}}>
                        <Image source={require('../assets/image/movieTime.png')} style={{height: height*0.5, width: width
                        ,}}/>
                    </View>
                )
            }

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,       // mx-4
        marginBottom: 3,            // mb-3
        flexDirection: 'row',      // flex-row
        justifyContent: 'space-between', // justify-between
        alignItems: 'center',       // items-center
        borderColor: "rgb(94, 97, 94))",     // border-neutral-500 (örnek renk)
        borderWidth: 1,
        marginTop: 13,
        borderRadius: 999,          // rounded-full (büyük bir sayı ile daire yapar)
        // border-width
    },
});

export default SearchScreen;
