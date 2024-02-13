import { useLayoutEffect } from "react";
import { Text, View, Image, ScrollView } from "react-native";

import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import IconButton from "../components/IconButtons";

import { MEALS } from "../../data/dummy-data";

function MealDetailsScreen({ navigation, route }) {
  const meal = MEALS.find((item) => item.id === route.params.mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <IconButton
          color={"white"}
          icon={"star"}
          onPress={() => console.log("ihaaa")}
        />
      ),
    });
  }, [navigation, meal]);

  return (
    <ScrollView className="mb-8">
      <Image source={{ uri: meal.imageUrl }} className="h-[350px] w-[100%]" />
      <Text className="m-2 text-center text-2xl font-bold text-white">
        {meal.title}
      </Text>
      <MealDetails
        affordability={meal.affordability}
        complexity={meal.complexity}
        duration={meal.duration}
        TextClassName={"text-white"}
      />
      <View className="mx-auto max-w-[80%]">
        <Subtitle>Ingredients</Subtitle>
        <List listItems={meal.ingredients} />
        <Subtitle>Steps</Subtitle>
        <List listItems={meal.steps} />
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;
