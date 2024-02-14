import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MealsOverViewScreen from "./src/screens/MealsOverviewScreen";
import MealDetailsScreen from "./src/screens/MealDetailsScreen";
import DrawerNavigator from "./src/components/DrawerNavigator";
import { FavoritesContextProvider } from "./src/store/context/FavoritesContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <FavoritesContextProvider>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="DrawerMealsCategories"
              options={{
                headerShown: false,
              }}
              component={DrawerNavigator}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverViewScreen}
            />
            <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
          </Stack.Navigator>
        </FavoritesContextProvider>
      </NavigationContainer>
    </>
  );
}
