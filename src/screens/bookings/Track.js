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
import { Icon } from "react-native-elements";
import { colors, parameters } from "../../components/styles";

export default class TrackScreen extends React.Component {
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
            onPress={() => this.props.navigation.navigate("BookingsScreen")}
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
          <Text style={styles.headText}>Track</Text>
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("TrackScreen")}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              height: 50,
              backgroundColor: colors.grey6,
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 55,
              borderRadius: 10,
            }}
          >
            <View style={{ marginLeft: 10 }}>
              <Icon
                type="material-community"
                name="pin-outline"
                color={colors.lightgreen}
                size={26}
              />
            </View>
            <Text
              style={{
                marginRight: 85,
                fontSize: 20,
                color: colors.black,
              }}
            >
              Current Location
            </Text>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "Inter-MediumItalic",
            fontSize: 25,
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          Saved Addresses
        </Text>

        <View style={styles.addContainer}>
          <View style={styles.addFlex}>
            <View style={styles.addressView}>
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.black}
                size={22}
              />
            </View>
            <View>
              <Text style={{ fontSize: 18, color: colors.black }}>
                ABC Street
              </Text>
              <Text style={{ color: colors.grey3 }}>Khammam, Telengana</Text>
            </View>
          </View>
          <View>
            <Icon
              type="material-community"
              name="chevron-right"
              color={colors.grey}
              size={26}
            />
          </View>
        </View>

        <View style={styles.addContainer}>
          <View style={styles.addFlex}>
            <View style={styles.addressView}>
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.black}
                size={22}
              />
            </View>
            <View>
              <Text style={{ fontSize: 18, color: colors.black }}>
                DEF Street
              </Text>
              <Text style={{ color: colors.grey3 }}>
                Bilaspur, Chhattisgarh
              </Text>
            </View>
          </View>
          <View>
            <Icon
              type="material-community"
              name="chevron-right"
              color={colors.grey}
              size={26}
            />
          </View>
        </View>

        <View style={styles.addContainer}>
          <View style={styles.addFlex}>
            <View style={styles.addressView}>
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.black}
                size={22}
              />
            </View>
            <View>
              <Text style={{ fontSize: 18, color: colors.black }}>
                GHI Street
              </Text>
              <Text style={{ color: colors.grey3 }}>Chennai, Tamil Nadu</Text>
            </View>
          </View>
          <View>
            <Icon
              type="material-community"
              name="chevron-right"
              color={colors.grey}
              size={26}
            />
          </View>
        </View>

        <View style={styles.addContainer}>
          <View style={styles.addFlex}>
            <View style={styles.addressView}>
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.black}
                size={22}
              />
            </View>
            <View>
              <Text style={{ fontSize: 18, color: colors.black }}>
                JKL Street
              </Text>
              <Text style={{ color: colors.grey3 }}>Panaji, Goa</Text>
            </View>
          </View>
          <View>
            <Icon
              type="material-community"
              name="chevron-right"
              color={colors.grey}
              size={26}
            />
          </View>
        </View>

        {/* <TouchableOpacity
          onPress={() => this.props.navigation.navigate("AnimScreen")}
        >
          <LinearGradient colors={["#7f8c8d", "#3b3b3b"]} style={styles.logIn}>
            <Text style={[styles.textSign, { color: "#fff" }]}>
              Using Current Location
            </Text>
          </LinearGradient>
        </TouchableOpacity> */}
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
    width: 200,
    alignSelf: "center",
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
  addContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 25,
    justifyContent: "space-between",
    marginHorizontal: 15,
    borderBottomColor: colors.grey4,
    borderBottomWidth: 1,
  },
  addFlex: {
    alignItems: "center",
    flex: 5,
    flexDirection: "row",
  },
  addressView: {
    backgroundColor: colors.grey6,
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
});
