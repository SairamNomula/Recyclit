import React, { useLayoutEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

export default class ProfilesScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/hbac3.png")}
        style={{ width: "100%", height: "110%" }}
      >
        <ScrollView>
          <TouchableOpacity
            style={{
              paddingHorizontal: 10,
              paddingVertical: 13,
              borderRadius: 10,
              marginTop: 60,
              backgroundColor: "#c9e7cb",
              marginLeft: 380,
              marginRight: 15,
            }}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Image
              source={require("../../../assets/images/exit.png")}
              style={{ height: 25, width: 20 }}
            />
          </TouchableOpacity>
          <View style={styles.container}>
            <Image
              source={require("../../../assets/images/profi.png")}
              style={{
                height: 120,
                width: 120,
                alignSelf: "center",
                marginTop: 10,
                borderRadius: 20,
              }}
            />
            <Text
              style={{
                color: "#4cb050",
                fontFamily: "Inter-BoldItalic",
                fontSize: 18,
                width: 200,
                marginTop: 10,
                marginBottom: 50,
                alignSelf: "center",
                textAlign: "center",
              }}
            >
              Recyclit
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.card}>
              <View>
                <Text style={{ fontSize: 50, textAlign: "center" }}>15</Text>
                <Text style={{ fontSize: 20, textAlign: "center" }}>
                  Recycled
                </Text>
              </View>
            </View>
            <View style={styles.card}>
              <View>
                <Text style={{ fontSize: 50, textAlign: "center" }}>20</Text>
                <Text style={{ fontSize: 20, textAlign: "center" }}>Coins</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("RewardScreen")}
            style={{ marginTop: 200 }}
          >
            <LinearGradient
              colors={["#8bd68e", "#4cb050"]}
              style={styles.logIn}
            >
              <Text style={[styles.textSign, { color: "#fff" }]}>Rewards</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
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
    color: "#4c4ef9",
  },
  subheadText: {
    fontFamily: "Inter-MediumItalic",
    fontSize: 20,
    paddingVertical: 10,
    paddingRight: 80,
    lineHeight: 15,
    color: "#fff",
  },
  card: {
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    height: 100,
    width: 100,
    marginLeft: 80,
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
