import { ScrollView, Text, View } from "react-native";

function List({ listItems }) {
  return listItems.map((item, index) => (
    <View key={index} className="mx-3 my-1 rounded-md bg-[#e2b497] px-2 py-1">
      <Text className=" text-center text-[#351401]">{item}</Text>
    </View>
  ));
}

export default List;
