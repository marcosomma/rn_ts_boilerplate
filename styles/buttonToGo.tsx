import { StyleSheet } from "react-native";
import colors from "./colors";

/**
 * Creates a custom button style object.
 * @param backgroundColor - The background color of the button.
 * @param isPrimaryButton - Optional. Specifies if the button is a primary button.
 * @returns The custom button style object.
 */
const stylesCustomButton = (
  backgroundColor: string,
  isPrimaryButton?: boolean
) =>
  StyleSheet.create({
    mainViewerContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 3,
      borderColor: isPrimaryButton ? colors.gray800 : colors.gray,
      paddingLeft: 16,
      paddingRight: 26,
      marginTop: 10,
      borderRadius: 20,
      backgroundColor: isPrimaryButton ? backgroundColor : colors.error,
      elevation: 5,
    },
    button: {
      flex: 1,
      height: 80,
      maxWidth: 200,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      fontSize: 18,
      fontWeight: "bold",
      color: isPrimaryButton ? colors.gray800 : colors.gray,
    },
  });

export default stylesCustomButton;
