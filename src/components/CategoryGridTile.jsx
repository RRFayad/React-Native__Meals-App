import { View, Pressable, Text } from "react-native";

function CategoryGridTile({ title, color, onPress: pressHandler }) {
  return (
    <View
      className={`m-4 h-[150px] flex-1 rounded-lg  shadow-sm shadow-black  active:shadow-none`}
    >
      <Pressable
        className="flex-1  rounded-lg active:opacity-50 "
        style={{ elevation: 4, backgroundColor: color }}
        onPress={pressHandler}
      >
        <View className="flex-1 items-center justify-center p-4">
          <Text className=" text-lg font-bold">{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;
