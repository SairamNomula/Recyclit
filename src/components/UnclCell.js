import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const UnclCell = ({image,onPress}) => {
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
          backgroundColor: "#e0e0e0",
        }}
      >
        <Image
          source={image}
          style={{ width: 20, height: 15 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default UnclCell;
