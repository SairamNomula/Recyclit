import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HistorysScreen from "../screens/history/Hist";

const HistoryStack = ({ params }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HistorysScreen"
        component={HistorysScreen}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
};

export default HistoryStack;
