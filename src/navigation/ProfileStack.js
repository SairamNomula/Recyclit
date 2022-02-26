import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfilesScreen from "../screens/profile/index";
import RewardScreen from "../screens/profile/Rewards";

const ProfileStack = ({ params }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfilesScreen"
        component={ProfilesScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name="RewardScreen"
        component={RewardScreen}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
