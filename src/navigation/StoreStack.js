import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StoresScreen from "../screens/store/Mart";

const StoreStack = ({ params }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StoresScreen"
        component={StoresScreen}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
};

export default StoreStack;
