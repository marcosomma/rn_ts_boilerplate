import {
  View,
  Pressable,
  Text,
  GestureResponderEvent,
} from "react-native";
import { stylesCustomButton } from "../styles";

interface ButtonToGoProps {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  backgroundColor: string;
  isPrimaryButton?: boolean;
}

const CustomButton = (props: ButtonToGoProps) => {
  const styles = stylesCustomButton(props.backgroundColor, (props.isPrimaryButton || false));
  return (
    <View style={styles.mainViewerContainer}>
      <Pressable
        style={styles.button}
        android_ripple={{ color: "#fff" }}
        onPress={props.onPress}
      >
        <Text style={styles.buttonText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};
export default CustomButton;
