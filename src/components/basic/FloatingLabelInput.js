import React, { Component } from "react";
import {
  View,
  StatusBar,
  TextInput,
  Animated,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Colors, Fonts } from "../../themes";

export default class FloatingLabelInput extends Component {
  state = {
    isFocused: false
  };

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(
      this.props.value === "" ? 0 : 1
    );
  }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused || this.props.value !== "" ? 1 : 0,
      duration: 200
    }).start();
  }

  render() {
    const { label, small, keyboardType = "default", ...props } = this.props;
    const size = small ? 12 : 14;
    const labelStyle = {
      position: "absolute",
      left: 0,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [Fonts.size.dp9, 0]
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [Fonts.size.dp9, size]
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ["#000", Colors.lightgrey]
      })
    };
    return (
      <View style={{ paddingTop: 18, marginTop: small ? 15 : 20 }}>
        <Animated.Text style={labelStyle}>{label}</Animated.Text>
        <TextInput
          {...props}
          allowFontScaling={false}
          autoCapitalize="none"
          pointerEvents={this.props.disabled ? "none" : "auto"}
          editable={!this.props.disabled}
          selectTextOnFocus={!this.props.disabled}
          secureTextEntry={this.props.password}
          style={{
            height: 26,
            fontSize: Fonts.size.dp9,
            color: "#000",
            fontFamily: Fonts.type.Book,
            borderBottomWidth: 1,
            borderBottomColor: Colors.skyblue,
            letterSpacing: 0.18
          }}
          keyboardType={keyboardType}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
      </View>
    );
  }
}
