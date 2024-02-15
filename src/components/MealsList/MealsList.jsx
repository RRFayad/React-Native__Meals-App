import { View, FlatList, Text } from "react-native";

import MealItem from "./MealItem";

function MealsList({ meals: displayedMeals }) {
  return (
    <View className="flex-1 p-4">
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          return (
            <MealItem
              id={itemData.item.id}
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

export default MealsList;
