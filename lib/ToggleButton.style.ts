import { ViewStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  containerGlue: ViewStyle;
  activeButtonStyle: ViewStyle;
  inactiveButtonStyle: ViewStyle;
  activeTextStyle: TextStyle;
  inactiveTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    height: 30,
    width: 200,
    paddingTop: 5,
    paddingLeft: 3,
    paddingRight: 3,
    paddingBottom: 5,
    backgroundColor: "#070708",
    justifyContent: "center",
  },
  containerGlue: {
    flexDirection: "row",
    alignItems: "center",
  },
  activeButtonStyle: {
    flex: 1,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#414f50",
    backgroundColor: "#3c464a",
  },
  inactiveButtonStyle: {
    flex: 1,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  activeTextStyle: {
    color: "#477971",
  },
  inactiveTextStyle: {
    color: "#999998",
  },
});
