import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import ChatsScreen from "../screens/ChatsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator({
  Home: HomeScreen,
  Chat: ChatsScreen,
  Profile: ProfileScreen
});

export default Stack;
