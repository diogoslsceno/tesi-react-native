import { colors } from "@/styles/colors"
import { Ionicons } from "@expo/vector-icons"
import { TextInput, View } from "react-native"
import { styles } from "./style"

type SearchBarProps = {
  placeholder: string
  value: string
  onChangeText: (text: string) => void
}

export default function SearchBar({
  value,
  placeholder,
  onChangeText,
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="search-outline" size={20} color={colors.icon.gray} />
      </View>
      <TextInput
        style={styles.TextInputContent}
        placeholder={placeholder}
        placeholderTextColor={colors.text.segondary}
        value={value}
        onChangeText={onChangeText}
        returnKeyType="search"
        underlineColorAndroid="transparent"
      />
    </View>
  )
}
