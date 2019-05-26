import React from "react";
import { Provider } from "react-redux";
import { Font, AppLoading } from "expo";
import { Text, TextInput, StatusBar } from "react-native";
import store from "./src/redux";
import ReduxNavigation from "./src/navigation/ReduxNavigation";

if (Text.defaultProps == null) Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;
if (TextInput.defaultProps == null) TextInput.defaultProps = {};
TextInput.defaultProps.allowFontScaling = false;

console.disableYellowBox = true;

export default class App extends React.Component {
  state = {
    fontsLoaded: false
  };
  async componentWillMount() {
    await Font.loadAsync({
      "Gentona-Bold": require("./assets/fonts/Gentona-Bold.ttf"),
      "Gentona-Book": require("./assets/fonts/Gentona-Book.ttf"),
      "Gentona-BookItalic": require("./assets/fonts/Gentona-BookItalic.ttf"),
      "Gentona-Light": require("./assets/fonts/Gentona-Light.ttf"),
      "Gentona-Medium": require("./assets/fonts/Gentona-Medium.ttf"),
      "Gentona-SemiBold": require("./assets/fonts/Gentona-SemiBold.ttf")
    });
    this.setState({ fontsLoaded: true });
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <ReduxNavigation />
      </Provider>
    );
  }
}
