import {FlatList, SafeAreaView, StyleSheet, Text, View, StatusBar, Image, ImageBackground } from "react-native";
import {Feather} from "@expo/vector-icons";

const DATA = [
  {
    dt_txt: '2023-22-17',
    main: {
      temp_max: 8.53,
      temp_min: 7.37,
    },
    weather: [{ main: 'Clear' }],
  },
  {
    dt_txt: '2023-02-17',
    main: {
      temp_max: 6.63,
      temp_min: 4.35,
    },
    weather: [{ main: 'Clouds' }],
  },
  {
    dt_txt: '2023-12-17',
    main: {
      temp_max: 2.55,
      temp_min: 5.23,
    },
    weather: [{ main: 'Rain' }],
  },
]

const Item = (props) => {
  const { dt_txt, min, max, condition } = props;

  return (
    <View style={styles.item}>
      <Feather name={'sun'} size={50} color={'white'} />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}

export default function UpcomingWeather () {

  const renderItem = ({ item }) =>
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require("../../assets/upcoming-background.png")} style={styles.image}>

        <Text>Upcoming Weather</Text>

        <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.dt_txt} />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'royalblue'
  },
  temp: {
    color: 'white',
    fontSize: 20,
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
  image: {
    flex: 1,
  }
})