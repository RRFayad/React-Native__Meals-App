import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import CategoriesScreen from "./src/screens/CategoriesScreen";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <CategoriesScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
