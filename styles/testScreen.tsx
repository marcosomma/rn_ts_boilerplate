import { StyleSheet } from "react-native";
import colors from "./colors";

/**
 * Returns the styles for the TestScreen component.
 * @returns {StyleSheet.NamedStyles<any>} The named styles object.
 */
const stylesTestScreen = (): StyleSheet.NamedStyles<any> =>
StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      backgroundColor: colors.secondary,
      justifyContent: "center",
      alignItems: "center"
    },
    appTitle: {
      fontSize: 24,
      fontWeight: "bold",
      color: colors.primary,
    },
    author: {
      fontSize: 12,
      color: colors.error,
    },
  })

export default stylesTestScreen;
