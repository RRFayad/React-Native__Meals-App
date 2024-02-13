import { useLayoutEffect } from "react";
import { Text } from "react-native";

import { MEALS } from "../../data/dummy-data";

function MealDetailsScreen({ navigation, route }) {
  const meal = MEALS.find((item) => item.id === route.params.mealId);

  console.log(meal);

  useLayoutEffect(() => {
    navigation.setOptions({ title: meal.title });
  }, [navigation]);

  return (
    <Text className="text-white">This is the {meal.title} detailed screen</Text>
  );
}

export default MealDetailsScreen;
