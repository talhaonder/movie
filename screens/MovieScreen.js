import { View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView, StatusBar, Dimensions, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import cast from '../components/cast';
import Cast from '../components/cast';
var { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const topMargin = ios ? '' : 'marginTop: 3';

export default function MovieScreen() {
    const { params: item } = useRoute();
    const [isFavourite, toggleFavourite] = useState(false);
    const navigation = useNavigation();
    const [cast, setCast] = useState([1, 2, 3, 4, 5]);
    let movieName = 'T E N E T'

    useEffect(() => {
        // Kodunuz useEffect için
    }, [item]);

    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            style={{ flex: 1, backgroundColor: '#151714' }}
        >
            <View style={{ width: '100%' }}>
                <StatusBar />
                <SafeAreaView style={{
                    zIndex: 20,
                    width: width,
                    height: height,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    position: "absolute",
                    paddingHorizontal: 16, // Gerekirse dolguyu ayarlayın
                    marginTop: 15
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/icons/back.png')} style={{ height: 25, width: 25 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                        <Image
                            source={isFavourite ? require('../assets/icons/like_filled.png') : require('../assets/icons/like_empty.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    </TouchableOpacity>
                </SafeAreaView>
                <View>
                    <Image source={require('../assets/image/tenet.jpg')} style={{ width, height: height * 0.55 }} />
                </View>
                <View style={{ flex: 1, backgroundColor: 'rgb(21, 23, 22)', justifyContent: 'center', alignItems: 'center' }}>
                </View>
            </View>
            <View style={{ marginTop: -(height * 0.01), marginBottom: 12 }}>
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 45 }}>
                    {
                        movieName
                    }
                </Text>
                <Text style={{ color: "rgb(129, 132, 128)", fontWeight: "400", fontSize: 20, textAlign: "center", marginTop: 5 }}>
                    Released • 2020 • 160min
                </Text>
                <View style={{ flexDirection: "row", justifyContent: "center", marginLeft: 4, paddingLeft: 4 }}>
                    <Text style={{ color: "rgb(129, 132, 128)", fontWeight: "400", fontSize: 20, textAlign: "center", marginTop: 5 }}>
                        Action •
                    </Text>
                    <Text style={{ color: "rgb(129, 132, 128)", fontWeight: "400", fontSize: 20, textAlign: "center", marginTop: 5, marginLeft: 4 }}>
                        Thrill •
                    </Text>
                    <Text style={{ color: "rgb(129, 132, 128)", fontWeight: "400", fontSize: 20, textAlign: "center", marginTop: 5, marginLeft: 4 }}>
                        Comedy
                    </Text>
                </View>
                <Text style={{ color: "rgb(129, 132, 128)", marginHorizontal: 20, letterSpacing: 2, marginTop: 15, }}>
                    Tenet, Christopher Nolan’ın senaryosunu yazıp yönetmenliğini yaptığı; başrollerini John David Washington, Robert Pattinson, Elizabeth Debicki ve Kenneth Branagh’ın paylaştığı Birleşik Krallık ve Amerika Birleşik Devletleri ortak yapımı casus filmi. İlk kez 26 Ağustos 2020'de dünya genelinde 70 farklı ülkede vizyona girdi.[2]

                    Hikayesi, 5 harflik Latin palindromlarından biri olan Sator Karesi'ne dayanmaktadır. Eski Hristiyan kaynaklarında da yer alan bu palindromun en eski örnekleri Pompeii Harabeleri'nde bulunmuştur. Sator karesi'nin gizemi hala çözülememiştir.
                </Text>
            </View>
            <Text>
                <Cast cast={cast}/>
            </Text>
        </ScrollView>
    );
}
