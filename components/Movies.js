import { View, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback, Image, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function Movies({ data }) {
    const navigation = useNavigation();
    const handleClick = (item)=>{
        navigation.navigate('Movie', item);
    }
    return (
        <View style={{ marginBottom: 8 }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20, marginBottom: 5, margin: 10 }}>Movies</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick}/>}
                firstItem={1}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ margin: 30}}
                inactiveSlideOpacity={0.60}
                sliderWidth={width}
                itemWidth={width * 0.62}
                slideStyle={{ display: "flex", alignItems: "center" }}
            />
        </View>
    );
}

const MovieCard = ({ item, handleClick }) => {
    return (
        <TouchableWithoutFeedback onPress={()=>handleClick(item)}>
            <Image
                source={require('../assets/image/inception.jpg')}
                style={{
                    width: width * 0.7,
                    height: height * 0.6,
                    borderRadius: 24,
                    margin: 30
                }}
            />
        </TouchableWithoutFeedback>
    );
}
