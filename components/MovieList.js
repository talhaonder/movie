import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

var { width, height } = Dimensions.get('window');

export default function MovieList({ title, data }) {
    let movieName = 'Oppenheimer biggest bomb in the world'
    const navigation = useNavigation();
    return (
        <View style={{ marginBottom: 8, marginHorizontal: 4 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 20 }}>{title}</Text>
                <TouchableOpacity>
                    <Text style={styles.text}>See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {data.map((item, index) => (
                    <TouchableWithoutFeedback
                        key={index}
                        onPress={() => navigation.navigate('Movie', item)}
                    >
                        <View style={{ margin: 4 }}>
                            <Image source={require('../assets/image/oppenheimer.jpg')}
                                style={{ borderRadius: 25, marginLeft: 4, width: width * 0.33, height: height * 0.22 }} />
                            <Text style={{ color: "white", marginLeft: 4 }}>
                                {
                                    movieName.length > 14 ? movieName.slice(0, 14) + '...' : movieName
                                }
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = {
    text: {
        fontSize: 16,
    },
};
