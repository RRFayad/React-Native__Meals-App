import { View, Text } from "react-native";

function MealDetails({
  duration,
  complexity,
  affordability,
  ViewClassName,
  TextClassName,
}) {
  return (
    <View
      className={`flex-row items-center justify-center space-x-2 p-2 ${ViewClassName}`}
    >
      <Text className={`text-xs ${TextClassName}`}>{duration} min</Text>
      <Text className={`text-xs ${TextClassName}`}>
        {complexity.toUpperCase()}
      </Text>
      <Text className={`text-xs ${TextClassName}`}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;
