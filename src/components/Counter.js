import React,{useState} from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const Counter = ({ onPress, text }) => {
  const [count, setCount] = useState(1);
  return (
    <View
      style={{
        width: 148,
        height: 48,
        marginTop: 10,
        borderRadius: 6,
      }}
    >
      <View
        style={{
          height: 48,
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 30,
          // alignItems: "center",
          // backgroundColor: "#ffffff",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            count <= 1 ? setCount(0) : setCount(count - 1);
          }}
        >
          <Image
            source={require("../../assets/images/minus.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: "#727cbe",
            fontFamily: "Inter-MediumItalic",
            fontSize: 15,
            lineHeight: 30,
          }}
        >
          {count}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setCount(count + 1);
          }}
        >
          <Image
            source={require("../../assets/images/add.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Counter;
