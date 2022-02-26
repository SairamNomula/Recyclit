import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BookingsScreen from "../screens/bookings/index";
import TrackScreen from "../screens/bookings/Track";
import AnimScreen from '../screens/bookings/Anim';

const BookingStack = ({ params }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BookingsScreen"
        component={BookingsScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name="TrackScreen"
        component={TrackScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name="AnimScreen"
        component={AnimScreen}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
};

export default BookingStack;
