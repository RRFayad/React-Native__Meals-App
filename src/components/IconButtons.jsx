import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, color, onPress: pressHandler }) {
  return (
    <Pressable onPress={pressHandler} className="active:opacity-50">
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;
