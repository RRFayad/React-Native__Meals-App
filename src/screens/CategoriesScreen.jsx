import { FlatList } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../../data/dummy-data";

function CategoriesScreen({ navigation }) {
  // navigation prop comes from the Stack.Screen component
  const pressHandler = () => {
    navigation.navigate("MealsOverview");
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item, index) => index}
      renderItem={(itemData) => (
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={pressHandler}
        />
      )}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
