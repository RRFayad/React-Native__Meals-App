import { View, Pressable, Text } from "react-native";

function CategoryGridTile({ title, color }) {
  console.log(color);
  return (
    <View
      className={`m-4 h-[150px] flex-1 rounded-lg bg-white shadow-sm shadow-black `}
      style={{ elevation: 4, backgroundColor: color }}
    >
      <Pressable className="flex-1  rounded-lg active:opacity-50">
        <View className="flex-1 items-center justify-center p-4">
          <Text className=" text-lg font-bold">{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;
