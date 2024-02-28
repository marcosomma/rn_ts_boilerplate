import { useContext } from "react";
import { View, Text } from "react-native";
import { StateContext } from "../context/providers/State";
import { CustomButton } from "../components";
import { AppCustomProps } from "../_types";
import { stylesHomeScreen, colors } from "../styles";

const HomeScreen = (props: AppCustomProps) => {
  const { navigation } = props;
  const { actionsCollection } = useContext(StateContext);

  const styles = stylesHomeScreen();
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Home Screen</Text>
      <Text style={styles.appTitle}>rn_ts_boilerplate</Text>
      <Text style={styles.author}>2024 @marcosomma</Text>
      <CustomButton
        text="Vote for this screen"
        onPress={() => actionsCollection?.example?.test({ screen: "home"})}
        backgroundColor={colors.secondary}
        isPrimaryButton={true}
      />
      <CustomButton
        text='Go to "Test" Screen >>'
        onPress={() => navigation.navigate("TestScreen")}
        backgroundColor={colors.secondary}
      />
    </View>
  );
};

export default HomeScreen;
