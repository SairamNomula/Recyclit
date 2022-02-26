import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";

import Profile from "../index";
import Reward from "../Rewards";

const stackNavigatorOptions = {
  headerShown: false,
};

const AppNavigator = createStackNavigator(
  {
    Profile: { screen: Profile },
    Reward: { screen: Reward },
  },
  {
    defaultNavigationOptions: stackNavigatorOptions,
  }
);

export default createAppContainer(AppNavigator);
