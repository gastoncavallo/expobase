import { Dimensions } from "react-native";
import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import Login from "../containers/Login";
import Dashboard from "../containers/Dashboard";

// import Drawer from "./Drawer";

const Authenticated = StackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        drawerLockMode: "locked-closed"
      })
    },
    Dashboard: {
      screen: Dashboard
    }
  },
  {
    // Default config for all screens
    headerMode: "screen",
    initialRouteName: "Login"
    // block back ios
    // navigationOptions: {
    //   gesturesEnabled: false
    // }
  }
);

export default DrawerNavigator(
  {
    Authenticated
  },
  {
    // contentComponent: Drawer,
    // drawerPosition: "right",
    // drawerWidth: Dimensions.get("window").width
  }
);
