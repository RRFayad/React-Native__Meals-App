import { View, Text } from "react-native";

function Subtitle({ children }) {
  return (
    <View className="mx-3 my-1 border-b-2 border-[#e2b497] p-[6px] ">
      <Text className=" text-center text-lg font-bold text-[#e2b497]">
        {children}
      </Text>
    </View>
  );
}

export default Subtitle;
