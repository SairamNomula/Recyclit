import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";

import Book from "../index";
import Track from "../Track";
import Anim from "../Anim";

const stackNavigatorOptions = {
  headerShown: false,
};

const AppNavigator = createStackNavigator(
  {
    Book: { screen: Book },
    Track: { screen: Track },
    Anim: { screen: Anim },
  },
  {
    defaultNavigationOptions: stackNavigatorOptions,
  }
);

export default createAppContainer(AppNavigator);
