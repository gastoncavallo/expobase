import colors from "./Colors";

const type = {
  Bold: "Gentona-Bold",
  Book: "Gentona-Book",
  BookItalic: "Gentona-BookItalic",
  Light: "Gentona-Light",
  Medium: "Gentona-Medium",
  SemiBold: "Gentona-SemiBold"
};

const size = {
  dp5: 11,
  dp6: 12,
  dp7: 14,
  dp8: 15,
  dp9: 17,
  dp10: 18,
  dp11: 20,
  dp12: 22
};
const styles = {
  title: {
    fontSize: size.dp9,
    lineHeight: size.dp10,
    fontFamily: type.SemiBold,
    letterSpacing: 0.2
  },
  subtitle: {
    fontSize: size.dp7,
    fontFamily: type.Book
  }
};

export default {
  type,
  size,
  styles
};
