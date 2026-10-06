import { colors } from "@/styles/colors"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Text, View } from "react-native"
import { styles } from "./styles"

export function SummaryCard() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <MaterialCommunityIcons
          name="clipboard-alert"
          color={colors.orange}
          size={26}
        />
        <Text style={styles.textRow}>3</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.titleContent}>Pendências</Text>
        <Text style={styles.subtitleContent}>Para essa semana</Text>
      </View>
    </View>
  )
}
