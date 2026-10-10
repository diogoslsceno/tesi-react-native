import { styles } from "@/components/DisciplineCard/style";
import { colors } from "@/styles/colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput, View, } from "react-native";
export default function Discipline() {
    return (
      <View style={styles.SearchContainer}>
        <Ionicons 
          name="search-outline"
          size={24}
          color={colors.icon.gray}
        />
        <TextInput style={styles.TextInputContent}></TextInput>
      </View>
    )
}