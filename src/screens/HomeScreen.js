import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Movies from "../../components/Movies";
import { useNavigation } from "@react-navigation/native";
import { fetchMovies } from "../../api/moviedb";

export default function HomeScreen() {
  const [movies, setMovies] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);
  const navigation = useNavigation();

  //checking api
  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = async () => {
    const data = await fetchMovies();
    if (data && data.results) setMovies(data.results);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "rgb(30, 33, 29)" }}>
      <SafeAreaView>
        <StatusBar />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 10,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              source={require("../../assets/icons/user.png")}
              style={{
                height: 25,
                width: 25,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: "rgb(31, 199, 155)",
              fontWeight: "700",
              fontSize: 24,
            }}
          >
            <Text style={{ color: "white", fontWeight: "700" }}>Talh</Text>App
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <Image
              source={require("../../assets/icons/magnifying-glass.png")}
              style={{
                height: 25,
                width: 25,
              }}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 25, alignItems: "center" }}
        style={{}}
      >
        {movies.length > 0 && <Movies data={movies} />}
        <Text style={{ color: "rgb(142, 144, 143)" }}>
          Created at 02-05-2024 by. Talha Onder
        </Text>
      </ScrollView>
    </View>
  );
}
