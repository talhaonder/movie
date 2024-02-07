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
import React, {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {fallbackMoviePoster, image185, searchMovies} from '../api/moviedb';
import {debounce} from 'lodash';
const {width, height} = Dimensions.get('window');

const SearchScreen = () => {
  const navigation = useNavigation();
  const [results, setResults] = useState([]);
  let movieName = 'Oppenheimer biggest bomb in the world';
  const handleSearch = value => {
    if (value && value.length > 2) {
      searchMovies({
        query: value,
        include_adult: 'false',
        language: 'en-US',
        page: '1',
      }).then(data => {
        //console.log('got movies: ', data);
        if (data && data.results) setResults(data.results);
      });
    } else {
      setResults([]);
    }
  };
  const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'rgb(30, 33, 29)'}}>
      <View style={styles.container}>
        <TextInput
          onChangeText={handleTextDebounce}
          placeholder="Search Movie"
          placeholderTextColor={'lightgray'}
          style={{
            paddingBottom: 10,
            paddingLeft: 15,
            color: 'white',
            fontWeight: '400',
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={{
            borderRadius: 999,
            padding: 12,
            margin: 4,
            backgroundColor: 'rgb(30, 33, 29)',
          }}>
          <Image
            source={require('../assets/icons/back.png')}
            style={{
              height: 30,
              width: 30,
            }}
          />
        </TouchableOpacity>
      </View>
      {results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 15}}
          style={{marginTop: 15}}>
          <Text style={{color: 'white', fontWeight: '400', marginLeft: 4}}>
            Results ({results.length})
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}>
            {results.map((item, index) => {
              console.log('Item:', item);
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => navigation.push('Movie', item)}>
                  <View style={{marginBottom: 16, marginTop: 8}}>
                    <Image
                      style={{
                        borderRadius: 25,
                        width: width * 0.44,
                        height: height * 0.3,
                      }}
                      source={{
                        uri: image185(item?.poster_path) || fallbackMoviePoster,
                      }}
                    />
                    <Text style={{color: 'rgb(142, 144, 143)', marginLeft: 4}}>
                      {item?.title && item?.title.length > 22
                        ? item?.title.slice(0, 22) + '...'
                        : item?.title}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            source={require('../assets/image/movieTime.png')}
            style={{
              height: height * 0.5,
              width: width,
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16, // mx-4
    marginBottom: 3, // mb-3
    flexDirection: 'row', // flex-row
    justifyContent: 'space-between', // justify-between
    alignItems: 'center', // items-center
    borderColor: 'rgb(94, 97, 94))', // border-neutral-500 (örnek renk)
    borderWidth: 1,
    marginTop: 13,
    borderRadius: 999, // rounded-full (büyük bir sayı ile daire yapar)
    // border-width
  },
});

export default SearchScreen;
