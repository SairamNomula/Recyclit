import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import ClCell from "../../components/ClCell";
import UnclCell from "../../components/UnclCell";

export default class RewardScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/hbac4.png")}
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
            onPress={() => this.props.navigation.navigate("ProfilesScreen")}
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
          <Text style={styles.headText}>Rewards</Text>
        </View>
        <View style={{ marginTop: 10, flexDirection: "row" }}>
          <View>
            <UnclCell image={require("../../../assets/images/tick.png")} />
          </View>
          <View>
            <UnclCell image={require("../../../assets/images/tick.png")} />
          </View>
          <View>
            <ClCell text={3} />
          </View>
          <View>
            <ClCell text={4} />
          </View>
          <View>
            <ClCell text={5} />
          </View>
        </View>
        <View style={{ margin: 20 }}>
          <Image
            source={require("../../../assets/images/card-one.png")}
            style={{ width: 300, height: 150, marginLeft: 50 }}
          />
        </View>
        <Text
          style={{
            fontFamily: "Inter-MediumItalic",
            fontSize: 25,
            marginLeft: 20,
          }}
        >
          My Rewards
        </Text>
        <View style={{ marginTop: 30, alignItems: "center" }}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../../assets/images/card-one.png")}
              style={{ width: 100, height: 100 }}
            />
            <Image
              source={require("../../../assets/images/book.png")}
              style={{ width: 100, height: 100, marginLeft: 50 }}
            />
          </View>
          <View style={{ flexDirection: "row", marginTop: 50 }}>
            <Image
              source={require("../../../assets/images/book.png")}
              style={{ width: 100, height: 100 }}
            />
            <Image
              source={require("../../../assets/images/book.png")}
              style={{ width: 100, height: 100, marginLeft: 50 }}
            />
          </View>
        </View>
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
});
