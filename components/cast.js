/*import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'


export default function Cast({ cast }) {
    let personName = 'Keanu Reevs';
    let characterName = 'John Wick'
    return (
        <View style={{ margin: 24, marginVertical: 25 }}>
            <Text style={{ color: "white", fontWeight: "500", marginLeft: 16, marginBottom: 5 }}>Top Cast</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {
                    cast && cast.map((person, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={{ margin: 16, alignItems: "center" }}
                            >
                                <View
                                    style={{overflow:'hidden', }}
                                >
                                    <Image source={require('../assets/image/oppenheimer.jpg')} style={{height: 24, width: 20, borderRadius: 10
                                    }} />
                                </View>
                                <Text style={{ color: "white", fontWeight: "400", marginTop: 1 }}>
                                    {
                                        characterName.length > 10 ? characterName.slice(0, 10) + '...' : characterName
                                    }
                                </Text>
                                <Text style={{ color: "rgb(129, 132, 128)", fontWeight: "400", marginTop: 1 }}>
                                    {
                                        personName.length > 10 ? personName.slice(0, 10) + '...' : personName
                                    }
                                </Text>

                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}*/