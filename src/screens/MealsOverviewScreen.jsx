import { View, FlatList } from "react-native";

import MealItem from "../components/MealItem";

import { MEALS } from "../../data/dummy-data";

function MealsOverViewScreen({ navigation, route, name, params, path }) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) > -1,
  );

  return (
    <View className="flex-1 p-4">
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          return <MealItem title={itemData.item.title} />;
        }}
      />
    </View>
  );
}

export default MealsOverViewScreen;
