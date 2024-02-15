import { useContext } from "react";

import { Text } from "react-native";

import MealsList from "../components/MealsList/MealsList";
import FavoritesContext from "../store/context/FavoritesContext";

import { MEALS } from "../../data/dummy-data";

function FavoritesScreen() {
  const { favoriteMealsIds } = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((item) => {
    return favoriteMealsIds.includes(item.id);
  });

  return (
    <>
      {favoriteMeals.length === 0 && (
        <Text className="mt-8 text-center text-lg font-bold text-white">
          No Favorites Meals Yet!
        </Text>
      )}
      {favoriteMeals.length > 0 && <MealsList meals={favoriteMeals} />}
    </>
  );
}

export default FavoritesScreen;
