import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as authActions } from "../redux/modules/auth";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Image,
  FlatList
} from "react-native";
import { Colors, Images, Fonts, Constants } from "../themes";
import { FloatingLabelInput, BasicButton } from "../components";

class Login extends Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  state = {
    pass: "",
    email: ""
  };
  handleLogin = () => {
    const { authActions } = this.props;
    const { email, pass } = this.state;

    authActions.login(email, pass, false);
    Keyboard.dismiss(0);
  };

  handleTextChange = (field, newText) => this.setState({ [field]: newText });

  render() {
    const { auth } = this.props;
    return (
      <View style={styles.containerAll}>
        <Text style={Fonts.styles.title}>Hello App</Text>
        <Image source={Images.logo} style={styles.logo} />
        <View style={{ width: "80%" }}>
          <FloatingLabelInput
            label="Email"
            value={this.state.email}
            onChangeText={text => this.handleTextChange("email", text)}
          />
          <FloatingLabelInput
            label="Password"
            password
            value={this.state.pass}
            onChangeText={text => this.handleTextChange("pass", text)}
          />
          <BasicButton
            text="SIGN IN"
            onPress={() => this.handleLogin()}
            loading={auth.loading}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerAll: {
    alignItems: "center",
    paddingTop: Constants.heights.statusBar,
    flex: 1
  },

  logo: {
    height: 150,
    width: 150
  }
});

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators({ ...authActions }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
