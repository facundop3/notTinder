import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import ChatsScreen from "../screens/ChatsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ProfileEditScreen from "../screens/ProfileEditScreen";
import SettingsScreen from "../screens/SettingsScreen";
import GoldScreen from "../screens/GoldScreen";

const Stack = createStackNavigator({
  Home: HomeScreen,
  Chat: ChatsScreen,
  Profile: ProfileScreen,
  ProfileEditScreen,
  SettingsScreen,
  GoldScreen
});

export default Stack;
