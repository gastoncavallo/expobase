import { Constants } from "expo";
import { Dimensions, Platform } from "react-native";

const isSpace = Platform.OS == "ios" && Constants.statusBarHeight > 20;

const heights = {
  statusBar: Constants.statusBarHeight,
  headerContent: 50,
  topbar: 40,
  bottomButton: isSpace ? 65 : 55,
  pageHeight: Dimensions.get("window").height,
  footerSpace: isSpace ? 15 : 0
};
const header = heights.statusBar + heights.headerContent;

const page = {
  withButtom: heights.pageHeight - heights.bottomButton,
  headerWithButtom: heights.pageHeight - heights.bottomButton - header,
  header: heights.pageHeight - header,
  headerWithTopbar: heights.pageHeight - header - heights.topbar
};

export default {
  heights,
  page
};
