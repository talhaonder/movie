import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  fallbackMoviePoster,
  fetchMovieDetails,
  image500,
} from "../../api/moviedb";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { toggleFavourite } from "../../redux/actions/likeAction";
import { useDispatch, useSelector } from 'react-redux';


var { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const topMargin = ios ? "" : "marginTop: 3";

export default function MovieScreen() {
  const { params: item } = useRoute();
  const dispatch = useDispatch();
  const favourites = useSelector(state => state.favourites);
  const isFavourite = favourites.includes(item.id);
  const navigation = useNavigation();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieDetails(item.id);
    loadFavouriteStatus();
  }, [item]);

  const getMovieDetails = async (id) => {
    const data = await fetchMovieDetails(id);
    if (data) setMovie(data);
  };

  const FavouriteButton = ({ item }) => {
    const dispatch = useDispatch();
    const favourites = useSelector(state => state.favourites);
    const isFavourite = favourites.includes(item.id);
  
    const handleToggleFavourite = () => {
      dispatch(toggleFavourite(item.id));
    };
  };
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      style={{ flex: 1, backgroundColor: "#151714" }}
    >
      <View style={{ width: "100%" }}>
        <StatusBar />
        <SafeAreaView
          style={{
            zIndex: 20,
            width: width,
            height: height,
            flexDirection: "row",
            justifyContent: "space-between",
            position: "absolute",
            paddingHorizontal: 16, // Gerekirse dolguyu ayarlayın
            marginTop: 15,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../assets/icons/back.png")}
              style={{ height: 25, width: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleToggleFavourite}>
            <Image
              source={
                isFavourite
                  ? require("../../assets/icons/like_filled.png")
                  : require("../../assets/icons/like_empty.png")
              }
              style={{ height: 30, width: 30 }}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={{
              uri: image500(movie?.poster_path) || fallbackMoviePoster,
            }}
            style={{ width, height: height * 0.77 }}
          />
        </View>
      </View>
      <View style={{ marginTop: -(height * 0.001), marginBottom: 12 }}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 45,
          }}
        >
          {movie?.title}
        </Text>
        {movie?.id ? (
          <Text
            style={{
              color: "rgb(129, 132, 128)",
              fontWeight: "400",
              fontSize: 20,
              textAlign: "center",
              marginTop: 5,
            }}
          >
            {movie?.status} • {movie?.release_date?.split("-")[0]} •{" "}
            {movie?.runtime}min
          </Text>
        ) : null}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginLeft: 4,
            paddingLeft: 4,
          }}
        >
          {movie?.genres?.map((genre, index) => {
            let showDot = index + 1 != movie.genres.length;
            return (
              <Text
                key={index}
                style={{
                  color: "rgb(129, 132, 128)",
                  fontWeight: "400",
                  fontSize: 20,
                  textAlign: "center",
                  marginTop: 5,
                  marginLeft: 5,
                }}
              >
                {genre?.name} {showDot ? "•" : null}
              </Text>
            );
          })}
          {/*<Text style={{ color: "rgb(129, 132, 128)", fontWeight: "400", fontSize: 20, textAlign: "center", marginTop: 5 }}>
                        Action •
                    </Text>
                    <Text style={{ color: "rgb(129, 132, 128)", fontWeight: "400", fontSize: 20, textAlign: "center", marginTop: 5, marginLeft: 4 }}>
                        Thrill •
                    </Text>
                    <Text style={{ color: "rgb(129, 132, 128)", fontWeight: "400", fontSize: 20, textAlign: "center", marginTop: 5, marginLeft: 4 }}>
                        Comedy
                    </Text>*/}
        </View>
        <Text
          style={{
            color: "rgb(129, 132, 128)",
            marginHorizontal: 20,
            letterSpacing: 2,
            marginTop: 15,
          }}
        >
          {movie?.overview}
        </Text>
      </View>
    </ScrollView>
  );
}