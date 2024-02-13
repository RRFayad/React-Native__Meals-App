import { useLayoutEffect } from "react";
import { View, FlatList } from "react-native";

import MealItem from "../components/MealItem";

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

  return (
    <View className="flex-1 p-4">
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          return (
            <MealItem
              title={itemData.item.title}
              imageUrl={itemData.item.imageUrl}
              affordability={itemData.item.affordability}
              complexity={itemData.item.complexity}
              duration={itemData.item.duration}
            />
          );
        }}
      />
    </View>
  );
}

export default MealsOverViewScreen;
