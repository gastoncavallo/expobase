import React from "react";
import { BackHandler, Platform } from "react-native";
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import { createReduxBoundAddListener } from "react-navigation-redux-helpers";
import { connect } from "react-redux";
import MainStack from "./MainStack";

class ReduxNavigation extends React.Component {
  componentDidMount() {
    if (Platform.OS === "ios") return;
    BackHandler.addEventListener("hardwareBackPress", () => {
      const { dispatch, nav, app } = this.props;
      // change to whatever is your first screen, otherwise unpredictable results may occur
      // if (nav.routes[0].routeName === "Login") {
      //   return false;
      // }
      // if (shouldCloseApp(nav)) return false
      dispatch({ type: "Navigation/BACK" });
      return true;
    });
  }

  componentWillUnmount() {
    if (Platform.OS === "ios") return;
    BackHandler.removeEventListener("hardwareBackPress");
  }

  render() {
    const { dispatch, nav } = this.props;

    return (
      <MainStack
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener: createReduxBoundAddListener("root")
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});
export default connect(mapStateToProps)(ReduxNavigation);
