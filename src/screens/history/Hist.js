import React, { useLayoutEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableRipple,
  TouchableOpacity,
  Switch,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

import { FontAwesome, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const HistorysScreen = ({ navigation, route }) => {
  return (
    <ImageBackground
      source={require("../../../assets/images/hbac1.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headText}>History</Text>
        </View>
        <View style={styles.card}>
          <View>
            <Text style={{ fontSize: 20, marginHorizontal: 25, marginTop: 10 }}>
              24 Feb 2022
            </Text>
            <Text style={{ fontSize: 20, marginHorizontal: 30, marginTop: 15 }}>
              * 1kg Paper
            </Text>
            <Text style={{ fontSize: 20, marginHorizontal: 30 }}>
              * 1kg Cloth
            </Text>
            <Text style={{ fontSize: 20, marginHorizontal: 30 }}>
              * 1kg Plastic
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "#4cb050",
                  fontSize: 20,
                  textAlign: "center",
                  marginHorizontal: 25,
                  marginTop: 10,
                }}
              >
                Coins earned: 2
              </Text>
              <Text style={styles.priceText}>₹ 159</Text>
            </View>
          </View>
        </View>
        <View style={[styles.card1]}>
          <View>
            <Text style={{ fontSize: 20, marginHorizontal: 25, marginTop: 10 }}>
              25 Feb 2022
            </Text>
            <Text style={{ fontSize: 20, marginHorizontal: 30, marginTop: 15 }}>
              * 1kg Paper
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "#4cb050",
                  fontSize: 20,
                  textAlign: "center",
                  marginHorizontal: 25,
                  marginTop: 10,
                }}
              >
                Coins earned: 1
              </Text>
              <Text style={styles.priceText1}>₹ 50</Text>
            </View>
          </View>
        </View>
        <View style={[styles.card2, { marginTop: 50 }]}>
          <View>
            <Text style={{ fontSize: 20, marginHorizontal: 25, marginTop: 10 }}>
              25 Feb 2022
            </Text>
            <Text style={{ fontSize: 20, marginHorizontal: 30, marginTop: 15 }}>
              * 2kg Paper
            </Text>
            <Text style={{ fontSize: 20, marginHorizontal: 30 }}>
              * 1kg Cloth
            </Text>
            <Text style={{ fontSize: 20, marginHorizontal: 30 }}>
              * 1kg Plastic
            </Text>
            <Text style={{ fontSize: 20, marginHorizontal: 30 }}>
              * 1kg Metal
            </Text>
            <Text style={{ fontSize: 20, marginHorizontal: 30 }}>
              * 1kg E-Waste
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "#4cb050",
                  fontSize: 20,
                  textAlign: "center",
                  marginHorizontal: 25,
                  marginTop: 10,
                }}
              >
                Coins earned: 3
              </Text>
              <Text style={styles.priceText2}>₹ 399</Text>
            </View>
          </View>
        </View>
        <View style={[styles.card3, { marginTop: 50 }]}>
          <View>
            <Text style={{ fontSize: 20, marginHorizontal: 25, marginTop: 10 }}>
              26 Feb 2022
            </Text>
            <Text style={{ fontSize: 20, marginHorizontal: 30, marginTop: 15 }}>
              * 1kg Cloth
            </Text>
            <Text style={{ fontSize: 20, marginHorizontal: 30 }}>
              * 1kg Plastic
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "#4cb050",
                  fontSize: 20,
                  textAlign: "center",
                  marginHorizontal: 25,
                  marginTop: 10,
                }}
              >
                Coins earned: 1
              </Text>
              <Text style={styles.priceText3}>₹ 90</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  card: {
    backgroundColor: "#e0e0e0",
    marginVertical: 55,
    marginHorizontal: 20,
    borderRadius: 20,
    height: 180,
  },
  card1: {
    backgroundColor: "#e0e0e0",
    marginHorizontal: 20,
    borderRadius: 20,
    height: 130,
  },
  card2: {
    backgroundColor: "#e0e0e0",
    marginHorizontal: 20,
    borderRadius: 20,
    height: 230,
  },
  card3: {
    backgroundColor: "#e0e0e0",
    marginHorizontal: 20,
    borderRadius: 20,
    height: 150,
  },
  priceText: {
    color: "#f85548",
    fontFamily: "Poppins-Bold",
    fontSize: 55,
    marginTop: -80,
  },
  priceText1: {
    color: "#f85548",
    fontFamily: "Poppins-Bold",
    fontSize: 55,
    marginTop: -50,
  },
  priceText2: {
    color: "#f85548",
    fontFamily: "Poppins-Bold",
    fontSize: 55,
    marginTop: -115,
  },
  priceText3: {
    color: "#f85548",
    fontFamily: "Poppins-Bold",
    fontSize: 55,
    marginTop: -70,
  },
});

export default HistorysScreen;
