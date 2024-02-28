import React, { useLayoutEffect, useState, useContext } from "react";
import { View, Text } from "react-native";
import { StateContext } from "../context/providers/State";
import { CustomButton } from "../components";
import { AppCustomProps } from "../_types";
import { stylesTestScreen, colors } from "../styles";

const TestScreen = (props: AppCustomProps) => {
  const [isTitelSet, setIsTitleSet] = useState(false);
  const { actionsCollection } = useContext(StateContext);

  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: colors.secondary400,
      statusBarColor: colors.secondary400,
    });
    setIsTitleSet(true);
  }, [isTitelSet]);

  const styles = stylesTestScreen();
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Test Screen</Text>
      <Text style={styles.appTitle}>rn_ts_boilerplate</Text>
      <Text style={styles.author}>2024 @marcosomma</Text>
      <CustomButton
        text="Vote for this screen"
        onPress={() => actionsCollection?.example?.test({ screen: "test" })}
        backgroundColor={colors.primary100}
        isPrimaryButton={true}
      />
      <CustomButton
        text='<< Back "Home" Screen'
        onPress={() => navigation.navigate("HomeScreen")}
        backgroundColor={colors.primary100}
      />
    </View>
  );
};

export default TestScreen;
