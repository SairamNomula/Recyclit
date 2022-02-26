import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const ClCell = ({onPress,text}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 20,
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 13,
          borderRadius: 10,
          marginTop: 30,
          backgroundColor: "#c9e7cb",
        }}
      >
        <Text style={{ width: 20, height: 15, textAlign:'center' }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default ClCell;
