import { StyleSheet } from "react-native";
import colors from "./colors";

/**
 * Returns the styles for the HomeScreen component.
 * @returns {StyleSheet.NamedStyles<any>} The named styles object.
 */
const stylesHomeScreen = (): StyleSheet.NamedStyles<any> =>
  StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center"
      },
      appTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.secondary,
      },
      author: {
        fontSize: 12,
        color: "#fff",
      },
    });

export default stylesHomeScreen;
