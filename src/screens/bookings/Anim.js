import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class AnimScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/hbac2.png")}
        style={{ width: "100%", height: "110%" }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("TrackScreen")}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 13,
              borderRadius: 10,
              marginTop: 30,
              backgroundColor: "#c9e7cb",
            }}
          >
            <Image
              source={require("../../../assets/images/a1.png")}
              style={{ width: 20, height: 15 }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.headText}>Order</Text>
        </View>
        <Text
          style={{
            color: "#3b3b3b",
            fontFamily: "Inter-BoldItalic",
            fontSize: 50,
            textAlign: "center",
            marginTop: 10,
            textAlign: "center",
          }}
        >
          Hurray🎉🎊
        </Text>
        <Text
          style={{
            color: "#4cb050",
            fontFamily: "Inter-BoldItalic",
            fontSize: 18,
            marginTop: 10,
            textAlign: "center",
          }}
        >
          Order Placed
        </Text>
        <View style={{ margin: 20 }}>
          <Image
            source={require("../../../assets/images/thanks.gif")}
            style={{ width: 400, height: 350, alignItems: "center" }}
          />
        </View>
        <Text
          style={{
            color: "#4cb050",
            fontFamily: "Inter-BoldItalic",
            fontSize: 18,
            textAlign: "center",
          }}
        >
          2 Coins added to your wallet
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("HomeScreen")}
        >
          <LinearGradient colors={["#8bd68e", "#4cb050"]} style={styles.logIn}>
            <Text style={[styles.textSign, { color: "#fff" }]}>
              Back To Home
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
    color: "#FFF",
    fontFamily: "Poppins-Bold",
    fontSize: 35,
    textAlign: "center",
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
