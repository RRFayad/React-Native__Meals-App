import { View, Text, Pressable, Image } from "react-native";

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
  return (
    <View
      className="  m-4 rounded-lg bg-white shadow-sm shadow-black"
      style={{ elevation: 4 }}
    >
      <Pressable className="rounded-lg active:opacity-60">
        <View>
          <Image
            source={{ uri: imageUrl }}
            className="h-[200px] w-[100%] rounded-lg"
          />
        </View>
        <Text className="m-2 text-center text-lg font-bold">{title}</Text>
        <View className="flex-row items-center justify-center space-x-2 p-2">
          <Text className="text-xs">{duration} m</Text>
          <Text className="text-xs">{complexity.toUpperCase()}</Text>
          <Text className="text-xs">{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;
