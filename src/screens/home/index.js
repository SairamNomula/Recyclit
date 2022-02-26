import React, { useLayoutEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/hbac1.png")}
        style={{ width: "100%", height: "105%" }}
      >
        <View style={{ marginTop: 80, alignItems: "center" }}>
          <Text style={styles.headText}>RECYCLIT</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.subheadText}>How It Works?</Text>
          <View style={{ flexDirection: "row", margin: 50 }}>
            <View>
              <Image
                source={require("../../../assets/images/package.png")}
                style={{ height: 50, width: 50, marginHorizontal: 25 }}
              />
              <Text
                style={{ fontSize: 20, marginTop: 10, marginHorizontal: 25 }}
              >
                Pack
              </Text>
            </View>
            <View>
              <Image
                source={require("../../../assets/images/booki.png")}
                style={{ height: 50, width: 50, marginHorizontal: 25 }}
              />
              <Text
                style={{ fontSize: 20, marginTop: 10, marginHorizontal: 30 }}
              >
                Book
              </Text>
            </View>
            <View>
              <Image
                source={require("../../../assets/images/delivery.png")}
                style={{ height: 50, width: 50, marginHorizontal: 25 }}
              />
              <Text
                style={{ fontSize: 20, marginTop: 10, marginHorizontal: 20 }}
              >
                Collect
              </Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.card1}>
            <View style={{ alignItems: "center", paddingTop: 10 }}>
              <Image
                source={require("../../../assets/images/paper.png")}
                style={{ height: 50, width: 50, marginHorizontal: 25 }}
              />
            </View>
          </View>
          <View style={styles.card1}>
            <View style={{ alignItems: "center", paddingTop: 10 }}>
              <Image
                source={require("../../../assets/images/plastic.png")}
                style={{ height: 50, width: 50, marginHorizontal: 25 }}
              />
            </View>
          </View>
          <View style={styles.card1}>
            <View style={{ alignItems: "center", paddingTop: 10 }}>
              <Image
                source={require("../../../assets/images/waste.png")}
                style={{ height: 50, width: 50, marginHorizontal: 25 }}
              />
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginHorizontal: 70 }}>
          <View style={styles.card2}>
            <View style={{ alignItems: "center", paddingTop: 10 }}>
              <Image
                source={require("../../../assets/images/metal.png")}
                style={{ height: 50, width: 50, marginHorizontal: 25 }}
              />
            </View>
          </View>
          <View style={styles.card2}>
            <View style={{ alignItems: "center", paddingTop: 10 }}>
              <Image
                source={require("../../../assets/images/cloth.png")}
                style={{ height: 50, width: 50 }}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Book")}
        >
          <LinearGradient colors={["#7f8c8d", "#3b3b3b"]} style={styles.logIn}>
            <Text style={[styles.textSign, { color: "#fff" }]}>
              Book A Pickup
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headText: {
    fontSize: 40,
    fontFamily: "Poppins-Bold",
    color: "#fff",
  },
  subheadText: {
    fontFamily: "Inter-MediumItalic",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
    color: "#3b3b3b",
  },
  card: {
    backgroundColor: "#c9e7cb",
    marginVertical: 65,
    marginHorizontal: 20,
    borderRadius: 20,
    height: 200,
  },
  card1: {
    backgroundColor: "#4cb050",
    borderRadius: 50,
    width: 80,
    height: 80,
    marginHorizontal: 30,
    marginTop: 10,
  },
  card2: {
    backgroundColor: "#4cb050",
    borderRadius: 50,
    width: 80,
    height: 80,
    marginHorizontal: 30,
    marginTop: 20,
  },
  logIn: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 120,
    marginRight: 120,
    marginTop: 20,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
