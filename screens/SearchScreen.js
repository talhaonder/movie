import React, { useCallback, useState } from 'React';
import {
    View,
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    Text,
    TouchableWithoutFeedback,
    Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { debounce } from 'lodash';
import { fallbackMoviePoster, image185, searchMovies } from '../api/moviedb';

const { width, height } = Dimensions.get('window');

const SearchScreen = () => {
    const navigation = useNavigation();
    const [results, setResults] = useState([]);
    const [movieName, setMovieName] = useState(
        'Oppenheimer biggest bomb in the world',
    );

    const handleSearch = useCallback(value => {
        if (value && value.length > 2) {
            searchMovies({
                query: value,
                include_adult: 'false',
                language: 'en-US',
                page: '1',
            }).then(data => {
                if (data && data.results) {
                    setResults(data.results);
                }
            });
        } else {
            setResults([]);
        }
    }, []);

    const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={handleTextDebounce}
                    placeholder="Search Movie"
                    placeholderTextColor="lightgray"
                    style={styles.input}
                />
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                    style={styles.backButton}>
                    <Image
                        source={require('../assets/icons/back.png')}
                        style={styles.backIcon}
                    />
                </TouchableOpacity>
            </View>
            {results.length > 0 ? (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.resultsContainer}>
                    <Text style={styles.resultsText}>Results ({results.length})</Text>
                    <View style={styles.moviesContainer}>
                        {results.map((item, index) => (
                            <TouchableWithoutFeedback
                                key={index}
                                onPress={() => navigation.push('Movie', item)}>
                                <View style={styles.movieItem}>
                                    <Image
                                        style={styles.movieImage}
                                        source={{
                                            uri: image185(item?.poster_path) || fallbackMoviePoster,
                                        }}
                                    />
                                    <Text style={styles.movieTitle}>
                                        {item?.title && item?.title.length > 22
                                            ? item?.title.slice(0, 22) + '...'
                                            : item?.title}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        ))}
                    </View>
                </ScrollView>
            ) : (
                <View style={styles.noResultsContainer}>
                    <Image
                        source={require('../assets/image/movieTime.png')}
                        style={styles.noResultsImage}
                    />
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(30, 33, 29)',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
        marginBottom: 3,
        marginTop: 13,
        borderWidth: 1,
        borderRadius: 999,
        borderColor: 'rgb(94, 97, 94)',
    },
    input: {
        paddingBottom: 10,
        paddingLeft: 15,
        color: 'white',
        fontWeight: '400',
        flex: 1,
    },
    backButton: {
        borderRadius: 999,
        padding: 12,
        margin: 4,
        backgroundColor: 'rgb(30, 33, 29)',
    },
    backIcon: {
        height: 30,
        width: 30,
    },
    resultsContainer: {
        paddingHorizontal: 15,
        marginTop: 15,
    },
    resultsText: {
        color: 'white',
        fontWeight: '400',
        marginLeft: 4,
    },
    moviesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    movieItem: {
        marginBottom: 16,
        marginTop: 8,
    },
    movieImage: {
        borderRadius: 25,
        width: width * 0.44,
        height: height * 0.3,
    },
    movieTitle: {
        color: 'rgb(142, 144, 143)',
        marginLeft: 4,
    },
    noResultsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    noResultsImage: {
        height: height * 0.5,
        width: width,
    },
});

export default SearchScreen;
