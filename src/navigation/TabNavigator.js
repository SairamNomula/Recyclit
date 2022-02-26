import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import BookingStack from "./BookingStack";
import StoreStack from "./StoreStack";
import HistoryStack from "./HistoryStack";
import ProfileStack from "./ProfileStack";

const TabNavigator = ({ params }) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 60,
          borderRadius: 20,
          backgroundColor: "#eaeaea",
        },
      })}
    >
      <Tab.Screen
        name="Main"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: "Welcome",
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/home-active.png")
                  : require("../../assets/images/home.png")
              }
              style={{
                width: 35,
                height: 35,
              }}
            ></Image>
          ),
        }}
      />

      <Tab.Screen
        name="Book"
        component={BookingStack}
        options={{
          headerShown: false,
          tabBarLabel: "Purchase",
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/book-active.png")
                  : require("../../assets/images/book.png")
              }
              style={{
                width: 35,
                height: 35,
              }}
            ></Image>
          ),
        }}
      />

      <Tab.Screen
        name="Mart"
        component={StoreStack}
        options={{
          headerShown: false,
          tabBarLabel: "Store",
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/mart-active.png")
                  : require("../../assets/images/mart.png")
              }
              style={{
                width: 35,
                height: 35,
              }}
            ></Image>
          ),
        }}
      />

      <Tab.Screen
        name="History"
        component={HistoryStack}
        options={{
          headerShown: false,
          tabBarLabel: "History",
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/history-active.png")
                  : require("../../assets/images/history.png")
              }
              style={{
                width: 35,
                height: 35,
              }}
            ></Image>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/prof-active.png")
                  : require("../../assets/images/prof.png")
              }
              style={{
                width: 35,
                height: 35,
              }}
            ></Image>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
