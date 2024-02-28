import { StatusBar } from "expo-status-bar";
import StateContextProvider from "./context/providers/State";
import { StackNavigator } from "./navigators";
import { colors } from "./styles";

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor={colors.primary} />
      <StateContextProvider>
        <StackNavigator />
      </StateContextProvider>
    </>
  );
}
