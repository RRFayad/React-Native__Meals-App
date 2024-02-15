import { useLayoutEffect } from "react";
import { View, FlatList } from "react-native";

import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";

import { MEALS, CATEGORIES } from "../../data/dummy-data";

function MealsOverViewScreen({ navigation, route, name, params, path }) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) > -1,
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId,
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return <MealsList meals={displayedMeals} />;
}

export default MealsOverViewScreen;
