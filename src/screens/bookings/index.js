import React, { useLayoutEffect, useState } from "react";
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
import { Icon } from "react-native-elements";
import { colors, parameters } from "../../components/styles";
import Counter from "../../components/Counter";

const BookingsScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../../assets/images/hbac2.png")}
      style={{ width: "100%", height: "110%" }}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headText}>Bookings</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("TrackScreen")}>
          <View
            style={{
              flexDirection: "row",
              height: 50,
              backgroundColor: colors.grey6,
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 15,
              marginTop: 30,
              borderRadius: 10,
            }}
          >
            <View style={{ marginLeft: 10 }}>
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.lightgreen}
                size={26}
              />
            </View>
            <Text style={{ marginLeft: 15, fontSize: 20, color: colors.black }}>
              Choose Location
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 15,
                backgroundColor: "white",
                paddingHorizontal: 10,
                paddingVertical: 2,
                borderRadius: 20,
              }}
            >
              <Icon
                type="material-community"
                name="clock-time-four"
                color={colors.grey1}
                size={26}
              />
              <Text style={{ marginLeft: 5 }}>Now</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            height: 50,
            backgroundColor: colors.grey6,
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 15,
            borderRadius: 10,
          }}
        >
          <View style={{ marginLeft: 10 }}>
            <Icon
              type="material-community"
              name="calendar"
              color={colors.lightgreen}
              size={26}
            />
          </View>
          <Text
            style={{
              marginLeft: 15,
              fontSize: 20,
              color: colors.black,
            }}
          >
            Choose PickUp Date
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 15,
              backgroundColor: "white",
              paddingHorizontal: 10,
              paddingVertical: 2,
              borderRadius: 20,
            }}
          >
            <Icon
              type="material-community"
              name="chevron-down"
              color={colors.grey1}
              size={26}
            />
          </View>
        </View>

        <View style={styles.card}>
          <View
            style={{
              flexDirection: "row",
              height: 50,
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 15,
            }}
          >
            <Text style={{ marginLeft: 15, fontSize: 20, color: colors.black }}>
              Paper
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 15,
                marginTop: 10,
                paddingHorizontal: 10,
                paddingVertical: 2,
                borderRadius: 20,
              }}
            >
              <Counter />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              height: 50,
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 15,
            }}
          >
            <Text style={{ marginLeft: 15, fontSize: 20, color: colors.black }}>
              E-Waste
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 15,
                marginTop: 10,
                paddingHorizontal: 10,
                paddingVertical: 2,
                borderRadius: 20,
              }}
            >
              <Counter />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              height: 50,
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 15,
            }}
          >
            <Text style={{ marginLeft: 15, fontSize: 20, color: colors.black }}>
              Metal
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 15,
                marginTop: 10,
                paddingHorizontal: 10,
                paddingVertical: 2,
                borderRadius: 20,
              }}
            >
              <Counter />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              height: 50,
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 15,
            }}
          >
            <Text style={{ marginLeft: 15, fontSize: 20, color: colors.black }}>
              Plastic
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 15,
                marginTop: 10,
                paddingHorizontal: 10,
                paddingVertical: 2,
                borderRadius: 20,
              }}
            >
              <Counter />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              height: 50,
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 15,
            }}
          >
            <Text style={{ marginLeft: 15, fontSize: 20, color: colors.black }}>
              Cloth
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 15,
                marginTop: 10,
                paddingHorizontal: 10,
                paddingVertical: 2,
                borderRadius: 20,
              }}
            >
              <Counter />
            </View>
          </View>
        </View>

        <View style={styles.card1}>
          <View
            style={{
              flexDirection: "row",
              height: 50,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                marginLeft: 15,
                fontSize: 20,
                color: colors.black,
              }}
            >
              Grand Total
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 25,
                marginTop: 5,
                backgroundColor: "#4bc050",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 20,
              }}
            >
              <Text style={{ marginLeft: 5, fontSize: 20, color: "white" }}>
                5 Kgs
              </Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              color: "#4cb050",
              fontFamily: "Inter-BoldItalic",
              fontSize: 25,
              marginTop: 15,
              marginLeft: 30,
            }}
          >
            Amount You Received:{" "}
          </Text>
          <Text
            style={{
              color: "#f85548",
              fontFamily: "Inter-BoldItalic",
              fontSize: 35,
              marginTop: 10,
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            ₹ 290
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("AnimScreen")}>
          <LinearGradient colors={["#8bd68e", "#4cb050"]} style={styles.logIn}>
            <Text style={[styles.textSign, { color: "#fff" }]}>
              Recycle Now
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  headText: {
    color: "#FFF",
    fontFamily: "Poppins-Bold",
    fontSize: 35,
    width: 200,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 60,
  },
  subheadText: {
    fontFamily: "Inter-MediumItalic",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
    color: "#3b3b3b",
  },
  card: {
    backgroundColor: "#e0e0e0",
    marginVertical: 15,
    marginHorizontal: 20,
    borderRadius: 20,
    height: 260,
  },
  card1: {
    backgroundColor: "#e0e0e0",
    marginHorizontal: 50,
    borderRadius: 20,
    height: 55,
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

export default BookingsScreen;
