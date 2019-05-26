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

class Dashboard extends Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  render() {
    const { auth } = this.props;
    return (
      <View style={styles.containerAll}>
        <Text style={Fonts.styles.title}>hola soy un Dashboard</Text>
        <Image source={Images.logo} style={styles.logo} />
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
)(Dashboard);
