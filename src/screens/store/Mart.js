import React, { useLayoutEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableRipple,
  TouchableOpacity,
  Switch,
} from "react-native";

import { FontAwesome, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-snap-carousel";
import Coupon from "../../components/Coupon";

const { width, height } = Dimensions.get("window");

const coupons = [
  {
    id: 1,
    icon: require("../../../assets/images/speaker.png"),
    title: "Advertisment",
    desc: "Avail your Discounts",
    onPress: () => {
      navigation.navigate("DeliveryAddressScreen");
    },
  },
];

const offers = [
  { id: 1, image: require("../../../assets/images/card-one.png") },
  { id: 2, image: require("../../../assets/images/card-two.png") },
  { id: 3, image: require("../../../assets/images/card-three.png") },
  { id: 4, image: require("../../../assets/images/card-one.png") },
  { id: 5, image: require("../../../assets/images/card-two.png") },
  { id: 6, image: require("../../../assets/images/card-three.png") },
  { id: 7, image: require("../../../assets/images/card-one.png") },
  { id: 8, image: require("../../../assets/images/card-two.png") },
  { id: 9, image: require("../../../assets/images/card-three.png") },
];

const _renderItem = ({ item, index }) => {
  return (
    <View key={item.id}>
      <Image source={item.image} />
    </View>
  );
};

const StoresScreen = ({ navigation, route }) => {
  return (
    <ImageBackground
      source={require("../../../assets/images/hbac2.png")}
      style={{ width: "100%", height: "110%" }}
    >
      <View style={styles.container}>
        <Text
          style={{
            color: "#FFF",
            fontFamily: "Poppins-Bold",
            fontSize: 35,
            width: 200,
            alignSelf: "center",
            textAlign: "center",
            marginTop: 60,
          }}
        >
          Store
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.card}>
          <Text style={styles.subheadText}> Subscriptions </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.subheadText}> Deals of the Day </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.subheadText}> Coupons </Text>
        </View>
      </View>
      <View style={{ marginLeft: 20 }}>
        <Carousel
          style={{ borderRadius: "3" }}
          layout="default"
          firstItem={1}
          data={offers}
          renderItem={_renderItem}
          sliderWidth={width}
          itemWidth={180}
        ></Carousel>
      </View>
      <View style={{ marginTop: 10 }}>
        {coupons.map((coupon) => {
          return (
            <Coupon
              key={coupon.id}
              icon={coupon.icon}
              title={coupon.title}
              desc={coupon.desc}
            />
          );
        })}
      </View>
      <View style={{ marginTop: 30, marginLeft: 20 }}>
        <Carousel
          style={{ borderRadius: "3" }}
          layout="default"
          firstItem={1}
          data={offers}
          renderItem={_renderItem}
          sliderWidth={width}
          itemWidth={180}
        ></Carousel>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
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
    marginVertical: 30,
    marginHorizontal: 5,
    borderRadius: 10,
    height: 50,
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

export default StoresScreen;
