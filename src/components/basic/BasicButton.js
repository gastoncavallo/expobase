import React from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Keyboard
} from "react-native";
import { Button } from "react-native-elements";

import { Colors, Fonts } from "../../themes";

const BasicButton = ({
  loading,
  onPress,
  text,
  color = false,
  backgroundColor = false,
  height = false,
  fontSize = false,
  fontFamily = false,
  borderRadius = false
}) => (
  <Button
    onPress={onPress}
    title={text}
    onSubmit={Keyboard.dismiss}
    buttonStyle={[
      styles.container,
      backgroundColor && { backgroundColor: backgroundColor },
      height && { height: height },
      borderRadius && { borderRadius: height }
    ]}
    containerStyle={styles.containerButton}
    titleStyle={[
      styles.text,
      fontSize && { fontSize: fontSize },
      fontFamily && { fontFamily: fontFamily }
    ]}
    loading={loading}
    disabled={loading}
  />
);

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    height: 50,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 25,
    backgroundColor: Colors.skyblue
  },
  text: {
    fontFamily: Fonts.type.Medium,
    fontSize: Fonts.size.dp9
  },
  containerButton: {
    marginLeft: 0,
    marginRight: 0,
    width: "100%"
  }
});

export default BasicButton;
