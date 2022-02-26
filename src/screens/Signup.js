import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  Platform,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const Signup = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <ImageBackground
      source={require("../../assets/images/logbac.png")}
      style={styles.bacStyle}
    >
      <StatusBar hidden />
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/prof.png")}
          style={styles.log}
        />
      </View>
      <View style={{ paddingHorizontal: 59, marginTop: 200 }}>
        <Text style={styles.headText}>Hello, New User</Text>
      </View>
      <View style={styles.algn}>
        <Text style={styles.textHd}>First Name</Text>
        <View style={styles.action}>
          <FontAwesome name="user" color="#3b3b3b" size={24} />
          <TextInput
            placeholder="Your FirstName"
            style={styles.textInput}
            autoCapitalize="none"
          />
        </View>

        <Text style={[styles.textHd, { marginTop: 25 }]}>Last Name</Text>
        <View style={styles.action}>
          <FontAwesome name="user" color="#3b3b3b" size={24} />
          <TextInput
            placeholder="Your LastName"
            style={styles.textInput}
            autoCapitalize="none"
          />
        </View>
        <Text style={[styles.textHd, { marginTop: 25 }]}>Email ID</Text>
        <View style={styles.action}>
          <FontAwesome name="envelope" color="#3b3b3b" size={24} />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="#3b3b3b" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.textHd, { marginTop: 25 }]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#3b3b3b" size={24} />
          <TextInput
            placeholder="Your Password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="#3b3b3b" size={20} />
            ) : (
              <Feather name="eye" color="#3b3b3b" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <LinearGradient colors={["#7f8c8d", "#3b3b3b"]} style={styles.logIn}>
            <Text
              style={[styles.textSign, { color: "#fff" }]}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              Sign Up
            </Text>
          </LinearGradient>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "#3b3b3b" }}>
            I'm already a member,{" "}
          </Text>
          <Text
            style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            Log In
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bacStyle: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  log: {
    width: 120,
    height: 120,
    alignItems: "center",
  },
  logoContainer: {
    width: width,
    position: "absolute",
    top: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  headText: {
    fontSize: 40,
    fontFamily: "Poppins-Bold",
    color: "#fff",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 55,
    marginTop: 55,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderWidth: 2,
    borderRadius: 23,
    borderColor: "#fff",
  },
  textHd: {
    color: "#fff",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    paddingBottom: 5,
  },
  algn: {
    flex: 3,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS ? 0 : -12,
    paddingLeft: 10,
    color: "#fff",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  logIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Signup;
